// kbdisplay.js
//
////////////////////////////////////
//
//  setupSample Boards: Set up the input keyboards. QWERTY, etc.
//
//  - Add click events to display different sample boards.
//  - Everything that has a data-shifted should copy its innerText to data-normal
//  - When a shift is toggled on, switch the sample boards to shift mode.
//  - Make modifier keys (shift, ctrl, etc) toggle-able.
//  - When any key with data-key is clicked, report it to
//    ACTION.trigger('bindkey', ...)
//
////////////////////////////////////

const SAMPLE_LAYERS = {};
const SAMPLE_KBIS = {};

addInitializer('load', () => {

  ////////////////////////////////////
  //
  // Events to display the different boards: QWERTY, AZERTY,
  // Custom/user events, layers, etc etc.
  //
  ////////////////////////////////////
  const allboards = {};

  for (const sel of getAll('.board-sel[data-board]')) {
    allboards[sel.dataset.board] = {
      selector: sel,
    };
  }

  for (const container of getAll('div.board-map[data-board]')) {
    allboards[container.dataset.board].container = container;
  }

  ACTION.onclick('.board-sel', (target) => {
    displayBoard(target.dataset.board);
    ACTION.menuClose();
  });

  function displayBoard(name) {
    setSaved('boardsel', name); 
    for (const board of Object.values(allboards)) {
      board.selector.classList.remove('active');
      board.container.style['display'] = 'none';
    }
    allboards[name].selector.classList.add('active');
    allboards[name].container.style['display'] = 'block';
  }

  const startingBoard = getSaved('boardsel', 'qwerty');
  displayBoard(startingBoard);

  ////////////////////////////////////
  //
  //  Generate the dynamic boards. appendBoard adds many keys at a time.
  //  Because 'data-key' is set, KEY.refreshAllKeys will correct all key
  //  labels and titles.
  //
  ////////////////////////////////////
  function appendBoard(name, keys, length, extra) {
    if (!length) length = 20;
    if (keys && keys.length > 0) {
      const board = allboards[name].container;
      let row = null;
      for (const i of range(keys.length)) {
        if ((i % length) === 0) {
          row = EL('div', {class: 'kb-row'});
          appendChildren(board, row);
          if (extra) {
            appendChildren(row, extra);
          }
        }
        appendChildren(row, EL('div',
          {
            class: 'key large kbdesc',
            'data-bind': 'key',
            'data-key': keys[i],
            title: keys[i],
          },
          keys[i])
        );
      }
    }
  }

  addInitializer('connected', () => {
    // Custom keycode labels.
    if (KBINFO.custom_keycodes) {
      appendBoard('custom', KBINFO.custom_keycodes.map((x) => x.name), 8);
    }

    // All layer selections.
    if (KBINFO.layers) {
      const layers = range(KBINFO.layers);

      // Layers: MO (Momentarily)
      function label(text) {
        return EL('div', {
          class: 'kbdesc layer-list-head',
        }, text);
      }
      appendBoard('layer', layers.map((i) => 'MO(' + i + ')'), 16, label('MO'));
      appendBoard('layer', layers.map((i) => 'DF(' + i + ')'), 16, label('DF'));
      appendBoard('layer', layers.map((i) => 'TG(' + i + ')'), 16, label('TG'));
      appendBoard('layer', layers.map((i) => 'TT(' + i + ')'), 16, label('TT'));
      appendBoard('layer', layers.map((i) => 'OSL(' + i + ')'), 16, label('OSL'));
      appendBoard('layer', layers.map((i) => 'TO(' + i + ')'), 16, label('TO'));
    }

    // modtaps lists layers for layer on hold, key on tap.
    // Disable the layer keys we don't use.
    // There are only 16 LT*(kc) keys, so don't go over.
    for (let i = 0; i < 16; i++) {
      if (KBINFO.layers <= i) {
        get('[data-layer="' + i + '"]').style['display'] = 'none';
      }
    }
  });


  ////////////////////////////////////
  //
  //  Sample layers. This populates the dropup menu with our sample boards.
  //
  ////////////////////////////////////
  const layermenu = get('#sample-layers');
  for (const [kbname, layers] of Object.entries(SAMPLE_LAYERS)) {
    const els = [];
    for (const [layername, map] of Object.entries(layers)) {
      els.push(EL('label', {
        'data-sample-kb': kbname,
        'data-sample-layer': layername,
      }, layername));
    }
    const content = EL('div', {
      class: 'dropdown-content',
    }, els);
    appendChildren(layermenu, EL('label', {
      class: 'menuitem dropdown'
    }, '&gt; ' + kbname, content));
  }

  // Generic
  appendChildren(layermenu,
    EL('label', {
      'data-sample-kb': 'fill',
      'data-sample-key': 'KC_NO',
    }, 'Disable all keys'),
    EL('label', {
      'data-sample-kb': 'fill',
      'data-sample-key': 'KC_TRNS',
    }, 'Mark all keys transparent'),
    EL('label', {
      'data-sample-kb': 'fillEmpty',
      'data-sample-key': 'KC_TRNS',
    }, 'Change all disabled keys to transparent'),
  );

  ACTION.onclick('[data-sample-kb]', (target) => {
    const which = target.dataset.sampleKb;
    if (which === 'fill') {
      const km = KBINFO.keymap[MAINBOARD.selectedLayer];
      const key = target.dataset.sampleKey;
      KBINFO.keymap[MAINBOARD.selectedLayer] = km.map(() => key);
    } else if (which === 'fillEmpty') {
      const km = KBINFO.keymap[MAINBOARD.selectedLayer];
      const key = target.dataset.sampleKey;
      for (let kmid = 0; kmid < km.length; kmid++) {
        if (km[kmid] === 'KC_NO') {
          km[kmid] = key;
        }
      }
    } else {
      const kmap = SAMPLE_LAYERS[which][target.dataset.sampleLayer];
      KBINFO.keymap[MAINBOARD.selectedLayer] = structuredClone(kmap);
    }
    updateAllChanges();
    ACTION.menuClose();
  });

  ////////////////////////////////////
  //
  //  Sample kbinfos - replace the entire kbinfo. Kinda like uploading,
  //  but we have them for examples.
  //
  ////////////////////////////////////

  const kbimenu = get('#sample-kbis');
  for (const [kbname, kbis] of Object.entries(SAMPLE_KBIS)) {
    const els = [];
    for (const [kbiname, map] of Object.entries(kbis)) {
      els.push(EL('label', {
        'data-sample-kbi': kbname,
        'data-sample-kbid': kbiname,
      }, kbiname));
    }
    const content = EL('div', {
      class: 'dropdown-content',
    }, els);
    appendChildren(kbimenu, EL('label', {
      class: 'menuitem dropdown'
    }, kbname, content));
  }

  ACTION.onclick('[data-sample-kbi]', (target) => {
    const kbi = SAMPLE_KBIS[target.dataset.sampleKbi][target.dataset.sampleKbid];
    KBINFO = kbi;
    updateAllChanges();
    ACTION.menuClose();
  });
});
