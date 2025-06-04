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
//  TODO: what is actually stored in browser storage and cosmetic
//  TODO: is unprefixed. it's arguable that "name" is better reserved
//  TODO: for that naked usage, but getEditableName is relied on under
//  TODO: that name elsewhere, so until there is a greenlight for
//  TODO: refactoring that, we'll use "barename" for the unprefixed
//  TODO: version and keep the signature and behavior of getEditableName
//  TODO: unchanged.
//
////////////////////////////////////
function getEditableBareName(type, index, def) {
    const local = getSaved('names', {});
    const rv = KBINFO.cosmetic?.[type]?.[index]
        ?? local?.[type]?.[index]
        ?? def
        ?? '' + index;
    return rv;
}

////////////////////////////////////
//
//  Compose an unambiguous label for entities whose names can be changed by
//  the user by prefixing the given index, unless the given name itself
//  *is* that index, in which case we do not prefix.
//
////////////////////////////////////
function buildEditableLabel(index, name) {
    // IMPORTANT: == is used here instead of === because it is very likely
    // that index is coming in as a number and name as a stringified version
    // of it, so we want loose equality checking here.
    const rv = name == index ? name : `${index}: ${name}`;
    return rv;
}

function getEditableName(type, index, def, skipidx) {
    const barename = getEditableBareName(type, index, def);
    const rv = skipidx ? barename : buildEditableLabel(index, barename);
    return rv;
}

// Names: for layers, macros, etc. Saved to kbinfo.
// Create the r-clickable display for editing the name.
function makeEditableName(editable, type, index) {
    editable.dataset.editableType = type;
    editable.dataset.editableIndex = index;

    let name = getEditableName(type, index);

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
        ev.preventDefault()

        // names are what is stored in kbi and browser storage.
        // labels also include a prefix containing the item index.
        // despite the function name, getEditableName returns what
        // we call labels here.
        const oldName = getEditableBareName(type, index);
        const oldLabel = buildEditableLabel(index, oldName);
        const newName = prompt('New name for ' + type + ' ' + oldLabel);

        if (newName !== null && newName !== oldName) {
            // here we know that the user did not cancel the name change dialog,
            // and what was entered was not what was already present
            if (newName !== '') {
                if (!(type in KBINFO.cosmetic)) {
                    KBINFO.cosmetic[type] = {};
                }
                if (!(type in local)) {
                    local[type] = {};
                }
                KBINFO.cosmetic[type][index] = newName;
                local[type][index] = newName;
            } else {
                delete KBINFO.cosmetic[type][index];
                delete local[type][index];
            }
            setSaved('names', local);

            const labelEl = find(`#${type}-label-${index}`);
            if (labelEl) {
                // TODO: i was unable to locate where this code actually takes
                // TODO: effect, so unsure whether it wants the index prefix or
                // TODO: not. preserving existing behavior, which did not include
                // TODO: the prefix.
                labelEl.innerText = newName;
            }

            KEYUI.refreshAllKeys();

            const newLabel = buildEditableLabel(index, newName);
            for (const editable of findAll(`[data-editable="${type}.${index}"]`)) {
                editable.innerText = newLabel;
            }
        }

        return false;
    };
}
