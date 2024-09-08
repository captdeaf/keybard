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
        const opt = raw[7];
        const options = {
          activation_trigger_down: optEnabled(opt, 0),
          activation_required_mod_down: optEnabled(opt, 1),
          activation_negative_mod_up: optEnabled(opt, 2),
          one_mod: optEnabled(opt, 3),
          no_reregister_trigger: optEnabled(opt, 4),
          no_unregister_on_other_key_down: optEnabled(opt, 5),
          enabled: optEnabled(opt, 7),
        };
        kbinfo.key_overrides.push({
          koid: idx,
          trigger: KEY.stringify(raw[1]),
          replacement: KEY.stringify(raw[2]),
          layers: raw[3],
          trigger_mods: raw[4],
          negative_mod_mask: raw[5],
          suppressed_mods: raw[6],
          options: options,
        });
      });
    },
    async push(kbinfo, koid) {
      const ko = kbinfo.key_overrides[koid];
      const options = ko.options;

      const optval = (
        optInt(options.activation_trigger_down, 0) +
        optInt(options.activation_required_mod_down, 1) +
        optInt(options.activation_negative_mod_up, 2) +
        optInt(options.one_mod, 3) +
        optInt(options.no_reregister_trigger, 4) +
        optInt(options.no_unregister_on_other_key_down, 5) +
        optInt(options.enabled, 7)
      );

      await Vial.USB.sendVial(Vial.USB.CMD_VIAL_DYNAMIC_ENTRY_OP, [
        Vial.USB.DYNAMIC_VIAL_KEY_OVERRIDE_SET,
        key_override.tdid,
        ...LE16(KEY.parse(ko.trigger)),
        ...LE16(KEY.parse(ko.replacement)),
        ...LE16(ko.layers),
        ko.trigger_mods,
        ko.negative_mod_mask,
        ko.suppressed_mods,
        options,
      ]);
    },
  };
})();
