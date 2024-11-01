const { Blob } = require('buffer');
const fs = require('fs');
const path = require('path');
const { program } = require('commander');
const vm = require('vm');
const { XzReadableStream } = require('xz-decompress');


const sandbox = {
  global: {},
  Blob: Blob,
  console: console,
  localStorage: {
    data: {},
    getItem: function(key) {
      if (this.data.hasOwnProperty(key)) {
        return this.data[key];
      } else {
        return null;
      }
    },
    setItem: function(key, val) {
      this.data[key] = val;
    }
  },
  Response: Response,
  require: require,
  TextDecoder: TextDecoder,
  xzwasm: {XzReadableStream: XzReadableStream}
}
vm.createContext(sandbox);

const files = [
    '../pages/js/util.js',
    '../pages/js/actions.js',
    '../pages/js/svalboard.js',
    '../pages/js/keygen.js',
    '../pages/js/languages.js',
    '../pages/js/keys.js',
    '../pages/js/jskeys.js',
    '../pages/js/kbinfo.js',
    './node_usbhid.js',
    '../pages/js/qmk_settings.js',
    '../pages/js/kle.js',
    '../pages/js/vial/vial.js',
    '../pages/js/vial/usb.js',
    '../pages/js/vial/kb.js',
    '../pages/js/vial/macro.js',
    '../pages/js/vial/combo.js',
    '../pages/js/vial/tapdance.js',
    '../pages/js/vial/keyoverride.js',
    '../pages/js/vial/qmk.js',
    '../pages/js/vial/api.js',
];
files.forEach((file) => {
  const js = fs.readFileSync(path.resolve(__dirname, file), 'utf8');
  vm.runInContext(js, sandbox);
});

program.command('dump').action(() => {
  const js = fs.readFileSync(path.resolve(__dirname, './main.js'), 'utf8');
  vm.runInContext(js, sandbox);
});

program.command('list').action(() => {
  vm.runInContext('USB.list();', sandbox);
});

program.parse(process.argv);