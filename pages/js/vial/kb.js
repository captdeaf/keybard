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

    async commitChanges() {
      // Any keymap changes?
      const oldkm = Vial.kbinfo.keymap;
      const newkm = Vial.kbinfo.newkeymap;
      console.log("commitChanges", oldkm, newkm);

      for (let layer = 0; layer < Vial.kbinfo.layers; layer++) {
        for (let row = 0; row < Vial.kbinfo.rows; row++) {
          for (let col = 0; col < Vial.kbinfo.cols; col++) {
            const idx = Vial.kbinfo.cols * row + col;
            if (newkm[layer][idx] !== oldkm[layer][idx]) {
              console.log('updating ', [layer, row, col], KEY.stringify(newkm[layer][idx]));
              await Vial.USB.send(Vial.USB.CMD_VIA_SET_KEYCODE,
                              [layer, row, col,
                              ...BE16(newkm[layer][idx])]);
            }
          }
        }
      }

      for (const el of getAll('.changed')) {
        el.classList.remove('changed');
      }
      // Refresh current keymap.
      Vial.kbinfo.keymap = deepCopy(Vial.kbinfo.newkeymap);
    },
  };
})();
