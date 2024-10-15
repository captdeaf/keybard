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
    MO:  ['Hold', 'While pressed, switch to layer: ', 'key-layer key-layer-mo'],
    DF:  ['Def', 'Make default layer: ', 'key-layer key-layer-df'],
    TG:  ['Toggle', 'Toggle to layer: ', 'key-layer key-layer-tg'],
    TT:  ['Switch', 'Switch/Toggle to layer: ', 'key-layer key-layer-tt'],
    OSL: ['OneShot', 'Toggle to layer for one key: ', 'key-layer key-layer-osl'],
    TO:  ['MkDef', 'Make layer default: ', 'key-layer key-layer-to'],
  };

  ////////////////////////////////////
  //
  //  Given a key string, e.g: KC_A, KC_NO, LCTL(KC_A), etc,
  //  return:
  //
  //  Values: {
  //    str: What to show as an individual key.
  //    title: Full information about the key.
  //    type: If not a plain KC_ key, the type of key it is. 'macro'/'layer'/etc.
  //
  //    And additional values depending on type, for rendering.
  //
  //    'title' should be shown as-is in the key pane.
  //  }
  //
  ////////////////////////////////////
  function getKeyContents(keystr) {
    const orig = keystr;
    let m;

    keystr = KEY.canonical(keystr);

    const keyid = KEY.parse(keystr);

    if (keyid === 0) {
      return KEY.define('KC_NO');
    }

    if (!keyid) {
      console.log('invalid', keystr);
      return {
        str: '??Invld??',
        title: 'Invalid key string',
      }
    }

    if (keystr.startsWith('KC_') && ((keyid & 0xFF00) === 0)) {
      return KEY.define(keystr);
    }

    m = keystr.match(/^OSM\((.*)\)$/);
    if (m) {
      return {
        type: 'OSM',
        top: 'OSM',
        str: m[1].replace(/MOD_/g, ''),
        title: keystr,
      };
    }

    m = keystr.match(/^(\w+)\((\d+)\)$/);
    if (m) {
      if (keyid in CODEMAP) {
        // TODO: MO(), etc with custom layer names.
        const mkey = KEY.define(keyid);
        const lname = getEditableName('layer', m[2], m[2], true);
        if (m[1] in LAYERKEYS) {
          let str = `(${lname})`;
          const ldesc = LAYERKEYS[m[1]];
          return {
            type: 'layer',
            layertext: ldesc[0],
            top: keystr,
            str: lname,
            title: ldesc[1] + lname,
          };
        }
        if (m[1] === 'TD') {
          const desc = TAPDANCE.describe(m[2]);
          return {
            type: 'tapdance',
            top: keystr,
            tdid: m[2],
            str: desc,
            title: `Tap Dance ${m[2]} - ${desc}`,
          };
        }
        return {
          type: 'other',
          str: lname,
          top: m[1] + '()',
          title: mkey.title,
        };
      }
    }
    m = keystr.match(/^LT(\d+)\((.*)\)$/);
    if (m) {
      let lname = getEditableName('layer', m[1], m[1], true);
      if (m[2] === 'kc') {
        return {
          type: 'layerhold',
          layertext: `Hold(${lname})`,
          str: '',
          title: `Layer ${lname} on hold, Selected Key otherwise.`,
        };
      } else {
        const kckey = KEY.define(m[2]);
        return {
          type: 'layerhold',
          layertext: `Hold(${m[1]})`,
          str: kckey.str,
          title: `Layer ${lname} on hold, ${m[2]} otherwise.`,
        };
      }
    }

    m = keystr.match(/^M(\d+)$/);
    if (m) {
      const desc = MACROS.describe(m[1]);
      return {
        type: 'macro',
        str: desc.str,
        top: keystr,
        title: desc.title,
      };
    }

    m = keystr.match(/^(\w+_T)\((.*)\)$/);
    if (m) {
      let modmask = keyid & 0xFF00;
      let kcmask = keyid & 0x00FF;
      if (modmask in CODEMAP && kcmask in CODEMAP) {
        const modkey = KEY.define(modmask);
        const kckey = KEY.define(kcmask);
        const modstr = modkey.str.replace('(kc)', '').replace('\n',' ').trim();
        let kctitle = kckey.title;
        if (kctitle === 'KC_NO') {
          kctitle = 'Selected Key';
        }
        return {
          type: 'modtap',
          mods: modstr,
          modids: modmask,
          top: modstr,
          str: kckey.str,
          title: modkey.title,
        }
      }
    }

    m = keystr.match(/^(\w+)\((.*)\)$/);
    if (m) {
      let modmask = keyid & 0xFF00;
      let kcmask = keyid & 0x00FF;
      if (modmask in CODEMAP && kcmask in CODEMAP) {
        const modkey = KEY.define(modmask);
        const kckey = KEY.define(kcmask);
        const modstr = modkey.str.replace('(kc)', '').replace('\n',' ').trim();
        let kctitle = kckey.title;
        if (kctitle === 'KC_NO') {
          kctitle = 'Selected Key';
        }
        return {
          type: 'modmask',
          mods: modstr,
          modids: modmask,
          top: modstr,
          str: kckey.str,
          title: modkey.title + ' + ' + kctitle,
        }
      }
    }

    if (keyid in CODEMAP) {
      return KEY.define(keyid);
    }
    return {
      str: keystr,
      title: 'Unknown: ' + keystr,
    }
  }

  KEYUI.getKeyContents = getKeyContents;

  ////////////////////////////////////
  //
  //  Helper functions for refreshKey
  //
  ////////////////////////////////////
  // Resize an element's contents depending on its parents' width.

  function sizedElement(tag, opts, content, width) {
    content = content.split('\n').map((i) => i.slice(0,8)).join('\n');
    const el = EL(tag, opts, content);
    if (width === 0) {
      el.style['font-size'] = '12px';
    } else if (content.includes('\n')) {
      el.style['font-size'] = '10px';
      el.style['font-weight'] = 'bold';
      el.style['text-wrap'] = 'balance';
    } else if (content.length >= 7) {
      el.style['font-size'] = '8px';
      el.style['text-wrap'] = 'balance';
    } else if (content.length >= 2) {
      el.style['font-size'] = '12px';
      el.style['text-wrap'] = 'balance';
    } else {
      el.style['font-size'] = '20px';
    }
    return el;
  }

  const masks = {
    0x100: ['Ctrl', 'C'],
    0x200: ['Shft', 'S'],
    0x400: ['Alt', 'A'],
    0x800: ['GUI', 'G'],
    0x1000: ['RHS', 'R'],
  };
  // For modmask: Show "Shift A", "C+S A", "C+S+A A", etc.
  function showModMask(modids) {
    const allmods = [];
    for (const [k, v] of Object.entries(masks)) {
      if (modids & k) {
        allmods.push(v);
      }
    }
    if (allmods.length > 1) {
      return allmods.map((m) => m[1]).join('+');
    }
    return allmods.map((m) => m[0]).join('+');
  }

  ////////////////////////////////////
  //
  //  refreshKey: Update the contents of a single .key, using its keystr.
  //
  ////////////////////////////////////
  function refreshKey(keyimage) {
    const width = parseInt(keyimage.style['width']);
    if (keyimage.dataset.key) {
      const desc = getKeyContents(keyimage.dataset.key);
      let content = desc.str;
      const children = [];
      if (desc.type === 'layer') {
        children.push(sizedElement('span', {class: 'key-midb key-type key-layer'}, desc.str, width));
        if (desc.layertext !== 'Hold') {
          children.push(sizedElement('span', {class: 'key-top'}, desc.layertext, 0));
        }
      } else if (desc.type === 'layerhold') {
        children.push(sizedElement('span', {class: 'key-midb key-type key-layer'}, desc.str, width));
        children.push(sizedElement('span', {class: 'key-top'}, desc.layertext, 0));
      } else if (desc.type === 'modmask') {
        const show = showModMask(desc.modids);
        const keys = desc.str.split('\n');
        if (keys.length === 1) {
          keys.push(keys[0]);
        }
        if (show.includes('S')) {
          children.push(sizedElement('span', {class: 'key-midt key-type key-modmask'}, keys[0], width));
        } else {
          children.push(sizedElement('span', {class: 'key-midt key-type key-modmask'}, keys[1], width));
        }
        children.push(sizedElement('span', {class: 'key-bottom'}, show, width));
      } else if (desc.type === 'modtap') {
        children.push(sizedElement('span', {class: 'key-midb key-type key-modtap'}, desc.str, width));
        children.push(sizedElement('span', {class: 'key-top'}, showModMask(desc.modids), width));
      } else if (desc.type === 'macro') {
        children.push(sizedElement('span', {class: 'key-midb key-type key-macro'}, desc.str, width));
      } else if (desc.type === 'tapdance') {
        children.push(sizedElement('span', {class: 'key-type key-tapdance'}, desc.str, width));
        children.push(sizedElement('span', {class: 'key-top'}, desc.top, width));
      } else {
        if (desc.top) {
          children.push(sizedElement('span', {class: 'key-top'}, desc.top, width));
        }
        children.push(sizedElement('span', {}, desc.str, width));
      }
      keyimage.innerHTML = '';
      appendChildren(keyimage, children);
    }
  }

  KEYUI.refreshKey = refreshKey;

  ////////////////////////////////////
  //
  //  Refresh all keys across the board, usually when defining something that
  //  may have an impact on other existing keys (e.g: macros, tapdances).
  //
  ////////////////////////////////////
  KEYUI.refreshAllKeys = () => {
    // const allKeys = getAll('.key:not(.kb-norender)');
    const allKeys = getAll('.key');
    for (const key of allKeys) {
      refreshKey(key);
    }
  };
});
