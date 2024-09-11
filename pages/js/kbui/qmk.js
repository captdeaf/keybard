////////////////////////////////////
//
//  QMK Settings - Viewing and editing.
//
////////////////////////////////////
addInitializer('connected', () => {
  const tabholder = get('#qmk-tabs');

  ////////////////////////////////////
  //
  //  Get and set values in QSIDs.
  //
  ////////////////////////////////////
  function qmkGetBoolean(qfield) {
    return (KBINFO.settings[qfield.qsid] & (1 << qfield.bit)) !== 0;
  }

  function qmkSetBoolean(qfield, value) {
    if (value) {
      KBINFO.settings[qfield.qsid] |= (1 << qfield.bit);
    } else {
      KBINFO.settings[qfield.qsid] &= ~(1 << qfield.bit);
    }
    for (const el of getAll(`[data-qsid="${qfield.qsid}"]`)) {
      el.classList.add('changed');
    }
    CHANGES.queue('qmk' + qfield.qsid, () => {
      KBAPI.updateQMKSetting(qfield);
    });
  }

  function qmkGetInteger(qfield) {
    return KBINFO.settings[qfield.qsid];
  }

  function qmkSetInteger(qfield, val) {
    KBINFO.settings[qfield.qsid] = val;
    for (const el of getAll(`[data-qsid="${qfield.qsid}"]`)) {
      el.classList.add('changed');
    }
    CHANGES.queue('qmk' + qfield.qsid, () => {
      KBAPI.updateQMKSetting(qfield);
    });
  }

  ////////////////////////////////////
  //
  //  generate an input depending on qfield.
  //
  ////////////////////////////////////
  function generateOption(qfield) {
    let body;
    if (qfield.type === 'boolean') {
      body = EL('input', {type: 'checkbox'})
      if (qmkGetBoolean(qfield)) {
        body.checked = true;
      }
      body.onclick = () => {
        if (qmkGetBoolean(qfield)) {
          qmkSetBoolean(qfield, 0);
          body.checked = false;
        } else {
          qmkSetBoolean(qfield, 1);
          body.checked = true;
        }
      };
    } else if (qfield.type === 'integer') {
      const val = qmkGetInteger(qfield);
      const attrs = {
        type: 'number',
        min: qfield.min,
        max: qfield.max,
        value: val,
      };
      body = EL('input', attrs)
      body.onchange = () => {
        qmkSetInteger(qfield, body.value);
      };
    } else {
      console.log('Unknown qmk setting', qfield);
      body = '???';
    }
    return EL('div', {class: 'qmk-field-option'}, body);
  }

  ////////////////////////////////////
  //
  //  Populate the settings folder.
  //
  ////////////////////////////////////
  const tabs = [];
  let tabid = 0;
  for (const qtab of QMK_SETTINGS.tabs) {
    tabs.push(EL('div', {'data-tabid': tabid, class: 'qmk-tab'}, qtab.name));
    tabid++;
  }
  appendChildren(tabholder, EL('div', {class: 'qmk-head'}, tabs));
  const tabBodies = [];
  tabid = 0;
  for (const qtab of QMK_SETTINGS.tabs) {
    const fields = [];
    for (const qfield of qtab.fields) {
      const field = EL('label', {class: 'qmk-field', 'data-qsid': qfield.qsid}, [
        EL('div', {class: 'qmk-field-name'}, qfield.title),
        generateOption(qfield)
      ]);
      fields.push(field);
    }
    const tabBody = EL('div', {class: 'qmk-tab-contents'}, fields);
    tabBodies.push(tabBody);
    tabid++;
  }
  appendChildren(tabholder, EL('div', {class: 'qmk-body'}, tabBodies));

  let selectedTab = 0;
  // And add actions to switch tabs.
  function selectTab(tabid) {
    tabBodies[selectedTab].style.display = 'none';
    tabs[selectedTab].classList.remove('selected');
    selectedTab = tabid;
    tabBodies[selectedTab].style.display = 'block';
    tabs[selectedTab].classList.add('selected');
  }

  selectTab(0);

  ACTION.onclick('.qmk-tab', (target) => {
    selectTab(target.dataset.tabid);
  });
});
