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
function getEditableName(type, index, def, skipidx) {
    const local = getSaved("names", {});
    if (!(type in KBINFO.cosmetic)) {
        return def;
    }
    let prefix = index + ": ";
    if (skipidx) {
        prefix = "";
    }
    if (KBINFO.cosmetic[type][index]) {
        return prefix + KBINFO.cosmetic[type][index];
    } else if (type in local && index in local[type]) {
        return prefix + local[type][index];
    } else {
        return index;
    }
}

// Names: for layers, macros, etc. Saved to kbinfo.
// Create the r-clickable display for editing the name.
function makeEditableName(editable, type, index) {
    editable.dataset.editableType = type;
    editable.dataset.editableIndex = index;

    let name = getEditableName(type, index, "" + index);

    editable.setAttribute("title", type + " " + name + " (r-click to change name)");

    const editableContent = EL('div', {}, '' + name);

    editable.style['position'] = 'relative';

    const editIcon = EL(
      "div",
      { 
        class: "edit-icon",
        style: {
            float: 'right',
            position: 'absolute',
            top: '0px',
            right: '0px',
        },
      },
      '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z"/></svg>'
    );
    appendChildren(editable, editableContent, editIcon);
    editIcon.onclick = (ev) => {
        const local = getSaved("names", {});
        ev.preventDefault();
        const newname = prompt("New name for " + type + " " + name);
        if (newname !== null) {
            if (newname !== "") {
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
        setSaved("names", local);
        name = getEditableName(type, index);
        editableContent.innerText = name;
        editable.setAttribute("title", type + " " + name + " (r-click to change name)");
        editable.setAttribute("layerName", name);
        return false;
    };
    return editable;
}
