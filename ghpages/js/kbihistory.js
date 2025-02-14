////////////////////////////////////
//
//  KBINFO History.
//
//  HISTORY.saved is a list, ordered from most recent, of historic kbinfos.
//
//  We save history in two instances:
//
//  1) On device connect. (Hard entry)
//  2) On update (soft modification of last entry)
//
//  So on any connect, first item in history is:
//    {
//      cause: 'connect',
//      name: 'Svalboard Lightly',
//      date: (datetime),
//      kbinfo: {},
//    }
//
//  Any modifications create a new first one, 'update'.
//    {
//      cause: 'update',
//      name: 'Svalboard Lightly',
//      date: (datetime),
//      kbinfo: {},
//    }
//
// New history events can be created using HISTORY.new(event).
//
// e.g: On file upload, HISTORY.push('upload', kbinfo) will stop modifying the previous
//      kbinfo.
//
////////////////////////////////////

const HISTORY = {
  MAX: 20,
  IGNORED: {
    'sample': true,
    'load': true,
    'uploaded': true,
  },
  viewing: false,
  ts: new Date().getTime(),
  saved: [],
  refresh: () => {
    HISTORY.saved = getSaved('kbi_saved', []);
    HISTORY.render();
  },
  formatDate: (date) => {
    // Code from chatgpt.
    // Short month names
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const month = months[date.getMonth()];
    const day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    // Pad minutes with leading zero if needed
    minutes = minutes < 10 ? "0" + minutes : minutes;

    // If you want 24-hour format (e.g., 0–23), you can keep `hours` as is:
    // For 12-hour format, you can transform it (and optionally add AM/PM):
    //   const ampm = hours >= 12 ? 'PM' : 'AM';
    //   hours = hours % 12 || 12;

    return `${month} ${day} ${hours}:${minutes}`;
  },
  render: () => {
    const histmenu = get('#history-kbis');
    histmenu.innerHTML = '';
    const els = [];
    let i = 0;
    for (const hist of HISTORY.saved) {
      const ts = HISTORY.formatDate(new Date(hist.time));
      els.push(EL('label', {
        'data-history-id': i,
      }, `${ts}: ${hist.cause}`));
      i++;
    }
    appendChildren(histmenu, els);
  },
  push: (cause, kbinfo, force) => {
    if (HISTORY.IGNORED[cause]) {
      return;
    }
    if (!kbinfo || !kbinfo.payload) {
      return;
    }
    HISTORY.saved.unshift({
      cause: cause,
      name: kbinfo.payload.name,
      time: new Date().getTime(),
      ts: HISTORY.ts,
      kbinfo: kbinfo,
    });
    HISTORY.save();
  },
  save: (kbinfo) => {
    HISTORY.saved = HISTORY.saved.slice(0, HISTORY.MAX);
    setSaved('kbi_saved', HISTORY.saved);
    HISTORY.render();
  },
  update: (kbinfo) => {
    kbinfo = structuredClone(kbinfo);
    if (HISTORY.saved.length < 1 || HISTORY.saved[0].ts !== HISTORY.ts) {
      HISTORY.push('update', kbinfo);
    } else {
      HISTORY.saved[0].kbinfo = kbinfo;
      HISTORY.saved[0].time = new Date().getTime();
    }
    HISTORY.save();
  },
}
var KBINFO_HISTORY = {};

addInitializer('load', () => {
  HISTORY.refresh();
  KBINFO_HISTORY = getSaved('kbinfo_history', {});
  addInitializer('connected', (kbinfo) => {
    HISTORY.refresh();
  });

  ACTION.onclick('[data-history-id]', (target) => {
    const kbi = HISTORY.saved[target.dataset.historyId].kbinfo;
    if (CONNECTED) {
      setActiveKBINFO(kbi, 'load');
      updateAllChanges();
    } else {
      doStuff(kbi, 'load');
    }
  });
});
