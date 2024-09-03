// kbdisplay.js
//
////////////////////////////////////
//
//  Display the connected keyboard.
//
///////////////////////////////////

const KEYUI = (function() {

////////////////////////////////////
//
//  refreshAllKeys: Update the contents of every .key in the page.
//
////////////////////////////////////
  const KEY_DESCS = {
    layer: {
      MO:  ['MO', 'While pressed, switch to layer:', 'key-layer key-layer-mo'],
      DF:  ['DF', 'Make default layer:', 'key-layer key-layer-df'],
      TG:  ['TG', 'Toggle to layer:', 'key-layer key-layer-tg'],
      TT:  ['TT', 'Switch/Toggle to layer:', 'key-layer key-layer-tt'],
      OSL: ['OSL', 'Toggle to layer for one key:', 'key-layer key-layer-osl'],
      TO:  ['TO', 'Make layer default:', 'key-layer key-layer-to'],
    },
    'macro': {M: ['M ', 'Macro: ', 'key-macro']},
    'tapdance': {M: ['TD ', 'Tap Dance: ', 'key-tapdance']},
  };

  function getKeyContents(keystr) {
    let key = KEY.parseDesc(keystr);
    if (key.str) {
      return {
        text: key.str,
        title: keystr,
      }
    }
    if (key.type === 'macro') {
      const d = MACROS.describe(key.idx, KBINFO.macros[key.idx]);
      return {
        text: d.slice(0, 10),
        title: d,
      }
    }
    const desc = KEY_DESCS[key.type][key.mask];
    if (!desc) {
      console.log('no desc for', key.type, key.mask);
      return {
        text: keystr,
        title: keystr,
      }
    }
    const names = EDITABLE_NAMES[key.type];
    if (names && names[key.idx]) {
      return {
        text: '<span class="' + desc[2] + '">' + names[key.idx] + '</span>',
        title: keystr + ': ' + desc[1] + names[key.idx],
      }
    }
    return {
      text: desc[0] + ' ' + key.idx,
      title: desc[1] + ' ' + key.idx,
    }
  }

  function refreshKey(keyimage) {
    if (keyimage.dataset.key) {
      const content = getKeyContents(keyimage.dataset.key);
      keyimage.setAttribute('title', content.title);
      keyimage.innerHTML = content.text;
    }
  }

  function refreshAllKeys() {
    const allKeys = getAll('.key');
    for (const key of allKeys) {
      refreshKey(key);
    }
  }

  return {
    getContents: getKeyContents,
    refreshAllKeys: refreshAllKeys,
  };
})();
