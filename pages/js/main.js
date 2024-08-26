// main.js
//
////////////////////////////////////
//
//  Tie together all the js files for jsvial
//
///////////////////////////////////

PLAYBACK = true;
RECORDING = true;

function startJSVial() {
  if (PLAYBACK) {
    setTimeout(() => doStuff(), 10);
  } else {
    get('#launch').onclick = () => {
      doStuff();
    }
  }
}

const GUI = {
  // The main board. This will be updated with 'API'.
  board: {},
};

async function doStuff() {
  removeElement(get('#launch'));
  await Vial.init();

  GUI.board = setupBoard(Vial.kbinfo.keylayout);
  GUI.board.drawLayer(Vial.kbinfo.keymap[0]);
}
