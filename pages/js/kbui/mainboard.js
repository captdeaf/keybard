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
        const kmid = keydata.id
        const old = newkeymap[selectedLayer][kmid];
        newkeymap[selectedLayer][kmid] = keystr;
        keydata.image.dataset.key = keystr;
        KEYUI.refreshAllKeys();
        CHANGES.queue('Remap ' + old + ' to ' + keystr, () => {
          KBAPI.updateKey(selectedLayer, kmid, keystr);
        });
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
        top: Math.floor((opts.y * 32)) + 'px',
        left: Math.floor((opts.x * 32)) + 'px',
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

  const bounds = {
    top: Infinity,
    left: Infinity,
    right: -Infinity,
    bottom: -Infinity,
  };

  for (const [kmid, key] of Object.entries(keylayout)) {
    const keydata = renderKey(kmid, key);
    keys[kmid] = keydata;

    const top = parseInt(keydata.image.style.top, 10);
    const left = parseInt(keydata.image.style.left, 10);
    const width = parseInt(keydata.image.style.width, 10);
    const height = parseInt(keydata.image.style.height, 10);
    bounds.top = Math.min(bounds.top, top);
    bounds.left = Math.min(bounds.left, left);
    bounds.right = Math.max(bounds.right, left + width);
    bounds.bottom = Math.max(bounds.bottom, top + height);

    children.push(keys[kmid].image);
  }
  appendChildren(board, ...children);

  // This allows us to center the board on screen.
  board.style.width = `${bounds.right}px`;
  board.style.height = `${bounds.bottom}px`;
  

  function drawLayer(layerid) {
    selectedLayer = layerid;
    const layerkeymap = newkeymap[layerid];
    for (const [kmid, key] of Object.entries(keys)) {
      keys[kmid].image.dataset.key = layerkeymap[kmid];
    }

    for (const layer of document.querySelectorAll('.layer')) {
      layer.classList.remove('selected');
    }
    document.querySelector(`[data-layerid="${selectedLayer}"]`)?.classList.add('selected');

    KEYUI.refreshAllKeys();
  }

  children = [];
  for (let i = 0; i < KBINFO.layers; i++) {
    const layerid = i;
    let layerName = strDefault(EDITABLE_NAMES.layer[i], i);
    const layerSel = EL('div', {
      'data-layerid': layerid,
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
