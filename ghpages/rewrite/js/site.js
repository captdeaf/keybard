////////////////////////////////////
//
//  Basic UI management, just for the site as a whole, not for the keyboard
//  interaction.
//
////////////////////////////////////

const SETTINGS = {
  // Settings available.
  instant: false,
  playback: false,
  record: false,
};

addInitializer('load', () => {
  ////////////////////////////////////
  //
  //  addToggle: Returns a function that is attached as an event handler. When
  //  called, it flips state and calls [callback]. It also remembers its state
  //  (via stateKey), and calls [callback] on load.
  //
  // checkbox.onchange = addToggle('savedkeyname', 
  //                               false,
  //                               function(enabled) {});
  //
  ////////////////////////////////////
  function addToggle(stateKey, defaultState, callback) {
    let state = getSaved(stateKey, '' + defaultState) === 'true';

    if (callback) callback(state);

    return function(evt) {
      state = !state;
      setSaved(stateKey, "" + state);
      if (callback) callback(state);
    }
  }

  ////////////////////////////////////
  //
  //  Config options inside About (or elsewhere)
  //
  ////////////////////////////////////
  getAll('input[type="checkbox"][data-toggle]').map((el) => {
    el.onchange = addToggle(
      el.dataset.toggleName,
      el.dataset.default === 'true',
      (enabled) => {
        SETTINGS[el.dataset.toggle] = enabled;
        el.checked = enabled;

        // Extra actions, sometimes:
        if (el.dataset.extra === 'hideCommit') {
          const commit = get('#commit')
          if (enabled) {
            commit.style['display'] = 'none';
            CHANGES.commit();
          } else {
            commit.style['display'] = 'inline-block';
          }
        }
      }
    );
  });

  ////////////////////////////////////
  //
  //  Tips for using keybard.
  //
  ////////////////////////////////////
  const tipcontainer = get('#float-tips');
  const alltips = getAll('#tiptip .tip');
  const tipcount = alltips.length;
  const TIPS = {
    idx: 0,
    pick: (idx) => {
      TIPS.idx = idx;
      for (const tip of alltips) {
        tip.style['display'] = 'none';
      }
      alltips[idx].style['display'] = 'block';
    },
    show: () => {
      setSaved('tips', 'show');
      ACTION.showFloat(tipcontainer);
    },
    hide: () => {
      setSaved('tips', 'hide');
      ACTION.closeFloats();
    },
    prev: () => {
      let idx = TIPS.idx - 1;
      if (idx < 0) {
        idx = tipcount - 1;
      }
      TIPS.pick(idx);
    },
    next: () => {
      let idx = TIPS.idx + 1;
      if (idx >= tipcount) {
        idx = 0;
      }
      TIPS.pick(idx);
    },
  };

  TIPS.pick(Math.floor(Math.random() * tipcount));
  if (getSaved('tips', 'show') === 'show') {
    TIPS.show();
  }

  ACTION.onclick('[data-tip]', (el) => {
    TIPS[el.dataset.tip]();
  });

  ////////////////////////////////////
  //
  //  Basic dialog and window interactions.
  //
  ////////////////////////////////////
  // Clicking a .close hides its parent that has .closeable
  ACTION.onclick('.close', (target) => {
    ACTION.closeFloats();
  });

  // Main container selection: mainboard, combos, key overrides.
  const allTabs = getAll('.main-select');
  const allContainers = getAll('.main-container');

  function selectTab(target) {
    for (const tab of allTabs) {
      if (tab.dataset.target === target) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    }
    for (const container of allContainers) {
      if (container.id === target) {
        container.style.display = 'flex';
      } else {
        container.style.display = 'none';
      }
    }
    setSaved('main-container', target);
  }
  ACTION.onclick('[data-mainboard]', (target) => {
    ACTION.selectKey();
    selectTab(target.dataset.mainboard);
  });

  selectTab(getSaved('main-container', 'mainboard-container'));

  // Toggle a float between visible and not.
  const openFloats = {};
  ACTION.onclick('[data-open]', (target) => {
    if (!target.classList.contains('connect-enable') || CONNECTED) {
      const floater = get(target.dataset.open);
      ACTION.showFloat(floater);
    }
  });
  
  ////////////////////////////////////
  //
  //  Commit all changes.
  //
  ////////////////////////////////////
  get('#commit').onclick = () => {
    CHANGES.commit();
  };

});
