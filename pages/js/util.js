// util.js
//
/////////////////////////////////////
//
// Utility functions
//
// Limited to QoL, Storage, Templates, etc.
//
// Ideally this should be transferrable between projects without a change.
//
/////////////////////////////////////

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

// A wrapper around xzwasm's decompression.
function decompress(buffer) {
  buff = buffer;
  const blob = new Blob([buffer]);
  const xrs = new xzwasm.XzReadableStream(blob.stream());
  const resp = new Response(xrs);
  return resp.text();
}

function endianFrom(num, bytes, little) {
  const ab = new ArrayBuffer(bytes);
  const dv = new DataView(ab);

  switch (bytes) {
    case 2: dv.setInt16(0, num, little); break;
    case 4: dv.setInt32(0, num, little); break;
  }
  return Array.from(new Uint8Array(ab));
}

function convArrayEndian(ary, size) {
  if (size === 2) {
    return ary.map((num) => (((num >> 8) & 0xFF) | ((num << 8) & 0xFF00)));
  } else {
    return ary.map((num) => (
      ((num << 24) & 0xFF000000) |
      ((num << 8) & 0xFF0000) |
      ((num >> 8) & 0xFF00) |
      ((num >> 24) & 0xFF)));
  }
}

function LE32(num) {
  return endianFrom(num, 4, true);
}

function LE16(num) {
  return endianFrom(num, 2, true);
}

function BE32(num) {
  return endianFrom(num, 4, false);
}

function BE16(num) {
  return endianFrom(num, 2, false);
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

function formatUSBResponse(data, flags) {
  if (!flags) flags = {};
  if (flags.unpack) {
    data = unpack(data, flags.unpack);
  } else {
    let cls = Uint8Array;
    let bytes = 1;
    // Which bytes?
    if (flags.int8) { cls = Int8Array; }
    if (flags.int16) { cls = Int16Array; bytes = 2; }
    if (flags.uint16) { cls = Uint16Array; bytes = 2; }
    if (flags.int32) { cls = Int32Array; bytes = 4; }
    if (flags.uint32) { cls = Uint32Array; bytes = 4; }
    data = new cls(data);
    if (flags.bigendian) {
      data = convArrayEndian(data, bytes);
    }
  }

  if (flags.index !== undefined) {
    data = data[flags.index];
  } else if (flags.slice) {
    if (flags.slice.length) {
      data = data.slice(...flags.slice);
    } else {
      data = data.slice(flags.slice);
    }
  }

  if (flags.string) {
    data = new TextDecoder().decode(data);
  }

  if (flags.map) {
    data = data.map((d) => flags.map(d));
  }

  return data;
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
  INITIALIZERS[type].push({order: order, func: func});
}

function runInitializers(type, ...args) {
  const sorted = INITIALIZERS[type].sort((a, b) => a.order - b.order);
  for (const call of sorted) call.func(...args);
}
