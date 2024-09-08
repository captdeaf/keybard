////////////////////////////////////
//
//  Vial key overrides: Fetching, Parsing, Pushing.
//
////////////////////////////////////

Vial.key_override = (function() {
  function optEnabled(opt, idx) {
    return (opt & (1 << idx)) !== 0;
  }
 
  function optInt(opt, idx) {
    if (opt) { return (1 << idx); }
    return 0;
  }

  return {
    async get(kbinfo) {
      // Key overrides are stored in dynamic memory chunks. We do
      // KBINFO.key_override_count queries. So this can take a bit of time.

      const all_entries = await Vial.USB.getDynamicEntries(
              Vial.USB.DYNAMIC_VIAL_KEY_OVERRIDE_GET,
              kbinfo.key_override_count,
              {unpack: '<BHHHBBBB'});
      
      kbinfo.key_overrides = [];

      all_entries.forEach((raw, idx) => {
        kbinfo.key_overrides.push({
          koid: idx,
          trigger: KEY.stringify(raw[1]),
          replacement: KEY.stringify(raw[2]),
          layers: raw[3],
          trigger_mods: raw[4],
          negative_mod_mask: raw[5],
          suppressed_mods: raw[6],
          options: raw[7],
        });
      });
    },
    async push(kbinfo, koid) {
      const ko = kbinfo.key_overrides[koid];

      await Vial.USB.sendVial(Vial.USB.CMD_VIAL_DYNAMIC_ENTRY_OP, [
        Vial.USB.DYNAMIC_VIAL_KEY_OVERRIDE_SET,
        koid,
        ...LE16(KEY.parse(ko.trigger)),
        ...LE16(KEY.parse(ko.replacement)),
        ...LE16(ko.layers),
        ko.trigger_mods,
        ko.negative_mod_mask,
        ko.suppressed_mods,
        ko.options,
      ]);
    },
  };
})();
