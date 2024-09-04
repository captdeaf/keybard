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

const ACTION = {};
addInitializer('load', () => {
  // Map a key, e.g: from 'a' to 'KC_A'
  function mapJSKeyPress(evt) {
    if (KEY.FROMJS_MAP[evt.key]) {
      return (KEY.FROMJS_MAP[evt.key]);
    } else if (KEY.FROMJS_MAP[evt.code]) {
      return KEY.FROMJS_MAP[evt.code];
    } else {
      alertUser("Unknown key map for JS->QMK", evt.key, evt.code);
    }
  }

  const clickables = [];

  ACTION.onclick = (selector, cb) => {
    clickables.push({sel: selector, cb: cb});
  };

  // Given a list of elements (e.g: from elementsFromPoint), return those
  // of a given selector.
  function listElementsMatching(elements, selector) {
    elements = [...elements];
    const ret = [];

    for (const element of elements) {
      if (element.matches(selector)) {
        ret.push(element);
      }
    }
    return ret;
  }

  // Bind all window clicks.
  document.onclick = (evt) => {
    const t = evt.target;
    let els = document.elementsFromPoint(evt.clientX, evt.clientY);
    for (const clickable of clickables) {
      const found = listElementsMatching(els, clickable.sel);
      if (found && found.length > 0) {
        evt.stopPropagation();
        evt.preventDefault();
        clickable.cb(evt.target);
        return false;
      }
    }
    return true;
  };
}, 0);
