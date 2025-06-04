////////////////////////////////////
//
// Utilities for handling colored lighting.
//
// Properties with leading underscores are considered private and
// should not be relied upon outside this file.
//
////////////////////////////////////

function dieAsUninitialized() {
    throw new Error('not yet initialized');
}

// shallow object comparison. falsy things may be passed,
// and all of them are considered equal to one another but
// not to anything truthy.
function isShallowlyEqual(a, b) {
    const akeys = a ? Object.keys(a) : [];
    const bkeys = b ? Object.keys(b) : [];
    if (akeys.length !== bkeys.length) {
        return false;
    }
    const rv = akeys.every(k => a[k] === b[k]);
    return rv;
}

const IROIRO = {
    fallback: undefined,

    hsv256To360: dieAsUninitialized,
    hsv360To256: dieAsUninitialized,
    hsv256ToIro: dieAsUninitialized,
    iroToHsv256: dieAsUninitialized,

    luminanceOf: (iro) => {
        // https://stackoverflow.com/questions/3942878
        const rv = iro.red * 0.299 + iro.green * 0.587 + iro.blue * 0.114;
        return rv;
    },

    makeContrastHexstringFor: (iro) => {
        const luminancePivot = 160;
        const lum = IROIRO.luminanceOf(iro);
        return lum > luminancePivot ? '#000' : '#fff';
    },
    getSelectedLayerColors: dieAsUninitialized,

    picker: undefined,
    pickerHostEl: undefined,
    pickerDlogEl: undefined,

    setPickerIro: dieAsUninitialized,

    updateAll: dieAsUninitialized,

    // in the rescaling functions, I means inclusive upper bound and X is exclusive.

    _pinI: (v, scaleTop) => {
        let rv = v;
        if (rv < 0) {
            rv = 0;
        } else if (rv >= scaleTop) {
            rv = scaleTop;
        }
        return rv;
    },

    _rescaleIntegerII: (inV, fromScale, toScale) => {
        const v = IROIRO._pinI(inV, fromScale);
        const frv = v / fromScale * toScale;
        const rv = Math.floor(frv);
        return rv;
    },

    _rescaleIntegerIX: (inV, fromScale, toScale) => {
        const irv = IROIRO._rescaleIntegerII(inV, fromScale, toScale);
        const rv = irv >= toScale ? toScale - 1 : irv;
        return rv;
    },

    _rescaleIntegerXI: (inV, fromScale, toScale) => {
        return IROIRO._rescaleIntegerII(inV, fromScale - 1, toScale);
    },

    _rescaleIntegerXX: (inV, fromScale, toScale) => {
        return IROIRO._rescaleIntegerIX(inV, fromScale - 1, toScale);
    },
};

addInitializer('load', () => {
    IROIRO.fallback = new iro.Color('#ddd');

    IROIRO.hsv256To360 = (hsv256) => {
        const rv = {
            h: IROIRO._rescaleIntegerXX(hsv256.hue, 256, 360),
            s: IROIRO._rescaleIntegerXI(hsv256.sat, 256, 100),
            v: IROIRO._rescaleIntegerXI(hsv256.val, 256, 100),
        };
        return rv;
    };

    IROIRO.hsv360To256 = (hsv360) => {
        const rv = {
            hue: IROIRO._rescaleIntegerXX(hsv360.h, 360, 256),
            sat: IROIRO._rescaleIntegerIX(hsv360.s, 100, 256),
            val: IROIRO._rescaleIntegerIX(hsv360.v, 100, 256),
        };
        return rv;
    };

    IROIRO.hsv256ToIro = (hsv256) => {
        if (!hsv256) {
            return IROIRO.fallback;
        }
        const hsv360 = IROIRO.hsv256To360(hsv256);
        const rv = new iro.Color(hsv360);
        return rv;
    };

    IROIRO.iroToHsv256 = (iro) => {
        const hsv360 = iro.hsv;
        const rv = IROIRO.hsv360To256(hsv360);
        return rv;
    };

    // IROIRO._withConsistentBrightness = (hsv256) => {
    //     const isTethered = IROIRO._isBrightnessTethered(hsv256);
    //     if (IROIRO.useConsistentBrightness && !isTethered) {
    //         return {...hsv256, val: IROIRO._consistentBrightnessSentinel};
    //     }
    //     if (!IROIRO.useConsistentBrightness && isTethered) {
    //         return {...hsv256, val: 254};
    //     }
    //     return hsv256;
    // }

    IROIRO._consistentBrightnessPickerLayout = [
        {component: iro.ui.Wheel}
    ];

    IROIRO._independentBrightnessPickerLayout = [
        {component: iro.ui.Wheel},
        {component: iro.ui.Slider, options: {sliderType: 'value'}},
    ];

    IROIRO.pickerHostEl = get('#colorpicker-host');
    IROIRO.pickerDlogEl = get('#float-colorpicker');

    IROIRO.picker = new iro.ColorPicker(IROIRO.pickerHostEl, {
        layout: IROIRO._consistentBrightnessPickerLayout,
    });

    IROIRO.setPickerIro = (iro) => {
        IROIRO.picker.color.hsv = iro.hsv;
    };

    IROIRO.updateAll = () => {
        // nothing to do if we cannot yet rely on KBINFO.layer_colors
    }
});

addInitializer('connected', () => {
    IROIRO._wip = undefined;

    IROIRO.getSelectedLayerColors = () => {
        const bghsv = KBINFO.layer_colors[MAINBOARD.selectedLayer];
        const bgiro = IROIRO.hsv256ToIro(bghsv);
        const fg = IROIRO.makeContrastHexstringFor(bgiro);
        const rv = {
            backgroundColor: bgiro.hexstring,
            color: fg,
        };
        return rv;
    }

    IROIRO._prepareWip = () => {
        IROIRO._wip = {...KBINFO.layer_colors};
    };

    IROIRO.setPickerColorFromSelectedLayer = () => {
        const layerId = MAINBOARD.selectedLayer;
        if (!IROIRO._wip) {
            IROIRO._prepareWip();
        }
        const hsv256 = IROIRO._wip[layerId];
        const layerIro = hsv256 ? IROIRO.hsv256ToIro(hsv256) : IROIRO.fallback;
        IROIRO.setPickerIro(layerIro);
    };

    IROIRO.setSelectedLayerColorFromPicker = () => {
        const hsv360 = IROIRO.picker.color.hsv;
        const hsv256 = IROIRO.hsv360To256(hsv360);
        // const hsv255 = IROIRO._withConsistentBrightness(hsv256);
        const hsv255 = {...hsv256, val: 255};
        const selectedLayerId = MAINBOARD.selectedLayer;

        if (!isShallowlyEqual(IROIRO._wip[selectedLayerId], hsv255)) {
            IROIRO._wip[selectedLayerId] = hsv255;
        }
    }

   IROIRO._recordChanges = () => {
        if (!isShallowlyEqual(IROIRO._wip, KBINFO.layer_colors)) {
            KBINFO.layer_colors = IROIRO._wip;
            return CHANGES.queue('layer colors', () => Promise.all(
                Object.keys(KBINFO.layer_colors)
                    .filter(lix => !isShallowlyEqual(KBINFO.layer_colors[lix], BASE_KBINFO.layer_colors[lix]))
                    .map(lix => {
                        const hsv256 = KBINFO.layer_colors[lix];
                        return Vial.sval.setLayerColor(KBINFO, lix, hsv256.hue, hsv256.sat, hsv256.val);
                    })));
        }
    };

    ACTION.onclick('#open-colorpicker', () => {
        IROIRO._prepareWip();
        IROIRO.setPickerColorFromSelectedLayer();
        ACTION.showFloat(IROIRO.pickerDlogEl);
    });

    ACTION.onclick('[data-action="colorpicker-cancel"]', () => {
        ACTION.closeFloats();
    });

    ACTION.onclick('[data-action="colorpicker-accept"]', () => {
        IROIRO.setSelectedLayerColorFromPicker()
        void IROIRO._recordChanges();
        ACTION.closeFloats();
        MAINBOARD.updateAll();
    });

    // // explicitly user-chosen brightness maxes out at 254. 255, which is the
    // // historical default here, is used as a sentinel value meaning that
    // // brightness should be managed for all layers equally using the single
    // // shared backlight brightness value.
    // //
    // // thus, the only way you can get a color into layer_colors with a val of
    // // anything other than 255 is by disabling the global brightness checkbox
    // // and choosing something from the slider instead. if you have done that
    // // for the color of any layer, then the UI will treat you as somebody who
    // // micromanages layer light brightness.
    // //
    // // unless you are running a firmware that also respects this convention,
    // // it won't have any effect on the board. it should be possible to make
    // // such a firmware without needing to make any other alterations to either
    // // the settings stored in EEPROM on the board or the protocol used to
    // // communicate with it.
    // IROIRO._isBrightnessGlobal = () => {
    //     for (let lhsv of IROIRO._wip) {
    //         if (!IROIRO._isBrightnessTethered(lhsv)) {
    //             return false;
    //         }
    //     }
    //     return true;
    // }
    //
    // IROIRO.setUseConsistentBrightness = (consistentp) => {
    //     if (consistentp !== IROIRO.useConsistentBrightness) {
    //         IROIRO.useConsistentBrightness = consistentp;
    //         IROIRO._wip = IROIRO._wip.map(lix => {
    //             const xhsv = IROIRO._wip[lix];
    //             const consistentlyBrightened = IROIRO._withConsistentBrightness(xhsv);
    //             if (!isShallowlyEqual(consistentlyBrightened, xhsv)) {
    //                 return consistentlyBrightened;
    //             } else {
    //                 return xhsv;
    //             }
    //         });
    //         // it's not worth talking to the picker here, it'll never
    //         // care about the difference enough to notice
    //     }
    // };

    // // every time the board is connected, determine whether brightness is
    // // managed globally based on whether any layers have V != 255.
    // IROIRO.setUseConsistentBrightness(IROIRO._isBrightnessGlobal());
});