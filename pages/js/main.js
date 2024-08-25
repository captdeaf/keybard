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
    Vial.open();
  }
}

function decompress(buffer) {
  buff = buffer;
  const blob = new Blob([buffer]);
  const xrs = new xzwasm.XzReadableStream(blob.stream());
  const resp = new Response(xrs);
  return resp.text();
}
