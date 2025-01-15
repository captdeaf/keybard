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

addInitializer("load", () => {
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
        for (const k of ["tap", "hold", "doubletap", "taphold"]) {
            if (tapdance[k]) {
                ret.push(KEYUI.getKeyContents(tapdance[k]).str);
            }
        }
        return ret.join(" ");
    }
    TAPDANCE.describe = describeTapdance;

    const floater = get("#float-tapdance");
    const floatname = get("#float-tapdance-name");
    const savebutton = get("#float-tapdance-save");

    const tdtypemap = {
        tap: get("#float-tapdance-tap"),
        hold: get("#float-tapdance-hold"),
        doubletap: get("#float-tapdance-doubletap"),
        taphold: get("#float-tapdance-taphold"),
    };
    const tapms = get("#float-tapdance-tapms");

    const divs = {};

    let editID = 0;

    ////////////////////////////////////
    //
    //  Pop up the tapdance dialog, with its contents replaced w/ current tapdance
    //  (or empty if no tapdance value).
    //
    ////////////////////////////////////
    function renderTapdanceFloat(tapdance) {
        floatname.innerText = "" + tapdance.tdid;

        for (const [type, el] of Object.entries(tdtypemap)) {
            el.innerHTML = "";
            divs[type] = EL("div", {
                "data-tapdance-type": type,
                "data-bound": "tapdance",
                "data-key": tapdance[type],
                class: "key" + (tapdance[type] !== "KC_NO" ? " green" : " white"),
            });
            appendChildren(el, divs[type]);
        }
        KEYUI.refreshAllKeys();

        divs["tapms"] = EL("input", {
            type: "number",
            min: "0",
            max: "5000",
            "data-tapdance-type": "tapms",
            "data-tapdance-bound": tapdance.tapms,
            value: tapdance.tapms,
        });

        tapms.innerHTML = "";
        appendChildren(tapms, divs["tapms"]);

        editID = tapdance.tdid;

        floater.style["display"] = "block";
        const sidebar = get("#sidebar");
        const rect = sidebar.getBoundingClientRect();
        floater.style["left"] = rect.x + rect.width + "px";
        // vertical centering
        floater.style["top"] = Math.max(0, (window.innerHeight - floater.getBoundingClientRect().height) / 2) + "px";
    }

    ////////////////////////////////////
    //
    //  Populate the tapdance with what's inside it.
    //
    ////////////////////////////////////
    ACTION.onclick("#float-tapdance-save", (target) => {
        const tapdance = KBINFO.tapdances[editID];
        for (const [type, el] of Object.entries(tdtypemap)) {
            tapdance[type] = divs[type].dataset.key;
        }
        tapdance["tapms"] = parseInt(divs["tapms"].value);
        get("#tapdance-" + editID).classList.add("changed");
        CHANGES.queue("TD" + editID, () => KBAPI.updateTapdance(editID));
        KEYUI.refreshAllKeys();
        floater.style["display"] = "none";
    });

    addInitializer("connected", () => {
        ////////////////////////////////////
        //
        //  Binding: This is kinda done a little backwards. The user clicks a key in
        //  the tapdance to rebind, we get that event. Then the user clicks a key in
        //  the sample boards. That gets redirected to us via ACTION.trigger.
        //
        ////////////////////////////////////
        ACTION.on("bind-tapdance", (keystr, target) => {
            target.dataset.key = keystr;
            KEYUI.refreshKey(target);
        });

        ACTION.on("key-revert-tapdance", (target) => {
            const oldkeystr = BASE_KBINFO.tapdances[editID][target.dataset.tapdanceType];
            target.dataset.key = oldkeystr;
            KEYUI.refreshKey(target);
        });

        ////////////////////////////////////
        //
        //  Add a tapdance button to the tapdance board for each tapdance the kb
        //  supports.
        //
        ////////////////////////////////////
        const tapdanceBoard = get("#tapdance-board");
        const rows = [];
        for (let tdid = 0; tdid < KBINFO.tapdance_count; tdid++) {
            const keytpl = EL(
                "div",
                {
                    id: "tapdance-" + tdid,
                    "data-tdid": tdid,
                    "data-bind": "key",
                    "data-key": "TD(" + tdid + ")",
                    class: "key kb-key key-tapdance",
                },
                ""
            );
            // if (!rows[rowid]) {rows[rowid] = [];}
            // rows[rowid].push(keytpl);
            const tdNumber = EL("div", { class: "tapdance-number" }, `${tdid}`);
            const keyContainer = EL("div", { class: "key-container" });
            appendChildren(keyContainer, keytpl);
            const dragButton = EL(
                "div",
                { class: "drag-macro", style: { opacity: "0" } },
                `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M360-160q-33 0-56.5-23.5T280-240q0-33 23.5-56.5T360-320q33 0 56.5 23.5T440-240q0 33-23.5 56.5T360-160Zm240 0q-33 0-56.5-23.5T520-240q0-33 23.5-56.5T600-320q33 0 56.5 23.5T680-240q0 33-23.5 56.5T600-160ZM360-400q-33 0-56.5-23.5T280-480q0-33 23.5-56.5T360-560q33 0 56.5 23.5T440-480q0 33-23.5 56.5T360-400Zm240 0q-33 0-56.5-23.5T520-480q0-33 23.5-56.5T600-560q33 0 56.5 23.5T680-480q0 33-23.5 56.5T600-400ZM360-640q-33 0-56.5-23.5T280-720q0-33 23.5-56.5T360-800q33 0 56.5 23.5T440-720q0 33-23.5 56.5T360-640Zm240 0q-33 0-56.5-23.5T520-720q0-33 23.5-56.5T600-800q33 0 56.5 23.5T680-720q0 33-23.5 56.5T600-640Z" /></svg>`
            );
            const editButton = EL(
                "div",
                { class: "edit-macro", style: { opacity: "0" }, "data-tdid": tdid, "data-context-trigger": "key-macro-edit" },
                `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z"/></svg>`
            );
            editButton.onclick = (e) => {
                e.stopPropagation();
                e.preventDefault();
                ACTION.trigger("key-tapdance-edit", editButton);
            };
            appendChildren(keyContainer, dragButton);
            appendChildren(keyContainer, editButton);
            const dottedLine = EL("div", { class: "dotted-line" });
            const tdContainer = EL("div", { class: "macro-container" });
            appendChildren(tdContainer, tdNumber);
            appendChildren(tdContainer, dottedLine);
            appendChildren(tdContainer, keyContainer);
            rows.push(tdContainer);
        }
        const header = EL("div", { class: "board-help" }, "To edit tapdances, R-click one.");
        appendChildren(tapdanceBoard, EL("div", { class: "kb-group" }, header, ...rows));
    });

    ////////////////////////////////////
    //
    //  Context menu for tap dance keys in the sample board.
    //
    ////////////////////////////////////
    ACTION.on("key-tapdance-edit", (target) => {
        const tdid = target.dataset.tdid;
        renderTapdanceFloat(KBINFO.tapdances[tdid]);
    });

    ACTION.on("key-tapdance-clear", (target) => {
        const tdid = target.dataset.tdid;
        const td = KBINFO.tapdances[tdid];
        td.tap = "KC_NO";
        td.hold = "KC_NO";
        td.taphold = "KC_NO";
        td.doubletap = "KC_NO";
        td.tapms = 200;
        target.classList.add("changed");
        CHANGES.queue("TD" + tdid, () => KBAPI.updateTapdance(tdid));
        KEYUI.refreshAllKeys();
    });

    ACTION.on("key-tapdance-revert", (target) => {
        const tdid = target.dataset.tdid;
        target.classList.remove("changed");
        KBINFO.tapdances[tdid] = structuredClone(BASE_KBINFO.tapdances[tdid]);
        CHANGES.clear("TD" + tdid);
        KEYUI.refreshAllKeys();
    });

    ACTION.addContextMenu("[data-tdid]", [
        { name: "Edit Tapdance", trigger: "key-tapdance-edit" },
        { name: "Clear Tapdance", trigger: "key-tapdance-clear" },
        { name: "Revert Tapdance", trigger: "key-tapdance-revert" },
    ]);

    ////////////////////////////////////
    //
    //  For context-menu tapdance creation.
    //
    ////////////////////////////////////
    TAPDANCE.findEmpty = () => {
        for (let tdid = 0; tdid < KBINFO.tapdance_count; tdid++) {
            const td = KBINFO.tapdances[tdid];
            if (td.tap === "KC_NO" && td.hold === "KC_NO" && td.taphold === "KC_NO" && td.doubletap === "KC_NO") {
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
            for (const i of ["tap", "hold", "doubletap", "taphold", "tapms"]) {
                if (td[i] !== btd[i]) {
                    get("#tapdance-" + tdid).classList.add("changed");
                    CHANGES.queue("TD" + tdid, () => KBAPI.updateTapdance(tdid));
                    break;
                }
            }
        }
    };
});
