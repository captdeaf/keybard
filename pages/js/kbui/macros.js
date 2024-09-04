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

  function squishActions(actions) {
    // Recording starts as a series of purely keydown and keyups.
    if (actions.length < 2) return actions;
    const squished = [];
    const cur = actions;
    if (cur.length > 0) {
      squished[0] = cur[0];
    }
    for (let idx = 1; idx < cur.length; idx++) {
      if (idx > 0)  {
        if ((cur[idx-1].value === cur[idx].value) &&
            (cur[idx-1].type === 'down') && (cur[idx].type === 'up')) {
          squished[squished.length - 1] = {type: 'tap', value: cur[idx].value};
          continue;
        }
      }
      squished.push(cur[idx]);
    }
    // Convert all single-character taps to texts.
    for (const act of squished) {
      if ((act.type === 'down') && (act.str.length === 1)) {
        act.type = 'text';
      }
    }
    // Combine taps of single keys.
    const texted = [];
    let sidx = 0;
    while (sidx < squished.length) {
      if (squished[sidx].type !== 'text') {
        texted.push(squished[sidx]);
        sidx++;
      } else {
        let soff = sidx;
        const texts = [];
        while ((soff < squished.length) &&
               (squished[soff].type === 'text')) {
          texts.push(squished[soff].str);
          soff++;
        }
        const str = texts.join('');
        texted.push({type: 'text', value: str, str: str});

        sidx = soff;
      }
    }
    return texted;
  }

  function startMacroRecording(macro) {
    let actions = [];
    renderMacroFloat(macro);
    ACTION.start({
      keydown: (key, rawkey) => {
        actions.push({type: 'down', value: rawkey, str: key});
        actions = squishActions(actions);
        renderMacroFloat(macro, actions);
      },
      keyup: (key, rawkey) => {
        if (key.length !== 1) {
          actions.push({type: 'up', value: rawkey, str: key});
          actions = squishActions(actions);
          renderMacroFloat(macro, actions);
        }
      },
      end: () => {
        KEYUI.refreshAllKeys();
        CHANGES.queue('Update macro ' + macro.id, () => {
          KBAPI.updateMacros();
        });
      },
    });
  }

  function getMacroActions() {
    const parentEl = get('#float-macro-render')
    const actionEls = findAll('[data-action]', parentEl);
    const actions = [];
    for (const el of actionEls) {
      const act = el.dataset.action;
      if (act === 'text') {
        const inp = get('input', el);
        actions.push({
          type: act,
          value: inp.value,
        })
      } else if (act === 'tap' || act === 'down' || act === 'up') {
        actions.push({
          type: act,
          value: el.dataset.value,
        })
      }
    }
    return actions;
  }

  function renderMacroFloat(macro, actions) {
    // Editable action: Add an 'X' to it, basically.
    if (!actions) actions = macro.actions;
    function EA(...args) {
      const remover = EL('div', {class: 'removeMacro'}, 'X');
      const children = [
        remover,
        EL(...args),
      ];
      const container = EL('div', {class: 'macro-action'}, children);
      remover.onclick = () => {
        container.replaceWith('');
        macro.actions = renderMacroFloat(macro, getMacroActions());
      };
      return container;
    }
    const rowkeys = [];
    rowkeys.push(EL('div', {class: 'kbdesc'}, '<span style="color: blue">Macro M' + macro.mid + ':</span>'));
    for (const action of actions) {
      const classes = 'key kb-key key-macro key-' + action.type;
      if (action.type === 'text') {
        rowkeys.push(EA('input', {type: 'text', 'data-action': 'text', value: action.value, class: "kbdesc"}));
      } else if (action.type === 'tap') {
        rowkeys.push(EA('div', {class: classes, 'data-action': 'tap', 'data-value': action.value},
                        action.value));
      } else if (action.type === 'down') {
        rowkeys.push(EA('div', {class: classes, 'data-action': 'down', 'data-value': action.value},
                        'down\n' + action.value));
      } else if (action.type === 'up') {
        rowkeys.push(EA('div', {class: classes, 'data-action': 'up', 'data-value': action.value},
                       action.value + '\nup'));
      } else if (action.type === 'delay') {
        rowkeys.push(EA('div', {class: classes, 'data-action': 'delay'},
                        'sleep\n' + action.value + 'ms'));
      } else {
        console.log('wtf', action);
      }
    }
    const floater = get('#float-macro');
    const floatbody = get('#float-macro-render');
    get('.save', floater).onclick = () => {
      macro.actions = getMacroActions();
      KEYUI.refreshAllKeys();
    }

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
    renderBoard() {
      const macroBoard = get('#macro-board');
      const rows = [];
      for (let idx = 0; idx < KBINFO.macro_count; idx++) {
        const mid = idx;
        const rowid = Math.floor(mid/10);
        const keytpl = EL('div', {
          id: "macro-" + mid,
          'data-bind': 'key',
          'data-key': 'M' + mid,
          class: "key kb-key key-macro",
        }, '');
        keytpl.oncontextmenu = (ev) => {
          renderMacroFloat(KBINFO.macros[mid]);
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
    refreshBoard() {
      const macros = KBINFO.macros;
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

addInitializer('ui', () => {
  MACROS.renderBoard();
  MACROS.refreshBoard();
});
