# Handy snippets for KeyBard development

If you're writing code or HTML for KeyBard, you may find these snippets handy.

Please read README.md's Development section if you want more details.

### Don't do anything until page is fully loaded.

```javascript
addInitializer('load', () => {
  // Code goes here.
});
```

### Don't do anything until a device is connected or a .kbi/.vil file is loaded.

```javascript
addInitializer('connected', () => {
  // Code goes here.
});
```

And HTML show as disabled until connected:

```html
<label class="connect-enable">...</div>
```

Note this won't prevent clicks - I recommend putting the ACTION.onclick()
handler inside a `addInitializer('connected', () => {});` if you don't want
to be clickable until a device is connected, or .kbi/.vil is uploaded.

### Add a global that other code can call into, despite being encapsulated
in an `addInitializer()`

```javascript
const MYGLOBAL = {
  // A little doc here explaining it
  myCallback: null,
};

addInitializer('load', () => {
  MYGLOBAL.myCallback = (...args) => {
    // Code goes here
  };
});
```

### Add an HTML toggle that is saved across reloads.

SETTINGS is a global saved across browser connections. Feel free to use it for
anything you need, but a checkbox is easy: SETTINGS.varname can be added with:

```html
<input type="checkbox" class="check" data-toggle="varname" data-default="false">
```

### Getting and saving data across sessions.

`const val = getSaved('varname', default);` and `setSaved('varname', value);`

### Open a float / dialog box

I don't generate html dialog boxes on demand. In general, they go into floats.html
(or an included page). My typical approach is: On an event, show the page, clear and
rerender its contents (if necessary). Because of ACTION object (see below), it's
usually not required to add event handlers at this point.

To show a hidden element:

```html
<label data-open="#idoffloater">...</label>
```

To close a parent element, just place an element inside it with `data-action="close"`

```html
<div class="topright">
  <button class="close" data-action="close">Close</button>
</div>
```

### Add a new on click action to an HTML element

This is a combo: Add a unique selector to your element, then use
`ACTION.onclick()` for it. Using ACTION means if it is wiped and re-rendered,
you don't need to rebind.

```html
<div data-action="dothis" data-param="Some Parameter">...</div>
```

```javascript
ACTION.onclick('[data-action="dothis"]', (target) => {
  // target here is the element with the selector that is clicked.
  // (Even if a child element was clicked).
  console.log(target.dataset.param);
});
```

### Drawing and refreshing a single key:

To render a single key: `<div class="key" data-key="KC_A">...</div>`

Depending on when it is loaded or the event, it may be refreshed with a
`KEYUI.refreshAllKeys();`. If you want to refresh it directly, use
`KEYUI.refreshKey(divelement);`

# Anything else that sorta has an equivalent already?

My favorite - just copy+paste and edit as needed =).

Menu item behaves like you want? Yoink it and edit.
