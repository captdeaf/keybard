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
//   keymap: [16 arrays of [(10 * 6) key strings], ...]
//   macros: [50 arrays of {mid: #, actions: [{}]}, ...]
//   key_override_entries: [{koid: #, {layers, ...}, ...],
//   encoder_layout: TBD,
//   combo_entries: [[type, value], ...],
//   custom_keycodes: [{name, shortname, title}, ...],
//   extra: Extra information, such as versions and information from .xz json payload
// }
//
////////////////////////////////////

let KBINFO = {
  layers: 16,
  keylayout: {},
  keymap: [],
  macro_count: 0,
  macros: [],
  custom_keycodes: [],
  key_override_count: 0,
  key_override_entries: [],
  combo_count: 0,
  combos: [],
  settings: {},
  extra: {},
};

// Unchanged. May be used for committing .vil or .kbinfo piecemeal?
let BASE_KBINFO;

////////////////////////////////////
//
//  Queue up changes for commit. Alternately, if SETTINGS.instant is enabled,
//  then trigger it instantly.
//
//  Changes are queued by "{type},{idx}". idx is just an indicator of what
//  individually has changed, so that if a single key is updated twice, only
//  the second change is queued for commit. (Unless instant is enabled.)
//
//  Currently, macros are pushed all at once rather than individually updated,
//  so they are the only ones queued simply by "macro".
//
////////////////////////////////////
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
    CHANGES.todo = {};
    for (const el of findAll('.changed')) {
      el.classList.remove('changed');
    }

    BASE_KBINFO = deepCopy(KBINFO);
  }
};

////////////////////////////////////
//
//  A wrapper around:
//    - Vial
//    - Sval (eventually if it breaks from Vial?)
//    - .vil editing
//    - .kbinfo editing.
//
////////////////////////////////////
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
  async updateCombo(cmbid) {
    await KBAPI.wrapped.updateCombo(KBINFO, cmbid);
  },
  async updateKeyoverride(koid) {
    await KBAPI.wrapped.updateKeyoverride(KBINFO, koid);
  },
  async updateQMKSetting(qfield) {
    await KBAPI.wrapped.updateQMKSetting(KBINFO, qfield);
  }
};

KBAPI.wrapped = {
  async updateKey() {},
  async updateMacros() {},
  async updateTapdance() {},
  async updateCombo() {},
  async updateKeyoverride() {},
  async updateQMKSetting() {},
}
