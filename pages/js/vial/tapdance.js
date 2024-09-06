// vial/macro.js
//
////////////////////////////////////
//
//  Vial Tapdance: Fetching, Parsing, Pushing.
//
////////////////////////////////////

Vial.tapdance = (function() {
  return {
    async get(kbinfo) {
      // Tap dances are stored in dynamic memory chunks. We do
      // KBINFO.tapdance_count queries. So this can take a bit of time.

      const all_entries = await Vial.USB.getDynamicEntries(
              Vial.USB.DYNAMIC_VIAL_TAP_DANCE_GET,
              kbinfo.tapdance_count,
              {unpack: '<BHHHHH'});
      
      kbinfo.tapdances = [];
      all_entries.forEach((raw, idx) => {
        kbinfo.tapdances.push({
          tdid: idx,
          tap: KEY.stringify(raw[1]),
          hold: KEY.stringify(raw[2]),
          doubletap: KEY.stringify(raw[3]),
          taphold: KEY.stringify(raw[4]),
          tapms: raw[5],
        });
      });
    },
    async push(kbinfo, tdid) {
      const tapdance = kbinfo.tapdances[tdid];
      await Vial.USB.sendVial(Vial.USB.CMD_VIAL_DYNAMIC_ENTRY_OP, [
        Vial.USB.DYNAMIC_VIAL_TAP_DANCE_SET,
        tapdance.tdid,
        ...LE16(KEY.parse(tapdance.tap)),
        ...LE16(KEY.parse(tapdance.hold)),
        ...LE16(KEY.parse(tapdance.doubletap)),
        ...LE16(KEY.parse(tapdance.taphold)),
        ...LE16(tapdance.tapms),
      ]);
    },
  };
})();
