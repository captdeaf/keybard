// kbdisplay.js
//
////////////////////////////////////
//
//  setupSample Boards: Set up the input keyboards. QWERTY, etc.
//
//  - Add click events to display different sample boards.
//  - Everything that has a data-shifted should copy its innerText to data-normal
//  - When a shift is toggled on, switch the sample boards to shift mode.
//  - Set the modifier keys to toggle.
//  - When any key with data-key is clicked, report it to GUI.assignKey
//
////////////////////////////////////
addInitializer('connected', () => {
  const boardsels = getAll('div.board-sel');
  for (const boardsel of boardsels) {
    boardsel.onclick = (evt) => {
      displayBoard(boardsel.dataset.board, evt.target);
    }
  }

  function displayBoard(name, el) {
    // Board selection.
    setSaved('boardsel', name); 
    const allboards = getAll('div.board-map');
    for (const boardsel of boardsels) {
      boardsel.classList.remove('selected');
    }
    el.classList.add('selected');
    for (const board of allboards) {
      board.style['display'] = 'none';
    }
    get('#' + name + '-board').style['display'] = 'block';
  }

  const startingBoard = getSaved('boardsel', 'qwerty');
  displayBoard(startingBoard, get('.board-sel[data-board="' + startingBoard + '"]'));

  function appendBoard(name, keys, length) {
    if (!length) length = 20;
    if (keys && keys.length > 0) {
      const board = get('#' + name + '-board')
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

  if (KBINFO.custom_keycodes) {
    appendBoard('custom', KBINFO.custom_keycodes.map((x) => x.name), 8);
  }

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
