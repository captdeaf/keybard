// actions.js
//
////////////////////////////////////
//
//  UI Action API.
//
//  Tying together all the elements.
//
//  Sample process:
//
//  1) Person clicks a key in keyboard to remap.
//  2) Code creates and sets current action.
//  3) Anything else that triggers an action event gets passed.
//
//  An action object is a series of callbacks:
//
//  {
//    keySelect: (keystr) => {
//      // Selected when a key from sample boards is chosen.
//    },
//    keyDown: (char, keystr) => {
//      // When a keyboard character is pressed. If this exists,
//      // then event has stopPropagation and returns false.
//    },
//    keyUp: (char, keystr) => {
//      // when key is released.
//    },
//    cancel: () => {
//      // Cancel this action.
//    },
//    clickNowhere: () => {
//      // If clicked nowhere, then this probably wants to cancel.
//      // If it doesn't exist, then it cancels. If it does, then
//      // return false calls cancel()
//    }
//  }
//
////////////////////////////////////

const ACTION = {
  current: null,
  start(action) {
    ACTION.CURRENT = action;
  },

  clear() {
    if (ACTION.CURRENT && ACTION.CURRENT.cancel) {
      ACTION.CURRENT.cancel();
    }
    ACTION.CURRENT = null;
  },

  active() {
    return ACTION.CURRENT !== null;
  },

  trigger(name, ...args) {
    if (ACTION.CURRENT && ACTION.CURRENT[name]) {
      const ret = ACTION.CURRENT[name](...args);
      if (ret !== undefined) return ret;
      return true;
    }
    return false;
  },

  setup() {
    function mapJSKey(evt) {
      if (KEY.FROMJS_MAP[evt.key]) {
        return (KEY.FROMJS_MAP[evt.key]);
      } else if (KEY.FROMJS_MAP[evt.code]) {
        return KEY.FROMJS_MAP[evt.code];
      } else {
        alertUser("Unknown key map for JS->QMK", evt);
      }
    }
    getAll('.record').map((rec) => {
      rec.addEventListener('keydown', (evt) => {
        if (ACTION.trigger('keydown', evt.key, mapJSKey(evt))) {
          evt.preventDefault();
          return false;
        }
      });
      rec.addEventListener('keyup', (evt) => {
        if (ACTION.trigger('keyup', evt.key, mapJSKey(evt))) {
          evt.preventDefault();
          return false;
        }
      });
      rec.addEventListener('mouseout', (evt) => {
        rec.blur();
        if (ACTION.trigger('end')) {
          evt.preventDefault();
          return false;
        }
      });
    });
  },
}

// Don't initialize action until the boards are loaded.
addInitializer('ui', ACTION.setup);
