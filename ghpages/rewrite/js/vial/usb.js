// vial/vial.js
//
////////////////////////////////////
//
//  Everything specific to Vial's implementations.
//
////////////////////////////////////

Vial.USB = lockValue({
  // Raw Via+Vial commands.
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

  send: (...args) => {
    return USB.send(...args);
  },

  sendVial: (cmd, args, flags) => {
    const vargs = [cmd, ...args];
    return Vial.USB.send(Vial.USB.CMD_VIA_VIAL_PREFIX, vargs, flags);
  },

  getViaBuffer: async (cmd, size, opts, check) => {
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

      let data = await Vial.USB.send(cmd, [...BE16(offset), sz], opts);
      if (sz < chunksize) {
        data = data.slice(0, parseInt(sz/opts.bytes));
      }

      alldata.push(...data);

      if (check && check(alldata)) {
        break;
      }

      offset += chunksize;
    }

    return alldata;
  },

  pushViaBuffer: async (cmd, size, buffer) => {
    // Push a buffer, 28 bytes at a time.
    // This is for Via messages that expect:
    //   send(cmd_get_buffer, [offset, size])
    let offset = 0;
    const chunksize = 28;
    const alldata = [];

    while (offset < size) {
      let sz = chunksize;
      if (sz > size - offset) { sz = size - offset; }

      await Vial.USB.send(cmd, [...BE16(offset), sz, ...new Uint8Array(buffer.slice(offset, offset+sz))]);

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
      const data = await Vial.USB.sendVial(Vial.USB.CMD_VIAL_DYNAMIC_ENTRY_OP, [cmd, i], opts);
      alldata.push(data);
    }
    return alldata;
  },
});
