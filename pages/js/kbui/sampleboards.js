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
function setupSampleBoards(kbinfo) {
  function displayBoard(name) {
    // Board selection.
    const allboards = getAll('div.board-map');
    for (const board of allboards) {
      board.style['display'] = 'none';
    }
    get('#' + name + '-board').style['display'] = 'block';
  }

  displayBoard('qwerty');

  const boardsels = getAll('div.board-sel');
  for (const boardsel of boardsels) {
    boardsel.onclick = () => {
      displayBoard(boardsel.dataset.board);
    }
  }

  function appendBoard(name, keys, length) {
    if (!length) length = 20;
    if (keys && keys.length > 0) {
      const board = get('#' + name + '-board')
      let row = null;
      for (const i of range(keys.length)) {
        if ((i % 20) === 0) {
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

  appendBoard('custom', kbinfo.custom_keycodes.map((x) => x.name), 20);

  if (kbinfo.layers) {
    const layers = range(kbinfo.layers);

    // Layers: MO (Momentarily)
    appendBoard('layer', layers.map((i) => 'MO(' + i + ')'));
    appendBoard('layer', layers.map((i) => 'DF(' + i + ')'));
    appendBoard('layer', layers.map((i) => 'TG(' + i + ')'));
    appendBoard('layer', layers.map((i) => 'TT(' + i + ')'));
    appendBoard('layer', layers.map((i) => 'OSL(' + i + ')'));
    appendBoard('layer', layers.map((i) => 'TO(' + i + ')'));
    appendBoard('layer', layers.map((i) => 'LT ' + i + ' (kc)'));
  }

  const allKeys = getAll('[data-key]')
  const shiftableKeys = getAll('[data-shifted]')

  // Copy orig innerHTMLs to data-normal
  for (const key of shiftableKeys) {
    key.dataset.normal = key.innerHTML;
  }

  const modsSelected = {
    SHIFT: false,
    CTRL: false,
    GUI: false,
    ALT: false,
    RHS: false,
  };

  const modMasks = {
    CTRL: 0x0100,
    SHIFT: 0x0200,
    ALT: 0x0400,
    GUI: 0x0800,
    RHS: 0x1000,
  }

  let modmask = 0;

  // Most board keys have modifiers. macros, combos, etc don't.
  function updateModifiers(which) {
    modmask = 0;
    for (const keymod of getAll('[data-modifier]')) {
      for (const [mod, enabled] of Object.entries(modsSelected)) {
        if (enabled) {
          modmask = modmask | modMasks[mod];
        }
      }
    }

    if (which === 'SHIFT') {
      if ((modmask & modMasks.SHIFT) === modMasks.SHIFT) {
        for (const key of shiftableKeys) {
          key.innerHTML = key.dataset.shifted;
        }
      } else {
        for (const key of shiftableKeys) {
          key.innerHTML = key.dataset.normal;
        }
      }
    }
  }

  const modifierKeys = getAll('.key-mod[data-modifier]');

  for (const key of modifierKeys) {
    const mod = key.dataset.modifier;
    let val = modsSelected[mod];
    key.onclick = () => {
      val = !val;
      if (val) {
        key.classList.add('selected');
      } else {
        key.classList.remove('selected');
      }
      modsSelected[mod] = val;
      updateModifiers(mod);
    };
  }

  const allBoardKeys = getAll('[data-bind]');
  for (const keyimage of allBoardKeys) {
    if (keyimage.dataset.bind === 'key') {
      keyimage.onclick = (ev) => {
          ACTION.trigger('keySelect', keyimage.dataset.key);
      }
    } else if (keyimage.dataset.bind === 'keymask') {
      keyimage.onclick = (ev) => {
        const keyid = KEY.parse(keyimage.dataset.key);
        if (modmask) {
          console.log("Got keypress modded", keyid, modmask);
          const keystr = KEY.stringify(keyid + modmask);
          ACTION.trigger('keySelect', keystr);
        } else {
          console.log("Got keypress unmodded", keyid);
          ACTION.trigger('keySelect', keyimage.dataset.key);
        }
      }
    } else {
      alertUser('unknown dataset.bind', keyimage.dataset.bind);
    }
  }
}

// Don't run until site is loaded
addInitializer('ui', setupSampleBoards, 1000);
