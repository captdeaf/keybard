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
  const local = getSaved('names', {});
  if (!(type in KBINFO.cosmetic)) {
    return def;
  }
  if (KBINFO.cosmetic[type][index]) {
    return index + ': ' + KBINFO.cosmetic[type][index];
  } else if (type in local && index in local[type]) {
    return index + ': ' + local[type];
  } else {
    return def;
  }
}

// Names: for layers, macros, etc. Saved to kbinfo.
// Create the r-clickable display for editing the name.
function makeEditableName(editable, type, index) {
  editable.dataset.editableType = type;
  editable.dataset.editableIndex = index;

  let name = getEditableName(type, index, '' + index);

  editable.innerText = name;
  editable.setAttribute('title', type + ' ' + name + ' (r-click to change name)');

  editable.oncontextmenu = (ev) => {
    if (SETTINGS.disableRightClicks) {
      return true;
    }
    const local = getSaved('names', {});
    ev.preventDefault();
    const newname = prompt('New name for ' + type + ' ' + name);
    if (newname !== null) {
      if (newname !== '') {
        if (!(type in KBINFO.cosmetic)) {
          KBINFO.cosmetic[type] = {};
        }
        if (!(type in local)) {
          local[type] = {};
        }
        KBINFO.cosmetic[type][index] = newname;
        local[type][index] = newname;
      } else {
        delete KBINFO.cosmetic[type][index];
        delete local[type][index];
      }
      KEYUI.refreshAllKeys();
    }
    setSaved('names', local);
    name = getEditableName(type, index);
    editable.innerText = name; 
    editable.setAttribute('title', type + ' ' + name + ' (r-click to change name)');
    return false;
  }
  return editable;
}
