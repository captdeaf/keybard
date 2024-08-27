// keydraw.js
//
////////////////////////////////////
//
//  Render a single key.
//
///////////////////////////////////

function renderKey(kmid, opts) {
  if (!opts) opts = {};
  if (!opts.w) opts.w = {};
  if (!opts.h) opts.h = {};
  // When drawing keyboard, style the keys.
  function getKeyStyle(opts) {
    const style = {
      width: Math.floor(opts.w * 25) + 'px',
      height: Math.floor(opts.h * 25) + 'px',
    };
    if (opts.y !== undefined && opts.x !== undefined) {
      return Object.assign(style, {
        top: Math.floor((opts.y * 30) + 120) + 'px',
        left: Math.floor((opts.x * 30) + 120) + 'px',
        position: 'fixed',
      });
    }
    return style;
  }

  const keyimage = EL('div', {
    class: 'key',
    style: getKeyStyle(opts),
  }, ' ');

  return {
    id: kmid,
    image: keyimage,
  }
}

function refreshKey(keydef, key) {
  if (key && key.str) {
    keydef.image.innerText = key.str;
  }
}
