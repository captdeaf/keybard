////////////////////////////////////
//
//  Key Overrides: Viewing/Editing
//
////////////////////////////////////

const KEY_OVERRIDES = {
  // Update changes between BASE_KBINFO and KBINFO.
  updateAll: null,
};

addInitializer('connected', () => {
  const koBoard = get('#keyoverride-table');

  // korows will contain all the <tr>s for each
  // key override.
  let korows = [];

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

  // Bind action for the keys.
  ACTION.on('bind-keyoverride', (keystr, target) => {
    const koid = target.dataset.koid;
    const name = target.dataset.name;
    // Update KO
    KBINFO.key_overrides[koid][name] = keystr;

    korows[koid].classList.add('changed');
    CHANGES.queue('ko' + koid, () => {
      KBAPI.updateKeyoverride(koid);
    });

    // Update UI
    target.dataset.key = keystr;
    KEYUI.refreshKey(target);
    ACTION.selectKey();
  });

  ACTION.on('key-revert-keyoverride', (target) => {
    const koid = target.dataset.koid;
    const name = target.dataset.name;
    // Update KO
    const oldkeystr = BASE_KBINFO.key_overrides[koid][name];
    KBINFO.key_overrides[koid][name] = keystr;

    CHANGES.clear('ko' + koid);

    // Update UI
    target.dataset.key = oldkeystr;
    KEYUI.refreshKey(target);
  });

  ////////////////////////////////////
  //
  //  Render key overrides.
  //
  ////////////////////////////////////
  function renderAllOverrides() {
    koBoard.innerHTML = '';
    korows = [];
    for (let koid = 0; koid < KBINFO.key_override_count; koid++) {
      const ko = KBINFO.key_overrides[koid]
      const bko = BASE_KBINFO.key_overrides[koid];

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

      const rowTypes = [
        ['trigger_mods', "Trigger Mods - require one or all of these."],
        ['negative_mod_mask', "Negative mods - don't function if these are down."],
        ['suppressed_mod', "Suppressed mods - don't send mod, even if pressed."],
      ];

      // 3 rows of mod key toggles.
      const rows = [];
      for (const [type, title] of rowTypes) {
        const keys = [];
        for (const [bitid, name] of modLKeys) {
          keys.push(makeToggle(name, koid, type, bitid));
        }
        for (const [bitid, name] of modRKeys) {
          keys.push(makeToggle(name, koid, type, bitid));
        }
        rows.push(EL('div', {class: 'ko-mod-row', title: title}, keys));
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
  }
  renderAllOverrides();

  ////////////////////////////////////
  //
  //  Called when a file is uploaded or a device is connected after a file
  //  is uploaded. Mark and queue all changes.
  //
  ////////////////////////////////////
  KEY_OVERRIDES.updateAll = () => {
    renderAllOverrides();
    for (let koid = 0; koid < KBINFO.key_override_count; koid++) {
      const ko = KBINFO.key_overrides[koid];
      const bko = BASE_KBINFO.key_overrides[koid];

      if ((ko.layers !== bko.layers) ||
          (ko.negative_mod_mask !== bko.negative_mod_mask) ||
          (ko.options !== bko.options) ||
          (ko.replacement !== bko.replacement) ||
          (ko.suppressed_mods !== bko.suppressed_mods) ||
          (ko.trigger !== bko.trigger) ||
          (ko.trigger_mods !== bko.trigger_mods)) {
        korows[koid].classList.add('changed');
        CHANGES.queue('ko' + koid, () => {
          KBAPI.updateKeyoverride(koid);
        });
      }
    }
  };
});
