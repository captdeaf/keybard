const kbinfo = {};

async function startKeyBard() {
  runInitializers('load');
  if (USB.open()) {
    runInitializers('connected');
    await Vial.init(kbinfo);
    await Vial.load(kbinfo);
  }

  console.log('KBINFO:', kbinfo);

  USB.close();
}

startKeyBard();