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

  UI.init();

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

  const kbinfo = {};

  // TODO: other initialization paths: .vil upload, .kbi upload
  await initVial(kbinfo);

  console.log(kbinfo);

  setupSampleBoards(kbinfo);

  // Render main board.
  GUI.board = setupBoard(kbinfo);

  // Set up actions so we can start handling keypresses, etc.
  ACTION.setup();
}

async function initVial(kbinfo) {
  await Vial.init(kbinfo);
}
