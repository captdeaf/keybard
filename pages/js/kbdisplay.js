// kbdisplay.js
//
////////////////////////////////////
//
//  Display the connected keyboard.
//
///////////////////////////////////

// All GUI functions relating just to the board.
// Returns an object for GUI.board global
function setupBoard(keylayout, layers) {
  // Current settings.
  let layer = 0;
  let selectedKey = null;

  // Board image, just for updating, really.
  const board = get('#mainboard');
  // keys[kmid] = {image: element, text: element};
  const keys = {};

  const children = [];
  for (const [kmid, opts] of Object.entries(keylayout)) {
    keys[kmid] = renderKey(kmid, opts);
    children.push(keys[kmid].image);
  }
  appendChildren(board, ...children);

  function drawLayer(layerid) {
    const keymap = layers[layerid];
    for (const [kmid, key] of Object.entries(keys)) {
      refreshKey(keys[kmid], keymap[kmid]);
    }
  }

  drawLayer(0);

  return {
  };
};

