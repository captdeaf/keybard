////////////////////////////////////
//
//  The mouseover popup over complicated keys.
//
////////////////////////////////////

addInitializer('connected', () => {
  const panecontainer = get('#panecontainer');

  function showPaneForKey(keyel) {
    const keystr = keyel.dataset.key;

    const desc = KEYUI.getKeyContents(keyel.dataset.key);

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
      contents = 'Disabled key';
    } else if (keystr === 'KC_TRNS') {
      contents = 'Transparent key (fall-through to next active layer)';
    }
    showPane(keyel, keystr, contents);
  }

  function showPane(el, title, contents) {
    const bounds = el.getBoundingClientRect();
    let x = bounds.x + bounds.width / 2 - 50;
    let y = bounds.y - 100;

    if (el.dataset.titlePos === 'right') {
      x = bounds.x + bounds.width + 10;
      y = bounds.y;
    }

    const winbounds = document.documentElement.getBoundingClientRect();

    // Min/max
    x = Math.min(x, winbounds.width - 180);
    y = Math.min(y, winbounds.height - 300);
    x = Math.max(x, 5);
    y = Math.max(y, 5);

    let titlediv = undefined;
    if (title) {
      titlediv = EL('div', { class: 'panetitle' }, title);
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
        },
      },
      titlediv
    );

    if (contents) {
      appendChildren(pane, EL('div', { class: 'panebody' }, contents));
    }

    function adjust(redo) {
      // Position the pane.
      const panebounds = pane.getBoundingClientRect();
      if (!redo) {
        pane.style['width'] = panebounds.width + 'px';
        pane.style['height'] = panebounds.height + 'px';
      }
      x = bounds.x + bounds.width + 5;
      y = bounds.y;
      if (panebounds.right > winbounds.width) {
        x = bounds.x - panebounds.width - 5;
      }
      if (panebounds.bottom > winbounds.height) {
        y = bounds.y + bounds.height - panebounds.height - 5;
      }
      pane.style['left'] = x + 'px';
      pane.style['top'] = y + 'px';
      pane.style['visibility'] = 'visible';
      if (redo) {
        setTimeout(() => { adjust(false); }, 10);
      }
    }
    setTimeout(() => { adjust(true); }, 60);

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
    KC_NO: true,
  };

  function updatePane() {
    const elements = document.elementsFromPoint(curX, curY);
    let match = null;
    if (curX === lastX && curY === lastY) return;
    lastX = curX;
    lastY = curY;
    const target = elements[0];
    for (const el of elements) {
      if (el === target || el.contains(target)) {
        if (el.matches('[data-key]')) {
          match = el;
          break;
        } else if (el.matches('[data-title]')) {
          match = el;
        } else if (el.matches('#floats') || el.matches('label')) {
          match = null;
          break;
        }
      } else {
        break;
      }
    }
    if (match !== keymatch) {
      keymatch = match;
      if (match && match.dataset) {
        const k = match.dataset.key;
        if (k && (showFor[k] || !k.match(/^KC_/))) {
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

  // setInterval(updatePane, 200);

  document.onmousemove = (evt) => {
    curX = evt.clientX;
    curY = evt.clientY;
    updatePane();
  };
});
