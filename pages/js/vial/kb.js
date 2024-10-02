// usbvial.js
//
////////////////////////////////////
//
//  Our internal wrapper for JS Vial communications.
//
////////////////////////////////////

Vial.kb = (function() {
  return {
    getKeyMap: async (kbinfo) => {
      kbinfo.layers = await Vial.USB.send(Vial.USB.CMD_VIA_GET_LAYER_COUNT, [], {uint8: true, index: 1});
      const size = kbinfo.layers * kbinfo.rows * kbinfo.cols;

      const allMaps = [];
     
      // All KB Maps are fetchable as one big buffer ... in 28-byte chunks.
      let offset = 0;
      const chunksize = 28;
      const alldata = await Vial.USB.getViaBuffer(
          Vial.USB.CMD_VIA_KEYMAP_GET_BUFFER,
          size*2,
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
            layer.push(KEY.stringify(alldata[offset]));
          }
        }
        kbinfo.keymap[l] = layer;
      }
    },

    getFeatures: async (kbinfo) => {
      // Gets feature information: macro count and size, combo count, etc.
      const counts = await Vial.USB.sendVial(Vial.USB.CMD_VIAL_DYNAMIC_ENTRY_OP, []);

      const macro_count = await Vial.USB.send(Vial.USB.CMD_VIA_MACRO_GET_COUNT, [], {index: 1});
      // size is a byte followed by a big-endian short, short is size.
      let macros_size = await Vial.USB.send(Vial.USB.CMD_VIA_MACRO_GET_BUFFER_SIZE, [],
                                        {unpack: 'B>H', index: 1});

      kbinfo.tapdance_count = counts[0];
      kbinfo.combo_count = counts[1];
      kbinfo.key_override_count = counts[2];
      kbinfo.macro_count = macro_count;
      kbinfo.macros_size = macros_size;
    },

    getKeyLayout: async (kbinfo) => {
      kbinfo.keylayout = KLE.deserializeToKeylayout(kbinfo, kbinfo.payload.layouts.keymap);
      return kbinfo.keylayout;
    },
  };
})();
