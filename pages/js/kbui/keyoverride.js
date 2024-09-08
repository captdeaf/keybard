////////////////////////////////////
//
//  Key Overrides: Viewing/Editing
//
////////////////////////////////////

addInitializer('connected', () => {
  const koBoard = get('#keyoverride-table');

  // korows will contain all the <tr>s for each
  // key override.
  const korows = [];

  // bit, name.
  const modLKeys = [
    [0x01, 'LCTL'],
    [0x02, 'LSHF'],
    [0x04, 'LALT'],
    [0x08, 'LGUI'],
  ];
  const modRKeys = [
    [0x10, 'RCTL'],
    [0x20, 'RSHF'],
    [0x40, 'RALT'],
    [0x80, 'RGUI'],
  ];

  ////////////////////////////////////
  //
  //  A toggle button that represents a bitwise value in an integer in a
  //  key_override. desc is what's shown to user.
  //  key_override[koid][name] += value (or -= on deselect)
  //
  ////////////////////////////////////
  function makeToggle(desc, koid, name, value) {
    let classes = 'ko-toggle';
    if ((KBINFO.key_overrides[koid][name] & value) !== 0) {
      classes = 'ko-toggle checked';
    }
    return EL('div', {
      class: classes,
      'data-koid': koid,
      'data-name': name,
      'data-value': value,
    }, desc);
  }

  ACTION.onclick('.ko-toggle', (target) => {
    const koid = target.dataset.koid;
    const ko = KBINFO.key_overrides[koid];
    const name = target.dataset.name;
    const value = parseInt(target.dataset.value);
    ko[name] = ko[name] ^ value;
    if ((ko[name] & value) !== 0) {
      target.classList.add('checked');
    } else {
      target.classList.remove('checked');
    }

    korows[koid].classList.add('changed');
    CHANGES.queue('ko' + koid, () => {
      KBAPI.updateKeyoverride(koid);
    });
  });

  // Click action for the keys.
  ACTION.onclick('[data-bound="keyoverride"]', (target) => {
    const koid = target.dataset.koid;
    const name = target.dataset.name;
    ACTION.selectKey(target);
    ACTION.on('bind', (keystr) => {
      KBINFO.key_overrides[koid][name] = keystr;

      korows[koid].classList.add('changed');
      CHANGES.queue('ko' + koid, () => {
        KBAPI.updateKeyoverride(koid);
      });
    });
  });

  ////////////////////////////////////
  //
  //  Render key overrides.
  //
  ////////////////////////////////////
  for (let koid = 0; koid < KBINFO.key_override_count; koid++) {
    const ko = KBINFO.key_overrides[koid]
    const tds = [];
    // Enable
    tds.push(EL('td', {}, makeToggle('On', koid, 'options', 0x80)));
    // Keys: trigger key and override
    tds.push(EL('td', {}, EL('div',
      {
        class: 'key',
        'data-koid': koid,
        'data-key': ko.trigger,
        'data-name': 'trigger',
        'data-bound': 'keyoverride',
      }, ''
    )));
    tds.push(EL('td', {}, EL('div',
      {
        class: 'key',
        'data-koid': koid,
        'data-key': ko.replacement,
        'data-name': 'replacement',
        'data-bound': 'keyoverride',
      }, ''
    )));
    // Mod Labels
    tds.push(EL('td', {}, [
      EL('div', {class: 'ko-mod-row', title: 'Trigger Mods'}, 'T'),
      EL('div', {class: 'ko-mod-row', title: 'Negative Mods'}, 'N'),
      EL('div', {class: 'ko-mod-row', title: 'Suppressed Mods'}, 'S'),
    ]));

    // 3 rows of mod key toggles.
    const rows = [];
    for (const type of ['trigger_mods', 'negative_mod_mask', 'suppressed_mods']) {
      const keys = [];
      for (const [bitid, name] of modLKeys) {
        keys.push(makeToggle(name, koid, type, bitid));
      }
      for (const [bitid, name] of modRKeys) {
        keys.push(makeToggle(name, koid, type, bitid));
      }
      rows.push(EL('div', {class: 'ko-mod-row'}, keys));
    }
    tds.push(EL('td', {}, rows));

    // Layers.
    const layers = [];
    for (let i = 0; i < KBINFO.layers; i++) {
      layers.push(makeToggle(''+i, koid, 'layers', 1 << i));
    }
    tds.push(EL('td', {class: 'ko-layer-td'}, layers));

    // Options.
    const options = [
      makeToggle('Activate on trigger down', koid, 'options', 0x01),
      makeToggle('Activate on mod down', koid, 'options', 0x02),
      makeToggle('Activate on negative mod up', koid, 'options', 0x04),
      makeToggle('Any trigger mod activates', koid, 'options', 0x08),
      makeToggle('No reregister trigger on deactivate', koid, 'options', 0x10),
      makeToggle('No unregister on other key down', koid, 'options', 0x20),
    ];

    tds.push(EL('td', {class: 'ko-option-td'}, options));

    // Add the row to the table.
    let evenodd = 'even';
    if (koid % 2 === 1) evenodd = 'odd';
    korows.push(EL('tr', {class: 'ko-row ' + evenodd}, tds));
  }
  appendChildren(koBoard, ...korows);
});
