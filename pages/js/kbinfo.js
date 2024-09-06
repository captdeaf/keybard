// kbinfo.js
//
////////////////////////////////////
//
// ### kbinfo values: (Using Svalboard as example)
// 
// {
//   layers: 16, rows: 10, cols: 6,
//   macro_count: 50, combo_count: 50, tapdance_count: 50, key_override_count: 30,
//   keylayout: {}, // This is for visual layout: what key goes where.
//   keymap: [16 arrays of [(10 * 6) key strings]]
//   macros: [50 arrays of {mid: #, actions: [{}]}]
//   key_override_entries: TBD,
//   encoder_layout: TBD,
//   combo_entries: TBD,
//   custom_keycodes: [array of 18 objects],
//   extra: Extra information, such as versions and information from .xz json payload
// }
//
////////////////////////////////////

let KBINFO = {
  layers: 16,
  macro_count: 50,
  keylayout: {},
  keymap: [],
  macros: [],
  custom_keycodes: [],
  extra: {},
};

let BASE_KBINFO;

const CHANGES = {
  // Queue and commit changes.
  todo: {},
  queue(desc, cb) {
    if (SETTINGS.instant) {
      cb();
    } else {
      CHANGES.todo[desc] = {
        desc: desc,
        cb: cb,
      };
    }
  },

  commit() {
    for (const [desc, change] of Object.entries(CHANGES.todo)) {
      change.cb();
    }
    for (const el of findAll('.changed')) {
      el.classList.remove('changed');
    }

    BASE_KBINFO = deepCopy(KBINFO);
  }
};

// KBAPI - For when we need to push changes.
let KBAPI = {
  async updateKey(layer, kmid, keystr) {
    const row = Math.floor(kmid / KBINFO.cols);
    const col = Math.floor(kmid % KBINFO.cols);
    const keymask = KEY.parse(keystr);
    await KBAPI.wrapped.updateKey(layer, row, col, keymask);
  },
  async updateMacros() {
    // macros is always shoved as a big block of data.
    await KBAPI.wrapped.updateMacros(KBINFO);
  },
  async updateTapdance(tdid) {
    await KBAPI.wrapped.updateTapdance(KBINFO, tdid);
  },
};

KBAPI.wrapped = {
  async updateKey() {},
  async updateMacros() {},
  async updateTapdance() {},
}
