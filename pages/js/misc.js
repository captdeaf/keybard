// misc.js
//
////////////////////////////////////
//
//  Miscellaneous UI library.
//
////////////////////////////////////

////////////////////////////////////
//
//  Editable names - these are saved in KBINFO.cosmetic
//
////////////////////////////////////
function getEditableName(type, index, def, skipidx) {
  const local = getSaved('names', {});
  if (!(type in KBINFO.cosmetic)) {
    return def;
  }
  let prefix = index + ': ';
  if (skipidx) {
    prefix = '';
  }
  if (KBINFO.cosmetic[type][index]) {
    return prefix + KBINFO.cosmetic[type][index];
  } else if (type in local && index in local[type]) {
    return prefix + local[type][index];
  } else {
    return index;
  }
}

// Names: for layers, macros, etc. Saved to kbinfo.
// Create the r-clickable display for editing the name.
function makeEditableName(editable, type, index) {
  editable.dataset.editableType = type;
  editable.dataset.editableIndex = index;

  let name = getEditableName(type, index, '' + index);

  editable.innerText = name;
  editable.setAttribute('title', type + ' ' + name + ' (r-click to change name)');

  editable.oncontextmenu = (ev) => {
    if (SETTINGS.disableRightClicks) {
      return true;
    }
    const local = getSaved('names', {});
    ev.preventDefault();
    const newname = prompt('New name for ' + type + ' ' + name);
    if (newname !== null) {
      if (newname !== '') {
        if (!(type in KBINFO.cosmetic)) {
          KBINFO.cosmetic[type] = {};
        }
        if (!(type in local)) {
          local[type] = {};
        }
        KBINFO.cosmetic[type][index] = newname;
        local[type][index] = newname;
      } else {
        delete KBINFO.cosmetic[type][index];
        delete local[type][index];
      }
      KEYUI.refreshAllKeys();
    }
    setSaved('names', local);
    name = getEditableName(type, index);
    editable.innerText = name; 
    editable.setAttribute('title', type + ' ' + name + ' (r-click to change name)');
    return false;
  }
  return editable;
}

/**
 * Converts an RGB color value to HSV. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSV_color_space.
 * Assumes r, g, and b are contained in the set [0, 255] and
 * returns h, s, and v in the set [0, 1].
 *
 * @param   Number  r       The red color value
 * @param   Number  g       The green color value
 * @param   Number  b       The blue color value
 * @return  Array           The HSV representation
 */
function rgbToHsv(r, g, b) {
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

  return [ h, s, v ];
}

/**
 * Converts an HSV color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSV_color_space.
 * Assumes h, s, and v are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 *
 * @param   Number  h       The hue
 * @param   Number  s       The saturation
 * @param   Number  v       The value
 * @return  Array           The RGB representation
 */
function hsvToRgb(h, s, v) {
  var r, g, b;

  var i = Math.floor(h * 6);
  var f = h * 6 - i;
  var p = v * (1 - s);
  var q = v * (1 - f * s);
  var t = v * (1 - (1 - f) * s);

  switch (i % 6) {
    case 0: r = v, g = t, b = p; break;
    case 1: r = q, g = v, b = p; break;
    case 2: r = p, g = v, b = t; break;
    case 3: r = p, g = q, b = v; break;
    case 4: r = t, g = p, b = v; break;
    case 5: r = v, g = p, b = q; break;
  }

  return [ r * 255, g * 255, b * 255 ];
}