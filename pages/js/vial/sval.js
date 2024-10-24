////////////////////////////////////
//
//  Svalboard protocols
//
////////////////////////////////////

Vial.sval = (function() {
  const SVAL = lockValue({
    IDENTIFIER: 0xEE,
    GET_VERSION: 0x01,
    LAYER_COLOR_GET: 0x10,
    LAYER_COLOR_SET: 0x11,
  });
  async function svalSend(param, args, opts) {
    return await Vial.USB.send(SVAL.IDENTIFIER, [param, ...args], opts)
  }
  return {
    send: svalSend,
    async check(kbinfo) {
      const check = await svalSend(SVAL.GET_VERSION, [], {unpack: 'BBBB<I'});
      const code = 'sval';
      if (check[0] == code.charCodeAt(0) &&
          check[1] == code.charCodeAt(1) &&
          check[2] == code.charCodeAt(2) &&
          check[3] == code.charCodeAt(3)) {
        kbinfo.sval_version = check[4];
        return true;
      }
      kbinfo.sval_version = 0;
      return false;
    },
    async pull(kbinfo) {
      if (kbinfo.sval_version >= 1) {
        const layer_colors = [];
        for (let i = 0; i < kbinfo.layers; i++) {
          const hsv = await svalSend(SVAL.LAYER_COLOR_GET, [i], {unpack: 'BBB'})
          layer_colors[i] = {
            hue: hsv[0],
            sat: hsv[1],
            val: hsv[2],
          }
        }
        kbinfo.layer_colors = layer_colors;
      }
    },
    async setLayerColor(kbinfo, layer, hue, sat, val) {
      await svalSend(SVAL.LAYER_COLOR_SET, [layer, hue, sat, val]);
    },
  };
})();
