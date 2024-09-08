// main.js
//
////////////////////////////////////
//
//  Tie together all the js files for jsvial
//
///////////////////////////////////

function startJSVial() {
  runInitializers('load');

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
  // await initUploadKBInfo(WKB);

  get('#active').style['display'] = 'flex';

  console.log('kbinfo', KBINFO);
  BASE_KBINFO = deepCopy(KBINFO);

  // Initialize KB UI
  runInitializers('connected');

  KEYUI.refreshAllKeys();
}

async function initUploadKBInfo(kbinfo) {
    KBINFO = kbinfo;
    // Regenerate keycodes for macros and features.
    await KEY.generateAllKeycodes(kbinfo);
    // Visual layout.
    await Vial.kb.getKeyLayout(kbinfo);
}

async function initVial(kbinfo) {
  await Vial.init(kbinfo);
  await Vial.load(kbinfo);
}
