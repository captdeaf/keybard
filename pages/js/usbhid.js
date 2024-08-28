// usbhid.js
//
////////////////////////////////////
//
//  Raw information and interaction with USBHID.
//
////////////////////////////////////

// Playback: Handy for when I'm just tweaking UI stuff.
let PLAYBACK = false;
let RECORDING = false;

let SAVED = {};

function loadPlayback() {
  SAVED = getSaved('playback', {});
}

function playback(cmdargs) {
  const key = JSON.stringify(cmdargs);
  const ret = new Uint8Array(SAVED[key]);
  return ret.buffer;
}

function recordPlayback(cmdargs, ret) {
  const key = JSON.stringify(cmdargs);
  const val = [...new Uint8Array(ret)];
  SAVED[key] = val;
  setSaved('playback', SAVED);
}

const MSG_LEN = 32;

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

const USB = {
  // This will be set to the opened device.
  device: undefined,

  // This is updated for every send()
  listener: (data, ev) => {},

  open: async function(filters) {
    if (PLAYBACK) {
      loadPlayback();
      return true;
    } else {
      const devices = await navigator.hid.requestDevice({
        filters: filters,
      });

      if (devices.length !== 1) return false;

      USB.device = devices[0];
      const opened = await USB.device.open()

      await USB.initListener();

      return true;
    }
  },

  initListener: () => {
    USB.device.addEventListener('inputreport', (ev) => {
      if (USB.listener) {
        x = ev.data;
        USB.listener(ev.data.buffer, ev);
      }
    });
  },

  unpack: (buffer, str) => {
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
          val = dv.getBigInt64(offset);
          offset += 8;
          break;
        case 'Q':
          val = dv.getBigUint64(offset);
          offset += 8;
          break;
        default:
          alertUser("Invalid char in unpack: " + chr);
      }
      if (val !== undefined) {
        ret.push(val);
      }
    }
    return ret;
  },

  formatResponse: (data, flags) => {
    if (!flags) flags = {};
    if (flags.unpack) {
      data = USB.unpack(data, flags.unpack);
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
    return data;
  },

  send: (cmd, args, flags) => {
    // Format what we're sending.
    // cmd must be one byte. Browser will throw the error
    // anyway.
    let cmdargs = [cmd];
    if (args) { cmdargs = [cmd, ...args]; }
    for (let i = cmdargs.length; i < MSG_LEN; i++) {
      cmdargs.push(0);
    }

    if (PLAYBACK) {
      const data = playback(cmdargs);
      const ret = USB.formatResponse(data, flags);
      const respromise = new Promise((res, rej) => {
        res(ret);
      });
      return respromise;
    }

    // Callback for when we get a response.
    const cbpromise = new Promise((res, rej) => {
      USB.listener = (data, ev) => {
        recordPlayback(cmdargs, data);
        const ret = USB.formatResponse(data, flags);
        res(ret);
      };
    });
    // Send update and respond to callback.
    const sendpromise = USB.device.sendReport(0, new Uint8Array(cmdargs));
    sendpromise.then(cbpromise)

    return cbpromise;
  },
}
