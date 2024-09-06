////////////////////////////////////
//
//  Macros: Parsing, Editing/Creating.
//
////////////////////////////////////

const MACROS = {};

addInitializer('load', () => {
  ////////////////////////////////////
  //
  //  Describe a macro. If there's any text in the macro, then just use that.
  //  If no text, then return stringified version of keys.
  //
  ////////////////////////////////////
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

  ////////////////////////////////////
  //
  //  Wrap a key action inside an element that can remove it,
  //  and TBD: swap it w/ other elements, etc.
  //
  ////////////////////////////////////
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
                             'data-macro': type,
                             'data-div-bound': 'macro',
                           },
                           '');
    KEYUI.refreshKey(ret.el);
    return ret;
  }

  ////////////////////////////////////
  //
  //  Generate elements for the individual actions.
  //  text: input type=text
  //  delay: input type=text 
  //
  ////////////////////////////////////
  function renderAction(action) {
    if (action.type === 'text') {
      return wrapAction('text', 'input',
                {
                  'data-macro': action.type,
                  type: 'text',
                  value: action.value,
                  style: {width: '7em', resize: 'horizontal'},
                  placeholder: 'text'
                },
                '');
    }
    if (action.type === 'delay') {
      return wrapAction('delay', 'input',
                {
                  'data-macro': action.type,
                  type: 'number',
                  maxlength: 5,
                  style: {width: '5em'},
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
  const savebutton = get('#save-macro');

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
    floatname.innerHTML = 'M' + macro.mid;

    savebutton.dataset.mid = macro.mid;

    renderMacroActions(macro, actions);
    floater.style['display'] = 'flex';
  }

  ACTION.onclick('[data-macro-add]', (target) => {
    appendChildren(floatbody, renderAction({
        type: target.dataset.macroAdd,
        value: target.dataset.value,
      }).wrap
    );
  });

  ////////////////////////////////////
  //
  //  Read the elements of floatbody, converting them into a set of actions.
  //  If any are KC_NO (0), then log and ignore.
  //
  ////////////////////////////////////
  function buildActionsFromFloat() {
    const actions = [];
    const children = findAll('[data-macro]', floatbody);

    for (const kid of children) {
      if (kid.dataset.macro === 'text') {
        actions.push({type: 'text', value: kid.value});
      } else if (kid.dataset.macro === 'delay') {
        // TODO: validation?
        actions.push({type: 'delay', value: parseInt(kid.value)});
      } else {
        if (kid.dataset.key !== 'KC_NO') {
          actions.push({type: kid.dataset.macro, value: kid.dataset.key});
        } else {
          console.log("Ignoring KC_NO in macro");
        }
      }
    }
    return actions;
  }

  ////////////////////////////////////
  //
  //  Populate the macro with what's inside it.
  //
  ////////////////////////////////////
  ACTION.onclick('#save-macro', (target) => {
    // Save the macro.
    const macro = KBINFO.macros[savebutton.dataset.mid];
    macro.actions = buildActionsFromFloat();
    floater.style['display'] = 'none';
    CHANGES.queue('macro', KBAPI.updateMacros);
    KEYUI.refreshAllKeys();
  });

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
    const header = EL('div', {class: 'board-help'},
                      "To edit macros, R-click one.");
    appendChildren(macroBoard, EL('div', {class: 'kb-group'}, header, ...rowEls));
  });
});
