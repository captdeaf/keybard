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
      if (KEY.RECORDER_MAP[evt.key]) {
        return (KEY.RECORDER_MAP[evt.key]);
      } else if (KEY.RECORDER_MAP[evt.code]) {
        return KEY.RECORDER_MAP[evt.code];
      } else {
        alertUser("Unknown key map for JS->QMK", evt);
      }
    }
    window.addEventListener('keydown', (evt) => {
      if (ACTION.trigger('keyDown', mapJSKey(evt))) {
        evt.preventDefault();
        return false;
      }
    });
    window.addEventListener('keyup', (evt) => {
      if (ACTION.trigger('keyUp', mapJSKey(evt))) {
        evt.preventDefault();
        return false;
      }
    });
  },
}
