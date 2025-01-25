// main.js
//
////////////////////////////////////
//
//  Tie together all the js files for KeyBard
//
///////////////////////////////////

let CONNECTED = false;

const PARAMS = new URL(window.location.href).searchParams;

function startKeyBard() {
  runInitializers('load');
  if (!navigator.hid) {
    get('#launch').style['display'] = 'none';
    get('#nosupport').style['display'] = 'block';
    return;
  }

  const kbiuri = PARAMS.get('kbi');

  if (SETTINGS.playback) {
    setTimeout(() => {
      doStuff();
    }, 100);
  } else {
    get('#launch').onclick = () => {
      doStuff();
    };
  }
  if (kbiuri) {
    tryFetchKBI(kbiuri);
  }
}

async function tryFetchKBI(kbiuri) {
  const resp = await fetch(kbiuri);
  const kbinfo = await resp.json();
  if (kbinfo && kbinfo.payload) {
    doStuff(kbinfo);
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
    for (const menuitem of getAll('.connect-enable')) {
      menuitem.classList.remove('connect-enable');
    }
  });
});

async function tryConnect() {
  const opened = await USB.open([
    {
      // Filter for QMK/Vial kbs
      usagePage: 0xff60,
      usage: 0x61,
    },
  ]);
  return opened;
}

async function doStuff(kbinfo) {
  if (kbinfo) {
    setActiveKBINFO(kbinfo);
    await initUploadedKBINFO();
  } else {
    if (!(await tryConnect())) {
      return false;
    }
    const kbinfo = {};
    await initVial(kbinfo);
    setActiveKBINFO(kbinfo);
  }

  removeElement(get('#launch'));
  removeElement(get('#nosupport'));

  console.log('kbinfo', KBINFO);
  BASE_KBINFO = structuredClone(KBINFO);

  // Initialize KB UI
  CONNECTED = true;
  runInitializers('connected');

  KEYUI.refreshAllKeys();

  const launch = PARAMS.get('launch');
  if (launch === 'matrixtester') {
    get('[data-open="#float-matrix-tester"]').click();
    setTimeout(() => {
      get('[data-action="matrix-poll"]').click();
    }, 100);
  }
}

async function initUploadedKBINFO() {}

async function initVial(kbinfo) {
  await Vial.init(kbinfo);
  await Vial.load(kbinfo);
}
