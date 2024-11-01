// actions.js
//
////////////////////////////////////
//
//  Action API.
//
////////////////////////////////////

const ACTION = {
  // Custom events
  on: null,
  trigger: null
};


addInitializer('load', () => {
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
}, 0); // Loads first.
