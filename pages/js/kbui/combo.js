////////////////////////////////////
//
//  Combos: Viewing/Editing
//
////////////////////////////////////
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
  //  Binding: This is kinda done a little backwards. The user clicks a key in
  //  the combo to rebind, we get that event. Then the user clicks a key in
  //  the sample boards. That gets redirected to us via ACTION.trigger.
  //
  ////////////////////////////////////
  ACTION.onclick('[data-bound="combo"]', (target) => {
    ACTION.selectKey(target);
    ACTION.on('bind', (keystr) => {
      // Set combo key.
      const cmbid = target.dataset.cmbid;
      const idx = target.dataset.idx;
      const combo = KBINFO.combos[cmbid];
      combo[idx] = keystr;

      // Trigger the change in the keyboard.
      for (const combokey of getAll('[data-cmbid="' + cmbid + '"]')) {
        combokey.classList.add('changed');
      }
      console.log('cmbid', cmbid, 'combo', combo);
      CHANGES.queue('combo' + cmbid, () => {
        KBAPI.updateCombo(cmbid);
      });

      // Set combo key.
      target.dataset.key = keystr;
      KEYUI.refreshKey(target);
      // Clear key selection.
      ACTION.selectKey();
    });
  });
});
