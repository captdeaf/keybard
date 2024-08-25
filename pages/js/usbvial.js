// usbvial.js
//
////////////////////////////////////
//
//  Our internal wrapper for JS Vial communications.
//
////////////////////////////////////

const RAW = {
  CMD_VIA_GET_PROTOCOL_VERSION: 0x01,
  CMD_VIA_GET_KEYBOARD_VALUE: 0x02,
  CMD_VIA_SET_KEYBOARD_VALUE: 0x03,
  CMD_VIA_GET_KEYCODE: 0x04,
  CMD_VIA_SET_KEYCODE: 0x05,
  CMD_VIA_LIGHTING_SET_VALUE: 0x07,
  CMD_VIA_LIGHTING_GET_VALUE: 0x08,
  CMD_VIA_LIGHTING_SAVE: 0x09,
  CMD_VIA_MACRO_GET_COUNT: 0x0C,
  CMD_VIA_MACRO_GET_BUFFER_SIZE: 0x0D,
  CMD_VIA_MACRO_GET_BUFFER: 0x0E,
  CMD_VIA_MACRO_SET_BUFFER: 0x0F,
  CMD_VIA_GET_LAYER_COUNT: 0x11,
  CMD_VIA_KEYMAP_GET_BUFFER: 0x12,
  CMD_VIA_VIAL_PREFIX: 0xFE,

  VIA_LAYOUT_OPTIONS: 0x02,
  VIA_SWITCH_MATRIX_STATE: 0x03,

  QMK_BACKLIGHT_BRIGHTNESS: 0x09,
  QMK_BACKLIGHT_EFFECT: 0x0A,
  QMK_RGBLIGHT_BRIGHTNESS: 0x80,
  QMK_RGBLIGHT_EFFECT: 0x81,
  QMK_RGBLIGHT_EFFECT_SPEED: 0x82,
  QMK_RGBLIGHT_COLOR: 0x83,

  VIALRGB_GET_INFO: 0x40,
  VIALRGB_GET_MODE: 0x41,
  VIALRGB_GET_SUPPORTED: 0x42,
  VIALRGB_SET_MODE: 0x41,

  CMD_VIAL_GET_KEYBOARD_ID: 0x00,
  CMD_VIAL_GET_SIZE: 0x01,
  CMD_VIAL_GET_DEFINITION: 0x02,
  CMD_VIAL_GET_ENCODER: 0x03,
  CMD_VIAL_SET_ENCODER: 0x04,
  CMD_VIAL_GET_UNLOCK_STATUS: 0x05,
  CMD_VIAL_UNLOCK_START: 0x06,
  CMD_VIAL_UNLOCK_POLL: 0x07,
  CMD_VIAL_LOCK: 0x08,
  CMD_VIAL_QMK_SETTINGS_QUERY: 0x09,
  CMD_VIAL_QMK_SETTINGS_GET: 0x0A,
  CMD_VIAL_QMK_SETTINGS_SET: 0x0B,
  CMD_VIAL_QMK_SETTINGS_RESET: 0x0C,
  CMD_VIAL_DYNAMIC_ENTRY_OP: 0x0D,

  DYNAMIC_VIAL_GET_NUMBER_OF_ENTRIES: 0x00,
  DYNAMIC_VIAL_TAP_DANCE_GET: 0x01,
  DYNAMIC_VIAL_TAP_DANCE_SET: 0x02,
  DYNAMIC_VIAL_COMBO_GET: 0x03,
  DYNAMIC_VIAL_COMBO_SET: 0x04,
  DYNAMIC_VIAL_KEY_OVERRIDE_GET: 0x05,
  DYNAMIC_VIAL_KEY_OVERRIDE_SET: 0x06,
};

const MSG_LEN = 32;

function LEFrom(num, bytes) {
  const ab = new ArrayBuffer(bytes);
  const dv = new DataView(ab);

  switch (bytes) {
    case 2: dv.setInt16(0, num, true); break;
    case 4: dv.setInt32(0, num, true); break;
  }
  return Array.from(new Uint8Array(ab));
}

function LE32(num) {
  return LEFrom(num, 4);
}

function LE16(num) {
  return LEFrom(num, 2);
}

const Vial = {
  // This will be set to the opened device.
  device: undefined,
  open: async function() {
    const devices = await navigator.hid.requestDevice({
      filters: [{
        // Filter for QMK/Vial Keyboards.
        usagePage: 0xFF60,
        usage: 0x61,
      }]
    });

    if (devices.length !== 1) return false;

    Vial.device = devices[0];
    Vial.initDevice().then(() => {});

    return true;
  },

  sendVia: (cmd, args, flags) => {
    const vargs = [cmd, ...args];
    return Vial.send(RAW.CMD_VIA_VIAL_PREFIX, vargs, flags);
  },

  send: (cmd, args, flags) => {
    let ary = [cmd];
    if (args) {
      ary = [cmd, ...args];
    }
    for (let i = ary.length; i < MSG_LEN; i++) {
      ary.push(0);
    }
    console.log("sending", ary);
    // Callback for when we get a response.
    const cbpromise = new Promise((res, rej) => {
      Vial.listener = (data, ev) => {
        // console.log(data);
        let ret;
        if (flags.uint16) {
          ret = new Uint16Array(data);
        } else if (flags.int16) {
          ret = new Int16Array(data);
        } else if (flags.uint32) {
          ret = new Int32Array(data);
        } else if (flags.int8) {
          ret = new Int8Array(data);
        } else {
          ret = new Uint8Array(data);
        }
        if (flags.first) {
          ret = ret[0];
        } else if (flags.slice) {
          if (flags.slice.length) {
            ret = ret.slice(...flags.slice);
          } else {
            ret = ret.slice(flags.slice);
          }
        }
        if (flags.string) {
          ret = new TextDecoder().decode(ret);
        }
        res(ret);
      };
    });
    // Send update and respond to callback.
    const sendpromise = Vial.device.sendReport(0, new Uint8Array(ary));
    sendpromise.then(cbpromise)

    return cbpromise;
  },

  listener: (data, ev) => {},

  initDevice: async function() {
    await Vial.device.open()
    Vial.device.addEventListener('inputreport', (ev) => {
      // console.log(ev.data);
      if (Vial.listener) {
        x = ev.data;
        Vial.listener(ev.data.buffer, ev);
      }
    });
    const kbinfo = await Vial.getKeyboardInfo();
    console.log("kbinfo", kbinfo);
  },

  getKeyboardInfo: async () => {
    let ret;
    const kbinfo = {};

    kbinfo.via_proto = await Vial.send(RAW.CMD_VIA_GET_PROTOCOL_VERSION, [], {int32: true, first: true});
    kbinfo.kbid = await Vial.sendVia(RAW.CMD_VIAL_GET_KEYBOARD_ID, [], {uint16: true, slice: [0, 3]});

    console.log("kbi", kbinfo);
    
    const payload_size = await Vial.sendVia(RAW.CMD_VIAL_GET_SIZE, [], {uint32: true, first: true});
    console.log("payload size", payload_size);

    let block = 0;
    let sz = payload_size
    let payload = new ArrayBuffer(payload_size);
    let pdv = new DataView(payload);
    let offset = 0
    while (sz > 0) {
      let data = await Vial.sendVia(RAW.CMD_VIAL_GET_DEFINITION, [...LE32(block)],
                                    {uint8: true});
      console.log("got", data);

      for (let i = 0; i < MSG_LEN && offset < payload_size; i++) {
        pdv.setInt8(offset, data[i]);
        offset += 1;
      }
      sz = sz - MSG_LEN;
      block += 1;
    }
    const up = [...new Int8Array(payload)];

    kbinfo.payload = JSON.parse(await decompress(new Uint8Array(up).buffer));

    return kbinfo
  },
}
