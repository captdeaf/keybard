// ui_actions.js
//
////////////////////////////////////
//
//  UI Action API.
//
////////////////////////////////////

// Currently selected key for binding target.
ACTION.selectedKey = null;
ACTION.selectKey = null;
// hide/close the menus
ACTION.menuClose = null;
// onclick(selector, cb(target))
ACTION.onclick = null;
// Floats: show and hide.
ACTION.showFloat = null;
ACTION.closeFloats = null;
// addConextMenu(selector, menu)
// Context menus. menu is a list of:
// {name: 'name', trigger: 'trigger-name'}
ACTION.addContextMenu = null;
// Are there any floaters open?
ACTION.getOpenFloats = null;


addInitializer('load', () => {
  let floatOpen = false;
  ////////////////////////////////////
  //
  //  selectKey - This is a handy wrapper for class="key" selection.
  //  Macro, combo, key override, everything has a selectable key that
  //  sample boards then trigger on.
  //
  //  If a key is already set when one is selected, it has '.active' cleared
  //  from its classes.
  //
  ////////////////////////////////////
  ACTION.selectedKey = null;
  ACTION.selectKey = (keyelement) => {
    if (ACTION.selectedKey) {
      ACTION.selectedKey.classList.remove('active');
      ACTION.selectedKey = undefined;
    }
    if (keyelement) {
      ACTION.selectedKey = keyelement;
      ACTION.selectedKey.classList.add('active');
    }
  };

  ////////////////////////////////////
  //
  //  On clicking a menu item (whether dropdown or dropup),
  //  allow event handlers to remove the menu.
  //
  ////////////////////////////////////
  const allDropdowns = findAll('.menu-top');
  ACTION.menuClose = () => {
    for (const m of allDropdowns) {
      m.classList.add('close');
    }
    setTimeout(() => {
      for (const m of allDropdowns) {
        m.classList.remove('close');
      }
    }, 300);
  };

  ////////////////////////////////////
  //
  //  Click events. We bind to document.onclick, then find which elements we
  //  are clicking via evt.target. It propagates upward
  //
  ////////////////////////////////////
  const clickables = [];
  ACTION.onclick = (selector, cb) => {
    clickables.push({sel: selector, cb: cb});
  };

  const cmenus = [];
  let contextTarget = null;
  const menuContainer = get('#allmenus');
  ACTION.addContextMenu = (selector, items) => {
    const menuItems = [];
    for (const item of items) {
      menuItems.push(EL('label', {
        'data-context-trigger': item.trigger,
      }, item.name));
    }
    const menu = EL('div', {
        class: 'context-menu',
      },
      menuItems,
    );
    appendChildren(menuContainer, menu);
    cmenus.push({sel: selector, menu: menu});
  };

  ACTION.onclick('[data-context-trigger]', (target) => {
    const trigger = target.dataset.contextTrigger;
    ACTION.trigger(trigger, contextTarget);
    for (const cmenu of findAll('.context-menu')) {
      cmenu.style['display'] = 'none';
    }
    setTimeout(() => {
      for (const cmenu of findAll('.context-menu')) {
        cmenu.style['display'] = '';
      }
    }, 300);
  });

  ////////////////////////////////////
  //
  // Bind all window clicks.
  // Given a clicked element, check it and its parents, one by one, for any
  // match to a clickable selector. Order is by element, so if a parent and
  // its child match different clickables, the child gets the click.
  //
  ////////////////////////////////////
  document.onclick = (evt) => {
    let target = evt.target;
    while (target) {
      if (target.matches('#floats')) {
        return true;
      }
      for (const clickable of clickables) {
        if (target.matches(clickable.sel)) {
          evt.stopPropagation();
          evt.preventDefault();
          clickable.cb(target);
          return false;
        }
      }
      target = target.parentElement;
    }
    // If any unhandled clicks, deselect keys.
    ACTION.selectKey();
    return true;
  };

  document.oncontextmenu = (evt) => {
    if (SETTINGS.disableRightClicks) {
      return true;
    }
    let target = evt.target;
    while (target) {
      for (const cmenu of cmenus) {
        if (target.matches(cmenu.sel)) {
          evt.stopPropagation();
          evt.preventDefault();

          ACTION.selectKey();

          // We have a menu, render and position it.
          contextTarget = target;
          cmenu.menu.style['left'] = '30px';
          cmenu.menu.style['top'] = '15px';
          cmenu.menu.classList.add('show');
          const menubounds = cmenu.menu.getBoundingClientRect();
          const winbounds = document.documentElement.getBoundingClientRect();
          const bounds = {
            x: Math.min(evt.clientX - 30, winbounds.width - menubounds.width),
            y: Math.min(evt.clientY - 15, winbounds.height - menubounds.height),
          }
          cmenu.menu.style['left'] = Math.floor(bounds.x) + 'px';
          cmenu.menu.style['top'] = Math.floor(bounds.y) + 'px';
          // We remove the 'show', letting the
          // :hover take over rendering.
          const watchHover = setInterval(() => {
            if (cmenu.menu.matches(':hover')) {
              cmenu.menu.classList.remove('show');
              clearInterval(watchHover);
            }
          }, 100);

          return false;
        }
      }
      target = target.parentElement;
    }
    return true;
  };


  ////////////////////////////////////
  //
  //  Managing floats
  //
  ////////////////////////////////////
  const floatPane = get('#floats');
  const allFloats = getAll('.floater');
  ACTION.showFloat = (target) => {
    floatOpen = true;
    ACTION.closeFloats();
    ACTION.menuClose();
    floatPane.style['display'] = 'block';
    target.style['display'] = 'block';
  };

  ACTION.closeFloats = () => {
    floatOpen = false;
    floatPane.style['display'] = 'none';
    for (const floater of allFloats) {
      floater.style['display'] = 'none';
    }
  };

  ////////////////////////////////////
  //
  //  Are there any open floaters?
  //
  ////////////////////////////////////
  ACTION.getOpenFloats = () => {
    return getAll('#floats .floater').filter((i) => {
      return i.getBoundingClientRect().width > 0;
    });
  };
}, 1); // Loads second.
