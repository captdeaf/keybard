////////////////////////////////////
//
//  Vial QMK Settings: Fetching, Parsing, Pushing.
//
//  QMK Settings are weird. This is how I understand it:
//
//    - We get a JSON file, here as QMK_SETTINGS.
//    - The JSON file defines which QSIDs (QMK Setting IDs) it supports. 
//        * (QSID starts with 1)
//    - The JSON file lists all, regardless of whether or not the KB supports
//      it.
//    - Each QSID has a width: 1 (byte), 2 (uint16) or 4 (uint32)
//    - We fetch each QS, by its QSID, individually.
//        * It first returns a byte we ignore, presumably the QSID back.
//
////////////////////////////////////

Vial.qmk = (function() {
  return {
    async get(kbinfo) {
      // Vial is weird about this. It wants to give us an array of QSIDs (QMK Setting IDs) that it supports.
      // So what we get first is basically ...
      // [1, 2, 3, 4, 5, 6, 7, ... 20, 21, 0xFFFF, 0xFFFF]
      const supported = {};

      let offset = 0;
      let query = true
      while (query) {
        data = await Vial.USB.sendVial(Vial.USB.CMD_VIAL_QMK_SETTINGS_QUERY, [offset], {uint16: true});
        for (const val of data) {
          if (val === 0xFFFF) {
            query = false;
            break;
          }
          supported[val] = true;
        }
        offset += 16
      }
      
      // Parse out the widths for each QSID value.
      // No width = B (byte). Width 2 = H (short). Width 4 = I (int).
      const qsid_unpacks = {};
      for (const tab of QMK_SETTINGS.tabs) {
        for (const field of tab.fields) {
          if (field.width === 2) {
            qsid_unpacks[field.qsid] = 'H';
          } else if (field.width === 4) {
            qsid_unpacks[field.qsid] = 'I';
          } else {
            qsid_unpacks[field.qsid] = 'B';
          }
        }
      }

      // We now have our supported QSIDs. 1...21, for my sval. Fetch them.
      const settings = {};
      for (const qsid of Object.keys(qsid_unpacks)) {
        // Don't forget the ignored byte.
        const unpack = 'B' + qsid_unpacks[qsid];
        val = await Vial.USB.sendVial(Vial.USB.CMD_VIAL_QMK_SETTINGS_GET, [qsid], {unpack: unpack});
        settings[qsid] = val[1];
      }
      KBINFO.settings = settings;
    },
    async push(kbinfo, qfield) {
      const val = kbinfo.settings[qfield.qsid];
      let vals = [val];
      if (qfield.width === 2) {
        vals = LE16(val);
      } else if (qfield.width === 4) {
        vals = LE32(val);
      }
      vals = LE32(val);
      console.log('pushing via qmk set:', qfield.qsid, vals);
      await Vial.USB.sendVial(Vial.USB.CMD_VIAL_QMK_SETTINGS_SET, [...LE16(qfield.qsid), ...vals]);
    },
  };
})();
