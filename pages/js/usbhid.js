// usbhid.js
//
////////////////////////////////////
//
//  Raw information and interaction with USBHID.
//
////////////////////////////////////

// Playback: Handy for when I'm just tweaking UI stuff.
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

const USB = {
  // This will be set to the opened device.
  device: undefined,

  // This is updated for every send()
  listener: (data, ev) => {},

  open: async function(filters) {
    if (SETTINGS.playback) {
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
        USB.listener(ev.data.buffer, ev);
      }
    });
  },

  formatResponse: (data, flags) => {
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

    if (SETTINGS.playback) {
      const data = playback(cmdargs);
      const ret = formatUSBResponse(data, flags);
      const respromise = new Promise((res, rej) => {
        res(ret);
      });
      return respromise;
    }

    // Callback for when we get a response.
    const cbpromise = new Promise((res, rej) => {
      USB.listener = (data, ev) => {
        if (SETTINGS.record && !SETTINGS.playback) {
          recordPlayback(cmdargs, data);
        }
        const ret = formatUSBResponse(data, flags);
        res(ret);
      };
    });
    // Send update and respond to callback.
    const sendpromise = USB.device.sendReport(0, new Uint8Array(cmdargs));
    sendpromise.then(cbpromise)

    return cbpromise;
  },
}
