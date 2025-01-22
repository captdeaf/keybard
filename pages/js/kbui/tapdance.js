////////////////////////////////////
//
//  Tapdances: Parsing, Editing/Creating.
//
////////////////////////////////////

const TAPDANCE = {
    // Given a tdid and tapdance (KBINFO.tapdances[tdid], really),
    // return a description to render on a key.
    describe: null,
    // Update changes between BASE_KBINFO and KBINFO.
    updateAll: null,
    // Find and return the first empty tapdance, for assignment.
    findEmpty: null,
    // Edit a tapdance, intended for "find, edit & bind"
    edit: null,
};

addInitializer('load', () => {
    ////////////////////////////////////
    //
    //  Describe a tapdance. Return TD(id) at least, possibly its
    //  characters.
    //
    ////////////////////////////////////
    function describeTapdance(tdid, tapdance) {
        if (!tapdance) {
            tapdance = KBINFO.tapdances[tdid];
        }
        const ret = [];
        for (const k of ['tap', 'hold', 'doubletap', 'taphold']) {
            if (tapdance[k]) {
                ret.push(KEYUI.getKeyContents(tapdance[k]).str);
            }
        }
        return ret.join(' ');
    }
    TAPDANCE.describe = describeTapdance;

    const floater = get('#float-tapdance');
    const floatname = get('#float-tapdance-name');
    const savebutton = get('#float-tapdance-save');

    const tdtypemap = {
        tap: get('#float-tapdance-tap'),
        hold: get('#float-tapdance-hold'),
        doubletap: get('#float-tapdance-doubletap'),
        taphold: get('#float-tapdance-taphold'),
    };
    const tapms = get('#float-tapdance-tapms');

    const divs = {};

    let editID = 0;

    ////////////////////////////////////
    //
    //  Pop up the tapdance dialog, with its contents replaced w/ current tapdance
    //  (or empty if no tapdance value).
    //
    ////////////////////////////////////
    function renderTapdanceFloat(tapdance) {
        floatname.innerText = '' + tapdance.tdid;

        for (const [type, el] of Object.entries(tdtypemap)) {
            el.innerHTML = '';
            divs[type] = EL('div', {
                'data-tapdance-type': type,
                'data-bound': 'tapdance',
                'data-key': tapdance[type],
                class:
                    'key' + (tapdance[type] !== 'KC_NO' ? ' green' : ' white'),
            });
            appendChildren(el, divs[type]);
        }
        KEYUI.refreshAllKeys();

        divs['tapms'] = EL('input', {
            type: 'number',
            min: '0',
            max: '5000',
            'data-tapdance-type': 'tapms',
            'data-tapdance-bound': tapdance.tapms,
            value: tapdance.tapms,
        });

        tapms.innerHTML = '';
        appendChildren(tapms, divs['tapms']);

        editID = tapdance.tdid;

        floater.style['display'] = 'block';
        const sidebar = get('#sidebar');
        const rect = sidebar.getBoundingClientRect();
        floater.style['left'] = rect.x + rect.width + 'px';
        // vertical centering
        floater.style['top'] =
            Math.max(
                0,
                (window.innerHeight - floater.getBoundingClientRect().height) /
                    2
            ) + 'px';
    }

    ////////////////////////////////////
    //
    //  Populate the tapdance with what's inside it.
    //
    ////////////////////////////////////
    ACTION.onclick('#float-tapdance-save', (target) => {
        const tapdance = KBINFO.tapdances[editID];
        for (const [type, el] of Object.entries(tdtypemap)) {
            tapdance[type] = divs[type].dataset.key;
        }
        tapdance['tapms'] = parseInt(divs['tapms'].value);
        get('#tapdance-' + editID).classList.add('changed');
        CHANGES.queue('TD' + editID, () => KBAPI.updateTapdance(editID));
        KEYUI.refreshAllKeys();
        floater.style['display'] = 'none';
    });

    addInitializer('connected', () => {
        ////////////////////////////////////
        //
        //  Binding: This is kinda done a little backwards. The user clicks a key in
        //  the tapdance to rebind, we get that event. Then the user clicks a key in
        //  the sample boards. That gets redirected to us via ACTION.trigger.
        //
        ////////////////////////////////////
        ACTION.on('bind-tapdance', (keystr, target) => {
            target.dataset.key = keystr;
            KEYUI.refreshKey(target);
        });

        ACTION.on('key-revert-tapdance', (target) => {
            const oldkeystr =
                BASE_KBINFO.tapdances[editID][target.dataset.tapdanceType];
            target.dataset.key = oldkeystr;
            KEYUI.refreshKey(target);
        });

        ////////////////////////////////////
        //
        //  Add a tapdance button to the tapdance board for each tapdance the kb
        //  supports.
        //
        ////////////////////////////////////
        const tapdanceBoard = get('#tapdance-board');
        const rows = [];
        for (let tdid = 0; tdid < KBINFO.tapdance_count; tdid++) {
            const keytpl = EL(
                'div',
                {
                    id: 'tapdance-' + tdid,
                    'data-tdid': tdid,
                    'data-bind': 'key',
                    'data-key': 'TD(' + tdid + ')',
                    style: {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignContent: 'center',
                        justifyItems: 'center',
                        backgroundColor: '#000',
                        color: '#fff',
                        paddingTop: '5px',
                        width: '45px',
                        borderRadius: '5px',
                        fontSize: '14px',
                    },
                    class: 'layer-key',
                },
                ''
            );
            const tapdanceIcon = EL(
                'div',
                {
                    style: {
                        width: '16px',
                        height: '16px',
                        marginBottom: '5px',
                    },
                },
                `<svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.21875 0.257812C3.64583 0.257812 4.05208 0.401042 4.4375 0.6875C4.82292 0.96875 5.16667 1.33854 5.46875 1.79688C5.77604 2.25 6.01562 2.74219 6.1875 3.27344C6.36458 3.80469 6.45312 4.32031 6.45312 4.82031C6.45312 5.13802 6.41406 5.54167 6.33594 6.03125C6.26302 6.51562 6.14844 7.03385 5.99219 7.58594C5.83594 8.13281 5.63281 8.65625 5.38281 9.15625H1.0625C0.8125 8.65625 0.609375 8.13281 0.453125 7.58594C0.296875 7.03385 0.179688 6.51562 0.101562 6.03125C0.0286458 5.54167 -0.0078125 5.13802 -0.0078125 4.82031C-0.0078125 4.32031 0.078125 3.80469 0.25 3.27344C0.427083 2.74219 0.666667 2.25 0.96875 1.79688C1.27083 1.33854 1.61458 0.96875 2 0.6875C2.39062 0.401042 2.79688 0.257812 3.21875 0.257812ZM3.22656 13.75C2.61719 13.75 2.15104 13.4766 1.82812 12.9297C1.51042 12.3828 1.35156 11.6797 1.35156 10.8203C1.35156 10.737 1.35417 10.6406 1.35938 10.5312C1.36979 10.4219 1.38281 10.3203 1.39844 10.2266H5.05469C5.07031 10.3203 5.08073 10.4219 5.08594 10.5312C5.09635 10.6406 5.10156 10.737 5.10156 10.8203C5.10156 11.3932 5.02865 11.901 4.88281 12.3438C4.74219 12.7812 4.53125 13.125 4.25 13.375C3.97396 13.625 3.63281 13.75 3.22656 13.75ZM12.7109 5.39062C13.112 5.53646 13.4453 5.8099 13.7109 6.21094C13.9766 6.60677 14.1719 7.07031 14.2969 7.60156C14.4271 8.13281 14.4844 8.67969 14.4688 9.24219C14.4531 9.79948 14.3594 10.3099 14.1875 10.7734C14.0781 11.0807 13.9036 11.4505 13.6641 11.8828C13.4297 12.3099 13.1432 12.7552 12.8047 13.2188C12.4714 13.6771 12.1016 14.1016 11.6953 14.4922L7.63281 13.0156C7.57552 12.4583 7.5651 11.8958 7.60156 11.3281C7.64323 10.7552 7.71094 10.2266 7.80469 9.74219C7.90365 9.25781 8.00781 8.86719 8.11719 8.57031C8.28906 8.10156 8.54688 7.64844 8.89062 7.21094C9.23958 6.76823 9.63281 6.38542 10.0703 6.0625C10.513 5.73958 10.9635 5.51042 11.4219 5.375C11.8854 5.23958 12.3151 5.24479 12.7109 5.39062ZM8.10156 18.0703C7.52865 17.8568 7.1849 17.4375 7.07031 16.8125C6.96094 16.1927 7.05208 15.4792 7.34375 14.6719C7.36979 14.5938 7.40625 14.5052 7.45312 14.4062C7.5 14.3021 7.54688 14.2083 7.59375 14.125L11.0312 15.3828C11.0104 15.4766 10.9844 15.5755 10.9531 15.6797C10.9271 15.7891 10.8984 15.8828 10.8672 15.9609C10.5755 16.763 10.1849 17.3672 9.69531 17.7734C9.20573 18.1797 8.67448 18.2786 8.10156 18.0703Z" fill="white" /></svg>`
            );
            appendChildren(keytpl, tapdanceIcon, `${tdid}`);
            const tdNumber = EL('div', { class: 'tapdance-number' }, `${tdid}`);
            const keyContainer = EL('div', { class: 'key-container' });
            appendChildren(keyContainer, keytpl);
            const dragButton = EL(
                'div',
                { class: 'drag-macro', style: { opacity: '0' } },
                `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M360-160q-33 0-56.5-23.5T280-240q0-33 23.5-56.5T360-320q33 0 56.5 23.5T440-240q0 33-23.5 56.5T360-160Zm240 0q-33 0-56.5-23.5T520-240q0-33 23.5-56.5T600-320q33 0 56.5 23.5T680-240q0 33-23.5 56.5T600-160ZM360-400q-33 0-56.5-23.5T280-480q0-33 23.5-56.5T360-560q33 0 56.5 23.5T440-480q0 33-23.5 56.5T360-400Zm240 0q-33 0-56.5-23.5T520-480q0-33 23.5-56.5T600-560q33 0 56.5 23.5T680-480q0 33-23.5 56.5T600-400ZM360-640q-33 0-56.5-23.5T280-720q0-33 23.5-56.5T360-800q33 0 56.5 23.5T440-720q0 33-23.5 56.5T360-640Zm240 0q-33 0-56.5-23.5T520-720q0-33 23.5-56.5T600-800q33 0 56.5 23.5T680-720q0 33-23.5 56.5T600-640Z" /></svg>`
            );
            const editButton = EL(
                'div',
                {
                    class: 'edit-macro',
                    style: { opacity: '0' },
                    'data-tdid': tdid,
                },
                `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z"/></svg>`
            );
            editButton.onclick = (e) => {
                e.stopPropagation();
                e.preventDefault();
                ACTION.trigger('key-tapdance-edit', editButton);
            };
            appendChildren(keyContainer, dragButton);
            appendChildren(keyContainer, editButton);
            const dottedLine = EL('div', { class: 'dotted-line' });
            const tdContainer = EL('div', { class: 'macro-container' });
            appendChildren(tdContainer, tdNumber);
            appendChildren(tdContainer, dottedLine);
            appendChildren(tdContainer, keyContainer);
            rows.push(tdContainer);
        }
        appendChildren(
            tapdanceBoard,
            EL('div', { class: 'kb-group' }, ...rows)
        );
    });

    ////////////////////////////////////
    //
    //  Context menu for tap dance keys in the sample board.
    //
    ////////////////////////////////////
    ACTION.on('key-tapdance-edit', (target) => {
        const tdid = target.dataset.tdid;
        renderTapdanceFloat(KBINFO.tapdances[tdid]);
    });

    ACTION.on('key-tapdance-clear', (target) => {
        const tdid = target.dataset.tdid;
        const td = KBINFO.tapdances[tdid];
        td.tap = 'KC_NO';
        td.hold = 'KC_NO';
        td.taphold = 'KC_NO';
        td.doubletap = 'KC_NO';
        td.tapms = 200;
        target.classList.add('changed');
        CHANGES.queue('TD' + tdid, () => KBAPI.updateTapdance(tdid));
        KEYUI.refreshAllKeys();
    });

    ACTION.on('key-tapdance-revert', (target) => {
        const tdid = target.dataset.tdid;
        target.classList.remove('changed');
        KBINFO.tapdances[tdid] = structuredClone(BASE_KBINFO.tapdances[tdid]);
        CHANGES.clear('TD' + tdid);
        KEYUI.refreshAllKeys();
    });

    ACTION.addContextMenu('[data-tdid]', [
        { name: 'Edit Tapdance', trigger: 'key-tapdance-edit' },
        { name: 'Clear Tapdance', trigger: 'key-tapdance-clear' },
        { name: 'Revert Tapdance', trigger: 'key-tapdance-revert' },
    ]);

    ////////////////////////////////////
    //
    //  For context-menu tapdance creation.
    //
    ////////////////////////////////////
    TAPDANCE.findEmpty = () => {
        for (let tdid = 0; tdid < KBINFO.tapdance_count; tdid++) {
            const td = KBINFO.tapdances[tdid];
            if (
                td.tap === 'KC_NO' &&
                td.hold === 'KC_NO' &&
                td.taphold === 'KC_NO' &&
                td.doubletap === 'KC_NO'
            ) {
                return tdid;
            }
        }
        return -1;
    };

    TAPDANCE.edit = (tdid) => {
        renderTapdanceFloat(KBINFO.tapdances[tdid]);
    };

    ////////////////////////////////////
    //
    //  Called when a file is uploaded or a device is connected after a file
    //  is uploaded. Mark and queue all changes.
    //
    ////////////////////////////////////
    TAPDANCE.updateAll = () => {
        for (let tdid = 0; tdid < KBINFO.tapdance_count; tdid++) {
            const td = KBINFO.tapdances[tdid];
            const btd = BASE_KBINFO.tapdances[tdid];
            for (const i of ['tap', 'hold', 'doubletap', 'taphold', 'tapms']) {
                if (td[i] !== btd[i]) {
                    get('#tapdance-' + tdid).classList.add('changed');
                    CHANGES.queue('TD' + tdid, () =>
                        KBAPI.updateTapdance(tdid)
                    );
                    break;
                }
            }
        }
    };
});
