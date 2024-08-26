// usbvial.js
//
////////////////////////////////////
//
//  Our internal wrapper for JS Vial communications.
//
////////////////////////////////////

const RAW = lockValue({
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
});

const MSG_LEN = 32;

function EndianFrom(num, bytes, little) {
  const ab = new ArrayBuffer(bytes);
  const dv = new DataView(ab);

  switch (bytes) {
    case 2: dv.setInt16(0, num, little); break;
    case 4: dv.setInt32(0, num, little); break;
  }
  return Array.from(new Uint8Array(ab));
}

function LE32(num) {
  return EndianFrom(num, 4, true);
}

function LE16(num) {
  return EndianFrom(num, 2, true);
}

function BE32(num) {
  return EndianFrom(num, 4, false);
}

function BE16(num) {
  return EndianFrom(num, 2, false);
}

function convEndian(ary, size) {
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
    await Vial.device.open()
    await Vial.initDevice();

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
        console.log(data);
        let ret;
        if (flags.uint16) {
          ret = new Uint16Array(data);
          if (flags.bigendian) {
            ret = convEndian(ret, 2);
          }
        } else if (flags.int16) {
          ret = new Int16Array(data);
          if (flags.bigendian) {
            ret = convEndian(ret, 2);
          }
        } else if (flags.uint32) {
          ret = new Int32Array(data);
          if (flags.bigendian) {
            ret = convEndian(ret, 4);
          }
        } else if (flags.int8) {
          ret = new Int8Array(data);
          if (flags.bigendian) {
            ret = convEndian(ret, 4);
          }
        } else {
          ret = new Uint8Array(data);
        }
        if (flags.index != undefined) {
          ret = ret[flags.index];
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
    Vial.device.addEventListener('inputreport', (ev) => {
      // console.log(ev.data);
      if (Vial.listener) {
        x = ev.data;
        Vial.listener(ev.data.buffer, ev);
      }
    })
    const kbinfo = {};
    await Vial.getKeyboardInfo(kbinfo);
    await Vial.getKeyMap(kbinfo);
    await Vial.getKeyLayout(kbinfo);
    console.log("kbinfo", kbinfo);
    Vial.kbinfo = kbinfo;
    return kbinfo;
  },

  getKeyMap: async (kbinfo) => {
    kbinfo.layers = await Vial.send(RAW.CMD_VIA_GET_LAYER_COUNT, [], {uint8: true, index: 1});
    const size = kbinfo.layers * kbinfo.rows * kbinfo.cols;

    const allMaps = [];
   
    // All KB Maps are fetchable as one big buffer ... in 28-byte chunks.
    let offset = 0;
    const chunksize = 28;
    const alldata = [];
    const allkeys = {};

    while (offset < size) {
      let sz = chunksize;
      if (sz > size - offset) { sz = size - offset; }

      console.log("getkb", offset, sz);

      // Why in the world does everything else use little endian,
      // but keymap uses big endian?!
      const data = await Vial.send(RAW.CMD_VIA_KEYMAP_GET_BUFFER, [...BE16(offset), sz],
                             {uint16: true, slice: 2, bigendian: true});
      // console.log("chunk", data);
      alldata.push(...data);

      offset += chunksize;
    }
    kbinfo.keymap = [];
    kbinfo.rowmap = [];

    // For svalboard, Each "row" is a different cluster. 10 rows = 10 clusters.
    // 8 fingers, 2 thumbs.
    for (let l = 0; l < kbinfo.layers; l++) {
      const layer = [];
      for (let r = 0; r < kbinfo.rows; r++) {
        for (let c = 0; c < kbinfo.cols; c++) {
          const offset = (l * kbinfo.rows * kbinfo.cols) + (r * kbinfo.cols) + c;
          const raw = RAWCODES_MAP[alldata[offset]];
          layer.push(raw);
        }
      }
      kbinfo.keymap[l] = layer;
    }
  },

  getKeyboardInfo: async (kbinfo) => {
    let ret;

    kbinfo.via_proto = await Vial.send(RAW.CMD_VIA_GET_PROTOCOL_VERSION, [], {int32: true, index: 0});
    kbinfo.kbid = await Vial.sendVia(RAW.CMD_VIAL_GET_KEYBOARD_ID, [], {uint16: true, slice: [0, 3]});

    console.log("kbi", kbinfo);

    // Keyboard info is via an xz-compressed JSON blob. Fetched 32 bytse
    // at a time.
    //
    // This mostly contains our layout visualizer for the GUI.
    const payload_size = await Vial.sendVia(RAW.CMD_VIAL_GET_SIZE, [], {uint32: true, index: 0});
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
    // Decompress and deJSONify
    const up = [...new Int8Array(payload)];

    payload = JSON.parse(await decompress(new Uint8Array(up).buffer));
    kbinfo.payload = payload;

    kbinfo.layout_labels = payload.layouts.labels;
    kbinfo.rows = payload.matrix.rows;
    kbinfo.cols = payload.matrix.cols;

    return kbinfo
  },

  getKeyLayout: async (kbinfo) => {
    // Layout information.
    // This is a little oddly laid out, to save space:
    // [obj, str, str, str, obj, ...]
    const klayout = kbinfo.payload.layouts.keymap;

    const cur = {
      color: "#cccccc",
      labels: [],
      textColor: "",
      textSize: [],
      x: 0,
      y: 0,
      w: 1,
      h: 1,
      x2: 0,
      y2: 0,
      width2: 1,
      height2: 1,
      rotation_x: 0,
      rotation_y: 0,
      rotation_angle: 0,
      decal: false,
      ghost: false,
      stepped: false,
      nub: false,
      profile: "",
      sm: "",
      sb: "",
      st: "",
    };

    const keylayout = {};
    for (var r = 0; r < klayout.length; r++) {
      for (var c = 0; c < klayout[r].length; c++) {
        const item = klayout[r][c]
        if (typeof(item) !== 'string') {
          if ('x' in item) {
            cur.x += item.x;
          }
          if ('y' in item) {
            cur.y += item.y;
          }
          if ('w' in item) {
            cur.w = item.w
          } else {
            cur.w = 1;
          }
          if ('h' in item) {
            cur.h = item.h
          } else {
            cur.h = 1;
          }
          // Object.assign(cur, item);
        } else {
          const rc = item.split(',');
          const kmid = (parseInt(rc[0]) * kbinfo.cols) + parseInt(rc[1]);
          console.log("foo", [r, c, cur.x, cur.y]);
          keylayout[kmid] = {
            row: rc[0],
            col: rc[1],
            text: kbinfo.keymap[0][kmid],
            ...cur
          };
          cur.x += cur.w;
        }
      }
      cur.y += cur.h;
      cur.x = cur.rotation_x;
    }

    kbinfo.keylayout = keylayout;

    return kbinfo.keylayout;
  },
}
