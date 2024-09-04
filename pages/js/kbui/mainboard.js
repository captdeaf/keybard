// kbdisplay.js
//
////////////////////////////////////
//
//  Display the connected keyboard.
//
///////////////////////////////////
const MAINBOARD = {
  layer: 0,
};
addInitializer('connected', () => {
  const keylayout = KBINFO.keylayout;
  const newkeymap = deepCopy(KBINFO.keymap);
  KBINFO.newkeymap = newkeymap;

  // keys[kmid] = {image: element, text: element};
  const keys = {};

  function strDefault(val, i) {
    if (val) return val;
    return '' + i;
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
    MAINBOARD.layer = layerid;
    const layerkeymap = newkeymap[layerid];
    for (const [kmid, key] of Object.entries(keys)) {
      keys[kmid].image.dataset.key = layerkeymap[kmid];
      keys[kmid].image.dataset.bound = kmid;
    }

    for (const layer of document.querySelectorAll('.layer')) {
      layer.classList.remove('selected');
    }
    document.querySelector(`[data-layerid="${MAINBOARD.layer}"]`)?.classList.add('selected');

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
});
