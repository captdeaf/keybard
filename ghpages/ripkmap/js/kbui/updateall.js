////////////////////////////////////
//
//  This is used to update all 'changed' and add CHANGES.queue for every
//  difference betweek KBINFO and BASE_KBINFO.
//
//  BASE_KBINFO should always be "what is" while KBINFO is "what should be".
//
////////////////////////////////////

function updateAllChanges() {
  CHANGES.todo = {};

  MAINBOARD.updateAll();
  COMBOS.updateAll();
  KEY_OVERRIDES.updateAll();

  MACROS.updateAll();
  TAPDANCE.updateAll();

  QMKSETTINGS.updateAll();

  KEYUI.refreshAllKeys();
}
