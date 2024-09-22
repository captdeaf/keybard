// actions.js
//
////////////////////////////////////
//
//  UI Action API.
//
////////////////////////////////////

const ACTION = {
  // Currently selected key for binding target.
  selectedKey: null,
  selectKey: null,
  // hide/close the menus
  menuClose: null,
  // Custom events
  on: null,
  trigger: null,
  // onclick(selector, cb(target))
  onclick: null,
  // addConextMenu(selector, menu)
  // Context menus. menu is a list of:
  // {name: 'name', trigger: 'trigger-name'}
  addContextMenu: null,
};


addInitializer('load', () => {
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
  ACTION.menuClose = () => {
    const allDropdowns = findAll('.dropdown');
    const allDropups = findAll('.dropup');
    for (const m of allDropdowns) {
      m.classList.remove('dropdown');
    }
    for (const m of allDropups) {
      m.classList.remove('dropup');
    }
    setTimeout(() => {
      for (const m of allDropdowns) {
        m.classList.add('dropdown');
      }
      for (const m of allDropups) {
        m.classList.add('dropup');
      }
    });
  };

  ////////////////////////////////////
  //
  //  ACTION.on and ACTION.trigger -
  //
  //  Simple bindings for cross-file actions.
  //
  ////////////////////////////////////
  const actions = {};

  ACTION.on = (name, cb) => {
    actions[name] = cb;
  };

  ACTION.trigger = (name, ...args) => {
    if (actions[name]) {
      actions[name](...args);
    }
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
  })

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
    // If any unhandled clicks, unselect a key.
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
          cmenu.menu.style['left'] = (evt.clientX - 10) + 'px';
          cmenu.menu.style['top'] = (evt.clientY - 20) + 'px';
          cmenu.menu.classList.add('show');
          // We remove the 'show', letting the
          // :hover take over rendering.
          setTimeout(() => {
            cmenu.menu.classList.remove('show');
          }, 300);

          return false;
        }
      }
      target = target.parentElement;
    }
    return true;
  };
}, 0); // Loads first.
