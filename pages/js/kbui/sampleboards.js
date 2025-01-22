// kbdisplay.js
//
////////////////////////////////////
//
//  setupSample Boards: Set up the input keyboards. QWERTY, etc.
//
//  - Add click events to display different sample boards.
//  - Everything that has a data-shifted should copy its innerText to data-normal
//  - When a shift is toggled on, switch the sample boards to shift mode.
//  - Make modifier keys (shift, ctrl, etc) toggle-able.
//  - When any key with data-key is clicked, report it to
//    ACTION.trigger('bindkey', ...)
//
////////////////////////////////////

const BOARD_NAMES = {
    qwerty: 'Keyboard Keys',
    international: 'International',
    custom: 'Mouse and Special Keys',
    layer: 'Layers',
    macro: 'Macros',
    tapdance: 'Tap Dances',
    modtaps: 'Mod Hold, Tap Keys',
    quantum: 'QMK Keys',
    'combo-container': 'Combos',
    keyOverrides: 'Key Overrides',
    mouse: 'Mouse Keys',
};

addInitializer('load', () => {
    ////////////////////////////////////
    //
    // Events to display the different boards: QWERTY, AZERTY,
    // Custom/user events, layers, etc etc.
    //
    ////////////////////////////////////
    const allboards = {};
    const allboardsContainer = get('#allboards');
    const sidebarSelector = get('#sidebar');

    for (const sel of getAll('.board-sel[data-board]')) {
        allboards[sel.dataset.board] = {
            selector: sel,
        };
    }

    for (const container of getAll('div.board-map[data-board]')) {
        allboards[container.dataset.board].container = container;
    }

    // const allTabs = getAll(".main-select");
    const allContainers = getAll('.main-container');

    function selectTab(target) {
        for (const container of allContainers) {
            if (container.id === target) {
                container.style.display = 'flex';
            } else {
                container.style.display = 'none';
            }
        }
        setSaved('main-container', target);
    }

    selectTab(getSaved('main-container', 'mainboard-container'));

    ACTION.onclick('.board-sel', (target) => {
        if (target.dataset.board === 'keyoverride-container') {
            closeBoard();
            selectTab('keyoverride-container');
        } else {
            selectTab('mainboard-container');
        }
        displayBoard(target.dataset.board);
        // ACTION.menuClose();
    });

    ACTION.onclick('.close-button', () => {
        closeBoard();
    });

    function displayBoard(name) {
        console.log('displayBoard', name);
        setSaved('boardsel', name);
        if (name === 'keyoverride-container') return;
        allboardsContainer.style['display'] = 'block';
        sidebarSelector.classList.add('active');
        for (const board of Object.values(allboards)) {
            board.selector.classList.remove('active');
            board.container.style['display'] = 'none';
        }
        allboards[name].selector.classList.add('active');
        allboards[name].container.style['display'] = 'block';
        const boardTitle = get('#board-title');
        boardTitle.innerText = BOARD_NAMES[name];
    }

    function closeBoard() {
        sidebarSelector.classList.remove('active');
        allboardsContainer.style['display'] = 'none';
        console.log('closeBoard');
    }

    if (CONNECTED) {
        const startingBoard = getSaved('boardsel', 'qwerty');
        displayBoard(startingBoard);
    }

    ////////////////////////////////////
    //
    //  Generate the dynamic boards. appendBoard adds many keys at a time.
    //  Because 'data-key' is set, KEY.refreshAllKeys will correct all key
    //  labels and titles.
    //
    ////////////////////////////////////
    function appendBoard(name, keys, length, extra) {
        if (!length) length = 20;
        if (keys && keys.length > 0) {
            const board = get(name);
            let row = null;
            for (const i of range(keys.length)) {
                if (i % length === 0) {
                    row = EL('div', { class: 'kb-row' });
                    appendChildren(board, row);
                    if (extra) {
                        appendChildren(row, extra);
                    }
                }
                appendChildren(
                    row,
                    EL(
                        'div',
                        {
                            class: `key kb-key ${
                                name === '#kb-custom' ? 'elastic' : ''
                            }`,
                            'data-bind': 'key',
                            'data-key': keys[i],
                            title: keys[i],
                        },
                        keys[i]
                    )
                );
            }
        }
    }

    addInitializer('connected', () => {
        // Custom keycode labels.
        if (KBINFO.custom_keycodes) {
            appendBoard(
                '#kb-custom',
                KBINFO.custom_keycodes.map((x) => x.name),
                5
            );
        }

        // All layer selections.
        if (KBINFO.layers) {
            const layers = range(KBINFO.layers);

            const list = get('#layer-modifier-selection');
            console.log(list);
            function layerLabel(layerid) {
                const editable = makeEditableName(EL('div'), 'layer', layerid);
                const name = getSaved('names')?.layer?.[layerid];
                const label = EL(
                    'div',
                    {
                        id: 'layer-label-' + layerid,
                        style: {
                            flexGrow: 1,
                            padding: '5px',
                            marginLeft: '30px',
                            marginRight: '30px',
                            minHeight: '20px',
                            borderBottom: '1px dotted #ccc',
                            fontWeight: '500',
                            cursor: 'pointer',
                        },
                        'data-layer-modifier-select': layerid,
                    },
                    name
                );

                label.setAttribute(
                    'title',
                    'Layer' +
                        ' ' +
                        (name || layerid) +
                        ' (click to change name)'
                );
                onClickEditIcon(label, 'layer', layerid);
                const layerContainer = EL('div', {
                    class: 'layer-modifier-container',
                    'data-layer': layerid,
                    style: {
                        display: 'flex',
                        'flex-direction': 'row',
                        'align-items': 'center',
                        width: '90%',
                        margin: '10px auto',
                        paddingRight: '20px',
                        justifyContent: 'center',
                    },
                });
                const layerNumber = EL(
                    'div',
                    {
                        class: 'layer-modifier-number',
                        style: {
                            width: '20px',
                            textAlign: 'end',
                            fontWeight: '500',
                        },
                    },
                    `${layerid}`
                );
                const keytpl = EL('div', {
                    id: 'layer-' + layerid,
                    class: 'layer-key',
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
                        borderRadius: '5px',
                        fontSize: '14px',
                    },
                    'data-layer-modifier-select': layerid,
                });
                const layerIcon = EL(
                    'div',
                    {
                        style: {
                            width: '16px',
                            height: '16px',
                            marginBottom: '5px',
                        },
                    },
                    `<svg
                        width="16"
                        height="16"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8.19531 7.35547L9.34375 6.67578L12.3496 8.41602C12.5996 8.56055 12.7812 8.70117 12.8945 8.83789C13.0078 8.97461 13.0645 9.13672 13.0645 9.32422C13.0645 9.50781 13.0078 9.66797 12.8945 9.80469C12.7812 9.94141 12.5996 10.082 12.3496 10.2266L7.79688 12.875C7.64453 12.9609 7.50391 13.0254 7.375 13.0684C7.25 13.1152 7.125 13.1387 7 13.1387C6.87109 13.1387 6.74414 13.1152 6.61914 13.0684C6.49805 13.0254 6.35938 12.9609 6.20312 12.875L1.65039 10.2266C1.40039 10.082 1.21875 9.94141 1.10547 9.80469C0.992188 9.66797 0.935547 9.50781 0.935547 9.32422C0.935547 9.13672 0.992188 8.97461 1.10547 8.83789C1.21875 8.70117 1.40039 8.56055 1.65039 8.41602L4.7793 6.60547L5.93945 7.2793L2.44727 9.26562C2.42383 9.28125 2.41211 9.30078 2.41211 9.32422C2.41211 9.34766 2.42383 9.36719 2.44727 9.38281L6.75977 11.832C6.84961 11.8828 6.92969 11.9082 7 11.9082C7.06641 11.9082 7.14648 11.8828 7.24023 11.832L11.5469 9.38281C11.5742 9.36719 11.5879 9.34766 11.5879 9.32422C11.5879 9.30078 11.5742 9.28125 11.5469 9.26562L8.19531 7.35547ZM7 8.25195C6.87109 8.25195 6.74414 8.23047 6.61914 8.1875C6.49805 8.14062 6.35938 8.07227 6.20312 7.98242L1.65039 5.3457C1.40039 5.19727 1.21875 5.05469 1.10547 4.91797C0.992188 4.78125 0.935547 4.61914 0.935547 4.43164C0.935547 4.24805 0.992188 4.08789 1.10547 3.95117C1.21875 3.81445 1.40039 3.67383 1.65039 3.5293L6.20312 0.886719C6.35938 0.796875 6.49805 0.730469 6.61914 0.6875C6.74414 0.640625 6.87109 0.617188 7 0.617188C7.125 0.617188 7.25 0.640625 7.375 0.6875C7.50391 0.730469 7.64453 0.796875 7.79688 0.886719L12.3496 3.5293C12.5996 3.67383 12.7812 3.81445 12.8945 3.95117C13.0078 4.08789 13.0645 4.24805 13.0645 4.43164C13.0645 4.61914 13.0078 4.78125 12.8945 4.91797C12.7812 5.05469 12.5996 5.19727 12.3496 5.3457L7.79688 7.98242C7.64453 8.07227 7.50391 8.14062 7.375 8.1875C7.25 8.23047 7.125 8.25195 7 8.25195Z"
                            fill="white"
                        />
                    </svg>`
                );
                const colorDot = EL('div', {
                    class: 'color-dot',
                    style: {
                        backgroundColor: '#ddd',
                        borderRadius: '50%',
                        width: '15px',
                        height: '15px',
                        marginRight: '15px',
                    },
                });
                appendChildren(keytpl, layerIcon, `${layerid}`);
                appendChildren(
                    layerContainer,
                    colorDot,
                    layerNumber,
                    label,
                    keytpl
                );
                return layerContainer;
            }

            appendChildren(
                list,
                layers.map((i) => layerLabel(i))
            );
        }

        // modtaps lists layers for layer on hold, key on tap.
        // Disable the layer keys we don't use.
        // There are only 16 LT*(kc) keys, so don't go over.
        for (let i = 0; i < 16; i++) {
            if (KBINFO.layers <= i) {
                get('[data-layer="' + i + '"]').style['display'] = 'none';
            }
        }
    });
});
