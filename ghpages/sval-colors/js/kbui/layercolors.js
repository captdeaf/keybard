////////////////////////////////////
//
//  Layer colors
//
////////////////////////////////////

const LAYER_COLORS = {
  // Get the HSV of the given layer
  getLayerColor: null,
  // Set the given layer to an HSV color
  setLayerColor: null,
}

addInitializer('connected', () => {
  LAYER_COLORS.getLayerColor = async (layer) => {
    const hsv = await USB.send(0xEE, [0x10, layer], {unpack: 'BBB'});
    return hsv;
  };

  LAYER_COLORS.setLayerColor = async (layer, h, s, v) => {
    await USB.send(0xEE, [0x11, layer, h, s, v]);
  };

  LAYER_COLORS.setLayerColor2 = async (layer, h, s, v) => {
    h = Math.floor((h/360) * 256) % 256;
    s = Math.floor(s * 255);
    v = Math.floor(v * 255);
    await USB.send(0xEE, [0x11, layer, h, s, v]);
  };

});
