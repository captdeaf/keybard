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
  // When a KBINFO is loaded, generateAllKeycodes updates our
  // custom user keycodes for title and text.
  generateAllKeycodes: null,
  // Parse a string, such as KC_A, into an integer representation.
  parse: null,
  parseKeymap: null,
  // Convert an integer representation of a keypress into a string.
  stringify: null,
  stringifyKeymap: null,
  // Get a key definition from keymap. define('KC_A')
  define: null,
  // Which keymap are we localized to.
  localization: 'english_us',
};

addInitializer('load', () => {
  ////////////////////////////////////
  //
  //  When a keyboard is connected, update our keymap with its
  //  custom key information.
  //
  ////////////////////////////////////
  KEY.generateAllKeycodes = () => {
    function K(qmkid, str, opts) {
      if (!opts) opts = {};
      if (str === '') str = qmkid;
      return Object.assign(opts, {
        qmkid: qmkid,
        str: str,
      });
    }

    // Populate USER00...USER63 keys as needed.
    const userStart = KEYMAP['USER00'].code;
    for (let i = 0; i < 64; i++) {
      const userkey = 'USER' + ('' + i).padStart(2, '0');
      const code = KEYMAP[userkey].code;
      if (KBINFO.custom_keycodes && KBINFO.custom_keycodes[i]) {
        const custom = KBINFO.custom_keycodes[i];
        KEYMAP[userkey] = K(custom.name, custom.shortName, {
          title: custom.title, type: 'user', index: i, code: code});
        KEYMAP[custom.name] = K(custom.name, custom.shortName, {
          title: custom.title, type: 'user', index: i, code: code});
        KEYALIASES[custom.name] = userkey;
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
  };

  addInitializer('connected', KEY.generateAllKeycodes, 1);

  ////////////////////////////////////
  //
  //  .vil files have a more limited keyset than we do.
  //
  ////////////////////////////////////
  KEY.vilify = (keystr) => {
    try {
      const keynum = KEY.parse(keystr);
      const modmask = keynum & 0xFF00;
      const keyid = keynum & 0x00FF;
      if (modmask !== 0) {
        const kcstr = CODEMAP[keyid];
        const maskstr = CODEMAP[modmask];
        if (maskstr) {
          if (maskstr && maskstr.match(/^(\w+)\(kc\)/)) {
            return maskstr.replace(/\(kc\)/, '(' + kcstr + ')');
          } else if (keyid === 0) {
            return maskstr;
          } else if (keynum in CODEMAP) {
            return CODEMAP[keynum];
          }
        }
      } else if (keynum in CODEMAP) {
        return CODEMAP[keynum];
      }
      return '0x' + keynum.toString(16).padStart(4, '0');
    } catch (err) {
      console.log("Cannot vilify key", keystr);
    }
  };

  ////////////////////////////////////
  //
  //  Return a key definition for a given keystr.
  //
  ////////////////////////////////////
  KEY.define = (keystr) => {
    const orig = keystr;
    if (keystr.match && keystr.match(/^0x\w+$/)) {
      keystr = parseInt(keystr, 16);
    }
    if (typeof(keystr) === 'number' || keystr.match(/^\d+$/)) {
      keystr = parseInt(keystr);
    }
    if (keystr in CODEMAP) {
      keystr = CODEMAP[keystr];
    }
    keystr = KEY.canonical(keystr);
    if (KEY.localization) {
      const kmap = LANGUAGE_MAP[KEY.localization];
      const ret = structuredClone(KEYMAP[keystr]);
      if (kmap && keystr in kmap) {
        ret.str = kmap[keystr];
      }
      return ret;
    }
    if (keystr in KEYMAP) {
      return KEYMAP[keystr];
    }
    console.log('Unknown keystr', orig, keystr);
    return undefined;
  };

  KEY.canonical = (keystr) => {
    if (keystr.match(/^0x/)) {
      return keystr;
    }
    if (keystr in KEYALIASES) {
      return KEYALIASES[keystr];
    }
    return keystr;
  };

  ////////////////////////////////////
  //
  //  Convert a keynum to a string. e.g: 0x0004 -> 'KC_A',
  //  0x0104 -> "LCTRL(KC_A)"
  //
  ////////////////////////////////////
  KEY.stringify = (keynum) => {
    const modmask = keynum & 0xFF00;
    const keyid = keynum & 0x00FF;
    if (modmask !== 0 && keyid in CODEMAP) {
      const kcstr = CODEMAP[keyid];
      const maskstr = CODEMAP[modmask];
      if (!maskstr) {
        return "0x" + keynum.toString(16).padStart(4, '0');
      }
      if (maskstr.match(/^(\w+)\(kc\)/)) {
        return maskstr.replace(/\(kc\)/, '(' + kcstr + ')');
      } else if (keyid === 0) {
        return maskstr;
      } else if (keynum in CODEMAP) {
        return CODEMAP[keynum];
      } else {
        return '0x' + keynum.toString(16).padStart(4, '0');
      }
    } else if (keynum in CODEMAP) {
      return CODEMAP[keynum];
    } else {
      return `0x${keynum.toString(16)}`;
    }
  };

  ////////////////////////////////////
  //
  //  Convert keystring to keynum. e.g: "KC_A" -> 0x0004,
  //  "LCTRL(KC_A)" -> 0x0104
  //
  ////////////////////////////////////
  KEY.parse = (keystr) => {
    const orig = keystr;
    if (!keystr || keystr === -1 || keystr === 0xFF) { return 0xFF; }
    if (keystr in KEYALIASES) {
      keystr = KEYALIASES[keystr];
    }
    if (keystr in KEYMAP) {
      return KEYMAP[keystr].code;
    }
    if (keystr === -1) {
      return 0xFF;
    }
    const match = keystr.match(/^(\w+)\((\w+)\)$/);
    if (match) {
      const cmask = KEYMAP[match[1] + '(kc)'].code;
      if (match[2] === 'kc') {
        match[2] = 'KC_NO';
      }
      if (match[2] in KEYMAP) {
        const keymask = KEYMAP[match[2]].code;
        return cmask + keymask;
      }
    }
    return parseInt(keystr);
  };

  // Given MO(1), return:
  //   { type: 'layer', mask: 'MO', key: '1' },
  // Given KC_C, return:
  //   { type: 'key', key: 'c' },
  KEY.parseDesc = (keystr) => {
    if (keystr in KEYALIASES) {
      keystr = KEYALIASES[keystr];
    }
    let m;
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
        if (mod in KEYALIASES) {
          mod = KEYALIASES[mod];
        }
      } else if (mod in KEYALIASES) {
        mod = KEYALIASES[mod];
      }
      if (mod) {
        if (m[2] === 'kc') {
          m[2] = 'KC_NO';
        }
        const key = KEYMAP[m[2]];
        return {
          type: 'key', str: mod.str.replace(/\(kc\)/, '') + key.str,
          title: key.title,
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
  };

  KEY.stringifyKeymap = (keymapint) => {
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
  };

  KEY.parseKeymap = (keymapstr, rows, cols) => {
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
  };
});
