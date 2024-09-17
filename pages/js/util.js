// util.js
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
  const val = localStorage.getItem(name);
  if (val === null) {
    localStorage.setItem(name, JSON.stringify(otherwise));
    return otherwise;
  }
  return JSON.parse(val);
}

function setSaved(name, val) {
  localStorage.setItem(name, JSON.stringify(val));
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

// QoL: is an object iterable? (for all the different collection types that we care about.)
function isSafeIterable(obj) {
  if ((obj == undefined) ||
      (obj == null)) {
    return false;
  }

  // Strings shouldn't be for us.
  if (['string'].includes(typeof(obj))) {
    return false;
  }

  if (obj instanceof HTMLElement) return false;

  if (typeof(obj) === 'object') return true;

  return typeof(obj[Symbol.iterator]) === 'function';
}

const PROXY = {
  get(target, prop, receiver) {
    if (prop === Symbol.iterator) {
      return target[Symbol.iterator];
    }
    if (typeof(prop) === 'symbol') {
      prop = prop.description;
    }
    if (prop === 'toJSON') {
      return target;
    }
    if (!target.hasOwnProperty(prop)) {
      console.log('target has no value "' + prop + '"', target);
      throw('target has no value "' + prop + '"');
    }
    const val = target[prop];
    if (isSafeIterable(val)) {
      return nestedProxy(val);
    }
    return val;
  },
  set(target, prop, value) {
    if (typeof(prop) === 'symbol') {
      target[prop.description] = value;
    } else {
      target[prop] = value;
    }
  },
  deleteProperty(target, prop) {
    delete target[prop];
  }
};

function lockValue(val) {
  return new Proxy(val, PROXY);
}

// A wrapper around xzwasm's decompression.
function decompress(buffer) {
  buff = buffer;
  const blob = new Blob([buffer]);
  const xrs = new xzwasm.XzReadableStream(blob.stream());
  const resp = new Response(xrs);
  return resp.text();
}

////////////////////////////////////
//
//  unpack - similar to most languages' unpack method.
//  Expects an ArrayBuffer(). unpack(arraybuffer, "<BHH")
//
//  <, >: little and big endian
//  b, B: 1 byte
//  h, H: 2 bytes
//  i, I: 4 bytes
//  q, Q: 8 bytes
//
////////////////////////////////////
function unpack(buffer, str) {
  let offset = 0;
  const dv = new DataView(buffer);
  // endian-ness
  let le = true;
  const ret = [];
  for (const chr of str.split('')) {
    let val;
    switch (chr) {
      case '<': le = true; break;
      case '>': le = false; break;
      case 'H':
        val = dv.getUint16(offset, le);
        offset += 2;
        break;
      case 'h':
        val = dv.getInt16(offset, le);
        offset += 2;
        break;
      case 'I':
        val = dv.getUint32(offset, le);
        offset += 4;
        break;
      case 'i':
        val = dv.getInt32(offset, le);
        offset += 4;
        break;
      case 'B':
        val = dv.getUint8(offset);
        offset++;
        break;
      case 'b':
        val = dv.getInt8(offset);
        offset++;
        break;
      case 'q':
        val = dv.getBigInt64(offset, le);
        offset += 8;
        break;
      case 'Q':
        val = dv.getBigUint64(offset, le);
        offset += 8;
        break;
      default:
        console.log("Invalid char in unpack: " + chr);
    }
    if (val !== undefined) {
      ret.push(val);
    }
  }
  return ret;
}

function range(num) {
  const ret = [];
  for (let i = 0; i < num; i++) {
    ret.push(i);
  }
  return ret;
}

////////////////////////////////////
//
//  Initializing javascript - in order.
//
// Add initializers to run on load, by file. 'order' is optional: If not given,
// order 100+n and things run low-high by order. If no order is ever given,
// they run first-last called. Or in other words, they order they show up in
// <script> tags.
//
////////////////////////////////////
const INITIALIZERS = {
  load: [],
  connected: [],
};

function addInitializer(type, func, order) {
  if (order === undefined) order = 100 + INITIALIZERS[type].length;
  INITIALIZERS[type].push({name: name, order: order, func: func});
}

function runInitializers(type, ...args) {
  const sorted = INITIALIZERS[type].sort((a, b) => a.order - b.order);
  for (const call of sorted) call.func(...args);
}
