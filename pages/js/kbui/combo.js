////////////////////////////////////
//
//  Combos: Viewing/Editing
//
////////////////////////////////////

addInitializer('load', () => {
  const comboBoard = get('#combo-container');
  const allCombos = [];
  addInitializer('connected', () => {
    for (let cmbid = 0; cmbid < KBINFO.combo_count; cmbid++) {
      // The 5 keys (4 combos + output)
      const combo = KBINFO.combos[cmbid]
      let keys = combo.map((key, idx) => EL('div',
        {
          class: 'key',
          'data-key': key,
          'data-combo': idx,
          'data-cmbid': cmbid,
        },
        key));

      let container = EL('div', {
        class: 'combo-group',
        'data-cmbid': cmbid,
      }, ...keys.slice(0, 4), '=', keys[4]);

      allCombos.push(container);
    }
    appendChildren(comboBoard, ...allCombos);
  });
});
