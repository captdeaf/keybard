////////////////////////////////////
//
//  This is used to update all 'changed' and add CHANGES.queue for every
//  difference betweek KBINFO and BASE_KBINFO.
//
//  BASE_KBINFO should always be "what is" while KBINFO is "what should be".
//
////////////////////////////////////

async function updateAllChanges() {
  CHANGES.todo = {};
  const docommit = SETTINGS.instant;
  SETTINGS.instant = false;

  await MAINBOARD.updateAll();
  await COMBOS.updateAll();
  await KEY_OVERRIDES.updateAll();

  await MACROS.updateAll();
  await TAPDANCE.updateAll();

  await QMKSETTINGS.updateAll();

  await KEYUI.refreshAllKeys();

  SETTINGS.instant = docommit;
  if (docommit) {
    await CHANGES.commit();
  }
}
