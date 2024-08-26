// main.js
//
////////////////////////////////////
//
//  Tie together all the js files for jsvial
//
///////////////////////////////////

function startJSVial() {
  get('#launch').onclick = () => {
    console.log("hi?");
    doStuff();
  }
}

function getStyleFor(opts) {
  return {
    top: Math.floor((opts.y * 30) + 120) + 'px',
    left: Math.floor((opts.x * 30) + 120) + 'px',
    width: Math.floor(opts.w * 25) + 'px',
    height: Math.floor(opts.h * 25) + 'px',
    position: 'fixed',
  };
}

async function doStuff() {
  await Vial.init();
  const children = [];
  for (const [kmid, opts] of Object.entries(Vial.kbinfo.keylayout)) {
    let text = '"' + opts.row + ',' + opts.col + '"';
    if (opts.text && opts.text.qmkid) text = opts.text.qmkid;
    const keyimage = EL('div', {
      id: kmid,
      class: 'key',
      style: getStyleFor(opts),
    }, EL('p', {}, text));
    opts.keyimage = keyimage;
    children.push(keyimage);
  }
  const sheet = EL('div', {
    id: 'kb',
    style: {
      position: 'relative',
      height: '100%',
      width: '100%',
    }
  }, ...children);
  get('#sheet').innerHTML = '';
  appendChildren(get('#sheet'), sheet);
}
