////////////////////////////////////
//
//  The mouseover popup over complicated keys.
//
////////////////////////////////////

addInitializer('connected', () => {
  const panecontainer = get('#panecontainer');

  function showPaneForKey(keyimage) {
    const keystr = keyimage.dataset.key;

    const desc = KEYUI.getKeyContents(keyimage.dataset.key);

    let contents = desc.title;

    if (desc.type === 'tapdance') {
      let td = KBINFO.tapdances[desc.tdid];
      let all = [];
      all.push(`tap: ${td.tap}`);
      all.push(`hold: ${td.hold}`);
      if (td.taphold !== 'KC_NO') {
        all.push(`tap-hold: ${td.taphold}`);
      }
      if (td.doubletap !== 'KC_NO') {
        all.push(`doubletap: ${td.doubletap}`);
      }
      contents = all.join('<br>');
    }
    if (keystr === 'KC_NO') {
      contents = "Disabled key";
    } else if (keystr === 'KC_TRNS') {
      contents = "Transparent key (fall-through to next active layer)";
    }
    showPane(keyimage, keystr, contents);
  }

  function showPane(el, title, contents) {
    const bounds = el.getBoundingClientRect();
    let x = bounds.x + (bounds.width / 2) - 50;
    let y = bounds.y - 100;

    const winbounds = document.documentElement.getBoundingClientRect();

    x = Math.min(x, winbounds.width - 180);
    y = Math.min(y, winbounds.height - 300);
    x = Math.max(x, 5);
    y = Math.max(y, 5);

    let titlediv = undefined;
    if (title) {
      titlediv = EL('div', {class: 'panetitle'}, title);
    }

    const pane = EL(
      'div',
      {
        class: 'keypane',
        style: {
          position: 'fixed',
          top: y + 'px',
          left: x + 'px',
          visibility: 'hidden',
        }
      },
      titlediv
    );

    if (contents) {
      appendChildren(pane, EL('div', {class: 'panebody'}, contents));
    }

    setTimeout(() => {
      const panebounds = pane.getBoundingClientRect();
      console.log("panebounds", bounds, panebounds);
      if ((panebounds.y + panebounds.height) > bounds.y) {
        pane.style['top'] = (bounds.y + bounds.height + 10) + 'px';
      }
      pane.style['visibility'] = 'visible';
    }, 20);

    panecontainer.innerHTML = '';
    appendChildren(panecontainer, pane);
  }

  function hidePane(evt) {
    panecontainer.innerHTML = '';
  }

  let keymatch = null;

  let curX = 0;
  let curY = 0;
  let lastX = 0;
  let lastY = 0;
  const showFor = {
    KC_TRNS: true,
  };

  function updatePane() {
    const elements = document.elementsFromPoint(curX, curY);
    let match = null;
    if (curX === lastX && curY === lastY) return;
    lastX = curX;
    lastY = curY;
    for (const el of elements) {
      if (el.matches('[data-key]')) {
        match = el;
        break;
      } else if (el.matches('[data-title]')) {
        match = el;
      }
    }
    if (match !== keymatch) {
      keymatch = match;
      if (match && match.dataset) {
        const k = match.dataset.key;
        if (k && (showFor[k] || !match.dataset.key.match(/^KC_.$/))) {
          showPaneForKey(match);
          return;
        } else if (match.dataset.title) {
          showPane(match, '', match.dataset.title);
          return;
        } 
      }
      hidePane();
    }
  }

  setInterval(updatePane, 200);

  document.onmousemove = (evt) => {
    curX = evt.clientX;
    curY = evt.clientY;
    updatePane();
  };
});
