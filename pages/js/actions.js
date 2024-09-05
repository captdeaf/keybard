// actions.js
//
////////////////////////////////////
//
//  UI Action API.
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
  function findElementsAt(target, selector) {
    const ret = [];
    while (target) {
      if (target.dataset.search === 'block') return null;
      if (target.matches(selector)) {
        return target;
      }
      target = target.parentElement;
    }
    return null;
  }

  // Bind all window clicks.
  document.onclick = (evt) => {
    const t = evt.target;
    for (const clickable of clickables) {
      const found = findElementsAt(evt.target, clickable.sel);
      if (found) {
        evt.stopPropagation();
        evt.preventDefault();
        clickable.cb(found);
        return false;
      }
    }
    return true;
  };
}, 0);
