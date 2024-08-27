// kbdisplay.js
//
////////////////////////////////////
//
//  Display the connected keyboard.
//
///////////////////////////////////

////////////////////////////////////
//
//  Render a single key, including hover tips for macros, etc.
//
///////////////////////////////////
function renderKey(kmid, opts) {
  if (!opts) opts = {};
  if (!opts.w) opts.w = {};
  if (!opts.h) opts.h = {};
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
function refreshKey(keydef, key) {
  if (key && key.str) {
    keydef.image.innerText = key.str;
  } else {
    keydef.image.innerText = ' ';
  }
}

////////////////////////////////////
//
//  Draw the whole board. This defines GUI.board.(funcs)
//
////////////////////////////////////
function setupBoard(keylayout, layers) {
  const layerNames = getSaved('layer-names', {});
  const layerSelection = get('#layer-selection')
  const board = get('#mainboard');

  // Current settings.
  let selectedLayer = 0;
  let selectedKey = null;
  let children = [];

  // keys[kmid] = {image: element, text: element};
  const keys = {};

  for (const [kmid, opts] of Object.entries(keylayout)) {
    keys[kmid] = renderKey(kmid, opts);
    children.push(keys[kmid].image);
  }
  appendChildren(board, ...children);

  function drawLayer(layerid) {
    selectedLayer = layerid;
    const keymap = layers[layerid];
    for (const [kmid, key] of Object.entries(keys)) {
      refreshKey(keys[kmid], keymap[kmid]);
    }
  }

  children = [];
  for (let i = 0; i < layers.length; i++) {
    const layerid = i;
    let layerName = '' + i;
    if (layerNames[i]) {
      layerName = '' + i + ': ' + layerNames[i];
    }
    const layerSel = EL('div', {
      'class': 'layer',
    }, '' + i);
    layerSel.onclick = () => {
      drawLayer(layerid);
    }
    children.push(layerSel);
  }
  appendChildren(layerSelection, ...children);

  drawLayer(0);

  return {
  };
};
