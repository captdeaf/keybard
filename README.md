# KeyBard

KeyBard is a companion software to the Svalboard (https://svalboard.com)

With KeyBard, you can:
  - Manipulate your Svalboard's keymaps
  - Add, edit, and remove macros, tapdances, combos
  - Change your QMK settings.
  - Apply sample keymaps: QWERTY, Dvorak, HRM (Home Row Mod) examples.
  - 

This started as a pure javascript version of vial-gui, at
https://get.vial.today

It is currently targeted at Svalboard users, so probably misses some
features other Vial users might be accustomed to having. As with any
project, we welcome PRs, and suggestions =).

# Current features:

 - Pull information from keyboard:

 - Both instant and queued changes.
   - Vial only allows for instant - the second you select a new key, your
     keyboard now has that key in its keymap. With KeyBard, you can choose
     between that, or queueing up all changes to be committed at once.

 - View and modify keymap for all available layers.

 - Sample keyboards
   - A rendering of a QWERTY keyboard. This will be expanded.
   - Select modifier keys, to bind a key to, e.g: SHIFT+key
     or CTRL+key without using macros.

 - Macros and Tap Dances
   - View and edit.
   - See a 'description' in the sample board.

 - Combos and Key Overrides
   - View and edit as a big list, they're not bound to keys.

 - QMK Settings (under MENU) - Change somewhat obscure QMK values.

 - .vil and .svl support.
   - .svl is KeyBard's native keyboard info JSON. It contains all
     the information KeyBard is able to determine about the board,
     as well as user's cosmetic changes (only useful in KeyBard)
   - .vil is from Vial - it doesn't contain enough information to
     properly render, so it currently imports from defaults. (At
     time of writing, only Svalboard).
   - Both can be uploaded and applied to a connected keyboard.
   - Both can be uploaded without a connected keyboard, and modified
     to be re-downloaded.

 - Sample keyboards: For selecting your keys.
   - QWERTY, etc.
   - App/media/mouse
   - backlight/quantum
   - Keyboard Custom keys.
 
 - Sample layers you can apply.
   - Broke your sval layout? Apply QWERTY!

# TODO

 - Protocol:
   - Macros now fetch and push the entire 798 byte macro memory. Should
     only fetch and pull until the macro_count'th null byte.
 
 - Adding documentation and help windows or context links to explain things.
 
 - Example layers.
   - Fn
   - Mice
 
 - Example full .kbis - all 16 layers, macros, combos, etc.
   - DH QWERTY
   - HRM/BRM examples.
 
 - Rewrite KEYUI.getKeyContents + KEY.parseDesc(), they're a bit inconsistent.

 - UI design improvements. Ongoing and constant =).
   - Custom names for layers. Maybe combos and tap dances.
   - Layer toggles rather than MO/TT/DF/OSL for every #?
     e.g: "(MO-Momentary) (DF - Default) (OSL - One Shot)" "0 1 2 3 ..."

# Development

Below is for anyone interested in contributing to KeyBard.

## Terminology

Vial and QMK overload various terms. I'm trying to keep them separate for this
project.

- Keymap: Physical keys to key strings.

- KeyLayout: How to render the board's keys - this lays out the Svalboard
  clusters and thumb keys in the correct location and size.

- kbinfo: The JS object containing all information I have about a given
  keyboard. For more information, look at pages/js/kbinfo.js

# KBINFO and BASE_KBINFO

These are two separate values, defined in kbinfo.js.

BASE_KBINFO is the connected device, or the initially uploaded file if no
device is connected. It is the 'static' version.

KBINFO is considered the 'current' and editable kbinfo - change keys, add
macros, etc. Unless you have 'instant' on, this will differ from BASE_KBINFO.

On commit, BASE_KBINFO and KBINFO will be identical.

All downloads are of KBINFO. All uploads replace KBINFO. Only if 'instant' is
enabled will it also immediately update BASE_KBINFO.

# Adding new 'Sample Boards'

A 'sample board' is one that goes along the bottom half. e.g: "QWERTY",
"International-&gt;AZERTY", "QMK Keys", etc.

To add a new sample board:

1) Add the board as html/kcs/(name).html (You probably want to use another
   board as a template.)

2) Add the container and tab to html/allboards.html

# JS Notes.

I try and keep most javascript compartmentalized. Not all .js files are such,
either for convenience or because they could use a little refactoring.

I do not use a framework at present. Since better than 90% of the code revolves
around keys and editing them, I feel frameworks would only slightly improve
the other 10%, while making the 90% a bit more complicated to fit in.

I do try and keep most sections of the code fairly well documented.

### util.js

util.js defines most of the intended globals, as well as the DOM-manipulating
functions and element creation. It also adds a major function that most other
files use: `addInitializer()`.

Most of the UI code that is independent of others is wrapped in an
addInitializer(). There are (at time of writing) two times initializers are
called: on load, and on connect. They can optionally choose an order to be
loaded in. addInitializer(type, callback, order). For more information, see
util.js

 - `addInitializer('load', () => {})` will call when page is fully loaded.

 - `addInitializer('connected', () => {})` will call when a device is connected,
   or a .kbinfo or .vil is uploaded for editing.

Majority of UI code is wrapped in either initializer.

```
const GLOBAL = {};

addInitializer('load', () => {
  function DoSomething() {...}
  const localValue = [];

  GLOBAL.something = () => {
    DoSomething(localValue);
  }
});
```

### actions.js

For actions, I use a concept of selectors and callbacks. There is no
per-element binding (Though you may choose to do that for your own elements).
Instead, document.onclick() checks its target and its parents (working up the
tree) until an element matching a selector is found. This lets us have hundreds
of keys with only a few callbacks, depending on type of key.

`ACTION.onclick('selector', callback) will call `callback` with the element
matching 'selector'. There is no need to add individual onclick callbacks to
every single element that matches `selector`.

`ACTION.on(name, cb(...args))` and `ACTION.trigger(name, ...args)`
work together. Only one callback may be registered per name.
For example - at time of writing, there is a 'bind' event, which
is called whenever a bind-able key is clicked.

### UI

All the UI stuff is in `kbui/` They are fairly well encapsulated. e.g: If you
remove `kbui/combo.js` from `html/scripts.html`, the only thing you need to
change is `updateAll` calling their update. (Only globally accessible feature
combo.js has)

`kbui/sampleboards.js` is responsible for populating dynamic sample boards, such
as macro, layers, and the like.

### vial/

All the raw USB code is in `usbhid.js`, but in `vial/` you'll find
Vial-specific behavior to communicate with the keyboard. These encapsulate in a
bit of a different way, but could use a bit of a refactor to match the rest of
the site.

### qmk_settings.js

This is pulled directly from QMK's settings.json. The only change I make is
to add `const QMK_SETTINGS =` at the start to turn it into .js

### keygen.js

This is generated by `rebuild_keys.py` (or just run `make keys`). It's a little
odd in its approach to make Vial aliases our default, but also make QMK aliases
available for use.
