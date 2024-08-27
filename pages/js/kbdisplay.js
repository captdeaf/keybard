// kbdisplay.js
//
////////////////////////////////////
//
//  Display the connected keyboard.
//
///////////////////////////////////

////////////////////////////////////
//
//  Render a single key, including hover tips for macros, etc.
//
///////////////////////////////////
function setupBoard(keylayout, layers) {
  // Names: for layers, macros, etc. Saved to local site memory.
  const names = Object.assign({
    layer: {
      [0]: 'default',
      [4]: 'NAS',
    },
    macro: {},
    combo: {},
    tapdance: {},
  }, getSaved('names', {}));

  function editableName(type, index) {
    let name = '' + index;
    if (names[type][index]) {
      name = names[type][index];
    }
    const editable = EL('span', {
      class: 'editable',
    }, name);
    return EL('span', {
      class: 'type-name',
    }, '' + index + ': ', editable);
  }

  function strDefault(val, i) {
    if (val) return val;
    return '' + i;
  }

  function renderKey(kmid, opts) {
    // When drawing keyboard, style the keys.

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

    return {
      id: kmid,
      image: keyimage,
    }
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
    let text = key.str;
    let title = key.qmkid;
    if (!text) text = key.qmkid;
    let descs;
    if (key.type in KEY_DESCS) {
      descs = KEY_DESCS[key.type];
      if (key.stype && key.stype in descs) {
        descs = KEY_DESCS[key.type][key.stype];
      }
      text = descs[0];
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

  function refreshKey(keydef, key, names) {
    const content = getKeyContents(key, names);
    keydef.image.innerHTML = content.text;
    keydef.image.setAttribute('title', strDefault(content.title, ''));
  }

////////////////////////////////////
//
//  Draw the whole board. This defines GUI.board.(funcs)
//
////////////////////////////////////
  const layerSelection = get('#layer-selection')
  const board = get('#mainboard');

  // Current settings.
  let selectedLayer = 0;
  let selectedKey = null;
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
    const keymap = layers[layerid];
    for (const [kmid, key] of Object.entries(keys)) {
      refreshKey(keys[kmid], keymap[kmid], names);
    }
  }

  children = [];
  for (let i = 0; i < layers.length; i++) {
    const layerid = i;
    let layerName = strDefault(names.layer[i], i);
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

  return {
  };
};
