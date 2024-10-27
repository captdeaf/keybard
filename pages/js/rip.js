SETTINGS = {};

LANGUAGE_MAP = {};


async function getKeymap() {
  runInitializers('load');
  const kbinfo = {};
  const opened = await USB.open([{
    // Filter for QMK/Vial kbs
    usagePage: 0xFF60,
    usage: 0x61,
  }]);
  await Vial.getKeyboardInfo(kbinfo);
  await Vial.kb.getKeyMap(kbinfo);

  const l = kbinfo.keymap[0];
  const ret = {};
  LANGUAGE_MAP[KEY.localization] = {};
  for (let i = 0; i < l.length; i++) {
    try {
      const str = KEY.define(l[i]).str;
      if (str.length === 1) {
        const chr = str.charCodeAt(0);
        if (chr >= 0x41 && chr <= 0x5a) {
          ret['Key' + i] = [
            chr + 0x20, chr
          ];
        } else if (chr) {
          ret['Key' + i] = [
            chr
          ];
        }
      }
    } catch (err) {}
  }
  return ret;
}
