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

const BOARD_NAMES = {
  qwerty: 'Keyboard Keys',
  international: 'International',
  custom: 'Mouse and Special Keys',
  layer: 'Layers',
  macro: 'Macros',
  tapdance: 'Tap Dances',
  modtaps: 'Mod Hold, Tap Keys',
  quantum: 'QMK Keys',
  mouse: 'Mouse Keys',
  misc: 'Miscellaneous keys',
  steno: 'Steno keys',
  backlights: 'QMK Backlights',
  audio: 'Audio Keys',
  magic: 'QMK Magic Keys',
  midi: 'MIDI Keys',
  media: 'App and Media Keys',
};

const SAMPLE_BOARDS = {
  // Display a specific board.
  display: undefined,
  // When editing a macro or tapdance, on close we revert to it.
  editing: undefined,
};

addInitializer('load', () => {
  ////////////////////////////////////
  //
  // Events to display the different boards: QWERTY, AZERTY,
  // Custom/user events, layers, etc etc.
  //
  ////////////////////////////////////
  const allboards = {};
  const allboardsContainer = get('#allboards');
  const sidebarSelector = get('#sidebar');

  for (const sel of getAll('.board-sel[data-board]')) {
    allboards[sel.dataset.board] = {
      selector: sel,
    };
  }

  for (const container of getAll('div.board-map[data-board]')) {
    if (allboards[container.dataset.board]) {
      allboards[container.dataset.board].container = container;
    }
  }

  // const allTabs = getAll(".main-select");
  const allContainers = getAll('.main-container');

  function selectTab(target) {
    for (const container of allContainers) {
      if (container.id === target) {
        container.style.display = 'flex';
      } else {
        container.style.display = 'none';
      }
    }
  }

  function displayBoard(name) {
    setSaved('boardsel', name);
    if (name === 'keyoverride-container') return;
    allboardsContainer.style['display'] = 'block';
    sidebarSelector.classList.add('active');
    for (const [k, board] of Object.entries(allboards)) {
      console.log("trying", k);
      board.selector.classList.remove('active');
      board.container.style['display'] = 'none';
    }
    allboards[name].selector.classList.add('active');
    allboards[name].container.style['display'] = 'block';
    const boardTitle = get('#board-title');
    boardTitle.innerText = BOARD_NAMES[name];
  }

  SAMPLE_BOARDS.display = displayBoard;

  function closeBoard() {
    ACTION.closeFloats();
    sidebarSelector.classList.remove('active');
    allboardsContainer.style['display'] = 'none';
  }

  selectTab(getSaved('main-container', 'mainboard-container'));

  ACTION.onclick('.board-sel', (target) => {
    selectTab('mainboard-container');
    displayBoard(target.dataset.board);
    // ACTION.menuClose();
  });

  ACTION.onclick('.close-button', () => {
    closeBoard();
  });

  if (CONNECTED) {
    const startingBoard = getSaved('boardsel', 'qwerty');
    displayBoard(startingBoard);
  }

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
      const board = get(name);
      let row = null;
      for (const i of range(keys.length)) {
        if (i % length === 0) {
          row = EL('div', { class: 'kb-row' });
          appendChildren(board, row);
          if (extra) {
            appendChildren(row, extra);
          }
        }
        appendChildren(
          row,
          EL(
            'div',
            {
              class: `key kb-key ${name === '#kb-custom' ? 'elastic' : ''}`,
              'data-bind': 'key',
              'data-key': keys[i],
              title: keys[i],
            },
            keys[i]
          )
        );
      }
    }
  }

  addInitializer('connected', () => {
    // Custom keycode labels.
    if (KBINFO.custom_keycodes) {
      appendBoard(
        '#kb-custom',
        KBINFO.custom_keycodes.map((x) => x.name),
        5
      );
    }

    // All layer selections.
    if (KBINFO.layers) {
      const layers = range(KBINFO.layers);

      const list = get('#layer-modifier-selection');
      console.log(list);
      function layerLabel(layerid) {
        const editable = makeEditableName(EL('div'), 'layer', layerid);
        const name = getSaved('names')?.layer?.[layerid];
        const label = EL(
          'div',
          {
            'data-render': 'layer',
            'data-id': layerid,
            style: {
              flexGrow: 1,
              padding: '5px',
              marginLeft: '30px',
              marginRight: '30px',
              minHeight: '20px',
              borderBottom: '1px dotted #ccc',
              fontWeight: '500',
              cursor: 'pointer',
            },
            'data-layer-modifier-select': layerid,
          },
          name
        );

        const layerContainer = EL('div', {
          class: 'layer-modifier-container',
          'data-layer': layerid,
          style: {
            display: 'flex',
            'flex-direction': 'row',
            'align-items': 'center',
            width: '90%',
            margin: '10px auto',
            paddingRight: '20px',
            justifyContent: 'center',
          },
        });
        const keytpl = EL('div', {
          id: 'layer-' + layerid,
          class: 'layer-key',
          style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            alignContent: 'center',
            justifyItems: 'center',
            backgroundColor: '#000',
            color: '#fff',
            paddingTop: '5px',
            borderRadius: '5px',
            fontSize: '14px',
          },
          'data-layer-modifier-select': layerid,
        });
        const layerIcon = EL(
          'div',
          {
            style: {
              width: '16px',
              height: '16px',
              marginBottom: '5px',
            },
          },
          SVG.layerIcon()
        );
        const layerHsv255 = KBINFO.layer_colors[layerid];
        const layerIro = IROIRO.hsv255ToIro(layerHsv255);
        const colorHex = layerIro.hexString;
        const colorDot = EL('div', {
          class: 'color-dot',
          style: {
            backgroundColor: colorHex,
            borderRadius: '50%',
            width: '15px',
            height: '15px',
            marginRight: '15px',
          },
        });
        appendChildren(keytpl, layerIcon, `${layerid}`);
        appendChildren(layerContainer, colorDot, label, keytpl);
        return layerContainer;
      }

      appendChildren(
        list,
        layers.map((i) => layerLabel(i))
      );
    }

    // modtaps lists layers for layer on hold, key on tap.
    // Disable the layer keys we don't use.
    // There are only 16 LT*(kc) keys, so don't go over.
    for (let i = 0; i < 16; i++) {
      if (KBINFO.layers <= i) {
        get('[data-layer="' + i + '"]').style['display'] = 'none';
      }
    }
    displayBoard('qwerty');
  });
});
