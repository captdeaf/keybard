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
    top: Math.floor((opts.y * 100) + 100) + 'px',
    left: Math.floor((opts.x * 100) + 100) + 'px',
    width: Math.floor(opts.w * 80) + 'px',
    height: Math.floor(opts.h * 80) + 'px',
    position: 'fixed',
  };
}

async function doStuff() {
  await Vial.open();
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
