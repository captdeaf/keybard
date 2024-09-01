// baseui.js
//
// Basic UI management, just for the site as a whole, not for features.

const UI = (function() {
  return {
    addToggle(attr, stateKey, defaultState, callback) {
      // checkbox.onchange = addToggle('checked',
      //                               'advancedSearch', 
      //                               false,
      //                               function(enabled) {
      //                                 if (enabled) {
      //                                   ...
      //                                 }
      //                               });
      //  if attr is a function, it's called instead of element[attr] boolean.
      //  if attr is undefined, it's a toggle.
      let state = getSaved(stateKey, '' + defaultState) === 'true';

      let checkElement = function(target) {
        return target[attr];
      };
      if (attr === undefined) {
        checkElement = function() {
          return !state;
        };
      } else if (typeof(attr) === typeof(checkElement)) {
        checkElement = attr;
      }

      if (callback) callback(state);

      return function(evt) {
        state = checkElement(evt.target);
        setSaved(stateKey, "" + state);
        if (callback) callback(state);
      }
    },

    setup() {
      function setupAbout() {
        const desc = get('#about');
        const toggles = getAll('.toggle-about');

        const descdisplay = desc.style.display;

        const toggleAbout = UI.addToggle(undefined, 'about-shown', false, function(enabled) {
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
        function createToggle(section) {
          // We should receive a section.
          let toggler = section.querySelector(".toggler");
          let paras = section.querySelectorAll("p");

          let showSection = false;
          if (section.dataset['show'] === 'true') {
            showSection = true;
          }

          toggler.onclick = UI.addToggle(undefined, section.id, showSection, function(enabled) {
            if (enabled) {
              for (const p of paras) {
                p.style.display = 'block';
              }
            } else {
              for (const p of paras) {
                p.style.display = 'none';
              }
            }
          });
        }
      }

      function setupButtons() {
        get('#commit').onclick = () => {
          Vial.commitChanges();
        };
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
