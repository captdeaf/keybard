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
    const style = {
      width: (opts.w * 3 + ((opts.w - 1)/2)) + 'vw',
      height: (opts.h * 3 + ((opts.h - 1)/2)) + 'vw',
      top: ((opts.y) * 3.5) + 'vw',
      left: ((opts.x) * 3.5) + 'vw',
      position: 'absolute',
    };
    if (opts.r) {
      style.transform = 'rotate(' + opts.r + 'deg)';
    }
    const keyimage = EL('div', {
      class: 'key',
      id: kmid,
      style: style,
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
    keydata.image.dataset.foo = JSON.stringify(key);
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
  board.style.width = `${bounds.right}vw`;
  board.style.height = `${bounds.bottom}vw`;
  

  function drawLayer(layerid) {
    MAINBOARD.layer = layerid;
    const layerkeymap = KBINFO.keymap[layerid];
    const oldkeymap = BASE_KBINFO.keymap[layerid];
    for (const [kmid, key] of Object.entries(keys)) {
      keys[kmid].image.dataset.key = layerkeymap[kmid];
      keys[kmid].image.dataset.bound = kmid;
      if (layerkeymap[kmid] === oldkeymap[kmid]) {
        keys[kmid].image.classList.remove('changed');
      } else {
        keys[kmid].image.classList.add('changed');
      }
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
