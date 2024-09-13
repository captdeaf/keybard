////////////////////////////////////
//
//  Downloads and Uploads of .vil and .svl
//
////////////////////////////////////

addInitializer('load', () => {
  ////////////////////////////////////
  //
  //  Download a JSON as a file. It accepts a filename and content
  //  as arguments.
  //
  ////////////////////////////////////
  function downloadTEXT(filename, content) {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename);

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

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
    let jsvil = JSON.stringify(vil);
    jsvil = jsvil.replace('"' + kbidrepl + '"', KBINFO.kbid);
    return jsvil;
  }

  function vilToKBINFO(vil) {
    const kbinfo = deepCopy(SVALBOARD);
    kbinfo.combos = vil.combo;
    kbinfo.key_overrides = vil.key_override;
    kbinfo.macro = vil.macro.map((macro, mid) => {
      return {actions: macro, mid: mid}
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
  //    Our keymap is, in groups of 6,
  //    0: lt knuckle nail down push up dd
  //    6: l1  SECNW KC_NO
  //    12: l2
  //    18: l3
  //    24: l4
  //    30: rt
  //    36: r1
  //    42: r2
  //    48: r3
  //    54: r4
  //
  //    Conversion: keymap[layer][n]
  //
  ////////////////////////////////////
  addInitializer('connected', () => {
    function kmToC(layer, start, ids, nocomma) {
      const km = KBINFO.keymap[layer];
      let lcomma = ','
      if (nocomma) {
        lcomma = '';
      };
      return [
        km[start + ids[0]] + ',',
        km[start + ids[1]] + ',',
        km[start + ids[2]] + ',',
        km[start + ids[3]] + ',',
        km[start + ids[4]] + ',',
        km[start + ids[5]] + lcomma,
      ];
    }
    ACTION.onclick('#download-keymap-c', () => {
      const kids = [2, 3, 1, 0, 4, 5];
      const tids = [2, 3, 4, 1, 0, 5];
      const allLayers = [
        'const uint16_t PROGMEM keymaps[DYNAMIC_KEYMAP_LAYER_COUNT][MATRIX_ROWS][MATRIX_COLS] = {'
      ];
      for (let layer = 0; layer < KBINFO.keymap.length; layer++) {
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
        if ((layer + 1) < KBINFO.keymap.length) {
          strmap.push('      ),');
        } else {
          strmap.push('      )');
        }
        allLayers.push(strmap.join('\n'));
      }
      allLayers.push('};\n');
      downloadTEXT('keymap_all.c', allLayers.join('\n\n'));
    });
  });

  ////////////////////////////////////
  //
  //  File menu actions to download .vil and .svls.
  //
  ////////////////////////////////////
  addInitializer('connected', () => {

    ACTION.onclick('#download-vil', () => {
      const vil = kbinfoToVIL(deepCopy(KBINFO), true);
      downloadTEXT('keyboard.vil', vil);
    });

    ACTION.onclick('#download-vil-nomacro', () => {
      const vil = kbinfoToVIL(deepCopy(KBINFO), false);
      downloadTEXT('keyboard-nomacro.vil', vil);
    });

    ACTION.onclick('#download-svl', () => {
      const copy = deepCopy(KBINFO);
      const svl = JSON.stringify(copy);
      downloadTEXT('keyboard.svl', svl);
    });

    ACTION.onclick('#download-svl-nomacro', () => {
      const copy = deepCopy(KBINFO);
      copy.macros = repeat([], copy.macro_count);
      const svl = JSON.stringify(copy);
      downloadTEXT('keyboard-nomacro.svl', svl);
    });
  });

  ////////////////////////////////////
  //
  //  Upload menu action and working on the upload.
  //
  ////////////////////////////////////
  ACTION.onclick('#upload-file-float', () => {
    const disp = get('#float-upload');
    disp.style['display'] = 'block';
    const fileinput = get('#upload-file');
    
    fileinput.onchange = () => {
      const file = fileinput.files[0];
      const reader = new FileReader();
      reader.onload = (evt) => {
        fileinput.value = '';
        disp.style['display'] = 'none';
        const content = evt.target.result;
        try {
          const js = JSON.parse(content);
          let kbinfo = null;
          // Is it a .vil or a .svl file?
          if (js.kbid) {
            kbinfo = js;
          } else if (js.uid) {
            kbinfo = vilToKBINFO(js);
          } else {
            alert('Unknown json type');
            return;
          }
          if (CONNECTED) {
            console.log('connected, updating');
            KBINFO = kbinfo;
            updateAllChanges();
          } else {
            console.log('new base');
            doStuff(kbinfo);
          }
        } catch (err) {
          console.error(err);
          alert('Invalid .vil or .svl file');
        }
      };
      reader.onerror = (evft) => {
        console.error('Error reading file');
      };

      reader.readAsText(file);
    }
  });
});
