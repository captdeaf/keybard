////////////////////////////////////
//
//  International localized keyboard support.
//
//  Depends on LANGUAGE_KEYS
//
////////////////////////////////////

addInitializer('load', () => {
  const menuitem = get('#menu-international');
  const children = [];
  for (const [k, v] of Object.entries(LANGUAGE_KEYS)) {
    children.push(
      EL('label',
         {
           'data-language': v,
           class: 'connect-enable',
         }, 
        k)
    );
  }
  appendChildren(menuitem, children);

  ACTION.onclick('[data-language]', (target) => {
    KEY.localization = target.dataset.language;
    ACTION.menuClose();
    KEYUI.refreshAllKeys();
  });
});
