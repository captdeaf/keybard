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
    // Mod tap. Turns LCTRL(kc) into LCTL_T(kc)
    MTAP: false,
    // right-hand-side. No mixing of LCTRL + LALT.
    RHS: false,
  };

  const masks = {
    CTRL: 0x0100,
    SHIFT: 0x0200,
    ALT: 0x0400,
    GUI: 0x0800,
    RHS: 0x1000,
    MTAP: 0x2000,
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

  const allModBars = getAll('.kb-modifiers');

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

    try {
      const maskstr = KEY.stringify(getMask());
      for (const el of allModBars) {
        el.style['background-color'] = '';
      }
    } catch (err) {
      for (const el of allModBars) {
        el.style['background-color'] = 'red';
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
  //  1) A key that needs rebinding is selected. It has its own
  //     ACTION bind. It binds a callback to ACTION.on('bind')
  //
  //  2) A key on sample boards is selected. This is where the
  //     ACTION.onclick below comes into play.
  //    - keymask for all non-special keys, so they can be
  //      LCTRL(kc)'d, etc, 
  //
  //  3) Call ACTION.trigger('bind', keystr) with the resulting
  //     KC_?? or LCTRL(KC_??).
  //
  ////////////////////////////////////

  ACTION.onclick('[data-bind]', (target) => {
    let keystr = target.dataset.key;
    const mask = getMask();
    if (mask !== 0 && target.dataset.bind === 'keymask') {
      try {
        const maskstr = KEY.stringify(getMask());
        keystr = maskstr.replace(/kc/, keystr);
      } catch (err) {
        return;
      }
    }
    if (target.dataset.bind === 'key-mod') {
      const cur = KEY.parse(ACTION.selectedKey.dataset.key);
      const curstr = KEY.stringify(cur & 0xFF);
      keystr = target.dataset.key.replace('(kc)', `(${curstr})`);
    }

    ACTION.trigger('bind', keystr);
  });
});
