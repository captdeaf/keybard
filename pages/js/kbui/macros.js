////////////////////////////////////
//
//  Macros: Parsing, Editing/Creating.
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

  function wrapAction(desc, ...args) {
    const ret = {
      el: EL(...args),
    };
    const remove = EL('div', {class: 'remove-macro'}, 'X');
    ret.wrap = EL('div', {class: 'macro-action'}, [
      EL('div', {class: 'describe-macro'}, desc),
      remove,
      ret.el,
    ]);
    remove.onclick = () => {
      ret.wrap.replaceWith('');
    };
    return ret;
  };

  function wrapKeyAction(type, value) {
    const ret = wrapAction(type, 'div',
                           {
                             class: 'key key-' + type,
                             'data-key': value,
                           },
                           '');
    KEYUI.refreshKey(ret.el);
    return ret;
  }

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
    if (action.type === 'delay') {
      return wrapAction('text', 'input',
                {
                  type: 'text',
                  value: action.value,
                  placeholder: 'text'
                },
                '');
    }
    return wrapKeyAction(action.type, action.value);
  }

  const floater = get('#float-macro');
  const floatbody = get('#float-macro-render');
  const floatname = get('#float-macro-name');
  console.log("fb", floatbody);

  ////////////////////////////////////
  //
  //  (Re)render the macros, on first display, or on add/remove action.
  //
  ////////////////////////////////////
  function renderMacroActions(macro, actions) {
    floatbody.innerHTML = '';

    const children = [];
    for (const action of actions) {
      children.push(renderAction(action).wrap);
    }

    appendChildren(floatbody, children);
  }

  ////////////////////////////////////
  //
  //  Pop up the macro dialog, with its contents replaced w/ current macro
  //  (or empty if no macro value).
  //
  ////////////////////////////////////
  function renderMacroFloat(macro, actions) {
    if (!actions) actions = macro.actions;
    floatbody.innerHTML = '';
    floatname.innerHTML = 'M' + macro.mid;

    for (const button of getAll('[data-add]', floater)) {
      button.onclick = function() {
        actions.push({
          type: button.dataset.add,
          value: button.dataset.value,
        });
        renderMacroActions(macro, actions);
      }
    }

    renderMacroActions(macro, actions);
    floater.style['display'] = 'flex';
  }

  ////////////////////////////////////
  //
  //  Add a macro button to the macro board for each macro the kb supports.
  //
  ////////////////////////////////////
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
