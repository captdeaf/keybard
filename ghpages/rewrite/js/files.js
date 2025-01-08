////////////////////////////////////
//
//  Downloads and Uploads of .vil and .kbi
//
////////////////////////////////////

addInitializer('load', () => {
  ////////////////////////////////////
  //
  //  Download a JSON as a file. It accepts a filename and content
  //  as arguments.
  //
  ////////////////////////////////////
  async function downloadTEXT(content, opts) {
    try {
      const handle = await window.showSaveFilePicker(opts);
      const writable = await handle.createWritable();
      const blob = new Blob([content], { type: 'text/plain' });
      await writable.write(blob);
      await writable.close();
    } catch (err) {
      console.error("Error saving file", err);
    }
  }
  function downloadTEXT_deprec(filename, content) {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    // link.setAttribute('download', filename);
    link.setAttribute('download', filename);
    link.setAttribute('target', '_blank');

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
  //  File menu actions to download .vil and .kbis.
  //
  ////////////////////////////////////
  addInitializer('connected', () => {

    ACTION.onclick('#download-vil', () => {
      const vil = kbinfoToVIL(structuredClone(KBINFO), true);
      downloadTEXT(vil, {
        suggestedName: 'keyboard.vil',
        types: [{
          description: 'Vial .vil files',
          accept: {
            'text/vial': ['.vil'],
          },
        }],
      });
      ACTION.menuClose();
    });

    ACTION.onclick('#download-vil-nomacro', () => {
      const vil = kbinfoToVIL(structuredClone(KBINFO), false);
      downloadTEXT(vil, {
        suggestedName: 'keyboard-nomacro.vil',
        types: [{
          description: 'Vial .vil files',
          accept: {
            'text/vial': ['.vil'],
          },
        }],
      });
      ACTION.menuClose();
    });

    ACTION.onclick('#download-kbi', () => {
      const copy = structuredClone(KBINFO);
      const kbi = JSON.stringify(copy, undefined, 2);
      downloadTEXT(kbi, {
        suggestedName: 'keyboard.kbi',
        types: [{
          description: 'Keybard .kbi files',
          accept: {
            'text/vial': ['.kbi'],
          },
        }],
      });
      ACTION.menuClose();
    });

    ACTION.onclick('#download-kbi-nomacro', () => {
      const copy = structuredClone(KBINFO);
      copy.macros = range(copy.macro_count).map((mid) => {return {mid: mid, actions: []}});
      const kbi = JSON.stringify(copy, undefined, 2);
      downloadTEXT(kbi, {
        suggestedName: 'keyboard-nomacro.kbi',
        types: [{
          description: 'Keybard .kbi files',
          accept: {
            'text/vial': ['.kbi'],
          },
        }],
      });
      ACTION.menuClose();
    });
  });

  ////////////////////////////////////
  //
  //  Upload menu action and working on the upload.
  //
  ////////////////////////////////////
  ACTION.onclick('#upload-file-float', () => {
    const disp = get('#float-upload');
    ACTION.showFloat(disp);
    disp.style['display'] = 'block';
    const fileinput = get('#upload-file');
    
    fileinput.onchange = () => {
      const file = fileinput.files[0];
      const reader = new FileReader();
      reader.onload = (evt) => {
        fileinput.value = '';
        ACTION.closeFloats();
        const content = evt.target.result;
        try {
          const js = JSON.parse(content);
          let kbinfo = null;
          // Is it a .vil or a .kbi file?
          if (js.kbid) {
            kbinfo = js;
          } else if (js.uid) {
            kbinfo = vilToKBINFO(js);
          } else {
            alert('Unknown json type');
            return;
          }
          kbinfo.keylayout = KLE.deserializeToKeylayout(kbinfo, kbinfo.payload.layouts.keymap);
          if (CONNECTED) {
            console.log('connected, updating');
            setActiveKBINFO(kbinfo);
            updateAllChanges();
          } else {
            console.log('new base');
            doStuff(kbinfo);
          }
        } catch (err) {
          console.error(err);
          alert('Invalid .vil or .kbi file');
        }
      };
      reader.onerror = (evft) => {
        console.error('Error reading file');
      };

      reader.readAsText(file);
    }
  });

  ////////////////////////////////////
  //
  //  Download a keymap_all.h version for compiling into qmk.
  //
  ////////////////////////////////////
  addInitializer('connected', () => {
    ACTION.onclick('#download-keymap-h', () => {
      downloadTEXT(kbinfoToCKeymap(KBINFO), {
        suggestedName: 'keymap_all.h',
        types: [{
          description: 'C files',
          accept: {
            'text/c': ['.h'],
          },
        }],
      });
      ACTION.menuClose();
    });
  });
});
