// main.js
//
////////////////////////////////////
//
//  Tie together all the js files for jsvial
//
///////////////////////////////////

PLAYBACK = false;
RECORDING = false;

function startJSVial() {
  const doPlayback = get('#do-playback');
  const doRecord = get('#do-record');

  doPlayback.onchange = addToggle('checked', 'do-playback', false,
        (enabled) => {
          doPlayback.checked = enabled;
          PLAYBACK = enabled;
        }
      );

  doRecord.onchange = addToggle('checked', 'do-recording', false,
        (enabled) => {
          doRecord.checked = enabled;
          RECORDING = enabled;
        }
      );

  console.log("pbr", PLAYBACK, RECORDING);

  if (PLAYBACK) {
    setTimeout(() => { doStuff(); }, 100);
  } else {
    get('#launch').onclick = () => {
      doStuff();
    }
  }
}

const GUI = {
  // The main board. This will be updated with its 'API'.
  board: {},
};

async function doStuff() {
  removeElement(get('#launch'));
  get('#active').style['display'] = 'block';

  // Set up vial, getting everything from the keyboard.
  // This might eventually also support, e.g: .vil file loads instead.
  await Vial.init();

  setupSampleBoards();

  // Render board.
  GUI.board = setupBoard(Vial.kbinfo.keylayout, Vial.kbinfo.keymap);
}
