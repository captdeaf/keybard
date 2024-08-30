// kbdisplay.js
//
////////////////////////////////////
//
//  Display the connected keyboard.
//
///////////////////////////////////
function setupBoard(kbinfo) {
  const keylayout = kbinfo.keylayout;
  const newkeymap = deepCopy(kbinfo.keymap);
  kbinfo.newkeymap = newkeymap;
  let selectedLayer = 0;
  let selectedKey = null;

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
        newkeymap[selectedLayer][keydata.id] = KEY.parse(keystr);
        refreshKey(keys[keydata.id], newkeymap[selectedLayer][keydata.id], EDITABLE_NAMES);
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
  //  refreshKey: Update the contents of a key.
  //
  //  Normal: "a", "Caps\nLock", etc.
  //  Macro: "MACRO\n(text...)"
  //  Layer: "LAYER\n(name or num)"
  //
  ////////////////////////////////////
  const KEY_DESCS = {
    layer: {
      MO:  ['Lmnt', 'While pressed, switch to layer:', 'key-layer key-layer-mo'],
      DF:  ['Ldef', 'Make default layer:', 'key-layer key-layer-df'],
      TG:  ['Ltog', 'Toggle to layer:', 'key-layer key-layer-tg'],
      TT:  ['Ltmp', 'Switch/Toggle to layer:', 'key-layer key-layer-tt'],
      OSL: ['Losl', 'Toggle to layer for one key:', 'key-layer key-layer-osl'],
      TO:  ['Lto', 'Make layer default:', 'key-layer key-layer-to'],
    }
  };

  function getKeyContents(key, names) {
    let text = key.qmkid;
    let title = key.qmkid;
    if (key.str) text = key.str;
    if (key.title) title = key.title;
    let descs;
    if (key.type in KEY_DESCS) {
      descs = KEY_DESCS[key.type];
      if (key.stype && key.stype in descs) {
        descs = KEY_DESCS[key.type][key.stype];
      }
      // text = descs[0];
      title = title + ': ' + descs[1];
    }
    if (names[key.type] && names[key.type][key.index]) {
      text = '\n<span class="' + descs[2] + '">' + names[key.type][key.index] + '</span>',
      title = title + names[key.type][key.index];
    }
    return {
      text: text,
      title: title,
    }
  }

  function refreshKey(keydef, keymask, names) {
    // keydef: element identifier
    // keymask: the key to show.
    // names: layer/macro/etc names.
    let key = KEY.RAWCODES_MAP[keymask];
    if (!key) {
      key = KEY.RAWCODES_MAP[keymask & 0xFF];
      const content = getKeyContents(key, names);
      const mkey = KEY.RAWCODES_MAP[keymask & 0xFF00];
      if (mkey) {
        const mcontent = getKeyContents(mkey, names);
        keydef.image.innerHTML = mcontent.text + "<br>" + content.text;
        keydef.image.setAttribute('title', strDefault(mcontent.title + content.title, ''));
      } else {
        keydef.image.innerHTML = '<span style="color: red;">' + keymask + '</span>';
        keydef.image.setAttribute('title', "Unknown code: " + keymask);
      }
    } else {
      const content = getKeyContents(key, names);
      keydef.image.innerHTML = content.text;
      keydef.image.setAttribute('title', strDefault(content.title, ''));
    }
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

  // keys[kmid] = {image: element, text: element};
  const keys = {};

  for (const [kmid, key] of Object.entries(keylayout)) {
    keys[kmid] = renderKey(kmid, key);
    children.push(keys[kmid].image);
  }
  appendChildren(board, ...children);

  function drawLayer(layerid) {
    selectedLayer = layerid;
    const layerkeymap = newkeymap[layerid];
    for (const [kmid, key] of Object.entries(keys)) {
      refreshKey(keys[kmid], layerkeymap[kmid], EDITABLE_NAMES);
    }
  }

  children = [];
  for (let i = 0; i < newkeymap.length; i++) {
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

  ////////////////////////////////////
  //
  //  How the rest of the JS updates our board.
  //  This is GUI.board
  //
  ////////////////////////////////////
  return {
    refresh: () => { drawLayer(selectedLayer); },
    getKeyContents: getKeyContents,
  };
};
