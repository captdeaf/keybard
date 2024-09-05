// binding.js
//
////////////////////////////////////
//
//  This manages binding keys.
//
////////////////////////////////////

addInitializer('connected', () => {
  let selectedKey = null;
  let selectedMacroKey = null;

  ACTION.onclick('[data-bound]', (target) => {
    selectedMacroKey = null;
    selectedKey = target;
    selectedKey.classList.add('active');
  });

  const mods = {
    SHIFT: false,
    CTRL: false,
    GUI: false,
    ALT: false,
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

  ACTION.onclick('[data-bind]', (target) => {
    let keystr = target.dataset.key;
    const mask = getMask();
    if (mask !== 0 && target.dataset.bind === 'keymask') {
      const maskstr = KEY.stringify(getMask());
      keystr = maskstr.replace(/kc/, keystr);
    }
    if (selectedKey) {
      selectedKey.classList.add('changed');
      selectedKey.classList.remove('active');
      KBINFO.keymap[MAINBOARD.layer][parseInt(selectedKey.dataset.bound)] = keystr;
      selectedKey.dataset.key = keystr;
      KEYUI.refreshAllKeys();
      selectedKey = null;
      return;
    }
    if (selectedMacroKey) {
      selectedMacroKey.dataset.key = keystr;
      selectedMacroKey.classList.remove('active');
    }
  });

  ACTION.onclick('[data-macro-bound]', (target) => {
    selectedMacroKey = target;
    selectedMacroKey.classList.add('active');
  });
});
