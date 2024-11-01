// node_usbhid.js
//
////////////////////////////////////
//
//  Raw information and interaction with USBHID from NodeJS.
//
////////////////////////////////////
const nodeHID = require('node-hid');

const MSG_LEN = 32;

const USB = {
  // This will be set to the opened device.
  device: undefined,

  list: () => {
    const devices = nodeHID.devices().filter(device => device.usage === 0x61 && device.usagePage === 0xFF60);
    if (devices.length > 0) {
      console.log("Device(s):\n  -", devices.map( device => device.manufacturer + ' ' + device.product).join('  - \n'));
    } else {
      console.error('Unable to locate any devices with Vial Firmware.')
    }
    return devices;
  },

  open: async function() {
    const devices = USB.list();
    if (devices.length < 1) {
      return false;
    }
    USB.device = new nodeHID.HID(devices[0].path);
    return true;
  },

  send: (cmd, args, flags) => {
    // Format what we're sending.
    // cmd must be one byte. 
    let cmdargs = [cmd];
    if (args) { cmdargs = [cmd, ...args]; }
    for (let i = cmdargs.length; i < MSG_LEN; i++) {
      cmdargs.push(0);
    }

    // Send command and respond with a promise
    USB.device.write(new Uint8Array([0x00, ...cmdargs]));
    return new Promise((res, rej) => {
      try {
        // NodeJS returns an array of bytes
        const response = USB.device.readSync();
        // formatUSBResponse needs an ArrayBuffer
        const buffer = new ArrayBuffer(response.length);
        const bytes = new Uint8Array(buffer)
        bytes.set(response);

        const ret = formatUSBResponse(buffer, flags);
        res(ret);
      } catch (err) {
        rej(err);
      }
    });
  },

  close: () => {
    USB.device.close();
  }
}
