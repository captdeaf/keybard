// binding.js
//
////////////////////////////////////
//
//  This manages binding keys.
//
////////////////////////////////////

addInitializer('connected', () => {

  ////////////////////////////////////
  //
  //  Modifier keys in keyboard: SHIFT, CTRL, etc.
  //  For binding keys to also send a modifier. Not individual
  //  keys. To send SHIFT by itself, click the shift key. To send
  //  SHIFT+K enable SHIFT modifier and click K key.
  //
  ////////////////////////////////////
  const mods = {
    SHIFT: false,
    CTRL: false,
    GUI: false,
    ALT: false,
    // right-hand-side. No mixing of LCTRL + LALT.
    RHS: false,
  };

  const masks = {
    CTRL: 0x0100,
    SHIFT: 0x0200,
    ALT: 0x0400,
    GUI: 0x0800,
    RHS: 0x1000,
  };

  function getMask() {
    let mask = 0;
    for (const [name, enabled] of Object.entries(mods)) {
      if (enabled) { mask = mask | masks[name]; }
    }
    return mask;
  }

  const shiftableKeys = getAll('[data-shifted]');
  for (const key of shiftableKeys) {
    key.dataset.normal = key.innerHTML;
  }

  ACTION.onclick('[data-modifier]', (target) => {
    const enabled = !mods[target.dataset.modifier];
    mods[target.dataset.modifier] = enabled;
    const allKeys = getAll('[data-modifier="' + target.dataset.modifier + '"]');
    if (enabled) {
      for (const key of allKeys) {
        key.classList.add('selected');
      }
    } else {
      for (const key of allKeys) {
        key.classList.remove('selected');
      }
    }

    // SHIFT is special: When enabled, show the 'shifted' version of
    // every key on the sample boards.
    if (target.dataset.modifier === 'SHIFT') {
      if (enabled) {
        for (const key of shiftableKeys) {
          key.innerHTML = key.dataset.shifted;
        }
      } else {
        for (const key of shiftableKeys) {
          key.innerHTML = key.dataset.normal;
        }
      }
    }
  });

  ////////////////////////////////////
  //
  //  The main logic for key selection.
  //
  //  1) A key that needs mapping is selected.
  //    - main board
  //    - 'div' key - updates the .div's data-key, that's it.
  //      - combo key
  //      - macro key
  //      - tapdance key
  //
  //  2) A key on sample boards is selected.
  //    - Mod Mask for all non-special keys.
  //    - special keys: macro, tapdance, layer, custom
  //
  ////////////////////////////////////
  let selectedKeyType = null;
  let selectedKey = null;

  function bindTargetKey(type, target) {
    if (selectedKey) {
      selectedKey.classList.remove('active');
      selectedKey = null;
    }
    if (selectedKey === target) {
      return;
    }
    selectedKeyType = type;
    selectedKey = target;
    selectedKey.classList.add('active');
  }

  ACTION.onclick('[data-bound]', (target) => {
    bindTargetKey('main', target);
  });

  ACTION.onclick('[data-bind]', (target) => {
    if (!selectedKey) return;

    let keystr = target.dataset.key;
    const mask = getMask();
    if (mask !== 0 && target.dataset.bind === 'keymask') {
      const maskstr = KEY.stringify(getMask());
      keystr = maskstr.replace(/kc/, keystr);
    }

    if (selectedKeyType === 'main') {
      const kmid = parseInt(selectedKey.dataset.bound)
      KBINFO.keymap[MAINBOARD.layer][kmid] = keystr;
      selectedKey.dataset.key = keystr;
      selectedKey.classList.add('changed');
      CHANGES.queue('key' + kmid, () => {
        KBAPI.updateKey(MAINBOARD.layer, kmid, keystr);
      });
    } else if (selectedKeyType === 'div') {
      selectedKey.dataset.key = keystr;
    }
    KEYUI.refreshKey(selectedKey);
    selectedKey.classList.remove('active');
    selectedKey = null;
  });

  ACTION.onclick('[data-div-bound]', (target) => {
    bindTargetKey('div', target);
  });
});
