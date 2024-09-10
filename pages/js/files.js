////////////////////////////////////
//
//  Downloads and Uploads of .vil and .svl
//
////////////////////////////////////

addInitializer('connected', () => {
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
  //  Nodelines: Mostly kinda junk stuff.
  //
  ////////////////////////////////////
  function generateVIL(kbinfo, macros) {
    if (macros) {
      macros = kbinfo.macros.map((macro) => macro.actions);
    } else {
      macros = repeat([], kbinfo.macro_count);
    }
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

  ACTION.onclick('#download-vil', () => {
    const vil = generateVIL(deepCopy(KBINFO), true);
    downloadTEXT('keyboard.vil', vil);
  });

  ACTION.onclick('#download-vil-nomacro', () => {
    const vil = generateVIL(deepCopy(KBINFO), false);
    downloadTEXT('keyboard-nomacro.vil', vil);
  });

  ACTION.onclick('#download-svl', () => {
    const copy = deepCopy(KBINFO);
    delete copy.payload;
    downloadTEXT('keyboard.svl', copy);
  });

  ACTION.onclick('#download-svl-nomacro', () => {
    const copy = deepCopy(KBINFO);
    delete copy.payload;
    copy.macros = repeat([], copy.macro_count);
    const svl = JSON.stringify(copy);
    downloadTEXT('keyboard-nomacro.svl', svl);
  });
});
