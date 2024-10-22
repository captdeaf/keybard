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
  // Set the given layer to an RGB color (converts)
  setLayerColorRGB: null,
}

addInitializer('connected', () => {
  LAYER_COLORS.getLayerColor = async (layer) => {
    const hsv = await USB.send(0xEE, [0x10, layer], {unpack: 'BBB'});
    return hsv;
  };

  LAYER_COLORS.setLayerColor = async (layer, h, s, v) => {
    await USB.send(0xEE, [0x11, layer, h, s, v]);
  };

});
