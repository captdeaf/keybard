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
addInitializer('connected', () => {

  ////////////////////////////////////
  //
  // Events to display the different boards: QWERTY, AZERTY,
  // Custom/user events, layers, etc etc.
  //
  ////////////////////////////////////
  const allboards = {};

  for (const sel of getAll('div.board-sel')) {
    allboards[sel.dataset.board] = {
      selector: sel,
    };
  }

  for (const container of getAll('div.board-map')) {
    allboards[container.dataset.board].container = container;
  }

  ACTION.onclick('.board-sel', (target) => {
    displayBoard(target.dataset.board);
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
  function appendBoard(name, keys, length) {
    if (!length) length = 20;
    if (keys && keys.length > 0) {
      const board = allboards[name].container;
      let row = null;
      for (const i of range(keys.length)) {
        if ((i % length) === 0) {
          row = EL('div', {class: 'kb-row'});
          appendChildren(board, row);
        }
        appendChildren(row, EL('div',
          {
            class: 'key large',
            'data-bind': 'key',
            'data-key': keys[i],
            title: keys[i],
          },
          keys[i])
        );
      }
    }
  }

  // Custom keycode labels.
  if (KBINFO.custom_keycodes) {
    appendBoard('custom', KBINFO.custom_keycodes.map((x) => x.name), 8);
  }

  // All layer selections.
  if (KBINFO.layers) {
    const layers = range(KBINFO.layers);

    // Layers: MO (Momentarily)
    appendBoard('layer', layers.map((i) => 'MO(' + i + ')'));
    appendBoard('layer', layers.map((i) => 'DF(' + i + ')'));
    appendBoard('layer', layers.map((i) => 'TG(' + i + ')'));
    appendBoard('layer', layers.map((i) => 'TT(' + i + ')'));
    appendBoard('layer', layers.map((i) => 'OSL(' + i + ')'));
    appendBoard('layer', layers.map((i) => 'TO(' + i + ')'));
  }

});
