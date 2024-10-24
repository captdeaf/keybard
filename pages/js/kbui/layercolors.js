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
  const pickerFloat = get('#colorpicker');
  let layer = 0;

  // From google ai overview
  function hslToHsv(h, s, l) {
    s /= 100;
    l /= 100;

    const v = l + s * Math.min(l, 1 - l);
    const newS = v === 0 ? 0 : 2 * (1 - l / v);

    return [h, newS * 100, v * 100];
  }

  const led = get('#color-light');

  const slider = get('#color-slider');
  slider.oninput = () => {
    led.style['background-color'] = `hsl(${Math.floor(slider.value)}, 100%, 50%)`;
  };
  slider.onchange = () => {
    const hsv = hslToHsv(Math.floor(slider.value), 100, 50);
    Vial.sval.setLayerColor(KBINFO, layer, Math.floor((hsv[0]/360)*255), 255, 255);
  };

  LAYER_COLORS.setLayerColor = async (l) => {
    layer = l;
    ACTION.showFloat(pickerFloat);
  };
});

// addInitializer('connected', () => {
  // LAYER_COLORS.setLayerColor(15);
// }, 10000);
