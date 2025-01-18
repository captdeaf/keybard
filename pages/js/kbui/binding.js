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
      if (enabled) {
        mask = mask | masks[name];
      }
    }
    return mask;
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
  });

  ////////////////////////////////////
  //
  //  The main logic for key selection.
  //
  //  1) A key that needs rebinding (identified by [data-bound]) is selected. It
  //     is assigned as the ACTION.selectedKey.
  //
  //  2) A key on sample boards is selected (ID'd by [data-bind]) is clicked.
  //     ACTION.on('bind', ...) routes it to 'bind-' + selectedKey.dataset.bound
  //     - The onclick also supports a keymask for all non-special keys, so
  //       they can be LCTRL(kc)'d, etc,
  //
  //  3) Call ACTION.trigger('bind', keystr) with the resulting
  //     KC_?? or LCTRL(KC_??).
  //
  ////////////////////////////////////

  ACTION.onclick('[data-bound]', (target) => {
    ACTION.selectKey(target);
  });

  ACTION.onclick('[data-bind]', (target) => {
    if (ACTION.selectedKey) {
      let keystr = target.dataset.key;
      const mask = getMask();
      if (mask !== 0 && target.dataset.bind === 'keymask') {
        const keyid = KEY.parse(keystr);
        try {
          keystr = KEY.stringify(keyid + getMask());
        } catch (err) {
          keystr = '0x' + (keyid + getMask()).toString(16);
        }
      }
      if (target.dataset.bind === 'key-mod') {
        const cur = KEY.parse(ACTION.selectedKey.dataset.key);
        const curstr = KEY.stringify(cur & 0xff);
        keystr = target.dataset.key.replace('(kc)', `(${curstr})`);
      }
      if (ACTION.selectedKey.dataset.bound === 'tapdance') {
        if (ACTION.selectedKey.dataset.key === 'KC_NO' && keystr !== 'KC_NO') {
          ACTION.selectedKey.classList.remove('white');
          ACTION.selectedKey.classList.add('green');
        } else if (
          ACTION.selectedKey.dataset.key !== 'KC_NO' &&
          keystr === 'KC_NO'
        ) {
          ACTION.selectedKey.classList.remove('green');
          ACTION.selectedKey.classList.add('white');
        }
      }

      ACTION.trigger('bind', keystr);
    }
  });

  ACTION.on('bind', (keystr) => {
    const key = ACTION.selectedKey;
    if (key) {
      ACTION.selectKey();
      ACTION.trigger('bind-' + key.dataset.bound, keystr, key);
    }
  });

  ////////////////////////////////////
  //
  //  Adding MO/DT/TG/TT/etc layers.
  //
  ////////////////////////////////////
  let layerKey = 'MO';
  const allLayerKeys = {};
  for (const i of getAll('[data-layer-modifier]')) {
    allLayerKeys[i.dataset.layerModifier] = i;
  }
  function selectLayerKey(modifier) {
    layerKey = modifier;
    for (const i of Object.values(allLayerKeys)) {
      if (i.dataset.layerModifier === modifier) {
        i.classList.add('selected');
      } else {
        i.classList.remove('selected');
      }
    }
  }

  ACTION.onclick('[data-layer-modifier]', (target) => {
    selectLayerKey(target.dataset.layerModifier);
  });
  selectLayerKey('MO');

  ACTION.onclick('[data-layer-modifier-select]', (target) => {
    console.log(target);
    const keystr = `${layerKey}(${target.dataset.layerModifierSelect})`;
    ACTION.trigger('bind', keystr);
  });

  ////////////////////////////////////
  //
  //  Context menu for all bindable keys.
  //
  ////////////////////////////////////

  // Main board
  ACTION.addContextMenu('[data-bound="main"]', [
    { name: 'Clear / Disable', trigger: 'key-assign-kcno' },
    { name: 'Make transparent', trigger: 'key-assign-transparent' },
    { name: 'Assign & edit macro', trigger: 'key-assign-macro' },
    { name: 'Assign & edit tapdance', trigger: 'key-assign-tapdance' },
    { name: 'Enter key by code or value', trigger: 'key-assign-manual' },
    { name: 'Revert change', trigger: 'key-revert' },
  ]);

  // Combo keys: input
  ACTION.addContextMenu('[data-bound="combo"]:not([data-idx="4"])', [
    { name: 'Clear', trigger: 'key-assign-kcno' },
    { name: 'Enter key by code or value', trigger: 'key-assign-manual' },
    { name: 'Revert change', trigger: 'key-revert' },
  ]);

  // Combo output
  ACTION.addContextMenu('[data-bound="combo"][data-idx="4"]', [
    { name: 'Assign & edit macro', trigger: 'key-assign-macro' },
    { name: 'Clear', trigger: 'key-assign-kcno' },
    { name: 'Enter key by code or value', trigger: 'key-assign-manual' },
    { name: 'Revert change', trigger: 'key-revert' },
  ]);

  // Tap dance outputs
  ACTION.addContextMenu('[data-bound="tapdance"]', [
    { name: 'Assign & edit macro', trigger: 'key-assign-macro' },
    { name: 'Clear / Disable', trigger: 'key-assign-kcno' },
    { name: 'Enter key by code or value', trigger: 'key-assign-manual' },
    { name: 'Revert change', trigger: 'key-revert' },
  ]);

  // Key override in+out
  ACTION.addContextMenu('[data-bound="keyoverride"]', [
    { name: 'Enter key by code or value', trigger: 'key-assign-manual' },
    { name: 'Revert change', trigger: 'key-revert' },
  ]);

  // Macros
  ACTION.addContextMenu('[data-bound="macro"]', [
    { name: 'Enter key by code or value', trigger: 'key-assign-manual' },
    { name: 'Revert change', trigger: 'key-revert' },
  ]);

  ACTION.on('key-assign-macro', (target) => {
    ACTION.selectKey(target);
    const kmid = target.dataset.kmid;
    const layer = MAINBOARD.selectedLayer;
    let mid = -1;
    const m = target.dataset.key.match(/^M(\d+)$/);
    if (m) {
      mid = parseInt(m[1]);
    } else {
      mid = MACROS.findEmpty();
    }
    if (mid >= 0) {
      const keystr = `M${mid}`;
      ACTION.trigger('bind', keystr);
      MACROS.edit(mid);
    }
  });

  ACTION.on('key-assign-tapdance', (target) => {
    ACTION.selectKey(target);
    const kmid = target.dataset.kmid;
    const layer = MAINBOARD.selectedLayer;
    let tdid = -1;
    const m = target.dataset.key.match(/^TD\((\d+)\)$/);
    if (m) {
      tdid = parseInt(m[1]);
    } else {
      tdid = TAPDANCE.findEmpty();
    }
    if (tdid >= 0) {
      const keystr = `TD(${tdid})`;
      ACTION.trigger('bind', keystr);
      TAPDANCE.edit(tdid);
    }
  });

  ACTION.on('key-assign-kcno', (target) => {
    ACTION.selectKey(target);
    const kmid = target.dataset.kmid;
    const layer = MAINBOARD.selectedLayer;
    if (target.dataset.key !== 'KC_NO') {
      ACTION.trigger('bind', 'KC_NO');
    }
  });

  ACTION.on('key-assign-transparent', (target) => {
    ACTION.selectKey(target);
    if (target.dataset.key !== 'KC_TRNS') {
      ACTION.trigger('bind', 'KC_TRNS');
    }
  });

  ACTION.on('key-revert', (target) => {
    ACTION.selectKey(target);
    ACTION.trigger('key-revert-' + target.dataset.bound, target);
    ACTION.selectKey();
  });

  ////////////////////////////////////
  //
  //  TypeBind - select a key, then press a key to bind it.
  //
  //  We want to separate taps (bind this key) from holds (apply to next key).
  //
  //  Fortunately we're not dealing with speed-typists here!
  //
  ////////////////////////////////////
  let lastDown = null;
  document.onkeydown = (evt) => {
    if (ACTION.getOpenFloats().length > 0) {
      return true;
    }
    if (!SETTINGS.typebind || !ACTION.selectedKey) {
      return true;
    }
    lastDown = JSMAP.convert(evt);
    evt.stopPropagation();
    evt.preventDefault();
    return false;
  };

  document.onkeyup = (evt) => {
    if (ACTION.getOpenFloats().length > 0) {
      return true;
    }
    if (!SETTINGS.typebind || !ACTION.selectedKey) {
      return true;
    }
    const cur = JSMAP.convert(evt);
    if (lastDown === cur) {
      const keystr = JSMAP.convert(evt);
      lastDown = keystr;
      ACTION.trigger('bind', keystr);
    }
    evt.stopPropagation();
    evt.preventDefault();
    return false;
  };

  ////////////////////////////////////
  //
  //  Manual bind - enter a key string or a hex code.
  //
  ////////////////////////////////////
  const manualFloat = get('#float-manual-key');
  const manualEntry = get('#manual-key');
  const manualOutput = get('#manual-output');
  ACTION.on('key-assign-manual', (target) => {
    ACTION.selectKey(target);
    manualEntry.value = target.dataset.key;
    manualOutput.innerHTML = target.dataset.key;
    ACTION.showFloat(manualFloat);
  });
  ACTION.onclick('#float-manual-key', () => {
    manualEntry.focus();
  });
  manualEntry.onkeyup = (evt) => {
    const val = KEY.stringify(KEY.parse(manualEntry.value));
    if (val.match(/^0/)) {
      manualOutput.innerHTML = '<span style="color: red;">Unknown Key</span>';
    } else {
      manualOutput.innerHTML = `<span style="color: green;">${val}</span>`;
    }
    if (evt.key === 'Enter') {
      ACTION.trigger('bind', val);
      ACTION.closeFloats();
    }
    return false;
  };
});
