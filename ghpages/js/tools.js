const TOOLS = {};

addInitializer('connected', () => {
  TOOLS.swap = (a, b) => {
    const tmp = KBINFO.keymap[a];
    KBINFO.keymap[a] = KBINFO.keymap[b];
    KBINFO.keymap[b] = tmp;
    updateAllChanges();
  };
});
