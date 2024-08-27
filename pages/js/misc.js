////////////////////////////////////
//
//  Editable names - these are saved in local memory.
//
//  Maybe TBD: upload and download, or save/load from json?
//
////////////////////////////////////

// Names: for layers, macros, etc. Saved to local site memory.
const EDITABLE_NAMES = Object.assign({
  layer: {
    [0]: 'default',
    [4]: 'NAS',
  },
  macro: {},
  combo: {},
  tapdance: {},
}, getSaved('names', {}));

// Create the double-clickable display for editing the name.
function editableName(type, index) {
  let name = '' + index;
  if (EDITABLE_NAMES[type][index]) {
    name = '' + index + ': ' + EDITABLE_NAMES[type][index];
  }
  const editable = EL('div', {
    class: 'editable',
    title: type + ' ' + name + ' (double click to change)',
  }, name);
  editable.ondblclick = () => {
    const newname = prompt('New name for ' + type + ' ' + name);
    if (newname !== null) {
      EDITABLE_NAMES[type][index] = newname;
      setSaved('names', EDITABLE_NAMES);
      name = '' + index + ': ' + EDITABLE_NAMES[type][index];
      editable.innerText = name;
      GUI.board.refresh();
    }
  }
  return editable;
}
