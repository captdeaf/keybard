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

  function showit(evt) {
    showPane(evt.target);
  }

  function hideit(evt) {
    panecontainer.innerHTML = '';
  }

  for (const el of getAll('[data-bound]')) {
    el.onmouseenter = showit;
    el.onmouseleave = hideit;
  }
});
