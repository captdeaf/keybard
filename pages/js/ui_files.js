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

  ////////////////////////////////////
  //
  //  File menu actions to download .vil and .kbis.
  //
  ////////////////////////////////////
  addInitializer('connected', () => {

    ACTION.onclick('#download-vil', () => {
      const vil = FILE.generateVIL(structuredClone(KBINFO), true);
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
      const vil = FILE.generateVIL(structuredClone(KBINFO), false);
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
            kbinfo = FILE.parseVIL(js);
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
  //  File menu actions to download .c and .h.
  //
  ////////////////////////////////////
  addInitializer('connected', () => {
    ACTION.onclick('#download-keymap-h', () => {
      downloadTEXT(FILE.generateKeymapC(KBINFO), {
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
