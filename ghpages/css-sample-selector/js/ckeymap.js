////////////////////////////////////
//
//  Generate a keymap_all.h version for download.
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
function kbinfoToCKeymap(kbinfo) {
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
      return "";
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
    if (i > 0) {
      ret.push("uint8_t sval_macros[] = {" + mem.map((x) => x.toString()).join(',') + "};");
      ret.push(`dynamic_keymap_macro_set_buffer(0, ${i}, sval_macros);`);
    }

    return ret.join("\n");
  }

  function generateCTapdances(kbinfo) {
    const generate = {};
    const ret = [];
    ret.push("vial_tap_dance_entry_t td = (vial_tap_dance_entry_t) {0, 0, 0, 0, 0};");
    let count = 0;
    for (let tdi = 0; tdi < kbinfo.tapdance_count; tdi++) {
      const td = kbinfo.tapdances[tdi];
      if (td.tap !== 'KC_NO' || td.hold !== 'KC_NO' ||
          td.doubletap !== 'KC_NO' || td.taphold !== 'KC_NO') {
        let t1 = KEY.parse(td.tap);
        let t2 = KEY.parse(td.hold);
        let t3 = KEY.parse(td.doubletap);
        let t4 = KEY.parse(td.taphold);
        let t5 = td.tapms;
        ret.push(`td = (vial_tap_dance_entry_t) {${t1}, ${t2}, ${t3}, ${t4}, ${t5}};`);
        ret.push(`dynamic_keymap_set_tap_dance(${tdi}, &td);`);
        count++;
      }
    }
    if (count === 0) {
      return "";
    }
    return ret.join("\n");
  }

  function generateCCombos(kbinfo) {
    const generate = {};
    const ret = [];
    ret.push("vial_combo_entry_t cmb = (vial_combo_entry_t) {{0, 0, 0, 0}, 0};");
    let count = 0;
    for (let cmbi = 0; cmbi < kbinfo.combo_count; cmbi++) {
      const cmb = kbinfo.combos[cmbi].map((i) => KEY.parse(i));
      if (cmb[0] || cmb[1] || cmb[2] || cmb[3] || cmb[4]) {
        ret.push(`cmb = (vial_combo_entry_t) {{${cmb.slice(0,4).join(',')}}, ${cmb[4]}};`);
        ret.push(`dynamic_keymap_set_combo(${cmbi}, &cmb);`);
        count++;
      }
    }
    if (count === 0) {
      return "";
    }
    return ret.join("\n");
  }

  function generateCKeyoverrides(kbinfo) {
    const generate = {};
    const ret = [];
    ret.push("vial_key_override_entry_t ko = (vial_key_override_entry_t) {0};");
    let count = 0;
    for (let koi = 0; koi < kbinfo.key_override_count; koi++) {
      const ko = kbinfo.key_overrides[koi];
      if (ko.trigger !== 'KC_NO' || ko.replacement !== 'KC_NO') {
        const args = [
          KEY.parse(ko.trigger),
          KEY.parse(ko.replacement),
          ko.layers,
          ko.trigger_mods,
          ko.negative_mod_mask,
          ko.suppressed_mods,
          ko.options
        ];
        count++;
        ret.push(`ko = (vial_key_override_entry_t) {${args.join(',')}};`)
        ret.push(`dynamic_keymap_set_key_override(${koi}, &ko);`)
      }
    }
    if (count === 0) {
      return "";
    }
    return ret.join("\n");
  }

  const allSections = [
    '// AUTO-GENERATED BY KEYBARD DO NOT EDIT',
    '// AUTO-GENERATED BY KEYBARD DO NOT EDIT',
    '// AUTO-GENERATED BY KEYBARD DO NOT EDIT',
  ];
  allSections.push(generateCKeymap(kbinfo));
  allSections.push('void sval_init_defaults(void) {');
  allSections.push(generateCMacros(kbinfo));
  allSections.push(generateCTapdances(kbinfo));
  allSections.push(generateCCombos(kbinfo));
  allSections.push(generateCKeyoverrides(kbinfo));
  allSections.push('}');
  allSections.push("// AUTO GENERATED\n");
  return allSections.join('\n\n');
};
