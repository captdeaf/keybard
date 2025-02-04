// usbutil.js
//
/////////////////////////////////////

// A wrapper around xzwasm's decompression.
function decompress(buffer) {
  buff = buffer;
  const blob = new Blob([buffer]);
  const xrs = new xzwasm.XzReadableStream(blob.stream());
  const resp = new Response(xrs);
  return resp.text();
}

////////////////////////////////////
//
//  unpack - similar to most languages' unpack method.
//  Expects an ArrayBuffer(). unpack(arraybuffer, "<BHH")
//
//  <, >: little and big endian
//  b, B: 1 byte
//  h, H: 2 bytes
//  i, I: 4 bytes
//  q, Q: 8 bytes
//
////////////////////////////////////
function unpack(buffer, str) {
  let offset = 0;
  const dv = new DataView(buffer);
  // endian-ness
  let le = true;
  const ret = [];
  for (const chr of str.split('')) {
    let val;
    switch (chr) {
      case '<': le = true; break;
      case '>': le = false; break;
      case 'H':
        val = dv.getUint16(offset, le);
        offset += 2;
        break;
      case 'h':
        val = dv.getInt16(offset, le);
        offset += 2;
        break;
      case 'I':
        val = dv.getUint32(offset, le);
        offset += 4;
        break;
      case 'i':
        val = dv.getInt32(offset, le);
        offset += 4;
        break;
      case 'B':
        val = dv.getUint8(offset);
        offset++;
        break;
      case 'b':
        val = dv.getInt8(offset);
        offset++;
        break;
      case 'q':
        val = dv.getBigInt64(offset, le);
        offset += 8;
        break;
      case 'Q':
        val = dv.getBigUint64(offset, le);
        offset += 8;
        break;
      default:
        console.log("Invalid char in unpack: " + chr);
    }
    if (val !== undefined) {
      ret.push(val);
    }
  }
  return ret;
}
