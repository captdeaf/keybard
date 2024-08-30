////////////////////////////////////
//
//  Macros: Parsing, Recording, Building, Saving, Pushing.
//
////////////////////////////////////

function setupMacros() {
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

  function describeMacro(id, actions) {
    const texts = [];
    const otherwise = [];
    for (const act of actions) {
      if (act[0] === 'text') {
        texts.push(act[1]);
      } else {
        otherwise.push(act[0] + ' ' + act[1]);
      }
    }
    if (texts.length > 0) {
      return "M" + id + ': ' + texts.join(' ');
    } else if (otherwise.length > 0) {
      return "M" + id + ': ' + otherwise.join(' ');
    } else {
      return "M" + id;
    }
  }

  function renderMacroFloat(mid, macro) {
    const rowkeys = [];
    rowkeys.push(EL('div', {class: 'kbdesc'}, '<span style="color: blue">Macro M' + mid + ':</span>'));
    for (const action of macro) {
      if (action[0] === 'text') {
        rowkeys.push(EL('div', {class: "kbdesc"}, action[1]));
      } else if (action[0] === 'tap') {
        rowkeys.push(EL('div', {class: 'key kb-key key-tap key-macro'},
                        action[1]));
      } else if (action[0] === 'down') {
        rowkeys.push(EL('div', {class: 'key kb-key key-down key-macro'},
                        'down\n' + action[1]));
      } else if (action[0] === 'up') {
        rowkeys.push(EL('div', {class: 'key kb-key key-up key-macro'},
                       action[1] + '\nup'));
      } else if (action[0] === 'delay') {
        rowkeys.push(EL('div', {class: 'key key-sleep key-macro'},
                        'sleep\n' + action[1] + 'ms'));
      } else {
        console.log('wtf', action);
      }
    }
    const floater = get('#float-macro');
    const floatbody = get('#float-macro-render');
    floatbody.innerHTML = '';
    appendChildren(floatbody, ...rowkeys);
    floater.style['display'] = 'block';
  }

  return {
    renderMacroFloat: renderMacroFloat,
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
              KEY.stringify(rawmacro[offset+2]),
              rawmacro[offset+2],
            ]);
            offset += 3;
          } else if (type === MACRO_DELAY) {
            // I'm not sure why delay has this weird math, but I'm
            // just copying it from the python code. /shrug
            actions.push([
              MACRO_DOUBLES[type],
              (rawmacro[offset+2] - 1) + ((rawmacro[offset+3] - 1) << 8),
              rawmacro[offset+2] + (rawmacro[offset+3] << 8),
            ]);
            offset += 4;
          } else if (type in MACRO_DOUBLES) {
            actions.push([
              MACRO_DOUBLES[type],
              KEY.stringify(rawmacro[offset+2] + (rawmacro[offset+3] << 8)),
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
          actions.push(['text', decoder.decode(dv), newbuffer.buffer]);
        }
      }
      return actions;
    },
    renderBoard(kbinfo) {
      const macroBoard = get('#macro-board');
      const rows = [];
      for (let idx = 0; idx < kbinfo.macro_count; idx++) {
        const mid = idx;
        const rowid = Math.floor(mid/10);
        const keytpl = EL('div', {
          id: "macro-" + mid,
          class: "key kb-key key-macro",
          title: 'M' + mid,
        }, '');
        keytpl.oncontextmenu = (ev) => {
          renderMacroFloat(mid, kbinfo.macros[mid]);
          ev.preventDefault();
          return false;
        }
        if (!rows[rowid]) {rows[rowid] = [];}
        rows[rowid].push(keytpl);
      }
      const rowEls = [];
      for (const row of rows) {
        const rowEl = EL('div', {class: 'kb-row kb-macro'});
        appendChildren(rowEl, ...row);
        rowEls.push(rowEl);
      }
      const header = EL('div', {class: 'macro-help'},
                        "To edit macros, R-click one.");
      appendChildren(macroBoard, EL('div', {class: 'kb-group'}, header, ...rowEls));
    },
    refreshBoard(kbinfo) {
      const macros = kbinfo.macros;
      for (let mid = 0; mid < macros.length; mid++) {
        const macro = macros[mid];
        const el = get('#macro-' + mid);
        const desc = describeMacro(mid, macro);
        el.innerHTML = desc.slice(0, 10);
        el.setAttribute('title', desc);
      }
    },
    dump(kbinfo, macros) {
      const buffer = new ArrayBuffer(kbinfo.macros_size);
      let dv = new DataView(buffer);
      let offset = 0;
      for (const macro of macros) {
        for (const action of macro) {
          if (action[0] === 'text') {
            const encoder = new TextEncoder();
            const textbuffer = new Uint8Array(encoder.encode(action[1]));
            for (let idx = 0; idx < textbuffer.length; idx++) {
              dv.setUint8(offset++, textbuffer[idx]);
            }
          } else if (action[0] === 'delay') {
            dv.setUint8(offset++, MACRO_DELAY);
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
}

MACROS = setupMacros();
