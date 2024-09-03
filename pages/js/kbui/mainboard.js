// kbdisplay.js
//
////////////////////////////////////
//
//  Display the connected keyboard.
//
///////////////////////////////////
function setupBoard() {
  const keylayout = KBINFO.keylayout;
  const newkeymap = deepCopy(KBINFO.keymap);
  KBINFO.newkeymap = newkeymap;
  let selectedLayer = 0;
  let selectedKey = null;

  // keys[kmid] = {image: element, text: element};
  const keys = {};

  function strDefault(val, i) {
    if (val) return val;
    return '' + i;
  }

  // Add an action when a key is selected. Whenever a key is clicked
  // in the mainboard display, we expect a selected key to be chosen.
  function selectKey(keydata) {
    if (selectedKey !== null) {
      selectedKey.image.classList.remove('active');
      selectedKey = null;
    }

    selectedKey = keydata;
    keydata.image.classList.add('active');

    ACTION.start({
      keySelect(keystr) {
        newkeymap[selectedLayer][keydata.id] = keystr;
        keydata.image.dataset.key = keystr;
        KEYUI.refreshKey(keys[keydata.id].image, newkeymap[selectedLayer][keydata.id]);
        selectedKey.image.classList.add('changed');
        ACTION.clear()
      },
      cancel() {
        selectedKey.image.classList.remove('active');
        selectedKey = null;
      },
      clickNowhere() {
        return false;
      }
    });
  }

  ////////////////////////////////////
  //
  //  Render a single keyreturning the .keyimage for updating.
  //
  ///////////////////////////////////
  function renderKey(kmid, opts) {
    const keyimage = EL('div', {
      class: 'key',
      id: kmid,
      style: {
        width: Math.floor(opts.w * 25) + 'px',
        height: Math.floor(opts.h * 25) + 'px',
        top: Math.floor((opts.y * 30)) + 'px',
        left: Math.floor((opts.x * 30)) + 'px',
        position: 'absolute',
      },
    }, ' ');

    const keydata = {
      image: keyimage,
      id: kmid,
      ...opts,
    }

    keyimage.onclick = (ev) => {
      selectKey(keydata);
    }

    return keydata;
  }

  ////////////////////////////////////
  //
  //  Draw the whole board.
  //
  ////////////////////////////////////
  const layerSelection = get('#layer-selection')
  const board = get('#mainboard');

  // Current settings.
  let children = [];

  for (const [kmid, key] of Object.entries(keylayout)) {
    keys[kmid] = renderKey(kmid, key);
    children.push(keys[kmid].image);
  }
  appendChildren(board, ...children);

  function drawLayer(layerid) {
    selectedLayer = layerid;
    const layerkeymap = newkeymap[layerid];
    for (const [kmid, key] of Object.entries(keys)) {
      keys[kmid].image.dataset.key = layerkeymap[kmid];
    }

    KEYUI.refreshAllKeys();
  }

  children = [];
  for (let i = 0; i < KBINFO.layers; i++) {
    const layerid = i;
    let layerName = strDefault(EDITABLE_NAMES.layer[i], i);
    const layerSel = EL('div', {
      'class': 'layer',
    }, editableName('layer', i));
    layerSel.onclick = () => {
      drawLayer(layerid);
    }
    children.push(layerSel);
  }
  appendChildren(layerSelection, ...children);

  drawLayer(0);
};

addInitializer('ui', setupBoard);
