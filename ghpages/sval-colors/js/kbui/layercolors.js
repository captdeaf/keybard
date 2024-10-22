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

  LAYER_COLORS.rgb2hsv = (r, g, b) => {
    // Taken from stack overflow link
    r /= 255, g /= 255, b /= 255;

    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, v = max;

    var d = max - min;
    s = max == 0 ? 0 : d / max;

    if (max == min) {
      h = 0; // achromatic
    } else {
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }

      h /= 6;
    }

    console.log('hsv', h, s, v);

    return [ Math.floor(h * 255), Math.floor(s * 255), Math.floor(v * 255) ];
  }

  LAYER_COLORS.setLayerColorRGB = async (layer, r, g, b) => {
    const [h, s, v] = LAYER_COLORS.rgb2hsv(r, g, b);
    console.log([0x11, layer, h, s, v]);
    await USB.send(0xEE, [0x11, layer, h, s, v]);
  };
});
