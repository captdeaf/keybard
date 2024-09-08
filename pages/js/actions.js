// actions.js
//
////////////////////////////////////
//
//  UI Action API.
//
////////////////////////////////////

const ACTION = {};
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
  let selectedKey;
  ACTION.selectKey = (keyelement) => {
    if (selectedKey) {
      selectedKey.classList.remove('active');
      selectedKey = undefined;
    }
    if (keyelement) {
      selectedKey = keyelement;
      selectedKey.classList.add('active');
    }
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
    return true;
  };
}, 0); // Loads first.
