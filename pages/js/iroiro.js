////////////////////////////////////
//
// Utilities for handling colored lighting.
//
////////////////////////////////////

function dieAsUnitialized() {
    throw new Error("not yet initialized");
}

const IROIRO = {
    fallback: undefined,

    hsv255To360: dieAsUnitialized,
    hsv360To255: dieAsUnitialized,
    hsv255ToIro: dieAsUnitialized,
    iroToHsv255: dieAsUnitialized,

    picker: undefined,
    pickerHostEl: undefined,

    setPickerIro: dieAsUnitialized,
    setPickerColorFromSelectedLayer: dieAsUnitialized,
    setSelectedLayerColorFromPicker: dieAsUnitialized,
};

addInitializer("load", () => {
    IROIRO.fallback = new iro.Color("#ddd");

    IROIRO.hsv255To360 = (hsv255) => {
        const rv = {
            h: Math.floor((hsv255.hue * 360) / 255),
            s: Math.floor((hsv255.sat * 100) / 255),
            v: Math.floor((hsv255.val * 100) / 255),
        };
        return rv;
    };

    IROIRO.hsv360To255 = (hsv360) => {
        const rv = {
            hue: Math.floor((hsv360.h * 255) / 360),
            sat: Math.floor((hsv360.s * 255) / 100),
            val: Math.floor((hsv360.v * 255) / 100),
        };
        return rv;
    };

    IROIRO.hsv255ToIro = (hsv255) => {
        if (!hsv255) {
            return IROIRO.fallback;
        }
        const hsv360 = IROIRO.hsv255To360(hsv255);
        const rv = new iro.Color(hsv360);
        return rv;
    };

    IROIRO.iroToHsv255 = (iro) => {
        const hsv360 = iro.hsv;
        const rv = IROIRO.hsv360To255(hsv360);
        return rv;
    };

    IROIRO.pickerHostEl = get("#colorpicker-host");

    IROIRO.picker = new iro.ColorPicker(IROIRO.pickerHostEl, {
        layout: [
            {component: iro.ui.Wheel},
            {component: iro.ui.Slider, options: {sliderType: "value"}},
        ]
    });

    IROIRO.setPickerIro = (iro) => {
        IROIRO.picker.color.hsv = iro.hsv;
    };
});

addInitializer("connected", () => {
    IROIRO.setPickerColorFromSelectedLayer = () => {
        const layerId = MAINBOARD.selectedLayer;
        const hsv255 = KBINFO.layer_colors?.[layerId];
        const layerIro = hsv255 ? IROIRO.hsv255ToIro(hsv255) : IROIRO.fallback;
        IROIRO.setPickerIro(layerIro);
    };

    IROIRO.setSelectedLayerColorFromPicker = () => {
        const layerId = MAINBOARD.selectedLayer;
        const hsv360 = IROIRO.picker.color.hsv;
        const hsv255 = IROIRO.hsv360To255(hsv360);
        if (!KBINFO.layer_colors) {
            KBINFO.layer_colors = {};
        }
        KBINFO.layer_colors[layerId] = hsv255;

        // we are deliberately not waiting for the send to the board to
        // avoid stalling the UI. update the display optimistically and
        // if something fails, rely on somebody else to catch it and
        // alert the user. if desired, one could read back the colors
        // from the board after the set settles, to make certain that the
        // edit took.
        void Vial.sval.setLayerColor(KBINFO, layerId, hsv255.hue, hsv255.sat, hsv255.val);
    };

    ACTION.onclick('[data-action="colorpicker-cancel"]', () => {
       IROIRO.setPickerColorFromSelectedLayer();
       ACTION.closeFloats();
    });

    ACTION.onclick('[data-action="colorpicker-accept"]', () => {
        IROIRO.setSelectedLayerColorFromPicker();
        MAINBOARD.updateAll();
        ACTION.closeFloats();
    })
});