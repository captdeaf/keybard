// main.js
//
////////////////////////////////////
//
//  Tie together all the js files for jsvial
//
///////////////////////////////////

function startJSVial() {
  const doPlayback = get('#do-playback');
  const doRecord = get('#do-record');

  Site.init();

  if (SETTINGS.playback) {
    setTimeout(() => { doStuff(); }, 100);
  } else {
    get('#launch').onclick = () => {
      doStuff();
    }
  }
}

async function doStuff() {
  removeElement(get('#launch'));
  // TODO: other initialization paths: .vil upload, .kbi upload
  await initVial(KBINFO);

  get('#active').style['display'] = 'flex';

  // Initialize KB UI
  runInitializers('ui');
}

async function initVial(kbinfo) {
  await Vial.init(kbinfo);
  await Vial.load(kbinfo);
}
