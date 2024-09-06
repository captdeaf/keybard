////////////////////////////////////
//
//  Tapdances: Parsing, Editing/Creating.
//
////////////////////////////////////

const TAPDANCE = {};

addInitializer('load', () => {
  ////////////////////////////////////
  //
  //  Describe a tapdance. Return TD(id) at least, possibly its
  //  characters.
  //
  ////////////////////////////////////
  function describeTapdance(tdid, tapdance) {
    console.log('describing', tdid, tapdance);
    const ret = ['TD(' + tdid + ')'];
    for (const k of ['tap', 'hold', 'doubletap', 'taphold']) {
      if (tapdance[k]) ret.push(KEY.parseDesc(tapdance[k]).str);
    }
    return ret.join(' ');
  }

  const floater = get('#float-tapdance');
  const floatname = get('#float-tapdance-name');
  const savebutton = get('#float-tapdance-save');

  const tdtypemap = {
    tap: get('#float-tapdance-tap'),
    hold: get('#float-tapdance-hold'),
    doubletap: get('#float-tapdance-doubletap'),
    taphold: get('#float-tapdance-taphold'),
  }
  const tapms = get('#float-tapdance-tapms');

  const divs = {};

  let editTD = 0;

  ////////////////////////////////////
  //
  //  Pop up the tapdance dialog, with its contents replaced w/ current tapdance
  //  (or empty if no tapdance value).
  //
  ////////////////////////////////////
  function renderTapdanceFloat(tapdance) {
    floatname.innerText = 'TD(' + tapdance.tdid + ')';

    for (const [type, el] of Object.entries(tdtypemap)) {
      el.innerHTML = '';
      divs[type] = EL('div', {
        'data-tapdance-type': type,
        'data-div-bound': 'tapdance',
        'data-key': tapdance[type],
        class: 'key',
      });
      appendChildren(el, divs[type]);
    }
    KEYUI.refreshAllKeys();

    divs['tapms'] = EL('input', {
      type: 'number',
      min: '0',
      max: '5000',
      'data-tapdance-type': 'tapms',
      'data-tapdance-bound': tapdance.tapms,
      'value': tapdance.tapms,
    });

    tapms.innerHTML = '';
    appendChildren(tapms, divs['tapms']);

    editTD = tapdance.tdid;

    floater.style['display'] = 'flex';
  }

  ////////////////////////////////////
  //
  //  Populate the tapdance with what's inside it.
  //
  ////////////////////////////////////
  ACTION.onclick('#float-tapdance-save', (target) => {
    const tapdance = KBINFO.tapdances[editTD];
    for (const [type, el] of Object.entries(tdtypemap)) {
      tapdance[type] = divs[type].dataset.key;
    }
    tapdance['tapms'] = parseInt(divs['tapms'].value);
    KEYUI.refreshAllKeys();
  });

  ////////////////////////////////////
  //
  //  Add a tapdance button to the tapdance board for each tapdance the kb supports.
  //
  ////////////////////////////////////
  TAPDANCE.describe = describeTapdance;
  addInitializer('connected', () => {
    const tapdanceBoard = get('#tapdance-board');
    const rows = [];
    for (let idx = 0; idx < KBINFO.tapdance_count; idx++) {
      const mid = idx;
      const rowid = Math.floor(mid/10);
      const keytpl = EL('div', {
        id: "tapdance-" + mid,
        'data-bind': 'key',
        'data-key': 'TD(' + mid + ')',
        class: "key kb-key key-tapdance",
      }, '');
      keytpl.oncontextmenu = (ev) => {
        renderTapdanceFloat(KBINFO.tapdances[mid]);
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
                      "To edit tapdances, R-click one.");
    appendChildren(tapdanceBoard, EL('div', {class: 'kb-group'}, header, ...rowEls));
  });
});
