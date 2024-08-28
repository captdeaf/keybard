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

// Create the r-clickable display for editing the name.
function editableName(type, index) {
  let name = '' + index;
  if (EDITABLE_NAMES[type][index]) {
    name = '' + index + ': ' + EDITABLE_NAMES[type][index];
  }
  const editable = EL('div', {
    class: 'editable',
    title: type + ' ' + name + ' (r-click to change name)',
  }, name);
  editable.oncontextmenu = (ev) => {
    ev.preventDefault();
    const newname = prompt('New name for ' + type + ' ' + name);
    if (newname !== null) {
      if (newname !== '') {
        EDITABLE_NAMES[type][index] = newname;
        name = '' + index + ': ' + EDITABLE_NAMES[type][index];
      } else {
        delete EDITABLE_NAMES[type][index];
        name = '' + index;
      }
      setSaved('names', EDITABLE_NAMES);
      editable.innerText = name;
      editable.setAttribute('title', type + ' ' + name + ' (r-click to change name)');
      GUI.board.refresh();
    }
    return false;
  }
  return editable;
}

function unpack(buffer, str) {
  let offset = 0;
  const dv = new DataView(buffer);
  // endian-ness
  let le = true;
  const ret = [];
  for (const chr of str.split('')) {
    let val;
    switch (chr) {
      case '<': le = true; break;
      case '>': le = false; break;
      case 'H':
        val = dv.getUint16(offset, le);
        offset += 2;
        break;
      case 'h':
        val = dv.getInt16(offset, le);
        offset += 2;
        break;
      case 'I':
        val = dv.getUint32(offset, le);
        offset += 4;
        break;
      case 'i':
        val = dv.getInt32(offset, le);
        offset += 4;
        break;
      case 'B':
        val = dv.getUint8(offset);
        offset++;
        break;
      case 'b':
        val = dv.getInt8(offset);
        offset++;
        break;
      case 'q':
        val = dv.getBigInt64(offset);
        offset += 8;
        break;
      case 'Q':
        val = dv.getBigUint64(offset);
        offset += 8;
        break;
      default:
        alertUser("Invalid char in unpack: " + chr);
    }
    if (val !== undefined) {
      ret.push(val);
    }
  }
  return ret;
}
