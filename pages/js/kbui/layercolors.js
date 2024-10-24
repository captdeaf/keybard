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
  let layer = 0;
  LAYER_COLORS.setLayerColor = async (l) => {
    layer = l;
    ACTION.showFloat(pickerFloat);
  };

  LAYER_COLORS.update = async () => {
    console.log('update colors', args);
    Vial.sval.setLayerColor(KBINFO, ...args);
  };
});
