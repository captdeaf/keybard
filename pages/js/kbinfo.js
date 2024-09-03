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

class KBInfo {
  layers = 16;
  macro_count = 50;
  keylayout = {};
  keymap = [];
  macros = [];
  custom_keycodes = [];
  extra = {};
};

const KBINFO = new KBInfo();
