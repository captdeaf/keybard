// site.js
//
// Basic UI management, just for the site as a whole, not for the keyboard
// interaction.

const SETTINGS = {};

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

  // The 'about' / config window.
  const desc = get('#about');
  const toggles = getAll('.toggle-about');

  const descdisplay = desc.style['display'];

  const toggleAbout = addToggle('about-shown', false, function(enabled) {
    if (enabled) {
      desc.style['display'] = 'none';
    } else {
      desc.style['display'] = descdisplay;
    }
  });

  for (const toggle of toggles) {
    toggle.onclick = toggleAbout;
  }

  // About has config options that are checkboxes. Add
  getAll('input[type="checkbox"][data-toggle]').map((el) => {
    el.onchange = addToggle(el.id, false,
      (enabled) => {
        SETTINGS[el.dataset.toggle] = enabled;
        el.checked = enabled;

        // Extra actions, sometimes:
        if (el.dataset.extra === 'hideCommit') {
          const commit = get('#commit')
          if (enabled) {
            commit.style['display'] = 'none';
          } else {
            commit.style['display'] = 'inline-block';
          }
        }
      }
    );
  });

  // Clicking a .close hides its parent that has .closeable
  ACTION.onclick('.close', (target) => {
    const closeable = getParent(target, '.closeable');
    closeable.style['display'] = 'none';
  });

  // COMMIT CHANGES
  get('#commit').onclick = () => {
    CHANGES.commit();
  };
});
