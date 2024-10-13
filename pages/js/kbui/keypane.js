////////////////////////////////////
//
//  The mouseover popup over complicated keys.
//
////////////////////////////////////

addInitializer('connected', () => {
  const panecontainer = get('#panecontainer');

  function showPane(keyimage) {
    const keybounds = keyimage.getBoundingClientRect();
    let x = keybounds.x + (keybounds.width / 2) - 50;
    let y = keybounds.y - 100;

    const winbounds = document.documentElement.getBoundingClientRect();

    x = Math.min(x, winbounds.width - 180);
    y = Math.min(y, winbounds.height - 140);
    x = Math.max(x, 5);
    y = Math.max(y, 5);

    const pane = EL(
      'div',
      {
        class: 'keypane',
        style: {
          position: 'fixed',
          top: y + 'px',
          left: x + 'px',
        }
      },
      EL('div', {class: 'panetitle'}, keyimage.dataset.key),
    );

    appendChildren(pane, KEYUI.getKeyContents(keyimage.dataset.key).title);

    panecontainer.innerHTML = '';
    appendChildren(panecontainer, pane);
  }

  function hidePane(evt) {
    panecontainer.innerHTML = '';
  }

  let keymatch = null;

  let curX = 0;
  let curY = 0;

  function updatePane() {
    const elements = document.elementsFromPoint(curX, curY);
    if (document.hasFocus()) {
      let match = null;
      for (const el of elements) {
        if (el.matches('[data-key]')) {
          match = el;
          break;
        }
      }
      if (match !== keymatch) {
        keymatch = match;
        if (keymatch) {
          showPane(keymatch);
        } else {
          hidePane();
        }
      }
    }
  }

  setInterval(updatePane, 200);

  document.onmousemove = (evt) => {
    curX = evt.clientX;
    curY = evt.clientY;
    updatePane();
  };
});
