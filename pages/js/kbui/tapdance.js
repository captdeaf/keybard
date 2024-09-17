////////////////////////////////////
//
//  Tapdances: Parsing, Editing/Creating.
//
////////////////////////////////////

const TAPDANCE = {
  // Given a tdid and tapdance (KBINFO.tapdances[tdid], really),
  // return a description to render on a key.
  describe: null,
  // Update changes between BASE_KBINFO and KBINFO.
  updateAll: null,
  // Find and return the first empty tapdance, for assignment.
  findEmpty: null,
  // Edit a tapdance, intended for "find, edit & bind"
  edit: null,
};

addInitializer('load', () => {
  ////////////////////////////////////
  //
  //  Describe a tapdance. Return TD(id) at least, possibly its
  //  characters.
  //
  ////////////////////////////////////
  function describeTapdance(tdid, tapdance) {
    const ret = ['TD(' + tdid + ')'];
    for (const k of ['tap', 'hold', 'doubletap', 'taphold']) {
      if (tapdance[k]) ret.push(KEY.parseDesc(tapdance[k]).str);
    }
    return ret.join(' ');
  }
  TAPDANCE.describe = describeTapdance;

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

  let editID = 0;

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
        'data-bound': 'tapdance',
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

    editID = tapdance.tdid;

    floater.style['display'] = 'flex';
  }

  ////////////////////////////////////
  //
  //  Populate the tapdance with what's inside it.
  //
  ////////////////////////////////////
  ACTION.onclick('#float-tapdance-save', (target) => {
    const tapdance = KBINFO.tapdances[editID];
    for (const [type, el] of Object.entries(tdtypemap)) {
      tapdance[type] = divs[type].dataset.key;
    }
    tapdance['tapms'] = parseInt(divs['tapms'].value);
    get('#tapdance-' + editID).classList.add('changed');
    CHANGES.queue('TD' + editID, () => {
      KBAPI.updateTapdance(editID);
    });
    KEYUI.refreshAllKeys();
  });

  addInitializer('connected', () => {
    ////////////////////////////////////
    //
    //  Binding: This is kinda done a little backwards. The user clicks a key in
    //  the tapdance to rebind, we get that event. Then the user clicks a key in
    //  the sample boards. That gets redirected to us via ACTION.trigger.
    //
    ////////////////////////////////////
    ACTION.onclick('[data-bound="tapdance"]', (target) => {
      ACTION.selectKey(target);
      ACTION.on('bind', (keystr) => {
        target.dataset.key = keystr;
        KEYUI.refreshKey(target);
        // Clear key selection.
        ACTION.selectKey();
      });
    });

    ////////////////////////////////////
    //
    //  Add a tapdance button to the tapdance board for each tapdance the kb
    //  supports.
    //
    ////////////////////////////////////
    const tapdanceBoard = get('#tapdance-board');
    const rows = [];
    for (let tdid = 0; tdid < KBINFO.tapdance_count; tdid++) {
      const rowid = Math.floor(tdid/10);
      const keytpl = EL('div', {
        id: "tapdance-" + tdid,
        'data-tdid': tdid,
        'data-bind': 'key',
        'data-key': 'TD(' + tdid + ')',
        class: "key kb-key key-tapdance",
      }, '');
      keytpl.oncontextmenu = (ev) => {
        renderTapdanceFloat(KBINFO.tapdances[tdid]);
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

  ////////////////////////////////////
  //
  //  For context-menu tapdance creation.
  //
  ////////////////////////////////////
  TAPDANCE.findEmpty = () => {
    for (let tdid = 0; tdid < KBINFO.tapdance_count; tdid++) {
      console.log('checking', tdid);
      const td = KBINFO.tapdances[tdid];
      if ((td.tap === 'KC_NO') &&
          (td.hold === 'KC_NO') &&
          (td.taphold === 'KC_NO') &&
          (td.doubletap === 'KC_NO')) {
        return tdid;
      }
    }
    return -1;
  };

  TAPDANCE.edit = (tdid) => {
    renderTapdanceFloat(KBINFO.tapdances[tdid]);
  };

  ////////////////////////////////////
  //
  //  Called when a file is uploaded or a device is connected after a file
  //  is uploaded. Mark and queue all changes.
  //
  ////////////////////////////////////
  TAPDANCE.updateAll = () => {
    for (let tdid = 0; tdid < KBINFO.tapdance_count; tdid++) {
      const td = KBINFO.tapdances[tdid];
      const btd = BASE_KBINFO.tapdances[tdid];
      for (const i of ['tap', 'hold', 'doubletap', 'taphold', 'tapms']) {
        if (td[i] !== btd[i]) {
          get('#tapdance-' + tdid).classList.add('changed');
          CHANGES.queue('TD' + tdid, () => {
            KBAPI.updateTapdance(tdid);
          });
          break;
        }
      }
    }
  };
});
