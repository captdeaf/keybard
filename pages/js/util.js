// util.js
//
/////////////////////////////////////
//
// Utility functions
//
// Limited to DOM manipulation, QoL, Templates, etc.
//
// Ideally this should be transferrable between projects without a change.
//
/////////////////////////////////////


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

  if (typeof HTMLElement !== 'undefined' && obj instanceof HTMLElement) return false;

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

function range(num) {
  const ret = [];
  for (let i = 0; i < num; i++) {
    ret.push(i);
  }
  return ret;
}

function repeat(what, count) {
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(what);
  }
  return result;
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
  INITIALIZERS[type].push({order: order, func: func});
}

function runInitializers(type, ...args) {
  const sorted = INITIALIZERS[type].sort((a, b) => a.order - b.order);
  for (const call of sorted) call.func(...args);
}
