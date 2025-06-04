// vial.js
//
////////////////////////////////////
//
//  Pull together all Vial's .js files.
//
////////////////////////////////////

Object.assign(Vial, {
  init: async function(kbinfo) {
    KBAPI.wrapped = Vial.api;
  },

  load: async function(kbinfo) {
    // the .xz-compressed Vial information.
    await Vial.getKeyboardInfo(kbinfo);
    
    // Load combos, macros, etc.
    await Vial.kb.getFeatures(kbinfo);

    // Regenerate keycodes for macros and features.
    await KEY.generateAllKeycodes(kbinfo);

    // Keymap: all layers + all keys.
    await Vial.kb.getKeyMap(kbinfo);

    // Get various memory buffers:
    await Vial.macro.get(kbinfo);
    await Vial.combo.get(kbinfo);
    await Vial.key_override.get(kbinfo);
    await Vial.tapdance.get(kbinfo);
    await Vial.qmk.get(kbinfo);

    // await Vial.getKeyBuffers(kbinfo);

    // Visual layout.
    await Vial.kb.getKeyLayout(kbinfo);

    // Svalboard-specific data
    await Vial.sval.check(kbinfo);
    await Vial.sval.pull(kbinfo);

    return kbinfo;
  },

  getKeyboardInfo: async (kbinfo) => {
    let ret;

    // VIA Protocol. It's a byte followed by a short... big-endian
    kbinfo.via_proto = await Vial.USB.send(Vial.USB.CMD_VIA_GET_PROTOCOL_VERSION, [], {unpack: 'B>H', index: 1});

    // Vial protocol (int) and Keyboard ID (long long), little endian.
    const vial_kbid = await Vial.USB.sendVial(Vial.USB.CMD_VIAL_GET_KEYBOARD_ID, [], {unpack: 'I<Q'});
    kbinfo.vial_proto = vial_kbid[0];
    kbinfo.kbid = vial_kbid[1].toString();

    // Vial KB info is via an xz-compressed JSON blob. Fetched 32 bytes
    // at a time.
    //
    // This mostly contains our layout visualizer for the GUI.
    const payload_size = await Vial.USB.sendVial(Vial.USB.CMD_VIAL_GET_SIZE, [], {uint32: true, index: 0});

    let block = 0;
    let sz = payload_size
    let payload = new ArrayBuffer(payload_size);
    let pdv = new DataView(payload);
    let offset = 0
    while (sz > 0) {
      let data = await Vial.USB.sendVial(Vial.USB.CMD_VIAL_GET_DEFINITION, [...LE32(block)],
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

    kbinfo.rows = payload.matrix.rows;
    kbinfo.cols = payload.matrix.cols;
    kbinfo.custom_keycodes = payload.customKeycodes;

    return kbinfo
  },

  pollMatrix: async (kbinfo) => {
    let data = await Vial.USB.send(Vial.USB.CMD_VIA_GET_KEYBOARD_VALUE, [Vial.USB.VIA_SWITCH_MATRIX_STATE]);
    const rowbytes = Math.ceil(kbinfo.cols / 8);;
    // First two bytes of each row are VIA's confirmation.
    let offset = 2;

    const kmpressed = [];
    for (let row = 0; row < kbinfo.rows; row++) {
      const rowpressed = [];
      const coldata = data.slice(offset, offset + rowbytes);
      for (let col = 0; col < kbinfo.cols; col++) {
        const colbyte = Math.floor(col / 8);
        const colbit = 1 << (col % 8);
        if ((coldata[colbyte] & colbit) !== 0) {
          rowpressed.push(true);
        } else {
          rowpressed.push(false);
        }
      }
      offset += rowbytes;
      kmpressed.push(rowpressed);
    }
    return kmpressed;
  },
});
