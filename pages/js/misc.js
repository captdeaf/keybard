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
    const local = getSaved('names', {});
    if (!(type in KBINFO.cosmetic)) {
        return def;
    }
    let prefix = index + ': ';
    if (skipidx) {
        prefix = '';
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

    let name = getEditableName(type, index, '' + index);

    editable.setAttribute(
        'title',
        type + ' ' + name + ' (r-click to change name)'
    );

    const editableContent = EL(
        'div',
        {
            'data-editable': `${type}.${index}`,
        },
        '' + name
    );

    editable.style['position'] = 'relative';

    appendChildren(editable, editableContent);
    if (editable.classList.contains('selected')) {
        editableContent.appendChild(editIcon);
    }

    return editable;
}

function onClickEditIcon(editIcon, type, index) {
    editIcon.onclick = (ev) => {
        const local = getSaved('names', {});
        ev.preventDefault();
        name = getEditableName(type, index);
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
                const layerLabel = find(`#layer-label-${index}`);
                if (layerLabel) {
                    layerLabel.innerText = newname;
                }
            } else {
                delete KBINFO.cosmetic[type][index];
                delete local[type][index];
            }
            KEYUI.refreshAllKeys();
        }
        name = getEditableName(type, index);
        setSaved('names', local);
        for (const editable of findAll(`[data-editable="${type}.${index}"]`)) {
            editable.innerText = name;
        }
        return false;
    };
}
