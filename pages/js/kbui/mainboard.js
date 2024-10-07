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
  // Render a layer into a div. Used for printing.
  printLayers: null,
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
  //  Basically a$modified version of KLE's template, since I don't want
  //  to import all of its libraries.
  //
  //  A key consists of:
  //    Outer div: keycap for rotation
  //    Inner divs: for key. This can be multiple divs, but only one
  //                should have the key label rendered into it.
  //
  ///////////////////////////////////
  function renderKey(kmid, opts) {
    const kle = KLE.calc(opts);
    const key = kle.key;
    const sizes = kle.sizes;
    const parms = kle.parms;

    const outerClasses = ['keycap'];
    if (key.ghost) outerClasses.push('ghosted');
    if (key.decal) outerClasses.push('decal');

    const outerStyle = {};
    if (key.rotation_angle) {
      outerStyle['transform'] = `rotate(${key.rotation_angle}deg)`;
      outerStyle['transform-origin'] = `${parms.origin_x}px ${parms.origin_y}px`;
    }

    const keystyle = {
      'left': `${parms.outercapx + 3}px`,
      'top': `${parms.outercapy + 3}px`,
      'width': `${parms.outercapwidth - 6}px`,
      'height': `${parms.outercapheight - 6}px`,
      'border-width': `${sizes.strokeWidth}px`,
      'border-radius': `${sizes.roundOuter}px`,
    };
    const keyimage = EL('div', {
      class: 'key keyborder',
      'data-kmid': kmid,
      style: keystyle,
    }, `${kmid}`);

    const children = [];
    children.push(keyimage);

    const keycap = EL('div', {
      class: outerClasses,
      style: outerStyle,
    }, children);

    const keydata = {
      cap: keycap,
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

  const layerSelection = get('#layer-selection')
  const board = get('#mainboard');

  function renderBoardInto(par) {
    let mykeys = {};
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
      mykeys[kmid] = keydata;

      const top = parseInt(keydata.image.style.top, 10);
      const left = parseInt(keydata.image.style.left, 10);
      const width = parseInt(keydata.image.style.width, 10);
      const height = parseInt(keydata.image.style.height, 10);
      bounds.top = Math.min(bounds.top, top);
      bounds.left = Math.min(bounds.left, left);
      bounds.right = Math.max(bounds.right, left + width);
      bounds.bottom = Math.max(bounds.bottom, top + height);

      children.push(keydata.cap);
    }
    appendChildren(par, ...children);

    // This allows us to center the board on screen.
    par.style['width'] = `${bounds.right + bounds.left + 40}px`;
    par.style['height'] = `${bounds.bottom + 20}px`;
    par.style['left'] = `20px`;
    par.style['top'] = `0px`;

    return mykeys;
  }
  const boardKeys = renderBoardInto(board);

  const mbox = get('#topboard');
  x = mbox;
  // mbox.style['width'] = `${parseInt(board.style.width) + 20}px`;
  mbox.style['height'] = `${parseInt(board.style.height) + 80}px`;
  mbox.style['max-height'] = `${parseInt(board.style.height) + 80}px`;
  
  ////////////////////////////////////
  //
  //  Update all the keys to show the given layer.
  //
  ////////////////////////////////////
  function drawLayer(layerid, keys, printable) {
    if (!keys) {
      keys = boardKeys;
    }
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
      if (printable) {
        KEYUI.refreshKey(keys[kmid].image);
      }
    }

    for (const layer of findAll('.layer')) {
      layer.classList.remove('selected');
    }
    find(`[data-layerid="${MAINBOARD.selectedLayer}"]`)?.classList.add('selected');

    ACTION.selectKey();
    if (!printable) {
      KEYUI.refreshAllKeys();
    }
    ACTION.selectKey();
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
            CHANGES.queue('key' + layer + '.' + kmid, () => (
              KBAPI.updateKey(layer, kmid, keystr)
            ));
          }
        }
      }
    }
  };

  let serial = {};

  function arytomap(ary) {
    ary = ary.filter((kmid) => {
      return findAll('[data-kmid="' + kmid + '"]').length > 0;
    });
    const ret = {};
    ret[ary[ary.length - 1]] = ary[0];
    for (let i = 0; i < (ary.length - 1); i++) {
      ret[ary[i]] = ary[i+1];
    }
    return ret;
  }

  const serials = {
    colfirst: () => {
      return arytomap(range(KBINFO.keymap[0].length));
    },
    rowfirst: () => {
      const ret = [];
      for (let col = 0; col < KBINFO.cols; col++) {
        for (let row = 0; row < KBINFO.rows; row++) {
          ret.push(row * KBINFO.cols + col);
        }
      }
      return arytomap(ret);
    },
    svalbykey: () => {
      return arytomap([
        // N keys
        27, 21, 15, 9, 39, 45, 51, 57,
        // C keys
        26, 20, 14, 8, 38, 44, 50, 56,
        // S keys
        24, 18, 12, 6, 36, 42, 48, 54,
        // W keys
        28, 22, 16, 10, 40, 46, 52, 58,
        // E keys
        25, 19, 13, 7, 37, 43, 49, 55,

        // Thumb clusters, Claussen-style.
        // Top row
        3, 5, 1, 31, 35, 33,
        4, 2, 0, 30, 32, 34,
      ]);
    },
  }

  ACTION.onclick('[data-serial]', (target) => {
    serial = serials[target.dataset.serial]();
    ACTION.menuClose();
  });

  function prepKeyAssignment(target) {
    ACTION.selectKey(target);
  }

  ACTION.on('bind-main', (keystr, target) => {
    const kmid = target.dataset.kmid;
    const curLayer = MAINBOARD.selectedLayer;
    if (keystr !== target.dataset.key) {
      KBINFO.keymap[curLayer][kmid] = keystr;
      target.dataset.key = keystr;
      target.classList.add('changed');
      CHANGES.queue('key' + curLayer + '.' + kmid, () => (
        KBAPI.updateKey(curLayer, kmid, keystr)
      ));
      KEYUI.refreshKey(target);
    }
    ACTION.selectKey();
    if (kmid in serial) {
      prepKeyAssignment(get(`[data-kmid="${serial[kmid]}"]`));
    }
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
    let layerName = getEditableName('layer', i, '' + i);
    const layerSel = EL('div', {
      'data-layerid': layerid,
      'class': 'layer',
    });
    makeEditableName(layerSel, 'layer', i);
    children.push(layerSel);
  }
  appendChildren(layerSelection, ...children);

  ACTION.onclick('[data-layerid]', (target) => {
    drawLayer(target.dataset.layerid);
  });

  drawLayer(0);

  ////////////////////////////////////
  //
  //  Render a printable layer in a separate window.
  //
  ////////////////////////////////////

  MAINBOARD.printLayers = (layerids) => {
    var printer = window.open('', '_blank');
    printer.document.write('<html>');
    printer.document.write('<head>')
    printer.document.write('<title>Printable layers</layer></title>')
    printer.document.write('<link rel="stylesheet" href="css/print.css">');
    printer.document.write('<link rel="stylesheet" href="css/keys.css">');
    printer.document.write('</head>');
    printer.document.write('<body>');

    function isEmpty(layerid) {
      const layer = KBINFO.keymap[layerid];
      for (let i = 0; i < layer.length; i++) {
        if (layer[i] !== 'KC_NO') {
          return false;
        }
      }
      return true;
    }

    // Render each layer.
    for (const layerid of layerids) {
      if (isEmpty(layerid)) {
        continue;
      }
      let name = `Layer ${layerid}`;
      const customname = getEditableName('layer', layerid);
      if (customname) {
        name = `Layer ${layerid} - ${customname}`;
      }
      const div = EL('div', {class: 'printable-mainboard', id: 'p-' + layerid},
        EL('p', {class: 'printable-title'},
          [
            name,
            EL('button',
              {
                class: 'no-print',
                onclick: 'this.parentElement.parentElement.replaceWith("");',
              },
              "Remove this layer"
            ),
          ]
        ),
      );
      const mykeys = renderBoardInto(div);
      const pparent = EL('div', {}, div);
      drawLayer(layerid, mykeys, true);
      printer.document.write(pparent.innerHTML);
    }

    printer.document.write('</body>');
    printer.document.write('</html>');
  };

  ACTION.onclick('#print-layers', () => {
    MAINBOARD.printLayers(range(16));
  });

  ACTION.on('key-revert-main', (target) => {
    const kmid = target.dataset.kmid;
    const layer = MAINBOARD.selectedLayer;
    const oldkey = BASE_KBINFO.keymap[layer][kmid];
    target.dataset.key = oldkey;
    target.classList.remove('changed');
    KEYUI.refreshKey(target);
    KBINFO.keymap[layer][kmid] = oldkey;
    CHANGES.clear('key' + layer + '.' + kmid);
  });
});
