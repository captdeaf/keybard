////////////////////////////////////
//
//  Macros: Parsing, Recording, Building, Saving, Pushing.
//
////////////////////////////////////

const MACROS = {};

addInitializer('load', () => {
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
            (cur[idx-1].type === 'keydown') && (cur[idx].type === 'keyup')) {
          squished[squished.length - 1] = {type: 'tap', value: cur[idx].value};
          continue;
        }
      }
      squished.push(cur[idx]);
    }
    // Convert all single-character taps to texts.
    for (const act of squished) {
      if ((act.type === 'keydown') && (act.str.length === 1)) {
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
        actions.push({type: 'keydown', value: rawkey, str: key});
        actions = squishActions(actions);
        renderMacroFloat(macro, actions);
      },
      keyup: (key, rawkey) => {
        if (key.length !== 1) {
          actions.push({type: 'keyup', value: rawkey, str: key});
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
      } else if (act === 'tap' || act === 'keydown' || act === 'keyup') {
        actions.push({
          type: act,
          value: el.dataset.value,
        })
      }
    }
    return actions;
  }

  function wrapAction(desc, ...args) {
    const ret = {
      el: EL(...args),
    };
    const remove = EL('div', {class: 'removeMacro'}, 'X');
    ret.wrap = EL('div', {class: 'macro-action'}, [
      EL('div', {class: 'describeMacro'}, desc),
      remove,
      ret.el,
    ]);
    remove.onclick = () => {
      ret.wrap.replaceWith('');
    };
    return ret;
  };

  function renderAction(action) {
    if (action.type === 'text') {
      return wrapAction('text', 'input',
                {
                  type: 'text',
                  value: action.value,
                  placeholder: 'text'
                },
                '');
    }
    if (action.type === 'keydown') {
      return wrapAction('keydown', 'div',
                        {class: 'key'},
                        '');
    }
    if (action.type === 'tap') {
      return wrapAction('tap', 'div',
                        {class: 'key'},
                        '');
    }
    if (action.type === 'keyup') {
      return wrapAction('keyup', 'div',
                        {class: 'key'},
                        '');
    }
    if (action.type === 'delay') {
      return wrapAction('text', 'input',
                {
                  type: 'text',
                  value: action.value,
                  placeholder: 'text'
                },
                '');
    }
  }

  function renderMacroActions(macro, actions) {
    const children = [];

    for (const action of actions) {
      const wrap = renderAction(action);
      children.push(wrap.wrap);
      if (action.type === 'keydown' ||
          action.type === 'keyup' ||
          action.type === 'tap') {
        // TODO:  Rebind
      }
    }
    const floatbody = get('#float-macro-render');
    floatbody.innerHTML = '';
    appendChildren(floatbody, ...children);
  }

  function renderMacroFloat(macro, actions) {
    if (!actions) actions = macro.actions;
    const floater = get('#float-macro');

    for (const button of getAll('[data-add]', floater)) {
      button.onclick = function() {
        actions.push({
          type: button.dataset.add,
          value: '',
        });
        renderMacroActions(macro, actions);
      }
    }


    get('.save', floater).onclick = () => {
      macro.actions = getMacroActions();
      KEYUI.refreshAllKeys();
    }

    floater.style['display'] = 'flex';
  }

  MACROS.describe = describeMacro;
  addInitializer('connected', () => {
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
  });
});
