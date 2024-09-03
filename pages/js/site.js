// site.js
//
// Basic UI management, just for the site as a whole, not for the keyboard
// interaction.

const SETTINGS = {};

const Site = (function() {
  return {
    ////////////////////////////////////
    //
    //  Nodelines: Mostly kinda junk stuff.
    //
    ////////////////////////////////////
    addToggle(stateKey, defaultState, callback) {
      // checkbox.onchange = addToggle('savedkeyname', 
      //                               false,
      //                               function(enabled) {
      //                                 if (enabled) {
      //                                   ...
      //                                 }
      //                               });
      let state = getSaved(stateKey, '' + defaultState) === 'true';

      if (callback) callback(state);

      return function(evt) {
        state = !state;
        setSaved(stateKey, "" + state);
        if (callback) callback(state);
      }
    },

    init() {
      function setupAbout() {
        const desc = get('#about');
        const toggles = getAll('.toggle-about');

        const descdisplay = desc.style.display;

        const toggleAbout = Site.addToggle('about-shown', false, function(enabled) {
          if (enabled) {
            desc.style.display = 'none';
          } else {
            desc.style.display = descdisplay;
          }
        });

        for (const toggle of toggles) {
          toggle.onclick = toggleAbout;
        }
      }

      function buildSelect(element, options) {
        element.innerHTML = '';
        let names = [];
        const map = {};
        for (const [shortname, dispname] of Object.entries(options)) {
          names.push(dispname)
          map[dispname] = shortname;
        }

        names = names.sort();
        for (const dispname of names) {
          let opt = document.createElement('option');
          opt.setAttribute('value', map[dispname]);
          opt.innerText = dispname;
          element.appendChild(opt);
        }
      }

      function setupToggled() {
        getAll('input[type="checkbox"][data-toggle]').map((el) => {
          el.onchange = Site.addToggle(el.id, false,
            (enabled) => {
              SETTINGS[el.dataset.toggle] = enabled;
              el.checked = enabled;

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
      }

      function setupButtons() {
        // COMMIT CHANGES
        get('#commit').onclick = () => {
          CHANGES.commit();
        };

        // close() on dialogs.
        for (const closer of getAll('.close')) {
          closer.onclick = () => {
            const closable = findParent(closer, '.closeable');
            closable.style['display'] = 'none';
          }
        }
      }

      setupAbout();
      setupToggled();
      setupButtons();
    },
  }
})();
