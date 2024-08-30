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


const Vial = {
  svalboard_layout: [
     [ { "x" : 3.5 }, "3,3", { "x" : 2.5 }, "2,3", { "x" : 9 }, "7,3", { "x" : 2.5 }, "8,3" ],
     [ { "x" : 2.5 }, "3,4", "3,2", "3,1", { "x" : 0.5 }, "2,4", "2,2", "2,1", { "x" : 7 }, "7,4", "7,2", "7,1", { "x" : 0.5 }, "8,4", "8,2", "8,1" ],
     [ { "x" : 1, "y" : -0.5 }, "4,3", { "x" : 7.5 }, "1,3", { "x" : 4 }, "6,3", { "x" : 7.5 }, "9,3" ],
     [ { "x" : 3.5, "y" : -0.5 }, "3,0", { "x" : 2.5 }, "2,0", { "x" : 9 }, "7,0", { "x" : 2.5 }, "8,0" ],
     [ { "y" : -0.5 }, "4,4", "4,2", "4,1", { "x" : 5.5 }, "1,4", "1,2", "1,1", { "x" : 2 }, "6,4", "6,2", "6,1", { "x" : 5.5 }, "9,4", "9,2", "9,1" ],
     [ { "x" : 1 }, "4,0", { "x" : 7.5 }, "1,0", { "x" : 4 }, "6,0", { "x" : 7.5 }, "9,0" ],
     [ { "w" : 1.5, "x" : 7.9, "y" : 0.5 }, "0,3", { "x" : 0.1 }, "0,5", { "w" : 1.5, "x" : 0.1 }, "0,1", { "w" : 1.5, "x" : 0.8 }, "5,1", { "x" : 0.1 }, "5,5", { "w" : 1.5, "x" : 0.1 }, "5,3" ],
     [ { "w" : 2, "x" : 7.4 }, "0,4", { "x" : 0.1 }, "0,2", { "w" : 1.5, "x" : 0.1 }, "0,0", { "w" : 1.5, "x" : 0.8 }, "5,0", { "x" : 0.1 }, "5,2", { "w" : 2, "x" : 0.1 }, "5,4" ]
  ],
  loadFromVilJSON: async function(vil) {
    const kbinfo = {
      payload: {layouts: {keymap: Vial.svalboard_layout}},
    };

    kbinfo.macros = vil.macro;
    kbinfo.rows = vil.layout[0].length;
    kbinfo.cols = vil.layout[0][0].length;
    kbinfo.macro_count = vil.macro.length;
    kbinfo.combo_count = vil.combo.length;
    kbinfo.tap_dance_count = vil.tap_dance.length;
    kbinfo.key_override_count = vil.key_override.count;
    await KEY.generateAllKeycodes(kbinfo);

    kbinfo.keymap = KEY.parseKeymap(vil.layout, kbinfo.rows, kbinfo.cols);
    // kbinfo.combo_entries = KEY.parseKeymap(vil.combo);
    await Vial.getKeyLayout(kbinfo);
    Vial.kbinfo = kbinfo;
    console.log("kbinfo", kbinfo);
    return kbinfo;
  },
  init: async function() {
    const opened = await USB.open(
      [{
        // Filter for QMK/Vial Keyboards.
        usagePage: 0xFF60,
        usage: 0x61,
      }]
    )
    const kbinfo = {};
    // the .xz-compressed Vial information.
    await Vial.getKeyboardInfo(kbinfo);
    
    // Load combos, macros, etc.
    await Vial.getFeatures(kbinfo);

    // Regenerate keycodes for macros and features.
    await KEY.generateAllKeycodes(kbinfo);

    // Keymap: all layers + all keys.
    await Vial.getKeyMap(kbinfo);

    // Get various memory buffers:
    // - Macros
    // - Tap Dance entries
    await Vial.getKeyBuffers(kbinfo);

    // Visual layout.
    await Vial.getKeyLayout(kbinfo);
    console.log("kbinfo", kbinfo);
    Vial.kbinfo = kbinfo;
    return kbinfo;
  },

  send: (...args) => {
    return USB.send(...args);
  },

  sendVial: (cmd, args, flags) => {
    const vargs = [cmd, ...args];
    return Vial.send(RAW.CMD_VIA_VIAL_PREFIX, vargs, flags);
  },

  getKeyMap: async (kbinfo) => {
    kbinfo.layers = await Vial.send(RAW.CMD_VIA_GET_LAYER_COUNT, [], {uint8: true, index: 1});
    const size = kbinfo.layers * kbinfo.rows * kbinfo.cols;

    const allMaps = [];
   
    // All KB Maps are fetchable as one big buffer ... in 28-byte chunks.
    let offset = 0;
    const chunksize = 28;
    const alldata = await Vial.getViaBuffer(
        RAW.CMD_VIA_KEYMAP_GET_BUFFER,
        size,
        {uint16: true, slice: 2, bigendian: true, bytes: 2}
    );
    kbinfo.keymap = [];

    // For svalboard, Each "row" is a different cluster. 10 rows = 10 clusters.
    // 8 fingers, 2 thumbs. But because thumb 'rows' have 6, finger 'rows' have 5,
    // we'll have expected nulls.
    for (let l = 0; l < kbinfo.layers; l++) {
      const layer = [];
      for (let r = 0; r < kbinfo.rows; r++) {
        for (let c = 0; c < kbinfo.cols; c++) {
          const offset = (l * kbinfo.rows * kbinfo.cols) + (r * kbinfo.cols) + c;
          layer.push(alldata[offset]);
        }
      }
      kbinfo.keymap[l] = layer;
    }
  },

  getKeyboardInfo: async (kbinfo) => {
    let ret;

    // VIA Protocol. It's a byte followed by a short... big-endian
    kbinfo.via_proto = await Vial.send(RAW.CMD_VIA_GET_PROTOCOL_VERSION, [], {unpack: 'B>H', index: 1});

    // Vial protocol (int) and Keyboard ID (long long), little endian.
    const vial_kbid = await Vial.sendVial(RAW.CMD_VIAL_GET_KEYBOARD_ID, [], {unpack: 'IQ'});
    kbinfo.vial_proto = vial_kbid[0];
    kbinfo.kbid = vial_kbid[1]

    // Vial KB info is via an xz-compressed JSON blob. Fetched 32 bytes
    // at a time.
    //
    // This mostly contains our layout visualizer for the GUI.
    const payload_size = await Vial.sendVial(RAW.CMD_VIAL_GET_SIZE, [], {uint32: true, index: 0});

    let block = 0;
    let sz = payload_size
    let payload = new ArrayBuffer(payload_size);
    let pdv = new DataView(payload);
    let offset = 0
    while (sz > 0) {
      let data = await Vial.sendVial(RAW.CMD_VIAL_GET_DEFINITION, [...LE32(block)],
                                    {uint8: true});

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

    // Encoders (dials)
    // TBD
 
    // Layout Labels
    // TBD

    return kbinfo
  },

  getFeatures: async (kbinfo) => {
    // Gets feature information: macro count and size, combo count, etc.
    const counts = await Vial.sendVial(RAW.CMD_VIAL_DYNAMIC_ENTRY_OP, []);

    const macro_count = await Vial.send(RAW.CMD_VIA_MACRO_GET_COUNT, [], {index: 1});
    // size is a byte followed by a big-endian short, short is size.
    let macros_size = await Vial.send(RAW.CMD_VIA_MACRO_GET_BUFFER_SIZE, [],
                                      {unpack: 'B>H', index: 1});

    kbinfo.tap_dance_count = counts[0];
    kbinfo.combo_count = counts[1];
    kbinfo.key_override_count = counts[2];
    kbinfo.macro_count = macro_count;
    kbinfo.macros_size = macros_size;
  },

  getViaBuffer: async (cmd, size, opts) => {
    // Fetch a buffer, 28 bytes at a time.
    // This is for Via messages that expect:
    //   send(cmd_get_buffer, [offset, size])
    let offset = 0;
    const chunksize = 28;
    const alldata = [];
    if (!opts.bytes) opts.bytes = 1;

    while (offset < size) {
      let sz = chunksize;
      if (sz > size - offset) { sz = size - offset; }

      let data = await Vial.send(cmd, [...BE16(offset), sz], opts);
      if (sz < chunksize) {
        data = data.slice(0, parseInt(sz/opts.bytes));
      }

      alldata.push(...data);

      offset += chunksize;
    }

    return alldata;
  },

  // getDynamicEntries is Vial-specific way to get multiple entries.
  // Not a buffer, but call 1 = item 1, call 2 = item 2, etc.
  getDynamicEntries: async (cmd, count, opts) => {
    const alldata = [];
    if (!opts) opts = {};
    for (let i = 0; i < count; i++) {
      const data = await Vial.sendVial(RAW.CMD_VIAL_DYNAMIC_ENTRY_OP, [cmd, i], opts);
      alldata.push(data);
    }
    return alldata;
  },

  getKeyBuffers: async (kbinfo) => {
    // Macros are stored as one big chunk of memory, at 28 bytes per fetch.
    // null-separated. In svalboard, it's 795 bytes.
    kbinfo.macro_memory = await Vial.getViaBuffer(
        RAW.CMD_VIA_MACRO_GET_BUFFER,
        kbinfo.macros_size,
        {slice: 4, uint8: true, bytes: 1}
    );

    const raw_macros = MACROS.split(kbinfo, kbinfo.macro_memory);
    kbinfo.macros = raw_macros.map((macro) => MACROS.parse(kbinfo, macro));
    kbinfo.mdump = MACROS.dump(kbinfo, kbinfo.macros);

    kbinfo.tap_dance_entries = await Vial.getDynamicEntries(
            RAW.DYNAMIC_VIAL_TAP_DANCE_GET,
            kbinfo.tap_dance_count,
            { unpack: '<BHHHHH', slice: 1, map: KEY.stringify },
        );

    kbinfo.combo_entries = await Vial.getDynamicEntries(
            RAW.DYNAMIC_VIAL_COMBO_GET,
            kbinfo.combo_count,
            { unpack: '<BHHHHH', slice: 1, map: KEY.stringify },
        );

    kbinfo.key_override_entries = await Vial.getDynamicEntries(
            RAW.DYNAMIC_VIAL_KEY_OVERRIDE_GET,
            kbinfo.key_override_count,
            { unpack: '<BHHHBBB', slice: 1 },
        );
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
          const [row, col] = [parseInt(rc[0]), parseInt(rc[1])];
          const kmid = (row * kbinfo.cols) + col;
          keylayout[kmid] = {
            row: row,
            col: col,
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
