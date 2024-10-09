////////////////////////////////////
//
//  International localized keyboard support.
//
//  Depends on LANGUAGE_KEYS
//
////////////////////////////////////

addInitializer('load', () => {
  const menuitem = get('#menu-international');
  const allMenuItems = [];
  for (const [k, v] of Object.entries(LANGUAGE_KEYS)) {
    allMenuItems.push(
      EL('label',
         {
           'data-language': v,
           class: 'connect-enable',
         }, 
        k)
    );
  }
  appendChildren(menuitem, allMenuItems);

  function selectLanguage(lang, refresh) {
    KEY.localization = setSaved('language', lang);
    if (refresh) {
      KEYUI.refreshAllKeys();
    }
    for (const el of allMenuItems) {
      if (el.dataset.language === lang) {
        el.classList.add('selected');
      } else {
        el.classList.remove('selected');
      }
    }
  }

  selectLanguage(getSaved('language', 'english_us'), false);

  ACTION.onclick('[data-language]', (target) => {
    selectLanguage(target.dataset.language, true);
    ACTION.menuClose();
  });
});
