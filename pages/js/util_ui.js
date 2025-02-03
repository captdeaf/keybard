// util_ui.js
//
/////////////////////////////////////
//
// Utility functions
//
// Limited to DOM manipulation, QoL, Storage, Templates, etc.
//
// Ideally this should be transferrable between projects without a change.
//
/////////////////////////////////////

// QoL: This function creates a constant container / enum that will throw an
// error if anything is requested that is undefined. For example: STATE.open vs
// STATE.okay - the latter will error instead of returning undefined.

// QoL: find(selector, parent=document) - wrapper around querySelector.
//      It ALSO lets parent match itself, unlike querySelector.
function find(selector, par) {
  if (!par) {
    par = document;
  } else if (selector === 'document') {
    return document;
  } else {
    if (par.matches && par.matches(selector)) return par;
  }
  return par.querySelector(selector);
}

// QoL: wrapper around find that throws an error if it finds nothing. In other
//      words, if this find fails, it's a bug.
function get(selector, par) {
  const ret = find(selector, par);
  if (!ret) {
    console.log('get() Selector not found:', selector, par);
    throw('Selector "' + selector + '" not found');
  }
  return ret;
}

// Find multiple.
function findAll(selector, par) {
  if (!par) par = document;
  const ret = [...par.querySelectorAll(selector)];
  if (par.matches && par.matches(selector)) {
    ret.unshift(par);
  }
  return ret;
}

// Again, throw an error if they're not found.
function getAll(selector, par) {
  const ret = findAll(selector, par);
  if (!ret || ret.length === 0) {
    console.log('getAll() Selector not found:', selector, par);
    throw('Selector "' + selector + '" not found');
  }
  return ret;
}

// Storage: getSaved and setSaved: For local storage. Good for remembering UI
//          toggles and the like.
function getSaved(name, otherwise) {
  try {
    const val = localStorage.getItem(name);
    if (val === null) {
      localStorage.setItem(name, JSON.stringify(otherwise));
      return otherwise;
    }
    return JSON.parse(val);
  } catch (err) {
    return otherwise;
  }
}

function setSaved(name, val) {
  if (name === undefined) throw "Help";
  try {
    localStorage.setItem(name, JSON.stringify(val));
  } catch (err) {}
  return val;
}

// DOM/QoL: Add attributes quickly.
function addAttrs(el, attrs) {
  for (const [k, v] of Object.entries(attrs)) {
    el.setAttribute(k, v);
  }
  return el;
}

// DOM: Make elements. EL('div', EL('span', "Text here"));
function EL(name, attrs, ...children) {
  const ret = document.createElement(name);
  if (attrs) {
    if (attrs.style) {
      Object.assign(ret.style, attrs.style);
      delete attrs.style;
    }
    if (typeof(attrs) === 'string' || 'append' in attrs) {
      children.unshift(attrs);
    } else {
      addAttrs(ret, attrs);
    }
  }
  if (children && children.length > 0) {
    appendChildren(ret, children.flat());
  }
  return ret;
}

// DOM: Populate an element w/ children, but accepting more types of 'children'
function appendChildren(el, ...children) {
  if (!children) return;
  let allChildren = [...children].flat();
  for (const child of allChildren) {
    if (typeof(child) === 'string') {
      el.innerHTML += child;
    } else if (child) {
      el.appendChild(child);
    }
  }
  return el;
}

// DOM/QoL: cloneElement is a deep clone that also calls enableTriggers.
function cloneElement(el) {
  const ret = el.cloneNode(true);
  return ret;
}

// DOM/QoL: Remove an element from its parent.
function removeElement(el) {
  el.replaceWith('');
}

// DOM: traverse upwards the parent tree from an element until you get an element
//      matching a selector. If element matches it, it will be returned.
function findParent(el, sel) {
  while (el && el.matches) {
    if (el.matches(sel)) return el;
    el = el.parentElement;
  }
  return undefined;
}

// Like find, but throws an error if not found.
function getParent(el, sel) {
  const par = findParent(el, sel);
  if (par === undefined) {
    console.log('Cannot find parent sel "' + sel + '"', el);
    throw 'Invalid selector "' + sel + '"';
  }
  return par;
}
