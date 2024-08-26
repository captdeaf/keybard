// kbdisplay.js
//
////////////////////////////////////
//
//  Display the connected keyboard.
//
///////////////////////////////////

PLAYBACK = true;
RECORDING = true;

// All GUI functions relating just to the board.
// Returns an object for GUI.board global
function setupBoard(keylayout) {
  // When drawing keyboard, style the keys.
  function getStyleFor(opts) {
    return {
      top: Math.floor((opts.y * 30) + 120) + 'px',
      left: Math.floor((opts.x * 30) + 120) + 'px',
      width: Math.floor(opts.w * 25) + 'px',
      height: Math.floor(opts.h * 25) + 'px',
      position: 'fixed',
    };
  }

  // keyElements is all the <div>s of the keys, indexed by layer-key ID.
  const keys = {};

  // Put together the UI elements.
  const board = get('#mainboard');
  const children = [];
  for (const [kmid, opts] of Object.entries(keylayout)) {
    const keytext = EL('p', {}, '?');
    const keyimage = EL('div', {
      class: 'key',
      style: getStyleFor(opts),
    }, keytext);
    opts.keyimage = keyimage;
    keys[kmid] = {
      image: keyimage,
      text: keytext,
    }
    children.push(keyimage);
  }
  appendChildren(board, ...children);

  function drawLayer(keymap) {
    for (const [kmid, key] of Object.entries(keys)) {
      const keydef = keymap[kmid];
      let contents = '';
      if (keydef && keydef.str) {
        contents = keydef.str
      }
      keys[kmid].text.innerHTML = contents;
    }
  }

  return {
    drawLayer: drawLayer,
  };
};

