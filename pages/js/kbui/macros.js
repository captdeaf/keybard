////////////////////////////////////
//
//  Macros: Parsing, Editing/Creating.
//
////////////////////////////////////

const MACROS = {
    // Describe a macro using its text (preferred), or keys (fallback).
    describe: null,
    // Update changes between BASE_KBINFO and KBINFO.
    updateAll: null,
    // Find and return the first empty macro, for assignment.
    findEmpty: null,
    // Edit a macro, intended for "find, edit & bind"
    edit: null,
};

addInitializer("load", () => {
    ////////////////////////////////////
    //
    //  Describe a macro. If there's any text in the macro, then just use that.
    //  If no text, then return a symbol indicating it's used.
    //
    ////////////////////////////////////
    function describeMacro(mid, macro) {
        if (!macro) {
            macro = KBINFO.macros[mid];
        }
        if (macro.actions.length > 0) {
            const all = [];
            const title = [];
            let texts = [];
            const shorts = [];
            for (const act of macro.actions) {
                let mkey;
                if (act[0] === "delay") {
                    mkey = act[1];
                } else {
                    mkey = act[1].replace("KC_", "");
                }
                if (act[0] === "text") {
                    texts.push(act[1]);
                    title.push(act[1]);
                } else if (act[0] === "down") {
                    all.push(mkey);
                    if (mkey.length === 1) {
                        shorts.push(mkey);
                    }
                    title.push("down", act[1]);
                } else if (act[0] === "up") {
                    all.push(mkey);
                    title.push("up", act[1]);
                    if (mkey.length === 1) {
                        shorts.push(mkey);
                    }
                } else if (act[0] === "tap") {
                    all.push(mkey);
                    title.push("tap", act[1]);
                    if (mkey.length === 1) {
                        shorts.push(mkey);
                    }
                } else if (act[0] === "delay") {
                    all.push(mkey);
                    title.push("delay", act[1]);
                    if (mkey.length === 1) {
                        shorts.push(mkey);
                    }
                }
            }
            if (texts.length === 0) {
                texts = shorts;
            }
            if (texts.length === 0) {
                texts = ["M" + mid];
            }
            return {
                str: texts.join(""),
                title: title.join(" "),
            };
        }
        return {
            str: "M" + mid,
            title: "M" + mid,
        };
    }
    MACROS.describe = describeMacro;

    ////////////////////////////////////
    //
    //  Wrap a key action inside an element that can remove it,
    //  and TBD: swap it w/ other elements, etc.
    //
    ////////////////////////////////////
    function wrapAction(desc, ...args) {
        const ret = {
            el: EL(...args),
        };
        ret.wrap = EL("div", { class: "macro-action" }, [
            EL("div", { class: "macro-buttons" }, [
                EL("div", { class: "swap-macro-back" }, "&lt;"),
                EL("div", { class: "remove-macro" }, "X"),
                EL("div", { class: "swap-macro-forward" }, "&gt;"),
                EL("div", { class: "macro-type" }, desc),
            ]),
            ret.el,
        ]);
        return ret;
    }

    ACTION.onclick(".remove-macro", (target) => {
        target.parentElement.parentElement.replaceWith("");
    });

    ACTION.onclick(".swap-macro-back", (target) => {
        const thismacro = target.parentElement.parentElement;
        const sib = thismacro.previousSibling;
        if (sib) {
            thismacro.parentElement.insertBefore(thismacro, sib);
        }
    });

    ACTION.onclick(".swap-macro-forward", (target) => {
        const thismacro = target.parentElement.parentElement;
        const sib = thismacro.nextSibling;
        if (sib) {
            thismacro.parentElement.insertBefore(sib, thismacro);
        }
    });

    function wrapKeyAction(type, value) {
        const ret = wrapAction(
            type,
            "div",
            {
                class: "key key-" + type,
                "data-key": value,
                "data-macro": type,
                "data-bound": "macro",
            },
            ""
        );
        KEYUI.refreshKey(ret.el);
        return ret;
    }

    ////////////////////////////////////
    //
    //  Generate elements for the individual actions.
    //  text: input type=text
    //  delay: input type=text
    //
    ////////////////////////////////////
    function renderAction(action) {
        if (action[0] === "text") {
            return wrapAction(
                "text",
                "input",
                {
                    "data-macro": action[0],
                    type: "text",
                    value: action[1],
                    style: { width: "7em", resize: "horizontal" },
                    placeholder: "text",
                },
                ""
            );
        }
        if (action[0] === "delay") {
            return wrapAction(
                "delay",
                "input",
                {
                    "data-macro": action[0],
                    type: "number",
                    maxlength: 5,
                    style: { width: "5em" },
                    value: action[1],
                    placeholder: "text",
                },
                ""
            );
        }
        return wrapKeyAction(action[0], action[1]);
    }

    const floater = get("#float-macro");
    const floatbody = get("#float-macro-render");
    const floatname = get("#float-macro-name");
    const savebutton = get("#save-macro");

    ////////////////////////////////////
    //
    //  (Re)render the macros, on first display, or on add/remove action.
    //
    ////////////////////////////////////
    function renderMacroActions(macro, actions) {
        floatbody.innerHTML = "";

        const children = [];
        for (const action of actions) {
            children.push(renderAction(action).wrap);
        }

        appendChildren(floatbody, children);
    }

    ////////////////////////////////////
    //
    //  Pop up the macro dialog, with its contents replaced w/ current macro
    //  (or empty if no macro value).
    //
    ////////////////////////////////////
    function renderMacroFloat(macro, actions) {
        if (!actions) actions = macro.actions;
        floatname.innerHTML = "M" + macro.mid;

        savebutton.dataset.mid = macro.mid;

        renderMacroActions(macro, actions);
        floater.style["display"] = "block";
    }

    ACTION.onclick("[data-macro-add]", (target) => {
        appendChildren(floatbody, renderAction([target.dataset.macroAdd, target.dataset.value]).wrap);
    });

    ////////////////////////////////////
    //
    //  Binding: This is kinda done a little backwards. The user clicks a key
    //  in the macro to rebind, we get that event. Then the user clicks a key
    //  in the sample boards. That gets redirected to us via ACTION.trigger.
    //
    ////////////////////////////////////
    ACTION.on("bind-macro", (keystr, target) => {
        target.dataset.key = keystr;
        KEYUI.refreshKey(target);
        // Clear key selection.
        ACTION.selectKey();
    });

    ////////////////////////////////////
    //
    //  Read the elements of the macro float, converting them into a set of
    //  actions. If any are KC_NO (0), then log and ignore it.
    //
    ////////////////////////////////////
    function buildActionsFromFloat() {
        const actions = [];
        const children = findAll("[data-macro]", floatbody);

        for (const kid of children) {
            if (kid.dataset.macro === "text") {
                actions.push(["text", kid.value]);
            } else if (kid.dataset.macro === "delay") {
                // TODO: validation?
                actions.push(["delay", parseInt(kid.value)]);
            } else {
                if (kid.dataset.key !== "KC_NO") {
                    actions.push([kid.dataset.macro, kid.dataset.key]);
                } else {
                    console.log("Ignoring KC_NO in macro");
                }
            }
        }
        return actions;
    }

    ////////////////////////////////////
    //
    //  Populate the macro with what's inside it.
    //
    ////////////////////////////////////
    ACTION.onclick("#save-macro", (target) => {
        // Save the macro.
        const macro = KBINFO.macros[savebutton.dataset.mid];
        macro.actions = buildActionsFromFloat();
        const mkey = get("#macro-" + savebutton.dataset.mid);
        mkey.classList.add("changed");
        floater.style["display"] = "none";
        CHANGES.queue("macro", KBAPI.updateMacros);
        KEYUI.refreshAllKeys();
    });

    ////////////////////////////////////
    //
    //  For context-menu macro creation.
    //
    ////////////////////////////////////
    MACROS.findEmpty = () => {
        for (let mid = 0; mid < KBINFO.macro_count; mid++) {
            if (KBINFO.macros[mid].actions.length === 0) {
                return mid;
            }
        }
        return -1;
    };

    MACROS.edit = (mid) => {
        renderMacroFloat(KBINFO.macros[mid]);
    };

    ////////////////////////////////////
    //
    //  Called when a file is uploaded or a device is connected after a file
    //  is uploaded. Mark and queue all changes.
    //
    ////////////////////////////////////
    MACROS.updateAll = () => {
        for (let mid = 0; mid < KBINFO.macro_count; mid++) {
            const macro = KBINFO.macros[mid];
            const bmacro = BASE_KBINFO.macros[mid];

            let changed = false;
            if (macro.actions.length !== bmacro.actions.length) {
                changed = true;
            } else {
                for (let i = 0; i < macro.actions.length; i++) {
                    let act = macro.actions[i];
                    let bact = bmacro.actions[i];
                    if (act[0] !== bact[0] || act[1] !== bact[1]) {
                        changed = true;
                    }
                }
            }

            if (changed) {
                const mkey = get("#macro-" + mid);
                mkey.classList.add("changed");
                CHANGES.queue("macro", KBAPI.updateMacros);
            }
        }
    };

    ////////////////////////////////////
    //
    //  Add a macro button to the macro board for each macro the kb supports.
    //
    ////////////////////////////////////
    addInitializer("connected", () => {
        const macroBoard = get("#macro-board");
        const rows = [];
        for (let idx = 0; idx < KBINFO.macro_count; idx++) {
            const mid = idx;
            // const rowid = Math.floor(mid / 10);
            const keytpl = EL(
                "div",
                {
                    id: "macro-" + mid,

                    "data-bind": "key",
                    "data-key": "M" + mid,
                    class: "key kb-key key-macro elastic",
                },
                ""
            );
            const macroNumber = EL("div", { class: "macro-number" }, `${mid}`);
            const keyContainer = EL("div", { class: "key-container" });
            appendChildren(keyContainer, keytpl);
            const dragButton = EL(
                "div",
                { class: "drag-macro" },
                `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M360-160q-33 0-56.5-23.5T280-240q0-33 23.5-56.5T360-320q33 0 56.5 23.5T440-240q0 33-23.5 56.5T360-160Zm240 0q-33 0-56.5-23.5T520-240q0-33 23.5-56.5T600-320q33 0 56.5 23.5T680-240q0 33-23.5 56.5T600-160ZM360-400q-33 0-56.5-23.5T280-480q0-33 23.5-56.5T360-560q33 0 56.5 23.5T440-480q0 33-23.5 56.5T360-400Zm240 0q-33 0-56.5-23.5T520-480q0-33 23.5-56.5T600-560q33 0 56.5 23.5T680-480q0 33-23.5 56.5T600-400ZM360-640q-33 0-56.5-23.5T280-720q0-33 23.5-56.5T360-800q33 0 56.5 23.5T440-720q0 33-23.5 56.5T360-640Zm240 0q-33 0-56.5-23.5T520-720q0-33 23.5-56.5T600-800q33 0 56.5 23.5T680-720q0 33-23.5 56.5T600-640Z" /></svg>`
            );
            const editButton = EL(
                "div",
                { class: "edit-macro", "data-mid": mid, "data-context-trigger": "key-macro-edit" },
                `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z"/></svg>`
            );
            editButton.onclick = (e) => {
                e.stopPropagation();
                e.preventDefault();
                ACTION.trigger("key-macro-edit", editButton);
            };
            const controlContainer = EL("div", { class: "control-container", style: { opacity: "0" } });
            appendChildren(controlContainer, dragButton);
            appendChildren(controlContainer, editButton);
            appendChildren(keyContainer, controlContainer);
            const dottedLine = EL("div", { class: "dotted-line" });
            const macroContainer = EL("div", { class: "macro-container" });
            appendChildren(macroContainer, macroNumber);
            appendChildren(macroContainer, dottedLine);
            appendChildren(macroContainer, keyContainer);
            rows.push(macroContainer);
        }
        appendChildren(macroBoard, EL("div", { class: "kb-group" }, ...rows));
    });

    ////////////////////////////////////
    //
    //  Context menu for macro keys in the sample board.
    //
    ////////////////////////////////////
    ACTION.on("key-macro-edit", (target) => {
        renderMacroFloat(KBINFO.macros[target.dataset.mid]);
    });

    ACTION.on("key-macro-clear", (target) => {
        const macro = KBINFO.macros[target.dataset.mid];
        if (macro.actions.length > 0) {
            macro.actions = [];
            target.classList.add("changed");
            CHANGES.queue("macro", KBAPI.updateMacros);
            KEYUI.refreshAllKeys();
        }
    });

    ACTION.on("key-macro-revert", (target) => {
        const macro = KBINFO.macros[target.dataset.mid];
        macro.actions = structuredClone(BASE_KBINFO.macros[target.dataset.mid].actions);
        target.classList.remove("changed");
        KEYUI.refreshAllKeys();
    });

    ACTION.addContextMenu("[data-mid]", [
        { name: "Edit Macro", trigger: "key-macro-edit" },
        { name: "Clear Macro", trigger: "key-macro-clear" },
        { name: "Revert Macro", trigger: "key-macro-revert" },
    ]);
});
