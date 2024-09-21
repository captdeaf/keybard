// kbdisplay.js
//
////////////////////////////////////
//
//  Display the connected keyboard.
//
///////////////////////////////////

const KEYUI = {
  // return a {str: ..., title: ...} object.
  getKeyContents: null,
  // Refresh a key's display.
  refreshKey: null,
  // Refresh every key in the app, except those with the class kb-norender
  refreshAllKeys: null,
};

addInitializer('load', () => {
  const LAYERKEYS = {
    MO:  ['MO', 'While pressed, switch to layer: ', 'key-layer key-layer-mo'],
    DF:  ['DF', 'Make default layer: ', 'key-layer key-layer-df'],
    TG:  ['TG', 'Toggle to layer: ', 'key-layer key-layer-tg'],
    TT:  ['TT', 'Switch/Toggle to layer: ', 'key-layer key-layer-tt'],
    OSL: ['OSL', 'Toggle to layer for one key: ', 'key-layer key-layer-osl'],
    TO:  ['TO', 'Make layer default: ', 'key-layer key-layer-to'],
  };

  ////////////////////////////////////
  //
  //  Given a key string, e.g: KC_A, KC_NO, LCTL(KC_A), etc,
  //  return a {str: 'A', title: <onhover>, top: 'LCTRL'}
  //
  ////////////////////////////////////
  function getKeyContents(keystr) {
    const orig = keystr;
    let m;

    m = keystr.match(/^\d/);
    if (m) {
      const keyid = parseInt(keystr);
      return {
        title: 'Unknown: ' + keyid,
        str: keystr,
      }
    }
    const keyid = KEY.parse(keystr);

    if (keyid === 0) {
      return KEYMAP['KC_NO'];
    }

    if (!keyid) {
      return {
        str: '??Invld??',
        title: 'Invalid key string',
      }
    }

    if (keystr in KEYALIASES) {
      keystr = KEYALIASES[keystr];
    }

    if (keystr.startsWith('KC_') && ((keyid & 0xFF00) === 0)) {
      return KEYMAP[keystr];
    }

    m = keystr.match(/^(\w+)\((\d+)\)$/);
    if (m) {
      if (keyid in CODEMAP) {
        // TODO: MO(), etc with custom layer names.
        const mkey = KEYMAP[CODEMAP[keyid]];
        let top = m[1];
        let lname = m[2];
        if (m[1] in LAYERKEYS) {
          lname = getEditableName('layer', m[2], lname);
          let str = `(${lname})`;
          const ldesc = LAYERKEYS[m[1]];
          return {
            top: keystr,
            str: `<span class="key-layer">${lname}</span>`,
            title: ldesc[1] + lname,
          };
        }
        if (m[1] === 'TD') {
          const desc = TAPDANCE.describe(m[2]);
          return {
            top: keystr,
            str: desc.slice(0,5),
            title: `Tap Dance ${m[2]} - ${desc}`,
          };
        }
        return {
          str: lname,
          top: m[1] + '()',
          title: mkey.title,
        };
      }
    }

    m = keystr.match(/^M(\d+)$/);
    if (m) {
      const desc = MACROS.describe(m[1]);
      return {
        str: desc.slice(0, 6),
        top: keystr,
        title: keystr + ': ' + desc,
      };
    }

    m = keystr.match(/^(\w+)\((.*)\)$/);
    if (m) {
      let modmask = keyid & 0xFF00;
      let kcmask = keyid & 0x00FF;
      if (modmask in CODEMAP && kcmask in CODEMAP) {
        const modkey = KEYMAP[CODEMAP[modmask]];
        const kckey = KEYMAP[CODEMAP[kcmask]];
        const modstr = modkey.str.replace('(kc)', '').trim();
        return {
          top: modstr,
          str: kckey.str,
          title: modkey.title + ' ' + kckey.title,
        }
      }
    }

    if (keyid in CODEMAP) {
      return KEYMAP[CODEMAP[keyid]];
    }
    return {
      str: '??INVLD??',
      title: 'Invalid keystring: ' + keystr,
    };
  }

  KEYUI.getKeyContents = getKeyContents;

  ////////////////////////////////////
  //
  //  refreshAllKeys: Update the contents of every .key in the page.
  //
  ////////////////////////////////////
  function refreshKey(keyimage) {
    if (keyimage.dataset.key) {
      const desc = getKeyContents(keyimage.dataset.key);
      keyimage.setAttribute('title', desc.title);
      let content = desc.str;
      if (desc.top) {
        content = `<span class="key-top">${desc.top}</span>\n${desc.str}`;
      }
      keyimage.innerHTML = content;
    }
  }

  KEYUI.refreshKey = refreshKey;

  KEYUI.refreshAllKeys = () => {
    const allKeys = getAll('.key:not(.kb-norender)');
    for (const key of allKeys) {
      refreshKey(key);
    }
  };
});
