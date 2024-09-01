// main.js
//
////////////////////////////////////
//
//  Tie together all the js files for jsvial
//
///////////////////////////////////

PLAYBACK = false;
RECORDING = false;
LOAD_JSON = false;

function startJSVial() {
  const doPlayback = get('#do-playback');
  const doRecord = get('#do-record');

  doPlayback.onchange = UI.addToggle('checked', 'do-playback', false,
        (enabled) => {
          doPlayback.checked = enabled;
          PLAYBACK = enabled;
        }
      );

  doRecord.onchange = UI.addToggle('checked', 'do-recording', false,
        (enabled) => {
          doRecord.checked = enabled;
          RECORDING = enabled;
        }
      );

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
  if (LOAD_JSON) {
    await Vial.loadFromVilJSON(VIL);
  } else {
    await Vial.init();
  }

  setupSampleBoards(Vial.kbinfo);

  // Render main board.
  GUI.board = setupBoard(Vial.kbinfo);

  // Set up actions so we can start handling keypresses, etc.
  ACTION.setup();
}
