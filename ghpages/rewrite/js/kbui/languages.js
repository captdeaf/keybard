////////////////////////////////////
//
//  International localized keyboard support.
//
//  Depends on LANGUAGE_KEYS
//
////////////////////////////////////

addInitializer("load", () => {
    const menuitem = get("#menu-international");
    const allMenuItems = [];
    for (const [k, v] of Object.entries(LANGUAGE_KEYS)) {
        allMenuItems.push(
            EL(
                "label",
                {
                    "data-language": v,
                    class: "connect-enable",
                },
                k
            )
        );
    }
    appendChildren(menuitem, allMenuItems);

    for (const lang of Object.values(LANGUAGE_MAP)) {
        for (const [k, v] of Object.entries(lang)) {
            if (!(k in KEYALIASES)) {
                console.log("key not in aliases", k);
            } else if (k !== KEYALIASES[k]) {
                console.log("Aliasing lang", k, KEYALIASES[k]);
                lang[KEYALIASES[k]] = v;
            }
        }
    }

    const intlKeys = getAll('[data-intl="yes"]');

    function selectLanguage(lang, refresh) {
        KEY.localization = setSaved("language", lang);
        if (refresh) {
            KEYUI.refreshAllKeys();
        }
        for (const el of allMenuItems) {
            if (el.dataset.language === lang) {
                el.classList.add("selected");
            } else {
                el.classList.remove("selected");
            }
        }
        for (const el of intlKeys) {
            if (el.dataset.key in LANGUAGE_MAP[lang]) {
                el.style["display"] = "block";
            } else {
                el.style["display"] = "none";
            }
        }
    }

    selectLanguage(getSaved("language", "english_us"), false);

    ACTION.onclick("[data-language]", (target) => {
        selectLanguage(target.dataset.language, true);
        ACTION.menuClose();
    });
});
