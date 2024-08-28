// kbdisplay.js
//
////////////////////////////////////
//
//  Display the connected keyboard.
//
///////////////////////////////////
function setupBoard(keylayout, layers) {

  function strDefault(val, i) {
    if (val) return val;
    return '' + i;
  }

  ////////////////////////////////////
  //
  //  Render a single key, including hover tips for macros, etc.
  //
  ///////////////////////////////////
  function renderKey(kmid, opts) {
    // When drawing keyboard, style the keys.

    const keyimage = EL('div', {
      class: 'key',
      id: kmid,
      style: {
        width: Math.floor(opts.w * 25) + 'px',
        height: Math.floor(opts.h * 25) + 'px',
        top: Math.floor((opts.y * 30)) + 'px',
        left: Math.floor((opts.x * 30)) + 'px',
        position: 'absolute',
      },
    }, ' ');

    return {
      id: kmid,
      image: keyimage,
    }
  }

  ////////////////////////////////////
  //
  //  refreshKey: Update the contents of a key.
  //
  //  Normal: "a", "Caps\nLock", etc.
  //  Macro: "MACRO\n(text...)"
  //  Layer: "LAYER\n(name or num)"
  //
  ////////////////////////////////////
  const KEY_DESCS = {
    layer: {
      MO:  ['Lmnt', 'While pressed, switch to layer:', 'key-layer key-layer-mo'],
      DF:  ['Ldef', 'Make default layer:', 'key-layer key-layer-df'],
      TG:  ['Ltog', 'Toggle to layer:', 'key-layer key-layer-tg'],
      TT:  ['Ltmp', 'Switch/Toggle to layer:', 'key-layer key-layer-tt'],
      OSL: ['Losl', 'Toggle to layer for one key:', 'key-layer key-layer-osl'],
      TO:  ['Lto', 'Make layer default:', 'key-layer key-layer-to'],
    }
  };

  function getKeyContents(key, names) {
    let text = key.qmkid;
    let title = key.qmkid;
    if (key.str) text = key.str;
    if (key.title) title = key.title;
    let descs;
    if (key.type in KEY_DESCS) {
      descs = KEY_DESCS[key.type];
      if (key.stype && key.stype in descs) {
        descs = KEY_DESCS[key.type][key.stype];
      }
      // text = descs[0];
      title = title + ': ' + descs[1];
    }
    if (names[key.type] && names[key.type][key.index]) {
      text = '\n<span class="' + descs[2] + '">' + names[key.type][key.index] + '</span>',
      title = title + names[key.type][key.index];
    }
    return {
      text: text,
      title: title,
    }
  }

  function refreshKey(keydef, key, names) {
    const content = getKeyContents(key, names);
    keydef.image.innerHTML = content.text;
    keydef.image.setAttribute('title', strDefault(content.title, ''));
  }

  ////////////////////////////////////
  //
  //  Draw the whole board.
  //
  ////////////////////////////////////
  const layerSelection = get('#layer-selection')
  const board = get('#mainboard');

  // Current settings.
  let selectedLayer = 0;
  let selectedKey = null;
  let children = [];

  // keys[kmid] = {image: element, text: element};
  const keys = {};

  for (const [kmid, key] of Object.entries(keylayout)) {
    keys[kmid] = renderKey(kmid, key);
    children.push(keys[kmid].image);
  }
  appendChildren(board, ...children);

  function drawLayer(layerid) {
    selectedLayer = layerid;
    const keymap = layers[layerid];
    for (const [kmid, key] of Object.entries(keys)) {
      refreshKey(keys[kmid], keymap[kmid], EDITABLE_NAMES);
    }
  }

  children = [];
  for (let i = 0; i < layers.length; i++) {
    const layerid = i;
    let layerName = strDefault(EDITABLE_NAMES.layer[i], i);
    const layerSel = EL('div', {
      'class': 'layer',
    }, editableName('layer', i));
    layerSel.onclick = () => {
      drawLayer(layerid);
    }
    children.push(layerSel);
  }
  appendChildren(layerSelection, ...children);

  drawLayer(0);

  ////////////////////////////////////
  //
  //  How the rest of the JS updates our board.
  //  This is GUI.board
  //
  ////////////////////////////////////
  return {
    refresh: () => { drawLayer(selectedLayer); }
  };
};

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
function setupSampleBoards() {
  function displayBoard(name) {
    get('#board-' + name).style['display'] = 'block';
  }

  // Board selection.
  const allboards = getAll('div.board-map');
  for (const board of allboards) {
    board.style['display'] = 'none';
  }

  displayBoard('qwerty');

  const boardsels = getAll('div.board-sel');
  for (const boardsel of boardsels) {
    boardsel.onclick = () => {
      displayBoard(boardsel.dataset.board);
    }
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
  };

  const modMasks = {
    SHIFT: 0x0100,
    CTRL: 0x0200,
    GUI: 0x0400,
    ALT: 0x0800,
    RHS: 0x1000,
  }

  let modmask = 0;

  function updateModifiers() {
    for (const keymod of getAll('[data-modifier]')) {
      const mod = keymod.dataset.modifier;
      modsSelected[mod] = !modsSelected[mod];

      let newModMask = 0;
      for (const [mod, enabled] of Object.entries(modsSelected)) {
        if (enabled) {
          newModMask = newModMask | modMasks[mod];
        }
      }

      if ((newModMask & modMasks.SHIFT) != (modmask & modMasks.SHIFT)) {
        if (newModMask & modMasks.SHIFT === modMasks.SHIFT) {
          for (key of shiftableKeys) {
            key.innerHTML = key.dataset.shifted;
          }
        } else {
          for (key of shiftableKeys) {
            key.innerHTML = key.dataset.normal;
          }
        }
      }

      modMask = newModMask;
    }
  }

  const modifierKeys = getAll('.key-mod[data-modifier]');
  for (const key of modifierKeys) {
    const mod = key.dataset.modifier;
    let val = modsSelected[mod];
    key.onclick = () => {
      console.log("click?");
      val = !val;
      if (val) {
        key.classList.add('selected');
      } else {
        key.classList.remove('selected');
      }
      modsSelected[mod] = val;
      updateModifiers();
    };
  }
}
