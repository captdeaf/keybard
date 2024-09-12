// kbdisplay.js
//
////////////////////////////////////
//
//  Render the connected keyboard, switch between layers, and
//  add keybind actions.
//
///////////////////////////////////

const MAINBOARD = {
  // Current layer
  selectedLayer: 0,
  // Refresh all keys (usually after KBINFO is updated entirely)
  updateAll: null,
};

addInitializer('connected', () => {
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
      width: (opts.w * 30 + ((opts.w - 1)*5)) + 'px',
      height: (opts.h * 30 + ((opts.h - 1)*5)) + 'px',
      top: ((opts.y) * 35) + 'px',
      left: ((opts.x) * 35) + 'px',
      position: 'absolute',
    };
    if (opts.r) {
      style.transform = 'rotate(' + opts.r + 'deg)';
    }
    const keyimage = EL('div', {
      class: 'key',
      'data-kmid': kmid,
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
  //  Draw the entire board.
  //
  ////////////////////////////////////
  const keylayout = KBINFO.keylayout;
  // keys[kmid] = {image: element, text: element};
  const keys = {};

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
  board.style.width = `${bounds.right + bounds.left}px`;
  board.style.height = `${bounds.bottom + 60}px`;
  board.style.left = `${-bounds.left}px`;
  board.style.top = `30px`;
  
  ////////////////////////////////////
  //
  //  Update all the keys to show the given layer.
  //
  ////////////////////////////////////
  function drawLayer(layerid) {
    MAINBOARD.selectedLayer = layerid;
    const layerkeymap = KBINFO.keymap[layerid];
    const oldkeymap = BASE_KBINFO.keymap[layerid];
    for (const [kmid, key] of Object.entries(keys)) {
      keys[kmid].image.dataset.key = layerkeymap[kmid];
      keys[kmid].image.dataset.kmid = kmid;
      keys[kmid].image.dataset.bound = 'main';
      if (layerkeymap[kmid] === oldkeymap[kmid]) {
        keys[kmid].image.classList.remove('changed');
      } else {
        keys[kmid].image.classList.add('changed');
      }
    }

    for (const layer of document.querySelectorAll('.layer')) {
      layer.classList.remove('selected');
    }
    document.querySelector(`[data-layerid="${MAINBOARD.selectedLayer}"]`)?.classList.add('selected');

    ACTION.selectKey();
    KEYUI.refreshAllKeys();
  }

  ////////////////////////////////////
  //
  //  Called when a file is uploaded or a device is connected after a file
  //  is uploaded. Mark and queue all changes.
  //
  ////////////////////////////////////
  MAINBOARD.updateAll = () => {
    drawLayer(MAINBOARD.selectedLayer);

    for (let layer = 0; layer < KBINFO.layers; layer++) {
      for (let kmid = 0; kmid < KBINFO.keymap[layer].length; kmid++) {
        const keystr = KBINFO.keymap[layer][kmid];
        const bkeystr = BASE_KBINFO.keymap[layer][kmid];
        if (!((keystr === -1 || keystr === 0xFF) &&
            (bkeystr === -1 || bkeystr === 0xFF))) {
          if (keystr !== bkeystr) {
            CHANGES.queue('key' + layer + '.' + kmid, () => {
              KBAPI.updateKey(layer, kmid, keystr);
            });
          }
        }
      }
    }
  };

  ACTION.onclick('[data-bound="main"]', (target) => {
    ACTION.selectKey(target);
    ACTION.on('bind', (keystr) => {
      const kmid = target.dataset.kmid;
      if (keystr !== target.dataset.key) {
        KBINFO.keymap[MAINBOARD.selectedLayer][kmid] = keystr;
        target.dataset.key = keystr;
        target.classList.add('changed');
        CHANGES.queue('key' + MAINBOARD.selectedLayer + '.' + kmid, () => {
          KBAPI.updateKey(MAINBOARD.selectedLayer, kmid, keystr);
        });
        KEYUI.refreshKey(target);
        ACTION.selectKey();
      }
    });
  });

  ////////////////////////////////////
  //
  // Menu bar: [0, 1, NAS, 3, MOUSE, 4, ...]
  // Draw the layer IDs and Names.
  //
  ////////////////////////////////////
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
