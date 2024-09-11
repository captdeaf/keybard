////////////////////////////////////
//
//  QMK Settings - Viewing and editing.
//
////////////////////////////////////

const QMKSETTINGS = {
  // Select a given tab.
  selectTab: null,
  // Update changes between BASE_KBINFO and KBINFO.
  updateAll: null,
}

addInitializer('connected', () => {
  const tabholder = get('#qmk-tabs');

  ////////////////////////////////////
  //
  //  Get and set values in QSIDs.
  //
  ////////////////////////////////////
  function qmkGetBoolean(qfield, kbinfo) {
    return (kbinfo.settings[qfield.qsid] & (1 << qfield.bit)) !== 0;
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
      KBAPI.updateQMKSetting(qfield.qsid);
    });
  }

  function qmkGetInteger(qfield, kbinfo) {
    return kbinfo.settings[qfield.qsid];
  }

  function qmkSetInteger(qfield, val) {
    KBINFO.settings[qfield.qsid] = val;
    for (const el of getAll(`[data-qsid="${qfield.qsid}"]`)) {
      el.classList.add('changed');
    }
    CHANGES.queue('qmk' + qfield.qsid, () => {
      KBAPI.updateQMKSetting(qfield.qsid);
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
      if (qmkGetBoolean(qfield, KBINFO)) {
        body.checked = true;
      }
      body.onclick = () => {
        if (qmkGetBoolean(qfield, KBINFO)) {
          qmkSetBoolean(qfield, 0);
          body.checked = false;
        } else {
          qmkSetBoolean(qfield, 1);
          body.checked = true;
        }
      };
    } else if (qfield.type === 'integer') {
      const val = qmkGetInteger(qfield, KBINFO);
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
  function renderAllTabs() {
    tabholder.innerHTML = '';
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
    QMKSETTINGS.selectTab = (tabid) => {
      tabBodies[selectedTab].style.display = 'none';
      tabs[selectedTab].classList.remove('selected');
      selectedTab = tabid;
      tabBodies[selectedTab].style.display = 'block';
      tabs[selectedTab].classList.add('selected');
    }

    QMKSETTINGS.selectTab(0);
  }
  ACTION.onclick('.qmk-tab', (target) => {
    QMKSETTINGS.selectTab(target.dataset.tabid);
  });

  renderAllTabs();

  ////////////////////////////////////
  //
  //  Called when a file is uploaded or a device is connected after a file
  //  is uploaded. Mark and queue all changes.
  //
  ////////////////////////////////////
  QMKSETTINGS.updateAll = () => {
    renderAllTabs();
    for (const qsid in KBINFO.settings) {
      if (KBINFO.settings[qsid] !== BASE_KBINFO.settings[qsid]) {
        for (const el of getAll(`[data-qsid="${qsid}"]`)) {
          el.classList.add('changed');
        }
        CHANGES.queue('qmk' + qsid, () => {
          KBAPI.updateQMKSetting(qsid);
        });
      }
    }
  };
});
