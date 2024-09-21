// misc.js
//
////////////////////////////////////
//
//  Miscellaneous UI library.
//
////////////////////////////////////

////////////////////////////////////
//
//  Editable names - these are saved in KBINFO.cosmetic
//
////////////////////////////////////
function getEditableName(type, index, def) {
  if (!(type in KBINFO.cosmetic)) {
    return def;
  }
  if (KBINFO.cosmetic[type][index]) {
    return KBINFO.cosmetic[type][index];
  } else {
    return def;
  }
}

// Names: for layers, macros, etc. Saved to kbinfo.
// Create the r-clickable display for editing the name.
function editableName(type, index) {
  let name = getEditableName(type, index, '' + index);
  const editable = EL('div', {
    class: 'editable',
    title: type + ' ' + name + ' (r-click to change name)',
  }, name);
  editable.oncontextmenu = (ev) => {
    ev.preventDefault();
    const newname = prompt('New name for ' + type + ' ' + name);
    if (newname !== null) {
      if (newname !== '') {
        if (!(type in KBINFO.cosmetic)) {
          KBINFO.cosmetic[type] = {};
        }
        KBINFO.cosmetic[type][index] = newname;
        name = '' + index + ': ' + KBINFO.cosmetic[type][index];
      } else {
        delete KBINFO.cosmetic[type][index];
        name = '' + index;
      }
      editable.innerText = name;
      editable.setAttribute('title', type + ' ' + name + ' (r-click to change name)');
      KEYUI.refreshAllKeys();
    }
    return false;
  }
  return editable;
}
