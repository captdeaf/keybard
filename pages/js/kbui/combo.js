////////////////////////////////////
//
//  Combos: Viewing/Editing
//
////////////////////////////////////

const COMBOS = {
  // Update changes between BASE_KBINFO and KBINFO.
  updateAll: null,
};

addInitializer('connected', () => {
  ////////////////////////////////////
  //
  //  Render all the combos into the board. This generates a large,
  //  user-friendly matrix.
  //
  ////////////////////////////////////
  const comboBoard = get('#combo-container');
  const allCombos = [];

  for (let cmbid = 0; cmbid < KBINFO.combo_count; cmbid++) {
    // The 5 keys (4 combos + output)
    const combo = KBINFO.combos[cmbid]
    let keys = combo.map((key, idx) => EL('div',
      {
        class: 'key',
        'data-key': key,
        'data-idx': idx,
        'data-cmbid': cmbid,
        'data-bound': 'combo',
      },
      key));

    let container = EL('div', {
      class: 'combo-group',
      'data-cmbid': cmbid,
    }, ...keys.slice(0, 4), '=', keys[4]);

    allCombos.push(container);
  }
  appendChildren(comboBoard, ...allCombos);

  ////////////////////////////////////
  //
  //  Called when a file is uploaded or a device is connected after a file
  //  is uploaded. Mark and queue all changes.
  //
  ////////////////////////////////////
  COMBOS.updateAll = () => {
    for (let cmbid = 0; cmbid < KBINFO.combo_count; cmbid++) {
      let changed = false;
      for (let k = 0; k < 5; k++) {
        if (KBINFO.combos[cmbid][k] !== BASE_KBINFO.combos[cmbid][k]) {
          changed = true;
          break;
        }
      }
      if (changed) {
        for (const combokey of getAll('[data-cmbid="' + cmbid + '"][data-idx]')) {
          const newkey = KBINFO.combos[cmbid][combokey.dataset.idx];
          combokey.dataset.key = newkey;
          KEYUI.refreshKey(combokey);
          combokey.classList.add('changed');
        }
        CHANGES.queue('combo' + cmbid, () => (
          KBAPI.updateCombo(cmbid)
        ));
      }
    }
  };

  ////////////////////////////////////
  //
  //  Binding: This is kinda done a little backwards. The user clicks a key in
  //  the combo to rebind, we get that event. Then the user clicks a key in
  //  the sample boards. That gets redirected to us via ACTION.trigger.
  //
  ////////////////////////////////////
  ACTION.on('bind-combo', (keystr, target) => {
    // Set combo key.
    const cmbid = target.dataset.cmbid;
    const idx = target.dataset.idx;
    const combo = KBINFO.combos[cmbid];
    combo[idx] = keystr;

    // Trigger the change in the keyboard.
    for (const combokey of getAll('[data-cmbid="' + cmbid + '"]')) {
      combokey.classList.add('changed');
    }
    CHANGES.queue('combo' + cmbid, () => (
      KBAPI.updateCombo(cmbid)
    ));

    // Set combo key.
    target.dataset.key = keystr;
    KEYUI.refreshKey(target);
    // Clear key selection.
    ACTION.selectKey();
  });

  ACTION.on('key-revert-combo', (target) => {
    // Set combo key.
    const cmbid = target.dataset.cmbid;
    const idx = target.dataset.idx;
    const combo = KBINFO.combos[cmbid];

    const oldkeystr = BASE_KBINFO.combos[cmbid][idx];
    combo[idx] = oldkeystr;

    // Set combo key.
    target.dataset.key = oldkeystr;
    KEYUI.refreshKey(target);
  });
});
