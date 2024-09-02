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

  Site.init();

  doPlayback.onchange = Site.addToggle('do-playback', false,
        (enabled) => {
          doPlayback.checked = enabled;
          PLAYBACK = enabled;
        }
      );

  doRecord.onchange = Site.addToggle('do-recording', false,
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

async function doStuff() {
  removeElement(get('#launch'));
  get('#active').style['display'] = 'block';

  const kbinfo = {};

  // TODO: other initialization paths: .vil upload, .kbi upload
  await initVial(kbinfo);

  console.log(kbinfo);

  // Initialize KB UI
  runInitializers('ui', kbinfo);
}

async function initVial(kbinfo) {
  await Vial.init(kbinfo);
  await Vial.load(kbinfo);
}
