// main.js
//
////////////////////////////////////
//
//  Tie together all the js files for KeyBard
//
///////////////////////////////////

function startKeyBard() {
  runInitializers('load');

  if (!navigator.hid) {
    get('#about').style['display'] = 'none';
    get('#launch').style['display'] = 'none';
    get('#nosupport').style['display'] = 'block';
    return;
  }

  if (SETTINGS.playback) {
    setTimeout(() => { doStuff(); }, 100);
  } else {
    get('#launch').onclick = () => {
      doStuff();
    }
  }
}

addInitializer('load', () => {
  const origs = [];
  for (const el of getAll('.on-connect')) {
    origs.push([el, el.style['display']]);
    el.style['display'] = 'none';
  }
  addInitializer('connected', () => {
    for (const orig of origs) {
      orig[0].style['display'] = orig[1];
    }
  });
});

async function tryConnect() {
  const opened = await USB.open([{
    // Filter for QMK/Vial kbs
    usagePage: 0xFF60,
    usage: 0x61,
  }]);
  return opened;
}

async function doStuff() {
  if (!await tryConnect()) {
    return false;
  }
  removeElement(get('#launch'));

  // TODO: other initialization paths: .vil upload, .kbi upload
  await initVial(KBINFO);
  // await initUploadKBInfo(WKB);

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
