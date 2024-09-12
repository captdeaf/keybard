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
