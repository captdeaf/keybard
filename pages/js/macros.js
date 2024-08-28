////////////////////////////////////
//
//  Macros: Parsing, Recording, Building, Saving, Pushing.
//
////////////////////////////////////

const MACRO_IDS = {
  1: "tap", tap: 1,
  2: "down", down: 2,
  3: "up", up: 3,
}

const MACRO_DOUBLES = {
  5: 'tap', tap: 5,
  6: 'down', down: 6,
  7: 'up', up: 7,
}

const QMK_EXT_ID = 1;

const MACROS = {
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
  parse(kbinfo, rawmacro) {
    const actions = [];
    let offset = 0;
    while (offset < rawmacro.length) {
      const action = {};
      if (rawmacro[offset] === QMK_EXT_ID) {
        const type = rawmacro[offset+1];
        if (type in MACRO_IDS) {
          actions.push([
            MACRO_IDS[type],
            rawmacro[offset+2]
          ]);
          offset += 3;
        } else if (type === MACRO_DOUBLES.delay) {
          // I'm not sure why delay has this weird math, but I'm
          // just copying it from the python code. /shrug
          actions.push([
            MACRO_DOUBLES[type],
            (rawmacro[offset+2] - 1) + ((rawmacro[offset+3] - 1) << 8)
          ]);
          offset += 4;
        } else if (type in MACRO_DOUBLES) {
          actions.push([
            MACRO_DOUBLES[type],
            rawmacro[offset+2] + (rawmacro[offset+3] << 8)
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
        actions.push(['text', decoder.decode(dv)]);
      }
    }
    return actions;
  },
  dump(kbinfo, macros) {
    const buffer = new ArrayBuffer(kbinfo.macros_size);
    let dv = new DataView(buffer);
    let offset = 0;
    for (const macro of macros) {
      for (const action of macro) {
        console.log("dumping ", action);
        if (action[0] === 'text') {
          const encoder = new TextEncoder();
          const textbuffer = new Uint8Array(encoder.encode(action[1]));
          for (let idx = 0; idx < textbuffer.length; idx++) {
            dv.setUint8(offset++, textbuffer[idx]);
          }
        } else if (action[0] === 'delay') {
          dv.setUint8(offset++, (delay % 255) + 1);
          dv.setUint8(offset++, Math.floor(delay / 255) + 1);
        } else if (action[0] in MACRO_IDS) {
          dv.setUint8(offset++, QMK_EXT_ID);
          if (action[1] >= 0x100) {
            dv.setUint8(offset++, MACRO_DOUBLES[action[0]]);
            dv.setUint8(offset++, action[1] & 0xFF);
            dv.setUint8(offset++, (action[1] >> 8) & 0xFF);
          } else {
            dv.setUint8(offset++, MACRO_IDS[action[0]]);
            dv.setUint8(offset++, action[1]);
          }
        }
      }
      dv.setUint8(offset++, 0);
    }
    return buffer;
  },
}