////////////////////////////////////
//
//  Convert .vil and .kbi
//
////////////////////////////////////

// Helpers
function repeat(what, count) {
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(what);
  }
  return result;
}

////////////////////////////////////
//
//  Convert to and from .vil
//
////////////////////////////////////
function kbinfoToVIL(kbinfo, macros) {
  if (macros) {
    macros = kbinfo.macros.map((macro) => macro.actions);
  } else {
    macros = repeat([], kbinfo.macro_count);
  }
  // JS on the browser behaves weirdly with bigints and JSON. Just using
  // JSON.stringify on a normal kbid ends with the last 3 digits replaced
  // with 000.
  const kbidrepl = "BiGKBidGoesHere";
  const vil = {
    combo: kbinfo.combos,
    encoder_layout: repeat([], 16),
    key_override: kbinfo.key_overrides,
    layout_options: -1,
    macro: macros,
    settings: KBINFO.settings,
    tap_dance: KBINFO.tapdances.map((td) => [td.tap, td.hold, td.doubletap, td.taphold, td.tapms]),
    uid: kbidrepl,
    version: 1,
    via_protocol: 9,
    vial_protocol: 6,
  }
  // Clean up what kbinfo has that we don't use.
  for (const ko of vil.key_override) { delete ko.koid; }
  for (const td of vil.tap_dance) { delete td.tdid; }

  // Layout is handled differently between .vil and KBINFO.
  // Layout is:
  // [ // layer_count arrays
  //   [ // rows arrays
  //     [ // cols keystrs
  //       "KC_NO", // ...
  //     ]
  //   ]
  // ]
  //
  // KBINFO.keymap is:
  // [ // layer_count arrays
  //   [ rows * cols keystrs ]
  // ]
  vil.layout = [];
  for (let l = 0; l < KBINFO.layers; l++) {
    const km = KBINFO.keymap[l];
    const layer = [];
    for (let r = 0; r < KBINFO.rows; r++) {
      const row = [];
      for (let c = 0; c < KBINFO.cols; c++) {
        row.push(KEY.vilify(km[(r * KBINFO.cols) + c]));
      }
      layer.push(row);
    }
    vil.layout.push(layer);
  }
  let jsvil = JSON.stringify(vil, undefined, 2);
  jsvil = jsvil.replace('"' + kbidrepl + '"', KBINFO.kbid);
  return jsvil;
}

function vilToKBINFO(vil) {
  const kbinfo = structuredClone(SVALBOARD);

  // Update counts
  kbinfo.key_override_count = vil.key_override.length;
  kbinfo.combo_count = vil.combo.length;
  kbinfo.macro_count = vil.macro.length;
  kbinfo.tapdance_count = vil.tap_dance.length;
  
  // Update values
  kbinfo.combos = vil.combo;
  kbinfo.key_overrides = vil.key_override;
  kbinfo.macros = vil.macro.map((macro, mid) => {
    const actions = [];
    for (const act of macro) {
      for (let i = 1; i < act.length; i++) {
        actions.push([act[0], act[i]]);
      }
    }
    return {actions: actions, mid: mid}
  } );
  kbinfo.settings = vil.settings;
  kbinfo.tapdances = vil.tap_dance.map((td, tdid) => {
    return {
      tdid: tdid,
      tap: td[0],
      hold: td[1],
      doubletap: td[2],
      taphold: td[3],
      tapms: td[4]
    }
  });

  // Convert layout to our keymap.
  const km = [];
  for (let l = 0; l < kbinfo.layers; l++) {
    km.push([]);
    for (let r = 0; r < kbinfo.rows; r++) {
      for (let c = 0; c < kbinfo.cols; c++) {
        km[l][(r * kbinfo.cols) + c] = vil.layout[l][r][c];
      }
    }
  }
  kbinfo.keymap = km;

  kbinfo.kbid = '' + vil.uid;
  kbinfo.version = vil.version;
  kbinfo.via_protocol = vil.via_protocol;
  kbinfo.vial_protocol = vil.vial_protocol;
  return kbinfo;
}

////////////////////////////////////
//
//  Generate a keymap.c version for download.
//
//  Format:
//
//  const uint16_t PROGMEM keymaps[DYNAMIC_KEYMAP_LAYER_COUNT][MATRIX_ROWS][MATRIX_COLS] = {
//    [#] = LAYOUT(
//      KC_codes, QMK style (use QMKMAP)
//      R1-R4, L1-L4, CNESW XX.
//      rt, lt down push up nail knuckle dd
//    )
//  }
//
//  const uint8_t sval_macros[N] = {
//  };
//
////////////////////////////////////
function kmToC(layer, start, ids, nocomma) {
  const km = KBINFO.keymap[layer];
  let lcomma = ','
  if (nocomma) {
    lcomma = '';
  };
  return [
    KEY.parse(km[start + ids[0]]) + ',',
    KEY.parse(km[start + ids[1]]) + ',',
    KEY.parse(km[start + ids[2]]) + ',',
    KEY.parse(km[start + ids[3]]) + ',',
    KEY.parse(km[start + ids[4]]) + ',',
    KEY.parse(km[start + ids[5]]) + lcomma,
  ];
}

function generateCKeymap(kbinfo) {
  const kids = [2, 3, 1, 0, 4, 5];
  const tids = [2, 3, 4, 1, 0, 5];
  const allLayers = [
      'const uint16_t PROGMEM keymaps[DYNAMIC_KEYMAP_LAYER_COUNT][MATRIX_ROWS][MATRIX_COLS] = {',
  ];
  for (let layer = 0; layer < kbinfo.keymap.length; layer++) {
    const map = [
      ['/*', 'Center', 'North', 'East', 'South', 'West', '(XXX)', '*/'],
      ['/* R1 */ ', ...kmToC(layer, 36, kids), ''],
      ['/* R2 */ ', ...kmToC(layer, 42, kids), ''],
      ['/* R3 */ ', ...kmToC(layer, 48, kids), ''],
      ['/* R4 */ ', ...kmToC(layer, 54, kids), ''],
      [''],
      ['/* L1 */ ', ...kmToC(layer, 6,  kids), ''],
      ['/* L2 */ ', ...kmToC(layer, 12, kids), ''],
      ['/* L3 */ ', ...kmToC(layer, 18, kids), ''],
      ['/* L4 */ ', ...kmToC(layer, 24, kids), ''],
      [''],
      ['/*', 'Down', 'Pad', 'Up', 'Nail', 'Knuckle', 'Double Down', '*/'],
      ['/* RT */ ', ...kmToC(layer, 30, tids), ''],
      ['/* LT */ ', ...kmToC(layer, 0,  tids, true), ''],
    ];

    const strmap = [
      `    [${layer}] = LAYOUT(`
    ];
    for (let i = 0; i < map.length; i++) {
      strmap.push('        ' + map[i].map((x) => x.padEnd(20, ' ')).join('').trim());
    }
    if ((layer + 1) < kbinfo.keymap.length) {
      strmap.push('      ),');
    } else {
      strmap.push('      )');
    }
    allLayers.push(strmap.join('\n'));
  }
  allLayers.push('};\n');
  return allLayers.join('\n\n');
}

function generateCMacros(kbinfo) {
  const ret = [];
  const used = kbinfo.macros.filter((i) => i.actions.length > 0).length;
  if (used === 0) {
    ret.push(`const int sval_macro_size = 0;`);
    ret.push("const uint8_t sval_macros[] = {0};");
    return ret.join("\n");
  }
  const dumped = Vial.macro.dump(kbinfo.macros_size, kbinfo.macros)
  const dump = new Uint8Array(dumped)
  const chars = [];
  let i = 0;
  let count = kbinfo.macro_count;
  while (count > 0 && i < kbinfo.macros_size) {
    if (dump[i] === 0) {
      count--;
    }
    i++;
  }
  const mem = dump.slice(0, i);
  ret.push(`int sval_macro_size = ${i};`);
  ret.push("uint8_t sval_macros[] = {" + mem.map((x) => x.toString()).join(',') + "};");
  return ret.join("\n");
}

function generateKeymapAll(kbinfo) {
  const allSections = [
    '// AUTO-GENERATED BY KEYBARD DO NOT EDIT',
    '// AUTO-GENERATED BY KEYBARD DO NOT EDIT',
    '// AUTO-GENERATED BY KEYBARD DO NOT EDIT',
  ];
  allSections.push(generateCKeymap(kbinfo));
  allSections.push(generateCMacros(kbinfo));
  allSections.push("// AUTO GENERATED\n");
  return allSections.join('\n\n');
}

TOOLS.generateKeymapAll = () => generateKeymapAll(KBINFO);
