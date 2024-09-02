// site.js
//
// Basic UI management, just for the site as a whole, not for the keyboard
// interaction.


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
        function createToggle(section) {
          // We should receive a section.
          let toggler = section.querySelector(".toggler");
          let paras = section.querySelectorAll("p");

          let showSection = false;
          if (section.dataset['show'] === 'true') {
            showSection = true;
          }

          toggler.onclick = UI.addToggle(section.id, showSection, function(enabled) {
            toggler.checked = enabled;
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
