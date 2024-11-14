////////////////////////////////////
//
//  Example boards and layers.
//
//  - Fetch all example boards in the repository, and add them to the menu.
//  - Fetch all example layers in the repository, and add them to layer ops menu.
//
////////////////////////////////////

// SAMPLE_LAYERS is populated elsewhere, before load.
const SAMPLE_LAYERS = {};

addInitializer('load', () => {
  ////////////////////////////////////
  //
  //  Sample layers. This populates the dropup menu with our sample boards.
  //
  ////////////////////////////////////
  const layermenu = get('#sample-layers');
  for (const [kbname, layers] of Object.entries(SAMPLE_LAYERS)) {
    const kbmenu = EL('div', {class: 'dropdown-content'})
    const els = [];
    for (const [layername, map] of Object.entries(layers)) {
      els.push(EL('label', {
        'data-sample-kb': kbname,
        'data-sample-layer': layername,
      }, layername));
    }
    appendChildren(kbmenu, els);
    appendChildren(layermenu, EL('label', {class: 'dropdown'}, kbname, kbmenu));
  }

  ////////////////////////////////////
  //
  //  Layer actions
  //
  ////////////////////////////////////
  ACTION.onclick('[data-sample-kb]', async (target) => {
    const which = target.dataset.sampleKb;
    if (which === 'fill') {
      const km = KBINFO.keymap[MAINBOARD.selectedLayer];
      const key = target.dataset.sampleKey;
      KBINFO.keymap[MAINBOARD.selectedLayer] = km.map(() => key);
    } else if (which === 'copy-layer') {
      const clipjs = KBINFO.keymap[MAINBOARD.selectedLayer];
      navigator.clipboard.writeText(JSON.stringify(clipjs));
    } else if (which === 'paste-layer') {
      const clip = await navigator.clipboard.readText();
      const clipjs = JSON.parse(clip);
      KBINFO.keymap[MAINBOARD.selectedLayer] = clipjs;
    } else if (which === 'fillEmpty') {
      const km = KBINFO.keymap[MAINBOARD.selectedLayer];
      const key = target.dataset.sampleKey;
      for (let kmid = 0; kmid < km.length; kmid++) {
        if (km[kmid] === 'KC_NO') {
          km[kmid] = key;
        }
      }
    } else if (which in SAMPLE_LAYERS) {
      const kmap = SAMPLE_LAYERS[which][target.dataset.sampleLayer];
      KBINFO.keymap[MAINBOARD.selectedLayer] = structuredClone(kmap);
    } else {
      console.log("Unknown data-sample-kb op:", which);
    }
    updateAllChanges();
    ACTION.menuClose();
  });

  ////////////////////////////////////
  //
  //  Sample kbinfos - replace the entire kbinfo. Kinda like uploading,
  //  but we have them for examples.
  //
  ////////////////////////////////////
  const sampleKBIs = {};
  async function fetchAll() {
    // Fetch the listing, then individual items.
    const resp = await fetch("samples/boards/index.json");
    // const resp = await fetch("https://api.github.com/repos/captdeaf/keybard/contents/pages/js/samples/boards?ref=master");
    const jslisting = await resp.json();
    if (jslisting) {
      for (const item of jslisting) {
        const itemresp = await fetch(`samples/boards/${item.name}`);
        const itemjs = await itemresp.json();
        sampleKBIs[item.name] = itemjs;
      }
    }
    const kbimenu = get('#sample-kbis');
    const els = [];
    for (const [name, entry] of Object.entries(sampleKBIs)) {
      els.push(EL('label', {
        'data-sample-kbi': name,
      }, name));
    }
    appendChildren(kbimenu, els);
  }
  fetchAll();
  ACTION.onclick('[data-sample-kbi]', (target) => {
    const kbi = sampleKBIs[target.dataset.sampleKbi];
    if (CONNECTED) {
      setActiveKBINFO(kbi);
      updateAllChanges();
    } else {
      doStuff(kbi);
    }
    ACTION.menuClose();
  });
});
