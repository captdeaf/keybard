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
  // Refresh all text indicators.
  refreshAllTexts: null,
};

addInitializer('load', () => {
  const LAYERKEYS = {
    MO:  ['MO', 'While pressed, activate layer: ', 'key-layer key-layer-mo'],
    DF:  ['DF', 'Switch default layer: ', 'key-layer key-layer-df'],
    TG:  ['TG', 'Toggle layer: ', 'key-layer key-layer-tg'],
    TT:  ['TT', 'Tap-Toggle: ', 'key-layer key-layer-tt'],
    OSL: ['OSL', 'Toggle layer active for one key: ', 'key-layer key-layer-osl'],
    TO:  ['TO', 'Toggle all off but: ', 'key-layer key-layer-to'],
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
      };
    }

    if (keystr.startsWith('KC_') && (keyid & 0xff00) === 0) {
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
            str: desc.str,
            title: desc.title,
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
      let modmask = keyid & 0xff00;
      let kcmask = keyid & 0x00ff;
      if (modmask in CODEMAP && kcmask in CODEMAP) {
        const modkey = KEY.define(modmask);
        const kckey = KEY.define(kcmask);
        const modstr = modkey.str.replace('(kc)', '').replace('\n', ' ').trim();
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
        };
      }
    }

    m = keystr.match(/^(\w+)\((.*)\)$/);
    if (m) {
      let modmask = keyid & 0xff00;
      let kcmask = keyid & 0x00ff;
      if (modmask in CODEMAP && kcmask in CODEMAP) {
        const modkey = KEY.define(modmask);
        const kckey = KEY.define(kcmask);
        const modstr = modkey.str.replace('(kc)', '').replace('\n', ' ').trim();
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
        };
      }
    }

    if (keyid in CODEMAP) {
      return KEY.define(keyid);
    }
    return {
      str: keystr,
      title: 'Unknown: ' + keystr,
    };
  }

  KEYUI.getKeyContents = getKeyContents;

  ////////////////////////////////////
  //
  //  Helper functions for refreshKey
  //
  ////////////////////////////////////
  // Resize an element's contents depending on its parents' width.

  function sizedElement(tag, opts, content, width) {
    content = content
      .split('\n')
      .map((i) => i.slice(0, 8))
      .join('\n');
    const el = EL(tag, opts, content);
    if (width === 0) {
      el.style['font-size'] = '12px';
    } else if (content.includes('\n') && content.length === 3) {
      el.style['font-weight'] = 'bold';
      el.style['font-size'] = '12px';
      el.style['text-wrap'] = 'balance';
    } else if (content.includes('\n')) {
      el.style['font-size'] = '10px';
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

  function sizedIcon(icon, width) {
    switch (icon) {
      case 'tapdance':
        let addSize = width >= 60 ? 10 : 0;
        return EL(
          'div',
          {
            style: {
              width: `${16 + addSize}px`,
              height: `${16 + addSize}px`,
              marginBottom: '5px',
            },
          },
          SVG.tapdance()
        );
      default:
        return EL('span', {}, icon);
    }
  }

  function sizedSpan(text, width) {
    if (width === 0) {
      return EL('span', {}, `${text}`);
    } else if (width >= 60) {
      return EL('span', { style: { 'font-size': '18px' } }, `${text}`);
    } else {
      return EL('span', { style: { 'font-size': '12px' } }, `${text}`);
    }
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
        children.push(
          sizedElement(
            'span',
            { class: 'key-midb key-type key-layer' },
            desc.str,
            width
          )
        );
        if (desc.layertext !== 'Hold') {
          children.push(
            sizedElement('span', { class: 'key-top' }, desc.layertext, 0)
          );
        }
      } else if (desc.type === 'layerhold') {
        children.push(
          sizedElement(
            'span',
            { class: 'key-midb key-type key-layer' },
            desc.str,
            width
          )
        );
        children.push(
          sizedElement('span', { class: 'key-top' }, desc.layertext, 0)
        );
      } else if (desc.type === 'modmask') {
        const show = showModMask(desc.modids);
        const keys = desc.str.split('\n');
        if (keys.length === 1) {
          keys.push(keys[0]);
        }
        if (show.includes('S')) {
          children.push(
            sizedElement(
              'span',
              { class: 'key-midt key-type key-modmask' },
              keys[0],
              width
            )
          );
        } else {
          children.push(
            sizedElement(
              'span',
              { class: 'key-midt key-type key-modmask' },
              keys[1],
              width
            )
          );
        }
        children.push(
          sizedElement('span', { class: 'key-bottom' }, show, width)
        );
      } else if (desc.type === 'modtap') {
        children.push(
          sizedElement(
            'span',
            { class: 'key-midb key-type key-modtap' },
            desc.str,
            width
          )
        );
        children.push(
          sizedElement(
            'span',
            { class: 'key-top' },
            showModMask(desc.modids),
            width
          )
        );
      } else if (desc.type === 'macro') {
        children.push(
          sizedElement(
            'span',
            { class: 'key-midb key-type key-macro' },
            desc.str,
            width
          )
        );
      } else if (desc.type === 'tapdance') {
        console.log('tapdance', desc);
        children.push(
          sizedElement(
            'span',
            { class: 'key-type key-tapdance', style: { display: 'none' } },
            desc.str,
            width
          )
        );
        children.push(
          sizedElement(
            'span',
            { class: 'key-top', style: { display: 'none' } },
            desc.top,
            width
          )
        );
        console.log(sizedIcon('tapdance', width));
        const tdContent = EL(
          'div',
          {
            style: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            },
          },
          [sizedIcon('tapdance', width), sizedSpan(desc.tdid, width)]
        );
        children.push(tdContent);
      } else {
        if (desc.top) {
          children.push(
            sizedElement('span', { class: 'key-top' }, desc.top, width)
          );
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
  const TEXT_RENDERERS = {
    macros: ((id) => MACROS.describe(id).title),
    tapdance: ((id) => TAPDANCE.describe(id).title),
    layer: ((id) => getEditableName('layer', id, id, true)),
  };

  KEYUI.refreshAllKeys = () => {
    // Update all rendered keys.
    const allKeys = getAll('.key');
    for (const key of allKeys) {
      refreshKey(key);
    }

    // Update all <div data-render> for non-key representations.
    for (const el of findAll('[data-render]')) {
      el.innerText = TEXT_RENDERERS[el.dataset.render](el.dataset.id);
    }
  };
});
