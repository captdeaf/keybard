// keys.js
//
////////////////////////////////////
//
//  Mapping keycodes around.
//
//  External:
//    CODEMAP[int] = qmkid
//    KEYMAP[qmkid] = {}
//    KEYALIASES = {}
//
////////////////////////////////////

const KEY = {
  generateAllKeycodes() {
    function K(qmkid, str, opts) {
      if (!opts) opts = {};
      if (str === '') str = qmkid;
      return Object.assign(opts, {
        qmkid: qmkid,
        str: str,
      });
    }

    // Populate USER00...USER63 keys as needed.
    const userStart = KEYMAP['QK_KB'].code;
    for (let i = 0; i < 64; i++) {
      const userkey = 'USER' + ('' + i).padStart(2, '0');
      if (KBINFO.custom_keycodes && KBINFO.custom_keycodes[i]) {
        const custom = KBINFO.custom_keycodes[i];
        KEYMAP[userkey] = K(custom.name, custom.shortName, {
          title: custom.title, type: 'user', index: i});
      }
    }

    // Add 'type' and 'mask' to everything we can customize.
    // 127 max macros.
    for (let i = 0; i < 127; i++) {
      KEYMAP['M' + i].type = 'macro';
      KEYMAP['M' + i].idx = i;
    }
    // 32 max layers.
    for (let i = 0; i < 32; i++) {
      for (const k of ['MO', 'DF', 'TG', 'TT', 'OSL', 'TO']) {
        KEYMAP[`${k}(${i})`].type = 'layer';
        KEYMAP[`${k}(${i})`].subtype = k;
        KEYMAP[`${k}(${i})`].idx = i;
      }
    }

    // 255 tap dances (!)
    for (let i = 0; i < 255; i++) {
      KEYMAP[`TD(${i})`].type = 'tapdance';
      KEYMAP[`TD(${i})`].idx = i;
    }
  },
  JS_MAP: {
    "ControlLeft": "KC_LCTRL",
    "ControlRight": "KC_RCTRL",
    "ShiftLeft": "KC_LSHIFT",
    "ShiftRight": "KC_RSHIFT",
    "AltLeft": "KC_LALT",
    "AltRight": "KC_RALT",
    "MetaLeft": "KC_LGUI",
    "MetaRight": "KC_RGUI",
    "Enter": "KC_ENTER",
    "Escape": "KC_ESC",
    "Backspace": "KC_BSPC",
    "Tab": "KC_TAB",
    "Space": "KC_SPC",
    "ArrowLeft": "KC_LEFT",
    "ArrowUp": "KC_UP",
    "ArrowRight": "KC_RGHT",
    "ArrowDown": "KC_DOWN",
    "Delete": "KC_DEL",
    "Insert": "KC_INS",
    "Home": "KC_HOME",
    "End": "KC_END",
    "PageUp": "KC_PGUP",
    "PageDown": "KC_PGDN",
    "F1": "KC_F1",
    "F2": "KC_F2",
    "F3": "KC_F3",
    "F4": "KC_F4",
    "F5": "KC_F5",
    "F6": "KC_F6",
    "F7": "KC_F7",
    "F8": "KC_F8",
    "F9": "KC_F9",
    "F10": "KC_F10",
    "F11": "KC_F11",
    "F12": "KC_F12",
    "Numpad0": "KC_P0",
    "Numpad1": "KC_P1",
    "Numpad2": "KC_P2",
    "Numpad3": "KC_P3",
    "Numpad4": "KC_P4",
    "Numpad5": "KC_P5",
    "Numpad6": "KC_P6",
    "Numpad7": "KC_P7",
    "Numpad8": "KC_P8",
    "Numpad9": "KC_P9",
    "NumpadAdd": "KC_PPLS",
    "NumpadSubtract": "KC_PMNS",
    "NumpadMultiply": "KC_PAST",
    "NumpadDivide": "KC_PSLS",
    "NumpadDecimal": "KC_PDOT",
    "NumpadEnter": "KC_PENT",
    "CapsLock": "KC_CAPS",
    "ScrollLock": "KC_SLCK",
    "Pause": "KC_PAUS",
    "PrintScreen": "KC_PSCR"
  },

  stringify(keynum) {
    const modmask = keynum & 0xFF00;
    const keyid = keynum & 0x00FF;
    if (keynum in CODEMAP) {
      return CODEMAP[keynum];
    } else if (modmask !== 0) {
      const kcstr = CODEMAP[keyid];
      const maskstr = CODEMAP[modmask];
      if (maskstr.match(/^(\w+)\(kc\)/)) {
        return maskstr.replace(/\(kc\)/, '(' + kcstr + ')');
      } else if (keyid === 0) {
        return maskstr;
      } else {
        return '0x' + keynum.toString(16).padStart(4, '0');
      }
    } else {
      console.log("err wtf?", keynum, keyid, modmask);
      return '????';
    }
  },

  parse(keystr) {
    if (!keystr) { return 0xFF; }
    if (keystr in KEYALIASES) {
      keystr = KEYALIASES[keystr];
    }
    if (keystr in KEYMAP) {
      return KEYMAP[keystr].code;
    }
    if (keystr === -1) {
      return 0xFF;
    }
    if (!keystr.match) {
      alertUser("Unknown key string: ", keystr);
    }
    const match = keystr.match(/^(\w+)\((\w+)\)$/);
    if (match) {
      const cmask = KEYMAP[match[1] + '(kc)'].code;
      if (match[2] === 'kc') {
        match[2] = 'KC_NO';
      }
      const keymask = KEYMAP[match[2]].code;
      return cmask + keymask;
    } else {
      alertUser("Unknown key string: ", keystr);
      return "UNKNOWN";
    }
  },

  // Given MO(1), return:
  //   { type: 'layer', mask: 'MO', key: '1' },
  // Given KC_C, return:
  //   { type: 'key', key: 'c' },
  parseDesc(keystr) {
    if (keystr in KEYALIASES) {
      keystr = KEYALIASES[keystr];
    }
    let m;
    if (KEYMAP[keystr]) {
      const mod = KEYMAP[keystr];
      if (mod) {
        return {
          type: 'key', str: mod.str,
        };
      }
    }
    // Layers:k MO(0) ... MO(15)
    m = keystr.match(/^(MO|DF|TG|TT|OSL|TO)\((\w+)\)$/);
    if (m) {
      return {
        type: 'layer', mask: m[1], idx: parseInt(m[2]),
      };
    }
    // Macros: M0 ... M50
    m = keystr.match(/^M(\d+)$/);
    if (m) {
      return {
        type: 'macro', mask: 'M', idx: parseInt(m[1]),
      };
    }
    // Tap Dances
    m = keystr.match(/^TD\((\d+)\)$/);
    if (m) {
      return {
        type: 'tapdance', mask: 'TD', idx: parseInt(m[1]),
      };
    }
    // HOLD-Tap keys (why do we have these instead of using tapdance?)
    m = keystr.match(/^(\w+)\((\w+)\)$/);
    if (m) {
      let mod = KEYMAP[m[1] + '(kc)'];
      if (!mod) {
        mod = KEYMAP[m[1]];
      }
      console.log("m", m, mod);
      if (mod) {
        if (m[2] === 'kc') {
          m[2] = 'KC_NO';
        }
        const key = KEYMAP[m[2]];
        return {
          type: 'key', str: mod.str.replace(/\(kc\)/, '') + key.str,
        };
      }
    }

    // Normal keys.
    if (keystr in KEYMAP) {
      const key = KEYMAP[keystr];
      return {
        type: 'key', str: key.str, title: key.title,
      };
    }
    if (keystr.match(/^0x/)) {
      return {
        type: 'key',
        str: keystr,
      };
    }
    // Unknown
    return {
      type: 'key', str: '<span style="color: red; font-weight: bold;">?? BROKEN ??</span>', title: keystr,
    };
  },

  stringifyKeymap(keymapint) {
    // keymap is just layers of arrays of integers.
    const ret = [];
    for (const layer of keymapint) {
      const l = [];
      for (const key of layer) {
        if (key === 0xFF) {
          l.push(-1);
        } else {
          l.push(KEY.stringify(key));
        }
      }
      ret.push(l);
    }
    return ret;
  },

  parseKeymap(keymapstr, rows, cols) {
    // keymap is just layers of arrays of strings.
    const ret = [];
    for (const layer of keymapstr) {
      const l = [];
      for (const row of layer) {
        for (const col of row) {
          if (!col) {
            l.push(0xFF);
          } else if (col === 0xFF) {
            l.push(0xFF);
          } else {
            l.push(KEY.parse(col));
          }
        }
      }
      ret.push(l);
    }
    return ret;
  },
}
