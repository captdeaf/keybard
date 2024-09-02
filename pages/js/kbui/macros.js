////////////////////////////////////
//
//  Macros: Parsing, Recording, Building, Saving, Pushing.
//
////////////////////////////////////

const MACROS = (function setupMacros() {
  function describeMacro(mid, macro) {
    const texts = [];
    const otherwise = [];
    for (const act of macro.actions) {
      if (act.type === 'text') {
        texts.push(act.value);
      } else {
        otherwise.push(act.type + ' ' + act.value);
      }
    }
    if (texts.length > 0) {
      return "M" + mid + ': ' + texts.join(' ');
    } else if (otherwise.length > 0) {
      return "M" + mid + ': ' + otherwise.join(' ');
    } else {
      return "M" + mid;
    }
  }

  function squishMacro(macro) {
    // Recording starts as a series of purely keydown and keyups.
    if (macro.actions.length < 2) return;
    const squished = [];
    const cur = macro.actions;
    if (cur.length > 0) {
      squished[0] = cur[0];
    }
    for (let idx = 1; idx < cur.length; idx++) {
      if (idx > 0)  {
        if ((cur[idx-1][1] === cur[idx][1]) &&
            (cur[idx-1][0] === 'down') && (cur[idx][0] === 'up')) {
          squished[squished.length - 1] = ['tap', cur[idx][1], cur[idx][2]];
          continue;
        }
      }
      squished.push(cur[idx]);
    }
    // Convert all single-character taps to texts.
    for (const act of squished) {
      if ((act[0] === 'tap') && (act[1].length === 1)) {
        act[0] = 'text';
      }
    }
    // Combine taps of single keys.
    const texted = [];
    let sidx = 0;
    while (sidx < squished.length) {
      if (squished[sidx][0] !== 'text') {
        texted.push(squished[sidx]);
        sidx++;
      } else {
        let soff = sidx;
        const texts = [];
        while ((soff < squished.length) &&
               (squished[soff][0] === 'text')) {
          texts.push(squished[soff][1]);
          soff++;
        }
        texted.push(['text', texts.join(''), texts.join('')]);

        sidx = soff;
      }
    }
    macro.actions = texted;
  }

  function startMacroRecording(macro) {
    macro.actions = [];
    renderMacroFloat(macro);
    ACTION.start({
      keydown: (key, rawkey) => {
        macro.actions.push(['down', key, rawkey]);
        squishMacro(macro);
        renderMacroFloat(macro);
      },
      keyup: (key, rawkey) => {
        macro.actions.push(['up', key, rawkey]);
        squishMacro(macro);
        renderMacroFloat(macro);
      },
    });
  }

  function renderMacroFloat(macro) {
    const rowkeys = [];
    rowkeys.push(EL('div', {class: 'kbdesc'}, '<span style="color: blue">Macro M' + macro.mid + ':</span>'));
    for (const action of macro.actions) {
      if (action[0] === 'text') {
        rowkeys.push(EL('div', {class: "kbdesc"}, action[1]));
      } else if (action[0] === 'tap') {
        rowkeys.push(EL('div', {class: 'key kb-key key-tap key-macro'},
                        action[1]));
      } else if (action[0] === 'down') {
        rowkeys.push(EL('div', {class: 'key kb-key key-down key-macro'},
                        'down\n' + action[1]));
      } else if (action[0] === 'up') {
        rowkeys.push(EL('div', {class: 'key kb-key key-up key-macro'},
                       action[1] + '\nup'));
      } else if (action[0] === 'delay') {
        rowkeys.push(EL('div', {class: 'key key-sleep key-macro'},
                        'sleep\n' + action[1] + 'ms'));
      } else {
        console.log('wtf', action);
      }
    }
    const floater = get('#float-macro');
    const floatbody = get('#float-macro-render');

    const recordbutton = get('.record', floater);

    recordbutton.onclick = () => {
      startMacroRecording(macro);
    }

    floatbody.innerHTML = '';
    appendChildren(floatbody, ...rowkeys);
    floater.style['display'] = 'flex';
  }
  return {
    describe: describeMacro,
    renderBoard(kbinfo) {
      const macroBoard = get('#macro-board');
      const rows = [];
      for (let idx = 0; idx < kbinfo.macro_count; idx++) {
        const mid = idx;
        const rowid = Math.floor(mid/10);
        const keytpl = EL('div', {
          id: "macro-" + mid,
          'data-bind': 'key',
          'data-key': 'M' + mid,
          class: "key kb-key key-macro",
        }, '');
        keytpl.oncontextmenu = (ev) => {
          renderMacroFloat(kbinfo.macros[mid]);
          ev.preventDefault();
          return false;
        }
        if (!rows[rowid]) {rows[rowid] = [];}
        rows[rowid].push(keytpl);
      }
      const rowEls = [];
      for (const row of rows) {
        const rowEl = EL('div', {class: 'kb-row'});
        appendChildren(rowEl, ...row);
        rowEls.push(rowEl);
      }
      const header = EL('div', {class: 'macro-help'},
                        "To edit macros, R-click one.");
      appendChildren(macroBoard, EL('div', {class: 'kb-group'}, header, ...rowEls));
    },
    refreshBoard(kbinfo) {
      const macros = kbinfo.macros;
      for (let mid = 0; mid < macros.length; mid++) {
        const macro = macros[mid];
        const el = get('#macro-' + mid);
        const desc = describeMacro(mid, macro);
        el.innerHTML = desc.slice(0, 10);
        el.setAttribute('title', desc);
      }
    },
  };
})();

addInitializer('ui', (kbinfo) => {
  MACROS.renderBoard(kbinfo);
  MACROS.refreshBoard(kbinfo);
});
