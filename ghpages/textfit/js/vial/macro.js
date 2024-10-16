////////////////////////////////////
//
//  Vial Macros: Parsing, Pushing.
//
////////////////////////////////////

Vial.macro = (function() {
  const MACRO_IDS = {
    1: "tap", tap: 1,
    2: "down", down: 2,
    3: "up", up: 3,
  }

  const MACRO_DELAY = 4;

  const MACRO_DOUBLES = {
    5: 'tap', tap: 5,
    6: 'down', down: 6,
    7: 'up', up: 7,
  }

  const QMK_EXT_ID = 1;

  return {
    async get(kbinfo) {
      // Macros are stored as one big chunk of memory, at 28 bytes per fetch.
      // null-separated. In svalboard, it's 795 bytes.
      const macro_memory = await Vial.USB.getViaBuffer(
          Vial.USB.CMD_VIA_MACRO_GET_BUFFER,
          kbinfo.macros_size,
          {slice: 4, uint8: true, bytes: 1}
      );

      const raw_macros = Vial.macro.split(kbinfo, macro_memory);
      kbinfo.macros = raw_macros.map((macro, mid) => Vial.macro.parse(kbinfo, mid, macro));
    },
    async push(kbinfo) {
      // Macros are stored as one big chunk of memory, at 28 bytes per fetch.
      // null-separated. In svalboard, it's 795 bytes.
      const raw = Vial.macro.dump(kbinfo.macros_size, kbinfo.macros);
      const macro_memory = await Vial.USB.pushViaBuffer(
        Vial.USB.CMD_VIA_MACRO_SET_BUFFER,
        kbinfo.macros_size,
        raw
      );
    },
    split(kbinfo, rawbuffer) {
      let offset = 0;
      let macros = [];
      let macronum = 0;
      while (macronum < kbinfo.macro_count && offset < rawbuffer.length) {
        const start = offset;
        while (rawbuffer[offset] != 0) offset++;
        macros.push(rawbuffer.slice(start, offset));
        macronum++;
        offset++;
      }
      return macros;
    },
    parse(kbinfo, mid, rawmacro) {
      const actions = [];
      let offset = 0;
      let id = 0;
      while (offset < rawmacro.length) {
        const action = {};
        if (rawmacro[offset] === QMK_EXT_ID) {
          const type = rawmacro[offset+1];
          if (type in MACRO_IDS) {
            actions.push([
              MACRO_IDS[type],
              KEY.stringify(rawmacro[offset+2]),
            ]);
            offset += 3;
          } else if (type === MACRO_DELAY) {
            // I'm not sure why delay has this weird math, but I'm
            // just copying it from the python code. /shrug
            actions.push([
              'delay',
              (rawmacro[offset+2] - 1) + ((rawmacro[offset+3] - 1) * 255),
            ]);
            offset += 4;
          } else if (type in MACRO_DOUBLES) {
            actions.push([
              MACRO_DOUBLES[type],
              KEY.stringify(rawmacro[offset+2] + (rawmacro[offset+3] << 8)),
            ]);
            offset += 4;
          }
        } else if (rawmacro[offset] === 0) {
          return actions;
        } else {
          const start = offset;
          while (offset < rawmacro.length && rawmacro[offset] > 4) offset++;
          const newbuffer = new Uint8Array(rawmacro.slice(start, offset));
          const dv = new DataView(newbuffer.buffer);
          const decoder = new TextDecoder();
          actions.push([
            'text',
            decoder.decode(dv),
          ]);
        }
      }
      return {
        mid: mid,
        actions: actions,
      };
    },
    dump(size, macros) {
      const buffer = new ArrayBuffer(size);
      // return buffer;
      let dv = new DataView(buffer);
      let offset = 0;
      for (let mid = 0; mid < macros.length; mid++) {
        const macro = macros[mid];
        for (const action of macro.actions) {
          if (action[0] === 'text') {
            const encoder = new TextEncoder();
            const textbuffer = new Uint8Array(encoder.encode(action[1]));
            for (let idx = 0; idx < textbuffer.length; idx++) {
              dv.setUint8(offset++, textbuffer[idx]);
            }
          } else if (action[0] === 'delay') {
            dv.setUint8(offset++, QMK_EXT_ID);
            dv.setUint8(offset++, MACRO_DELAY);
            dv.setUint8(offset++, (action[1] % 255) + 1);
            dv.setUint8(offset++, Math.floor(action[1] / 255) + 1);
          } else if (action[0] in MACRO_IDS) {
            const value = KEY.parse(action[1]);
            dv.setUint8(offset++, QMK_EXT_ID);
            if (value >= 0x100) {
              dv.setUint8(offset++, MACRO_DOUBLES[action[0]]);
              dv.setUint8(offset++, value & 0xFF);
              dv.setUint8(offset++, (value >> 8) & 0xFF);
            } else {
              dv.setUint8(offset++, MACRO_IDS[action[0]]);
              dv.setUint8(offset++, value);
            }
          }
        }
        dv.setUint8(offset++, 0);
      }
      return buffer;
    },
  };
})();
