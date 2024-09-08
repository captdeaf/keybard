////////////////////////////////////
//
//  Vial combo: Fetching, Parsing, Pushing.
//
////////////////////////////////////

Vial.combo = (function() {
  return {
    async get(kbinfo) {
      // Combos are stored in dynamic memory chunks. We do
      // KBINFO.combo_count queries. So this can take a bit of time.

      const all_entries = await Vial.USB.getDynamicEntries(
              Vial.USB.DYNAMIC_VIAL_COMBO_GET,
              kbinfo.combo_count,
              {unpack: '<BHHHHH'});
      
      kbinfo.combos = [];
      all_entries.forEach((raw, idx) => {
        kbinfo.combos.push([
          KEY.stringify(raw[1]),
          KEY.stringify(raw[2]),
          KEY.stringify(raw[3]),
          KEY.stringify(raw[4]),
          KEY.stringify(raw[5]),
        ]);
      });
    },
    async push(kbinfo, cmbid) {
      const combo = kbinfo.combos[cmbid];
      await Vial.USB.sendVial(Vial.USB.CMD_VIAL_DYNAMIC_ENTRY_OP, [
        Vial.USB.DYNAMIC_VIAL_COMBO_SET,
        cmbid,
        ...LE16(KEY.parse(combo[0])),
        ...LE16(KEY.parse(combo[1])),
        ...LE16(KEY.parse(combo[2])),
        ...LE16(KEY.parse(combo[3])),
        ...LE16(KEY.parse(combo[4])),
      ]);
    },
  };
})();
