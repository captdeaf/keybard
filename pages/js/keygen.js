const CODEMAP = {
  0x0000: "KC_NO",
  0x0001: "KC_TRNS",
  0x0004: "KC_A",
  0x0005: "KC_B",
  0x0006: "KC_C",
  0x0007: "KC_D",
  0x0008: "KC_E",
  0x0009: "KC_F",
  0x000a: "KC_G",
  0x000b: "KC_H",
  0x000c: "KC_I",
  0x000d: "KC_J",
  0x000e: "KC_K",
  0x000f: "KC_L",
  0x0010: "KC_M",
  0x0011: "KC_N",
  0x0012: "KC_O",
  0x0013: "KC_P",
  0x0014: "KC_Q",
  0x0015: "KC_R",
  0x0016: "KC_S",
  0x0017: "KC_T",
  0x0018: "KC_U",
  0x0019: "KC_V",
  0x001a: "KC_W",
  0x001b: "KC_X",
  0x001c: "KC_Y",
  0x001d: "KC_Z",
  0x001e: "KC_1",
  0x001f: "KC_2",
  0x0020: "KC_3",
  0x0021: "KC_4",
  0x0022: "KC_5",
  0x0023: "KC_6",
  0x0024: "KC_7",
  0x0025: "KC_8",
  0x0026: "KC_9",
  0x0027: "KC_0",
  0x0028: "KC_ENTER",
  0x0029: "KC_ESCAPE",
  0x002a: "KC_BSPACE",
  0x002b: "KC_TAB",
  0x002c: "KC_SPACE",
  0x002d: "KC_MINUS",
  0x002e: "KC_EQUAL",
  0x002f: "KC_LBRACKET",
  0x0030: "KC_RBRACKET",
  0x0031: "KC_BSLASH",
  0x0032: "KC_NONUS_HASH",
  0x0033: "KC_SCOLON",
  0x0034: "KC_QUOTE",
  0x0035: "KC_GRAVE",
  0x0036: "KC_COMMA",
  0x0037: "KC_DOT",
  0x0038: "KC_SLASH",
  0x0039: "KC_CAPSLOCK",
  0x003a: "KC_F1",
  0x003b: "KC_F2",
  0x003c: "KC_F3",
  0x003d: "KC_F4",
  0x003e: "KC_F5",
  0x003f: "KC_F6",
  0x0040: "KC_F7",
  0x0041: "KC_F8",
  0x0042: "KC_F9",
  0x0043: "KC_F10",
  0x0044: "KC_F11",
  0x0045: "KC_F12",
  0x0046: "KC_PSCREEN",
  0x0047: "KC_SCROLLLOCK",
  0x0048: "KC_PAUSE",
  0x0049: "KC_INSERT",
  0x004a: "KC_HOME",
  0x004b: "KC_PGUP",
  0x004c: "KC_DELETE",
  0x004d: "KC_END",
  0x004e: "KC_PGDOWN",
  0x004f: "KC_RIGHT",
  0x0050: "KC_LEFT",
  0x0051: "KC_DOWN",
  0x0052: "KC_UP",
  0x0053: "KC_NUMLOCK",
  0x0054: "KC_KP_SLASH",
  0x0055: "KC_KP_ASTERISK",
  0x0056: "KC_KP_MINUS",
  0x0057: "KC_KP_PLUS",
  0x0058: "KC_KP_ENTER",
  0x0059: "KC_KP_1",
  0x005a: "KC_KP_2",
  0x005b: "KC_KP_3",
  0x005c: "KC_KP_4",
  0x005d: "KC_KP_5",
  0x005e: "KC_KP_6",
  0x005f: "KC_KP_7",
  0x0060: "KC_KP_8",
  0x0061: "KC_KP_9",
  0x0062: "KC_KP_0",
  0x0063: "KC_KP_DOT",
  0x0064: "KC_NONUS_BSLASH",
  0x0065: "KC_APPLICATION",
  0x0066: "KC_KB_POWER",
  0x0067: "KC_KP_EQUAL",
  0x0068: "KC_F13",
  0x0069: "KC_F14",
  0x006a: "KC_F15",
  0x006b: "KC_F16",
  0x006c: "KC_F17",
  0x006d: "KC_F18",
  0x006e: "KC_F19",
  0x006f: "KC_F20",
  0x0070: "KC_F21",
  0x0071: "KC_F22",
  0x0072: "KC_F23",
  0x0073: "KC_F24",
  0x0074: "KC_EXEC",
  0x0075: "KC_HELP",
  0x0076: "KC_MENU",
  0x0077: "KC_SLCT",
  0x0078: "KC_STOP",
  0x0079: "KC_REDO",
  0x007a: "KC_UNDO",
  0x007b: "KC_CUT",
  0x007c: "KC_COPY",
  0x007d: "KC_PSTE",
  0x007e: "KC_FIND",
  0x007f: "KC_KB_MUTE",
  0x0080: "KC_VOLUP",
  0x0081: "KC_VOLDOWN",
  0x0082: "KC_LCAP",
  0x0083: "KC_LNUM",
  0x0084: "KC_LSCR",
  0x0085: "KC_KP_COMMA",
  0x0086: "KC_KP_EQUAL_AS400",
  0x0087: "KC_RO",
  0x0088: "KC_KANA",
  0x0089: "KC_JYEN",
  0x008a: "KC_HENK",
  0x008b: "KC_MHEN",
  0x008c: "KC_INTERNATIONAL_6",
  0x008d: "KC_INTERNATIONAL_7",
  0x008e: "KC_INTERNATIONAL_8",
  0x008f: "KC_INTERNATIONAL_9",
  0x0090: "KC_LANG1",
  0x0091: "KC_LANG2",
  0x0092: "KC_LANGUAGE_3",
  0x0093: "KC_LANGUAGE_4",
  0x0094: "KC_LANGUAGE_5",
  0x0095: "KC_LANGUAGE_6",
  0x0096: "KC_LANGUAGE_7",
  0x0097: "KC_LANGUAGE_8",
  0x0098: "KC_LANGUAGE_9",
  0x0099: "KC_ALTERNATE_ERASE",
  0x009a: "KC_SYSTEM_REQUEST",
  0x009b: "KC_CANCEL",
  0x009c: "KC_CLEAR",
  0x009d: "KC_PRIOR",
  0x009e: "KC_RETURN",
  0x009f: "KC_SEPARATOR",
  0x00a0: "KC_OUT",
  0x00a1: "KC_OPER",
  0x00a2: "KC_CLEAR_AGAIN",
  0x00a3: "KC_CRSEL",
  0x00a4: "KC_EXSEL",
  0x00a5: "KC_PWR",
  0x00a6: "KC_SLEP",
  0x00a7: "KC_WAKE",
  0x00a8: "KC_MUTE",
  0x00a9: "KC_VOLU",
  0x00aa: "KC_VOLD",
  0x00ab: "KC_MNXT",
  0x00ac: "KC_MPRV",
  0x00ad: "KC_MSTP",
  0x00ae: "KC_MPLY",
  0x00af: "KC_MSEL",
  0x00b0: "KC_EJCT",
  0x00b1: "KC_MAIL",
  0x00b2: "KC_CALC",
  0x00b3: "KC_MYCM",
  0x00b4: "KC_WSCH",
  0x00b5: "KC_WHOM",
  0x00b6: "KC_WBAK",
  0x00b7: "KC_WFWD",
  0x00b8: "KC_WSTP",
  0x00b9: "KC_WREF",
  0x00ba: "KC_WFAV",
  0x00bb: "KC_MFFD",
  0x00bc: "KC_MRWD",
  0x00bd: "KC_BRIU",
  0x00be: "KC_BRID",
  0x00bf: "KC_CONTROL_PANEL",
  0x00c0: "KC_ASSISTANT",
  0x00c1: "KC_MISSION_CONTROL",
  0x00c2: "KC_LAUNCHPAD",
  0x00cd: "KC_MS_U",
  0x00ce: "KC_MS_D",
  0x00cf: "KC_MS_L",
  0x00d0: "KC_MS_R",
  0x00d1: "KC_BTN1",
  0x00d2: "KC_BTN2",
  0x00d3: "KC_BTN3",
  0x00d4: "KC_BTN4",
  0x00d5: "KC_BTN5",
  0x00d6: "KC_MS_BTN6",
  0x00d7: "KC_MS_BTN7",
  0x00d8: "KC_MS_BTN8",
  0x00d9: "KC_WH_U",
  0x00da: "KC_WH_D",
  0x00db: "KC_WH_L",
  0x00dc: "KC_WH_R",
  0x00dd: "KC_ACL0",
  0x00de: "KC_ACL1",
  0x00df: "KC_ACL2",
  0x00e0: "KC_LCTRL",
  0x00e1: "KC_LSHIFT",
  0x00e2: "KC_LALT",
  0x00e3: "KC_LGUI",
  0x00e4: "KC_RCTRL",
  0x00e5: "KC_RSHIFT",
  0x00e6: "KC_RALT",
  0x00e7: "KC_RGUI",
  0x00ff: "QK_BASIC_MAX",
  0x0100: "LCTL(kc)",
  0x0200: "LSFT(kc)",
  0x021e: "KC_EXLM",
  0x021f: "KC_AT",
  0x0220: "KC_HASH",
  0x0221: "KC_DLR",
  0x0222: "KC_PERC",
  0x0223: "KC_CIRC",
  0x0224: "KC_AMPR",
  0x0225: "KC_ASTR",
  0x0226: "KC_LPRN",
  0x0227: "KC_RPRN",
  0x022d: "KC_UNDS",
  0x022e: "KC_PLUS",
  0x022f: "KC_LCBR",
  0x0230: "KC_RCBR",
  0x0231: "KC_PIPE",
  0x0233: "KC_COLN",
  0x0234: "KC_DQUO",
  0x0235: "KC_TILD",
  0x0236: "KC_LT",
  0x0237: "KC_GT",
  0x0238: "KC_QUES",
  0x0300: "C_S(kc)",
  0x0400: "LALT(kc)",
  0x0500: "LCA(kc)",
  0x0600: "LSA(kc)",
  0x0700: "MEH(kc)",
  0x0800: "LGUI(kc)",
  0x0900: "LCG(kc)",
  0x0a00: "SGUI(kc)",
  0x0b00: "LSCG(kc)",
  0x0c00: "LAG(kc)",
  0x0d00: "LCAG(kc)",
  0x0e00: "LSAG(kc)",
  0x0f00: "HYPR(kc)",
  0x1000: "R(kc)",
  0x1100: "RCTL(kc)",
  0x1200: "RSFT(kc)",
  0x1300: "RSC(kc)",
  0x1400: "RALT(kc)",
  0x1500: "RCA(kc)",
  0x1600: "RSA(kc)",
  0x1700: "RSCA(kc)",
  0x1800: "RGUI(kc)",
  0x1900: "RCG(kc)",
  0x1a00: "RSG(kc)",
  0x1b00: "RSCG(kc)",
  0x1c00: "RAG(kc)",
  0x1d00: "RCAG(kc)",
  0x1e00: "RSAG(kc)",
  0x1f00: "RSCAG(kc)",
  0x1fff: "QK_MODS_MAX",
  0x2000: "QK_MOD_TAP",
  0x2100: "LCTL_T(kc)",
  0x2200: "LSFT_T(kc)",
  0x2300: "C_S_T(kc)",
  0x2400: "LALT_T(kc)",
  0x2500: "LCA_T(kc)",
  0x2600: "LSA_T(kc)",
  0x2700: "MEH_T(kc)",
  0x2800: "LGUI_T(kc)",
  0x2900: "LCG_T(kc)",
  0x2a00: "SGUI_T(kc)",
  0x2b00: "LSCG_T(kc)",
  0x2c00: "LAG_T(kc)",
  0x2d00: "LCAG_T(kc)",
  0x2e00: "LSAG_T(kc)",
  0x2f00: "ALL_T(kc)",
  0x3000: "R_T(kc)",
  0x3100: "RCTL_T(kc)",
  0x3200: "RSFT_T(kc)",
  0x3300: "RSC_T(kc)",
  0x3400: "RALT_T(kc)",
  0x3500: "RCA_T(kc)",
  0x3600: "RSA_T(kc)",
  0x3700: "RSCA_T(kc)",
  0x3800: "RGUI_T(kc)",
  0x3900: "RCG_T(kc)",
  0x3a00: "RSG_T(kc)",
  0x3b00: "RSCG_T(kc)",
  0x3c00: "RAG_T(kc)",
  0x3d00: "RCAG_T(kc)",
  0x3e00: "RSAG_T(kc)",
  0x3f00: "RSCAG_T(kc)",
  0x3fff: "QK_MOD_TAP_MAX",
  0x4000: "LT0(kc)",
  0x4100: "LT1(kc)",
  0x4200: "LT2(kc)",
  0x4300: "LT3(kc)",
  0x4400: "LT4(kc)",
  0x4500: "LT5(kc)",
  0x4600: "LT6(kc)",
  0x4700: "LT7(kc)",
  0x4800: "LT8(kc)",
  0x4900: "LT9(kc)",
  0x4a00: "LT10(kc)",
  0x4b00: "LT11(kc)",
  0x4c00: "LT12(kc)",
  0x4d00: "LT13(kc)",
  0x4e00: "LT14(kc)",
  0x4f00: "LT15(kc)",
  0x4fff: "QK_LAYER_TAP_MAX",
  0x5000: "QK_LAYER_MOD",
  0x51ff: "QK_LAYER_MOD_MAX",
  0x5200: "TO(0)",
  0x5201: "TO(1)",
  0x5202: "TO(2)",
  0x5203: "TO(3)",
  0x5204: "TO(4)",
  0x5205: "TO(5)",
  0x5206: "TO(6)",
  0x5207: "TO(7)",
  0x5208: "TO(8)",
  0x5209: "TO(9)",
  0x520a: "TO(10)",
  0x520b: "TO(11)",
  0x520c: "TO(12)",
  0x520d: "TO(13)",
  0x520e: "TO(14)",
  0x520f: "TO(15)",
  0x5210: "TO(16)",
  0x5211: "TO(17)",
  0x5212: "TO(18)",
  0x5213: "TO(19)",
  0x5214: "TO(20)",
  0x5215: "TO(21)",
  0x5216: "TO(22)",
  0x5217: "TO(23)",
  0x5218: "TO(24)",
  0x5219: "TO(25)",
  0x521a: "TO(26)",
  0x521b: "TO(27)",
  0x521c: "TO(28)",
  0x521d: "TO(29)",
  0x521e: "TO(30)",
  0x521f: "TO(31)",
  0x5220: "MO(0)",
  0x5221: "MO(1)",
  0x5222: "MO(2)",
  0x5223: "MO(3)",
  0x5224: "MO(4)",
  0x5225: "MO(5)",
  0x5226: "MO(6)",
  0x5227: "MO(7)",
  0x5228: "MO(8)",
  0x5229: "MO(9)",
  0x522a: "MO(10)",
  0x522b: "MO(11)",
  0x522c: "MO(12)",
  0x522d: "MO(13)",
  0x522e: "MO(14)",
  0x522f: "MO(15)",
  0x5230: "MO(16)",
  0x5231: "MO(17)",
  0x5232: "MO(18)",
  0x5233: "MO(19)",
  0x5234: "MO(20)",
  0x5235: "MO(21)",
  0x5236: "MO(22)",
  0x5237: "MO(23)",
  0x5238: "MO(24)",
  0x5239: "MO(25)",
  0x523a: "MO(26)",
  0x523b: "MO(27)",
  0x523c: "MO(28)",
  0x523d: "MO(29)",
  0x523e: "MO(30)",
  0x523f: "MO(31)",
  0x5240: "DF(0)",
  0x5241: "DF(1)",
  0x5242: "DF(2)",
  0x5243: "DF(3)",
  0x5244: "DF(4)",
  0x5245: "DF(5)",
  0x5246: "DF(6)",
  0x5247: "DF(7)",
  0x5248: "DF(8)",
  0x5249: "DF(9)",
  0x524a: "DF(10)",
  0x524b: "DF(11)",
  0x524c: "DF(12)",
  0x524d: "DF(13)",
  0x524e: "DF(14)",
  0x524f: "DF(15)",
  0x5250: "DF(16)",
  0x5251: "DF(17)",
  0x5252: "DF(18)",
  0x5253: "DF(19)",
  0x5254: "DF(20)",
  0x5255: "DF(21)",
  0x5256: "DF(22)",
  0x5257: "DF(23)",
  0x5258: "DF(24)",
  0x5259: "DF(25)",
  0x525a: "DF(26)",
  0x525b: "DF(27)",
  0x525c: "DF(28)",
  0x525d: "DF(29)",
  0x525e: "DF(30)",
  0x525f: "DF(31)",
  0x5260: "TG(0)",
  0x5261: "TG(1)",
  0x5262: "TG(2)",
  0x5263: "TG(3)",
  0x5264: "TG(4)",
  0x5265: "TG(5)",
  0x5266: "TG(6)",
  0x5267: "TG(7)",
  0x5268: "TG(8)",
  0x5269: "TG(9)",
  0x526a: "TG(10)",
  0x526b: "TG(11)",
  0x526c: "TG(12)",
  0x526d: "TG(13)",
  0x526e: "TG(14)",
  0x526f: "TG(15)",
  0x5270: "TG(16)",
  0x5271: "TG(17)",
  0x5272: "TG(18)",
  0x5273: "TG(19)",
  0x5274: "TG(20)",
  0x5275: "TG(21)",
  0x5276: "TG(22)",
  0x5277: "TG(23)",
  0x5278: "TG(24)",
  0x5279: "TG(25)",
  0x527a: "TG(26)",
  0x527b: "TG(27)",
  0x527c: "TG(28)",
  0x527d: "TG(29)",
  0x527e: "TG(30)",
  0x527f: "TG(31)",
  0x5280: "OSL(0)",
  0x5281: "OSL(1)",
  0x5282: "OSL(2)",
  0x5283: "OSL(3)",
  0x5284: "OSL(4)",
  0x5285: "OSL(5)",
  0x5286: "OSL(6)",
  0x5287: "OSL(7)",
  0x5288: "OSL(8)",
  0x5289: "OSL(9)",
  0x528a: "OSL(10)",
  0x528b: "OSL(11)",
  0x528c: "OSL(12)",
  0x528d: "OSL(13)",
  0x528e: "OSL(14)",
  0x528f: "OSL(15)",
  0x5290: "OSL(16)",
  0x5291: "OSL(17)",
  0x5292: "OSL(18)",
  0x5293: "OSL(19)",
  0x5294: "OSL(20)",
  0x5295: "OSL(21)",
  0x5296: "OSL(22)",
  0x5297: "OSL(23)",
  0x5298: "OSL(24)",
  0x5299: "OSL(25)",
  0x529a: "OSL(26)",
  0x529b: "OSL(27)",
  0x529c: "OSL(28)",
  0x529d: "OSL(29)",
  0x529e: "OSL(30)",
  0x529f: "OSL(31)",
  0x52a0: "QK_ONE_SHOT_MOD",
  0x52a1: "OSM(MOD_LCTL)",
  0x52a2: "OSM(MOD_LSFT)",
  0x52a3: "OSM(MOD_LCTL|MOD_LSFT)",
  0x52a4: "OSM(MOD_LALT)",
  0x52a5: "OSM(MOD_LCTL|MOD_LALT)",
  0x52a6: "OSM(MOD_LSFT|MOD_LALT)",
  0x52a7: "OSM(MOD_MEH)",
  0x52a8: "OSM(MOD_LGUI)",
  0x52a9: "OSM(MOD_LCTL|MOD_LGUI)",
  0x52aa: "OSM(MOD_LSFT|MOD_LGUI)",
  0x52ab: "OSM(MOD_LCTL|MOD_LSFT|MOD_LGUI)",
  0x52ac: "OSM(MOD_LALT|MOD_LGUI)",
  0x52ad: "OSM(MOD_LCTL|MOD_LALT|MOD_LGUI)",
  0x52ae: "OSM(MOD_LSFT|MOD_LALT|MOD_LGUI)",
  0x52af: "OSM(MOD_HYPR)",
  0x52b1: "OSM(MOD_RCTL)",
  0x52b2: "OSM(MOD_RSFT)",
  0x52b3: "OSM(MOD_RCTL|MOD_RSFT)",
  0x52b4: "OSM(MOD_RALT)",
  0x52b5: "OSM(MOD_RCTL|MOD_RALT)",
  0x52b6: "OSM(MOD_RSFT|MOD_RALT)",
  0x52b7: "OSM(MOD_RCTL|MOD_RSFT|MOD_RALT)",
  0x52b8: "OSM(MOD_RGUI)",
  0x52b9: "OSM(MOD_RCTL|MOD_RGUI)",
  0x52ba: "OSM(MOD_RSFT|MOD_RGUI)",
  0x52bb: "OSM(MOD_RCTL|MOD_RSFT|MOD_RGUI)",
  0x52bc: "OSM(MOD_RALT|MOD_RGUI)",
  0x52bd: "OSM(MOD_RCTL|MOD_RALT|MOD_RGUI)",
  0x52be: "OSM(MOD_RSFT|MOD_RALT|MOD_RGUI)",
  0x52bf: "OSM(MOD_RCTL|MOD_RSFT|MOD_RALT|MOD_RGUI)",
  0x52c0: "TT(0)",
  0x52c1: "TT(1)",
  0x52c2: "TT(2)",
  0x52c3: "TT(3)",
  0x52c4: "TT(4)",
  0x52c5: "TT(5)",
  0x52c6: "TT(6)",
  0x52c7: "TT(7)",
  0x52c8: "TT(8)",
  0x52c9: "TT(9)",
  0x52ca: "TT(10)",
  0x52cb: "TT(11)",
  0x52cc: "TT(12)",
  0x52cd: "TT(13)",
  0x52ce: "TT(14)",
  0x52cf: "TT(15)",
  0x52d0: "TT(16)",
  0x52d1: "TT(17)",
  0x52d2: "TT(18)",
  0x52d3: "TT(19)",
  0x52d4: "TT(20)",
  0x52d5: "TT(21)",
  0x52d6: "TT(22)",
  0x52d7: "TT(23)",
  0x52d8: "TT(24)",
  0x52d9: "TT(25)",
  0x52da: "TT(26)",
  0x52db: "TT(27)",
  0x52dc: "TT(28)",
  0x52dd: "TT(29)",
  0x52de: "TT(30)",
  0x52df: "TT(31)",
  0x5600: "QK_SWAP_HANDS",
  0x56f0: "QK_SWAP_HANDS_TOGGLE",
  0x56f1: "QK_SWAP_HANDS_TAP_TOGGLE",
  0x56f2: "QK_SWAP_HANDS_MOMENTARY_ON",
  0x56f3: "QK_SWAP_HANDS_MOMENTARY_OFF",
  0x56f4: "QK_SWAP_HANDS_OFF",
  0x56f5: "QK_SWAP_HANDS_ON",
  0x56f6: "QK_SWAP_HANDS_ONE_SHOT",
  0x56ff: "QK_SWAP_HANDS_MAX",
  0x5700: "TD(0)",
  0x5701: "TD(1)",
  0x5702: "TD(2)",
  0x5703: "TD(3)",
  0x5704: "TD(4)",
  0x5705: "TD(5)",
  0x5706: "TD(6)",
  0x5707: "TD(7)",
  0x5708: "TD(8)",
  0x5709: "TD(9)",
  0x570a: "TD(10)",
  0x570b: "TD(11)",
  0x570c: "TD(12)",
  0x570d: "TD(13)",
  0x570e: "TD(14)",
  0x570f: "TD(15)",
  0x5710: "TD(16)",
  0x5711: "TD(17)",
  0x5712: "TD(18)",
  0x5713: "TD(19)",
  0x5714: "TD(20)",
  0x5715: "TD(21)",
  0x5716: "TD(22)",
  0x5717: "TD(23)",
  0x5718: "TD(24)",
  0x5719: "TD(25)",
  0x571a: "TD(26)",
  0x571b: "TD(27)",
  0x571c: "TD(28)",
  0x571d: "TD(29)",
  0x571e: "TD(30)",
  0x571f: "TD(31)",
  0x5720: "TD(32)",
  0x5721: "TD(33)",
  0x5722: "TD(34)",
  0x5723: "TD(35)",
  0x5724: "TD(36)",
  0x5725: "TD(37)",
  0x5726: "TD(38)",
  0x5727: "TD(39)",
  0x5728: "TD(40)",
  0x5729: "TD(41)",
  0x572a: "TD(42)",
  0x572b: "TD(43)",
  0x572c: "TD(44)",
  0x572d: "TD(45)",
  0x572e: "TD(46)",
  0x572f: "TD(47)",
  0x5730: "TD(48)",
  0x5731: "TD(49)",
  0x5732: "TD(50)",
  0x5733: "TD(51)",
  0x5734: "TD(52)",
  0x5735: "TD(53)",
  0x5736: "TD(54)",
  0x5737: "TD(55)",
  0x5738: "TD(56)",
  0x5739: "TD(57)",
  0x573a: "TD(58)",
  0x573b: "TD(59)",
  0x573c: "TD(60)",
  0x573d: "TD(61)",
  0x573e: "TD(62)",
  0x573f: "TD(63)",
  0x5740: "TD(64)",
  0x5741: "TD(65)",
  0x5742: "TD(66)",
  0x5743: "TD(67)",
  0x5744: "TD(68)",
  0x5745: "TD(69)",
  0x5746: "TD(70)",
  0x5747: "TD(71)",
  0x5748: "TD(72)",
  0x5749: "TD(73)",
  0x574a: "TD(74)",
  0x574b: "TD(75)",
  0x574c: "TD(76)",
  0x574d: "TD(77)",
  0x574e: "TD(78)",
  0x574f: "TD(79)",
  0x5750: "TD(80)",
  0x5751: "TD(81)",
  0x5752: "TD(82)",
  0x5753: "TD(83)",
  0x5754: "TD(84)",
  0x5755: "TD(85)",
  0x5756: "TD(86)",
  0x5757: "TD(87)",
  0x5758: "TD(88)",
  0x5759: "TD(89)",
  0x575a: "TD(90)",
  0x575b: "TD(91)",
  0x575c: "TD(92)",
  0x575d: "TD(93)",
  0x575e: "TD(94)",
  0x575f: "TD(95)",
  0x5760: "TD(96)",
  0x5761: "TD(97)",
  0x5762: "TD(98)",
  0x5763: "TD(99)",
  0x5764: "TD(100)",
  0x5765: "TD(101)",
  0x5766: "TD(102)",
  0x5767: "TD(103)",
  0x5768: "TD(104)",
  0x5769: "TD(105)",
  0x576a: "TD(106)",
  0x576b: "TD(107)",
  0x576c: "TD(108)",
  0x576d: "TD(109)",
  0x576e: "TD(110)",
  0x576f: "TD(111)",
  0x5770: "TD(112)",
  0x5771: "TD(113)",
  0x5772: "TD(114)",
  0x5773: "TD(115)",
  0x5774: "TD(116)",
  0x5775: "TD(117)",
  0x5776: "TD(118)",
  0x5777: "TD(119)",
  0x5778: "TD(120)",
  0x5779: "TD(121)",
  0x577a: "TD(122)",
  0x577b: "TD(123)",
  0x577c: "TD(124)",
  0x577d: "TD(125)",
  0x577e: "TD(126)",
  0x577f: "TD(127)",
  0x5780: "TD(128)",
  0x5781: "TD(129)",
  0x5782: "TD(130)",
  0x5783: "TD(131)",
  0x5784: "TD(132)",
  0x5785: "TD(133)",
  0x5786: "TD(134)",
  0x5787: "TD(135)",
  0x5788: "TD(136)",
  0x5789: "TD(137)",
  0x578a: "TD(138)",
  0x578b: "TD(139)",
  0x578c: "TD(140)",
  0x578d: "TD(141)",
  0x578e: "TD(142)",
  0x578f: "TD(143)",
  0x5790: "TD(144)",
  0x5791: "TD(145)",
  0x5792: "TD(146)",
  0x5793: "TD(147)",
  0x5794: "TD(148)",
  0x5795: "TD(149)",
  0x5796: "TD(150)",
  0x5797: "TD(151)",
  0x5798: "TD(152)",
  0x5799: "TD(153)",
  0x579a: "TD(154)",
  0x579b: "TD(155)",
  0x579c: "TD(156)",
  0x579d: "TD(157)",
  0x579e: "TD(158)",
  0x579f: "TD(159)",
  0x57a0: "TD(160)",
  0x57a1: "TD(161)",
  0x57a2: "TD(162)",
  0x57a3: "TD(163)",
  0x57a4: "TD(164)",
  0x57a5: "TD(165)",
  0x57a6: "TD(166)",
  0x57a7: "TD(167)",
  0x57a8: "TD(168)",
  0x57a9: "TD(169)",
  0x57aa: "TD(170)",
  0x57ab: "TD(171)",
  0x57ac: "TD(172)",
  0x57ad: "TD(173)",
  0x57ae: "TD(174)",
  0x57af: "TD(175)",
  0x57b0: "TD(176)",
  0x57b1: "TD(177)",
  0x57b2: "TD(178)",
  0x57b3: "TD(179)",
  0x57b4: "TD(180)",
  0x57b5: "TD(181)",
  0x57b6: "TD(182)",
  0x57b7: "TD(183)",
  0x57b8: "TD(184)",
  0x57b9: "TD(185)",
  0x57ba: "TD(186)",
  0x57bb: "TD(187)",
  0x57bc: "TD(188)",
  0x57bd: "TD(189)",
  0x57be: "TD(190)",
  0x57bf: "TD(191)",
  0x57c0: "TD(192)",
  0x57c1: "TD(193)",
  0x57c2: "TD(194)",
  0x57c3: "TD(195)",
  0x57c4: "TD(196)",
  0x57c5: "TD(197)",
  0x57c6: "TD(198)",
  0x57c7: "TD(199)",
  0x57c8: "TD(200)",
  0x57c9: "TD(201)",
  0x57ca: "TD(202)",
  0x57cb: "TD(203)",
  0x57cc: "TD(204)",
  0x57cd: "TD(205)",
  0x57ce: "TD(206)",
  0x57cf: "TD(207)",
  0x57d0: "TD(208)",
  0x57d1: "TD(209)",
  0x57d2: "TD(210)",
  0x57d3: "TD(211)",
  0x57d4: "TD(212)",
  0x57d5: "TD(213)",
  0x57d6: "TD(214)",
  0x57d7: "TD(215)",
  0x57d8: "TD(216)",
  0x57d9: "TD(217)",
  0x57da: "TD(218)",
  0x57db: "TD(219)",
  0x57dc: "TD(220)",
  0x57dd: "TD(221)",
  0x57de: "TD(222)",
  0x57df: "TD(223)",
  0x57e0: "TD(224)",
  0x57e1: "TD(225)",
  0x57e2: "TD(226)",
  0x57e3: "TD(227)",
  0x57e4: "TD(228)",
  0x57e5: "TD(229)",
  0x57e6: "TD(230)",
  0x57e7: "TD(231)",
  0x57e8: "TD(232)",
  0x57e9: "TD(233)",
  0x57ea: "TD(234)",
  0x57eb: "TD(235)",
  0x57ec: "TD(236)",
  0x57ed: "TD(237)",
  0x57ee: "TD(238)",
  0x57ef: "TD(239)",
  0x57f0: "TD(240)",
  0x57f1: "TD(241)",
  0x57f2: "TD(242)",
  0x57f3: "TD(243)",
  0x57f4: "TD(244)",
  0x57f5: "TD(245)",
  0x57f6: "TD(246)",
  0x57f7: "TD(247)",
  0x57f8: "TD(248)",
  0x57f9: "TD(249)",
  0x57fa: "TD(250)",
  0x57fb: "TD(251)",
  0x57fc: "TD(252)",
  0x57fd: "TD(253)",
  0x57fe: "TD(254)",
  0x57ff: "TD(255)",
  0x7000: "MAGIC_SWAP_CONTROL_CAPSLOCK",
  0x7001: "MAGIC_UNSWAP_CONTROL_CAPSLOCK",
  0x7002: "QK_MAGIC_TOGGLE_CONTROL_CAPS_LOCK",
  0x7003: "MAGIC_UNCAPSLOCK_TO_CONTROL",
  0x7004: "MAGIC_CAPSLOCK_TO_CONTROL",
  0x7005: "MAGIC_SWAP_LALT_LGUI",
  0x7006: "MAGIC_UNSWAP_LALT_LGUI",
  0x7007: "MAGIC_SWAP_RALT_RGUI",
  0x7008: "MAGIC_UNSWAP_RALT_RGUI",
  0x7009: "MAGIC_UNNO_GUI",
  0x700a: "MAGIC_NO_GUI",
  0x700b: "QK_MAGIC_TOGGLE_GUI",
  0x700c: "MAGIC_SWAP_GRAVE_ESC",
  0x700d: "MAGIC_UNSWAP_GRAVE_ESC",
  0x700e: "MAGIC_SWAP_BACKSLASH_BACKSPACE",
  0x700f: "MAGIC_UNSWAP_BACKSLASH_BACKSPACE",
  0x7010: "QK_MAGIC_TOGGLE_BACKSLASH_BACKSPACE",
  0x7011: "MAGIC_HOST_NKRO",
  0x7012: "MAGIC_UNHOST_NKRO",
  0x7013: "MAGIC_TOGGLE_NKRO",
  0x7014: "MAGIC_SWAP_ALT_GUI",
  0x7015: "MAGIC_UNSWAP_ALT_GUI",
  0x7016: "MAGIC_TOGGLE_ALT_GUI",
  0x7017: "MAGIC_SWAP_LCTL_LGUI",
  0x7018: "MAGIC_UNSWAP_LCTL_LGUI",
  0x7019: "MAGIC_SWAP_RCTL_RGUI",
  0x701a: "MAGIC_UNSWAP_RCTL_RGUI",
  0x701b: "MAGIC_SWAP_CTL_GUI",
  0x701c: "MAGIC_UNSWAP_CTL_GUI",
  0x701d: "MAGIC_TOGGLE_CTL_GUI",
  0x701e: "MAGIC_EE_HANDS_LEFT",
  0x701f: "MAGIC_EE_HANDS_RIGHT",
  0x7020: "QK_MAGIC_SWAP_ESCAPE_CAPS_LOCK",
  0x7021: "QK_MAGIC_UNSWAP_ESCAPE_CAPS_LOCK",
  0x7022: "QK_MAGIC_TOGGLE_ESCAPE_CAPS_LOCK",
  0x70ff: "QK_MAGIC_MAX",
  0x7100: "QK_MIDI",
  0x7101: "QK_MIDI_OFF",
  0x7102: "QK_MIDI_TOGGLE",
  0x7103: "MI_C",
  0x7104: "MI_Cs",
  0x7105: "MI_D",
  0x7106: "MI_Ds",
  0x7107: "MI_E",
  0x7108: "MI_F",
  0x7109: "MI_Fs",
  0x710a: "MI_G",
  0x710b: "MI_Gs",
  0x710c: "MI_A",
  0x710d: "MI_As",
  0x710e: "MI_B",
  0x710f: "MI_C_1",
  0x7110: "MI_Cs_1",
  0x7111: "MI_D_1",
  0x7112: "MI_Ds_1",
  0x7113: "MI_E_1",
  0x7114: "MI_F_1",
  0x7115: "MI_Fs_1",
  0x7116: "MI_G_1",
  0x7117: "MI_Gs_1",
  0x7118: "MI_A_1",
  0x7119: "MI_As_1",
  0x711a: "MI_B_1",
  0x711b: "MI_C_2",
  0x711c: "MI_Cs_2",
  0x711d: "MI_D_2",
  0x711e: "MI_Ds_2",
  0x711f: "MI_E_2",
  0x7120: "MI_F_2",
  0x7121: "MI_Fs_2",
  0x7122: "MI_G_2",
  0x7123: "MI_Gs_2",
  0x7124: "MI_A_2",
  0x7125: "MI_As_2",
  0x7126: "MI_B_2",
  0x7127: "MI_C_3",
  0x7128: "MI_Cs_3",
  0x7129: "MI_D_3",
  0x712a: "MI_Ds_3",
  0x712b: "MI_E_3",
  0x712c: "MI_F_3",
  0x712d: "MI_Fs_3",
  0x712e: "MI_G_3",
  0x712f: "MI_Gs_3",
  0x7130: "MI_A_3",
  0x7131: "MI_As_3",
  0x7132: "MI_B_3",
  0x7133: "MI_C_4",
  0x7134: "MI_Cs_4",
  0x7135: "MI_D_4",
  0x7136: "MI_Ds_4",
  0x7137: "MI_E_4",
  0x7138: "MI_F_4",
  0x7139: "MI_Fs_4",
  0x713a: "MI_G_4",
  0x713b: "MI_Gs_4",
  0x713c: "MI_A_4",
  0x713d: "MI_As_4",
  0x713e: "MI_B_4",
  0x713f: "MI_C_5",
  0x7140: "MI_Cs_5",
  0x7141: "MI_D_5",
  0x7142: "MI_Ds_5",
  0x7143: "MI_E_5",
  0x7144: "MI_F_5",
  0x7145: "MI_Fs_5",
  0x7146: "MI_G_5",
  0x7147: "MI_Gs_5",
  0x7148: "MI_A_5",
  0x7149: "MI_As_5",
  0x714a: "MI_B_5",
  0x714b: "MI_OCT_N2",
  0x714c: "MI_OCT_N1",
  0x714d: "MI_OCT_0",
  0x714e: "MI_OCT_1",
  0x714f: "MI_OCT_2",
  0x7150: "MI_OCT_3",
  0x7151: "MI_OCT_4",
  0x7152: "MI_OCT_5",
  0x7153: "MI_OCT_6",
  0x7154: "MI_OCT_7",
  0x7155: "MI_OCTD",
  0x7156: "MI_OCTU",
  0x7157: "MI_TRNS_N6",
  0x7158: "MI_TRNS_N5",
  0x7159: "MI_TRNS_N4",
  0x715a: "MI_TRNS_N3",
  0x715b: "MI_TRNS_N2",
  0x715c: "MI_TRNS_N1",
  0x715d: "MI_TRNS_0",
  0x715e: "MI_TRNS_1",
  0x715f: "MI_TRNS_2",
  0x7160: "MI_TRNS_3",
  0x7161: "MI_TRNS_4",
  0x7162: "MI_TRNS_5",
  0x7163: "MI_TRNS_6",
  0x7164: "MI_TRNSD",
  0x7165: "MI_TRNSU",
  0x7166: "QK_MIDI_VELOCITY_0",
  0x7167: "MI_VEL_1",
  0x7168: "MI_VEL_2",
  0x7169: "MI_VEL_3",
  0x716a: "MI_VEL_4",
  0x716b: "MI_VEL_5",
  0x716c: "MI_VEL_6",
  0x716d: "MI_VEL_7",
  0x716e: "MI_VEL_8",
  0x716f: "MI_VEL_9",
  0x7170: "MI_VEL_10",
  0x7171: "MI_VELD",
  0x7172: "MI_VELU",
  0x7173: "MI_CH1",
  0x7174: "MI_CH2",
  0x7175: "MI_CH3",
  0x7176: "MI_CH4",
  0x7177: "MI_CH5",
  0x7178: "MI_CH6",
  0x7179: "MI_CH7",
  0x717a: "MI_CH8",
  0x717b: "MI_CH9",
  0x717c: "MI_CH10",
  0x717d: "MI_CH11",
  0x717e: "MI_CH12",
  0x717f: "MI_CH13",
  0x7180: "MI_CH14",
  0x7181: "MI_CH15",
  0x7182: "MI_CH16",
  0x7183: "MI_CHD",
  0x7184: "MI_CHU",
  0x7185: "MI_ALLOFF",
  0x7186: "MI_SUS",
  0x7187: "MI_PORT",
  0x7188: "MI_SOST",
  0x7189: "MI_SOFT",
  0x718a: "MI_LEG",
  0x718b: "MI_MOD",
  0x718c: "MI_MODSD",
  0x718d: "MI_MODSU",
  0x718e: "MI_BENDD",
  0x718f: "MI_BENDU",
  0x71ff: "QK_MIDI_MAX",
  0x7200: "QK_SEQUENCER",
  0x7201: "QK_SEQUENCER_OFF",
  0x7202: "QK_SEQUENCER_TOGGLE",
  0x7203: "QK_SEQUENCER_TEMPO_DOWN",
  0x7204: "QK_SEQUENCER_TEMPO_UP",
  0x7205: "QK_SEQUENCER_RESOLUTION_DOWN",
  0x7206: "QK_SEQUENCER_RESOLUTION_UP",
  0x7207: "QK_SEQUENCER_STEPS_ALL",
  0x7208: "QK_SEQUENCER_STEPS_CLEAR",
  0x73ff: "QK_SEQUENCER_MAX",
  0x7400: "QK_JOYSTICK",
  0x7401: "QK_JOYSTICK_BUTTON_1",
  0x7402: "QK_JOYSTICK_BUTTON_2",
  0x7403: "QK_JOYSTICK_BUTTON_3",
  0x7404: "QK_JOYSTICK_BUTTON_4",
  0x7405: "QK_JOYSTICK_BUTTON_5",
  0x7406: "QK_JOYSTICK_BUTTON_6",
  0x7407: "QK_JOYSTICK_BUTTON_7",
  0x7408: "QK_JOYSTICK_BUTTON_8",
  0x7409: "QK_JOYSTICK_BUTTON_9",
  0x740a: "QK_JOYSTICK_BUTTON_10",
  0x740b: "QK_JOYSTICK_BUTTON_11",
  0x740c: "QK_JOYSTICK_BUTTON_12",
  0x740d: "QK_JOYSTICK_BUTTON_13",
  0x740e: "QK_JOYSTICK_BUTTON_14",
  0x740f: "QK_JOYSTICK_BUTTON_15",
  0x7410: "QK_JOYSTICK_BUTTON_16",
  0x7411: "QK_JOYSTICK_BUTTON_17",
  0x7412: "QK_JOYSTICK_BUTTON_18",
  0x7413: "QK_JOYSTICK_BUTTON_19",
  0x7414: "QK_JOYSTICK_BUTTON_20",
  0x7415: "QK_JOYSTICK_BUTTON_21",
  0x7416: "QK_JOYSTICK_BUTTON_22",
  0x7417: "QK_JOYSTICK_BUTTON_23",
  0x7418: "QK_JOYSTICK_BUTTON_24",
  0x7419: "QK_JOYSTICK_BUTTON_25",
  0x741a: "QK_JOYSTICK_BUTTON_26",
  0x741b: "QK_JOYSTICK_BUTTON_27",
  0x741c: "QK_JOYSTICK_BUTTON_28",
  0x741d: "QK_JOYSTICK_BUTTON_29",
  0x741e: "QK_JOYSTICK_BUTTON_30",
  0x741f: "QK_JOYSTICK_BUTTON_31",
  0x743f: "QK_JOYSTICK_MAX",
  0x7440: "QK_PROGRAMMABLE_BUTTON",
  0x7441: "QK_PROGRAMMABLE_BUTTON_2",
  0x7442: "QK_PROGRAMMABLE_BUTTON_3",
  0x7443: "QK_PROGRAMMABLE_BUTTON_4",
  0x7444: "QK_PROGRAMMABLE_BUTTON_5",
  0x7445: "QK_PROGRAMMABLE_BUTTON_6",
  0x7446: "QK_PROGRAMMABLE_BUTTON_7",
  0x7447: "QK_PROGRAMMABLE_BUTTON_8",
  0x7448: "QK_PROGRAMMABLE_BUTTON_9",
  0x7449: "QK_PROGRAMMABLE_BUTTON_10",
  0x744a: "QK_PROGRAMMABLE_BUTTON_11",
  0x744b: "QK_PROGRAMMABLE_BUTTON_12",
  0x744c: "QK_PROGRAMMABLE_BUTTON_13",
  0x744d: "QK_PROGRAMMABLE_BUTTON_14",
  0x744e: "QK_PROGRAMMABLE_BUTTON_15",
  0x744f: "QK_PROGRAMMABLE_BUTTON_16",
  0x7450: "QK_PROGRAMMABLE_BUTTON_17",
  0x7451: "QK_PROGRAMMABLE_BUTTON_18",
  0x7452: "QK_PROGRAMMABLE_BUTTON_19",
  0x7453: "QK_PROGRAMMABLE_BUTTON_20",
  0x7454: "QK_PROGRAMMABLE_BUTTON_21",
  0x7455: "QK_PROGRAMMABLE_BUTTON_22",
  0x7456: "QK_PROGRAMMABLE_BUTTON_23",
  0x7457: "QK_PROGRAMMABLE_BUTTON_24",
  0x7458: "QK_PROGRAMMABLE_BUTTON_25",
  0x7459: "QK_PROGRAMMABLE_BUTTON_26",
  0x745a: "QK_PROGRAMMABLE_BUTTON_27",
  0x745b: "QK_PROGRAMMABLE_BUTTON_28",
  0x745c: "QK_PROGRAMMABLE_BUTTON_29",
  0x745d: "QK_PROGRAMMABLE_BUTTON_30",
  0x745e: "QK_PROGRAMMABLE_BUTTON_31",
  0x745f: "QK_PROGRAMMABLE_BUTTON_32",
  0x747f: "QK_PROGRAMMABLE_BUTTON_MAX",
  0x7480: "AU_ON",
  0x7481: "AU_OFF",
  0x7482: "AU_TOG",
  0x748a: "CLICKY_TOGGLE",
  0x748b: "QK_AUDIO_CLICKY_ON",
  0x748c: "QK_AUDIO_CLICKY_OFF",
  0x748d: "CLICKY_UP",
  0x748e: "CLICKY_DOWN",
  0x748f: "CLICKY_RESET",
  0x7490: "MU_ON",
  0x7491: "MU_OFF",
  0x7492: "MU_TOG",
  0x7493: "MU_MOD",
  0x7494: "QK_AUDIO_VOICE_NEXT",
  0x7495: "QK_AUDIO_VOICE_PREVIOUS",
  0x74bf: "QK_AUDIO_MAX",
  0x74c0: "QK_STENO",
  0x74c1: "STN_NUM",
  0x74c2: "STN_N2",
  0x74c3: "STN_N3",
  0x74c4: "STN_N4",
  0x74c5: "STN_N5",
  0x74c6: "STN_N6",
  0x74c7: "STN_SL",
  0x74c8: "STN_S2",
  0x74c9: "STN_TL",
  0x74ca: "STN_KL",
  0x74cb: "STN_PL",
  0x74cc: "STN_WL",
  0x74cd: "STN_HL",
  0x74ce: "STN_RL",
  0x74cf: "STN_A",
  0x74d0: "STN_O",
  0x74d1: "STN_STR",
  0x74d2: "STN_ST2",
  0x74d3: "STN_RES1",
  0x74d4: "STN_RES2",
  0x74d5: "STN_PWR",
  0x74d6: "STN_ST3",
  0x74d7: "STN_ST4",
  0x74d8: "STN_E",
  0x74d9: "STN_U",
  0x74da: "STN_FR",
  0x74db: "STN_RR",
  0x74dc: "STN_PR",
  0x74dd: "STN_BR",
  0x74de: "STN_LR",
  0x74df: "STN_GR",
  0x74e0: "STN_TR",
  0x74e1: "STN_SR",
  0x74e2: "STN_DR",
  0x74e3: "STN_N7",
  0x74e4: "STN_N8",
  0x74e5: "STN_N9",
  0x74e6: "STN_NA",
  0x74e7: "STN_NB",
  0x74e8: "STN_NC",
  0x74e9: "STN_ZR",
  0x74f0: "QK_STENO_BOLT",
  0x74f1: "QK_STENO_GEMINI",
  0x74f2: "QK_STENO_COMB",
  0x74fc: "QK_STENO_COMB_MAX",
  0x74ff: "QK_STENO_MAX",
  0x7700: "M0",
  0x7701: "M1",
  0x7702: "M2",
  0x7703: "M3",
  0x7704: "M4",
  0x7705: "M5",
  0x7706: "M6",
  0x7707: "M7",
  0x7708: "M8",
  0x7709: "M9",
  0x770a: "M10",
  0x770b: "M11",
  0x770c: "M12",
  0x770d: "M13",
  0x770e: "M14",
  0x770f: "M15",
  0x7710: "M16",
  0x7711: "M17",
  0x7712: "M18",
  0x7713: "M19",
  0x7714: "M20",
  0x7715: "M21",
  0x7716: "M22",
  0x7717: "M23",
  0x7718: "M24",
  0x7719: "M25",
  0x771a: "M26",
  0x771b: "M27",
  0x771c: "M28",
  0x771d: "M29",
  0x771e: "M30",
  0x771f: "M31",
  0x7720: "M32",
  0x7721: "M33",
  0x7722: "M34",
  0x7723: "M35",
  0x7724: "M36",
  0x7725: "M37",
  0x7726: "M38",
  0x7727: "M39",
  0x7728: "M40",
  0x7729: "M41",
  0x772a: "M42",
  0x772b: "M43",
  0x772c: "M44",
  0x772d: "M45",
  0x772e: "M46",
  0x772f: "M47",
  0x7730: "M48",
  0x7731: "M49",
  0x7732: "M50",
  0x7733: "M51",
  0x7734: "M52",
  0x7735: "M53",
  0x7736: "M54",
  0x7737: "M55",
  0x7738: "M56",
  0x7739: "M57",
  0x773a: "M58",
  0x773b: "M59",
  0x773c: "M60",
  0x773d: "M61",
  0x773e: "M62",
  0x773f: "M63",
  0x7740: "M64",
  0x7741: "M65",
  0x7742: "M66",
  0x7743: "M67",
  0x7744: "M68",
  0x7745: "M69",
  0x7746: "M70",
  0x7747: "M71",
  0x7748: "M72",
  0x7749: "M73",
  0x774a: "M74",
  0x774b: "M75",
  0x774c: "M76",
  0x774d: "M77",
  0x774e: "M78",
  0x774f: "M79",
  0x7750: "M80",
  0x7751: "M81",
  0x7752: "M82",
  0x7753: "M83",
  0x7754: "M84",
  0x7755: "M85",
  0x7756: "M86",
  0x7757: "M87",
  0x7758: "M88",
  0x7759: "M89",
  0x775a: "M90",
  0x775b: "M91",
  0x775c: "M92",
  0x775d: "M93",
  0x775e: "M94",
  0x775f: "M95",
  0x7760: "M96",
  0x7761: "M97",
  0x7762: "M98",
  0x7763: "M99",
  0x7764: "M100",
  0x7765: "M101",
  0x7766: "M102",
  0x7767: "M103",
  0x7768: "M104",
  0x7769: "M105",
  0x776a: "M106",
  0x776b: "M107",
  0x776c: "M108",
  0x776d: "M109",
  0x776e: "M110",
  0x776f: "M111",
  0x7770: "M112",
  0x7771: "M113",
  0x7772: "M114",
  0x7773: "M115",
  0x7774: "M116",
  0x7775: "M117",
  0x7776: "M118",
  0x7777: "M119",
  0x7778: "M120",
  0x7779: "M121",
  0x777a: "M122",
  0x777b: "M123",
  0x777c: "M124",
  0x777d: "M125",
  0x777e: "M126",
  0x777f: "M127",
  0x7780: "M128",
  0x7781: "M129",
  0x7782: "M130",
  0x7783: "M131",
  0x7784: "M132",
  0x7785: "M133",
  0x7786: "M134",
  0x7787: "M135",
  0x7788: "M136",
  0x7789: "M137",
  0x778a: "M138",
  0x778b: "M139",
  0x778c: "M140",
  0x778d: "M141",
  0x778e: "M142",
  0x778f: "M143",
  0x7790: "M144",
  0x7791: "M145",
  0x7792: "M146",
  0x7793: "M147",
  0x7794: "M148",
  0x7795: "M149",
  0x7796: "M150",
  0x7797: "M151",
  0x7798: "M152",
  0x7799: "M153",
  0x779a: "M154",
  0x779b: "M155",
  0x779c: "M156",
  0x779d: "M157",
  0x779e: "M158",
  0x779f: "M159",
  0x77a0: "M160",
  0x77a1: "M161",
  0x77a2: "M162",
  0x77a3: "M163",
  0x77a4: "M164",
  0x77a5: "M165",
  0x77a6: "M166",
  0x77a7: "M167",
  0x77a8: "M168",
  0x77a9: "M169",
  0x77aa: "M170",
  0x77ab: "M171",
  0x77ac: "M172",
  0x77ad: "M173",
  0x77ae: "M174",
  0x77af: "M175",
  0x77b0: "M176",
  0x77b1: "M177",
  0x77b2: "M178",
  0x77b3: "M179",
  0x77b4: "M180",
  0x77b5: "M181",
  0x77b6: "M182",
  0x77b7: "M183",
  0x77b8: "M184",
  0x77b9: "M185",
  0x77ba: "M186",
  0x77bb: "M187",
  0x77bc: "M188",
  0x77bd: "M189",
  0x77be: "M190",
  0x77bf: "M191",
  0x77c0: "M192",
  0x77c1: "M193",
  0x77c2: "M194",
  0x77c3: "M195",
  0x77c4: "M196",
  0x77c5: "M197",
  0x77c6: "M198",
  0x77c7: "M199",
  0x77c8: "M200",
  0x77c9: "M201",
  0x77ca: "M202",
  0x77cb: "M203",
  0x77cc: "M204",
  0x77cd: "M205",
  0x77ce: "M206",
  0x77cf: "M207",
  0x77d0: "M208",
  0x77d1: "M209",
  0x77d2: "M210",
  0x77d3: "M211",
  0x77d4: "M212",
  0x77d5: "M213",
  0x77d6: "M214",
  0x77d7: "M215",
  0x77d8: "M216",
  0x77d9: "M217",
  0x77da: "M218",
  0x77db: "M219",
  0x77dc: "M220",
  0x77dd: "M221",
  0x77de: "M222",
  0x77df: "M223",
  0x77e0: "M224",
  0x77e1: "M225",
  0x77e2: "M226",
  0x77e3: "M227",
  0x77e4: "M228",
  0x77e5: "M229",
  0x77e6: "M230",
  0x77e7: "M231",
  0x77e8: "M232",
  0x77e9: "M233",
  0x77ea: "M234",
  0x77eb: "M235",
  0x77ec: "M236",
  0x77ed: "M237",
  0x77ee: "M238",
  0x77ef: "M239",
  0x77f0: "M240",
  0x77f1: "M241",
  0x77f2: "M242",
  0x77f3: "M243",
  0x77f4: "M244",
  0x77f5: "M245",
  0x77f6: "M246",
  0x77f7: "M247",
  0x77f8: "M248",
  0x77f9: "M249",
  0x77fa: "M250",
  0x77fb: "M251",
  0x77fc: "M252",
  0x77fd: "M253",
  0x77fe: "M254",
  0x77ff: "M255",
  0x7800: "BL_ON",
  0x7801: "BL_OFF",
  0x7802: "BL_TOGG",
  0x7803: "BL_DEC",
  0x7804: "BL_INC",
  0x7805: "BL_STEP",
  0x7806: "BL_BRTG",
  0x7810: "QK_LED_MATRIX_ON",
  0x7811: "QK_LED_MATRIX_OFF",
  0x7812: "QK_LED_MATRIX_TOGGLE",
  0x7813: "QK_LED_MATRIX_MODE_NEXT",
  0x7814: "QK_LED_MATRIX_MODE_PREVIOUS",
  0x7815: "QK_LED_MATRIX_BRIGHTNESS_UP",
  0x7816: "QK_LED_MATRIX_BRIGHTNESS_DOWN",
  0x7817: "QK_LED_MATRIX_SPEED_UP",
  0x7818: "QK_LED_MATRIX_SPEED_DOWN",
  0x7820: "RGB_TOG",
  0x7821: "RGB_MOD",
  0x7822: "RGB_RMOD",
  0x7823: "RGB_HUI",
  0x7824: "RGB_HUD",
  0x7825: "RGB_SAI",
  0x7826: "RGB_SAD",
  0x7827: "RGB_VAI",
  0x7828: "RGB_VAD",
  0x7829: "RGB_SPI",
  0x782a: "RGB_SPD",
  0x782b: "RGB_M_P",
  0x782c: "RGB_M_B",
  0x782d: "RGB_M_R",
  0x782e: "RGB_M_SW",
  0x782f: "RGB_M_SN",
  0x7830: "RGB_M_K",
  0x7831: "RGB_M_X",
  0x7832: "RGB_M_G",
  0x7833: "RGB_M_T",
  0x7834: "RGB_MODE_TWINKLE",
  0x7840: "QK_RGB_MATRIX_ON",
  0x7841: "QK_RGB_MATRIX_OFF",
  0x7842: "QK_RGB_MATRIX_TOGGLE",
  0x7843: "QK_RGB_MATRIX_MODE_NEXT",
  0x7844: "QK_RGB_MATRIX_MODE_PREVIOUS",
  0x7845: "QK_RGB_MATRIX_HUE_UP",
  0x7846: "QK_RGB_MATRIX_HUE_DOWN",
  0x7847: "QK_RGB_MATRIX_SATURATION_UP",
  0x7848: "QK_RGB_MATRIX_SATURATION_DOWN",
  0x7849: "QK_RGB_MATRIX_VALUE_UP",
  0x784a: "QK_RGB_MATRIX_VALUE_DOWN",
  0x784b: "QK_RGB_MATRIX_SPEED_UP",
  0x784c: "QK_RGB_MATRIX_SPEED_DOWN",
  0x78ff: "QK_LIGHTING_MAX",
  0x7c00: "RESET",
  0x7c01: "QK_REBOOT",
  0x7c02: "QK_DEBUG_TOGGLE",
  0x7c03: "QK_CLEAR_EEPROM",
  0x7c04: "QK_MAKE",
  0x7c10: "KC_ASDN",
  0x7c11: "KC_ASUP",
  0x7c12: "KC_ASRP",
  0x7c13: "KC_ASON",
  0x7c14: "KC_ASOFF",
  0x7c15: "KC_ASTG",
  0x7c16: "KC_GESC",
  0x7c17: "QK_VELOCIKEY_TOGGLE",
  0x7c18: "KC_LCPO",
  0x7c19: "KC_RCPC",
  0x7c1a: "KC_LSPO",
  0x7c1b: "KC_RSPC",
  0x7c1c: "KC_LAPO",
  0x7c1d: "KC_RAPC",
  0x7c1e: "KC_SFTENT",
  0x7c20: "QK_OUTPUT_AUTO",
  0x7c21: "QK_OUTPUT_USB",
  0x7c22: "QK_OUTPUT_BLUETOOTH",
  0x7c30: "QK_UNICODE_MODE_NEXT",
  0x7c31: "QK_UNICODE_MODE_PREVIOUS",
  0x7c32: "QK_UNICODE_MODE_MACOS",
  0x7c33: "QK_UNICODE_MODE_LINUX",
  0x7c34: "QK_UNICODE_MODE_WINDOWS",
  0x7c35: "QK_UNICODE_MODE_BSD",
  0x7c36: "QK_UNICODE_MODE_WINCOMPOSE",
  0x7c37: "QK_UNICODE_MODE_EMACS",
  0x7c40: "HPT_ON",
  0x7c41: "HPT_OFF",
  0x7c42: "HPT_TOG",
  0x7c43: "HPT_RST",
  0x7c44: "HPT_FBK",
  0x7c45: "HPT_BUZ",
  0x7c46: "HPT_MODI",
  0x7c47: "HPT_MODD",
  0x7c48: "HPT_CONT",
  0x7c49: "HPT_CONI",
  0x7c4a: "HPT_COND",
  0x7c4b: "HPT_DWLI",
  0x7c4c: "HPT_DWLD",
  0x7c50: "CMB_ON",
  0x7c51: "CMB_OFF",
  0x7c52: "CMB_TOG",
  0x7c53: "DYN_REC_START1",
  0x7c54: "DYN_REC_START2",
  0x7c55: "DYN_REC_STOP",
  0x7c56: "DYN_MACRO_PLAY1",
  0x7c57: "DYN_MACRO_PLAY2",
  0x7c58: "QK_LEADER",
  0x7c59: "QK_LOCK",
  0x7c5a: "QK_ONE_SHOT_ON",
  0x7c5b: "QK_ONE_SHOT_OFF",
  0x7c5c: "QK_ONE_SHOT_TOGGLE",
  0x7c5d: "QK_KEY_OVERRIDE_TOGGLE",
  0x7c5e: "QK_KEY_OVERRIDE_ON",
  0x7c5f: "QK_KEY_OVERRIDE_OFF",
  0x7c60: "QK_SECURE_LOCK",
  0x7c61: "QK_SECURE_UNLOCK",
  0x7c62: "QK_SECURE_TOGGLE",
  0x7c63: "QK_SECURE_REQUEST",
  0x7c70: "QK_DYNAMIC_TAPPING_TERM_PRINT",
  0x7c71: "QK_DYNAMIC_TAPPING_TERM_UP",
  0x7c72: "QK_DYNAMIC_TAPPING_TERM_DOWN",
  0x7c73: "QK_CAPS_WORD_TOGGLE",
  0x7c74: "QK_AUTOCORRECT_ON",
  0x7c75: "QK_AUTOCORRECT_OFF",
  0x7c76: "QK_AUTOCORRECT_TOGGLE",
  0x7c77: "FN_MO13",
  0x7c78: "FN_MO23",
  0x7c79: "QK_REPEAT_KEY",
  0x7c7a: "QK_ALT_REPEAT_KEY",
  0x7dff: "QK_QUANTUM_MAX",
  0x7e00: "USER00",
  0x7e01: "USER01",
  0x7e02: "USER02",
  0x7e03: "USER03",
  0x7e04: "USER04",
  0x7e05: "USER05",
  0x7e06: "USER06",
  0x7e07: "USER07",
  0x7e08: "USER08",
  0x7e09: "USER09",
  0x7e0a: "USER10",
  0x7e0b: "USER11",
  0x7e0c: "USER12",
  0x7e0d: "USER13",
  0x7e0e: "USER14",
  0x7e0f: "USER15",
  0x7e10: "USER16",
  0x7e11: "USER17",
  0x7e12: "USER18",
  0x7e13: "USER19",
  0x7e14: "USER20",
  0x7e15: "USER21",
  0x7e16: "USER22",
  0x7e17: "USER23",
  0x7e18: "USER24",
  0x7e19: "USER25",
  0x7e1a: "USER26",
  0x7e1b: "USER27",
  0x7e1c: "USER28",
  0x7e1d: "USER29",
  0x7e1e: "USER30",
  0x7e1f: "USER31",
  0x7e20: "USER32",
  0x7e21: "USER33",
  0x7e22: "USER34",
  0x7e23: "USER35",
  0x7e24: "USER36",
  0x7e25: "USER37",
  0x7e26: "USER38",
  0x7e27: "USER39",
  0x7e28: "USER40",
  0x7e29: "USER41",
  0x7e2a: "USER42",
  0x7e2b: "USER43",
  0x7e2c: "USER44",
  0x7e2d: "USER45",
  0x7e2e: "USER46",
  0x7e2f: "USER47",
  0x7e30: "USER48",
  0x7e31: "USER49",
  0x7e32: "USER50",
  0x7e33: "USER51",
  0x7e34: "USER52",
  0x7e35: "USER53",
  0x7e36: "USER54",
  0x7e37: "USER55",
  0x7e38: "USER56",
  0x7e39: "USER57",
  0x7e3a: "USER58",
  0x7e3b: "USER59",
  0x7e3c: "USER60",
  0x7e3d: "USER61",
  0x7e3e: "USER62",
  0x7e3f: "USER63",
  0x7e40: "QK_USER",
  0x7e41: "QK_USER_1",
  0x7e42: "QK_USER_2",
  0x7e43: "QK_USER_3",
  0x7e44: "QK_USER_4",
  0x7e45: "QK_USER_5",
  0x7e46: "QK_USER_6",
  0x7e47: "QK_USER_7",
  0x7e48: "QK_USER_8",
  0x7e49: "QK_USER_9",
  0x7e4a: "QK_USER_10",
  0x7e4b: "QK_USER_11",
  0x7e4c: "QK_USER_12",
  0x7e4d: "QK_USER_13",
  0x7e4e: "QK_USER_14",
  0x7e4f: "QK_USER_15",
  0x7e50: "QK_USER_16",
  0x7e51: "QK_USER_17",
  0x7e52: "QK_USER_18",
  0x7e53: "QK_USER_19",
  0x7e54: "QK_USER_20",
  0x7e55: "QK_USER_21",
  0x7e56: "QK_USER_22",
  0x7e57: "QK_USER_23",
  0x7e58: "QK_USER_24",
  0x7e59: "QK_USER_25",
  0x7e5a: "QK_USER_26",
  0x7e5b: "QK_USER_27",
  0x7e5c: "QK_USER_28",
  0x7e5d: "QK_USER_29",
  0x7e5e: "QK_USER_30",
  0x7e5f: "QK_USER_31",
  0x7fff: "QK_USER_MAX",
  0x8000: "QK_UNICODEMAP",
  0xbfff: "QK_UNICODEMAP_MAX",
  0xc000: "QK_UNICODEMAP_PAIR",
  0xffff: "QK_UNICODE_MAX"
};

const KEYMAP = {
  "KC_NO": {
    "code": 0x0000,
    "qmkid": "KC_NO",
    "str": "",
    "title": "KC_NO"
  },
  "KC_TRNS": {
    "code": 0x0001,
    "qmkid": "KC_TRNS",
    "str": "\u25bd",
    "title": "KC_TRNS"
  },
  "KC_A": {
    "code": 0x0004,
    "qmkid": "KC_A",
    "str": "A",
    "title": "KC_A"
  },
  "KC_B": {
    "code": 0x0005,
    "qmkid": "KC_B",
    "str": "B",
    "title": "KC_B"
  },
  "KC_C": {
    "code": 0x0006,
    "qmkid": "KC_C",
    "str": "C",
    "title": "KC_C"
  },
  "KC_D": {
    "code": 0x0007,
    "qmkid": "KC_D",
    "str": "D",
    "title": "KC_D"
  },
  "KC_E": {
    "code": 0x0008,
    "qmkid": "KC_E",
    "str": "E",
    "title": "KC_E"
  },
  "KC_F": {
    "code": 0x0009,
    "qmkid": "KC_F",
    "str": "F",
    "title": "KC_F"
  },
  "KC_G": {
    "code": 0x000a,
    "qmkid": "KC_G",
    "str": "G",
    "title": "KC_G"
  },
  "KC_H": {
    "code": 0x000b,
    "qmkid": "KC_H",
    "str": "H",
    "title": "KC_H"
  },
  "KC_I": {
    "code": 0x000c,
    "qmkid": "KC_I",
    "str": "I",
    "title": "KC_I"
  },
  "KC_J": {
    "code": 0x000d,
    "qmkid": "KC_J",
    "str": "J",
    "title": "KC_J"
  },
  "KC_K": {
    "code": 0x000e,
    "qmkid": "KC_K",
    "str": "K",
    "title": "KC_K"
  },
  "KC_L": {
    "code": 0x000f,
    "qmkid": "KC_L",
    "str": "L",
    "title": "KC_L"
  },
  "KC_M": {
    "code": 0x0010,
    "qmkid": "KC_M",
    "str": "M",
    "title": "KC_M"
  },
  "KC_N": {
    "code": 0x0011,
    "qmkid": "KC_N",
    "str": "N",
    "title": "KC_N"
  },
  "KC_O": {
    "code": 0x0012,
    "qmkid": "KC_O",
    "str": "O",
    "title": "KC_O"
  },
  "KC_P": {
    "code": 0x0013,
    "qmkid": "KC_P",
    "str": "P",
    "title": "KC_P"
  },
  "KC_Q": {
    "code": 0x0014,
    "qmkid": "KC_Q",
    "str": "Q",
    "title": "KC_Q"
  },
  "KC_R": {
    "code": 0x0015,
    "qmkid": "KC_R",
    "str": "R",
    "title": "KC_R"
  },
  "KC_S": {
    "code": 0x0016,
    "qmkid": "KC_S",
    "str": "S",
    "title": "KC_S"
  },
  "KC_T": {
    "code": 0x0017,
    "qmkid": "KC_T",
    "str": "T",
    "title": "KC_T"
  },
  "KC_U": {
    "code": 0x0018,
    "qmkid": "KC_U",
    "str": "U",
    "title": "KC_U"
  },
  "KC_V": {
    "code": 0x0019,
    "qmkid": "KC_V",
    "str": "V",
    "title": "KC_V"
  },
  "KC_W": {
    "code": 0x001a,
    "qmkid": "KC_W",
    "str": "W",
    "title": "KC_W"
  },
  "KC_X": {
    "code": 0x001b,
    "qmkid": "KC_X",
    "str": "X",
    "title": "KC_X"
  },
  "KC_Y": {
    "code": 0x001c,
    "qmkid": "KC_Y",
    "str": "Y",
    "title": "KC_Y"
  },
  "KC_Z": {
    "code": 0x001d,
    "qmkid": "KC_Z",
    "str": "Z",
    "title": "KC_Z"
  },
  "KC_1": {
    "code": 0x001e,
    "qmkid": "KC_1",
    "str": "!\n1",
    "title": "KC_1"
  },
  "KC_2": {
    "code": 0x001f,
    "qmkid": "KC_2",
    "str": "@\n2",
    "title": "KC_2"
  },
  "KC_3": {
    "code": 0x0020,
    "qmkid": "KC_3",
    "str": "#\n3",
    "title": "KC_3"
  },
  "KC_4": {
    "code": 0x0021,
    "qmkid": "KC_4",
    "str": "$\n4",
    "title": "KC_4"
  },
  "KC_5": {
    "code": 0x0022,
    "qmkid": "KC_5",
    "str": "%\n5",
    "title": "KC_5"
  },
  "KC_6": {
    "code": 0x0023,
    "qmkid": "KC_6",
    "str": "^\n6",
    "title": "KC_6"
  },
  "KC_7": {
    "code": 0x0024,
    "qmkid": "KC_7",
    "str": "&\n7",
    "title": "KC_7"
  },
  "KC_8": {
    "code": 0x0025,
    "qmkid": "KC_8",
    "str": "*\n8",
    "title": "KC_8"
  },
  "KC_9": {
    "code": 0x0026,
    "qmkid": "KC_9",
    "str": "(\n9",
    "title": "KC_9"
  },
  "KC_0": {
    "code": 0x0027,
    "qmkid": "KC_0",
    "str": ")\n0",
    "title": "KC_0"
  },
  "KC_ENTER": {
    "code": 0x0028,
    "qmkid": "KC_ENTER",
    "str": "Enter",
    "title": "KC_ENTER"
  },
  "KC_ESCAPE": {
    "code": 0x0029,
    "qmkid": "KC_ESCAPE",
    "str": "Esc",
    "title": "KC_ESCAPE"
  },
  "KC_BSPACE": {
    "code": 0x002a,
    "qmkid": "KC_BSPACE",
    "str": "Bksp",
    "title": "KC_BSPACE"
  },
  "KC_TAB": {
    "code": 0x002b,
    "qmkid": "KC_TAB",
    "str": "Tab",
    "title": "KC_TAB"
  },
  "KC_SPACE": {
    "code": 0x002c,
    "qmkid": "KC_SPACE",
    "str": "Space",
    "title": "KC_SPACE"
  },
  "KC_MINUS": {
    "code": 0x002d,
    "qmkid": "KC_MINUS",
    "str": "_\n-",
    "title": "KC_MINUS"
  },
  "KC_EQUAL": {
    "code": 0x002e,
    "qmkid": "KC_EQUAL",
    "str": "+\n=",
    "title": "KC_EQUAL"
  },
  "KC_LBRACKET": {
    "code": 0x002f,
    "qmkid": "KC_LBRACKET",
    "str": "{\n[",
    "title": "KC_LBRACKET"
  },
  "KC_RBRACKET": {
    "code": 0x0030,
    "qmkid": "KC_RBRACKET",
    "str": "}\n]",
    "title": "KC_RBRACKET"
  },
  "KC_BSLASH": {
    "code": 0x0031,
    "qmkid": "KC_BSLASH",
    "str": "|\n\\",
    "title": "KC_BSLASH"
  },
  "KC_NONUS_HASH": {
    "code": 0x0032,
    "qmkid": "KC_NONUS_HASH",
    "str": "~\n#",
    "title": "Non-US # and ~"
  },
  "KC_SCOLON": {
    "code": 0x0033,
    "qmkid": "KC_SCOLON",
    "str": ":\n;",
    "title": "KC_SCOLON"
  },
  "KC_QUOTE": {
    "code": 0x0034,
    "qmkid": "KC_QUOTE",
    "str": "\"\n'",
    "title": "KC_QUOTE"
  },
  "KC_GRAVE": {
    "code": 0x0035,
    "qmkid": "KC_GRAVE",
    "str": "~\n`",
    "title": "KC_GRAVE"
  },
  "KC_COMMA": {
    "code": 0x0036,
    "qmkid": "KC_COMMA",
    "str": "<\n,",
    "title": "KC_COMMA"
  },
  "KC_DOT": {
    "code": 0x0037,
    "qmkid": "KC_DOT",
    "str": ">\n.",
    "title": "KC_DOT"
  },
  "KC_SLASH": {
    "code": 0x0038,
    "qmkid": "KC_SLASH",
    "str": "?\n/",
    "title": "KC_SLASH"
  },
  "KC_CAPSLOCK": {
    "code": 0x0039,
    "qmkid": "KC_CAPSLOCK",
    "str": "Caps\nLock",
    "title": "KC_CAPSLOCK"
  },
  "KC_F1": {
    "code": 0x003a,
    "qmkid": "KC_F1",
    "str": "F1",
    "title": "KC_F1"
  },
  "KC_F2": {
    "code": 0x003b,
    "qmkid": "KC_F2",
    "str": "F2",
    "title": "KC_F2"
  },
  "KC_F3": {
    "code": 0x003c,
    "qmkid": "KC_F3",
    "str": "F3",
    "title": "KC_F3"
  },
  "KC_F4": {
    "code": 0x003d,
    "qmkid": "KC_F4",
    "str": "F4",
    "title": "KC_F4"
  },
  "KC_F5": {
    "code": 0x003e,
    "qmkid": "KC_F5",
    "str": "F5",
    "title": "KC_F5"
  },
  "KC_F6": {
    "code": 0x003f,
    "qmkid": "KC_F6",
    "str": "F6",
    "title": "KC_F6"
  },
  "KC_F7": {
    "code": 0x0040,
    "qmkid": "KC_F7",
    "str": "F7",
    "title": "KC_F7"
  },
  "KC_F8": {
    "code": 0x0041,
    "qmkid": "KC_F8",
    "str": "F8",
    "title": "KC_F8"
  },
  "KC_F9": {
    "code": 0x0042,
    "qmkid": "KC_F9",
    "str": "F9",
    "title": "KC_F9"
  },
  "KC_F10": {
    "code": 0x0043,
    "qmkid": "KC_F10",
    "str": "F10",
    "title": "KC_F10"
  },
  "KC_F11": {
    "code": 0x0044,
    "qmkid": "KC_F11",
    "str": "F11",
    "title": "KC_F11"
  },
  "KC_F12": {
    "code": 0x0045,
    "qmkid": "KC_F12",
    "str": "F12",
    "title": "KC_F12"
  },
  "KC_PSCREEN": {
    "code": 0x0046,
    "qmkid": "KC_PSCREEN",
    "str": "Print\nScreen",
    "title": "KC_PSCREEN"
  },
  "KC_SCROLLLOCK": {
    "code": 0x0047,
    "qmkid": "KC_SCROLLLOCK",
    "str": "Scroll\nLock",
    "title": "KC_SCROLLLOCK"
  },
  "KC_PAUSE": {
    "code": 0x0048,
    "qmkid": "KC_PAUSE",
    "str": "Pause",
    "title": "KC_PAUSE"
  },
  "KC_INSERT": {
    "code": 0x0049,
    "qmkid": "KC_INSERT",
    "str": "Insert",
    "title": "KC_INSERT"
  },
  "KC_HOME": {
    "code": 0x004a,
    "qmkid": "KC_HOME",
    "str": "Home",
    "title": "KC_HOME"
  },
  "KC_PGUP": {
    "code": 0x004b,
    "qmkid": "KC_PGUP",
    "str": "Page\nUp",
    "title": "KC_PGUP"
  },
  "KC_DELETE": {
    "code": 0x004c,
    "qmkid": "KC_DELETE",
    "str": "Del",
    "title": "KC_DELETE"
  },
  "KC_END": {
    "code": 0x004d,
    "qmkid": "KC_END",
    "str": "End",
    "title": "KC_END"
  },
  "KC_PGDOWN": {
    "code": 0x004e,
    "qmkid": "KC_PGDOWN",
    "str": "Page\nDown",
    "title": "KC_PGDOWN"
  },
  "KC_RIGHT": {
    "code": 0x004f,
    "qmkid": "KC_RIGHT",
    "str": "Right",
    "title": "KC_RIGHT"
  },
  "KC_LEFT": {
    "code": 0x0050,
    "qmkid": "KC_LEFT",
    "str": "Left",
    "title": "KC_LEFT"
  },
  "KC_DOWN": {
    "code": 0x0051,
    "qmkid": "KC_DOWN",
    "str": "Down",
    "title": "KC_DOWN"
  },
  "KC_UP": {
    "code": 0x0052,
    "qmkid": "KC_UP",
    "str": "Up",
    "title": "KC_UP"
  },
  "KC_NUMLOCK": {
    "code": 0x0053,
    "qmkid": "KC_NUMLOCK",
    "str": "Num\nLock",
    "title": "KC_NUMLOCK"
  },
  "KC_KP_SLASH": {
    "code": 0x0054,
    "qmkid": "KC_KP_SLASH",
    "str": "/",
    "title": "KC_KP_SLASH"
  },
  "KC_KP_ASTERISK": {
    "code": 0x0055,
    "qmkid": "KC_KP_ASTERISK",
    "str": "*",
    "title": "KC_KP_ASTERISK"
  },
  "KC_KP_MINUS": {
    "code": 0x0056,
    "qmkid": "KC_KP_MINUS",
    "str": "-",
    "title": "KC_KP_MINUS"
  },
  "KC_KP_PLUS": {
    "code": 0x0057,
    "qmkid": "KC_KP_PLUS",
    "str": "+",
    "title": "KC_KP_PLUS"
  },
  "KC_KP_ENTER": {
    "code": 0x0058,
    "qmkid": "KC_KP_ENTER",
    "str": "Num\nEnter",
    "title": "KC_KP_ENTER"
  },
  "KC_KP_1": {
    "code": 0x0059,
    "qmkid": "KC_KP_1",
    "str": "1",
    "title": "KC_KP_1"
  },
  "KC_KP_2": {
    "code": 0x005a,
    "qmkid": "KC_KP_2",
    "str": "2",
    "title": "KC_KP_2"
  },
  "KC_KP_3": {
    "code": 0x005b,
    "qmkid": "KC_KP_3",
    "str": "3",
    "title": "KC_KP_3"
  },
  "KC_KP_4": {
    "code": 0x005c,
    "qmkid": "KC_KP_4",
    "str": "4",
    "title": "KC_KP_4"
  },
  "KC_KP_5": {
    "code": 0x005d,
    "qmkid": "KC_KP_5",
    "str": "5",
    "title": "KC_KP_5"
  },
  "KC_KP_6": {
    "code": 0x005e,
    "qmkid": "KC_KP_6",
    "str": "6",
    "title": "KC_KP_6"
  },
  "KC_KP_7": {
    "code": 0x005f,
    "qmkid": "KC_KP_7",
    "str": "7",
    "title": "KC_KP_7"
  },
  "KC_KP_8": {
    "code": 0x0060,
    "qmkid": "KC_KP_8",
    "str": "8",
    "title": "KC_KP_8"
  },
  "KC_KP_9": {
    "code": 0x0061,
    "qmkid": "KC_KP_9",
    "str": "9",
    "title": "KC_KP_9"
  },
  "KC_KP_0": {
    "code": 0x0062,
    "qmkid": "KC_KP_0",
    "str": "0",
    "title": "KC_KP_0"
  },
  "KC_KP_DOT": {
    "code": 0x0063,
    "qmkid": "KC_KP_DOT",
    "str": ".",
    "title": "KC_KP_DOT"
  },
  "KC_NONUS_BSLASH": {
    "code": 0x0064,
    "qmkid": "KC_NONUS_BSLASH",
    "str": "|\n\\",
    "title": "Non-US \\ and |"
  },
  "KC_APPLICATION": {
    "code": 0x0065,
    "qmkid": "KC_APPLICATION",
    "str": "Menu",
    "title": "KC_APPLICATION"
  },
  "KC_KB_POWER": {
    "code": 0x0066,
    "qmkid": "KC_KB_POWER",
    "str": "KC_KB_POWER",
    "title": "KC_KB_POWER"
  },
  "KC_KP_EQUAL": {
    "code": 0x0067,
    "qmkid": "KC_KP_EQUAL",
    "str": "=",
    "title": "KC_KP_EQUAL"
  },
  "KC_F13": {
    "code": 0x0068,
    "qmkid": "KC_F13",
    "str": "F13",
    "title": "KC_F13"
  },
  "KC_F14": {
    "code": 0x0069,
    "qmkid": "KC_F14",
    "str": "F14",
    "title": "KC_F14"
  },
  "KC_F15": {
    "code": 0x006a,
    "qmkid": "KC_F15",
    "str": "F15",
    "title": "KC_F15"
  },
  "KC_F16": {
    "code": 0x006b,
    "qmkid": "KC_F16",
    "str": "F16",
    "title": "KC_F16"
  },
  "KC_F17": {
    "code": 0x006c,
    "qmkid": "KC_F17",
    "str": "F17",
    "title": "KC_F17"
  },
  "KC_F18": {
    "code": 0x006d,
    "qmkid": "KC_F18",
    "str": "F18",
    "title": "KC_F18"
  },
  "KC_F19": {
    "code": 0x006e,
    "qmkid": "KC_F19",
    "str": "F19",
    "title": "KC_F19"
  },
  "KC_F20": {
    "code": 0x006f,
    "qmkid": "KC_F20",
    "str": "F20",
    "title": "KC_F20"
  },
  "KC_F21": {
    "code": 0x0070,
    "qmkid": "KC_F21",
    "str": "F21",
    "title": "KC_F21"
  },
  "KC_F22": {
    "code": 0x0071,
    "qmkid": "KC_F22",
    "str": "F22",
    "title": "KC_F22"
  },
  "KC_F23": {
    "code": 0x0072,
    "qmkid": "KC_F23",
    "str": "F23",
    "title": "KC_F23"
  },
  "KC_F24": {
    "code": 0x0073,
    "qmkid": "KC_F24",
    "str": "F24",
    "title": "KC_F24"
  },
  "KC_EXEC": {
    "code": 0x0074,
    "qmkid": "KC_EXEC",
    "str": "Exec",
    "title": "Execute"
  },
  "KC_HELP": {
    "code": 0x0075,
    "qmkid": "KC_HELP",
    "str": "Help",
    "title": "KC_HELP"
  },
  "KC_MENU": {
    "code": 0x0076,
    "qmkid": "KC_MENU",
    "str": "KC_MENU",
    "title": "KC_MENU"
  },
  "KC_SLCT": {
    "code": 0x0077,
    "qmkid": "KC_SLCT",
    "str": "Select",
    "title": "KC_SLCT"
  },
  "KC_STOP": {
    "code": 0x0078,
    "qmkid": "KC_STOP",
    "str": "Stop",
    "title": "KC_STOP"
  },
  "KC_REDO": {
    "code": 0x0079,
    "qmkid": "KC_REDO",
    "str": "Redo",
    "title": "KC_REDO"
  },
  "KC_UNDO": {
    "code": 0x007a,
    "qmkid": "KC_UNDO",
    "str": "Undo",
    "title": "KC_UNDO"
  },
  "KC_CUT": {
    "code": 0x007b,
    "qmkid": "KC_CUT",
    "str": "Cut",
    "title": "KC_CUT"
  },
  "KC_COPY": {
    "code": 0x007c,
    "qmkid": "KC_COPY",
    "str": "Copy",
    "title": "KC_COPY"
  },
  "KC_PSTE": {
    "code": 0x007d,
    "qmkid": "KC_PSTE",
    "str": "Paste",
    "title": "KC_PSTE"
  },
  "KC_FIND": {
    "code": 0x007e,
    "qmkid": "KC_FIND",
    "str": "Find",
    "title": "KC_FIND"
  },
  "KC_KB_MUTE": {
    "code": 0x007f,
    "qmkid": "KC_KB_MUTE",
    "str": "KC_KB_MUTE",
    "title": "KC_KB_MUTE"
  },
  "KC_VOLUP": {
    "code": 0x0080,
    "qmkid": "KC_VOLUP",
    "str": "Vol +\nAlt",
    "title": "Volume Up Alternate"
  },
  "KC_VOLDOWN": {
    "code": 0x0081,
    "qmkid": "KC_VOLDOWN",
    "str": "Vol -\nAlt",
    "title": "Volume Down Alternate"
  },
  "KC_LCAP": {
    "code": 0x0082,
    "qmkid": "KC_LCAP",
    "str": "Locking\nCaps",
    "title": "Locking Caps Lock"
  },
  "KC_LNUM": {
    "code": 0x0083,
    "qmkid": "KC_LNUM",
    "str": "Locking\nNum",
    "title": "Locking Num Lock"
  },
  "KC_LSCR": {
    "code": 0x0084,
    "qmkid": "KC_LSCR",
    "str": "Locking\nScroll",
    "title": "Locking Scroll Lock"
  },
  "KC_KP_COMMA": {
    "code": 0x0085,
    "qmkid": "KC_KP_COMMA",
    "str": ",",
    "title": "KC_KP_COMMA"
  },
  "KC_KP_EQUAL_AS400": {
    "code": 0x0086,
    "qmkid": "KC_KP_EQUAL_AS400",
    "str": "KC_KP_EQUAL_AS400",
    "title": "KC_KP_EQUAL_AS400"
  },
  "KC_RO": {
    "code": 0x0087,
    "qmkid": "KC_RO",
    "str": "_\n\\",
    "title": "JIS \\ and _"
  },
  "KC_KANA": {
    "code": 0x0088,
    "qmkid": "KC_KANA",
    "str": "\u30ab\u30bf\u30ab\u30ca\n\u3072\u3089\u304c\u306a",
    "title": "JIS Katakana/Hiragana"
  },
  "KC_JYEN": {
    "code": 0x0089,
    "qmkid": "KC_JYEN",
    "str": "|\n\u00a5",
    "title": "KC_JYEN"
  },
  "KC_HENK": {
    "code": 0x008a,
    "qmkid": "KC_HENK",
    "str": "\u5909\u63db",
    "title": "JIS Henkan"
  },
  "KC_MHEN": {
    "code": 0x008b,
    "qmkid": "KC_MHEN",
    "str": "\u7121\u5909\u63db",
    "title": "JIS Muhenkan"
  },
  "KC_INTERNATIONAL_6": {
    "code": 0x008c,
    "qmkid": "KC_INTERNATIONAL_6",
    "str": "KC_INTERNATIONAL_6",
    "title": "KC_INTERNATIONAL_6"
  },
  "KC_INTERNATIONAL_7": {
    "code": 0x008d,
    "qmkid": "KC_INTERNATIONAL_7",
    "str": "KC_INTERNATIONAL_7",
    "title": "KC_INTERNATIONAL_7"
  },
  "KC_INTERNATIONAL_8": {
    "code": 0x008e,
    "qmkid": "KC_INTERNATIONAL_8",
    "str": "KC_INTERNATIONAL_8",
    "title": "KC_INTERNATIONAL_8"
  },
  "KC_INTERNATIONAL_9": {
    "code": 0x008f,
    "qmkid": "KC_INTERNATIONAL_9",
    "str": "KC_INTERNATIONAL_9",
    "title": "KC_INTERNATIONAL_9"
  },
  "KC_LANG1": {
    "code": 0x0090,
    "qmkid": "KC_LANG1",
    "str": "\ud55c\uc601\n\u304b\u306a",
    "title": "Korean Han/Yeong / JP Mac Kana"
  },
  "KC_LANG2": {
    "code": 0x0091,
    "qmkid": "KC_LANG2",
    "str": "\u6f22\u5b57\n\u82f1\u6570",
    "title": "Korean Hanja / JP Mac Eisu"
  },
  "KC_LANGUAGE_3": {
    "code": 0x0092,
    "qmkid": "KC_LANGUAGE_3",
    "str": "KC_LANGUAGE_3",
    "title": "KC_LANGUAGE_3"
  },
  "KC_LANGUAGE_4": {
    "code": 0x0093,
    "qmkid": "KC_LANGUAGE_4",
    "str": "KC_LANGUAGE_4",
    "title": "KC_LANGUAGE_4"
  },
  "KC_LANGUAGE_5": {
    "code": 0x0094,
    "qmkid": "KC_LANGUAGE_5",
    "str": "KC_LANGUAGE_5",
    "title": "KC_LANGUAGE_5"
  },
  "KC_LANGUAGE_6": {
    "code": 0x0095,
    "qmkid": "KC_LANGUAGE_6",
    "str": "KC_LANGUAGE_6",
    "title": "KC_LANGUAGE_6"
  },
  "KC_LANGUAGE_7": {
    "code": 0x0096,
    "qmkid": "KC_LANGUAGE_7",
    "str": "KC_LANGUAGE_7",
    "title": "KC_LANGUAGE_7"
  },
  "KC_LANGUAGE_8": {
    "code": 0x0097,
    "qmkid": "KC_LANGUAGE_8",
    "str": "KC_LANGUAGE_8",
    "title": "KC_LANGUAGE_8"
  },
  "KC_LANGUAGE_9": {
    "code": 0x0098,
    "qmkid": "KC_LANGUAGE_9",
    "str": "KC_LANGUAGE_9",
    "title": "KC_LANGUAGE_9"
  },
  "KC_ALTERNATE_ERASE": {
    "code": 0x0099,
    "qmkid": "KC_ALTERNATE_ERASE",
    "str": "KC_ALTERNATE_ERASE",
    "title": "KC_ALTERNATE_ERASE"
  },
  "KC_SYSTEM_REQUEST": {
    "code": 0x009a,
    "qmkid": "KC_SYSTEM_REQUEST",
    "str": "KC_SYSTEM_REQUEST",
    "title": "KC_SYSTEM_REQUEST"
  },
  "KC_CANCEL": {
    "code": 0x009b,
    "qmkid": "KC_CANCEL",
    "str": "KC_CANCEL",
    "title": "KC_CANCEL"
  },
  "KC_CLEAR": {
    "code": 0x009c,
    "qmkid": "KC_CLEAR",
    "str": "KC_CLEAR",
    "title": "KC_CLEAR"
  },
  "KC_PRIOR": {
    "code": 0x009d,
    "qmkid": "KC_PRIOR",
    "str": "KC_PRIOR",
    "title": "KC_PRIOR"
  },
  "KC_RETURN": {
    "code": 0x009e,
    "qmkid": "KC_RETURN",
    "str": "KC_RETURN",
    "title": "KC_RETURN"
  },
  "KC_SEPARATOR": {
    "code": 0x009f,
    "qmkid": "KC_SEPARATOR",
    "str": "KC_SEPARATOR",
    "title": "KC_SEPARATOR"
  },
  "KC_OUT": {
    "code": 0x00a0,
    "qmkid": "KC_OUT",
    "str": "KC_OUT",
    "title": "KC_OUT"
  },
  "KC_OPER": {
    "code": 0x00a1,
    "qmkid": "KC_OPER",
    "str": "KC_OPER",
    "title": "KC_OPER"
  },
  "KC_CLEAR_AGAIN": {
    "code": 0x00a2,
    "qmkid": "KC_CLEAR_AGAIN",
    "str": "KC_CLEAR_AGAIN",
    "title": "KC_CLEAR_AGAIN"
  },
  "KC_CRSEL": {
    "code": 0x00a3,
    "qmkid": "KC_CRSEL",
    "str": "KC_CRSEL",
    "title": "KC_CRSEL"
  },
  "KC_EXSEL": {
    "code": 0x00a4,
    "qmkid": "KC_EXSEL",
    "str": "KC_EXSEL",
    "title": "KC_EXSEL"
  },
  "KC_PWR": {
    "code": 0x00a5,
    "qmkid": "KC_PWR",
    "str": "Power",
    "title": "System Power Down"
  },
  "KC_SLEP": {
    "code": 0x00a6,
    "qmkid": "KC_SLEP",
    "str": "Sleep",
    "title": "System Sleep"
  },
  "KC_WAKE": {
    "code": 0x00a7,
    "qmkid": "KC_WAKE",
    "str": "Wake",
    "title": "System Wake"
  },
  "KC_MUTE": {
    "code": 0x00a8,
    "qmkid": "KC_MUTE",
    "str": "Mute",
    "title": "Mute Audio"
  },
  "KC_VOLU": {
    "code": 0x00a9,
    "qmkid": "KC_VOLU",
    "str": "Vol +",
    "title": "Volume Up"
  },
  "KC_VOLD": {
    "code": 0x00aa,
    "qmkid": "KC_VOLD",
    "str": "Vol -",
    "title": "Volume Down"
  },
  "KC_MNXT": {
    "code": 0x00ab,
    "qmkid": "KC_MNXT",
    "str": "Media\nNext",
    "title": "Next Track"
  },
  "KC_MPRV": {
    "code": 0x00ac,
    "qmkid": "KC_MPRV",
    "str": "Media\nPrev",
    "title": "Previous Track"
  },
  "KC_MSTP": {
    "code": 0x00ad,
    "qmkid": "KC_MSTP",
    "str": "Media\nStop",
    "title": "KC_MSTP"
  },
  "KC_MPLY": {
    "code": 0x00ae,
    "qmkid": "KC_MPLY",
    "str": "Media\nPlay",
    "title": "Play/Pause"
  },
  "KC_MSEL": {
    "code": 0x00af,
    "qmkid": "KC_MSEL",
    "str": "Media\nPlayer",
    "title": "Launch Media Player (Windows)"
  },
  "KC_EJCT": {
    "code": 0x00b0,
    "qmkid": "KC_EJCT",
    "str": "Eject",
    "title": "Eject (macOS)"
  },
  "KC_MAIL": {
    "code": 0x00b1,
    "qmkid": "KC_MAIL",
    "str": "Mail",
    "title": "Launch Mail (Windows)"
  },
  "KC_CALC": {
    "code": 0x00b2,
    "qmkid": "KC_CALC",
    "str": "Calc",
    "title": "Launch Calculator (Windows)"
  },
  "KC_MYCM": {
    "code": 0x00b3,
    "qmkid": "KC_MYCM",
    "str": "My\nPC",
    "title": "Launch My Computer (Windows)"
  },
  "KC_WSCH": {
    "code": 0x00b4,
    "qmkid": "KC_WSCH",
    "str": "Browser\nSearch",
    "title": "Browser Search (Windows)"
  },
  "KC_WHOM": {
    "code": 0x00b5,
    "qmkid": "KC_WHOM",
    "str": "Browser\nHome",
    "title": "Browser Home (Windows)"
  },
  "KC_WBAK": {
    "code": 0x00b6,
    "qmkid": "KC_WBAK",
    "str": "Browser\nBack",
    "title": "Browser Back (Windows)"
  },
  "KC_WFWD": {
    "code": 0x00b7,
    "qmkid": "KC_WFWD",
    "str": "Browser\nForward",
    "title": "Browser Forward (Windows)"
  },
  "KC_WSTP": {
    "code": 0x00b8,
    "qmkid": "KC_WSTP",
    "str": "Browser\nStop",
    "title": "Browser Stop (Windows)"
  },
  "KC_WREF": {
    "code": 0x00b9,
    "qmkid": "KC_WREF",
    "str": "Browser\nRefresh",
    "title": "Browser Refresh (Windows)"
  },
  "KC_WFAV": {
    "code": 0x00ba,
    "qmkid": "KC_WFAV",
    "str": "Browser\nFav.",
    "title": "Browser Favorites (Windows)"
  },
  "KC_MFFD": {
    "code": 0x00bb,
    "qmkid": "KC_MFFD",
    "str": "Next\nTrack\n(macOS)",
    "title": "Next Track / Fast Forward (macOS)"
  },
  "KC_MRWD": {
    "code": 0x00bc,
    "qmkid": "KC_MRWD",
    "str": "Prev\nTrack\n(macOS)",
    "title": "Previous Track / Rewind (macOS)"
  },
  "KC_BRIU": {
    "code": 0x00bd,
    "qmkid": "KC_BRIU",
    "str": "Bright.\nUp",
    "title": "Increase the brightness of screen (Laptop)"
  },
  "KC_BRID": {
    "code": 0x00be,
    "qmkid": "KC_BRID",
    "str": "Bright.\nDown",
    "title": "Decrease the brightness of screen (Laptop)"
  },
  "KC_CONTROL_PANEL": {
    "code": 0x00bf,
    "qmkid": "KC_CONTROL_PANEL",
    "str": "KC_CONTROL_PANEL",
    "title": "KC_CONTROL_PANEL"
  },
  "KC_ASSISTANT": {
    "code": 0x00c0,
    "qmkid": "KC_ASSISTANT",
    "str": "KC_ASSISTANT",
    "title": "KC_ASSISTANT"
  },
  "KC_MISSION_CONTROL": {
    "code": 0x00c1,
    "qmkid": "KC_MISSION_CONTROL",
    "str": "KC_MISSION_CONTROL",
    "title": "KC_MISSION_CONTROL"
  },
  "KC_LAUNCHPAD": {
    "code": 0x00c2,
    "qmkid": "KC_LAUNCHPAD",
    "str": "KC_LAUNCHPAD",
    "title": "KC_LAUNCHPAD"
  },
  "KC_MS_U": {
    "code": 0x00cd,
    "qmkid": "KC_MS_U",
    "str": "Mouse\nUp",
    "title": "Mouse Cursor Up"
  },
  "KC_MS_D": {
    "code": 0x00ce,
    "qmkid": "KC_MS_D",
    "str": "Mouse\nDown",
    "title": "Mouse Cursor Down"
  },
  "KC_MS_L": {
    "code": 0x00cf,
    "qmkid": "KC_MS_L",
    "str": "Mouse\nLeft",
    "title": "Mouse Cursor Left"
  },
  "KC_MS_R": {
    "code": 0x00d0,
    "qmkid": "KC_MS_R",
    "str": "Mouse\nRight",
    "title": "Mouse Cursor Right"
  },
  "KC_BTN1": {
    "code": 0x00d1,
    "qmkid": "KC_BTN1",
    "str": "Mouse\n1",
    "title": "Mouse Button 1"
  },
  "KC_BTN2": {
    "code": 0x00d2,
    "qmkid": "KC_BTN2",
    "str": "Mouse\n2",
    "title": "Mouse Button 2"
  },
  "KC_BTN3": {
    "code": 0x00d3,
    "qmkid": "KC_BTN3",
    "str": "Mouse\n3",
    "title": "Mouse Button 3"
  },
  "KC_BTN4": {
    "code": 0x00d4,
    "qmkid": "KC_BTN4",
    "str": "Mouse\n4",
    "title": "Mouse Button 4"
  },
  "KC_BTN5": {
    "code": 0x00d5,
    "qmkid": "KC_BTN5",
    "str": "Mouse\n5",
    "title": "Mouse Button 5"
  },
  "KC_MS_BTN6": {
    "code": 0x00d6,
    "qmkid": "KC_MS_BTN6",
    "str": "KC_MS_BTN6",
    "title": "KC_MS_BTN6"
  },
  "KC_MS_BTN7": {
    "code": 0x00d7,
    "qmkid": "KC_MS_BTN7",
    "str": "KC_MS_BTN7",
    "title": "KC_MS_BTN7"
  },
  "KC_MS_BTN8": {
    "code": 0x00d8,
    "qmkid": "KC_MS_BTN8",
    "str": "KC_MS_BTN8",
    "title": "KC_MS_BTN8"
  },
  "KC_WH_U": {
    "code": 0x00d9,
    "qmkid": "KC_WH_U",
    "str": "Mouse\nWheel\nUp",
    "title": "KC_WH_U"
  },
  "KC_WH_D": {
    "code": 0x00da,
    "qmkid": "KC_WH_D",
    "str": "Mouse\nWheel\nDown",
    "title": "KC_WH_D"
  },
  "KC_WH_L": {
    "code": 0x00db,
    "qmkid": "KC_WH_L",
    "str": "Mouse\nWheel\nLeft",
    "title": "KC_WH_L"
  },
  "KC_WH_R": {
    "code": 0x00dc,
    "qmkid": "KC_WH_R",
    "str": "Mouse\nWheel\nRight",
    "title": "KC_WH_R"
  },
  "KC_ACL0": {
    "code": 0x00dd,
    "qmkid": "KC_ACL0",
    "str": "Mouse\nAccel\n0",
    "title": "Set mouse acceleration to 0"
  },
  "KC_ACL1": {
    "code": 0x00de,
    "qmkid": "KC_ACL1",
    "str": "Mouse\nAccel\n1",
    "title": "Set mouse acceleration to 1"
  },
  "KC_ACL2": {
    "code": 0x00df,
    "qmkid": "KC_ACL2",
    "str": "Mouse\nAccel\n2",
    "title": "Set mouse acceleration to 2"
  },
  "KC_LCTRL": {
    "code": 0x00e0,
    "qmkid": "KC_LCTRL",
    "str": "LCtrl",
    "title": "KC_LCTRL"
  },
  "KC_LSHIFT": {
    "code": 0x00e1,
    "qmkid": "KC_LSHIFT",
    "str": "LShift",
    "title": "KC_LSHIFT"
  },
  "KC_LALT": {
    "code": 0x00e2,
    "qmkid": "KC_LALT",
    "str": "LAlt",
    "title": "KC_LALT"
  },
  "KC_LGUI": {
    "code": 0x00e3,
    "qmkid": "KC_LGUI",
    "str": "LGui",
    "title": "KC_LGUI"
  },
  "KC_RCTRL": {
    "code": 0x00e4,
    "qmkid": "KC_RCTRL",
    "str": "RCtrl",
    "title": "KC_RCTRL"
  },
  "KC_RSHIFT": {
    "code": 0x00e5,
    "qmkid": "KC_RSHIFT",
    "str": "RShift",
    "title": "KC_RSHIFT"
  },
  "KC_RALT": {
    "code": 0x00e6,
    "qmkid": "KC_RALT",
    "str": "RAlt",
    "title": "KC_RALT"
  },
  "KC_RGUI": {
    "code": 0x00e7,
    "qmkid": "KC_RGUI",
    "str": "RGui",
    "title": "KC_RGUI"
  },
  "QK_BASIC_MAX": {
    "code": 0x00ff,
    "qmkid": "QK_BASIC_MAX",
    "str": "QK_BASIC_MAX",
    "title": "QK_BASIC_MAX"
  },
  "LCTL(kc)": {
    "code": 0x0100,
    "qmkid": "LCTL(kc)",
    "str": "LCtl\n(kc)",
    "title": "LCtrl"
  },
  "LSFT(kc)": {
    "code": 0x0200,
    "qmkid": "LSFT(kc)",
    "str": "LSft\n(kc)",
    "title": "LShift"
  },
  "KC_EXLM": {
    "code": 0x021e,
    "qmkid": "KC_EXLM",
    "str": "!",
    "title": "KC_EXLM"
  },
  "KC_AT": {
    "code": 0x021f,
    "qmkid": "KC_AT",
    "str": "@",
    "title": "KC_AT"
  },
  "KC_HASH": {
    "code": 0x0220,
    "qmkid": "KC_HASH",
    "str": "#",
    "title": "KC_HASH"
  },
  "KC_DLR": {
    "code": 0x0221,
    "qmkid": "KC_DLR",
    "str": "$",
    "title": "KC_DLR"
  },
  "KC_PERC": {
    "code": 0x0222,
    "qmkid": "KC_PERC",
    "str": "%",
    "title": "KC_PERC"
  },
  "KC_CIRC": {
    "code": 0x0223,
    "qmkid": "KC_CIRC",
    "str": "^",
    "title": "KC_CIRC"
  },
  "KC_AMPR": {
    "code": 0x0224,
    "qmkid": "KC_AMPR",
    "str": "&",
    "title": "KC_AMPR"
  },
  "KC_ASTR": {
    "code": 0x0225,
    "qmkid": "KC_ASTR",
    "str": "*",
    "title": "KC_ASTR"
  },
  "KC_LPRN": {
    "code": 0x0226,
    "qmkid": "KC_LPRN",
    "str": "(",
    "title": "KC_LPRN"
  },
  "KC_RPRN": {
    "code": 0x0227,
    "qmkid": "KC_RPRN",
    "str": ")",
    "title": "KC_RPRN"
  },
  "KC_UNDS": {
    "code": 0x022d,
    "qmkid": "KC_UNDS",
    "str": "_",
    "title": "KC_UNDS"
  },
  "KC_PLUS": {
    "code": 0x022e,
    "qmkid": "KC_PLUS",
    "str": "+",
    "title": "KC_PLUS"
  },
  "KC_LCBR": {
    "code": 0x022f,
    "qmkid": "KC_LCBR",
    "str": "{",
    "title": "KC_LCBR"
  },
  "KC_RCBR": {
    "code": 0x0230,
    "qmkid": "KC_RCBR",
    "str": "}",
    "title": "KC_RCBR"
  },
  "KC_PIPE": {
    "code": 0x0231,
    "qmkid": "KC_PIPE",
    "str": "|",
    "title": "KC_PIPE"
  },
  "KC_COLN": {
    "code": 0x0233,
    "qmkid": "KC_COLN",
    "str": ":",
    "title": "KC_COLN"
  },
  "KC_DQUO": {
    "code": 0x0234,
    "qmkid": "KC_DQUO",
    "str": "\"",
    "title": "KC_DQUO"
  },
  "KC_TILD": {
    "code": 0x0235,
    "qmkid": "KC_TILD",
    "str": "~",
    "title": "KC_TILD"
  },
  "KC_LT": {
    "code": 0x0236,
    "qmkid": "KC_LT",
    "str": "<",
    "title": "KC_LT"
  },
  "KC_GT": {
    "code": 0x0237,
    "qmkid": "KC_GT",
    "str": ">",
    "title": "KC_GT"
  },
  "KC_QUES": {
    "code": 0x0238,
    "qmkid": "KC_QUES",
    "str": "?",
    "title": "KC_QUES"
  },
  "C_S(kc)": {
    "code": 0x0300,
    "qmkid": "C_S(kc)",
    "str": "LCS\n(kc)",
    "title": "LShift + LCtrl"
  },
  "LALT(kc)": {
    "code": 0x0400,
    "qmkid": "LALT(kc)",
    "str": "LAlt\n(kc)",
    "title": "LAlt"
  },
  "LCA(kc)": {
    "code": 0x0500,
    "qmkid": "LCA(kc)",
    "str": "LCA\n(kc)",
    "title": "LCtrl + LAlt"
  },
  "LSA(kc)": {
    "code": 0x0600,
    "qmkid": "LSA(kc)",
    "str": "LSA\n(kc)",
    "title": "LShift + LAlt"
  },
  "MEH(kc)": {
    "code": 0x0700,
    "qmkid": "MEH(kc)",
    "str": "Meh\n(kc)",
    "title": "LShift + LCtrl + LAlt"
  },
  "LGUI(kc)": {
    "code": 0x0800,
    "qmkid": "LGUI(kc)",
    "str": "LGui\n(kc)",
    "title": "LGUI"
  },
  "LCG(kc)": {
    "code": 0x0900,
    "qmkid": "LCG(kc)",
    "str": "LCG\n(kc)",
    "title": "LCtrl + LGUI"
  },
  "SGUI(kc)": {
    "code": 0x0a00,
    "qmkid": "SGUI(kc)",
    "str": "LSG\n(kc)",
    "title": "LShift + LGUI"
  },
  "LSCG(kc)": {
    "code": 0x0b00,
    "qmkid": "LSCG(kc)",
    "title": "LShift + LCtrl + LGUI",
    "str": "LSCG\n(kc)"
  },
  "LAG(kc)": {
    "code": 0x0c00,
    "qmkid": "LAG(kc)",
    "title": "LAlt + LGUI",
    "str": "LAG\n(kc)"
  },
  "LCAG(kc)": {
    "code": 0x0d00,
    "qmkid": "LCAG(kc)",
    "str": "LCAG\n(kc)",
    "title": "LCtrl + LAlt + LGUI"
  },
  "LSAG(kc)": {
    "code": 0x0e00,
    "qmkid": "LSAG(kc)",
    "title": "LShift + LAlt + LGUI",
    "str": "LSAG\n(kc)"
  },
  "HYPR(kc)": {
    "code": 0x0f00,
    "qmkid": "HYPR(kc)",
    "str": "Hyper\n(kc)",
    "title": "LShift + LCtrl + LAlt + LGUI"
  },
  "R(kc)": {
    "code": 0x1000,
    "qmkid": "R(kc)",
    "title": "",
    "str": "R\n(kc)"
  },
  "RCTL(kc)": {
    "code": 0x1100,
    "qmkid": "RCTL(kc)",
    "str": "RCtl\n(kc)",
    "title": "RCtrl"
  },
  "RSFT(kc)": {
    "code": 0x1200,
    "qmkid": "RSFT(kc)",
    "str": "RSft\n(kc)",
    "title": "RShift"
  },
  "RSC(kc)": {
    "code": 0x1300,
    "qmkid": "RSC(kc)",
    "title": "RShift + RCtrl",
    "str": "RSC\n(kc)"
  },
  "RALT(kc)": {
    "code": 0x1400,
    "qmkid": "RALT(kc)",
    "str": "RAlt\n(kc)",
    "title": "RAlt"
  },
  "RCA(kc)": {
    "code": 0x1500,
    "qmkid": "RCA(kc)",
    "title": "RCtrl + RAlt",
    "str": "RCA\n(kc)"
  },
  "RSA(kc)": {
    "code": 0x1600,
    "qmkid": "RSA(kc)",
    "title": "RShift + RAlt",
    "str": "RSA\n(kc)"
  },
  "RSCA(kc)": {
    "code": 0x1700,
    "qmkid": "RSCA(kc)",
    "title": "RShift + RCtrl + RAlt",
    "str": "RSCA\n(kc)"
  },
  "RGUI(kc)": {
    "code": 0x1800,
    "qmkid": "RGUI(kc)",
    "str": "RGui\n(kc)",
    "title": "RGUI"
  },
  "RCG(kc)": {
    "code": 0x1900,
    "qmkid": "RCG(kc)",
    "str": "RCG\n(kc)",
    "title": "RCtrl + RGUI"
  },
  "RSG(kc)": {
    "code": 0x1a00,
    "qmkid": "RSG(kc)",
    "title": "RShift + RGUI",
    "str": "RSG\n(kc)"
  },
  "RSCG(kc)": {
    "code": 0x1b00,
    "qmkid": "RSCG(kc)",
    "title": "RShift + RCtrl + RGUI",
    "str": "RSCG\n(kc)"
  },
  "RAG(kc)": {
    "code": 0x1c00,
    "qmkid": "RAG(kc)",
    "title": "RAlt + RGUI",
    "str": "RAG\n(kc)"
  },
  "RCAG(kc)": {
    "code": 0x1d00,
    "qmkid": "RCAG(kc)",
    "title": "RCtrl + RAlt + RGUI",
    "str": "RCAG\n(kc)"
  },
  "RSAG(kc)": {
    "code": 0x1e00,
    "qmkid": "RSAG(kc)",
    "title": "RShift + RAlt + RGUI",
    "str": "RSAG\n(kc)"
  },
  "RSCAG(kc)": {
    "code": 0x1f00,
    "qmkid": "RSCAG(kc)",
    "title": "RShift + RCtrl + RAlt + RGUI",
    "str": "RSCAG\n(kc)"
  },
  "QK_MODS_MAX": {
    "code": 0x1fff,
    "qmkid": "QK_MODS_MAX",
    "str": "QK_MODS_MAX",
    "title": "QK_MODS_MAX"
  },
  "QK_MOD_TAP": {
    "code": 0x2000,
    "qmkid": "QK_MOD_TAP",
    "str": "QK_MOD_TAP",
    "title": "QK_MOD_TAP"
  },
  "LCTL_T(kc)": {
    "code": 0x2100,
    "qmkid": "LCTL_T(kc)",
    "str": "LCtl_T\n(kc)",
    "title": "LCtrl when held, kc when tapped"
  },
  "LSFT_T(kc)": {
    "code": 0x2200,
    "qmkid": "LSFT_T(kc)",
    "str": "LSft_T\n(kc)",
    "title": "LShift when held, kc when tapped"
  },
  "C_S_T(kc)": {
    "code": 0x2300,
    "qmkid": "C_S_T(kc)",
    "str": "LCS_T\n(kc)",
    "title": "LShift + LCtrl when held, kc when tapped"
  },
  "LALT_T(kc)": {
    "code": 0x2400,
    "qmkid": "LALT_T(kc)",
    "str": "LAlt_T\n(kc)",
    "title": "LAlt when held, kc when tapped"
  },
  "LCA_T(kc)": {
    "code": 0x2500,
    "qmkid": "LCA_T(kc)",
    "str": "LCA_T\n(kc)",
    "title": "LCtrl + LAlt when held, kc when tapped"
  },
  "LSA_T(kc)": {
    "code": 0x2600,
    "qmkid": "LSA_T(kc)",
    "str": "LSA_T\n(kc)",
    "title": "LShift + LAlt when held, kc when tapped"
  },
  "MEH_T(kc)": {
    "code": 0x2700,
    "qmkid": "MEH_T(kc)",
    "str": "Meh_T\n(kc)",
    "title": "LShift + LCtrl + LAlt when held, kc when tapped"
  },
  "LGUI_T(kc)": {
    "code": 0x2800,
    "qmkid": "LGUI_T(kc)",
    "str": "LGui_T\n(kc)",
    "title": "LGUI when held, kc when tapped"
  },
  "LCG_T(kc)": {
    "code": 0x2900,
    "qmkid": "LCG_T(kc)",
    "str": "LCG_T\n(kc)",
    "title": "LCtrl + LGUI when held, kc when tapped"
  },
  "SGUI_T(kc)": {
    "code": 0x2a00,
    "qmkid": "SGUI_T(kc)",
    "str": "LSG_T\n(kc)",
    "title": "LShift + LGUI when held, kc when tapped"
  },
  "LSCG_T(kc)": {
    "code": 0x2b00,
    "qmkid": "LSCG_T(kc)",
    "title": "LShift + LCtrl + LGUI when held, kc when tapped",
    "str": "LSCG\nT\n(kc)"
  },
  "LAG_T(kc)": {
    "code": 0x2c00,
    "qmkid": "LAG_T(kc)",
    "title": "LAlt + LGUI when held, kc when tapped",
    "str": "LAG\nT\n(kc)"
  },
  "LCAG_T(kc)": {
    "code": 0x2d00,
    "qmkid": "LCAG_T(kc)",
    "str": "LCAG_T\n(kc)",
    "title": "LCtrl + LAlt + LGUI when held, kc when tapped"
  },
  "LSAG_T(kc)": {
    "code": 0x2e00,
    "qmkid": "LSAG_T(kc)",
    "title": "LShift + LAlt + LGUI when held, kc when tapped",
    "str": "LSAG\nT\n(kc)"
  },
  "ALL_T(kc)": {
    "code": 0x2f00,
    "qmkid": "ALL_T(kc)",
    "str": "ALL_T\n(kc)",
    "title": "LShift + LCtrl + LAlt + LGUI when held, kc when tapped"
  },
  "R_T(kc)": {
    "code": 0x3000,
    "qmkid": "R_T(kc)",
    "title": " when held, kc when tapped",
    "str": "R\nT\n(kc)"
  },
  "RCTL_T(kc)": {
    "code": 0x3100,
    "qmkid": "RCTL_T(kc)",
    "str": "RCtl_T\n(kc)",
    "title": "RCtrl when held, kc when tapped"
  },
  "RSFT_T(kc)": {
    "code": 0x3200,
    "qmkid": "RSFT_T(kc)",
    "str": "RSft_T\n(kc)",
    "title": "RShift when held, kc when tapped"
  },
  "RSC_T(kc)": {
    "code": 0x3300,
    "qmkid": "RSC_T(kc)",
    "title": "RShift + RCtrl when held, kc when tapped",
    "str": "RSC\nT\n(kc)"
  },
  "RALT_T(kc)": {
    "code": 0x3400,
    "qmkid": "RALT_T(kc)",
    "str": "RAlt_T\n(kc)",
    "title": "RAlt when held, kc when tapped"
  },
  "RCA_T(kc)": {
    "code": 0x3500,
    "qmkid": "RCA_T(kc)",
    "title": "RCtrl + RAlt when held, kc when tapped",
    "str": "RCA\nT\n(kc)"
  },
  "RSA_T(kc)": {
    "code": 0x3600,
    "qmkid": "RSA_T(kc)",
    "title": "RShift + RAlt when held, kc when tapped",
    "str": "RSA\nT\n(kc)"
  },
  "RSCA_T(kc)": {
    "code": 0x3700,
    "qmkid": "RSCA_T(kc)",
    "title": "RShift + RCtrl + RAlt when held, kc when tapped",
    "str": "RSCA\nT\n(kc)"
  },
  "RGUI_T(kc)": {
    "code": 0x3800,
    "qmkid": "RGUI_T(kc)",
    "str": "RGui_T\n(kc)",
    "title": "RGUI when held, kc when tapped"
  },
  "RCG_T(kc)": {
    "code": 0x3900,
    "qmkid": "RCG_T(kc)",
    "str": "RCG_T\n(kc)",
    "title": "RCtrl + RGUI when held, kc when tapped"
  },
  "RSG_T(kc)": {
    "code": 0x3a00,
    "qmkid": "RSG_T(kc)",
    "title": "RShift + RGUI when held, kc when tapped",
    "str": "RSG\nT\n(kc)"
  },
  "RSCG_T(kc)": {
    "code": 0x3b00,
    "qmkid": "RSCG_T(kc)",
    "title": "RShift + RCtrl + RGUI when held, kc when tapped",
    "str": "RSCG\nT\n(kc)"
  },
  "RAG_T(kc)": {
    "code": 0x3c00,
    "qmkid": "RAG_T(kc)",
    "title": "RAlt + RGUI when held, kc when tapped",
    "str": "RAG\nT\n(kc)"
  },
  "RCAG_T(kc)": {
    "code": 0x3d00,
    "qmkid": "RCAG_T(kc)",
    "str": "RCAG_T\n(kc)",
    "title": "RCtrl + RAlt + RGUI when held, kc when tapped"
  },
  "RSAG_T(kc)": {
    "code": 0x3e00,
    "qmkid": "RSAG_T(kc)",
    "title": "RShift + RAlt + RGUI when held, kc when tapped",
    "str": "RSAG\nT\n(kc)"
  },
  "RSCAG_T(kc)": {
    "code": 0x3f00,
    "qmkid": "RSCAG_T(kc)",
    "title": "RShift + RCtrl + RAlt + RGUI when held, kc when tapped",
    "str": "RSCAG\nT\n(kc)"
  },
  "QK_MOD_TAP_MAX": {
    "code": 0x3fff,
    "qmkid": "QK_MOD_TAP_MAX",
    "str": "QK_MOD_TAP_MAX",
    "title": "QK_MOD_TAP_MAX"
  },
  "LT0(kc)": {
    "code": 0x4000,
    "qmkid": "LT0(kc)",
    "str": "LT0(kc)",
    "title": "LT0(kc)"
  },
  "LT1(kc)": {
    "code": 0x4100,
    "qmkid": "LT1(kc)",
    "str": "LT1(kc)",
    "title": "LT1(kc)"
  },
  "LT2(kc)": {
    "code": 0x4200,
    "qmkid": "LT2(kc)",
    "str": "LT2(kc)",
    "title": "LT2(kc)"
  },
  "LT3(kc)": {
    "code": 0x4300,
    "qmkid": "LT3(kc)",
    "str": "LT3(kc)",
    "title": "LT3(kc)"
  },
  "LT4(kc)": {
    "code": 0x4400,
    "qmkid": "LT4(kc)",
    "str": "LT4(kc)",
    "title": "LT4(kc)"
  },
  "LT5(kc)": {
    "code": 0x4500,
    "qmkid": "LT5(kc)",
    "str": "LT5(kc)",
    "title": "LT5(kc)"
  },
  "LT6(kc)": {
    "code": 0x4600,
    "qmkid": "LT6(kc)",
    "str": "LT6(kc)",
    "title": "LT6(kc)"
  },
  "LT7(kc)": {
    "code": 0x4700,
    "qmkid": "LT7(kc)",
    "str": "LT7(kc)",
    "title": "LT7(kc)"
  },
  "LT8(kc)": {
    "code": 0x4800,
    "qmkid": "LT8(kc)",
    "str": "LT8(kc)",
    "title": "LT8(kc)"
  },
  "LT9(kc)": {
    "code": 0x4900,
    "qmkid": "LT9(kc)",
    "str": "LT9(kc)",
    "title": "LT9(kc)"
  },
  "LT10(kc)": {
    "code": 0x4a00,
    "qmkid": "LT10(kc)",
    "str": "LT10(kc)",
    "title": "LT10(kc)"
  },
  "LT11(kc)": {
    "code": 0x4b00,
    "qmkid": "LT11(kc)",
    "str": "LT11(kc)",
    "title": "LT11(kc)"
  },
  "LT12(kc)": {
    "code": 0x4c00,
    "qmkid": "LT12(kc)",
    "str": "LT12(kc)",
    "title": "LT12(kc)"
  },
  "LT13(kc)": {
    "code": 0x4d00,
    "qmkid": "LT13(kc)",
    "str": "LT13(kc)",
    "title": "LT13(kc)"
  },
  "LT14(kc)": {
    "code": 0x4e00,
    "qmkid": "LT14(kc)",
    "str": "LT14(kc)",
    "title": "LT14(kc)"
  },
  "LT15(kc)": {
    "code": 0x4f00,
    "qmkid": "LT15(kc)",
    "str": "LT15(kc)",
    "title": "LT15(kc)"
  },
  "QK_LAYER_TAP_MAX": {
    "code": 0x4fff,
    "qmkid": "QK_LAYER_TAP_MAX",
    "str": "QK_LAYER_TAP_MAX",
    "title": "QK_LAYER_TAP_MAX"
  },
  "QK_LAYER_MOD": {
    "code": 0x5000,
    "qmkid": "QK_LAYER_MOD",
    "str": "QK_LAYER_MOD",
    "title": "QK_LAYER_MOD"
  },
  "QK_LAYER_MOD_MAX": {
    "code": 0x51ff,
    "qmkid": "QK_LAYER_MOD_MAX",
    "str": "QK_LAYER_MOD_MAX",
    "title": "QK_LAYER_MOD_MAX"
  },
  "TO(0)": {
    "code": 0x5200,
    "qmkid": "TO(0)",
    "str": "TO(0)",
    "title": "TO(0)"
  },
  "TO(1)": {
    "code": 0x5201,
    "qmkid": "TO(1)",
    "str": "TO(1)",
    "title": "TO(1)"
  },
  "TO(2)": {
    "code": 0x5202,
    "qmkid": "TO(2)",
    "str": "TO(2)",
    "title": "TO(2)"
  },
  "TO(3)": {
    "code": 0x5203,
    "qmkid": "TO(3)",
    "str": "TO(3)",
    "title": "TO(3)"
  },
  "TO(4)": {
    "code": 0x5204,
    "qmkid": "TO(4)",
    "str": "TO(4)",
    "title": "TO(4)"
  },
  "TO(5)": {
    "code": 0x5205,
    "qmkid": "TO(5)",
    "str": "TO(5)",
    "title": "TO(5)"
  },
  "TO(6)": {
    "code": 0x5206,
    "qmkid": "TO(6)",
    "str": "TO(6)",
    "title": "TO(6)"
  },
  "TO(7)": {
    "code": 0x5207,
    "qmkid": "TO(7)",
    "str": "TO(7)",
    "title": "TO(7)"
  },
  "TO(8)": {
    "code": 0x5208,
    "qmkid": "TO(8)",
    "str": "TO(8)",
    "title": "TO(8)"
  },
  "TO(9)": {
    "code": 0x5209,
    "qmkid": "TO(9)",
    "str": "TO(9)",
    "title": "TO(9)"
  },
  "TO(10)": {
    "code": 0x520a,
    "qmkid": "TO(10)",
    "str": "TO(10)",
    "title": "TO(10)"
  },
  "TO(11)": {
    "code": 0x520b,
    "qmkid": "TO(11)",
    "str": "TO(11)",
    "title": "TO(11)"
  },
  "TO(12)": {
    "code": 0x520c,
    "qmkid": "TO(12)",
    "str": "TO(12)",
    "title": "TO(12)"
  },
  "TO(13)": {
    "code": 0x520d,
    "qmkid": "TO(13)",
    "str": "TO(13)",
    "title": "TO(13)"
  },
  "TO(14)": {
    "code": 0x520e,
    "qmkid": "TO(14)",
    "str": "TO(14)",
    "title": "TO(14)"
  },
  "TO(15)": {
    "code": 0x520f,
    "qmkid": "TO(15)",
    "str": "TO(15)",
    "title": "TO(15)"
  },
  "TO(16)": {
    "code": 0x5210,
    "qmkid": "TO(16)",
    "str": "TO(16)",
    "title": "TO(16)"
  },
  "TO(17)": {
    "code": 0x5211,
    "qmkid": "TO(17)",
    "str": "TO(17)",
    "title": "TO(17)"
  },
  "TO(18)": {
    "code": 0x5212,
    "qmkid": "TO(18)",
    "str": "TO(18)",
    "title": "TO(18)"
  },
  "TO(19)": {
    "code": 0x5213,
    "qmkid": "TO(19)",
    "str": "TO(19)",
    "title": "TO(19)"
  },
  "TO(20)": {
    "code": 0x5214,
    "qmkid": "TO(20)",
    "str": "TO(20)",
    "title": "TO(20)"
  },
  "TO(21)": {
    "code": 0x5215,
    "qmkid": "TO(21)",
    "str": "TO(21)",
    "title": "TO(21)"
  },
  "TO(22)": {
    "code": 0x5216,
    "qmkid": "TO(22)",
    "str": "TO(22)",
    "title": "TO(22)"
  },
  "TO(23)": {
    "code": 0x5217,
    "qmkid": "TO(23)",
    "str": "TO(23)",
    "title": "TO(23)"
  },
  "TO(24)": {
    "code": 0x5218,
    "qmkid": "TO(24)",
    "str": "TO(24)",
    "title": "TO(24)"
  },
  "TO(25)": {
    "code": 0x5219,
    "qmkid": "TO(25)",
    "str": "TO(25)",
    "title": "TO(25)"
  },
  "TO(26)": {
    "code": 0x521a,
    "qmkid": "TO(26)",
    "str": "TO(26)",
    "title": "TO(26)"
  },
  "TO(27)": {
    "code": 0x521b,
    "qmkid": "TO(27)",
    "str": "TO(27)",
    "title": "TO(27)"
  },
  "TO(28)": {
    "code": 0x521c,
    "qmkid": "TO(28)",
    "str": "TO(28)",
    "title": "TO(28)"
  },
  "TO(29)": {
    "code": 0x521d,
    "qmkid": "TO(29)",
    "str": "TO(29)",
    "title": "TO(29)"
  },
  "TO(30)": {
    "code": 0x521e,
    "qmkid": "TO(30)",
    "str": "TO(30)",
    "title": "TO(30)"
  },
  "TO(31)": {
    "code": 0x521f,
    "qmkid": "TO(31)",
    "str": "TO(31)",
    "title": "TO(31)"
  },
  "MO(0)": {
    "code": 0x5220,
    "qmkid": "MO(0)",
    "str": "MO(0)",
    "title": "MO(0)"
  },
  "MO(1)": {
    "code": 0x5221,
    "qmkid": "MO(1)",
    "str": "MO(1)",
    "title": "MO(1)"
  },
  "MO(2)": {
    "code": 0x5222,
    "qmkid": "MO(2)",
    "str": "MO(2)",
    "title": "MO(2)"
  },
  "MO(3)": {
    "code": 0x5223,
    "qmkid": "MO(3)",
    "str": "MO(3)",
    "title": "MO(3)"
  },
  "MO(4)": {
    "code": 0x5224,
    "qmkid": "MO(4)",
    "str": "MO(4)",
    "title": "MO(4)"
  },
  "MO(5)": {
    "code": 0x5225,
    "qmkid": "MO(5)",
    "str": "MO(5)",
    "title": "MO(5)"
  },
  "MO(6)": {
    "code": 0x5226,
    "qmkid": "MO(6)",
    "str": "MO(6)",
    "title": "MO(6)"
  },
  "MO(7)": {
    "code": 0x5227,
    "qmkid": "MO(7)",
    "str": "MO(7)",
    "title": "MO(7)"
  },
  "MO(8)": {
    "code": 0x5228,
    "qmkid": "MO(8)",
    "str": "MO(8)",
    "title": "MO(8)"
  },
  "MO(9)": {
    "code": 0x5229,
    "qmkid": "MO(9)",
    "str": "MO(9)",
    "title": "MO(9)"
  },
  "MO(10)": {
    "code": 0x522a,
    "qmkid": "MO(10)",
    "str": "MO(10)",
    "title": "MO(10)"
  },
  "MO(11)": {
    "code": 0x522b,
    "qmkid": "MO(11)",
    "str": "MO(11)",
    "title": "MO(11)"
  },
  "MO(12)": {
    "code": 0x522c,
    "qmkid": "MO(12)",
    "str": "MO(12)",
    "title": "MO(12)"
  },
  "MO(13)": {
    "code": 0x522d,
    "qmkid": "MO(13)",
    "str": "MO(13)",
    "title": "MO(13)"
  },
  "MO(14)": {
    "code": 0x522e,
    "qmkid": "MO(14)",
    "str": "MO(14)",
    "title": "MO(14)"
  },
  "MO(15)": {
    "code": 0x522f,
    "qmkid": "MO(15)",
    "str": "MO(15)",
    "title": "MO(15)"
  },
  "MO(16)": {
    "code": 0x5230,
    "qmkid": "MO(16)",
    "str": "MO(16)",
    "title": "MO(16)"
  },
  "MO(17)": {
    "code": 0x5231,
    "qmkid": "MO(17)",
    "str": "MO(17)",
    "title": "MO(17)"
  },
  "MO(18)": {
    "code": 0x5232,
    "qmkid": "MO(18)",
    "str": "MO(18)",
    "title": "MO(18)"
  },
  "MO(19)": {
    "code": 0x5233,
    "qmkid": "MO(19)",
    "str": "MO(19)",
    "title": "MO(19)"
  },
  "MO(20)": {
    "code": 0x5234,
    "qmkid": "MO(20)",
    "str": "MO(20)",
    "title": "MO(20)"
  },
  "MO(21)": {
    "code": 0x5235,
    "qmkid": "MO(21)",
    "str": "MO(21)",
    "title": "MO(21)"
  },
  "MO(22)": {
    "code": 0x5236,
    "qmkid": "MO(22)",
    "str": "MO(22)",
    "title": "MO(22)"
  },
  "MO(23)": {
    "code": 0x5237,
    "qmkid": "MO(23)",
    "str": "MO(23)",
    "title": "MO(23)"
  },
  "MO(24)": {
    "code": 0x5238,
    "qmkid": "MO(24)",
    "str": "MO(24)",
    "title": "MO(24)"
  },
  "MO(25)": {
    "code": 0x5239,
    "qmkid": "MO(25)",
    "str": "MO(25)",
    "title": "MO(25)"
  },
  "MO(26)": {
    "code": 0x523a,
    "qmkid": "MO(26)",
    "str": "MO(26)",
    "title": "MO(26)"
  },
  "MO(27)": {
    "code": 0x523b,
    "qmkid": "MO(27)",
    "str": "MO(27)",
    "title": "MO(27)"
  },
  "MO(28)": {
    "code": 0x523c,
    "qmkid": "MO(28)",
    "str": "MO(28)",
    "title": "MO(28)"
  },
  "MO(29)": {
    "code": 0x523d,
    "qmkid": "MO(29)",
    "str": "MO(29)",
    "title": "MO(29)"
  },
  "MO(30)": {
    "code": 0x523e,
    "qmkid": "MO(30)",
    "str": "MO(30)",
    "title": "MO(30)"
  },
  "MO(31)": {
    "code": 0x523f,
    "qmkid": "MO(31)",
    "str": "MO(31)",
    "title": "MO(31)"
  },
  "DF(0)": {
    "code": 0x5240,
    "qmkid": "DF(0)",
    "str": "DF(0)",
    "title": "DF(0)"
  },
  "DF(1)": {
    "code": 0x5241,
    "qmkid": "DF(1)",
    "str": "DF(1)",
    "title": "DF(1)"
  },
  "DF(2)": {
    "code": 0x5242,
    "qmkid": "DF(2)",
    "str": "DF(2)",
    "title": "DF(2)"
  },
  "DF(3)": {
    "code": 0x5243,
    "qmkid": "DF(3)",
    "str": "DF(3)",
    "title": "DF(3)"
  },
  "DF(4)": {
    "code": 0x5244,
    "qmkid": "DF(4)",
    "str": "DF(4)",
    "title": "DF(4)"
  },
  "DF(5)": {
    "code": 0x5245,
    "qmkid": "DF(5)",
    "str": "DF(5)",
    "title": "DF(5)"
  },
  "DF(6)": {
    "code": 0x5246,
    "qmkid": "DF(6)",
    "str": "DF(6)",
    "title": "DF(6)"
  },
  "DF(7)": {
    "code": 0x5247,
    "qmkid": "DF(7)",
    "str": "DF(7)",
    "title": "DF(7)"
  },
  "DF(8)": {
    "code": 0x5248,
    "qmkid": "DF(8)",
    "str": "DF(8)",
    "title": "DF(8)"
  },
  "DF(9)": {
    "code": 0x5249,
    "qmkid": "DF(9)",
    "str": "DF(9)",
    "title": "DF(9)"
  },
  "DF(10)": {
    "code": 0x524a,
    "qmkid": "DF(10)",
    "str": "DF(10)",
    "title": "DF(10)"
  },
  "DF(11)": {
    "code": 0x524b,
    "qmkid": "DF(11)",
    "str": "DF(11)",
    "title": "DF(11)"
  },
  "DF(12)": {
    "code": 0x524c,
    "qmkid": "DF(12)",
    "str": "DF(12)",
    "title": "DF(12)"
  },
  "DF(13)": {
    "code": 0x524d,
    "qmkid": "DF(13)",
    "str": "DF(13)",
    "title": "DF(13)"
  },
  "DF(14)": {
    "code": 0x524e,
    "qmkid": "DF(14)",
    "str": "DF(14)",
    "title": "DF(14)"
  },
  "DF(15)": {
    "code": 0x524f,
    "qmkid": "DF(15)",
    "str": "DF(15)",
    "title": "DF(15)"
  },
  "DF(16)": {
    "code": 0x5250,
    "qmkid": "DF(16)",
    "str": "DF(16)",
    "title": "DF(16)"
  },
  "DF(17)": {
    "code": 0x5251,
    "qmkid": "DF(17)",
    "str": "DF(17)",
    "title": "DF(17)"
  },
  "DF(18)": {
    "code": 0x5252,
    "qmkid": "DF(18)",
    "str": "DF(18)",
    "title": "DF(18)"
  },
  "DF(19)": {
    "code": 0x5253,
    "qmkid": "DF(19)",
    "str": "DF(19)",
    "title": "DF(19)"
  },
  "DF(20)": {
    "code": 0x5254,
    "qmkid": "DF(20)",
    "str": "DF(20)",
    "title": "DF(20)"
  },
  "DF(21)": {
    "code": 0x5255,
    "qmkid": "DF(21)",
    "str": "DF(21)",
    "title": "DF(21)"
  },
  "DF(22)": {
    "code": 0x5256,
    "qmkid": "DF(22)",
    "str": "DF(22)",
    "title": "DF(22)"
  },
  "DF(23)": {
    "code": 0x5257,
    "qmkid": "DF(23)",
    "str": "DF(23)",
    "title": "DF(23)"
  },
  "DF(24)": {
    "code": 0x5258,
    "qmkid": "DF(24)",
    "str": "DF(24)",
    "title": "DF(24)"
  },
  "DF(25)": {
    "code": 0x5259,
    "qmkid": "DF(25)",
    "str": "DF(25)",
    "title": "DF(25)"
  },
  "DF(26)": {
    "code": 0x525a,
    "qmkid": "DF(26)",
    "str": "DF(26)",
    "title": "DF(26)"
  },
  "DF(27)": {
    "code": 0x525b,
    "qmkid": "DF(27)",
    "str": "DF(27)",
    "title": "DF(27)"
  },
  "DF(28)": {
    "code": 0x525c,
    "qmkid": "DF(28)",
    "str": "DF(28)",
    "title": "DF(28)"
  },
  "DF(29)": {
    "code": 0x525d,
    "qmkid": "DF(29)",
    "str": "DF(29)",
    "title": "DF(29)"
  },
  "DF(30)": {
    "code": 0x525e,
    "qmkid": "DF(30)",
    "str": "DF(30)",
    "title": "DF(30)"
  },
  "DF(31)": {
    "code": 0x525f,
    "qmkid": "DF(31)",
    "str": "DF(31)",
    "title": "DF(31)"
  },
  "TG(0)": {
    "code": 0x5260,
    "qmkid": "TG(0)",
    "str": "TG(0)",
    "title": "TG(0)"
  },
  "TG(1)": {
    "code": 0x5261,
    "qmkid": "TG(1)",
    "str": "TG(1)",
    "title": "TG(1)"
  },
  "TG(2)": {
    "code": 0x5262,
    "qmkid": "TG(2)",
    "str": "TG(2)",
    "title": "TG(2)"
  },
  "TG(3)": {
    "code": 0x5263,
    "qmkid": "TG(3)",
    "str": "TG(3)",
    "title": "TG(3)"
  },
  "TG(4)": {
    "code": 0x5264,
    "qmkid": "TG(4)",
    "str": "TG(4)",
    "title": "TG(4)"
  },
  "TG(5)": {
    "code": 0x5265,
    "qmkid": "TG(5)",
    "str": "TG(5)",
    "title": "TG(5)"
  },
  "TG(6)": {
    "code": 0x5266,
    "qmkid": "TG(6)",
    "str": "TG(6)",
    "title": "TG(6)"
  },
  "TG(7)": {
    "code": 0x5267,
    "qmkid": "TG(7)",
    "str": "TG(7)",
    "title": "TG(7)"
  },
  "TG(8)": {
    "code": 0x5268,
    "qmkid": "TG(8)",
    "str": "TG(8)",
    "title": "TG(8)"
  },
  "TG(9)": {
    "code": 0x5269,
    "qmkid": "TG(9)",
    "str": "TG(9)",
    "title": "TG(9)"
  },
  "TG(10)": {
    "code": 0x526a,
    "qmkid": "TG(10)",
    "str": "TG(10)",
    "title": "TG(10)"
  },
  "TG(11)": {
    "code": 0x526b,
    "qmkid": "TG(11)",
    "str": "TG(11)",
    "title": "TG(11)"
  },
  "TG(12)": {
    "code": 0x526c,
    "qmkid": "TG(12)",
    "str": "TG(12)",
    "title": "TG(12)"
  },
  "TG(13)": {
    "code": 0x526d,
    "qmkid": "TG(13)",
    "str": "TG(13)",
    "title": "TG(13)"
  },
  "TG(14)": {
    "code": 0x526e,
    "qmkid": "TG(14)",
    "str": "TG(14)",
    "title": "TG(14)"
  },
  "TG(15)": {
    "code": 0x526f,
    "qmkid": "TG(15)",
    "str": "TG(15)",
    "title": "TG(15)"
  },
  "TG(16)": {
    "code": 0x5270,
    "qmkid": "TG(16)",
    "str": "TG(16)",
    "title": "TG(16)"
  },
  "TG(17)": {
    "code": 0x5271,
    "qmkid": "TG(17)",
    "str": "TG(17)",
    "title": "TG(17)"
  },
  "TG(18)": {
    "code": 0x5272,
    "qmkid": "TG(18)",
    "str": "TG(18)",
    "title": "TG(18)"
  },
  "TG(19)": {
    "code": 0x5273,
    "qmkid": "TG(19)",
    "str": "TG(19)",
    "title": "TG(19)"
  },
  "TG(20)": {
    "code": 0x5274,
    "qmkid": "TG(20)",
    "str": "TG(20)",
    "title": "TG(20)"
  },
  "TG(21)": {
    "code": 0x5275,
    "qmkid": "TG(21)",
    "str": "TG(21)",
    "title": "TG(21)"
  },
  "TG(22)": {
    "code": 0x5276,
    "qmkid": "TG(22)",
    "str": "TG(22)",
    "title": "TG(22)"
  },
  "TG(23)": {
    "code": 0x5277,
    "qmkid": "TG(23)",
    "str": "TG(23)",
    "title": "TG(23)"
  },
  "TG(24)": {
    "code": 0x5278,
    "qmkid": "TG(24)",
    "str": "TG(24)",
    "title": "TG(24)"
  },
  "TG(25)": {
    "code": 0x5279,
    "qmkid": "TG(25)",
    "str": "TG(25)",
    "title": "TG(25)"
  },
  "TG(26)": {
    "code": 0x527a,
    "qmkid": "TG(26)",
    "str": "TG(26)",
    "title": "TG(26)"
  },
  "TG(27)": {
    "code": 0x527b,
    "qmkid": "TG(27)",
    "str": "TG(27)",
    "title": "TG(27)"
  },
  "TG(28)": {
    "code": 0x527c,
    "qmkid": "TG(28)",
    "str": "TG(28)",
    "title": "TG(28)"
  },
  "TG(29)": {
    "code": 0x527d,
    "qmkid": "TG(29)",
    "str": "TG(29)",
    "title": "TG(29)"
  },
  "TG(30)": {
    "code": 0x527e,
    "qmkid": "TG(30)",
    "str": "TG(30)",
    "title": "TG(30)"
  },
  "TG(31)": {
    "code": 0x527f,
    "qmkid": "TG(31)",
    "str": "TG(31)",
    "title": "TG(31)"
  },
  "OSL(0)": {
    "code": 0x5280,
    "qmkid": "OSL(0)",
    "str": "OSL(0)",
    "title": "OSL(0)"
  },
  "OSL(1)": {
    "code": 0x5281,
    "qmkid": "OSL(1)",
    "str": "OSL(1)",
    "title": "OSL(1)"
  },
  "OSL(2)": {
    "code": 0x5282,
    "qmkid": "OSL(2)",
    "str": "OSL(2)",
    "title": "OSL(2)"
  },
  "OSL(3)": {
    "code": 0x5283,
    "qmkid": "OSL(3)",
    "str": "OSL(3)",
    "title": "OSL(3)"
  },
  "OSL(4)": {
    "code": 0x5284,
    "qmkid": "OSL(4)",
    "str": "OSL(4)",
    "title": "OSL(4)"
  },
  "OSL(5)": {
    "code": 0x5285,
    "qmkid": "OSL(5)",
    "str": "OSL(5)",
    "title": "OSL(5)"
  },
  "OSL(6)": {
    "code": 0x5286,
    "qmkid": "OSL(6)",
    "str": "OSL(6)",
    "title": "OSL(6)"
  },
  "OSL(7)": {
    "code": 0x5287,
    "qmkid": "OSL(7)",
    "str": "OSL(7)",
    "title": "OSL(7)"
  },
  "OSL(8)": {
    "code": 0x5288,
    "qmkid": "OSL(8)",
    "str": "OSL(8)",
    "title": "OSL(8)"
  },
  "OSL(9)": {
    "code": 0x5289,
    "qmkid": "OSL(9)",
    "str": "OSL(9)",
    "title": "OSL(9)"
  },
  "OSL(10)": {
    "code": 0x528a,
    "qmkid": "OSL(10)",
    "str": "OSL(10)",
    "title": "OSL(10)"
  },
  "OSL(11)": {
    "code": 0x528b,
    "qmkid": "OSL(11)",
    "str": "OSL(11)",
    "title": "OSL(11)"
  },
  "OSL(12)": {
    "code": 0x528c,
    "qmkid": "OSL(12)",
    "str": "OSL(12)",
    "title": "OSL(12)"
  },
  "OSL(13)": {
    "code": 0x528d,
    "qmkid": "OSL(13)",
    "str": "OSL(13)",
    "title": "OSL(13)"
  },
  "OSL(14)": {
    "code": 0x528e,
    "qmkid": "OSL(14)",
    "str": "OSL(14)",
    "title": "OSL(14)"
  },
  "OSL(15)": {
    "code": 0x528f,
    "qmkid": "OSL(15)",
    "str": "OSL(15)",
    "title": "OSL(15)"
  },
  "OSL(16)": {
    "code": 0x5290,
    "qmkid": "OSL(16)",
    "str": "OSL(16)",
    "title": "OSL(16)"
  },
  "OSL(17)": {
    "code": 0x5291,
    "qmkid": "OSL(17)",
    "str": "OSL(17)",
    "title": "OSL(17)"
  },
  "OSL(18)": {
    "code": 0x5292,
    "qmkid": "OSL(18)",
    "str": "OSL(18)",
    "title": "OSL(18)"
  },
  "OSL(19)": {
    "code": 0x5293,
    "qmkid": "OSL(19)",
    "str": "OSL(19)",
    "title": "OSL(19)"
  },
  "OSL(20)": {
    "code": 0x5294,
    "qmkid": "OSL(20)",
    "str": "OSL(20)",
    "title": "OSL(20)"
  },
  "OSL(21)": {
    "code": 0x5295,
    "qmkid": "OSL(21)",
    "str": "OSL(21)",
    "title": "OSL(21)"
  },
  "OSL(22)": {
    "code": 0x5296,
    "qmkid": "OSL(22)",
    "str": "OSL(22)",
    "title": "OSL(22)"
  },
  "OSL(23)": {
    "code": 0x5297,
    "qmkid": "OSL(23)",
    "str": "OSL(23)",
    "title": "OSL(23)"
  },
  "OSL(24)": {
    "code": 0x5298,
    "qmkid": "OSL(24)",
    "str": "OSL(24)",
    "title": "OSL(24)"
  },
  "OSL(25)": {
    "code": 0x5299,
    "qmkid": "OSL(25)",
    "str": "OSL(25)",
    "title": "OSL(25)"
  },
  "OSL(26)": {
    "code": 0x529a,
    "qmkid": "OSL(26)",
    "str": "OSL(26)",
    "title": "OSL(26)"
  },
  "OSL(27)": {
    "code": 0x529b,
    "qmkid": "OSL(27)",
    "str": "OSL(27)",
    "title": "OSL(27)"
  },
  "OSL(28)": {
    "code": 0x529c,
    "qmkid": "OSL(28)",
    "str": "OSL(28)",
    "title": "OSL(28)"
  },
  "OSL(29)": {
    "code": 0x529d,
    "qmkid": "OSL(29)",
    "str": "OSL(29)",
    "title": "OSL(29)"
  },
  "OSL(30)": {
    "code": 0x529e,
    "qmkid": "OSL(30)",
    "str": "OSL(30)",
    "title": "OSL(30)"
  },
  "OSL(31)": {
    "code": 0x529f,
    "qmkid": "OSL(31)",
    "str": "OSL(31)",
    "title": "OSL(31)"
  },
  "QK_ONE_SHOT_MOD": {
    "code": 0x52a0,
    "qmkid": "QK_ONE_SHOT_MOD",
    "str": "QK_ONE_SHOT_MOD",
    "title": "QK_ONE_SHOT_MOD"
  },
  "OSM(MOD_LCTL)": {
    "code": 0x52a1,
    "qmkid": "OSM(MOD_LCTL)",
    "str": "OSM\nLCtl",
    "title": "Enable Left Control for one keypress"
  },
  "OSM(MOD_LSFT)": {
    "code": 0x52a2,
    "qmkid": "OSM(MOD_LSFT)",
    "str": "OSM\nLSft",
    "title": "Enable Left Shift for one keypress"
  },
  "OSM(MOD_LCTL|MOD_LSFT)": {
    "code": 0x52a3,
    "qmkid": "OSM(MOD_LCTL|MOD_LSFT)",
    "str": "OSM\nCS",
    "title": "Enable Left Control and Shift for one keypress"
  },
  "OSM(MOD_LALT)": {
    "code": 0x52a4,
    "qmkid": "OSM(MOD_LALT)",
    "str": "OSM\nLAlt",
    "title": "Enable Left Alt for one keypress"
  },
  "OSM(MOD_LCTL|MOD_LALT)": {
    "code": 0x52a5,
    "qmkid": "OSM(MOD_LCTL|MOD_LALT)",
    "str": "OSM\nCA",
    "title": "Enable Left Control and Alt for one keypress"
  },
  "OSM(MOD_LSFT|MOD_LALT)": {
    "code": 0x52a6,
    "qmkid": "OSM(MOD_LSFT|MOD_LALT)",
    "str": "OSM\nSA",
    "title": "Enable Left Shift and Alt for one keypress"
  },
  "OSM(MOD_MEH)": {
    "code": 0x52a7,
    "qmkid": "OSM(MOD_MEH)",
    "str": "OSM\nMeh",
    "title": "Enable Left Control, Shift, and Alt for one keypress"
  },
  "OSM(MOD_LGUI)": {
    "code": 0x52a8,
    "qmkid": "OSM(MOD_LGUI)",
    "str": "OSM\nLGUI",
    "title": "Enable Left GUI for one keypress"
  },
  "OSM(MOD_LCTL|MOD_LGUI)": {
    "code": 0x52a9,
    "qmkid": "OSM(MOD_LCTL|MOD_LGUI)",
    "str": "OSM\nCG",
    "title": "Enable Left Control and GUI for one keypress"
  },
  "OSM(MOD_LSFT|MOD_LGUI)": {
    "code": 0x52aa,
    "qmkid": "OSM(MOD_LSFT|MOD_LGUI)",
    "str": "OSM\nSG",
    "title": "Enable Left Shift and GUI for one keypress"
  },
  "OSM(MOD_LCTL|MOD_LSFT|MOD_LGUI)": {
    "code": 0x52ab,
    "qmkid": "OSM(MOD_LCTL|MOD_LSFT|MOD_LGUI)",
    "str": "OSM\nCSG",
    "title": "Enable Left Control, Shift, and GUI for one keypress"
  },
  "OSM(MOD_LALT|MOD_LGUI)": {
    "code": 0x52ac,
    "qmkid": "OSM(MOD_LALT|MOD_LGUI)",
    "str": "OSM\nAG",
    "title": "Enable Left Alt and GUI for one keypress"
  },
  "OSM(MOD_LCTL|MOD_LALT|MOD_LGUI)": {
    "code": 0x52ad,
    "qmkid": "OSM(MOD_LCTL|MOD_LALT|MOD_LGUI)",
    "str": "OSM\nCAG",
    "title": "Enable Left Control, Alt, and GUI for one keypress"
  },
  "OSM(MOD_LSFT|MOD_LALT|MOD_LGUI)": {
    "code": 0x52ae,
    "qmkid": "OSM(MOD_LSFT|MOD_LALT|MOD_LGUI)",
    "str": "OSM\nSAG",
    "title": "Enable Left Shift, Alt, and GUI for one keypress"
  },
  "OSM(MOD_HYPR)": {
    "code": 0x52af,
    "qmkid": "OSM(MOD_HYPR)",
    "str": "OSM\nHyper",
    "title": "Enable Left Control, Shift, Alt, and GUI for one keypress"
  },
  "OSM(MOD_RCTL)": {
    "code": 0x52b1,
    "qmkid": "OSM(MOD_RCTL)",
    "str": "OSM\nRCtl",
    "title": "Enable Right Control for one keypress"
  },
  "OSM(MOD_RSFT)": {
    "code": 0x52b2,
    "qmkid": "OSM(MOD_RSFT)",
    "str": "OSM\nRSft",
    "title": "Enable Right Shift for one keypress"
  },
  "OSM(MOD_RCTL|MOD_RSFT)": {
    "code": 0x52b3,
    "qmkid": "OSM(MOD_RCTL|MOD_RSFT)",
    "str": "OSM\nRCS",
    "title": "Enable Right Control and Shift for one keypress"
  },
  "OSM(MOD_RALT)": {
    "code": 0x52b4,
    "qmkid": "OSM(MOD_RALT)",
    "str": "OSM\nRAlt",
    "title": "Enable Right Alt for one keypress"
  },
  "OSM(MOD_RCTL|MOD_RALT)": {
    "code": 0x52b5,
    "qmkid": "OSM(MOD_RCTL|MOD_RALT)",
    "str": "OSM\nRCA",
    "title": "Enable Right Control and Alt for one keypress"
  },
  "OSM(MOD_RSFT|MOD_RALT)": {
    "code": 0x52b6,
    "qmkid": "OSM(MOD_RSFT|MOD_RALT)",
    "str": "OSM\nRSA",
    "title": "Enable Right Shift and Alt for one keypress"
  },
  "OSM(MOD_RCTL|MOD_RSFT|MOD_RALT)": {
    "code": 0x52b7,
    "qmkid": "OSM(MOD_RCTL|MOD_RSFT|MOD_RALT)",
    "str": "OSM\nRMeh",
    "title": "Enable Right Control, Shift, and Alt for one keypress"
  },
  "OSM(MOD_RGUI)": {
    "code": 0x52b8,
    "qmkid": "OSM(MOD_RGUI)",
    "str": "OSM\nRGUI",
    "title": "Enable Right GUI for one keypress"
  },
  "OSM(MOD_RCTL|MOD_RGUI)": {
    "code": 0x52b9,
    "qmkid": "OSM(MOD_RCTL|MOD_RGUI)",
    "str": "OSM\nRCG",
    "title": "Enable Right Control and GUI for one keypress"
  },
  "OSM(MOD_RSFT|MOD_RGUI)": {
    "code": 0x52ba,
    "qmkid": "OSM(MOD_RSFT|MOD_RGUI)",
    "str": "OSM\nRSG",
    "title": "Enable Right Shift and GUI for one keypress"
  },
  "OSM(MOD_RCTL|MOD_RSFT|MOD_RGUI)": {
    "code": 0x52bb,
    "qmkid": "OSM(MOD_RCTL|MOD_RSFT|MOD_RGUI)",
    "str": "OSM\nRCSG",
    "title": "Enable Right Control, Shift, and GUI for one keypress"
  },
  "OSM(MOD_RALT|MOD_RGUI)": {
    "code": 0x52bc,
    "qmkid": "OSM(MOD_RALT|MOD_RGUI)",
    "str": "OSM\nRAG",
    "title": "Enable Right Alt and GUI for one keypress"
  },
  "OSM(MOD_RCTL|MOD_RALT|MOD_RGUI)": {
    "code": 0x52bd,
    "qmkid": "OSM(MOD_RCTL|MOD_RALT|MOD_RGUI)",
    "str": "OSM\nRCAG",
    "title": "Enable Right Control, Alt, and GUI for one keypress"
  },
  "OSM(MOD_RSFT|MOD_RALT|MOD_RGUI)": {
    "code": 0x52be,
    "qmkid": "OSM(MOD_RSFT|MOD_RALT|MOD_RGUI)",
    "str": "OSM\nRSAG",
    "title": "Enable Right Shift, Alt, and GUI for one keypress"
  },
  "OSM(MOD_RCTL|MOD_RSFT|MOD_RALT|MOD_RGUI)": {
    "code": 0x52bf,
    "qmkid": "OSM(MOD_RCTL|MOD_RSFT|MOD_RALT|MOD_RGUI)",
    "str": "OSM\nRHyp",
    "title": "Enable Right Control, Shift, Alt, and GUI for one keypress"
  },
  "TT(0)": {
    "code": 0x52c0,
    "qmkid": "TT(0)",
    "str": "TT(0)",
    "title": "TT(0)"
  },
  "TT(1)": {
    "code": 0x52c1,
    "qmkid": "TT(1)",
    "str": "TT(1)",
    "title": "TT(1)"
  },
  "TT(2)": {
    "code": 0x52c2,
    "qmkid": "TT(2)",
    "str": "TT(2)",
    "title": "TT(2)"
  },
  "TT(3)": {
    "code": 0x52c3,
    "qmkid": "TT(3)",
    "str": "TT(3)",
    "title": "TT(3)"
  },
  "TT(4)": {
    "code": 0x52c4,
    "qmkid": "TT(4)",
    "str": "TT(4)",
    "title": "TT(4)"
  },
  "TT(5)": {
    "code": 0x52c5,
    "qmkid": "TT(5)",
    "str": "TT(5)",
    "title": "TT(5)"
  },
  "TT(6)": {
    "code": 0x52c6,
    "qmkid": "TT(6)",
    "str": "TT(6)",
    "title": "TT(6)"
  },
  "TT(7)": {
    "code": 0x52c7,
    "qmkid": "TT(7)",
    "str": "TT(7)",
    "title": "TT(7)"
  },
  "TT(8)": {
    "code": 0x52c8,
    "qmkid": "TT(8)",
    "str": "TT(8)",
    "title": "TT(8)"
  },
  "TT(9)": {
    "code": 0x52c9,
    "qmkid": "TT(9)",
    "str": "TT(9)",
    "title": "TT(9)"
  },
  "TT(10)": {
    "code": 0x52ca,
    "qmkid": "TT(10)",
    "str": "TT(10)",
    "title": "TT(10)"
  },
  "TT(11)": {
    "code": 0x52cb,
    "qmkid": "TT(11)",
    "str": "TT(11)",
    "title": "TT(11)"
  },
  "TT(12)": {
    "code": 0x52cc,
    "qmkid": "TT(12)",
    "str": "TT(12)",
    "title": "TT(12)"
  },
  "TT(13)": {
    "code": 0x52cd,
    "qmkid": "TT(13)",
    "str": "TT(13)",
    "title": "TT(13)"
  },
  "TT(14)": {
    "code": 0x52ce,
    "qmkid": "TT(14)",
    "str": "TT(14)",
    "title": "TT(14)"
  },
  "TT(15)": {
    "code": 0x52cf,
    "qmkid": "TT(15)",
    "str": "TT(15)",
    "title": "TT(15)"
  },
  "TT(16)": {
    "code": 0x52d0,
    "qmkid": "TT(16)",
    "str": "TT(16)",
    "title": "TT(16)"
  },
  "TT(17)": {
    "code": 0x52d1,
    "qmkid": "TT(17)",
    "str": "TT(17)",
    "title": "TT(17)"
  },
  "TT(18)": {
    "code": 0x52d2,
    "qmkid": "TT(18)",
    "str": "TT(18)",
    "title": "TT(18)"
  },
  "TT(19)": {
    "code": 0x52d3,
    "qmkid": "TT(19)",
    "str": "TT(19)",
    "title": "TT(19)"
  },
  "TT(20)": {
    "code": 0x52d4,
    "qmkid": "TT(20)",
    "str": "TT(20)",
    "title": "TT(20)"
  },
  "TT(21)": {
    "code": 0x52d5,
    "qmkid": "TT(21)",
    "str": "TT(21)",
    "title": "TT(21)"
  },
  "TT(22)": {
    "code": 0x52d6,
    "qmkid": "TT(22)",
    "str": "TT(22)",
    "title": "TT(22)"
  },
  "TT(23)": {
    "code": 0x52d7,
    "qmkid": "TT(23)",
    "str": "TT(23)",
    "title": "TT(23)"
  },
  "TT(24)": {
    "code": 0x52d8,
    "qmkid": "TT(24)",
    "str": "TT(24)",
    "title": "TT(24)"
  },
  "TT(25)": {
    "code": 0x52d9,
    "qmkid": "TT(25)",
    "str": "TT(25)",
    "title": "TT(25)"
  },
  "TT(26)": {
    "code": 0x52da,
    "qmkid": "TT(26)",
    "str": "TT(26)",
    "title": "TT(26)"
  },
  "TT(27)": {
    "code": 0x52db,
    "qmkid": "TT(27)",
    "str": "TT(27)",
    "title": "TT(27)"
  },
  "TT(28)": {
    "code": 0x52dc,
    "qmkid": "TT(28)",
    "str": "TT(28)",
    "title": "TT(28)"
  },
  "TT(29)": {
    "code": 0x52dd,
    "qmkid": "TT(29)",
    "str": "TT(29)",
    "title": "TT(29)"
  },
  "TT(30)": {
    "code": 0x52de,
    "qmkid": "TT(30)",
    "str": "TT(30)",
    "title": "TT(30)"
  },
  "TT(31)": {
    "code": 0x52df,
    "qmkid": "TT(31)",
    "str": "TT(31)",
    "title": "TT(31)"
  },
  "QK_SWAP_HANDS": {
    "code": 0x5600,
    "qmkid": "QK_SWAP_HANDS",
    "str": "QK_SWAP_HANDS",
    "title": "QK_SWAP_HANDS"
  },
  "QK_SWAP_HANDS_TOGGLE": {
    "code": 0x56f0,
    "qmkid": "QK_SWAP_HANDS_TOGGLE",
    "str": "QK_SWAP_HANDS_TOGGLE",
    "title": "QK_SWAP_HANDS_TOGGLE"
  },
  "QK_SWAP_HANDS_TAP_TOGGLE": {
    "code": 0x56f1,
    "qmkid": "QK_SWAP_HANDS_TAP_TOGGLE",
    "str": "QK_SWAP_HANDS_TAP_TOGGLE",
    "title": "QK_SWAP_HANDS_TAP_TOGGLE"
  },
  "QK_SWAP_HANDS_MOMENTARY_ON": {
    "code": 0x56f2,
    "qmkid": "QK_SWAP_HANDS_MOMENTARY_ON",
    "str": "QK_SWAP_HANDS_MOMENTARY_ON",
    "title": "QK_SWAP_HANDS_MOMENTARY_ON"
  },
  "QK_SWAP_HANDS_MOMENTARY_OFF": {
    "code": 0x56f3,
    "qmkid": "QK_SWAP_HANDS_MOMENTARY_OFF",
    "str": "QK_SWAP_HANDS_MOMENTARY_OFF",
    "title": "QK_SWAP_HANDS_MOMENTARY_OFF"
  },
  "QK_SWAP_HANDS_OFF": {
    "code": 0x56f4,
    "qmkid": "QK_SWAP_HANDS_OFF",
    "str": "QK_SWAP_HANDS_OFF",
    "title": "QK_SWAP_HANDS_OFF"
  },
  "QK_SWAP_HANDS_ON": {
    "code": 0x56f5,
    "qmkid": "QK_SWAP_HANDS_ON",
    "str": "QK_SWAP_HANDS_ON",
    "title": "QK_SWAP_HANDS_ON"
  },
  "QK_SWAP_HANDS_ONE_SHOT": {
    "code": 0x56f6,
    "qmkid": "QK_SWAP_HANDS_ONE_SHOT",
    "str": "QK_SWAP_HANDS_ONE_SHOT",
    "title": "QK_SWAP_HANDS_ONE_SHOT"
  },
  "QK_SWAP_HANDS_MAX": {
    "code": 0x56ff,
    "qmkid": "QK_SWAP_HANDS_MAX",
    "str": "QK_SWAP_HANDS_MAX",
    "title": "QK_SWAP_HANDS_MAX"
  },
  "TD(0)": {
    "code": 0x5700,
    "qmkid": "TD(0)",
    "str": "TD(0)",
    "title": "TD(0)"
  },
  "TD(1)": {
    "code": 0x5701,
    "qmkid": "TD(1)",
    "str": "TD(1)",
    "title": "TD(1)"
  },
  "TD(2)": {
    "code": 0x5702,
    "qmkid": "TD(2)",
    "str": "TD(2)",
    "title": "TD(2)"
  },
  "TD(3)": {
    "code": 0x5703,
    "qmkid": "TD(3)",
    "str": "TD(3)",
    "title": "TD(3)"
  },
  "TD(4)": {
    "code": 0x5704,
    "qmkid": "TD(4)",
    "str": "TD(4)",
    "title": "TD(4)"
  },
  "TD(5)": {
    "code": 0x5705,
    "qmkid": "TD(5)",
    "str": "TD(5)",
    "title": "TD(5)"
  },
  "TD(6)": {
    "code": 0x5706,
    "qmkid": "TD(6)",
    "str": "TD(6)",
    "title": "TD(6)"
  },
  "TD(7)": {
    "code": 0x5707,
    "qmkid": "TD(7)",
    "str": "TD(7)",
    "title": "TD(7)"
  },
  "TD(8)": {
    "code": 0x5708,
    "qmkid": "TD(8)",
    "str": "TD(8)",
    "title": "TD(8)"
  },
  "TD(9)": {
    "code": 0x5709,
    "qmkid": "TD(9)",
    "str": "TD(9)",
    "title": "TD(9)"
  },
  "TD(10)": {
    "code": 0x570a,
    "qmkid": "TD(10)",
    "str": "TD(10)",
    "title": "TD(10)"
  },
  "TD(11)": {
    "code": 0x570b,
    "qmkid": "TD(11)",
    "str": "TD(11)",
    "title": "TD(11)"
  },
  "TD(12)": {
    "code": 0x570c,
    "qmkid": "TD(12)",
    "str": "TD(12)",
    "title": "TD(12)"
  },
  "TD(13)": {
    "code": 0x570d,
    "qmkid": "TD(13)",
    "str": "TD(13)",
    "title": "TD(13)"
  },
  "TD(14)": {
    "code": 0x570e,
    "qmkid": "TD(14)",
    "str": "TD(14)",
    "title": "TD(14)"
  },
  "TD(15)": {
    "code": 0x570f,
    "qmkid": "TD(15)",
    "str": "TD(15)",
    "title": "TD(15)"
  },
  "TD(16)": {
    "code": 0x5710,
    "qmkid": "TD(16)",
    "str": "TD(16)",
    "title": "TD(16)"
  },
  "TD(17)": {
    "code": 0x5711,
    "qmkid": "TD(17)",
    "str": "TD(17)",
    "title": "TD(17)"
  },
  "TD(18)": {
    "code": 0x5712,
    "qmkid": "TD(18)",
    "str": "TD(18)",
    "title": "TD(18)"
  },
  "TD(19)": {
    "code": 0x5713,
    "qmkid": "TD(19)",
    "str": "TD(19)",
    "title": "TD(19)"
  },
  "TD(20)": {
    "code": 0x5714,
    "qmkid": "TD(20)",
    "str": "TD(20)",
    "title": "TD(20)"
  },
  "TD(21)": {
    "code": 0x5715,
    "qmkid": "TD(21)",
    "str": "TD(21)",
    "title": "TD(21)"
  },
  "TD(22)": {
    "code": 0x5716,
    "qmkid": "TD(22)",
    "str": "TD(22)",
    "title": "TD(22)"
  },
  "TD(23)": {
    "code": 0x5717,
    "qmkid": "TD(23)",
    "str": "TD(23)",
    "title": "TD(23)"
  },
  "TD(24)": {
    "code": 0x5718,
    "qmkid": "TD(24)",
    "str": "TD(24)",
    "title": "TD(24)"
  },
  "TD(25)": {
    "code": 0x5719,
    "qmkid": "TD(25)",
    "str": "TD(25)",
    "title": "TD(25)"
  },
  "TD(26)": {
    "code": 0x571a,
    "qmkid": "TD(26)",
    "str": "TD(26)",
    "title": "TD(26)"
  },
  "TD(27)": {
    "code": 0x571b,
    "qmkid": "TD(27)",
    "str": "TD(27)",
    "title": "TD(27)"
  },
  "TD(28)": {
    "code": 0x571c,
    "qmkid": "TD(28)",
    "str": "TD(28)",
    "title": "TD(28)"
  },
  "TD(29)": {
    "code": 0x571d,
    "qmkid": "TD(29)",
    "str": "TD(29)",
    "title": "TD(29)"
  },
  "TD(30)": {
    "code": 0x571e,
    "qmkid": "TD(30)",
    "str": "TD(30)",
    "title": "TD(30)"
  },
  "TD(31)": {
    "code": 0x571f,
    "qmkid": "TD(31)",
    "str": "TD(31)",
    "title": "TD(31)"
  },
  "TD(32)": {
    "code": 0x5720,
    "qmkid": "TD(32)",
    "str": "TD(32)",
    "title": "TD(32)"
  },
  "TD(33)": {
    "code": 0x5721,
    "qmkid": "TD(33)",
    "str": "TD(33)",
    "title": "TD(33)"
  },
  "TD(34)": {
    "code": 0x5722,
    "qmkid": "TD(34)",
    "str": "TD(34)",
    "title": "TD(34)"
  },
  "TD(35)": {
    "code": 0x5723,
    "qmkid": "TD(35)",
    "str": "TD(35)",
    "title": "TD(35)"
  },
  "TD(36)": {
    "code": 0x5724,
    "qmkid": "TD(36)",
    "str": "TD(36)",
    "title": "TD(36)"
  },
  "TD(37)": {
    "code": 0x5725,
    "qmkid": "TD(37)",
    "str": "TD(37)",
    "title": "TD(37)"
  },
  "TD(38)": {
    "code": 0x5726,
    "qmkid": "TD(38)",
    "str": "TD(38)",
    "title": "TD(38)"
  },
  "TD(39)": {
    "code": 0x5727,
    "qmkid": "TD(39)",
    "str": "TD(39)",
    "title": "TD(39)"
  },
  "TD(40)": {
    "code": 0x5728,
    "qmkid": "TD(40)",
    "str": "TD(40)",
    "title": "TD(40)"
  },
  "TD(41)": {
    "code": 0x5729,
    "qmkid": "TD(41)",
    "str": "TD(41)",
    "title": "TD(41)"
  },
  "TD(42)": {
    "code": 0x572a,
    "qmkid": "TD(42)",
    "str": "TD(42)",
    "title": "TD(42)"
  },
  "TD(43)": {
    "code": 0x572b,
    "qmkid": "TD(43)",
    "str": "TD(43)",
    "title": "TD(43)"
  },
  "TD(44)": {
    "code": 0x572c,
    "qmkid": "TD(44)",
    "str": "TD(44)",
    "title": "TD(44)"
  },
  "TD(45)": {
    "code": 0x572d,
    "qmkid": "TD(45)",
    "str": "TD(45)",
    "title": "TD(45)"
  },
  "TD(46)": {
    "code": 0x572e,
    "qmkid": "TD(46)",
    "str": "TD(46)",
    "title": "TD(46)"
  },
  "TD(47)": {
    "code": 0x572f,
    "qmkid": "TD(47)",
    "str": "TD(47)",
    "title": "TD(47)"
  },
  "TD(48)": {
    "code": 0x5730,
    "qmkid": "TD(48)",
    "str": "TD(48)",
    "title": "TD(48)"
  },
  "TD(49)": {
    "code": 0x5731,
    "qmkid": "TD(49)",
    "str": "TD(49)",
    "title": "TD(49)"
  },
  "TD(50)": {
    "code": 0x5732,
    "qmkid": "TD(50)",
    "str": "TD(50)",
    "title": "TD(50)"
  },
  "TD(51)": {
    "code": 0x5733,
    "qmkid": "TD(51)",
    "str": "TD(51)",
    "title": "TD(51)"
  },
  "TD(52)": {
    "code": 0x5734,
    "qmkid": "TD(52)",
    "str": "TD(52)",
    "title": "TD(52)"
  },
  "TD(53)": {
    "code": 0x5735,
    "qmkid": "TD(53)",
    "str": "TD(53)",
    "title": "TD(53)"
  },
  "TD(54)": {
    "code": 0x5736,
    "qmkid": "TD(54)",
    "str": "TD(54)",
    "title": "TD(54)"
  },
  "TD(55)": {
    "code": 0x5737,
    "qmkid": "TD(55)",
    "str": "TD(55)",
    "title": "TD(55)"
  },
  "TD(56)": {
    "code": 0x5738,
    "qmkid": "TD(56)",
    "str": "TD(56)",
    "title": "TD(56)"
  },
  "TD(57)": {
    "code": 0x5739,
    "qmkid": "TD(57)",
    "str": "TD(57)",
    "title": "TD(57)"
  },
  "TD(58)": {
    "code": 0x573a,
    "qmkid": "TD(58)",
    "str": "TD(58)",
    "title": "TD(58)"
  },
  "TD(59)": {
    "code": 0x573b,
    "qmkid": "TD(59)",
    "str": "TD(59)",
    "title": "TD(59)"
  },
  "TD(60)": {
    "code": 0x573c,
    "qmkid": "TD(60)",
    "str": "TD(60)",
    "title": "TD(60)"
  },
  "TD(61)": {
    "code": 0x573d,
    "qmkid": "TD(61)",
    "str": "TD(61)",
    "title": "TD(61)"
  },
  "TD(62)": {
    "code": 0x573e,
    "qmkid": "TD(62)",
    "str": "TD(62)",
    "title": "TD(62)"
  },
  "TD(63)": {
    "code": 0x573f,
    "qmkid": "TD(63)",
    "str": "TD(63)",
    "title": "TD(63)"
  },
  "TD(64)": {
    "code": 0x5740,
    "qmkid": "TD(64)",
    "str": "TD(64)",
    "title": "TD(64)"
  },
  "TD(65)": {
    "code": 0x5741,
    "qmkid": "TD(65)",
    "str": "TD(65)",
    "title": "TD(65)"
  },
  "TD(66)": {
    "code": 0x5742,
    "qmkid": "TD(66)",
    "str": "TD(66)",
    "title": "TD(66)"
  },
  "TD(67)": {
    "code": 0x5743,
    "qmkid": "TD(67)",
    "str": "TD(67)",
    "title": "TD(67)"
  },
  "TD(68)": {
    "code": 0x5744,
    "qmkid": "TD(68)",
    "str": "TD(68)",
    "title": "TD(68)"
  },
  "TD(69)": {
    "code": 0x5745,
    "qmkid": "TD(69)",
    "str": "TD(69)",
    "title": "TD(69)"
  },
  "TD(70)": {
    "code": 0x5746,
    "qmkid": "TD(70)",
    "str": "TD(70)",
    "title": "TD(70)"
  },
  "TD(71)": {
    "code": 0x5747,
    "qmkid": "TD(71)",
    "str": "TD(71)",
    "title": "TD(71)"
  },
  "TD(72)": {
    "code": 0x5748,
    "qmkid": "TD(72)",
    "str": "TD(72)",
    "title": "TD(72)"
  },
  "TD(73)": {
    "code": 0x5749,
    "qmkid": "TD(73)",
    "str": "TD(73)",
    "title": "TD(73)"
  },
  "TD(74)": {
    "code": 0x574a,
    "qmkid": "TD(74)",
    "str": "TD(74)",
    "title": "TD(74)"
  },
  "TD(75)": {
    "code": 0x574b,
    "qmkid": "TD(75)",
    "str": "TD(75)",
    "title": "TD(75)"
  },
  "TD(76)": {
    "code": 0x574c,
    "qmkid": "TD(76)",
    "str": "TD(76)",
    "title": "TD(76)"
  },
  "TD(77)": {
    "code": 0x574d,
    "qmkid": "TD(77)",
    "str": "TD(77)",
    "title": "TD(77)"
  },
  "TD(78)": {
    "code": 0x574e,
    "qmkid": "TD(78)",
    "str": "TD(78)",
    "title": "TD(78)"
  },
  "TD(79)": {
    "code": 0x574f,
    "qmkid": "TD(79)",
    "str": "TD(79)",
    "title": "TD(79)"
  },
  "TD(80)": {
    "code": 0x5750,
    "qmkid": "TD(80)",
    "str": "TD(80)",
    "title": "TD(80)"
  },
  "TD(81)": {
    "code": 0x5751,
    "qmkid": "TD(81)",
    "str": "TD(81)",
    "title": "TD(81)"
  },
  "TD(82)": {
    "code": 0x5752,
    "qmkid": "TD(82)",
    "str": "TD(82)",
    "title": "TD(82)"
  },
  "TD(83)": {
    "code": 0x5753,
    "qmkid": "TD(83)",
    "str": "TD(83)",
    "title": "TD(83)"
  },
  "TD(84)": {
    "code": 0x5754,
    "qmkid": "TD(84)",
    "str": "TD(84)",
    "title": "TD(84)"
  },
  "TD(85)": {
    "code": 0x5755,
    "qmkid": "TD(85)",
    "str": "TD(85)",
    "title": "TD(85)"
  },
  "TD(86)": {
    "code": 0x5756,
    "qmkid": "TD(86)",
    "str": "TD(86)",
    "title": "TD(86)"
  },
  "TD(87)": {
    "code": 0x5757,
    "qmkid": "TD(87)",
    "str": "TD(87)",
    "title": "TD(87)"
  },
  "TD(88)": {
    "code": 0x5758,
    "qmkid": "TD(88)",
    "str": "TD(88)",
    "title": "TD(88)"
  },
  "TD(89)": {
    "code": 0x5759,
    "qmkid": "TD(89)",
    "str": "TD(89)",
    "title": "TD(89)"
  },
  "TD(90)": {
    "code": 0x575a,
    "qmkid": "TD(90)",
    "str": "TD(90)",
    "title": "TD(90)"
  },
  "TD(91)": {
    "code": 0x575b,
    "qmkid": "TD(91)",
    "str": "TD(91)",
    "title": "TD(91)"
  },
  "TD(92)": {
    "code": 0x575c,
    "qmkid": "TD(92)",
    "str": "TD(92)",
    "title": "TD(92)"
  },
  "TD(93)": {
    "code": 0x575d,
    "qmkid": "TD(93)",
    "str": "TD(93)",
    "title": "TD(93)"
  },
  "TD(94)": {
    "code": 0x575e,
    "qmkid": "TD(94)",
    "str": "TD(94)",
    "title": "TD(94)"
  },
  "TD(95)": {
    "code": 0x575f,
    "qmkid": "TD(95)",
    "str": "TD(95)",
    "title": "TD(95)"
  },
  "TD(96)": {
    "code": 0x5760,
    "qmkid": "TD(96)",
    "str": "TD(96)",
    "title": "TD(96)"
  },
  "TD(97)": {
    "code": 0x5761,
    "qmkid": "TD(97)",
    "str": "TD(97)",
    "title": "TD(97)"
  },
  "TD(98)": {
    "code": 0x5762,
    "qmkid": "TD(98)",
    "str": "TD(98)",
    "title": "TD(98)"
  },
  "TD(99)": {
    "code": 0x5763,
    "qmkid": "TD(99)",
    "str": "TD(99)",
    "title": "TD(99)"
  },
  "TD(100)": {
    "code": 0x5764,
    "qmkid": "TD(100)",
    "str": "TD(100)",
    "title": "TD(100)"
  },
  "TD(101)": {
    "code": 0x5765,
    "qmkid": "TD(101)",
    "str": "TD(101)",
    "title": "TD(101)"
  },
  "TD(102)": {
    "code": 0x5766,
    "qmkid": "TD(102)",
    "str": "TD(102)",
    "title": "TD(102)"
  },
  "TD(103)": {
    "code": 0x5767,
    "qmkid": "TD(103)",
    "str": "TD(103)",
    "title": "TD(103)"
  },
  "TD(104)": {
    "code": 0x5768,
    "qmkid": "TD(104)",
    "str": "TD(104)",
    "title": "TD(104)"
  },
  "TD(105)": {
    "code": 0x5769,
    "qmkid": "TD(105)",
    "str": "TD(105)",
    "title": "TD(105)"
  },
  "TD(106)": {
    "code": 0x576a,
    "qmkid": "TD(106)",
    "str": "TD(106)",
    "title": "TD(106)"
  },
  "TD(107)": {
    "code": 0x576b,
    "qmkid": "TD(107)",
    "str": "TD(107)",
    "title": "TD(107)"
  },
  "TD(108)": {
    "code": 0x576c,
    "qmkid": "TD(108)",
    "str": "TD(108)",
    "title": "TD(108)"
  },
  "TD(109)": {
    "code": 0x576d,
    "qmkid": "TD(109)",
    "str": "TD(109)",
    "title": "TD(109)"
  },
  "TD(110)": {
    "code": 0x576e,
    "qmkid": "TD(110)",
    "str": "TD(110)",
    "title": "TD(110)"
  },
  "TD(111)": {
    "code": 0x576f,
    "qmkid": "TD(111)",
    "str": "TD(111)",
    "title": "TD(111)"
  },
  "TD(112)": {
    "code": 0x5770,
    "qmkid": "TD(112)",
    "str": "TD(112)",
    "title": "TD(112)"
  },
  "TD(113)": {
    "code": 0x5771,
    "qmkid": "TD(113)",
    "str": "TD(113)",
    "title": "TD(113)"
  },
  "TD(114)": {
    "code": 0x5772,
    "qmkid": "TD(114)",
    "str": "TD(114)",
    "title": "TD(114)"
  },
  "TD(115)": {
    "code": 0x5773,
    "qmkid": "TD(115)",
    "str": "TD(115)",
    "title": "TD(115)"
  },
  "TD(116)": {
    "code": 0x5774,
    "qmkid": "TD(116)",
    "str": "TD(116)",
    "title": "TD(116)"
  },
  "TD(117)": {
    "code": 0x5775,
    "qmkid": "TD(117)",
    "str": "TD(117)",
    "title": "TD(117)"
  },
  "TD(118)": {
    "code": 0x5776,
    "qmkid": "TD(118)",
    "str": "TD(118)",
    "title": "TD(118)"
  },
  "TD(119)": {
    "code": 0x5777,
    "qmkid": "TD(119)",
    "str": "TD(119)",
    "title": "TD(119)"
  },
  "TD(120)": {
    "code": 0x5778,
    "qmkid": "TD(120)",
    "str": "TD(120)",
    "title": "TD(120)"
  },
  "TD(121)": {
    "code": 0x5779,
    "qmkid": "TD(121)",
    "str": "TD(121)",
    "title": "TD(121)"
  },
  "TD(122)": {
    "code": 0x577a,
    "qmkid": "TD(122)",
    "str": "TD(122)",
    "title": "TD(122)"
  },
  "TD(123)": {
    "code": 0x577b,
    "qmkid": "TD(123)",
    "str": "TD(123)",
    "title": "TD(123)"
  },
  "TD(124)": {
    "code": 0x577c,
    "qmkid": "TD(124)",
    "str": "TD(124)",
    "title": "TD(124)"
  },
  "TD(125)": {
    "code": 0x577d,
    "qmkid": "TD(125)",
    "str": "TD(125)",
    "title": "TD(125)"
  },
  "TD(126)": {
    "code": 0x577e,
    "qmkid": "TD(126)",
    "str": "TD(126)",
    "title": "TD(126)"
  },
  "TD(127)": {
    "code": 0x577f,
    "qmkid": "TD(127)",
    "str": "TD(127)",
    "title": "TD(127)"
  },
  "TD(128)": {
    "code": 0x5780,
    "qmkid": "TD(128)",
    "str": "TD(128)",
    "title": "TD(128)"
  },
  "TD(129)": {
    "code": 0x5781,
    "qmkid": "TD(129)",
    "str": "TD(129)",
    "title": "TD(129)"
  },
  "TD(130)": {
    "code": 0x5782,
    "qmkid": "TD(130)",
    "str": "TD(130)",
    "title": "TD(130)"
  },
  "TD(131)": {
    "code": 0x5783,
    "qmkid": "TD(131)",
    "str": "TD(131)",
    "title": "TD(131)"
  },
  "TD(132)": {
    "code": 0x5784,
    "qmkid": "TD(132)",
    "str": "TD(132)",
    "title": "TD(132)"
  },
  "TD(133)": {
    "code": 0x5785,
    "qmkid": "TD(133)",
    "str": "TD(133)",
    "title": "TD(133)"
  },
  "TD(134)": {
    "code": 0x5786,
    "qmkid": "TD(134)",
    "str": "TD(134)",
    "title": "TD(134)"
  },
  "TD(135)": {
    "code": 0x5787,
    "qmkid": "TD(135)",
    "str": "TD(135)",
    "title": "TD(135)"
  },
  "TD(136)": {
    "code": 0x5788,
    "qmkid": "TD(136)",
    "str": "TD(136)",
    "title": "TD(136)"
  },
  "TD(137)": {
    "code": 0x5789,
    "qmkid": "TD(137)",
    "str": "TD(137)",
    "title": "TD(137)"
  },
  "TD(138)": {
    "code": 0x578a,
    "qmkid": "TD(138)",
    "str": "TD(138)",
    "title": "TD(138)"
  },
  "TD(139)": {
    "code": 0x578b,
    "qmkid": "TD(139)",
    "str": "TD(139)",
    "title": "TD(139)"
  },
  "TD(140)": {
    "code": 0x578c,
    "qmkid": "TD(140)",
    "str": "TD(140)",
    "title": "TD(140)"
  },
  "TD(141)": {
    "code": 0x578d,
    "qmkid": "TD(141)",
    "str": "TD(141)",
    "title": "TD(141)"
  },
  "TD(142)": {
    "code": 0x578e,
    "qmkid": "TD(142)",
    "str": "TD(142)",
    "title": "TD(142)"
  },
  "TD(143)": {
    "code": 0x578f,
    "qmkid": "TD(143)",
    "str": "TD(143)",
    "title": "TD(143)"
  },
  "TD(144)": {
    "code": 0x5790,
    "qmkid": "TD(144)",
    "str": "TD(144)",
    "title": "TD(144)"
  },
  "TD(145)": {
    "code": 0x5791,
    "qmkid": "TD(145)",
    "str": "TD(145)",
    "title": "TD(145)"
  },
  "TD(146)": {
    "code": 0x5792,
    "qmkid": "TD(146)",
    "str": "TD(146)",
    "title": "TD(146)"
  },
  "TD(147)": {
    "code": 0x5793,
    "qmkid": "TD(147)",
    "str": "TD(147)",
    "title": "TD(147)"
  },
  "TD(148)": {
    "code": 0x5794,
    "qmkid": "TD(148)",
    "str": "TD(148)",
    "title": "TD(148)"
  },
  "TD(149)": {
    "code": 0x5795,
    "qmkid": "TD(149)",
    "str": "TD(149)",
    "title": "TD(149)"
  },
  "TD(150)": {
    "code": 0x5796,
    "qmkid": "TD(150)",
    "str": "TD(150)",
    "title": "TD(150)"
  },
  "TD(151)": {
    "code": 0x5797,
    "qmkid": "TD(151)",
    "str": "TD(151)",
    "title": "TD(151)"
  },
  "TD(152)": {
    "code": 0x5798,
    "qmkid": "TD(152)",
    "str": "TD(152)",
    "title": "TD(152)"
  },
  "TD(153)": {
    "code": 0x5799,
    "qmkid": "TD(153)",
    "str": "TD(153)",
    "title": "TD(153)"
  },
  "TD(154)": {
    "code": 0x579a,
    "qmkid": "TD(154)",
    "str": "TD(154)",
    "title": "TD(154)"
  },
  "TD(155)": {
    "code": 0x579b,
    "qmkid": "TD(155)",
    "str": "TD(155)",
    "title": "TD(155)"
  },
  "TD(156)": {
    "code": 0x579c,
    "qmkid": "TD(156)",
    "str": "TD(156)",
    "title": "TD(156)"
  },
  "TD(157)": {
    "code": 0x579d,
    "qmkid": "TD(157)",
    "str": "TD(157)",
    "title": "TD(157)"
  },
  "TD(158)": {
    "code": 0x579e,
    "qmkid": "TD(158)",
    "str": "TD(158)",
    "title": "TD(158)"
  },
  "TD(159)": {
    "code": 0x579f,
    "qmkid": "TD(159)",
    "str": "TD(159)",
    "title": "TD(159)"
  },
  "TD(160)": {
    "code": 0x57a0,
    "qmkid": "TD(160)",
    "str": "TD(160)",
    "title": "TD(160)"
  },
  "TD(161)": {
    "code": 0x57a1,
    "qmkid": "TD(161)",
    "str": "TD(161)",
    "title": "TD(161)"
  },
  "TD(162)": {
    "code": 0x57a2,
    "qmkid": "TD(162)",
    "str": "TD(162)",
    "title": "TD(162)"
  },
  "TD(163)": {
    "code": 0x57a3,
    "qmkid": "TD(163)",
    "str": "TD(163)",
    "title": "TD(163)"
  },
  "TD(164)": {
    "code": 0x57a4,
    "qmkid": "TD(164)",
    "str": "TD(164)",
    "title": "TD(164)"
  },
  "TD(165)": {
    "code": 0x57a5,
    "qmkid": "TD(165)",
    "str": "TD(165)",
    "title": "TD(165)"
  },
  "TD(166)": {
    "code": 0x57a6,
    "qmkid": "TD(166)",
    "str": "TD(166)",
    "title": "TD(166)"
  },
  "TD(167)": {
    "code": 0x57a7,
    "qmkid": "TD(167)",
    "str": "TD(167)",
    "title": "TD(167)"
  },
  "TD(168)": {
    "code": 0x57a8,
    "qmkid": "TD(168)",
    "str": "TD(168)",
    "title": "TD(168)"
  },
  "TD(169)": {
    "code": 0x57a9,
    "qmkid": "TD(169)",
    "str": "TD(169)",
    "title": "TD(169)"
  },
  "TD(170)": {
    "code": 0x57aa,
    "qmkid": "TD(170)",
    "str": "TD(170)",
    "title": "TD(170)"
  },
  "TD(171)": {
    "code": 0x57ab,
    "qmkid": "TD(171)",
    "str": "TD(171)",
    "title": "TD(171)"
  },
  "TD(172)": {
    "code": 0x57ac,
    "qmkid": "TD(172)",
    "str": "TD(172)",
    "title": "TD(172)"
  },
  "TD(173)": {
    "code": 0x57ad,
    "qmkid": "TD(173)",
    "str": "TD(173)",
    "title": "TD(173)"
  },
  "TD(174)": {
    "code": 0x57ae,
    "qmkid": "TD(174)",
    "str": "TD(174)",
    "title": "TD(174)"
  },
  "TD(175)": {
    "code": 0x57af,
    "qmkid": "TD(175)",
    "str": "TD(175)",
    "title": "TD(175)"
  },
  "TD(176)": {
    "code": 0x57b0,
    "qmkid": "TD(176)",
    "str": "TD(176)",
    "title": "TD(176)"
  },
  "TD(177)": {
    "code": 0x57b1,
    "qmkid": "TD(177)",
    "str": "TD(177)",
    "title": "TD(177)"
  },
  "TD(178)": {
    "code": 0x57b2,
    "qmkid": "TD(178)",
    "str": "TD(178)",
    "title": "TD(178)"
  },
  "TD(179)": {
    "code": 0x57b3,
    "qmkid": "TD(179)",
    "str": "TD(179)",
    "title": "TD(179)"
  },
  "TD(180)": {
    "code": 0x57b4,
    "qmkid": "TD(180)",
    "str": "TD(180)",
    "title": "TD(180)"
  },
  "TD(181)": {
    "code": 0x57b5,
    "qmkid": "TD(181)",
    "str": "TD(181)",
    "title": "TD(181)"
  },
  "TD(182)": {
    "code": 0x57b6,
    "qmkid": "TD(182)",
    "str": "TD(182)",
    "title": "TD(182)"
  },
  "TD(183)": {
    "code": 0x57b7,
    "qmkid": "TD(183)",
    "str": "TD(183)",
    "title": "TD(183)"
  },
  "TD(184)": {
    "code": 0x57b8,
    "qmkid": "TD(184)",
    "str": "TD(184)",
    "title": "TD(184)"
  },
  "TD(185)": {
    "code": 0x57b9,
    "qmkid": "TD(185)",
    "str": "TD(185)",
    "title": "TD(185)"
  },
  "TD(186)": {
    "code": 0x57ba,
    "qmkid": "TD(186)",
    "str": "TD(186)",
    "title": "TD(186)"
  },
  "TD(187)": {
    "code": 0x57bb,
    "qmkid": "TD(187)",
    "str": "TD(187)",
    "title": "TD(187)"
  },
  "TD(188)": {
    "code": 0x57bc,
    "qmkid": "TD(188)",
    "str": "TD(188)",
    "title": "TD(188)"
  },
  "TD(189)": {
    "code": 0x57bd,
    "qmkid": "TD(189)",
    "str": "TD(189)",
    "title": "TD(189)"
  },
  "TD(190)": {
    "code": 0x57be,
    "qmkid": "TD(190)",
    "str": "TD(190)",
    "title": "TD(190)"
  },
  "TD(191)": {
    "code": 0x57bf,
    "qmkid": "TD(191)",
    "str": "TD(191)",
    "title": "TD(191)"
  },
  "TD(192)": {
    "code": 0x57c0,
    "qmkid": "TD(192)",
    "str": "TD(192)",
    "title": "TD(192)"
  },
  "TD(193)": {
    "code": 0x57c1,
    "qmkid": "TD(193)",
    "str": "TD(193)",
    "title": "TD(193)"
  },
  "TD(194)": {
    "code": 0x57c2,
    "qmkid": "TD(194)",
    "str": "TD(194)",
    "title": "TD(194)"
  },
  "TD(195)": {
    "code": 0x57c3,
    "qmkid": "TD(195)",
    "str": "TD(195)",
    "title": "TD(195)"
  },
  "TD(196)": {
    "code": 0x57c4,
    "qmkid": "TD(196)",
    "str": "TD(196)",
    "title": "TD(196)"
  },
  "TD(197)": {
    "code": 0x57c5,
    "qmkid": "TD(197)",
    "str": "TD(197)",
    "title": "TD(197)"
  },
  "TD(198)": {
    "code": 0x57c6,
    "qmkid": "TD(198)",
    "str": "TD(198)",
    "title": "TD(198)"
  },
  "TD(199)": {
    "code": 0x57c7,
    "qmkid": "TD(199)",
    "str": "TD(199)",
    "title": "TD(199)"
  },
  "TD(200)": {
    "code": 0x57c8,
    "qmkid": "TD(200)",
    "str": "TD(200)",
    "title": "TD(200)"
  },
  "TD(201)": {
    "code": 0x57c9,
    "qmkid": "TD(201)",
    "str": "TD(201)",
    "title": "TD(201)"
  },
  "TD(202)": {
    "code": 0x57ca,
    "qmkid": "TD(202)",
    "str": "TD(202)",
    "title": "TD(202)"
  },
  "TD(203)": {
    "code": 0x57cb,
    "qmkid": "TD(203)",
    "str": "TD(203)",
    "title": "TD(203)"
  },
  "TD(204)": {
    "code": 0x57cc,
    "qmkid": "TD(204)",
    "str": "TD(204)",
    "title": "TD(204)"
  },
  "TD(205)": {
    "code": 0x57cd,
    "qmkid": "TD(205)",
    "str": "TD(205)",
    "title": "TD(205)"
  },
  "TD(206)": {
    "code": 0x57ce,
    "qmkid": "TD(206)",
    "str": "TD(206)",
    "title": "TD(206)"
  },
  "TD(207)": {
    "code": 0x57cf,
    "qmkid": "TD(207)",
    "str": "TD(207)",
    "title": "TD(207)"
  },
  "TD(208)": {
    "code": 0x57d0,
    "qmkid": "TD(208)",
    "str": "TD(208)",
    "title": "TD(208)"
  },
  "TD(209)": {
    "code": 0x57d1,
    "qmkid": "TD(209)",
    "str": "TD(209)",
    "title": "TD(209)"
  },
  "TD(210)": {
    "code": 0x57d2,
    "qmkid": "TD(210)",
    "str": "TD(210)",
    "title": "TD(210)"
  },
  "TD(211)": {
    "code": 0x57d3,
    "qmkid": "TD(211)",
    "str": "TD(211)",
    "title": "TD(211)"
  },
  "TD(212)": {
    "code": 0x57d4,
    "qmkid": "TD(212)",
    "str": "TD(212)",
    "title": "TD(212)"
  },
  "TD(213)": {
    "code": 0x57d5,
    "qmkid": "TD(213)",
    "str": "TD(213)",
    "title": "TD(213)"
  },
  "TD(214)": {
    "code": 0x57d6,
    "qmkid": "TD(214)",
    "str": "TD(214)",
    "title": "TD(214)"
  },
  "TD(215)": {
    "code": 0x57d7,
    "qmkid": "TD(215)",
    "str": "TD(215)",
    "title": "TD(215)"
  },
  "TD(216)": {
    "code": 0x57d8,
    "qmkid": "TD(216)",
    "str": "TD(216)",
    "title": "TD(216)"
  },
  "TD(217)": {
    "code": 0x57d9,
    "qmkid": "TD(217)",
    "str": "TD(217)",
    "title": "TD(217)"
  },
  "TD(218)": {
    "code": 0x57da,
    "qmkid": "TD(218)",
    "str": "TD(218)",
    "title": "TD(218)"
  },
  "TD(219)": {
    "code": 0x57db,
    "qmkid": "TD(219)",
    "str": "TD(219)",
    "title": "TD(219)"
  },
  "TD(220)": {
    "code": 0x57dc,
    "qmkid": "TD(220)",
    "str": "TD(220)",
    "title": "TD(220)"
  },
  "TD(221)": {
    "code": 0x57dd,
    "qmkid": "TD(221)",
    "str": "TD(221)",
    "title": "TD(221)"
  },
  "TD(222)": {
    "code": 0x57de,
    "qmkid": "TD(222)",
    "str": "TD(222)",
    "title": "TD(222)"
  },
  "TD(223)": {
    "code": 0x57df,
    "qmkid": "TD(223)",
    "str": "TD(223)",
    "title": "TD(223)"
  },
  "TD(224)": {
    "code": 0x57e0,
    "qmkid": "TD(224)",
    "str": "TD(224)",
    "title": "TD(224)"
  },
  "TD(225)": {
    "code": 0x57e1,
    "qmkid": "TD(225)",
    "str": "TD(225)",
    "title": "TD(225)"
  },
  "TD(226)": {
    "code": 0x57e2,
    "qmkid": "TD(226)",
    "str": "TD(226)",
    "title": "TD(226)"
  },
  "TD(227)": {
    "code": 0x57e3,
    "qmkid": "TD(227)",
    "str": "TD(227)",
    "title": "TD(227)"
  },
  "TD(228)": {
    "code": 0x57e4,
    "qmkid": "TD(228)",
    "str": "TD(228)",
    "title": "TD(228)"
  },
  "TD(229)": {
    "code": 0x57e5,
    "qmkid": "TD(229)",
    "str": "TD(229)",
    "title": "TD(229)"
  },
  "TD(230)": {
    "code": 0x57e6,
    "qmkid": "TD(230)",
    "str": "TD(230)",
    "title": "TD(230)"
  },
  "TD(231)": {
    "code": 0x57e7,
    "qmkid": "TD(231)",
    "str": "TD(231)",
    "title": "TD(231)"
  },
  "TD(232)": {
    "code": 0x57e8,
    "qmkid": "TD(232)",
    "str": "TD(232)",
    "title": "TD(232)"
  },
  "TD(233)": {
    "code": 0x57e9,
    "qmkid": "TD(233)",
    "str": "TD(233)",
    "title": "TD(233)"
  },
  "TD(234)": {
    "code": 0x57ea,
    "qmkid": "TD(234)",
    "str": "TD(234)",
    "title": "TD(234)"
  },
  "TD(235)": {
    "code": 0x57eb,
    "qmkid": "TD(235)",
    "str": "TD(235)",
    "title": "TD(235)"
  },
  "TD(236)": {
    "code": 0x57ec,
    "qmkid": "TD(236)",
    "str": "TD(236)",
    "title": "TD(236)"
  },
  "TD(237)": {
    "code": 0x57ed,
    "qmkid": "TD(237)",
    "str": "TD(237)",
    "title": "TD(237)"
  },
  "TD(238)": {
    "code": 0x57ee,
    "qmkid": "TD(238)",
    "str": "TD(238)",
    "title": "TD(238)"
  },
  "TD(239)": {
    "code": 0x57ef,
    "qmkid": "TD(239)",
    "str": "TD(239)",
    "title": "TD(239)"
  },
  "TD(240)": {
    "code": 0x57f0,
    "qmkid": "TD(240)",
    "str": "TD(240)",
    "title": "TD(240)"
  },
  "TD(241)": {
    "code": 0x57f1,
    "qmkid": "TD(241)",
    "str": "TD(241)",
    "title": "TD(241)"
  },
  "TD(242)": {
    "code": 0x57f2,
    "qmkid": "TD(242)",
    "str": "TD(242)",
    "title": "TD(242)"
  },
  "TD(243)": {
    "code": 0x57f3,
    "qmkid": "TD(243)",
    "str": "TD(243)",
    "title": "TD(243)"
  },
  "TD(244)": {
    "code": 0x57f4,
    "qmkid": "TD(244)",
    "str": "TD(244)",
    "title": "TD(244)"
  },
  "TD(245)": {
    "code": 0x57f5,
    "qmkid": "TD(245)",
    "str": "TD(245)",
    "title": "TD(245)"
  },
  "TD(246)": {
    "code": 0x57f6,
    "qmkid": "TD(246)",
    "str": "TD(246)",
    "title": "TD(246)"
  },
  "TD(247)": {
    "code": 0x57f7,
    "qmkid": "TD(247)",
    "str": "TD(247)",
    "title": "TD(247)"
  },
  "TD(248)": {
    "code": 0x57f8,
    "qmkid": "TD(248)",
    "str": "TD(248)",
    "title": "TD(248)"
  },
  "TD(249)": {
    "code": 0x57f9,
    "qmkid": "TD(249)",
    "str": "TD(249)",
    "title": "TD(249)"
  },
  "TD(250)": {
    "code": 0x57fa,
    "qmkid": "TD(250)",
    "str": "TD(250)",
    "title": "TD(250)"
  },
  "TD(251)": {
    "code": 0x57fb,
    "qmkid": "TD(251)",
    "str": "TD(251)",
    "title": "TD(251)"
  },
  "TD(252)": {
    "code": 0x57fc,
    "qmkid": "TD(252)",
    "str": "TD(252)",
    "title": "TD(252)"
  },
  "TD(253)": {
    "code": 0x57fd,
    "qmkid": "TD(253)",
    "str": "TD(253)",
    "title": "TD(253)"
  },
  "TD(254)": {
    "code": 0x57fe,
    "qmkid": "TD(254)",
    "str": "TD(254)",
    "title": "TD(254)"
  },
  "TD(255)": {
    "code": 0x57ff,
    "qmkid": "TD(255)",
    "str": "TD(255)",
    "title": "TD(255)"
  },
  "MAGIC_SWAP_CONTROL_CAPSLOCK": {
    "code": 0x7000,
    "qmkid": "MAGIC_SWAP_CONTROL_CAPSLOCK",
    "str": "Swap\nCtrl\nCaps",
    "title": "Swap Caps Lock and Left Control"
  },
  "MAGIC_UNSWAP_CONTROL_CAPSLOCK": {
    "code": 0x7001,
    "qmkid": "MAGIC_UNSWAP_CONTROL_CAPSLOCK",
    "str": "Unswap\nCtrl\nCaps",
    "title": "Unswap Caps Lock and Left Control"
  },
  "QK_MAGIC_TOGGLE_CONTROL_CAPS_LOCK": {
    "code": 0x7002,
    "qmkid": "QK_MAGIC_TOGGLE_CONTROL_CAPS_LOCK",
    "str": "QK_MAGIC_TOGGLE_CONTROL_CAPS_LOCK",
    "title": "QK_MAGIC_TOGGLE_CONTROL_CAPS_LOCK"
  },
  "MAGIC_UNCAPSLOCK_TO_CONTROL": {
    "code": 0x7003,
    "qmkid": "MAGIC_UNCAPSLOCK_TO_CONTROL",
    "str": "Caps\nnot to\nCtrl",
    "title": "Stop treating Caps Lock as Control"
  },
  "MAGIC_CAPSLOCK_TO_CONTROL": {
    "code": 0x7004,
    "qmkid": "MAGIC_CAPSLOCK_TO_CONTROL",
    "str": "Caps\nto\nCtrl",
    "title": "Treat Caps Lock as Control"
  },
  "MAGIC_SWAP_LALT_LGUI": {
    "code": 0x7005,
    "qmkid": "MAGIC_SWAP_LALT_LGUI",
    "str": "Swap\nLAlt\nLGui",
    "title": "Swap Left Alt and GUI"
  },
  "MAGIC_UNSWAP_LALT_LGUI": {
    "code": 0x7006,
    "qmkid": "MAGIC_UNSWAP_LALT_LGUI",
    "str": "Unswap\nLAlt\nLGui",
    "title": "Unswap Left Alt and GUI"
  },
  "MAGIC_SWAP_RALT_RGUI": {
    "code": 0x7007,
    "qmkid": "MAGIC_SWAP_RALT_RGUI",
    "str": "Swap\nRAlt\nRGui",
    "title": "Swap Right Alt and GUI"
  },
  "MAGIC_UNSWAP_RALT_RGUI": {
    "code": 0x7008,
    "qmkid": "MAGIC_UNSWAP_RALT_RGUI",
    "str": "Unswap\nRAlt\nRGui",
    "title": "Unswap Right Alt and GUI"
  },
  "MAGIC_UNNO_GUI": {
    "code": 0x7009,
    "qmkid": "MAGIC_UNNO_GUI",
    "str": "GUI\nOn",
    "title": "Enable the GUI keys"
  },
  "MAGIC_NO_GUI": {
    "code": 0x700a,
    "qmkid": "MAGIC_NO_GUI",
    "str": "GUI\nOff",
    "title": "Disable the GUI keys"
  },
  "QK_MAGIC_TOGGLE_GUI": {
    "code": 0x700b,
    "qmkid": "QK_MAGIC_TOGGLE_GUI",
    "str": "QK_MAGIC_TOGGLE_GUI",
    "title": "QK_MAGIC_TOGGLE_GUI"
  },
  "MAGIC_SWAP_GRAVE_ESC": {
    "code": 0x700c,
    "qmkid": "MAGIC_SWAP_GRAVE_ESC",
    "str": "Swap\n`\nEsc",
    "title": "Swap ` and Escape"
  },
  "MAGIC_UNSWAP_GRAVE_ESC": {
    "code": 0x700d,
    "qmkid": "MAGIC_UNSWAP_GRAVE_ESC",
    "str": "Unswap\n`\nEsc",
    "title": "Unswap ` and Escape"
  },
  "MAGIC_SWAP_BACKSLASH_BACKSPACE": {
    "code": 0x700e,
    "qmkid": "MAGIC_SWAP_BACKSLASH_BACKSPACE",
    "str": "Swap\n\\\nBS",
    "title": "Swap \\ and Backspace"
  },
  "MAGIC_UNSWAP_BACKSLASH_BACKSPACE": {
    "code": 0x700f,
    "qmkid": "MAGIC_UNSWAP_BACKSLASH_BACKSPACE",
    "str": "Unswap\n\\\nBS",
    "title": "Unswap \\ and Backspace"
  },
  "QK_MAGIC_TOGGLE_BACKSLASH_BACKSPACE": {
    "code": 0x7010,
    "qmkid": "QK_MAGIC_TOGGLE_BACKSLASH_BACKSPACE",
    "str": "QK_MAGIC_TOGGLE_BACKSLASH_BACKSPACE",
    "title": "QK_MAGIC_TOGGLE_BACKSLASH_BACKSPACE"
  },
  "MAGIC_HOST_NKRO": {
    "code": 0x7011,
    "qmkid": "MAGIC_HOST_NKRO",
    "str": "NKRO\nOn",
    "title": "Enable N-key rollover"
  },
  "MAGIC_UNHOST_NKRO": {
    "code": 0x7012,
    "qmkid": "MAGIC_UNHOST_NKRO",
    "str": "NKRO\nOff",
    "title": "Disable N-key rollover"
  },
  "MAGIC_TOGGLE_NKRO": {
    "code": 0x7013,
    "qmkid": "MAGIC_TOGGLE_NKRO",
    "str": "NKRO\nToggle",
    "title": "Toggle N-key rollover"
  },
  "MAGIC_SWAP_ALT_GUI": {
    "code": 0x7014,
    "qmkid": "MAGIC_SWAP_ALT_GUI",
    "str": "Swap\nAlt\nGui",
    "title": "Swap Alt and GUI on both sides"
  },
  "MAGIC_UNSWAP_ALT_GUI": {
    "code": 0x7015,
    "qmkid": "MAGIC_UNSWAP_ALT_GUI",
    "str": "Unswap\nAlt\nGui",
    "title": "Unswap Alt and GUI on both sides"
  },
  "MAGIC_TOGGLE_ALT_GUI": {
    "code": 0x7016,
    "qmkid": "MAGIC_TOGGLE_ALT_GUI",
    "str": "Toggle\nAlt\nGui",
    "title": "Toggle Alt and GUI swap on both sides"
  },
  "MAGIC_SWAP_LCTL_LGUI": {
    "code": 0x7017,
    "qmkid": "MAGIC_SWAP_LCTL_LGUI",
    "str": "Swap\nLCtl\nLGui",
    "title": "Swap Left Control and GUI"
  },
  "MAGIC_UNSWAP_LCTL_LGUI": {
    "code": 0x7018,
    "qmkid": "MAGIC_UNSWAP_LCTL_LGUI",
    "str": "Unswap\nLCtl\nLGui",
    "title": "Unswap Left Control and GUI"
  },
  "MAGIC_SWAP_RCTL_RGUI": {
    "code": 0x7019,
    "qmkid": "MAGIC_SWAP_RCTL_RGUI",
    "str": "Swap\nRCtl\nRGui",
    "title": "Swap Right Control and GUI"
  },
  "MAGIC_UNSWAP_RCTL_RGUI": {
    "code": 0x701a,
    "qmkid": "MAGIC_UNSWAP_RCTL_RGUI",
    "str": "Unswap\nRCtl\nRGui",
    "title": "Unswap Right Control and GUI"
  },
  "MAGIC_SWAP_CTL_GUI": {
    "code": 0x701b,
    "qmkid": "MAGIC_SWAP_CTL_GUI",
    "str": "Swap\nCtl\nGui",
    "title": "Swap Control and GUI on both sides"
  },
  "MAGIC_UNSWAP_CTL_GUI": {
    "code": 0x701c,
    "qmkid": "MAGIC_UNSWAP_CTL_GUI",
    "str": "Unswap\nCtl\nGui",
    "title": "Unswap Control and GUI on both sides"
  },
  "MAGIC_TOGGLE_CTL_GUI": {
    "code": 0x701d,
    "qmkid": "MAGIC_TOGGLE_CTL_GUI",
    "str": "Toggle\nCtl\nGui",
    "title": "Toggle Control and GUI swap on both sides"
  },
  "MAGIC_EE_HANDS_LEFT": {
    "code": 0x701e,
    "qmkid": "MAGIC_EE_HANDS_LEFT",
    "str": "EEH\nLeft",
    "title": "Set the master half of a split keyboard as the left hand (for EE_HANDS)"
  },
  "MAGIC_EE_HANDS_RIGHT": {
    "code": 0x701f,
    "qmkid": "MAGIC_EE_HANDS_RIGHT",
    "str": "EEH\nRight",
    "title": "Set the master half of a split keyboard as the right hand (for EE_HANDS)"
  },
  "QK_MAGIC_SWAP_ESCAPE_CAPS_LOCK": {
    "code": 0x7020,
    "qmkid": "QK_MAGIC_SWAP_ESCAPE_CAPS_LOCK",
    "str": "QK_MAGIC_SWAP_ESCAPE_CAPS_LOCK",
    "title": "QK_MAGIC_SWAP_ESCAPE_CAPS_LOCK"
  },
  "QK_MAGIC_UNSWAP_ESCAPE_CAPS_LOCK": {
    "code": 0x7021,
    "qmkid": "QK_MAGIC_UNSWAP_ESCAPE_CAPS_LOCK",
    "str": "QK_MAGIC_UNSWAP_ESCAPE_CAPS_LOCK",
    "title": "QK_MAGIC_UNSWAP_ESCAPE_CAPS_LOCK"
  },
  "QK_MAGIC_TOGGLE_ESCAPE_CAPS_LOCK": {
    "code": 0x7022,
    "qmkid": "QK_MAGIC_TOGGLE_ESCAPE_CAPS_LOCK",
    "str": "QK_MAGIC_TOGGLE_ESCAPE_CAPS_LOCK",
    "title": "QK_MAGIC_TOGGLE_ESCAPE_CAPS_LOCK"
  },
  "QK_MAGIC_MAX": {
    "code": 0x70ff,
    "qmkid": "QK_MAGIC_MAX",
    "str": "QK_MAGIC_MAX",
    "title": "QK_MAGIC_MAX"
  },
  "QK_MIDI": {
    "code": 0x7100,
    "qmkid": "QK_MIDI",
    "str": "QK_MIDI",
    "title": "QK_MIDI"
  },
  "QK_MIDI_OFF": {
    "code": 0x7101,
    "qmkid": "QK_MIDI_OFF",
    "str": "QK_MIDI_OFF",
    "title": "QK_MIDI_OFF"
  },
  "QK_MIDI_TOGGLE": {
    "code": 0x7102,
    "qmkid": "QK_MIDI_TOGGLE",
    "str": "QK_MIDI_TOGGLE",
    "title": "QK_MIDI_TOGGLE"
  },
  "MI_C": {
    "code": 0x7103,
    "qmkid": "MI_C",
    "str": "\u1d39\u1d35\u1d30\u1d35\nC",
    "title": "Midi send note C"
  },
  "MI_Cs": {
    "code": 0x7104,
    "qmkid": "MI_Cs",
    "str": "\u1d39\u1d35\u1d30\u1d35\nC#/D\u1d47",
    "title": "Midi send note C#/D\u1d47"
  },
  "MI_D": {
    "code": 0x7105,
    "qmkid": "MI_D",
    "str": "\u1d39\u1d35\u1d30\u1d35\nD",
    "title": "Midi send note D"
  },
  "MI_Ds": {
    "code": 0x7106,
    "qmkid": "MI_Ds",
    "str": "\u1d39\u1d35\u1d30\u1d35\nD#/E\u1d47",
    "title": "Midi send note D#/E\u1d47"
  },
  "MI_E": {
    "code": 0x7107,
    "qmkid": "MI_E",
    "str": "\u1d39\u1d35\u1d30\u1d35\nE",
    "title": "Midi send note E"
  },
  "MI_F": {
    "code": 0x7108,
    "qmkid": "MI_F",
    "str": "\u1d39\u1d35\u1d30\u1d35\nF",
    "title": "Midi send note F"
  },
  "MI_Fs": {
    "code": 0x7109,
    "qmkid": "MI_Fs",
    "str": "\u1d39\u1d35\u1d30\u1d35\nF#/G\u1d47",
    "title": "Midi send note F#/G\u1d47"
  },
  "MI_G": {
    "code": 0x710a,
    "qmkid": "MI_G",
    "str": "\u1d39\u1d35\u1d30\u1d35\nG",
    "title": "Midi send note G"
  },
  "MI_Gs": {
    "code": 0x710b,
    "qmkid": "MI_Gs",
    "str": "\u1d39\u1d35\u1d30\u1d35\nG#/A\u1d47",
    "title": "Midi send note G#/A\u1d47"
  },
  "MI_A": {
    "code": 0x710c,
    "qmkid": "MI_A",
    "str": "\u1d39\u1d35\u1d30\u1d35\nA",
    "title": "Midi send note A"
  },
  "MI_As": {
    "code": 0x710d,
    "qmkid": "MI_As",
    "str": "\u1d39\u1d35\u1d30\u1d35\nA#/B\u1d47",
    "title": "Midi send note A#/B\u1d47"
  },
  "MI_B": {
    "code": 0x710e,
    "qmkid": "MI_B",
    "str": "\u1d39\u1d35\u1d30\u1d35\nB",
    "title": "Midi send note B"
  },
  "MI_C_1": {
    "code": 0x710f,
    "qmkid": "MI_C_1",
    "str": "\u1d39\u1d35\u1d30\u1d35\nC\u2081",
    "title": "Midi send note C\u2081"
  },
  "MI_Cs_1": {
    "code": 0x7110,
    "qmkid": "MI_Cs_1",
    "str": "\u1d39\u1d35\u1d30\u1d35\nC#\u2081/D\u1d47\u2081",
    "title": "Midi send note C#\u2081/D\u1d47\u2081"
  },
  "MI_D_1": {
    "code": 0x7111,
    "qmkid": "MI_D_1",
    "str": "\u1d39\u1d35\u1d30\u1d35\nD\u2081",
    "title": "Midi send note D\u2081"
  },
  "MI_Ds_1": {
    "code": 0x7112,
    "qmkid": "MI_Ds_1",
    "str": "\u1d39\u1d35\u1d30\u1d35\nD#\u2081/E\u1d47\u2081",
    "title": "Midi send note D#\u2081/E\u1d47\u2081"
  },
  "MI_E_1": {
    "code": 0x7113,
    "qmkid": "MI_E_1",
    "str": "\u1d39\u1d35\u1d30\u1d35\nE\u2081",
    "title": "Midi send note E\u2081"
  },
  "MI_F_1": {
    "code": 0x7114,
    "qmkid": "MI_F_1",
    "str": "\u1d39\u1d35\u1d30\u1d35\nF\u2081",
    "title": "Midi send note F\u2081"
  },
  "MI_Fs_1": {
    "code": 0x7115,
    "qmkid": "MI_Fs_1",
    "str": "\u1d39\u1d35\u1d30\u1d35\nF#\u2081/G\u1d47\u2081",
    "title": "Midi send note F#\u2081/G\u1d47\u2081"
  },
  "MI_G_1": {
    "code": 0x7116,
    "qmkid": "MI_G_1",
    "str": "\u1d39\u1d35\u1d30\u1d35\nG\u2081",
    "title": "Midi send note G\u2081"
  },
  "MI_Gs_1": {
    "code": 0x7117,
    "qmkid": "MI_Gs_1",
    "str": "\u1d39\u1d35\u1d30\u1d35\nG#\u2081/A\u1d47\u2081",
    "title": "Midi send note G#\u2081/A\u1d47\u2081"
  },
  "MI_A_1": {
    "code": 0x7118,
    "qmkid": "MI_A_1",
    "str": "\u1d39\u1d35\u1d30\u1d35\nA\u2081",
    "title": "Midi send note A\u2081"
  },
  "MI_As_1": {
    "code": 0x7119,
    "qmkid": "MI_As_1",
    "str": "\u1d39\u1d35\u1d30\u1d35\nA#\u2081/B\u1d47\u2081",
    "title": "Midi send note A#\u2081/B\u1d47\u2081"
  },
  "MI_B_1": {
    "code": 0x711a,
    "qmkid": "MI_B_1",
    "str": "\u1d39\u1d35\u1d30\u1d35\nB\u2081",
    "title": "Midi send note B\u2081"
  },
  "MI_C_2": {
    "code": 0x711b,
    "qmkid": "MI_C_2",
    "str": "\u1d39\u1d35\u1d30\u1d35\nC\u2082",
    "title": "Midi send note C\u2082"
  },
  "MI_Cs_2": {
    "code": 0x711c,
    "qmkid": "MI_Cs_2",
    "str": "\u1d39\u1d35\u1d30\u1d35\nC#\u2082/D\u1d47\u2082",
    "title": "Midi send note C#\u2082/D\u1d47\u2082"
  },
  "MI_D_2": {
    "code": 0x711d,
    "qmkid": "MI_D_2",
    "str": "\u1d39\u1d35\u1d30\u1d35\nD\u2082",
    "title": "Midi send note D\u2082"
  },
  "MI_Ds_2": {
    "code": 0x711e,
    "qmkid": "MI_Ds_2",
    "str": "\u1d39\u1d35\u1d30\u1d35\nD#\u2082/E\u1d47\u2082",
    "title": "Midi send note D#\u2082/E\u1d47\u2082"
  },
  "MI_E_2": {
    "code": 0x711f,
    "qmkid": "MI_E_2",
    "str": "\u1d39\u1d35\u1d30\u1d35\nE\u2082",
    "title": "Midi send note E\u2082"
  },
  "MI_F_2": {
    "code": 0x7120,
    "qmkid": "MI_F_2",
    "str": "\u1d39\u1d35\u1d30\u1d35\nF\u2082",
    "title": "Midi send note F\u2082"
  },
  "MI_Fs_2": {
    "code": 0x7121,
    "qmkid": "MI_Fs_2",
    "str": "\u1d39\u1d35\u1d30\u1d35\nF#\u2082/G\u1d47\u2082",
    "title": "Midi send note F#\u2082/G\u1d47\u2082"
  },
  "MI_G_2": {
    "code": 0x7122,
    "qmkid": "MI_G_2",
    "str": "\u1d39\u1d35\u1d30\u1d35\nG\u2082",
    "title": "Midi send note G\u2082"
  },
  "MI_Gs_2": {
    "code": 0x7123,
    "qmkid": "MI_Gs_2",
    "str": "\u1d39\u1d35\u1d30\u1d35\nG#\u2082/A\u1d47\u2082",
    "title": "Midi send note G#\u2082/A\u1d47\u2082"
  },
  "MI_A_2": {
    "code": 0x7124,
    "qmkid": "MI_A_2",
    "str": "\u1d39\u1d35\u1d30\u1d35\nA\u2082",
    "title": "Midi send note A\u2082"
  },
  "MI_As_2": {
    "code": 0x7125,
    "qmkid": "MI_As_2",
    "str": "\u1d39\u1d35\u1d30\u1d35\nA#\u2082/B\u1d47\u2082",
    "title": "Midi send note A#\u2082/B\u1d47\u2082"
  },
  "MI_B_2": {
    "code": 0x7126,
    "qmkid": "MI_B_2",
    "str": "\u1d39\u1d35\u1d30\u1d35\nB\u2082",
    "title": "Midi send note B\u2082"
  },
  "MI_C_3": {
    "code": 0x7127,
    "qmkid": "MI_C_3",
    "str": "\u1d39\u1d35\u1d30\u1d35\nC\u2083",
    "title": "Midi send note C\u2083"
  },
  "MI_Cs_3": {
    "code": 0x7128,
    "qmkid": "MI_Cs_3",
    "str": "\u1d39\u1d35\u1d30\u1d35\nC#\u2083/D\u1d47\u2083",
    "title": "Midi send note C#\u2083/D\u1d47\u2083"
  },
  "MI_D_3": {
    "code": 0x7129,
    "qmkid": "MI_D_3",
    "str": "\u1d39\u1d35\u1d30\u1d35\nD\u2083",
    "title": "Midi send note D\u2083"
  },
  "MI_Ds_3": {
    "code": 0x712a,
    "qmkid": "MI_Ds_3",
    "str": "\u1d39\u1d35\u1d30\u1d35\nD#\u2083/E\u1d47\u2083",
    "title": "Midi send note D#\u2083/E\u1d47\u2083"
  },
  "MI_E_3": {
    "code": 0x712b,
    "qmkid": "MI_E_3",
    "str": "\u1d39\u1d35\u1d30\u1d35\nE\u2083",
    "title": "Midi send note E\u2083"
  },
  "MI_F_3": {
    "code": 0x712c,
    "qmkid": "MI_F_3",
    "str": "\u1d39\u1d35\u1d30\u1d35\nF\u2083",
    "title": "Midi send note F\u2083"
  },
  "MI_Fs_3": {
    "code": 0x712d,
    "qmkid": "MI_Fs_3",
    "str": "\u1d39\u1d35\u1d30\u1d35\nF#\u2083/G\u1d47\u2083",
    "title": "Midi send note F#\u2083/G\u1d47\u2083"
  },
  "MI_G_3": {
    "code": 0x712e,
    "qmkid": "MI_G_3",
    "str": "\u1d39\u1d35\u1d30\u1d35\nG\u2083",
    "title": "Midi send note G\u2083"
  },
  "MI_Gs_3": {
    "code": 0x712f,
    "qmkid": "MI_Gs_3",
    "str": "\u1d39\u1d35\u1d30\u1d35\nG#\u2083/A\u1d47\u2083",
    "title": "Midi send note G#\u2083/A\u1d47\u2083"
  },
  "MI_A_3": {
    "code": 0x7130,
    "qmkid": "MI_A_3",
    "str": "\u1d39\u1d35\u1d30\u1d35\nA\u2083",
    "title": "Midi send note A\u2083"
  },
  "MI_As_3": {
    "code": 0x7131,
    "qmkid": "MI_As_3",
    "str": "\u1d39\u1d35\u1d30\u1d35\nA#\u2083/B\u1d47\u2083",
    "title": "Midi send note A#\u2083/B\u1d47\u2083"
  },
  "MI_B_3": {
    "code": 0x7132,
    "qmkid": "MI_B_3",
    "str": "\u1d39\u1d35\u1d30\u1d35\nB\u2083",
    "title": "Midi send note B\u2083"
  },
  "MI_C_4": {
    "code": 0x7133,
    "qmkid": "MI_C_4",
    "str": "\u1d39\u1d35\u1d30\u1d35\nC\u2084",
    "title": "Midi send note C\u2084"
  },
  "MI_Cs_4": {
    "code": 0x7134,
    "qmkid": "MI_Cs_4",
    "str": "\u1d39\u1d35\u1d30\u1d35\nC#\u2084/D\u1d47\u2084",
    "title": "Midi send note C#\u2084/D\u1d47\u2084"
  },
  "MI_D_4": {
    "code": 0x7135,
    "qmkid": "MI_D_4",
    "str": "\u1d39\u1d35\u1d30\u1d35\nD\u2084",
    "title": "Midi send note D\u2084"
  },
  "MI_Ds_4": {
    "code": 0x7136,
    "qmkid": "MI_Ds_4",
    "str": "\u1d39\u1d35\u1d30\u1d35\nD#\u2084/E\u1d47\u2084",
    "title": "Midi send note D#\u2084/E\u1d47\u2084"
  },
  "MI_E_4": {
    "code": 0x7137,
    "qmkid": "MI_E_4",
    "str": "\u1d39\u1d35\u1d30\u1d35\nE\u2084",
    "title": "Midi send note E\u2084"
  },
  "MI_F_4": {
    "code": 0x7138,
    "qmkid": "MI_F_4",
    "str": "\u1d39\u1d35\u1d30\u1d35\nF\u2084",
    "title": "Midi send note F\u2084"
  },
  "MI_Fs_4": {
    "code": 0x7139,
    "qmkid": "MI_Fs_4",
    "str": "\u1d39\u1d35\u1d30\u1d35\nF#\u2084/G\u1d47\u2084",
    "title": "Midi send note F#\u2084/G\u1d47\u2084"
  },
  "MI_G_4": {
    "code": 0x713a,
    "qmkid": "MI_G_4",
    "str": "\u1d39\u1d35\u1d30\u1d35\nG\u2084",
    "title": "Midi send note G\u2084"
  },
  "MI_Gs_4": {
    "code": 0x713b,
    "qmkid": "MI_Gs_4",
    "str": "\u1d39\u1d35\u1d30\u1d35\nG#\u2084/A\u1d47\u2084",
    "title": "Midi send note G#\u2084/A\u1d47\u2084"
  },
  "MI_A_4": {
    "code": 0x713c,
    "qmkid": "MI_A_4",
    "str": "\u1d39\u1d35\u1d30\u1d35\nA\u2084",
    "title": "Midi send note A\u2084"
  },
  "MI_As_4": {
    "code": 0x713d,
    "qmkid": "MI_As_4",
    "str": "\u1d39\u1d35\u1d30\u1d35\nA#\u2084/B\u1d47\u2084",
    "title": "Midi send note A#\u2084/B\u1d47\u2084"
  },
  "MI_B_4": {
    "code": 0x713e,
    "qmkid": "MI_B_4",
    "str": "\u1d39\u1d35\u1d30\u1d35\nB\u2084",
    "title": "Midi send note B\u2084"
  },
  "MI_C_5": {
    "code": 0x713f,
    "qmkid": "MI_C_5",
    "str": "\u1d39\u1d35\u1d30\u1d35\nC\u2085",
    "title": "Midi send note C\u2085"
  },
  "MI_Cs_5": {
    "code": 0x7140,
    "qmkid": "MI_Cs_5",
    "str": "\u1d39\u1d35\u1d30\u1d35\nC#\u2085/D\u1d47\u2085",
    "title": "Midi send note C#\u2085/D\u1d47\u2085"
  },
  "MI_D_5": {
    "code": 0x7141,
    "qmkid": "MI_D_5",
    "str": "\u1d39\u1d35\u1d30\u1d35\nD\u2085",
    "title": "Midi send note D\u2085"
  },
  "MI_Ds_5": {
    "code": 0x7142,
    "qmkid": "MI_Ds_5",
    "str": "\u1d39\u1d35\u1d30\u1d35\nD#\u2085/E\u1d47\u2085",
    "title": "Midi send note D#\u2085/E\u1d47\u2085"
  },
  "MI_E_5": {
    "code": 0x7143,
    "qmkid": "MI_E_5",
    "str": "\u1d39\u1d35\u1d30\u1d35\nE\u2085",
    "title": "Midi send note E\u2085"
  },
  "MI_F_5": {
    "code": 0x7144,
    "qmkid": "MI_F_5",
    "str": "\u1d39\u1d35\u1d30\u1d35\nF\u2085",
    "title": "Midi send note F\u2085"
  },
  "MI_Fs_5": {
    "code": 0x7145,
    "qmkid": "MI_Fs_5",
    "str": "\u1d39\u1d35\u1d30\u1d35\nF#\u2085/G\u1d47\u2085",
    "title": "Midi send note F#\u2085/G\u1d47\u2085"
  },
  "MI_G_5": {
    "code": 0x7146,
    "qmkid": "MI_G_5",
    "str": "\u1d39\u1d35\u1d30\u1d35\nG\u2085",
    "title": "Midi send note G\u2085"
  },
  "MI_Gs_5": {
    "code": 0x7147,
    "qmkid": "MI_Gs_5",
    "str": "\u1d39\u1d35\u1d30\u1d35\nG#\u2085/A\u1d47\u2085",
    "title": "Midi send note G#\u2085/A\u1d47\u2085"
  },
  "MI_A_5": {
    "code": 0x7148,
    "qmkid": "MI_A_5",
    "str": "\u1d39\u1d35\u1d30\u1d35\nA\u2085",
    "title": "Midi send note A\u2085"
  },
  "MI_As_5": {
    "code": 0x7149,
    "qmkid": "MI_As_5",
    "str": "\u1d39\u1d35\u1d30\u1d35\nA#\u2085/B\u1d47\u2085",
    "title": "Midi send note A#\u2085/B\u1d47\u2085"
  },
  "MI_B_5": {
    "code": 0x714a,
    "qmkid": "MI_B_5",
    "str": "\u1d39\u1d35\u1d30\u1d35\nB\u2085",
    "title": "Midi send note B\u2085"
  },
  "MI_OCT_N2": {
    "code": 0x714b,
    "qmkid": "MI_OCT_N2",
    "str": "\u1d39\u1d35\u1d30\u1d35\nOct\u208b\u2082",
    "title": "Midi set octave to -2"
  },
  "MI_OCT_N1": {
    "code": 0x714c,
    "qmkid": "MI_OCT_N1",
    "str": "\u1d39\u1d35\u1d30\u1d35\nOct\u208b\u2081",
    "title": "Midi set octave to -1"
  },
  "MI_OCT_0": {
    "code": 0x714d,
    "qmkid": "MI_OCT_0",
    "str": "\u1d39\u1d35\u1d30\u1d35\nOct\u2080",
    "title": "Midi set octave to 0"
  },
  "MI_OCT_1": {
    "code": 0x714e,
    "qmkid": "MI_OCT_1",
    "str": "\u1d39\u1d35\u1d30\u1d35\nOct\u208a\u2081",
    "title": "Midi set octave to 1"
  },
  "MI_OCT_2": {
    "code": 0x714f,
    "qmkid": "MI_OCT_2",
    "str": "\u1d39\u1d35\u1d30\u1d35\nOct\u208a\u2082",
    "title": "Midi set octave to 2"
  },
  "MI_OCT_3": {
    "code": 0x7150,
    "qmkid": "MI_OCT_3",
    "str": "\u1d39\u1d35\u1d30\u1d35\nOct\u208a\u2083",
    "title": "Midi set octave to 3"
  },
  "MI_OCT_4": {
    "code": 0x7151,
    "qmkid": "MI_OCT_4",
    "str": "\u1d39\u1d35\u1d30\u1d35\nOct\u208a\u2084",
    "title": "Midi set octave to 4"
  },
  "MI_OCT_5": {
    "code": 0x7152,
    "qmkid": "MI_OCT_5",
    "str": "\u1d39\u1d35\u1d30\u1d35\nOct\u208a\u2085",
    "title": "Midi set octave to 5"
  },
  "MI_OCT_6": {
    "code": 0x7153,
    "qmkid": "MI_OCT_6",
    "str": "\u1d39\u1d35\u1d30\u1d35\nOct\u208a\u2086",
    "title": "Midi set octave to 6"
  },
  "MI_OCT_7": {
    "code": 0x7154,
    "qmkid": "MI_OCT_7",
    "str": "\u1d39\u1d35\u1d30\u1d35\nOct\u208a\u2087",
    "title": "Midi set octave to 7"
  },
  "MI_OCTD": {
    "code": 0x7155,
    "qmkid": "MI_OCTD",
    "str": "\u1d39\u1d35\u1d30\u1d35\nOct\u1d30\u1d3a",
    "title": "Midi move down an octave"
  },
  "MI_OCTU": {
    "code": 0x7156,
    "qmkid": "MI_OCTU",
    "str": "\u1d39\u1d35\u1d30\u1d35\nOct\u1d41\u1d3e",
    "title": "Midi move up an octave"
  },
  "MI_TRNS_N6": {
    "code": 0x7157,
    "qmkid": "MI_TRNS_N6",
    "str": "\u1d39\u1d35\u1d30\u1d35\nTrans\u208b\u2086",
    "title": "Midi set transposition to -4 semitones"
  },
  "MI_TRNS_N5": {
    "code": 0x7158,
    "qmkid": "MI_TRNS_N5",
    "str": "\u1d39\u1d35\u1d30\u1d35\nTrans\u208b\u2085",
    "title": "Midi set transposition to -5 semitones"
  },
  "MI_TRNS_N4": {
    "code": 0x7159,
    "qmkid": "MI_TRNS_N4",
    "str": "\u1d39\u1d35\u1d30\u1d35\nTrans\u208b\u2084",
    "title": "Midi set transposition to -4 semitones"
  },
  "MI_TRNS_N3": {
    "code": 0x715a,
    "qmkid": "MI_TRNS_N3",
    "str": "\u1d39\u1d35\u1d30\u1d35\nTrans\u208b\u2083",
    "title": "Midi set transposition to -3 semitones"
  },
  "MI_TRNS_N2": {
    "code": 0x715b,
    "qmkid": "MI_TRNS_N2",
    "str": "\u1d39\u1d35\u1d30\u1d35\nTrans\u208b\u2082",
    "title": "Midi set transposition to -2 semitones"
  },
  "MI_TRNS_N1": {
    "code": 0x715c,
    "qmkid": "MI_TRNS_N1",
    "str": "\u1d39\u1d35\u1d30\u1d35\nTrans\u208b\u2081",
    "title": "Midi set transposition to -1 semitones"
  },
  "MI_TRNS_0": {
    "code": 0x715d,
    "qmkid": "MI_TRNS_0",
    "str": "\u1d39\u1d35\u1d30\u1d35\nTrans\u2080",
    "title": "Midi set no transposition"
  },
  "MI_TRNS_1": {
    "code": 0x715e,
    "qmkid": "MI_TRNS_1",
    "str": "\u1d39\u1d35\u1d30\u1d35\nTrans\u208a\u2081",
    "title": "Midi set transposition to +1 semitones"
  },
  "MI_TRNS_2": {
    "code": 0x715f,
    "qmkid": "MI_TRNS_2",
    "str": "\u1d39\u1d35\u1d30\u1d35\nTrans\u208a\u2082",
    "title": "Midi set transposition to +2 semitones"
  },
  "MI_TRNS_3": {
    "code": 0x7160,
    "qmkid": "MI_TRNS_3",
    "str": "\u1d39\u1d35\u1d30\u1d35\nTrans\u208a\u2083",
    "title": "Midi set transposition to +3 semitones"
  },
  "MI_TRNS_4": {
    "code": 0x7161,
    "qmkid": "MI_TRNS_4",
    "str": "\u1d39\u1d35\u1d30\u1d35\nTrans\u208a\u2084",
    "title": "Midi set transposition to +4 semitones"
  },
  "MI_TRNS_5": {
    "code": 0x7162,
    "qmkid": "MI_TRNS_5",
    "str": "\u1d39\u1d35\u1d30\u1d35\nTrans\u208a\u2085",
    "title": "Midi set transposition to +5 semitones"
  },
  "MI_TRNS_6": {
    "code": 0x7163,
    "qmkid": "MI_TRNS_6",
    "str": "\u1d39\u1d35\u1d30\u1d35\nTrans\u208a\u2086",
    "title": "Midi set transposition to +6 semitones"
  },
  "MI_TRNSD": {
    "code": 0x7164,
    "qmkid": "MI_TRNSD",
    "str": "\u1d39\u1d35\u1d30\u1d35\nTrans\u1d30\u1d3a",
    "title": "Midi decrease transposition"
  },
  "MI_TRNSU": {
    "code": 0x7165,
    "qmkid": "MI_TRNSU",
    "str": "\u1d39\u1d35\u1d30\u1d35\nTrans\u1d41\u1d3e",
    "title": "Midi increase transposition"
  },
  "QK_MIDI_VELOCITY_0": {
    "code": 0x7166,
    "qmkid": "QK_MIDI_VELOCITY_0",
    "str": "QK_MIDI_VELOCITY_0",
    "title": "QK_MIDI_VELOCITY_0"
  },
  "MI_VEL_1": {
    "code": 0x7167,
    "qmkid": "MI_VEL_1",
    "str": "\u1d39\u1d35\u1d30\u1d35\nVel\u2081",
    "title": "Midi set velocity to 0"
  },
  "MI_VEL_2": {
    "code": 0x7168,
    "qmkid": "MI_VEL_2",
    "str": "\u1d39\u1d35\u1d30\u1d35\nVel\u2082",
    "title": "Midi set velocity to 25"
  },
  "MI_VEL_3": {
    "code": 0x7169,
    "qmkid": "MI_VEL_3",
    "str": "\u1d39\u1d35\u1d30\u1d35\nVel\u2083",
    "title": "Midi set velocity to 38"
  },
  "MI_VEL_4": {
    "code": 0x716a,
    "qmkid": "MI_VEL_4",
    "str": "\u1d39\u1d35\u1d30\u1d35\nVel\u2084",
    "title": "Midi set velocity to 51"
  },
  "MI_VEL_5": {
    "code": 0x716b,
    "qmkid": "MI_VEL_5",
    "str": "\u1d39\u1d35\u1d30\u1d35\nVel\u2085",
    "title": "Midi set velocity to 64"
  },
  "MI_VEL_6": {
    "code": 0x716c,
    "qmkid": "MI_VEL_6",
    "str": "\u1d39\u1d35\u1d30\u1d35\nVel\u2086",
    "title": "Midi set velocity to 76"
  },
  "MI_VEL_7": {
    "code": 0x716d,
    "qmkid": "MI_VEL_7",
    "str": "\u1d39\u1d35\u1d30\u1d35\nVel\u2087",
    "title": "Midi set velocity to 89"
  },
  "MI_VEL_8": {
    "code": 0x716e,
    "qmkid": "MI_VEL_8",
    "str": "\u1d39\u1d35\u1d30\u1d35\nVel\u2088",
    "title": "Midi set velocity to 102"
  },
  "MI_VEL_9": {
    "code": 0x716f,
    "qmkid": "MI_VEL_9",
    "str": "\u1d39\u1d35\u1d30\u1d35\nVel\u2089",
    "title": "Midi set velocity to 114"
  },
  "MI_VEL_10": {
    "code": 0x7170,
    "qmkid": "MI_VEL_10",
    "str": "\u1d39\u1d35\u1d30\u1d35\nVel\u2081\u2080",
    "title": "Midi set velocity to 127"
  },
  "MI_VELD": {
    "code": 0x7171,
    "qmkid": "MI_VELD",
    "str": "\u1d39\u1d35\u1d30\u1d35\nVel\u1d30\u1d3a",
    "title": "Midi decrease velocity"
  },
  "MI_VELU": {
    "code": 0x7172,
    "qmkid": "MI_VELU",
    "str": "\u1d39\u1d35\u1d30\u1d35\nVel\u1d41\u1d3e",
    "title": "Midi increase velocity"
  },
  "MI_CH1": {
    "code": 0x7173,
    "qmkid": "MI_CH1",
    "str": "\u1d39\u1d35\u1d30\u1d35\nCH\u2081",
    "title": "Midi set channel to 1"
  },
  "MI_CH2": {
    "code": 0x7174,
    "qmkid": "MI_CH2",
    "str": "\u1d39\u1d35\u1d30\u1d35\nCH\u2082",
    "title": "Midi set channel to 2"
  },
  "MI_CH3": {
    "code": 0x7175,
    "qmkid": "MI_CH3",
    "str": "\u1d39\u1d35\u1d30\u1d35\nCH\u2083",
    "title": "Midi set channel to 3"
  },
  "MI_CH4": {
    "code": 0x7176,
    "qmkid": "MI_CH4",
    "str": "\u1d39\u1d35\u1d30\u1d35\nCH\u2084",
    "title": "Midi set channel to 4"
  },
  "MI_CH5": {
    "code": 0x7177,
    "qmkid": "MI_CH5",
    "str": "\u1d39\u1d35\u1d30\u1d35\nCH\u2085",
    "title": "Midi set channel to 5"
  },
  "MI_CH6": {
    "code": 0x7178,
    "qmkid": "MI_CH6",
    "str": "\u1d39\u1d35\u1d30\u1d35\nCH\u2086",
    "title": "Midi set channel to 6"
  },
  "MI_CH7": {
    "code": 0x7179,
    "qmkid": "MI_CH7",
    "str": "\u1d39\u1d35\u1d30\u1d35\nCH\u2087",
    "title": "Midi set channel to 7"
  },
  "MI_CH8": {
    "code": 0x717a,
    "qmkid": "MI_CH8",
    "str": "\u1d39\u1d35\u1d30\u1d35\nCH\u2088",
    "title": "Midi set channel to 8"
  },
  "MI_CH9": {
    "code": 0x717b,
    "qmkid": "MI_CH9",
    "str": "\u1d39\u1d35\u1d30\u1d35\nCH\u2089",
    "title": "Midi set channel to 9"
  },
  "MI_CH10": {
    "code": 0x717c,
    "qmkid": "MI_CH10",
    "str": "\u1d39\u1d35\u1d30\u1d35\nCH\u2081\u2080",
    "title": "Midi set channel to 10"
  },
  "MI_CH11": {
    "code": 0x717d,
    "qmkid": "MI_CH11",
    "str": "\u1d39\u1d35\u1d30\u1d35\nCH\u2081\u2081",
    "title": "Midi set channel to 11"
  },
  "MI_CH12": {
    "code": 0x717e,
    "qmkid": "MI_CH12",
    "str": "\u1d39\u1d35\u1d30\u1d35\nCH\u2081\u2082",
    "title": "Midi set channel to 12"
  },
  "MI_CH13": {
    "code": 0x717f,
    "qmkid": "MI_CH13",
    "str": "\u1d39\u1d35\u1d30\u1d35\nCH\u2081\u2083",
    "title": "Midi set channel to 13"
  },
  "MI_CH14": {
    "code": 0x7180,
    "qmkid": "MI_CH14",
    "str": "\u1d39\u1d35\u1d30\u1d35\nCH\u2081\u2084",
    "title": "Midi set channel to 14"
  },
  "MI_CH15": {
    "code": 0x7181,
    "qmkid": "MI_CH15",
    "str": "\u1d39\u1d35\u1d30\u1d35\nCH\u2081\u2085",
    "title": "Midi set channel to 15"
  },
  "MI_CH16": {
    "code": 0x7182,
    "qmkid": "MI_CH16",
    "str": "\u1d39\u1d35\u1d30\u1d35\nCH\u2081\u2086",
    "title": "Midi set channel to 16"
  },
  "MI_CHD": {
    "code": 0x7183,
    "qmkid": "MI_CHD",
    "str": "\u1d39\u1d35\u1d30\u1d35\nCH\u1d30\u1d3a",
    "title": "Midi decrease channel"
  },
  "MI_CHU": {
    "code": 0x7184,
    "qmkid": "MI_CHU",
    "str": "\u1d39\u1d35\u1d30\u1d35\nCH\u1d41\u1d3e",
    "title": "Midi increase channel"
  },
  "MI_ALLOFF": {
    "code": 0x7185,
    "qmkid": "MI_ALLOFF",
    "str": "\u1d39\u1d35\u1d30\u1d35\nNotes\u1d52\u1da0\u1da0",
    "title": "Midi send all notes OFF"
  },
  "MI_SUS": {
    "code": 0x7186,
    "qmkid": "MI_SUS",
    "str": "\u1d39\u1d35\u1d30\u1d35\nSust",
    "title": "Midi Sustain"
  },
  "MI_PORT": {
    "code": 0x7187,
    "qmkid": "MI_PORT",
    "str": "\u1d39\u1d35\u1d30\u1d35\nPort",
    "title": "Midi Portmento"
  },
  "MI_SOST": {
    "code": 0x7188,
    "qmkid": "MI_SOST",
    "str": "\u1d39\u1d35\u1d30\u1d35\nSost",
    "title": "Midi Sostenuto"
  },
  "MI_SOFT": {
    "code": 0x7189,
    "qmkid": "MI_SOFT",
    "str": "\u1d39\u1d35\u1d30\u1d35\nSPedal",
    "title": "Midi Soft Pedal"
  },
  "MI_LEG": {
    "code": 0x718a,
    "qmkid": "MI_LEG",
    "str": "\u1d39\u1d35\u1d30\u1d35\nLegat",
    "title": "Midi Legato"
  },
  "MI_MOD": {
    "code": 0x718b,
    "qmkid": "MI_MOD",
    "str": "\u1d39\u1d35\u1d30\u1d35\nModul",
    "title": "Midi Modulation"
  },
  "MI_MODSD": {
    "code": 0x718c,
    "qmkid": "MI_MODSD",
    "str": "\u1d39\u1d35\u1d30\u1d35\nModul\u1d30\u1d3a",
    "title": "Midi decrease modulation speed"
  },
  "MI_MODSU": {
    "code": 0x718d,
    "qmkid": "MI_MODSU",
    "str": "\u1d39\u1d35\u1d30\u1d35\nModul\u1d41\u1d3e",
    "title": "Midi increase modulation speed"
  },
  "MI_BENDD": {
    "code": 0x718e,
    "qmkid": "MI_BENDD",
    "str": "\u1d39\u1d35\u1d30\u1d35\nBend\u1d30\u1d3a",
    "title": "Midi bend pitch down"
  },
  "MI_BENDU": {
    "code": 0x718f,
    "qmkid": "MI_BENDU",
    "str": "\u1d39\u1d35\u1d30\u1d35\nBend\u1d41\u1d3e",
    "title": "Midi bend pitch up"
  },
  "QK_MIDI_MAX": {
    "code": 0x71ff,
    "qmkid": "QK_MIDI_MAX",
    "str": "QK_MIDI_MAX",
    "title": "QK_MIDI_MAX"
  },
  "QK_SEQUENCER": {
    "code": 0x7200,
    "qmkid": "QK_SEQUENCER",
    "str": "QK_SEQUENCER",
    "title": "QK_SEQUENCER"
  },
  "QK_SEQUENCER_OFF": {
    "code": 0x7201,
    "qmkid": "QK_SEQUENCER_OFF",
    "str": "QK_SEQUENCER_OFF",
    "title": "QK_SEQUENCER_OFF"
  },
  "QK_SEQUENCER_TOGGLE": {
    "code": 0x7202,
    "qmkid": "QK_SEQUENCER_TOGGLE",
    "str": "QK_SEQUENCER_TOGGLE",
    "title": "QK_SEQUENCER_TOGGLE"
  },
  "QK_SEQUENCER_TEMPO_DOWN": {
    "code": 0x7203,
    "qmkid": "QK_SEQUENCER_TEMPO_DOWN",
    "str": "QK_SEQUENCER_TEMPO_DOWN",
    "title": "QK_SEQUENCER_TEMPO_DOWN"
  },
  "QK_SEQUENCER_TEMPO_UP": {
    "code": 0x7204,
    "qmkid": "QK_SEQUENCER_TEMPO_UP",
    "str": "QK_SEQUENCER_TEMPO_UP",
    "title": "QK_SEQUENCER_TEMPO_UP"
  },
  "QK_SEQUENCER_RESOLUTION_DOWN": {
    "code": 0x7205,
    "qmkid": "QK_SEQUENCER_RESOLUTION_DOWN",
    "str": "QK_SEQUENCER_RESOLUTION_DOWN",
    "title": "QK_SEQUENCER_RESOLUTION_DOWN"
  },
  "QK_SEQUENCER_RESOLUTION_UP": {
    "code": 0x7206,
    "qmkid": "QK_SEQUENCER_RESOLUTION_UP",
    "str": "QK_SEQUENCER_RESOLUTION_UP",
    "title": "QK_SEQUENCER_RESOLUTION_UP"
  },
  "QK_SEQUENCER_STEPS_ALL": {
    "code": 0x7207,
    "qmkid": "QK_SEQUENCER_STEPS_ALL",
    "str": "QK_SEQUENCER_STEPS_ALL",
    "title": "QK_SEQUENCER_STEPS_ALL"
  },
  "QK_SEQUENCER_STEPS_CLEAR": {
    "code": 0x7208,
    "qmkid": "QK_SEQUENCER_STEPS_CLEAR",
    "str": "QK_SEQUENCER_STEPS_CLEAR",
    "title": "QK_SEQUENCER_STEPS_CLEAR"
  },
  "QK_SEQUENCER_MAX": {
    "code": 0x73ff,
    "qmkid": "QK_SEQUENCER_MAX",
    "str": "QK_SEQUENCER_MAX",
    "title": "QK_SEQUENCER_MAX"
  },
  "QK_JOYSTICK": {
    "code": 0x7400,
    "qmkid": "QK_JOYSTICK",
    "str": "QK_JOYSTICK",
    "title": "QK_JOYSTICK"
  },
  "QK_JOYSTICK_BUTTON_1": {
    "code": 0x7401,
    "qmkid": "QK_JOYSTICK_BUTTON_1",
    "str": "QK_JOYSTICK_BUTTON_1",
    "title": "QK_JOYSTICK_BUTTON_1"
  },
  "QK_JOYSTICK_BUTTON_2": {
    "code": 0x7402,
    "qmkid": "QK_JOYSTICK_BUTTON_2",
    "str": "QK_JOYSTICK_BUTTON_2",
    "title": "QK_JOYSTICK_BUTTON_2"
  },
  "QK_JOYSTICK_BUTTON_3": {
    "code": 0x7403,
    "qmkid": "QK_JOYSTICK_BUTTON_3",
    "str": "QK_JOYSTICK_BUTTON_3",
    "title": "QK_JOYSTICK_BUTTON_3"
  },
  "QK_JOYSTICK_BUTTON_4": {
    "code": 0x7404,
    "qmkid": "QK_JOYSTICK_BUTTON_4",
    "str": "QK_JOYSTICK_BUTTON_4",
    "title": "QK_JOYSTICK_BUTTON_4"
  },
  "QK_JOYSTICK_BUTTON_5": {
    "code": 0x7405,
    "qmkid": "QK_JOYSTICK_BUTTON_5",
    "str": "QK_JOYSTICK_BUTTON_5",
    "title": "QK_JOYSTICK_BUTTON_5"
  },
  "QK_JOYSTICK_BUTTON_6": {
    "code": 0x7406,
    "qmkid": "QK_JOYSTICK_BUTTON_6",
    "str": "QK_JOYSTICK_BUTTON_6",
    "title": "QK_JOYSTICK_BUTTON_6"
  },
  "QK_JOYSTICK_BUTTON_7": {
    "code": 0x7407,
    "qmkid": "QK_JOYSTICK_BUTTON_7",
    "str": "QK_JOYSTICK_BUTTON_7",
    "title": "QK_JOYSTICK_BUTTON_7"
  },
  "QK_JOYSTICK_BUTTON_8": {
    "code": 0x7408,
    "qmkid": "QK_JOYSTICK_BUTTON_8",
    "str": "QK_JOYSTICK_BUTTON_8",
    "title": "QK_JOYSTICK_BUTTON_8"
  },
  "QK_JOYSTICK_BUTTON_9": {
    "code": 0x7409,
    "qmkid": "QK_JOYSTICK_BUTTON_9",
    "str": "QK_JOYSTICK_BUTTON_9",
    "title": "QK_JOYSTICK_BUTTON_9"
  },
  "QK_JOYSTICK_BUTTON_10": {
    "code": 0x740a,
    "qmkid": "QK_JOYSTICK_BUTTON_10",
    "str": "QK_JOYSTICK_BUTTON_10",
    "title": "QK_JOYSTICK_BUTTON_10"
  },
  "QK_JOYSTICK_BUTTON_11": {
    "code": 0x740b,
    "qmkid": "QK_JOYSTICK_BUTTON_11",
    "str": "QK_JOYSTICK_BUTTON_11",
    "title": "QK_JOYSTICK_BUTTON_11"
  },
  "QK_JOYSTICK_BUTTON_12": {
    "code": 0x740c,
    "qmkid": "QK_JOYSTICK_BUTTON_12",
    "str": "QK_JOYSTICK_BUTTON_12",
    "title": "QK_JOYSTICK_BUTTON_12"
  },
  "QK_JOYSTICK_BUTTON_13": {
    "code": 0x740d,
    "qmkid": "QK_JOYSTICK_BUTTON_13",
    "str": "QK_JOYSTICK_BUTTON_13",
    "title": "QK_JOYSTICK_BUTTON_13"
  },
  "QK_JOYSTICK_BUTTON_14": {
    "code": 0x740e,
    "qmkid": "QK_JOYSTICK_BUTTON_14",
    "str": "QK_JOYSTICK_BUTTON_14",
    "title": "QK_JOYSTICK_BUTTON_14"
  },
  "QK_JOYSTICK_BUTTON_15": {
    "code": 0x740f,
    "qmkid": "QK_JOYSTICK_BUTTON_15",
    "str": "QK_JOYSTICK_BUTTON_15",
    "title": "QK_JOYSTICK_BUTTON_15"
  },
  "QK_JOYSTICK_BUTTON_16": {
    "code": 0x7410,
    "qmkid": "QK_JOYSTICK_BUTTON_16",
    "str": "QK_JOYSTICK_BUTTON_16",
    "title": "QK_JOYSTICK_BUTTON_16"
  },
  "QK_JOYSTICK_BUTTON_17": {
    "code": 0x7411,
    "qmkid": "QK_JOYSTICK_BUTTON_17",
    "str": "QK_JOYSTICK_BUTTON_17",
    "title": "QK_JOYSTICK_BUTTON_17"
  },
  "QK_JOYSTICK_BUTTON_18": {
    "code": 0x7412,
    "qmkid": "QK_JOYSTICK_BUTTON_18",
    "str": "QK_JOYSTICK_BUTTON_18",
    "title": "QK_JOYSTICK_BUTTON_18"
  },
  "QK_JOYSTICK_BUTTON_19": {
    "code": 0x7413,
    "qmkid": "QK_JOYSTICK_BUTTON_19",
    "str": "QK_JOYSTICK_BUTTON_19",
    "title": "QK_JOYSTICK_BUTTON_19"
  },
  "QK_JOYSTICK_BUTTON_20": {
    "code": 0x7414,
    "qmkid": "QK_JOYSTICK_BUTTON_20",
    "str": "QK_JOYSTICK_BUTTON_20",
    "title": "QK_JOYSTICK_BUTTON_20"
  },
  "QK_JOYSTICK_BUTTON_21": {
    "code": 0x7415,
    "qmkid": "QK_JOYSTICK_BUTTON_21",
    "str": "QK_JOYSTICK_BUTTON_21",
    "title": "QK_JOYSTICK_BUTTON_21"
  },
  "QK_JOYSTICK_BUTTON_22": {
    "code": 0x7416,
    "qmkid": "QK_JOYSTICK_BUTTON_22",
    "str": "QK_JOYSTICK_BUTTON_22",
    "title": "QK_JOYSTICK_BUTTON_22"
  },
  "QK_JOYSTICK_BUTTON_23": {
    "code": 0x7417,
    "qmkid": "QK_JOYSTICK_BUTTON_23",
    "str": "QK_JOYSTICK_BUTTON_23",
    "title": "QK_JOYSTICK_BUTTON_23"
  },
  "QK_JOYSTICK_BUTTON_24": {
    "code": 0x7418,
    "qmkid": "QK_JOYSTICK_BUTTON_24",
    "str": "QK_JOYSTICK_BUTTON_24",
    "title": "QK_JOYSTICK_BUTTON_24"
  },
  "QK_JOYSTICK_BUTTON_25": {
    "code": 0x7419,
    "qmkid": "QK_JOYSTICK_BUTTON_25",
    "str": "QK_JOYSTICK_BUTTON_25",
    "title": "QK_JOYSTICK_BUTTON_25"
  },
  "QK_JOYSTICK_BUTTON_26": {
    "code": 0x741a,
    "qmkid": "QK_JOYSTICK_BUTTON_26",
    "str": "QK_JOYSTICK_BUTTON_26",
    "title": "QK_JOYSTICK_BUTTON_26"
  },
  "QK_JOYSTICK_BUTTON_27": {
    "code": 0x741b,
    "qmkid": "QK_JOYSTICK_BUTTON_27",
    "str": "QK_JOYSTICK_BUTTON_27",
    "title": "QK_JOYSTICK_BUTTON_27"
  },
  "QK_JOYSTICK_BUTTON_28": {
    "code": 0x741c,
    "qmkid": "QK_JOYSTICK_BUTTON_28",
    "str": "QK_JOYSTICK_BUTTON_28",
    "title": "QK_JOYSTICK_BUTTON_28"
  },
  "QK_JOYSTICK_BUTTON_29": {
    "code": 0x741d,
    "qmkid": "QK_JOYSTICK_BUTTON_29",
    "str": "QK_JOYSTICK_BUTTON_29",
    "title": "QK_JOYSTICK_BUTTON_29"
  },
  "QK_JOYSTICK_BUTTON_30": {
    "code": 0x741e,
    "qmkid": "QK_JOYSTICK_BUTTON_30",
    "str": "QK_JOYSTICK_BUTTON_30",
    "title": "QK_JOYSTICK_BUTTON_30"
  },
  "QK_JOYSTICK_BUTTON_31": {
    "code": 0x741f,
    "qmkid": "QK_JOYSTICK_BUTTON_31",
    "str": "QK_JOYSTICK_BUTTON_31",
    "title": "QK_JOYSTICK_BUTTON_31"
  },
  "QK_JOYSTICK_MAX": {
    "code": 0x743f,
    "qmkid": "QK_JOYSTICK_MAX",
    "str": "QK_JOYSTICK_MAX",
    "title": "QK_JOYSTICK_MAX"
  },
  "QK_PROGRAMMABLE_BUTTON": {
    "code": 0x7440,
    "qmkid": "QK_PROGRAMMABLE_BUTTON",
    "str": "QK_PROGRAMMABLE_BUTTON",
    "title": "QK_PROGRAMMABLE_BUTTON"
  },
  "QK_PROGRAMMABLE_BUTTON_2": {
    "code": 0x7441,
    "qmkid": "QK_PROGRAMMABLE_BUTTON_2",
    "str": "QK_PROGRAMMABLE_BUTTON_2",
    "title": "QK_PROGRAMMABLE_BUTTON_2"
  },
  "QK_PROGRAMMABLE_BUTTON_3": {
    "code": 0x7442,
    "qmkid": "QK_PROGRAMMABLE_BUTTON_3",
    "str": "QK_PROGRAMMABLE_BUTTON_3",
    "title": "QK_PROGRAMMABLE_BUTTON_3"
  },
  "QK_PROGRAMMABLE_BUTTON_4": {
    "code": 0x7443,
    "qmkid": "QK_PROGRAMMABLE_BUTTON_4",
    "str": "QK_PROGRAMMABLE_BUTTON_4",
    "title": "QK_PROGRAMMABLE_BUTTON_4"
  },
  "QK_PROGRAMMABLE_BUTTON_5": {
    "code": 0x7444,
    "qmkid": "QK_PROGRAMMABLE_BUTTON_5",
    "str": "QK_PROGRAMMABLE_BUTTON_5",
    "title": "QK_PROGRAMMABLE_BUTTON_5"
  },
  "QK_PROGRAMMABLE_BUTTON_6": {
    "code": 0x7445,
    "qmkid": "QK_PROGRAMMABLE_BUTTON_6",
    "str": "QK_PROGRAMMABLE_BUTTON_6",
    "title": "QK_PROGRAMMABLE_BUTTON_6"
  },
  "QK_PROGRAMMABLE_BUTTON_7": {
    "code": 0x7446,
    "qmkid": "QK_PROGRAMMABLE_BUTTON_7",
    "str": "QK_PROGRAMMABLE_BUTTON_7",
    "title": "QK_PROGRAMMABLE_BUTTON_7"
  },
  "QK_PROGRAMMABLE_BUTTON_8": {
    "code": 0x7447,
    "qmkid": "QK_PROGRAMMABLE_BUTTON_8",
    "str": "QK_PROGRAMMABLE_BUTTON_8",
    "title": "QK_PROGRAMMABLE_BUTTON_8"
  },
  "QK_PROGRAMMABLE_BUTTON_9": {
    "code": 0x7448,
    "qmkid": "QK_PROGRAMMABLE_BUTTON_9",
    "str": "QK_PROGRAMMABLE_BUTTON_9",
    "title": "QK_PROGRAMMABLE_BUTTON_9"
  },
  "QK_PROGRAMMABLE_BUTTON_10": {
    "code": 0x7449,
    "qmkid": "QK_PROGRAMMABLE_BUTTON_10",
    "str": "QK_PROGRAMMABLE_BUTTON_10",
    "title": "QK_PROGRAMMABLE_BUTTON_10"
  },
  "QK_PROGRAMMABLE_BUTTON_11": {
    "code": 0x744a,
    "qmkid": "QK_PROGRAMMABLE_BUTTON_11",
    "str": "QK_PROGRAMMABLE_BUTTON_11",
    "title": "QK_PROGRAMMABLE_BUTTON_11"
  },
  "QK_PROGRAMMABLE_BUTTON_12": {
    "code": 0x744b,
    "qmkid": "QK_PROGRAMMABLE_BUTTON_12",
    "str": "QK_PROGRAMMABLE_BUTTON_12",
    "title": "QK_PROGRAMMABLE_BUTTON_12"
  },
  "QK_PROGRAMMABLE_BUTTON_13": {
    "code": 0x744c,
    "qmkid": "QK_PROGRAMMABLE_BUTTON_13",
    "str": "QK_PROGRAMMABLE_BUTTON_13",
    "title": "QK_PROGRAMMABLE_BUTTON_13"
  },
  "QK_PROGRAMMABLE_BUTTON_14": {
    "code": 0x744d,
    "qmkid": "QK_PROGRAMMABLE_BUTTON_14",
    "str": "QK_PROGRAMMABLE_BUTTON_14",
    "title": "QK_PROGRAMMABLE_BUTTON_14"
  },
  "QK_PROGRAMMABLE_BUTTON_15": {
    "code": 0x744e,
    "qmkid": "QK_PROGRAMMABLE_BUTTON_15",
    "str": "QK_PROGRAMMABLE_BUTTON_15",
    "title": "QK_PROGRAMMABLE_BUTTON_15"
  },
  "QK_PROGRAMMABLE_BUTTON_16": {
    "code": 0x744f,
    "qmkid": "QK_PROGRAMMABLE_BUTTON_16",
    "str": "QK_PROGRAMMABLE_BUTTON_16",
    "title": "QK_PROGRAMMABLE_BUTTON_16"
  },
  "QK_PROGRAMMABLE_BUTTON_17": {
    "code": 0x7450,
    "qmkid": "QK_PROGRAMMABLE_BUTTON_17",
    "str": "QK_PROGRAMMABLE_BUTTON_17",
    "title": "QK_PROGRAMMABLE_BUTTON_17"
  },
  "QK_PROGRAMMABLE_BUTTON_18": {
    "code": 0x7451,
    "qmkid": "QK_PROGRAMMABLE_BUTTON_18",
    "str": "QK_PROGRAMMABLE_BUTTON_18",
    "title": "QK_PROGRAMMABLE_BUTTON_18"
  },
  "QK_PROGRAMMABLE_BUTTON_19": {
    "code": 0x7452,
    "qmkid": "QK_PROGRAMMABLE_BUTTON_19",
    "str": "QK_PROGRAMMABLE_BUTTON_19",
    "title": "QK_PROGRAMMABLE_BUTTON_19"
  },
  "QK_PROGRAMMABLE_BUTTON_20": {
    "code": 0x7453,
    "qmkid": "QK_PROGRAMMABLE_BUTTON_20",
    "str": "QK_PROGRAMMABLE_BUTTON_20",
    "title": "QK_PROGRAMMABLE_BUTTON_20"
  },
  "QK_PROGRAMMABLE_BUTTON_21": {
    "code": 0x7454,
    "qmkid": "QK_PROGRAMMABLE_BUTTON_21",
    "str": "QK_PROGRAMMABLE_BUTTON_21",
    "title": "QK_PROGRAMMABLE_BUTTON_21"
  },
  "QK_PROGRAMMABLE_BUTTON_22": {
    "code": 0x7455,
    "qmkid": "QK_PROGRAMMABLE_BUTTON_22",
    "str": "QK_PROGRAMMABLE_BUTTON_22",
    "title": "QK_PROGRAMMABLE_BUTTON_22"
  },
  "QK_PROGRAMMABLE_BUTTON_23": {
    "code": 0x7456,
    "qmkid": "QK_PROGRAMMABLE_BUTTON_23",
    "str": "QK_PROGRAMMABLE_BUTTON_23",
    "title": "QK_PROGRAMMABLE_BUTTON_23"
  },
  "QK_PROGRAMMABLE_BUTTON_24": {
    "code": 0x7457,
    "qmkid": "QK_PROGRAMMABLE_BUTTON_24",
    "str": "QK_PROGRAMMABLE_BUTTON_24",
    "title": "QK_PROGRAMMABLE_BUTTON_24"
  },
  "QK_PROGRAMMABLE_BUTTON_25": {
    "code": 0x7458,
    "qmkid": "QK_PROGRAMMABLE_BUTTON_25",
    "str": "QK_PROGRAMMABLE_BUTTON_25",
    "title": "QK_PROGRAMMABLE_BUTTON_25"
  },
  "QK_PROGRAMMABLE_BUTTON_26": {
    "code": 0x7459,
    "qmkid": "QK_PROGRAMMABLE_BUTTON_26",
    "str": "QK_PROGRAMMABLE_BUTTON_26",
    "title": "QK_PROGRAMMABLE_BUTTON_26"
  },
  "QK_PROGRAMMABLE_BUTTON_27": {
    "code": 0x745a,
    "qmkid": "QK_PROGRAMMABLE_BUTTON_27",
    "str": "QK_PROGRAMMABLE_BUTTON_27",
    "title": "QK_PROGRAMMABLE_BUTTON_27"
  },
  "QK_PROGRAMMABLE_BUTTON_28": {
    "code": 0x745b,
    "qmkid": "QK_PROGRAMMABLE_BUTTON_28",
    "str": "QK_PROGRAMMABLE_BUTTON_28",
    "title": "QK_PROGRAMMABLE_BUTTON_28"
  },
  "QK_PROGRAMMABLE_BUTTON_29": {
    "code": 0x745c,
    "qmkid": "QK_PROGRAMMABLE_BUTTON_29",
    "str": "QK_PROGRAMMABLE_BUTTON_29",
    "title": "QK_PROGRAMMABLE_BUTTON_29"
  },
  "QK_PROGRAMMABLE_BUTTON_30": {
    "code": 0x745d,
    "qmkid": "QK_PROGRAMMABLE_BUTTON_30",
    "str": "QK_PROGRAMMABLE_BUTTON_30",
    "title": "QK_PROGRAMMABLE_BUTTON_30"
  },
  "QK_PROGRAMMABLE_BUTTON_31": {
    "code": 0x745e,
    "qmkid": "QK_PROGRAMMABLE_BUTTON_31",
    "str": "QK_PROGRAMMABLE_BUTTON_31",
    "title": "QK_PROGRAMMABLE_BUTTON_31"
  },
  "QK_PROGRAMMABLE_BUTTON_32": {
    "code": 0x745f,
    "qmkid": "QK_PROGRAMMABLE_BUTTON_32",
    "str": "QK_PROGRAMMABLE_BUTTON_32",
    "title": "QK_PROGRAMMABLE_BUTTON_32"
  },
  "QK_PROGRAMMABLE_BUTTON_MAX": {
    "code": 0x747f,
    "qmkid": "QK_PROGRAMMABLE_BUTTON_MAX",
    "str": "QK_PROGRAMMABLE_BUTTON_MAX",
    "title": "QK_PROGRAMMABLE_BUTTON_MAX"
  },
  "AU_ON": {
    "code": 0x7480,
    "qmkid": "AU_ON",
    "str": "Audio\nON",
    "title": "Audio mode on"
  },
  "AU_OFF": {
    "code": 0x7481,
    "qmkid": "AU_OFF",
    "str": "Audio\nOFF",
    "title": "Audio mode off"
  },
  "AU_TOG": {
    "code": 0x7482,
    "qmkid": "AU_TOG",
    "str": "Audio\nToggle",
    "title": "Toggles Audio mode"
  },
  "CLICKY_TOGGLE": {
    "code": 0x748a,
    "qmkid": "CLICKY_TOGGLE",
    "str": "Clicky\nToggle",
    "title": "Toggles Audio clicky mode"
  },
  "QK_AUDIO_CLICKY_ON": {
    "code": 0x748b,
    "qmkid": "QK_AUDIO_CLICKY_ON",
    "str": "QK_AUDIO_CLICKY_ON",
    "title": "QK_AUDIO_CLICKY_ON"
  },
  "QK_AUDIO_CLICKY_OFF": {
    "code": 0x748c,
    "qmkid": "QK_AUDIO_CLICKY_OFF",
    "str": "QK_AUDIO_CLICKY_OFF",
    "title": "QK_AUDIO_CLICKY_OFF"
  },
  "CLICKY_UP": {
    "code": 0x748d,
    "qmkid": "CLICKY_UP",
    "str": "Clicky\nUp",
    "title": "Increases frequency of the clicks"
  },
  "CLICKY_DOWN": {
    "code": 0x748e,
    "qmkid": "CLICKY_DOWN",
    "str": "Clicky\nDown",
    "title": "Decreases frequency of the clicks"
  },
  "CLICKY_RESET": {
    "code": 0x748f,
    "qmkid": "CLICKY_RESET",
    "str": "Clicky\nReset",
    "title": "Resets frequency to default"
  },
  "MU_ON": {
    "code": 0x7490,
    "qmkid": "MU_ON",
    "str": "Music\nOn",
    "title": "Turns on Music Mode"
  },
  "MU_OFF": {
    "code": 0x7491,
    "qmkid": "MU_OFF",
    "str": "Music\nOff",
    "title": "Turns off Music Mode"
  },
  "MU_TOG": {
    "code": 0x7492,
    "qmkid": "MU_TOG",
    "str": "Music\nToggle",
    "title": "Toggles Music Mode"
  },
  "MU_MOD": {
    "code": 0x7493,
    "qmkid": "MU_MOD",
    "str": "Music\nCycle",
    "title": "Cycles through the music modes"
  },
  "QK_AUDIO_VOICE_NEXT": {
    "code": 0x7494,
    "qmkid": "QK_AUDIO_VOICE_NEXT",
    "str": "QK_AUDIO_VOICE_NEXT",
    "title": "QK_AUDIO_VOICE_NEXT"
  },
  "QK_AUDIO_VOICE_PREVIOUS": {
    "code": 0x7495,
    "qmkid": "QK_AUDIO_VOICE_PREVIOUS",
    "str": "QK_AUDIO_VOICE_PREVIOUS",
    "title": "QK_AUDIO_VOICE_PREVIOUS"
  },
  "QK_AUDIO_MAX": {
    "code": 0x74bf,
    "qmkid": "QK_AUDIO_MAX",
    "str": "QK_AUDIO_MAX",
    "title": "QK_AUDIO_MAX"
  },
  "QK_STENO": {
    "code": 0x74c0,
    "qmkid": "QK_STENO",
    "str": "QK_STENO",
    "title": "QK_STENO"
  },
  "STN_NUM": {
    "code": 0x74c1,
    "qmkid": "STN_NUM",
    "str": "STN_NUM",
    "title": "STN_NUM"
  },
  "STN_N2": {
    "code": 0x74c2,
    "qmkid": "STN_N2",
    "str": "STN_N2",
    "title": "STN_N2"
  },
  "STN_N3": {
    "code": 0x74c3,
    "qmkid": "STN_N3",
    "str": "STN_N3",
    "title": "STN_N3"
  },
  "STN_N4": {
    "code": 0x74c4,
    "qmkid": "STN_N4",
    "str": "STN_N4",
    "title": "STN_N4"
  },
  "STN_N5": {
    "code": 0x74c5,
    "qmkid": "STN_N5",
    "str": "STN_N5",
    "title": "STN_N5"
  },
  "STN_N6": {
    "code": 0x74c6,
    "qmkid": "STN_N6",
    "str": "STN_N6",
    "title": "STN_N6"
  },
  "STN_SL": {
    "code": 0x74c7,
    "qmkid": "STN_SL",
    "str": "STN_SL",
    "title": "STN_SL"
  },
  "STN_S2": {
    "code": 0x74c8,
    "qmkid": "STN_S2",
    "str": "STN_S2",
    "title": "STN_S2"
  },
  "STN_TL": {
    "code": 0x74c9,
    "qmkid": "STN_TL",
    "str": "STN_TL",
    "title": "STN_TL"
  },
  "STN_KL": {
    "code": 0x74ca,
    "qmkid": "STN_KL",
    "str": "STN_KL",
    "title": "STN_KL"
  },
  "STN_PL": {
    "code": 0x74cb,
    "qmkid": "STN_PL",
    "str": "STN_PL",
    "title": "STN_PL"
  },
  "STN_WL": {
    "code": 0x74cc,
    "qmkid": "STN_WL",
    "str": "STN_WL",
    "title": "STN_WL"
  },
  "STN_HL": {
    "code": 0x74cd,
    "qmkid": "STN_HL",
    "str": "STN_HL",
    "title": "STN_HL"
  },
  "STN_RL": {
    "code": 0x74ce,
    "qmkid": "STN_RL",
    "str": "STN_RL",
    "title": "STN_RL"
  },
  "STN_A": {
    "code": 0x74cf,
    "qmkid": "STN_A",
    "str": "STN_A",
    "title": "STN_A"
  },
  "STN_O": {
    "code": 0x74d0,
    "qmkid": "STN_O",
    "str": "STN_O",
    "title": "STN_O"
  },
  "STN_STR": {
    "code": 0x74d1,
    "qmkid": "STN_STR",
    "str": "STN_STR",
    "title": "STN_STR"
  },
  "STN_ST2": {
    "code": 0x74d2,
    "qmkid": "STN_ST2",
    "str": "STN_ST2",
    "title": "STN_ST2"
  },
  "STN_RES1": {
    "code": 0x74d3,
    "qmkid": "STN_RES1",
    "str": "STN_RES1",
    "title": "STN_RES1"
  },
  "STN_RES2": {
    "code": 0x74d4,
    "qmkid": "STN_RES2",
    "str": "STN_RES2",
    "title": "STN_RES2"
  },
  "STN_PWR": {
    "code": 0x74d5,
    "qmkid": "STN_PWR",
    "str": "STN_PWR",
    "title": "STN_PWR"
  },
  "STN_ST3": {
    "code": 0x74d6,
    "qmkid": "STN_ST3",
    "str": "STN_ST3",
    "title": "STN_ST3"
  },
  "STN_ST4": {
    "code": 0x74d7,
    "qmkid": "STN_ST4",
    "str": "STN_ST4",
    "title": "STN_ST4"
  },
  "STN_E": {
    "code": 0x74d8,
    "qmkid": "STN_E",
    "str": "STN_E",
    "title": "STN_E"
  },
  "STN_U": {
    "code": 0x74d9,
    "qmkid": "STN_U",
    "str": "STN_U",
    "title": "STN_U"
  },
  "STN_FR": {
    "code": 0x74da,
    "qmkid": "STN_FR",
    "str": "STN_FR",
    "title": "STN_FR"
  },
  "STN_RR": {
    "code": 0x74db,
    "qmkid": "STN_RR",
    "str": "STN_RR",
    "title": "STN_RR"
  },
  "STN_PR": {
    "code": 0x74dc,
    "qmkid": "STN_PR",
    "str": "STN_PR",
    "title": "STN_PR"
  },
  "STN_BR": {
    "code": 0x74dd,
    "qmkid": "STN_BR",
    "str": "STN_BR",
    "title": "STN_BR"
  },
  "STN_LR": {
    "code": 0x74de,
    "qmkid": "STN_LR",
    "str": "STN_LR",
    "title": "STN_LR"
  },
  "STN_GR": {
    "code": 0x74df,
    "qmkid": "STN_GR",
    "str": "STN_GR",
    "title": "STN_GR"
  },
  "STN_TR": {
    "code": 0x74e0,
    "qmkid": "STN_TR",
    "str": "STN_TR",
    "title": "STN_TR"
  },
  "STN_SR": {
    "code": 0x74e1,
    "qmkid": "STN_SR",
    "str": "STN_SR",
    "title": "STN_SR"
  },
  "STN_DR": {
    "code": 0x74e2,
    "qmkid": "STN_DR",
    "str": "STN_DR",
    "title": "STN_DR"
  },
  "STN_N7": {
    "code": 0x74e3,
    "qmkid": "STN_N7",
    "str": "STN_N7",
    "title": "STN_N7"
  },
  "STN_N8": {
    "code": 0x74e4,
    "qmkid": "STN_N8",
    "str": "STN_N8",
    "title": "STN_N8"
  },
  "STN_N9": {
    "code": 0x74e5,
    "qmkid": "STN_N9",
    "str": "STN_N9",
    "title": "STN_N9"
  },
  "STN_NA": {
    "code": 0x74e6,
    "qmkid": "STN_NA",
    "str": "STN_NA",
    "title": "STN_NA"
  },
  "STN_NB": {
    "code": 0x74e7,
    "qmkid": "STN_NB",
    "str": "STN_NB",
    "title": "STN_NB"
  },
  "STN_NC": {
    "code": 0x74e8,
    "qmkid": "STN_NC",
    "str": "STN_NC",
    "title": "STN_NC"
  },
  "STN_ZR": {
    "code": 0x74e9,
    "qmkid": "STN_ZR",
    "str": "STN_ZR",
    "title": "STN_ZR"
  },
  "QK_STENO_BOLT": {
    "code": 0x74f0,
    "qmkid": "QK_STENO_BOLT",
    "str": "QK_STENO_BOLT",
    "title": "QK_STENO_BOLT"
  },
  "QK_STENO_GEMINI": {
    "code": 0x74f1,
    "qmkid": "QK_STENO_GEMINI",
    "str": "QK_STENO_GEMINI",
    "title": "QK_STENO_GEMINI"
  },
  "QK_STENO_COMB": {
    "code": 0x74f2,
    "qmkid": "QK_STENO_COMB",
    "str": "QK_STENO_COMB",
    "title": "QK_STENO_COMB"
  },
  "QK_STENO_COMB_MAX": {
    "code": 0x74fc,
    "qmkid": "QK_STENO_COMB_MAX",
    "str": "QK_STENO_COMB_MAX",
    "title": "QK_STENO_COMB_MAX"
  },
  "QK_STENO_MAX": {
    "code": 0x74ff,
    "qmkid": "QK_STENO_MAX",
    "str": "QK_STENO_MAX",
    "title": "QK_STENO_MAX"
  },
  "M0": {
    "code": 0x7700,
    "qmkid": "M0",
    "str": "M0",
    "title": "M0"
  },
  "M1": {
    "code": 0x7701,
    "qmkid": "M1",
    "str": "M1",
    "title": "M1"
  },
  "M2": {
    "code": 0x7702,
    "qmkid": "M2",
    "str": "M2",
    "title": "M2"
  },
  "M3": {
    "code": 0x7703,
    "qmkid": "M3",
    "str": "M3",
    "title": "M3"
  },
  "M4": {
    "code": 0x7704,
    "qmkid": "M4",
    "str": "M4",
    "title": "M4"
  },
  "M5": {
    "code": 0x7705,
    "qmkid": "M5",
    "str": "M5",
    "title": "M5"
  },
  "M6": {
    "code": 0x7706,
    "qmkid": "M6",
    "str": "M6",
    "title": "M6"
  },
  "M7": {
    "code": 0x7707,
    "qmkid": "M7",
    "str": "M7",
    "title": "M7"
  },
  "M8": {
    "code": 0x7708,
    "qmkid": "M8",
    "str": "M8",
    "title": "M8"
  },
  "M9": {
    "code": 0x7709,
    "qmkid": "M9",
    "str": "M9",
    "title": "M9"
  },
  "M10": {
    "code": 0x770a,
    "qmkid": "M10",
    "str": "M10",
    "title": "M10"
  },
  "M11": {
    "code": 0x770b,
    "qmkid": "M11",
    "str": "M11",
    "title": "M11"
  },
  "M12": {
    "code": 0x770c,
    "qmkid": "M12",
    "str": "M12",
    "title": "M12"
  },
  "M13": {
    "code": 0x770d,
    "qmkid": "M13",
    "str": "M13",
    "title": "M13"
  },
  "M14": {
    "code": 0x770e,
    "qmkid": "M14",
    "str": "M14",
    "title": "M14"
  },
  "M15": {
    "code": 0x770f,
    "qmkid": "M15",
    "str": "M15",
    "title": "M15"
  },
  "M16": {
    "code": 0x7710,
    "qmkid": "M16",
    "str": "M16",
    "title": "M16"
  },
  "M17": {
    "code": 0x7711,
    "qmkid": "M17",
    "str": "M17",
    "title": "M17"
  },
  "M18": {
    "code": 0x7712,
    "qmkid": "M18",
    "str": "M18",
    "title": "M18"
  },
  "M19": {
    "code": 0x7713,
    "qmkid": "M19",
    "str": "M19",
    "title": "M19"
  },
  "M20": {
    "code": 0x7714,
    "qmkid": "M20",
    "str": "M20",
    "title": "M20"
  },
  "M21": {
    "code": 0x7715,
    "qmkid": "M21",
    "str": "M21",
    "title": "M21"
  },
  "M22": {
    "code": 0x7716,
    "qmkid": "M22",
    "str": "M22",
    "title": "M22"
  },
  "M23": {
    "code": 0x7717,
    "qmkid": "M23",
    "str": "M23",
    "title": "M23"
  },
  "M24": {
    "code": 0x7718,
    "qmkid": "M24",
    "str": "M24",
    "title": "M24"
  },
  "M25": {
    "code": 0x7719,
    "qmkid": "M25",
    "str": "M25",
    "title": "M25"
  },
  "M26": {
    "code": 0x771a,
    "qmkid": "M26",
    "str": "M26",
    "title": "M26"
  },
  "M27": {
    "code": 0x771b,
    "qmkid": "M27",
    "str": "M27",
    "title": "M27"
  },
  "M28": {
    "code": 0x771c,
    "qmkid": "M28",
    "str": "M28",
    "title": "M28"
  },
  "M29": {
    "code": 0x771d,
    "qmkid": "M29",
    "str": "M29",
    "title": "M29"
  },
  "M30": {
    "code": 0x771e,
    "qmkid": "M30",
    "str": "M30",
    "title": "M30"
  },
  "M31": {
    "code": 0x771f,
    "qmkid": "M31",
    "str": "M31",
    "title": "M31"
  },
  "M32": {
    "code": 0x7720,
    "qmkid": "M32",
    "str": "M32",
    "title": "M32"
  },
  "M33": {
    "code": 0x7721,
    "qmkid": "M33",
    "str": "M33",
    "title": "M33"
  },
  "M34": {
    "code": 0x7722,
    "qmkid": "M34",
    "str": "M34",
    "title": "M34"
  },
  "M35": {
    "code": 0x7723,
    "qmkid": "M35",
    "str": "M35",
    "title": "M35"
  },
  "M36": {
    "code": 0x7724,
    "qmkid": "M36",
    "str": "M36",
    "title": "M36"
  },
  "M37": {
    "code": 0x7725,
    "qmkid": "M37",
    "str": "M37",
    "title": "M37"
  },
  "M38": {
    "code": 0x7726,
    "qmkid": "M38",
    "str": "M38",
    "title": "M38"
  },
  "M39": {
    "code": 0x7727,
    "qmkid": "M39",
    "str": "M39",
    "title": "M39"
  },
  "M40": {
    "code": 0x7728,
    "qmkid": "M40",
    "str": "M40",
    "title": "M40"
  },
  "M41": {
    "code": 0x7729,
    "qmkid": "M41",
    "str": "M41",
    "title": "M41"
  },
  "M42": {
    "code": 0x772a,
    "qmkid": "M42",
    "str": "M42",
    "title": "M42"
  },
  "M43": {
    "code": 0x772b,
    "qmkid": "M43",
    "str": "M43",
    "title": "M43"
  },
  "M44": {
    "code": 0x772c,
    "qmkid": "M44",
    "str": "M44",
    "title": "M44"
  },
  "M45": {
    "code": 0x772d,
    "qmkid": "M45",
    "str": "M45",
    "title": "M45"
  },
  "M46": {
    "code": 0x772e,
    "qmkid": "M46",
    "str": "M46",
    "title": "M46"
  },
  "M47": {
    "code": 0x772f,
    "qmkid": "M47",
    "str": "M47",
    "title": "M47"
  },
  "M48": {
    "code": 0x7730,
    "qmkid": "M48",
    "str": "M48",
    "title": "M48"
  },
  "M49": {
    "code": 0x7731,
    "qmkid": "M49",
    "str": "M49",
    "title": "M49"
  },
  "M50": {
    "code": 0x7732,
    "qmkid": "M50",
    "str": "M50",
    "title": "M50"
  },
  "M51": {
    "code": 0x7733,
    "qmkid": "M51",
    "str": "M51",
    "title": "M51"
  },
  "M52": {
    "code": 0x7734,
    "qmkid": "M52",
    "str": "M52",
    "title": "M52"
  },
  "M53": {
    "code": 0x7735,
    "qmkid": "M53",
    "str": "M53",
    "title": "M53"
  },
  "M54": {
    "code": 0x7736,
    "qmkid": "M54",
    "str": "M54",
    "title": "M54"
  },
  "M55": {
    "code": 0x7737,
    "qmkid": "M55",
    "str": "M55",
    "title": "M55"
  },
  "M56": {
    "code": 0x7738,
    "qmkid": "M56",
    "str": "M56",
    "title": "M56"
  },
  "M57": {
    "code": 0x7739,
    "qmkid": "M57",
    "str": "M57",
    "title": "M57"
  },
  "M58": {
    "code": 0x773a,
    "qmkid": "M58",
    "str": "M58",
    "title": "M58"
  },
  "M59": {
    "code": 0x773b,
    "qmkid": "M59",
    "str": "M59",
    "title": "M59"
  },
  "M60": {
    "code": 0x773c,
    "qmkid": "M60",
    "str": "M60",
    "title": "M60"
  },
  "M61": {
    "code": 0x773d,
    "qmkid": "M61",
    "str": "M61",
    "title": "M61"
  },
  "M62": {
    "code": 0x773e,
    "qmkid": "M62",
    "str": "M62",
    "title": "M62"
  },
  "M63": {
    "code": 0x773f,
    "qmkid": "M63",
    "str": "M63",
    "title": "M63"
  },
  "M64": {
    "code": 0x7740,
    "qmkid": "M64",
    "str": "M64",
    "title": "M64"
  },
  "M65": {
    "code": 0x7741,
    "qmkid": "M65",
    "str": "M65",
    "title": "M65"
  },
  "M66": {
    "code": 0x7742,
    "qmkid": "M66",
    "str": "M66",
    "title": "M66"
  },
  "M67": {
    "code": 0x7743,
    "qmkid": "M67",
    "str": "M67",
    "title": "M67"
  },
  "M68": {
    "code": 0x7744,
    "qmkid": "M68",
    "str": "M68",
    "title": "M68"
  },
  "M69": {
    "code": 0x7745,
    "qmkid": "M69",
    "str": "M69",
    "title": "M69"
  },
  "M70": {
    "code": 0x7746,
    "qmkid": "M70",
    "str": "M70",
    "title": "M70"
  },
  "M71": {
    "code": 0x7747,
    "qmkid": "M71",
    "str": "M71",
    "title": "M71"
  },
  "M72": {
    "code": 0x7748,
    "qmkid": "M72",
    "str": "M72",
    "title": "M72"
  },
  "M73": {
    "code": 0x7749,
    "qmkid": "M73",
    "str": "M73",
    "title": "M73"
  },
  "M74": {
    "code": 0x774a,
    "qmkid": "M74",
    "str": "M74",
    "title": "M74"
  },
  "M75": {
    "code": 0x774b,
    "qmkid": "M75",
    "str": "M75",
    "title": "M75"
  },
  "M76": {
    "code": 0x774c,
    "qmkid": "M76",
    "str": "M76",
    "title": "M76"
  },
  "M77": {
    "code": 0x774d,
    "qmkid": "M77",
    "str": "M77",
    "title": "M77"
  },
  "M78": {
    "code": 0x774e,
    "qmkid": "M78",
    "str": "M78",
    "title": "M78"
  },
  "M79": {
    "code": 0x774f,
    "qmkid": "M79",
    "str": "M79",
    "title": "M79"
  },
  "M80": {
    "code": 0x7750,
    "qmkid": "M80",
    "str": "M80",
    "title": "M80"
  },
  "M81": {
    "code": 0x7751,
    "qmkid": "M81",
    "str": "M81",
    "title": "M81"
  },
  "M82": {
    "code": 0x7752,
    "qmkid": "M82",
    "str": "M82",
    "title": "M82"
  },
  "M83": {
    "code": 0x7753,
    "qmkid": "M83",
    "str": "M83",
    "title": "M83"
  },
  "M84": {
    "code": 0x7754,
    "qmkid": "M84",
    "str": "M84",
    "title": "M84"
  },
  "M85": {
    "code": 0x7755,
    "qmkid": "M85",
    "str": "M85",
    "title": "M85"
  },
  "M86": {
    "code": 0x7756,
    "qmkid": "M86",
    "str": "M86",
    "title": "M86"
  },
  "M87": {
    "code": 0x7757,
    "qmkid": "M87",
    "str": "M87",
    "title": "M87"
  },
  "M88": {
    "code": 0x7758,
    "qmkid": "M88",
    "str": "M88",
    "title": "M88"
  },
  "M89": {
    "code": 0x7759,
    "qmkid": "M89",
    "str": "M89",
    "title": "M89"
  },
  "M90": {
    "code": 0x775a,
    "qmkid": "M90",
    "str": "M90",
    "title": "M90"
  },
  "M91": {
    "code": 0x775b,
    "qmkid": "M91",
    "str": "M91",
    "title": "M91"
  },
  "M92": {
    "code": 0x775c,
    "qmkid": "M92",
    "str": "M92",
    "title": "M92"
  },
  "M93": {
    "code": 0x775d,
    "qmkid": "M93",
    "str": "M93",
    "title": "M93"
  },
  "M94": {
    "code": 0x775e,
    "qmkid": "M94",
    "str": "M94",
    "title": "M94"
  },
  "M95": {
    "code": 0x775f,
    "qmkid": "M95",
    "str": "M95",
    "title": "M95"
  },
  "M96": {
    "code": 0x7760,
    "qmkid": "M96",
    "str": "M96",
    "title": "M96"
  },
  "M97": {
    "code": 0x7761,
    "qmkid": "M97",
    "str": "M97",
    "title": "M97"
  },
  "M98": {
    "code": 0x7762,
    "qmkid": "M98",
    "str": "M98",
    "title": "M98"
  },
  "M99": {
    "code": 0x7763,
    "qmkid": "M99",
    "str": "M99",
    "title": "M99"
  },
  "M100": {
    "code": 0x7764,
    "qmkid": "M100",
    "str": "M100",
    "title": "M100"
  },
  "M101": {
    "code": 0x7765,
    "qmkid": "M101",
    "str": "M101",
    "title": "M101"
  },
  "M102": {
    "code": 0x7766,
    "qmkid": "M102",
    "str": "M102",
    "title": "M102"
  },
  "M103": {
    "code": 0x7767,
    "qmkid": "M103",
    "str": "M103",
    "title": "M103"
  },
  "M104": {
    "code": 0x7768,
    "qmkid": "M104",
    "str": "M104",
    "title": "M104"
  },
  "M105": {
    "code": 0x7769,
    "qmkid": "M105",
    "str": "M105",
    "title": "M105"
  },
  "M106": {
    "code": 0x776a,
    "qmkid": "M106",
    "str": "M106",
    "title": "M106"
  },
  "M107": {
    "code": 0x776b,
    "qmkid": "M107",
    "str": "M107",
    "title": "M107"
  },
  "M108": {
    "code": 0x776c,
    "qmkid": "M108",
    "str": "M108",
    "title": "M108"
  },
  "M109": {
    "code": 0x776d,
    "qmkid": "M109",
    "str": "M109",
    "title": "M109"
  },
  "M110": {
    "code": 0x776e,
    "qmkid": "M110",
    "str": "M110",
    "title": "M110"
  },
  "M111": {
    "code": 0x776f,
    "qmkid": "M111",
    "str": "M111",
    "title": "M111"
  },
  "M112": {
    "code": 0x7770,
    "qmkid": "M112",
    "str": "M112",
    "title": "M112"
  },
  "M113": {
    "code": 0x7771,
    "qmkid": "M113",
    "str": "M113",
    "title": "M113"
  },
  "M114": {
    "code": 0x7772,
    "qmkid": "M114",
    "str": "M114",
    "title": "M114"
  },
  "M115": {
    "code": 0x7773,
    "qmkid": "M115",
    "str": "M115",
    "title": "M115"
  },
  "M116": {
    "code": 0x7774,
    "qmkid": "M116",
    "str": "M116",
    "title": "M116"
  },
  "M117": {
    "code": 0x7775,
    "qmkid": "M117",
    "str": "M117",
    "title": "M117"
  },
  "M118": {
    "code": 0x7776,
    "qmkid": "M118",
    "str": "M118",
    "title": "M118"
  },
  "M119": {
    "code": 0x7777,
    "qmkid": "M119",
    "str": "M119",
    "title": "M119"
  },
  "M120": {
    "code": 0x7778,
    "qmkid": "M120",
    "str": "M120",
    "title": "M120"
  },
  "M121": {
    "code": 0x7779,
    "qmkid": "M121",
    "str": "M121",
    "title": "M121"
  },
  "M122": {
    "code": 0x777a,
    "qmkid": "M122",
    "str": "M122",
    "title": "M122"
  },
  "M123": {
    "code": 0x777b,
    "qmkid": "M123",
    "str": "M123",
    "title": "M123"
  },
  "M124": {
    "code": 0x777c,
    "qmkid": "M124",
    "str": "M124",
    "title": "M124"
  },
  "M125": {
    "code": 0x777d,
    "qmkid": "M125",
    "str": "M125",
    "title": "M125"
  },
  "M126": {
    "code": 0x777e,
    "qmkid": "M126",
    "str": "M126",
    "title": "M126"
  },
  "M127": {
    "code": 0x777f,
    "qmkid": "M127",
    "str": "M127",
    "title": "M127"
  },
  "M128": {
    "code": 0x7780,
    "qmkid": "M128",
    "str": "M128",
    "title": "M128"
  },
  "M129": {
    "code": 0x7781,
    "qmkid": "M129",
    "str": "M129",
    "title": "M129"
  },
  "M130": {
    "code": 0x7782,
    "qmkid": "M130",
    "str": "M130",
    "title": "M130"
  },
  "M131": {
    "code": 0x7783,
    "qmkid": "M131",
    "str": "M131",
    "title": "M131"
  },
  "M132": {
    "code": 0x7784,
    "qmkid": "M132",
    "str": "M132",
    "title": "M132"
  },
  "M133": {
    "code": 0x7785,
    "qmkid": "M133",
    "str": "M133",
    "title": "M133"
  },
  "M134": {
    "code": 0x7786,
    "qmkid": "M134",
    "str": "M134",
    "title": "M134"
  },
  "M135": {
    "code": 0x7787,
    "qmkid": "M135",
    "str": "M135",
    "title": "M135"
  },
  "M136": {
    "code": 0x7788,
    "qmkid": "M136",
    "str": "M136",
    "title": "M136"
  },
  "M137": {
    "code": 0x7789,
    "qmkid": "M137",
    "str": "M137",
    "title": "M137"
  },
  "M138": {
    "code": 0x778a,
    "qmkid": "M138",
    "str": "M138",
    "title": "M138"
  },
  "M139": {
    "code": 0x778b,
    "qmkid": "M139",
    "str": "M139",
    "title": "M139"
  },
  "M140": {
    "code": 0x778c,
    "qmkid": "M140",
    "str": "M140",
    "title": "M140"
  },
  "M141": {
    "code": 0x778d,
    "qmkid": "M141",
    "str": "M141",
    "title": "M141"
  },
  "M142": {
    "code": 0x778e,
    "qmkid": "M142",
    "str": "M142",
    "title": "M142"
  },
  "M143": {
    "code": 0x778f,
    "qmkid": "M143",
    "str": "M143",
    "title": "M143"
  },
  "M144": {
    "code": 0x7790,
    "qmkid": "M144",
    "str": "M144",
    "title": "M144"
  },
  "M145": {
    "code": 0x7791,
    "qmkid": "M145",
    "str": "M145",
    "title": "M145"
  },
  "M146": {
    "code": 0x7792,
    "qmkid": "M146",
    "str": "M146",
    "title": "M146"
  },
  "M147": {
    "code": 0x7793,
    "qmkid": "M147",
    "str": "M147",
    "title": "M147"
  },
  "M148": {
    "code": 0x7794,
    "qmkid": "M148",
    "str": "M148",
    "title": "M148"
  },
  "M149": {
    "code": 0x7795,
    "qmkid": "M149",
    "str": "M149",
    "title": "M149"
  },
  "M150": {
    "code": 0x7796,
    "qmkid": "M150",
    "str": "M150",
    "title": "M150"
  },
  "M151": {
    "code": 0x7797,
    "qmkid": "M151",
    "str": "M151",
    "title": "M151"
  },
  "M152": {
    "code": 0x7798,
    "qmkid": "M152",
    "str": "M152",
    "title": "M152"
  },
  "M153": {
    "code": 0x7799,
    "qmkid": "M153",
    "str": "M153",
    "title": "M153"
  },
  "M154": {
    "code": 0x779a,
    "qmkid": "M154",
    "str": "M154",
    "title": "M154"
  },
  "M155": {
    "code": 0x779b,
    "qmkid": "M155",
    "str": "M155",
    "title": "M155"
  },
  "M156": {
    "code": 0x779c,
    "qmkid": "M156",
    "str": "M156",
    "title": "M156"
  },
  "M157": {
    "code": 0x779d,
    "qmkid": "M157",
    "str": "M157",
    "title": "M157"
  },
  "M158": {
    "code": 0x779e,
    "qmkid": "M158",
    "str": "M158",
    "title": "M158"
  },
  "M159": {
    "code": 0x779f,
    "qmkid": "M159",
    "str": "M159",
    "title": "M159"
  },
  "M160": {
    "code": 0x77a0,
    "qmkid": "M160",
    "str": "M160",
    "title": "M160"
  },
  "M161": {
    "code": 0x77a1,
    "qmkid": "M161",
    "str": "M161",
    "title": "M161"
  },
  "M162": {
    "code": 0x77a2,
    "qmkid": "M162",
    "str": "M162",
    "title": "M162"
  },
  "M163": {
    "code": 0x77a3,
    "qmkid": "M163",
    "str": "M163",
    "title": "M163"
  },
  "M164": {
    "code": 0x77a4,
    "qmkid": "M164",
    "str": "M164",
    "title": "M164"
  },
  "M165": {
    "code": 0x77a5,
    "qmkid": "M165",
    "str": "M165",
    "title": "M165"
  },
  "M166": {
    "code": 0x77a6,
    "qmkid": "M166",
    "str": "M166",
    "title": "M166"
  },
  "M167": {
    "code": 0x77a7,
    "qmkid": "M167",
    "str": "M167",
    "title": "M167"
  },
  "M168": {
    "code": 0x77a8,
    "qmkid": "M168",
    "str": "M168",
    "title": "M168"
  },
  "M169": {
    "code": 0x77a9,
    "qmkid": "M169",
    "str": "M169",
    "title": "M169"
  },
  "M170": {
    "code": 0x77aa,
    "qmkid": "M170",
    "str": "M170",
    "title": "M170"
  },
  "M171": {
    "code": 0x77ab,
    "qmkid": "M171",
    "str": "M171",
    "title": "M171"
  },
  "M172": {
    "code": 0x77ac,
    "qmkid": "M172",
    "str": "M172",
    "title": "M172"
  },
  "M173": {
    "code": 0x77ad,
    "qmkid": "M173",
    "str": "M173",
    "title": "M173"
  },
  "M174": {
    "code": 0x77ae,
    "qmkid": "M174",
    "str": "M174",
    "title": "M174"
  },
  "M175": {
    "code": 0x77af,
    "qmkid": "M175",
    "str": "M175",
    "title": "M175"
  },
  "M176": {
    "code": 0x77b0,
    "qmkid": "M176",
    "str": "M176",
    "title": "M176"
  },
  "M177": {
    "code": 0x77b1,
    "qmkid": "M177",
    "str": "M177",
    "title": "M177"
  },
  "M178": {
    "code": 0x77b2,
    "qmkid": "M178",
    "str": "M178",
    "title": "M178"
  },
  "M179": {
    "code": 0x77b3,
    "qmkid": "M179",
    "str": "M179",
    "title": "M179"
  },
  "M180": {
    "code": 0x77b4,
    "qmkid": "M180",
    "str": "M180",
    "title": "M180"
  },
  "M181": {
    "code": 0x77b5,
    "qmkid": "M181",
    "str": "M181",
    "title": "M181"
  },
  "M182": {
    "code": 0x77b6,
    "qmkid": "M182",
    "str": "M182",
    "title": "M182"
  },
  "M183": {
    "code": 0x77b7,
    "qmkid": "M183",
    "str": "M183",
    "title": "M183"
  },
  "M184": {
    "code": 0x77b8,
    "qmkid": "M184",
    "str": "M184",
    "title": "M184"
  },
  "M185": {
    "code": 0x77b9,
    "qmkid": "M185",
    "str": "M185",
    "title": "M185"
  },
  "M186": {
    "code": 0x77ba,
    "qmkid": "M186",
    "str": "M186",
    "title": "M186"
  },
  "M187": {
    "code": 0x77bb,
    "qmkid": "M187",
    "str": "M187",
    "title": "M187"
  },
  "M188": {
    "code": 0x77bc,
    "qmkid": "M188",
    "str": "M188",
    "title": "M188"
  },
  "M189": {
    "code": 0x77bd,
    "qmkid": "M189",
    "str": "M189",
    "title": "M189"
  },
  "M190": {
    "code": 0x77be,
    "qmkid": "M190",
    "str": "M190",
    "title": "M190"
  },
  "M191": {
    "code": 0x77bf,
    "qmkid": "M191",
    "str": "M191",
    "title": "M191"
  },
  "M192": {
    "code": 0x77c0,
    "qmkid": "M192",
    "str": "M192",
    "title": "M192"
  },
  "M193": {
    "code": 0x77c1,
    "qmkid": "M193",
    "str": "M193",
    "title": "M193"
  },
  "M194": {
    "code": 0x77c2,
    "qmkid": "M194",
    "str": "M194",
    "title": "M194"
  },
  "M195": {
    "code": 0x77c3,
    "qmkid": "M195",
    "str": "M195",
    "title": "M195"
  },
  "M196": {
    "code": 0x77c4,
    "qmkid": "M196",
    "str": "M196",
    "title": "M196"
  },
  "M197": {
    "code": 0x77c5,
    "qmkid": "M197",
    "str": "M197",
    "title": "M197"
  },
  "M198": {
    "code": 0x77c6,
    "qmkid": "M198",
    "str": "M198",
    "title": "M198"
  },
  "M199": {
    "code": 0x77c7,
    "qmkid": "M199",
    "str": "M199",
    "title": "M199"
  },
  "M200": {
    "code": 0x77c8,
    "qmkid": "M200",
    "str": "M200",
    "title": "M200"
  },
  "M201": {
    "code": 0x77c9,
    "qmkid": "M201",
    "str": "M201",
    "title": "M201"
  },
  "M202": {
    "code": 0x77ca,
    "qmkid": "M202",
    "str": "M202",
    "title": "M202"
  },
  "M203": {
    "code": 0x77cb,
    "qmkid": "M203",
    "str": "M203",
    "title": "M203"
  },
  "M204": {
    "code": 0x77cc,
    "qmkid": "M204",
    "str": "M204",
    "title": "M204"
  },
  "M205": {
    "code": 0x77cd,
    "qmkid": "M205",
    "str": "M205",
    "title": "M205"
  },
  "M206": {
    "code": 0x77ce,
    "qmkid": "M206",
    "str": "M206",
    "title": "M206"
  },
  "M207": {
    "code": 0x77cf,
    "qmkid": "M207",
    "str": "M207",
    "title": "M207"
  },
  "M208": {
    "code": 0x77d0,
    "qmkid": "M208",
    "str": "M208",
    "title": "M208"
  },
  "M209": {
    "code": 0x77d1,
    "qmkid": "M209",
    "str": "M209",
    "title": "M209"
  },
  "M210": {
    "code": 0x77d2,
    "qmkid": "M210",
    "str": "M210",
    "title": "M210"
  },
  "M211": {
    "code": 0x77d3,
    "qmkid": "M211",
    "str": "M211",
    "title": "M211"
  },
  "M212": {
    "code": 0x77d4,
    "qmkid": "M212",
    "str": "M212",
    "title": "M212"
  },
  "M213": {
    "code": 0x77d5,
    "qmkid": "M213",
    "str": "M213",
    "title": "M213"
  },
  "M214": {
    "code": 0x77d6,
    "qmkid": "M214",
    "str": "M214",
    "title": "M214"
  },
  "M215": {
    "code": 0x77d7,
    "qmkid": "M215",
    "str": "M215",
    "title": "M215"
  },
  "M216": {
    "code": 0x77d8,
    "qmkid": "M216",
    "str": "M216",
    "title": "M216"
  },
  "M217": {
    "code": 0x77d9,
    "qmkid": "M217",
    "str": "M217",
    "title": "M217"
  },
  "M218": {
    "code": 0x77da,
    "qmkid": "M218",
    "str": "M218",
    "title": "M218"
  },
  "M219": {
    "code": 0x77db,
    "qmkid": "M219",
    "str": "M219",
    "title": "M219"
  },
  "M220": {
    "code": 0x77dc,
    "qmkid": "M220",
    "str": "M220",
    "title": "M220"
  },
  "M221": {
    "code": 0x77dd,
    "qmkid": "M221",
    "str": "M221",
    "title": "M221"
  },
  "M222": {
    "code": 0x77de,
    "qmkid": "M222",
    "str": "M222",
    "title": "M222"
  },
  "M223": {
    "code": 0x77df,
    "qmkid": "M223",
    "str": "M223",
    "title": "M223"
  },
  "M224": {
    "code": 0x77e0,
    "qmkid": "M224",
    "str": "M224",
    "title": "M224"
  },
  "M225": {
    "code": 0x77e1,
    "qmkid": "M225",
    "str": "M225",
    "title": "M225"
  },
  "M226": {
    "code": 0x77e2,
    "qmkid": "M226",
    "str": "M226",
    "title": "M226"
  },
  "M227": {
    "code": 0x77e3,
    "qmkid": "M227",
    "str": "M227",
    "title": "M227"
  },
  "M228": {
    "code": 0x77e4,
    "qmkid": "M228",
    "str": "M228",
    "title": "M228"
  },
  "M229": {
    "code": 0x77e5,
    "qmkid": "M229",
    "str": "M229",
    "title": "M229"
  },
  "M230": {
    "code": 0x77e6,
    "qmkid": "M230",
    "str": "M230",
    "title": "M230"
  },
  "M231": {
    "code": 0x77e7,
    "qmkid": "M231",
    "str": "M231",
    "title": "M231"
  },
  "M232": {
    "code": 0x77e8,
    "qmkid": "M232",
    "str": "M232",
    "title": "M232"
  },
  "M233": {
    "code": 0x77e9,
    "qmkid": "M233",
    "str": "M233",
    "title": "M233"
  },
  "M234": {
    "code": 0x77ea,
    "qmkid": "M234",
    "str": "M234",
    "title": "M234"
  },
  "M235": {
    "code": 0x77eb,
    "qmkid": "M235",
    "str": "M235",
    "title": "M235"
  },
  "M236": {
    "code": 0x77ec,
    "qmkid": "M236",
    "str": "M236",
    "title": "M236"
  },
  "M237": {
    "code": 0x77ed,
    "qmkid": "M237",
    "str": "M237",
    "title": "M237"
  },
  "M238": {
    "code": 0x77ee,
    "qmkid": "M238",
    "str": "M238",
    "title": "M238"
  },
  "M239": {
    "code": 0x77ef,
    "qmkid": "M239",
    "str": "M239",
    "title": "M239"
  },
  "M240": {
    "code": 0x77f0,
    "qmkid": "M240",
    "str": "M240",
    "title": "M240"
  },
  "M241": {
    "code": 0x77f1,
    "qmkid": "M241",
    "str": "M241",
    "title": "M241"
  },
  "M242": {
    "code": 0x77f2,
    "qmkid": "M242",
    "str": "M242",
    "title": "M242"
  },
  "M243": {
    "code": 0x77f3,
    "qmkid": "M243",
    "str": "M243",
    "title": "M243"
  },
  "M244": {
    "code": 0x77f4,
    "qmkid": "M244",
    "str": "M244",
    "title": "M244"
  },
  "M245": {
    "code": 0x77f5,
    "qmkid": "M245",
    "str": "M245",
    "title": "M245"
  },
  "M246": {
    "code": 0x77f6,
    "qmkid": "M246",
    "str": "M246",
    "title": "M246"
  },
  "M247": {
    "code": 0x77f7,
    "qmkid": "M247",
    "str": "M247",
    "title": "M247"
  },
  "M248": {
    "code": 0x77f8,
    "qmkid": "M248",
    "str": "M248",
    "title": "M248"
  },
  "M249": {
    "code": 0x77f9,
    "qmkid": "M249",
    "str": "M249",
    "title": "M249"
  },
  "M250": {
    "code": 0x77fa,
    "qmkid": "M250",
    "str": "M250",
    "title": "M250"
  },
  "M251": {
    "code": 0x77fb,
    "qmkid": "M251",
    "str": "M251",
    "title": "M251"
  },
  "M252": {
    "code": 0x77fc,
    "qmkid": "M252",
    "str": "M252",
    "title": "M252"
  },
  "M253": {
    "code": 0x77fd,
    "qmkid": "M253",
    "str": "M253",
    "title": "M253"
  },
  "M254": {
    "code": 0x77fe,
    "qmkid": "M254",
    "str": "M254",
    "title": "M254"
  },
  "M255": {
    "code": 0x77ff,
    "qmkid": "M255",
    "str": "M255",
    "title": "M255"
  },
  "BL_ON": {
    "code": 0x7800,
    "qmkid": "BL_ON",
    "str": "BL On",
    "title": "Set the backlight to max brightness"
  },
  "BL_OFF": {
    "code": 0x7801,
    "qmkid": "BL_OFF",
    "str": "BL Off",
    "title": "Turn the backlight off"
  },
  "BL_TOGG": {
    "code": 0x7802,
    "qmkid": "BL_TOGG",
    "str": "BL\nToggle",
    "title": "Turn the backlight on or off"
  },
  "BL_DEC": {
    "code": 0x7803,
    "qmkid": "BL_DEC",
    "str": "BL - ",
    "title": "Decrease the backlight level"
  },
  "BL_INC": {
    "code": 0x7804,
    "qmkid": "BL_INC",
    "str": "BL +",
    "title": "Increase the backlight level"
  },
  "BL_STEP": {
    "code": 0x7805,
    "qmkid": "BL_STEP",
    "str": "BL\nCycle",
    "title": "Cycle through backlight levels"
  },
  "BL_BRTG": {
    "code": 0x7806,
    "qmkid": "BL_BRTG",
    "str": "BL\nBreath",
    "title": "Toggle backlight breathing"
  },
  "QK_LED_MATRIX_ON": {
    "code": 0x7810,
    "qmkid": "QK_LED_MATRIX_ON",
    "str": "QK_LED_MATRIX_ON",
    "title": "QK_LED_MATRIX_ON"
  },
  "QK_LED_MATRIX_OFF": {
    "code": 0x7811,
    "qmkid": "QK_LED_MATRIX_OFF",
    "str": "QK_LED_MATRIX_OFF",
    "title": "QK_LED_MATRIX_OFF"
  },
  "QK_LED_MATRIX_TOGGLE": {
    "code": 0x7812,
    "qmkid": "QK_LED_MATRIX_TOGGLE",
    "str": "QK_LED_MATRIX_TOGGLE",
    "title": "QK_LED_MATRIX_TOGGLE"
  },
  "QK_LED_MATRIX_MODE_NEXT": {
    "code": 0x7813,
    "qmkid": "QK_LED_MATRIX_MODE_NEXT",
    "str": "QK_LED_MATRIX_MODE_NEXT",
    "title": "QK_LED_MATRIX_MODE_NEXT"
  },
  "QK_LED_MATRIX_MODE_PREVIOUS": {
    "code": 0x7814,
    "qmkid": "QK_LED_MATRIX_MODE_PREVIOUS",
    "str": "QK_LED_MATRIX_MODE_PREVIOUS",
    "title": "QK_LED_MATRIX_MODE_PREVIOUS"
  },
  "QK_LED_MATRIX_BRIGHTNESS_UP": {
    "code": 0x7815,
    "qmkid": "QK_LED_MATRIX_BRIGHTNESS_UP",
    "str": "QK_LED_MATRIX_BRIGHTNESS_UP",
    "title": "QK_LED_MATRIX_BRIGHTNESS_UP"
  },
  "QK_LED_MATRIX_BRIGHTNESS_DOWN": {
    "code": 0x7816,
    "qmkid": "QK_LED_MATRIX_BRIGHTNESS_DOWN",
    "str": "QK_LED_MATRIX_BRIGHTNESS_DOWN",
    "title": "QK_LED_MATRIX_BRIGHTNESS_DOWN"
  },
  "QK_LED_MATRIX_SPEED_UP": {
    "code": 0x7817,
    "qmkid": "QK_LED_MATRIX_SPEED_UP",
    "str": "QK_LED_MATRIX_SPEED_UP",
    "title": "QK_LED_MATRIX_SPEED_UP"
  },
  "QK_LED_MATRIX_SPEED_DOWN": {
    "code": 0x7818,
    "qmkid": "QK_LED_MATRIX_SPEED_DOWN",
    "str": "QK_LED_MATRIX_SPEED_DOWN",
    "title": "QK_LED_MATRIX_SPEED_DOWN"
  },
  "RGB_TOG": {
    "code": 0x7820,
    "qmkid": "RGB_TOG",
    "str": "RGB\nToggle",
    "title": "Toggle RGB lighting on or off"
  },
  "RGB_MOD": {
    "code": 0x7821,
    "qmkid": "RGB_MOD",
    "str": "RGB\nMode +",
    "title": "Next RGB mode"
  },
  "RGB_RMOD": {
    "code": 0x7822,
    "qmkid": "RGB_RMOD",
    "str": "RGB\nMode -",
    "title": "Previous RGB mode"
  },
  "RGB_HUI": {
    "code": 0x7823,
    "qmkid": "RGB_HUI",
    "str": "Hue +",
    "title": "Increase hue"
  },
  "RGB_HUD": {
    "code": 0x7824,
    "qmkid": "RGB_HUD",
    "str": "Hue -",
    "title": "Decrease hue"
  },
  "RGB_SAI": {
    "code": 0x7825,
    "qmkid": "RGB_SAI",
    "str": "Sat +",
    "title": "Increase saturation"
  },
  "RGB_SAD": {
    "code": 0x7826,
    "qmkid": "RGB_SAD",
    "str": "Sat -",
    "title": "Decrease saturation"
  },
  "RGB_VAI": {
    "code": 0x7827,
    "qmkid": "RGB_VAI",
    "str": "Bright +",
    "title": "Increase value"
  },
  "RGB_VAD": {
    "code": 0x7828,
    "qmkid": "RGB_VAD",
    "str": "Bright -",
    "title": "Decrease value"
  },
  "RGB_SPI": {
    "code": 0x7829,
    "qmkid": "RGB_SPI",
    "str": "Effect +",
    "title": "Increase RGB effect speed"
  },
  "RGB_SPD": {
    "code": 0x782a,
    "qmkid": "RGB_SPD",
    "str": "Effect -",
    "title": "Decrease RGB effect speed"
  },
  "RGB_M_P": {
    "code": 0x782b,
    "qmkid": "RGB_M_P",
    "str": "RGB\nMode P",
    "title": "RGB Mode: Plain"
  },
  "RGB_M_B": {
    "code": 0x782c,
    "qmkid": "RGB_M_B",
    "str": "RGB\nMode B",
    "title": "RGB Mode: Breathe"
  },
  "RGB_M_R": {
    "code": 0x782d,
    "qmkid": "RGB_M_R",
    "str": "RGB\nMode R",
    "title": "RGB Mode: Rainbow"
  },
  "RGB_M_SW": {
    "code": 0x782e,
    "qmkid": "RGB_M_SW",
    "str": "RGB\nMode SW",
    "title": "RGB Mode: Swirl"
  },
  "RGB_M_SN": {
    "code": 0x782f,
    "qmkid": "RGB_M_SN",
    "str": "RGB\nMode SN",
    "title": "RGB Mode: Snake"
  },
  "RGB_M_K": {
    "code": 0x7830,
    "qmkid": "RGB_M_K",
    "str": "RGB\nMode K",
    "title": "RGB Mode: Knight Rider"
  },
  "RGB_M_X": {
    "code": 0x7831,
    "qmkid": "RGB_M_X",
    "str": "RGB\nMode X",
    "title": "RGB Mode: Christmas"
  },
  "RGB_M_G": {
    "code": 0x7832,
    "qmkid": "RGB_M_G",
    "str": "RGB\nMode G",
    "title": "RGB Mode: Gradient"
  },
  "RGB_M_T": {
    "code": 0x7833,
    "qmkid": "RGB_M_T",
    "str": "RGB\nMode T",
    "title": "RGB Mode: Test"
  },
  "RGB_MODE_TWINKLE": {
    "code": 0x7834,
    "qmkid": "RGB_MODE_TWINKLE",
    "str": "RGB_MODE_TWINKLE",
    "title": "RGB_MODE_TWINKLE"
  },
  "QK_RGB_MATRIX_ON": {
    "code": 0x7840,
    "qmkid": "QK_RGB_MATRIX_ON",
    "str": "QK_RGB_MATRIX_ON",
    "title": "QK_RGB_MATRIX_ON"
  },
  "QK_RGB_MATRIX_OFF": {
    "code": 0x7841,
    "qmkid": "QK_RGB_MATRIX_OFF",
    "str": "QK_RGB_MATRIX_OFF",
    "title": "QK_RGB_MATRIX_OFF"
  },
  "QK_RGB_MATRIX_TOGGLE": {
    "code": 0x7842,
    "qmkid": "QK_RGB_MATRIX_TOGGLE",
    "str": "QK_RGB_MATRIX_TOGGLE",
    "title": "QK_RGB_MATRIX_TOGGLE"
  },
  "QK_RGB_MATRIX_MODE_NEXT": {
    "code": 0x7843,
    "qmkid": "QK_RGB_MATRIX_MODE_NEXT",
    "str": "QK_RGB_MATRIX_MODE_NEXT",
    "title": "QK_RGB_MATRIX_MODE_NEXT"
  },
  "QK_RGB_MATRIX_MODE_PREVIOUS": {
    "code": 0x7844,
    "qmkid": "QK_RGB_MATRIX_MODE_PREVIOUS",
    "str": "QK_RGB_MATRIX_MODE_PREVIOUS",
    "title": "QK_RGB_MATRIX_MODE_PREVIOUS"
  },
  "QK_RGB_MATRIX_HUE_UP": {
    "code": 0x7845,
    "qmkid": "QK_RGB_MATRIX_HUE_UP",
    "str": "QK_RGB_MATRIX_HUE_UP",
    "title": "QK_RGB_MATRIX_HUE_UP"
  },
  "QK_RGB_MATRIX_HUE_DOWN": {
    "code": 0x7846,
    "qmkid": "QK_RGB_MATRIX_HUE_DOWN",
    "str": "QK_RGB_MATRIX_HUE_DOWN",
    "title": "QK_RGB_MATRIX_HUE_DOWN"
  },
  "QK_RGB_MATRIX_SATURATION_UP": {
    "code": 0x7847,
    "qmkid": "QK_RGB_MATRIX_SATURATION_UP",
    "str": "QK_RGB_MATRIX_SATURATION_UP",
    "title": "QK_RGB_MATRIX_SATURATION_UP"
  },
  "QK_RGB_MATRIX_SATURATION_DOWN": {
    "code": 0x7848,
    "qmkid": "QK_RGB_MATRIX_SATURATION_DOWN",
    "str": "QK_RGB_MATRIX_SATURATION_DOWN",
    "title": "QK_RGB_MATRIX_SATURATION_DOWN"
  },
  "QK_RGB_MATRIX_VALUE_UP": {
    "code": 0x7849,
    "qmkid": "QK_RGB_MATRIX_VALUE_UP",
    "str": "QK_RGB_MATRIX_VALUE_UP",
    "title": "QK_RGB_MATRIX_VALUE_UP"
  },
  "QK_RGB_MATRIX_VALUE_DOWN": {
    "code": 0x784a,
    "qmkid": "QK_RGB_MATRIX_VALUE_DOWN",
    "str": "QK_RGB_MATRIX_VALUE_DOWN",
    "title": "QK_RGB_MATRIX_VALUE_DOWN"
  },
  "QK_RGB_MATRIX_SPEED_UP": {
    "code": 0x784b,
    "qmkid": "QK_RGB_MATRIX_SPEED_UP",
    "str": "QK_RGB_MATRIX_SPEED_UP",
    "title": "QK_RGB_MATRIX_SPEED_UP"
  },
  "QK_RGB_MATRIX_SPEED_DOWN": {
    "code": 0x784c,
    "qmkid": "QK_RGB_MATRIX_SPEED_DOWN",
    "str": "QK_RGB_MATRIX_SPEED_DOWN",
    "title": "QK_RGB_MATRIX_SPEED_DOWN"
  },
  "QK_LIGHTING_MAX": {
    "code": 0x78ff,
    "qmkid": "QK_LIGHTING_MAX",
    "str": "QK_LIGHTING_MAX",
    "title": "QK_LIGHTING_MAX"
  },
  "RESET": {
    "code": 0x7c00,
    "qmkid": "RESET",
    "str": "Reset",
    "title": "Reboot to bootloader"
  },
  "QK_REBOOT": {
    "code": 0x7c01,
    "qmkid": "QK_REBOOT",
    "str": "QK_REBOOT",
    "title": "QK_REBOOT"
  },
  "QK_DEBUG_TOGGLE": {
    "code": 0x7c02,
    "qmkid": "QK_DEBUG_TOGGLE",
    "str": "QK_DEBUG_TOGGLE",
    "title": "QK_DEBUG_TOGGLE"
  },
  "QK_CLEAR_EEPROM": {
    "code": 0x7c03,
    "qmkid": "QK_CLEAR_EEPROM",
    "str": "QK_CLEAR_EEPROM",
    "title": "QK_CLEAR_EEPROM"
  },
  "QK_MAKE": {
    "code": 0x7c04,
    "qmkid": "QK_MAKE",
    "str": "QK_MAKE",
    "title": "QK_MAKE"
  },
  "KC_ASDN": {
    "code": 0x7c10,
    "qmkid": "KC_ASDN",
    "str": "Auto-\nshift\nDown",
    "title": "Lower the Auto Shift timeout variable (down)"
  },
  "KC_ASUP": {
    "code": 0x7c11,
    "qmkid": "KC_ASUP",
    "str": "Auto-\nshift\nUp",
    "title": "Raise the Auto Shift timeout variable (up)"
  },
  "KC_ASRP": {
    "code": 0x7c12,
    "qmkid": "KC_ASRP",
    "str": "Auto-\nshift\nReport",
    "title": "Report your current Auto Shift timeout value"
  },
  "KC_ASON": {
    "code": 0x7c13,
    "qmkid": "KC_ASON",
    "str": "Auto-\nshift\nOn",
    "title": "Turns on the Auto Shift Function"
  },
  "KC_ASOFF": {
    "code": 0x7c14,
    "qmkid": "KC_ASOFF",
    "str": "Auto-\nshift\nOff",
    "title": "Turns off the Auto Shift Function"
  },
  "KC_ASTG": {
    "code": 0x7c15,
    "qmkid": "KC_ASTG",
    "str": "Auto-\nshift\nToggle",
    "title": "Toggles the state of the Auto Shift feature"
  },
  "KC_GESC": {
    "code": 0x7c16,
    "qmkid": "KC_GESC",
    "str": "~\nEsc",
    "title": "Esc normally, but ~ when Shift or GUI is pressed"
  },
  "QK_VELOCIKEY_TOGGLE": {
    "code": 0x7c17,
    "qmkid": "QK_VELOCIKEY_TOGGLE",
    "str": "QK_VELOCIKEY_TOGGLE",
    "title": "QK_VELOCIKEY_TOGGLE"
  },
  "KC_LCPO": {
    "code": 0x7c18,
    "qmkid": "KC_LCPO",
    "str": "LC\n(",
    "title": "Left Control when held, ( when tapped"
  },
  "KC_RCPC": {
    "code": 0x7c19,
    "qmkid": "KC_RCPC",
    "str": "RC\n)",
    "title": "Right Control when held, ) when tapped"
  },
  "KC_LSPO": {
    "code": 0x7c1a,
    "qmkid": "KC_LSPO",
    "str": "LS\n(",
    "title": "Left Shift when held, ( when tapped"
  },
  "KC_RSPC": {
    "code": 0x7c1b,
    "qmkid": "KC_RSPC",
    "str": "RS\n)",
    "title": "Right Shift when held, ) when tapped"
  },
  "KC_LAPO": {
    "code": 0x7c1c,
    "qmkid": "KC_LAPO",
    "str": "LA\n(",
    "title": "Left Alt when held, ( when tapped"
  },
  "KC_RAPC": {
    "code": 0x7c1d,
    "qmkid": "KC_RAPC",
    "str": "RA\n)",
    "title": "Right Alt when held, ) when tapped"
  },
  "KC_SFTENT": {
    "code": 0x7c1e,
    "qmkid": "KC_SFTENT",
    "str": "RS\nEnter",
    "title": "Right Shift when held, Enter when tapped"
  },
  "QK_OUTPUT_AUTO": {
    "code": 0x7c20,
    "qmkid": "QK_OUTPUT_AUTO",
    "str": "QK_OUTPUT_AUTO",
    "title": "QK_OUTPUT_AUTO"
  },
  "QK_OUTPUT_USB": {
    "code": 0x7c21,
    "qmkid": "QK_OUTPUT_USB",
    "str": "QK_OUTPUT_USB",
    "title": "QK_OUTPUT_USB"
  },
  "QK_OUTPUT_BLUETOOTH": {
    "code": 0x7c22,
    "qmkid": "QK_OUTPUT_BLUETOOTH",
    "str": "QK_OUTPUT_BLUETOOTH",
    "title": "QK_OUTPUT_BLUETOOTH"
  },
  "QK_UNICODE_MODE_NEXT": {
    "code": 0x7c30,
    "qmkid": "QK_UNICODE_MODE_NEXT",
    "str": "QK_UNICODE_MODE_NEXT",
    "title": "QK_UNICODE_MODE_NEXT"
  },
  "QK_UNICODE_MODE_PREVIOUS": {
    "code": 0x7c31,
    "qmkid": "QK_UNICODE_MODE_PREVIOUS",
    "str": "QK_UNICODE_MODE_PREVIOUS",
    "title": "QK_UNICODE_MODE_PREVIOUS"
  },
  "QK_UNICODE_MODE_MACOS": {
    "code": 0x7c32,
    "qmkid": "QK_UNICODE_MODE_MACOS",
    "str": "QK_UNICODE_MODE_MACOS",
    "title": "QK_UNICODE_MODE_MACOS"
  },
  "QK_UNICODE_MODE_LINUX": {
    "code": 0x7c33,
    "qmkid": "QK_UNICODE_MODE_LINUX",
    "str": "QK_UNICODE_MODE_LINUX",
    "title": "QK_UNICODE_MODE_LINUX"
  },
  "QK_UNICODE_MODE_WINDOWS": {
    "code": 0x7c34,
    "qmkid": "QK_UNICODE_MODE_WINDOWS",
    "str": "QK_UNICODE_MODE_WINDOWS",
    "title": "QK_UNICODE_MODE_WINDOWS"
  },
  "QK_UNICODE_MODE_BSD": {
    "code": 0x7c35,
    "qmkid": "QK_UNICODE_MODE_BSD",
    "str": "QK_UNICODE_MODE_BSD",
    "title": "QK_UNICODE_MODE_BSD"
  },
  "QK_UNICODE_MODE_WINCOMPOSE": {
    "code": 0x7c36,
    "qmkid": "QK_UNICODE_MODE_WINCOMPOSE",
    "str": "QK_UNICODE_MODE_WINCOMPOSE",
    "title": "QK_UNICODE_MODE_WINCOMPOSE"
  },
  "QK_UNICODE_MODE_EMACS": {
    "code": 0x7c37,
    "qmkid": "QK_UNICODE_MODE_EMACS",
    "str": "QK_UNICODE_MODE_EMACS",
    "title": "QK_UNICODE_MODE_EMACS"
  },
  "HPT_ON": {
    "code": 0x7c40,
    "qmkid": "HPT_ON",
    "str": "Haptic\nOn",
    "title": "Turn haptic feedback on"
  },
  "HPT_OFF": {
    "code": 0x7c41,
    "qmkid": "HPT_OFF",
    "str": "Haptic\nOff",
    "title": "Turn haptic feedback off"
  },
  "HPT_TOG": {
    "code": 0x7c42,
    "qmkid": "HPT_TOG",
    "str": "Haptic\nToggle",
    "title": "Toggle haptic feedback on/off"
  },
  "HPT_RST": {
    "code": 0x7c43,
    "qmkid": "HPT_RST",
    "str": "Haptic\nReset",
    "title": "Reset haptic feedback config to default"
  },
  "HPT_FBK": {
    "code": 0x7c44,
    "qmkid": "HPT_FBK",
    "str": "Haptic\nFeed\nback",
    "title": "Toggle feedback to occur on keypress, release or both"
  },
  "HPT_BUZ": {
    "code": 0x7c45,
    "qmkid": "HPT_BUZ",
    "str": "Haptic\nBuzz",
    "title": "Toggle solenoid buzz on/off"
  },
  "HPT_MODI": {
    "code": 0x7c46,
    "qmkid": "HPT_MODI",
    "str": "Haptic\nNext",
    "title": "Go to next DRV2605L waveform"
  },
  "HPT_MODD": {
    "code": 0x7c47,
    "qmkid": "HPT_MODD",
    "str": "Haptic\nPrev",
    "title": "Go to previous DRV2605L waveform"
  },
  "HPT_CONT": {
    "code": 0x7c48,
    "qmkid": "HPT_CONT",
    "str": "Haptic\nCont.",
    "title": "Toggle continuous haptic mode on/off"
  },
  "HPT_CONI": {
    "code": 0x7c49,
    "qmkid": "HPT_CONI",
    "str": "Haptic\n+",
    "title": "Increase DRV2605L continous haptic strength"
  },
  "HPT_COND": {
    "code": 0x7c4a,
    "qmkid": "HPT_COND",
    "str": "Haptic\n-",
    "title": "Decrease DRV2605L continous haptic strength"
  },
  "HPT_DWLI": {
    "code": 0x7c4b,
    "qmkid": "HPT_DWLI",
    "str": "Haptic\nDwell+",
    "title": "Increase Solenoid dwell time"
  },
  "HPT_DWLD": {
    "code": 0x7c4c,
    "qmkid": "HPT_DWLD",
    "str": "Haptic\nDwell-",
    "title": "Decrease Solenoid dwell time"
  },
  "CMB_ON": {
    "code": 0x7c50,
    "qmkid": "CMB_ON",
    "str": "Combo\nOn",
    "title": "Turns on Combo feature"
  },
  "CMB_OFF": {
    "code": 0x7c51,
    "qmkid": "CMB_OFF",
    "str": "Combo\nOff",
    "title": "Turns off Combo feature"
  },
  "CMB_TOG": {
    "code": 0x7c52,
    "qmkid": "CMB_TOG",
    "str": "Combo\nToggle",
    "title": "Toggles Combo feature on and off"
  },
  "DYN_REC_START1": {
    "code": 0x7c53,
    "qmkid": "DYN_REC_START1",
    "str": "DM1\nRec",
    "title": "Dynamic Macro 1 Rec Start"
  },
  "DYN_REC_START2": {
    "code": 0x7c54,
    "qmkid": "DYN_REC_START2",
    "str": "DM2\nRec",
    "title": "Dynamic Macro 2 Rec Start"
  },
  "DYN_REC_STOP": {
    "code": 0x7c55,
    "qmkid": "DYN_REC_STOP",
    "str": "DM Rec\nStop",
    "title": "Dynamic Macro Rec Stop"
  },
  "DYN_MACRO_PLAY1": {
    "code": 0x7c56,
    "qmkid": "DYN_MACRO_PLAY1",
    "str": "DM1\nPlay",
    "title": "Dynamic Macro 1 Play"
  },
  "DYN_MACRO_PLAY2": {
    "code": 0x7c57,
    "qmkid": "DYN_MACRO_PLAY2",
    "str": "DM2\nPlay",
    "title": "Dynamic Macro 2 Play"
  },
  "QK_LEADER": {
    "code": 0x7c58,
    "qmkid": "QK_LEADER",
    "str": "QK_LEADER",
    "title": "QK_LEADER"
  },
  "QK_LOCK": {
    "code": 0x7c59,
    "qmkid": "QK_LOCK",
    "str": "QK_LOCK",
    "title": "QK_LOCK"
  },
  "QK_ONE_SHOT_ON": {
    "code": 0x7c5a,
    "qmkid": "QK_ONE_SHOT_ON",
    "str": "QK_ONE_SHOT_ON",
    "title": "QK_ONE_SHOT_ON"
  },
  "QK_ONE_SHOT_OFF": {
    "code": 0x7c5b,
    "qmkid": "QK_ONE_SHOT_OFF",
    "str": "QK_ONE_SHOT_OFF",
    "title": "QK_ONE_SHOT_OFF"
  },
  "QK_ONE_SHOT_TOGGLE": {
    "code": 0x7c5c,
    "qmkid": "QK_ONE_SHOT_TOGGLE",
    "str": "QK_ONE_SHOT_TOGGLE",
    "title": "QK_ONE_SHOT_TOGGLE"
  },
  "QK_KEY_OVERRIDE_TOGGLE": {
    "code": 0x7c5d,
    "qmkid": "QK_KEY_OVERRIDE_TOGGLE",
    "str": "QK_KEY_OVERRIDE_TOGGLE",
    "title": "QK_KEY_OVERRIDE_TOGGLE"
  },
  "QK_KEY_OVERRIDE_ON": {
    "code": 0x7c5e,
    "qmkid": "QK_KEY_OVERRIDE_ON",
    "str": "QK_KEY_OVERRIDE_ON",
    "title": "QK_KEY_OVERRIDE_ON"
  },
  "QK_KEY_OVERRIDE_OFF": {
    "code": 0x7c5f,
    "qmkid": "QK_KEY_OVERRIDE_OFF",
    "str": "QK_KEY_OVERRIDE_OFF",
    "title": "QK_KEY_OVERRIDE_OFF"
  },
  "QK_SECURE_LOCK": {
    "code": 0x7c60,
    "qmkid": "QK_SECURE_LOCK",
    "str": "QK_SECURE_LOCK",
    "title": "QK_SECURE_LOCK"
  },
  "QK_SECURE_UNLOCK": {
    "code": 0x7c61,
    "qmkid": "QK_SECURE_UNLOCK",
    "str": "QK_SECURE_UNLOCK",
    "title": "QK_SECURE_UNLOCK"
  },
  "QK_SECURE_TOGGLE": {
    "code": 0x7c62,
    "qmkid": "QK_SECURE_TOGGLE",
    "str": "QK_SECURE_TOGGLE",
    "title": "QK_SECURE_TOGGLE"
  },
  "QK_SECURE_REQUEST": {
    "code": 0x7c63,
    "qmkid": "QK_SECURE_REQUEST",
    "str": "QK_SECURE_REQUEST",
    "title": "QK_SECURE_REQUEST"
  },
  "QK_DYNAMIC_TAPPING_TERM_PRINT": {
    "code": 0x7c70,
    "qmkid": "QK_DYNAMIC_TAPPING_TERM_PRINT",
    "str": "QK_DYNAMIC_TAPPING_TERM_PRINT",
    "title": "QK_DYNAMIC_TAPPING_TERM_PRINT"
  },
  "QK_DYNAMIC_TAPPING_TERM_UP": {
    "code": 0x7c71,
    "qmkid": "QK_DYNAMIC_TAPPING_TERM_UP",
    "str": "QK_DYNAMIC_TAPPING_TERM_UP",
    "title": "QK_DYNAMIC_TAPPING_TERM_UP"
  },
  "QK_DYNAMIC_TAPPING_TERM_DOWN": {
    "code": 0x7c72,
    "qmkid": "QK_DYNAMIC_TAPPING_TERM_DOWN",
    "str": "QK_DYNAMIC_TAPPING_TERM_DOWN",
    "title": "QK_DYNAMIC_TAPPING_TERM_DOWN"
  },
  "QK_CAPS_WORD_TOGGLE": {
    "code": 0x7c73,
    "qmkid": "QK_CAPS_WORD_TOGGLE",
    "str": "QK_CAPS_WORD_TOGGLE",
    "title": "QK_CAPS_WORD_TOGGLE"
  },
  "QK_AUTOCORRECT_ON": {
    "code": 0x7c74,
    "qmkid": "QK_AUTOCORRECT_ON",
    "str": "QK_AUTOCORRECT_ON",
    "title": "QK_AUTOCORRECT_ON"
  },
  "QK_AUTOCORRECT_OFF": {
    "code": 0x7c75,
    "qmkid": "QK_AUTOCORRECT_OFF",
    "str": "QK_AUTOCORRECT_OFF",
    "title": "QK_AUTOCORRECT_OFF"
  },
  "QK_AUTOCORRECT_TOGGLE": {
    "code": 0x7c76,
    "qmkid": "QK_AUTOCORRECT_TOGGLE",
    "str": "QK_AUTOCORRECT_TOGGLE",
    "title": "QK_AUTOCORRECT_TOGGLE"
  },
  "FN_MO13": {
    "code": 0x7c77,
    "qmkid": "FN_MO13",
    "str": "FN_MO13",
    "title": "FN_MO13"
  },
  "FN_MO23": {
    "code": 0x7c78,
    "qmkid": "FN_MO23",
    "str": "QK_REPEAT_KEY",
    "title": "QK_REPEAT_KEY"
  },
  "QK_REPEAT_KEY": {
    "code": 0x7c79,
    "qmkid": "QK_REPEAT_KEY",
    "str": "Repeat",
    "title": "QK_REPEAT_KEY"
  },
  "QK_ALT_REPEAT_KEY": {
    "code": 0x7c7a,
    "qmkid": "QK_ALT_REPEAT_KEY",
    "str": "AltRep",
    "title": "QK_ALT_REPEAT_KEY"
  },
  "QK_QUANTUM_MAX": {
    "code": 0x7dff,
    "qmkid": "QK_QUANTUM_MAX",
    "str": "QK_QUANTUM_MAX",
    "title": "QK_QUANTUM_MAX"
  },
  "USER00": {
    "code": 0x7e00,
    "qmkid": "USER00",
    "str": "USER00",
    "title": "USER00"
  },
  "USER01": {
    "code": 0x7e01,
    "qmkid": "USER01",
    "str": "USER01",
    "title": "USER01"
  },
  "USER02": {
    "code": 0x7e02,
    "qmkid": "USER02",
    "str": "USER02",
    "title": "USER02"
  },
  "USER03": {
    "code": 0x7e03,
    "qmkid": "USER03",
    "str": "USER03",
    "title": "USER03"
  },
  "USER04": {
    "code": 0x7e04,
    "qmkid": "USER04",
    "str": "USER04",
    "title": "USER04"
  },
  "USER05": {
    "code": 0x7e05,
    "qmkid": "USER05",
    "str": "USER05",
    "title": "USER05"
  },
  "USER06": {
    "code": 0x7e06,
    "qmkid": "USER06",
    "str": "USER06",
    "title": "USER06"
  },
  "USER07": {
    "code": 0x7e07,
    "qmkid": "USER07",
    "str": "USER07",
    "title": "USER07"
  },
  "USER08": {
    "code": 0x7e08,
    "qmkid": "USER08",
    "str": "USER08",
    "title": "USER08"
  },
  "USER09": {
    "code": 0x7e09,
    "qmkid": "USER09",
    "str": "USER09",
    "title": "USER09"
  },
  "USER10": {
    "code": 0x7e0a,
    "qmkid": "USER10",
    "str": "USER10",
    "title": "USER10"
  },
  "USER11": {
    "code": 0x7e0b,
    "qmkid": "USER11",
    "str": "USER11",
    "title": "USER11"
  },
  "USER12": {
    "code": 0x7e0c,
    "qmkid": "USER12",
    "str": "USER12",
    "title": "USER12"
  },
  "USER13": {
    "code": 0x7e0d,
    "qmkid": "USER13",
    "str": "USER13",
    "title": "USER13"
  },
  "USER14": {
    "code": 0x7e0e,
    "qmkid": "USER14",
    "str": "USER14",
    "title": "USER14"
  },
  "USER15": {
    "code": 0x7e0f,
    "qmkid": "USER15",
    "str": "USER15",
    "title": "USER15"
  },
  "USER16": {
    "code": 0x7e10,
    "qmkid": "USER16",
    "str": "USER16",
    "title": "USER16"
  },
  "USER17": {
    "code": 0x7e11,
    "qmkid": "USER17",
    "str": "USER17",
    "title": "USER17"
  },
  "USER18": {
    "code": 0x7e12,
    "qmkid": "USER18",
    "str": "USER18",
    "title": "USER18"
  },
  "USER19": {
    "code": 0x7e13,
    "qmkid": "USER19",
    "str": "USER19",
    "title": "USER19"
  },
  "USER20": {
    "code": 0x7e14,
    "qmkid": "USER20",
    "str": "USER20",
    "title": "USER20"
  },
  "USER21": {
    "code": 0x7e15,
    "qmkid": "USER21",
    "str": "USER21",
    "title": "USER21"
  },
  "USER22": {
    "code": 0x7e16,
    "qmkid": "USER22",
    "str": "USER22",
    "title": "USER22"
  },
  "USER23": {
    "code": 0x7e17,
    "qmkid": "USER23",
    "str": "USER23",
    "title": "USER23"
  },
  "USER24": {
    "code": 0x7e18,
    "qmkid": "USER24",
    "str": "USER24",
    "title": "USER24"
  },
  "USER25": {
    "code": 0x7e19,
    "qmkid": "USER25",
    "str": "USER25",
    "title": "USER25"
  },
  "USER26": {
    "code": 0x7e1a,
    "qmkid": "USER26",
    "str": "USER26",
    "title": "USER26"
  },
  "USER27": {
    "code": 0x7e1b,
    "qmkid": "USER27",
    "str": "USER27",
    "title": "USER27"
  },
  "USER28": {
    "code": 0x7e1c,
    "qmkid": "USER28",
    "str": "USER28",
    "title": "USER28"
  },
  "USER29": {
    "code": 0x7e1d,
    "qmkid": "USER29",
    "str": "USER29",
    "title": "USER29"
  },
  "USER30": {
    "code": 0x7e1e,
    "qmkid": "USER30",
    "str": "USER30",
    "title": "USER30"
  },
  "USER31": {
    "code": 0x7e1f,
    "qmkid": "USER31",
    "str": "USER31",
    "title": "USER31"
  },
  "USER32": {
    "code": 0x7e20,
    "qmkid": "USER32",
    "str": "USER32",
    "title": "USER32"
  },
  "USER33": {
    "code": 0x7e21,
    "qmkid": "USER33",
    "str": "USER33",
    "title": "USER33"
  },
  "USER34": {
    "code": 0x7e22,
    "qmkid": "USER34",
    "str": "USER34",
    "title": "USER34"
  },
  "USER35": {
    "code": 0x7e23,
    "qmkid": "USER35",
    "str": "USER35",
    "title": "USER35"
  },
  "USER36": {
    "code": 0x7e24,
    "qmkid": "USER36",
    "str": "USER36",
    "title": "USER36"
  },
  "USER37": {
    "code": 0x7e25,
    "qmkid": "USER37",
    "str": "USER37",
    "title": "USER37"
  },
  "USER38": {
    "code": 0x7e26,
    "qmkid": "USER38",
    "str": "USER38",
    "title": "USER38"
  },
  "USER39": {
    "code": 0x7e27,
    "qmkid": "USER39",
    "str": "USER39",
    "title": "USER39"
  },
  "USER40": {
    "code": 0x7e28,
    "qmkid": "USER40",
    "str": "USER40",
    "title": "USER40"
  },
  "USER41": {
    "code": 0x7e29,
    "qmkid": "USER41",
    "str": "USER41",
    "title": "USER41"
  },
  "USER42": {
    "code": 0x7e2a,
    "qmkid": "USER42",
    "str": "USER42",
    "title": "USER42"
  },
  "USER43": {
    "code": 0x7e2b,
    "qmkid": "USER43",
    "str": "USER43",
    "title": "USER43"
  },
  "USER44": {
    "code": 0x7e2c,
    "qmkid": "USER44",
    "str": "USER44",
    "title": "USER44"
  },
  "USER45": {
    "code": 0x7e2d,
    "qmkid": "USER45",
    "str": "USER45",
    "title": "USER45"
  },
  "USER46": {
    "code": 0x7e2e,
    "qmkid": "USER46",
    "str": "USER46",
    "title": "USER46"
  },
  "USER47": {
    "code": 0x7e2f,
    "qmkid": "USER47",
    "str": "USER47",
    "title": "USER47"
  },
  "USER48": {
    "code": 0x7e30,
    "qmkid": "USER48",
    "str": "USER48",
    "title": "USER48"
  },
  "USER49": {
    "code": 0x7e31,
    "qmkid": "USER49",
    "str": "USER49",
    "title": "USER49"
  },
  "USER50": {
    "code": 0x7e32,
    "qmkid": "USER50",
    "str": "USER50",
    "title": "USER50"
  },
  "USER51": {
    "code": 0x7e33,
    "qmkid": "USER51",
    "str": "USER51",
    "title": "USER51"
  },
  "USER52": {
    "code": 0x7e34,
    "qmkid": "USER52",
    "str": "USER52",
    "title": "USER52"
  },
  "USER53": {
    "code": 0x7e35,
    "qmkid": "USER53",
    "str": "USER53",
    "title": "USER53"
  },
  "USER54": {
    "code": 0x7e36,
    "qmkid": "USER54",
    "str": "USER54",
    "title": "USER54"
  },
  "USER55": {
    "code": 0x7e37,
    "qmkid": "USER55",
    "str": "USER55",
    "title": "USER55"
  },
  "USER56": {
    "code": 0x7e38,
    "qmkid": "USER56",
    "str": "USER56",
    "title": "USER56"
  },
  "USER57": {
    "code": 0x7e39,
    "qmkid": "USER57",
    "str": "USER57",
    "title": "USER57"
  },
  "USER58": {
    "code": 0x7e3a,
    "qmkid": "USER58",
    "str": "USER58",
    "title": "USER58"
  },
  "USER59": {
    "code": 0x7e3b,
    "qmkid": "USER59",
    "str": "USER59",
    "title": "USER59"
  },
  "USER60": {
    "code": 0x7e3c,
    "qmkid": "USER60",
    "str": "USER60",
    "title": "USER60"
  },
  "USER61": {
    "code": 0x7e3d,
    "qmkid": "USER61",
    "str": "USER61",
    "title": "USER61"
  },
  "USER62": {
    "code": 0x7e3e,
    "qmkid": "USER62",
    "str": "USER62",
    "title": "USER62"
  },
  "USER63": {
    "code": 0x7e3f,
    "qmkid": "USER63",
    "str": "USER63",
    "title": "USER63"
  },
  "QK_USER": {
    "code": 0x7e40,
    "qmkid": "QK_USER",
    "str": "QK_USER",
    "title": "QK_USER"
  },
  "QK_USER_1": {
    "code": 0x7e41,
    "qmkid": "QK_USER_1",
    "str": "QK_USER_1",
    "title": "QK_USER_1"
  },
  "QK_USER_2": {
    "code": 0x7e42,
    "qmkid": "QK_USER_2",
    "str": "QK_USER_2",
    "title": "QK_USER_2"
  },
  "QK_USER_3": {
    "code": 0x7e43,
    "qmkid": "QK_USER_3",
    "str": "QK_USER_3",
    "title": "QK_USER_3"
  },
  "QK_USER_4": {
    "code": 0x7e44,
    "qmkid": "QK_USER_4",
    "str": "QK_USER_4",
    "title": "QK_USER_4"
  },
  "QK_USER_5": {
    "code": 0x7e45,
    "qmkid": "QK_USER_5",
    "str": "QK_USER_5",
    "title": "QK_USER_5"
  },
  "QK_USER_6": {
    "code": 0x7e46,
    "qmkid": "QK_USER_6",
    "str": "QK_USER_6",
    "title": "QK_USER_6"
  },
  "QK_USER_7": {
    "code": 0x7e47,
    "qmkid": "QK_USER_7",
    "str": "QK_USER_7",
    "title": "QK_USER_7"
  },
  "QK_USER_8": {
    "code": 0x7e48,
    "qmkid": "QK_USER_8",
    "str": "QK_USER_8",
    "title": "QK_USER_8"
  },
  "QK_USER_9": {
    "code": 0x7e49,
    "qmkid": "QK_USER_9",
    "str": "QK_USER_9",
    "title": "QK_USER_9"
  },
  "QK_USER_10": {
    "code": 0x7e4a,
    "qmkid": "QK_USER_10",
    "str": "QK_USER_10",
    "title": "QK_USER_10"
  },
  "QK_USER_11": {
    "code": 0x7e4b,
    "qmkid": "QK_USER_11",
    "str": "QK_USER_11",
    "title": "QK_USER_11"
  },
  "QK_USER_12": {
    "code": 0x7e4c,
    "qmkid": "QK_USER_12",
    "str": "QK_USER_12",
    "title": "QK_USER_12"
  },
  "QK_USER_13": {
    "code": 0x7e4d,
    "qmkid": "QK_USER_13",
    "str": "QK_USER_13",
    "title": "QK_USER_13"
  },
  "QK_USER_14": {
    "code": 0x7e4e,
    "qmkid": "QK_USER_14",
    "str": "QK_USER_14",
    "title": "QK_USER_14"
  },
  "QK_USER_15": {
    "code": 0x7e4f,
    "qmkid": "QK_USER_15",
    "str": "QK_USER_15",
    "title": "QK_USER_15"
  },
  "QK_USER_16": {
    "code": 0x7e50,
    "qmkid": "QK_USER_16",
    "str": "QK_USER_16",
    "title": "QK_USER_16"
  },
  "QK_USER_17": {
    "code": 0x7e51,
    "qmkid": "QK_USER_17",
    "str": "QK_USER_17",
    "title": "QK_USER_17"
  },
  "QK_USER_18": {
    "code": 0x7e52,
    "qmkid": "QK_USER_18",
    "str": "QK_USER_18",
    "title": "QK_USER_18"
  },
  "QK_USER_19": {
    "code": 0x7e53,
    "qmkid": "QK_USER_19",
    "str": "QK_USER_19",
    "title": "QK_USER_19"
  },
  "QK_USER_20": {
    "code": 0x7e54,
    "qmkid": "QK_USER_20",
    "str": "QK_USER_20",
    "title": "QK_USER_20"
  },
  "QK_USER_21": {
    "code": 0x7e55,
    "qmkid": "QK_USER_21",
    "str": "QK_USER_21",
    "title": "QK_USER_21"
  },
  "QK_USER_22": {
    "code": 0x7e56,
    "qmkid": "QK_USER_22",
    "str": "QK_USER_22",
    "title": "QK_USER_22"
  },
  "QK_USER_23": {
    "code": 0x7e57,
    "qmkid": "QK_USER_23",
    "str": "QK_USER_23",
    "title": "QK_USER_23"
  },
  "QK_USER_24": {
    "code": 0x7e58,
    "qmkid": "QK_USER_24",
    "str": "QK_USER_24",
    "title": "QK_USER_24"
  },
  "QK_USER_25": {
    "code": 0x7e59,
    "qmkid": "QK_USER_25",
    "str": "QK_USER_25",
    "title": "QK_USER_25"
  },
  "QK_USER_26": {
    "code": 0x7e5a,
    "qmkid": "QK_USER_26",
    "str": "QK_USER_26",
    "title": "QK_USER_26"
  },
  "QK_USER_27": {
    "code": 0x7e5b,
    "qmkid": "QK_USER_27",
    "str": "QK_USER_27",
    "title": "QK_USER_27"
  },
  "QK_USER_28": {
    "code": 0x7e5c,
    "qmkid": "QK_USER_28",
    "str": "QK_USER_28",
    "title": "QK_USER_28"
  },
  "QK_USER_29": {
    "code": 0x7e5d,
    "qmkid": "QK_USER_29",
    "str": "QK_USER_29",
    "title": "QK_USER_29"
  },
  "QK_USER_30": {
    "code": 0x7e5e,
    "qmkid": "QK_USER_30",
    "str": "QK_USER_30",
    "title": "QK_USER_30"
  },
  "QK_USER_31": {
    "code": 0x7e5f,
    "qmkid": "QK_USER_31",
    "str": "QK_USER_31",
    "title": "QK_USER_31"
  },
  "QK_USER_MAX": {
    "code": 0x7fff,
    "qmkid": "QK_USER_MAX",
    "str": "QK_USER_MAX",
    "title": "QK_USER_MAX"
  },
  "QK_UNICODEMAP": {
    "code": 0x8000,
    "qmkid": "QK_UNICODEMAP",
    "str": "QK_UNICODEMAP",
    "title": "QK_UNICODEMAP"
  },
  "QK_UNICODEMAP_MAX": {
    "code": 0xbfff,
    "qmkid": "QK_UNICODEMAP_MAX",
    "str": "QK_UNICODEMAP_MAX",
    "title": "QK_UNICODEMAP_MAX"
  },
  "QK_UNICODEMAP_PAIR": {
    "code": 0xc000,
    "qmkid": "QK_UNICODEMAP_PAIR",
    "str": "QK_UNICODEMAP_PAIR",
    "title": "QK_UNICODEMAP_PAIR"
  },
  "QK_UNICODE_MAX": {
    "code": 0xffff,
    "qmkid": "QK_UNICODE_MAX",
    "str": "QK_UNICODE_MAX",
    "title": "QK_UNICODE_MAX"
  }
};

const KEYALIASES = {
  "KC_NO": "KC_NO",
  "KC_TRNS": "KC_TRNS",
  "KC_A": "KC_A",
  "KC_B": "KC_B",
  "KC_C": "KC_C",
  "KC_D": "KC_D",
  "KC_E": "KC_E",
  "KC_F": "KC_F",
  "KC_G": "KC_G",
  "KC_H": "KC_H",
  "KC_I": "KC_I",
  "KC_J": "KC_J",
  "KC_K": "KC_K",
  "KC_L": "KC_L",
  "KC_M": "KC_M",
  "KC_N": "KC_N",
  "KC_O": "KC_O",
  "KC_P": "KC_P",
  "KC_Q": "KC_Q",
  "KC_R": "KC_R",
  "KC_S": "KC_S",
  "KC_T": "KC_T",
  "KC_U": "KC_U",
  "KC_V": "KC_V",
  "KC_W": "KC_W",
  "KC_X": "KC_X",
  "KC_Y": "KC_Y",
  "KC_Z": "KC_Z",
  "KC_1": "KC_1",
  "KC_2": "KC_2",
  "KC_3": "KC_3",
  "KC_4": "KC_4",
  "KC_5": "KC_5",
  "KC_6": "KC_6",
  "KC_7": "KC_7",
  "KC_8": "KC_8",
  "KC_9": "KC_9",
  "KC_0": "KC_0",
  "KC_ENTER": "KC_ENTER",
  "KC_ESCAPE": "KC_ESCAPE",
  "KC_BSPACE": "KC_BSPACE",
  "KC_TAB": "KC_TAB",
  "KC_SPACE": "KC_SPACE",
  "KC_MINUS": "KC_MINUS",
  "KC_EQUAL": "KC_EQUAL",
  "KC_LBRACKET": "KC_LBRACKET",
  "KC_RBRACKET": "KC_RBRACKET",
  "KC_BSLASH": "KC_BSLASH",
  "KC_NONUS_HASH": "KC_NONUS_HASH",
  "KC_SCOLON": "KC_SCOLON",
  "KC_QUOTE": "KC_QUOTE",
  "KC_GRAVE": "KC_GRAVE",
  "KC_COMMA": "KC_COMMA",
  "KC_DOT": "KC_DOT",
  "KC_SLASH": "KC_SLASH",
  "KC_CAPSLOCK": "KC_CAPSLOCK",
  "KC_F1": "KC_F1",
  "KC_F2": "KC_F2",
  "KC_F3": "KC_F3",
  "KC_F4": "KC_F4",
  "KC_F5": "KC_F5",
  "KC_F6": "KC_F6",
  "KC_F7": "KC_F7",
  "KC_F8": "KC_F8",
  "KC_F9": "KC_F9",
  "KC_F10": "KC_F10",
  "KC_F11": "KC_F11",
  "KC_F12": "KC_F12",
  "KC_PSCREEN": "KC_PSCREEN",
  "KC_SCROLLLOCK": "KC_SCROLLLOCK",
  "KC_PAUSE": "KC_PAUSE",
  "KC_INSERT": "KC_INSERT",
  "KC_HOME": "KC_HOME",
  "KC_PGUP": "KC_PGUP",
  "KC_DELETE": "KC_DELETE",
  "KC_END": "KC_END",
  "KC_PGDOWN": "KC_PGDOWN",
  "KC_RIGHT": "KC_RIGHT",
  "KC_LEFT": "KC_LEFT",
  "KC_DOWN": "KC_DOWN",
  "KC_UP": "KC_UP",
  "KC_NUMLOCK": "KC_NUMLOCK",
  "KC_KP_SLASH": "KC_KP_SLASH",
  "KC_KP_ASTERISK": "KC_KP_ASTERISK",
  "KC_KP_MINUS": "KC_KP_MINUS",
  "KC_KP_PLUS": "KC_KP_PLUS",
  "KC_KP_ENTER": "KC_KP_ENTER",
  "KC_KP_1": "KC_KP_1",
  "KC_KP_2": "KC_KP_2",
  "KC_KP_3": "KC_KP_3",
  "KC_KP_4": "KC_KP_4",
  "KC_KP_5": "KC_KP_5",
  "KC_KP_6": "KC_KP_6",
  "KC_KP_7": "KC_KP_7",
  "KC_KP_8": "KC_KP_8",
  "KC_KP_9": "KC_KP_9",
  "KC_KP_0": "KC_KP_0",
  "KC_KP_DOT": "KC_KP_DOT",
  "KC_NONUS_BSLASH": "KC_NONUS_BSLASH",
  "KC_APPLICATION": "KC_APPLICATION",
  "KC_KP_EQUAL": "KC_KP_EQUAL",
  "KC_F13": "KC_F13",
  "KC_F14": "KC_F14",
  "KC_F15": "KC_F15",
  "KC_F16": "KC_F16",
  "KC_F17": "KC_F17",
  "KC_F18": "KC_F18",
  "KC_F19": "KC_F19",
  "KC_F20": "KC_F20",
  "KC_F21": "KC_F21",
  "KC_F22": "KC_F22",
  "KC_F23": "KC_F23",
  "KC_F24": "KC_F24",
  "KC_EXEC": "KC_EXEC",
  "KC_HELP": "KC_HELP",
  "KC_SLCT": "KC_SLCT",
  "KC_STOP": "KC_STOP",
  "KC_REDO": "KC_REDO",
  "KC_UNDO": "KC_UNDO",
  "KC_CUT": "KC_CUT",
  "KC_COPY": "KC_COPY",
  "KC_PSTE": "KC_PSTE",
  "KC_FIND": "KC_FIND",
  "KC_VOLUP": "KC_VOLUP",
  "KC_VOLDOWN": "KC_VOLDOWN",
  "KC_LCAP": "KC_LCAP",
  "KC_LNUM": "KC_LNUM",
  "KC_LSCR": "KC_LSCR",
  "KC_KP_COMMA": "KC_KP_COMMA",
  "KC_RO": "KC_RO",
  "KC_KANA": "KC_KANA",
  "KC_JYEN": "KC_JYEN",
  "KC_HENK": "KC_HENK",
  "KC_MHEN": "KC_MHEN",
  "KC_LANG1": "KC_LANG1",
  "KC_LANG2": "KC_LANG2",
  "KC_PWR": "KC_PWR",
  "KC_SLEP": "KC_SLEP",
  "KC_WAKE": "KC_WAKE",
  "KC_MUTE": "KC_MUTE",
  "KC_VOLU": "KC_VOLU",
  "KC_VOLD": "KC_VOLD",
  "KC_MNXT": "KC_MNXT",
  "KC_MPRV": "KC_MPRV",
  "KC_MSTP": "KC_MSTP",
  "KC_MPLY": "KC_MPLY",
  "KC_MSEL": "KC_MSEL",
  "KC_EJCT": "KC_EJCT",
  "KC_MAIL": "KC_MAIL",
  "KC_CALC": "KC_CALC",
  "KC_MYCM": "KC_MYCM",
  "KC_WSCH": "KC_WSCH",
  "KC_WHOM": "KC_WHOM",
  "KC_WBAK": "KC_WBAK",
  "KC_WFWD": "KC_WFWD",
  "KC_WSTP": "KC_WSTP",
  "KC_WREF": "KC_WREF",
  "KC_WFAV": "KC_WFAV",
  "KC_MFFD": "KC_MFFD",
  "KC_MRWD": "KC_MRWD",
  "KC_BRIU": "KC_BRIU",
  "KC_BRID": "KC_BRID",
  "KC_MS_U": "KC_MS_U",
  "KC_MS_D": "KC_MS_D",
  "KC_MS_L": "KC_MS_L",
  "KC_MS_R": "KC_MS_R",
  "KC_BTN1": "KC_BTN1",
  "KC_BTN2": "KC_BTN2",
  "KC_BTN3": "KC_BTN3",
  "KC_BTN4": "KC_BTN4",
  "KC_BTN5": "KC_BTN5",
  "KC_WH_U": "KC_WH_U",
  "KC_WH_D": "KC_WH_D",
  "KC_WH_L": "KC_WH_L",
  "KC_WH_R": "KC_WH_R",
  "KC_ACL0": "KC_ACL0",
  "KC_ACL1": "KC_ACL1",
  "KC_ACL2": "KC_ACL2",
  "KC_LCTRL": "KC_LCTRL",
  "KC_LSHIFT": "KC_LSHIFT",
  "KC_LALT": "KC_LALT",
  "KC_LGUI": "KC_LGUI",
  "KC_RCTRL": "KC_RCTRL",
  "KC_RSHIFT": "KC_RSHIFT",
  "KC_RALT": "KC_RALT",
  "KC_RGUI": "KC_RGUI",
  "LCTL(kc)": "LCTL(kc)",
  "LSFT(kc)": "LSFT(kc)",
  "KC_EXLM": "KC_EXLM",
  "KC_AT": "KC_AT",
  "KC_HASH": "KC_HASH",
  "KC_DLR": "KC_DLR",
  "KC_PERC": "KC_PERC",
  "KC_CIRC": "KC_CIRC",
  "KC_AMPR": "KC_AMPR",
  "KC_ASTR": "KC_ASTR",
  "KC_LPRN": "KC_LPRN",
  "KC_RPRN": "KC_RPRN",
  "KC_UNDS": "KC_UNDS",
  "KC_PLUS": "KC_PLUS",
  "KC_LCBR": "KC_LCBR",
  "KC_RCBR": "KC_RCBR",
  "KC_PIPE": "KC_PIPE",
  "KC_COLN": "KC_COLN",
  "KC_DQUO": "KC_DQUO",
  "KC_TILD": "KC_TILD",
  "KC_LT": "KC_LT",
  "KC_GT": "KC_GT",
  "KC_QUES": "KC_QUES",
  "C_S(kc)": "C_S(kc)",
  "LALT(kc)": "LALT(kc)",
  "LCA(kc)": "LCA(kc)",
  "LSA(kc)": "LSA(kc)",
  "MEH(kc)": "MEH(kc)",
  "LGUI(kc)": "LGUI(kc)",
  "LCG(kc)": "LCG(kc)",
  "SGUI(kc)": "SGUI(kc)",
  "LCAG(kc)": "LCAG(kc)",
  "HYPR(kc)": "HYPR(kc)",
  "RCTL(kc)": "RCTL(kc)",
  "RSFT(kc)": "RSFT(kc)",
  "RALT(kc)": "RALT(kc)",
  "RGUI(kc)": "RGUI(kc)",
  "RCG(kc)": "RCG(kc)",
  "LCTL_T(kc)": "LCTL_T(kc)",
  "LSFT_T(kc)": "LSFT_T(kc)",
  "C_S_T(kc)": "C_S_T(kc)",
  "LALT_T(kc)": "LALT_T(kc)",
  "LCA_T(kc)": "LCA_T(kc)",
  "LSA_T(kc)": "LSA_T(kc)",
  "MEH_T(kc)": "MEH_T(kc)",
  "LGUI_T(kc)": "LGUI_T(kc)",
  "LCG_T(kc)": "LCG_T(kc)",
  "SGUI_T(kc)": "SGUI_T(kc)",
  "LCAG_T(kc)": "LCAG_T(kc)",
  "ALL_T(kc)": "ALL_T(kc)",
  "RCTL_T(kc)": "RCTL_T(kc)",
  "RSFT_T(kc)": "RSFT_T(kc)",
  "RALT_T(kc)": "RALT_T(kc)",
  "RGUI_T(kc)": "RGUI_T(kc)",
  "RCG_T(kc)": "RCG_T(kc)",
  "RCAG_T(kc)": "RCAG_T(kc)",
  "LT0(kc)": "LT0(kc)",
  "LT1(kc)": "LT1(kc)",
  "LT2(kc)": "LT2(kc)",
  "LT3(kc)": "LT3(kc)",
  "LT4(kc)": "LT4(kc)",
  "LT5(kc)": "LT5(kc)",
  "LT6(kc)": "LT6(kc)",
  "LT7(kc)": "LT7(kc)",
  "LT8(kc)": "LT8(kc)",
  "LT9(kc)": "LT9(kc)",
  "LT10(kc)": "LT10(kc)",
  "LT11(kc)": "LT11(kc)",
  "LT12(kc)": "LT12(kc)",
  "LT13(kc)": "LT13(kc)",
  "LT14(kc)": "LT14(kc)",
  "LT15(kc)": "LT15(kc)",
  "TO(0)": "TO(0)",
  "TO(1)": "TO(1)",
  "TO(2)": "TO(2)",
  "TO(3)": "TO(3)",
  "TO(4)": "TO(4)",
  "TO(5)": "TO(5)",
  "TO(6)": "TO(6)",
  "TO(7)": "TO(7)",
  "TO(8)": "TO(8)",
  "TO(9)": "TO(9)",
  "TO(10)": "TO(10)",
  "TO(11)": "TO(11)",
  "TO(12)": "TO(12)",
  "TO(13)": "TO(13)",
  "TO(14)": "TO(14)",
  "TO(15)": "TO(15)",
  "TO(16)": "TO(16)",
  "TO(17)": "TO(17)",
  "TO(18)": "TO(18)",
  "TO(19)": "TO(19)",
  "TO(20)": "TO(20)",
  "TO(21)": "TO(21)",
  "TO(22)": "TO(22)",
  "TO(23)": "TO(23)",
  "TO(24)": "TO(24)",
  "TO(25)": "TO(25)",
  "TO(26)": "TO(26)",
  "TO(27)": "TO(27)",
  "TO(28)": "TO(28)",
  "TO(29)": "TO(29)",
  "TO(30)": "TO(30)",
  "TO(31)": "TO(31)",
  "MO(0)": "MO(0)",
  "MO(1)": "MO(1)",
  "MO(2)": "MO(2)",
  "MO(3)": "MO(3)",
  "MO(4)": "MO(4)",
  "MO(5)": "MO(5)",
  "MO(6)": "MO(6)",
  "MO(7)": "MO(7)",
  "MO(8)": "MO(8)",
  "MO(9)": "MO(9)",
  "MO(10)": "MO(10)",
  "MO(11)": "MO(11)",
  "MO(12)": "MO(12)",
  "MO(13)": "MO(13)",
  "MO(14)": "MO(14)",
  "MO(15)": "MO(15)",
  "MO(16)": "MO(16)",
  "MO(17)": "MO(17)",
  "MO(18)": "MO(18)",
  "MO(19)": "MO(19)",
  "MO(20)": "MO(20)",
  "MO(21)": "MO(21)",
  "MO(22)": "MO(22)",
  "MO(23)": "MO(23)",
  "MO(24)": "MO(24)",
  "MO(25)": "MO(25)",
  "MO(26)": "MO(26)",
  "MO(27)": "MO(27)",
  "MO(28)": "MO(28)",
  "MO(29)": "MO(29)",
  "MO(30)": "MO(30)",
  "MO(31)": "MO(31)",
  "DF(0)": "DF(0)",
  "DF(1)": "DF(1)",
  "DF(2)": "DF(2)",
  "DF(3)": "DF(3)",
  "DF(4)": "DF(4)",
  "DF(5)": "DF(5)",
  "DF(6)": "DF(6)",
  "DF(7)": "DF(7)",
  "DF(8)": "DF(8)",
  "DF(9)": "DF(9)",
  "DF(10)": "DF(10)",
  "DF(11)": "DF(11)",
  "DF(12)": "DF(12)",
  "DF(13)": "DF(13)",
  "DF(14)": "DF(14)",
  "DF(15)": "DF(15)",
  "DF(16)": "DF(16)",
  "DF(17)": "DF(17)",
  "DF(18)": "DF(18)",
  "DF(19)": "DF(19)",
  "DF(20)": "DF(20)",
  "DF(21)": "DF(21)",
  "DF(22)": "DF(22)",
  "DF(23)": "DF(23)",
  "DF(24)": "DF(24)",
  "DF(25)": "DF(25)",
  "DF(26)": "DF(26)",
  "DF(27)": "DF(27)",
  "DF(28)": "DF(28)",
  "DF(29)": "DF(29)",
  "DF(30)": "DF(30)",
  "DF(31)": "DF(31)",
  "TG(0)": "TG(0)",
  "TG(1)": "TG(1)",
  "TG(2)": "TG(2)",
  "TG(3)": "TG(3)",
  "TG(4)": "TG(4)",
  "TG(5)": "TG(5)",
  "TG(6)": "TG(6)",
  "TG(7)": "TG(7)",
  "TG(8)": "TG(8)",
  "TG(9)": "TG(9)",
  "TG(10)": "TG(10)",
  "TG(11)": "TG(11)",
  "TG(12)": "TG(12)",
  "TG(13)": "TG(13)",
  "TG(14)": "TG(14)",
  "TG(15)": "TG(15)",
  "TG(16)": "TG(16)",
  "TG(17)": "TG(17)",
  "TG(18)": "TG(18)",
  "TG(19)": "TG(19)",
  "TG(20)": "TG(20)",
  "TG(21)": "TG(21)",
  "TG(22)": "TG(22)",
  "TG(23)": "TG(23)",
  "TG(24)": "TG(24)",
  "TG(25)": "TG(25)",
  "TG(26)": "TG(26)",
  "TG(27)": "TG(27)",
  "TG(28)": "TG(28)",
  "TG(29)": "TG(29)",
  "TG(30)": "TG(30)",
  "TG(31)": "TG(31)",
  "OSL(0)": "OSL(0)",
  "OSL(1)": "OSL(1)",
  "OSL(2)": "OSL(2)",
  "OSL(3)": "OSL(3)",
  "OSL(4)": "OSL(4)",
  "OSL(5)": "OSL(5)",
  "OSL(6)": "OSL(6)",
  "OSL(7)": "OSL(7)",
  "OSL(8)": "OSL(8)",
  "OSL(9)": "OSL(9)",
  "OSL(10)": "OSL(10)",
  "OSL(11)": "OSL(11)",
  "OSL(12)": "OSL(12)",
  "OSL(13)": "OSL(13)",
  "OSL(14)": "OSL(14)",
  "OSL(15)": "OSL(15)",
  "OSL(16)": "OSL(16)",
  "OSL(17)": "OSL(17)",
  "OSL(18)": "OSL(18)",
  "OSL(19)": "OSL(19)",
  "OSL(20)": "OSL(20)",
  "OSL(21)": "OSL(21)",
  "OSL(22)": "OSL(22)",
  "OSL(23)": "OSL(23)",
  "OSL(24)": "OSL(24)",
  "OSL(25)": "OSL(25)",
  "OSL(26)": "OSL(26)",
  "OSL(27)": "OSL(27)",
  "OSL(28)": "OSL(28)",
  "OSL(29)": "OSL(29)",
  "OSL(30)": "OSL(30)",
  "OSL(31)": "OSL(31)",
  "OSM(MOD_LCTL)": "OSM(MOD_LCTL)",
  "OSM(MOD_LSFT)": "OSM(MOD_LSFT)",
  "OSM(MOD_LCTL|MOD_LSFT)": "OSM(MOD_LCTL|MOD_LSFT)",
  "OSM(MOD_LALT)": "OSM(MOD_LALT)",
  "OSM(MOD_LCTL|MOD_LALT)": "OSM(MOD_LCTL|MOD_LALT)",
  "OSM(MOD_LSFT|MOD_LALT)": "OSM(MOD_LSFT|MOD_LALT)",
  "OSM(MOD_MEH)": "OSM(MOD_MEH)",
  "OSM(MOD_LGUI)": "OSM(MOD_LGUI)",
  "OSM(MOD_LCTL|MOD_LGUI)": "OSM(MOD_LCTL|MOD_LGUI)",
  "OSM(MOD_LSFT|MOD_LGUI)": "OSM(MOD_LSFT|MOD_LGUI)",
  "OSM(MOD_LCTL|MOD_LSFT|MOD_LGUI)": "OSM(MOD_LCTL|MOD_LSFT|MOD_LGUI)",
  "OSM(MOD_LALT|MOD_LGUI)": "OSM(MOD_LALT|MOD_LGUI)",
  "OSM(MOD_LCTL|MOD_LALT|MOD_LGUI)": "OSM(MOD_LCTL|MOD_LALT|MOD_LGUI)",
  "OSM(MOD_LSFT|MOD_LALT|MOD_LGUI)": "OSM(MOD_LSFT|MOD_LALT|MOD_LGUI)",
  "OSM(MOD_HYPR)": "OSM(MOD_HYPR)",
  "OSM(MOD_RCTL)": "OSM(MOD_RCTL)",
  "OSM(MOD_RSFT)": "OSM(MOD_RSFT)",
  "OSM(MOD_RCTL|MOD_RSFT)": "OSM(MOD_RCTL|MOD_RSFT)",
  "OSM(MOD_RALT)": "OSM(MOD_RALT)",
  "OSM(MOD_RCTL|MOD_RALT)": "OSM(MOD_RCTL|MOD_RALT)",
  "OSM(MOD_RSFT|MOD_RALT)": "OSM(MOD_RSFT|MOD_RALT)",
  "OSM(MOD_RCTL|MOD_RSFT|MOD_RALT)": "OSM(MOD_RCTL|MOD_RSFT|MOD_RALT)",
  "OSM(MOD_RGUI)": "OSM(MOD_RGUI)",
  "OSM(MOD_RCTL|MOD_RGUI)": "OSM(MOD_RCTL|MOD_RGUI)",
  "OSM(MOD_RSFT|MOD_RGUI)": "OSM(MOD_RSFT|MOD_RGUI)",
  "OSM(MOD_RCTL|MOD_RSFT|MOD_RGUI)": "OSM(MOD_RCTL|MOD_RSFT|MOD_RGUI)",
  "OSM(MOD_RALT|MOD_RGUI)": "OSM(MOD_RALT|MOD_RGUI)",
  "OSM(MOD_RCTL|MOD_RALT|MOD_RGUI)": "OSM(MOD_RCTL|MOD_RALT|MOD_RGUI)",
  "OSM(MOD_RSFT|MOD_RALT|MOD_RGUI)": "OSM(MOD_RSFT|MOD_RALT|MOD_RGUI)",
  "OSM(MOD_RCTL|MOD_RSFT|MOD_RALT|MOD_RGUI)": "OSM(MOD_RCTL|MOD_RSFT|MOD_RALT|MOD_RGUI)",
  "TT(0)": "TT(0)",
  "TT(1)": "TT(1)",
  "TT(2)": "TT(2)",
  "TT(3)": "TT(3)",
  "TT(4)": "TT(4)",
  "TT(5)": "TT(5)",
  "TT(6)": "TT(6)",
  "TT(7)": "TT(7)",
  "TT(8)": "TT(8)",
  "TT(9)": "TT(9)",
  "TT(10)": "TT(10)",
  "TT(11)": "TT(11)",
  "TT(12)": "TT(12)",
  "TT(13)": "TT(13)",
  "TT(14)": "TT(14)",
  "TT(15)": "TT(15)",
  "TT(16)": "TT(16)",
  "TT(17)": "TT(17)",
  "TT(18)": "TT(18)",
  "TT(19)": "TT(19)",
  "TT(20)": "TT(20)",
  "TT(21)": "TT(21)",
  "TT(22)": "TT(22)",
  "TT(23)": "TT(23)",
  "TT(24)": "TT(24)",
  "TT(25)": "TT(25)",
  "TT(26)": "TT(26)",
  "TT(27)": "TT(27)",
  "TT(28)": "TT(28)",
  "TT(29)": "TT(29)",
  "TT(30)": "TT(30)",
  "TT(31)": "TT(31)",
  "TD(0)": "TD(0)",
  "TD(1)": "TD(1)",
  "TD(2)": "TD(2)",
  "TD(3)": "TD(3)",
  "TD(4)": "TD(4)",
  "TD(5)": "TD(5)",
  "TD(6)": "TD(6)",
  "TD(7)": "TD(7)",
  "TD(8)": "TD(8)",
  "TD(9)": "TD(9)",
  "TD(10)": "TD(10)",
  "TD(11)": "TD(11)",
  "TD(12)": "TD(12)",
  "TD(13)": "TD(13)",
  "TD(14)": "TD(14)",
  "TD(15)": "TD(15)",
  "TD(16)": "TD(16)",
  "TD(17)": "TD(17)",
  "TD(18)": "TD(18)",
  "TD(19)": "TD(19)",
  "TD(20)": "TD(20)",
  "TD(21)": "TD(21)",
  "TD(22)": "TD(22)",
  "TD(23)": "TD(23)",
  "TD(24)": "TD(24)",
  "TD(25)": "TD(25)",
  "TD(26)": "TD(26)",
  "TD(27)": "TD(27)",
  "TD(28)": "TD(28)",
  "TD(29)": "TD(29)",
  "TD(30)": "TD(30)",
  "TD(31)": "TD(31)",
  "TD(32)": "TD(32)",
  "TD(33)": "TD(33)",
  "TD(34)": "TD(34)",
  "TD(35)": "TD(35)",
  "TD(36)": "TD(36)",
  "TD(37)": "TD(37)",
  "TD(38)": "TD(38)",
  "TD(39)": "TD(39)",
  "TD(40)": "TD(40)",
  "TD(41)": "TD(41)",
  "TD(42)": "TD(42)",
  "TD(43)": "TD(43)",
  "TD(44)": "TD(44)",
  "TD(45)": "TD(45)",
  "TD(46)": "TD(46)",
  "TD(47)": "TD(47)",
  "TD(48)": "TD(48)",
  "TD(49)": "TD(49)",
  "TD(50)": "TD(50)",
  "TD(51)": "TD(51)",
  "TD(52)": "TD(52)",
  "TD(53)": "TD(53)",
  "TD(54)": "TD(54)",
  "TD(55)": "TD(55)",
  "TD(56)": "TD(56)",
  "TD(57)": "TD(57)",
  "TD(58)": "TD(58)",
  "TD(59)": "TD(59)",
  "TD(60)": "TD(60)",
  "TD(61)": "TD(61)",
  "TD(62)": "TD(62)",
  "TD(63)": "TD(63)",
  "TD(64)": "TD(64)",
  "TD(65)": "TD(65)",
  "TD(66)": "TD(66)",
  "TD(67)": "TD(67)",
  "TD(68)": "TD(68)",
  "TD(69)": "TD(69)",
  "TD(70)": "TD(70)",
  "TD(71)": "TD(71)",
  "TD(72)": "TD(72)",
  "TD(73)": "TD(73)",
  "TD(74)": "TD(74)",
  "TD(75)": "TD(75)",
  "TD(76)": "TD(76)",
  "TD(77)": "TD(77)",
  "TD(78)": "TD(78)",
  "TD(79)": "TD(79)",
  "TD(80)": "TD(80)",
  "TD(81)": "TD(81)",
  "TD(82)": "TD(82)",
  "TD(83)": "TD(83)",
  "TD(84)": "TD(84)",
  "TD(85)": "TD(85)",
  "TD(86)": "TD(86)",
  "TD(87)": "TD(87)",
  "TD(88)": "TD(88)",
  "TD(89)": "TD(89)",
  "TD(90)": "TD(90)",
  "TD(91)": "TD(91)",
  "TD(92)": "TD(92)",
  "TD(93)": "TD(93)",
  "TD(94)": "TD(94)",
  "TD(95)": "TD(95)",
  "TD(96)": "TD(96)",
  "TD(97)": "TD(97)",
  "TD(98)": "TD(98)",
  "TD(99)": "TD(99)",
  "TD(100)": "TD(100)",
  "TD(101)": "TD(101)",
  "TD(102)": "TD(102)",
  "TD(103)": "TD(103)",
  "TD(104)": "TD(104)",
  "TD(105)": "TD(105)",
  "TD(106)": "TD(106)",
  "TD(107)": "TD(107)",
  "TD(108)": "TD(108)",
  "TD(109)": "TD(109)",
  "TD(110)": "TD(110)",
  "TD(111)": "TD(111)",
  "TD(112)": "TD(112)",
  "TD(113)": "TD(113)",
  "TD(114)": "TD(114)",
  "TD(115)": "TD(115)",
  "TD(116)": "TD(116)",
  "TD(117)": "TD(117)",
  "TD(118)": "TD(118)",
  "TD(119)": "TD(119)",
  "TD(120)": "TD(120)",
  "TD(121)": "TD(121)",
  "TD(122)": "TD(122)",
  "TD(123)": "TD(123)",
  "TD(124)": "TD(124)",
  "TD(125)": "TD(125)",
  "TD(126)": "TD(126)",
  "TD(127)": "TD(127)",
  "TD(128)": "TD(128)",
  "TD(129)": "TD(129)",
  "TD(130)": "TD(130)",
  "TD(131)": "TD(131)",
  "TD(132)": "TD(132)",
  "TD(133)": "TD(133)",
  "TD(134)": "TD(134)",
  "TD(135)": "TD(135)",
  "TD(136)": "TD(136)",
  "TD(137)": "TD(137)",
  "TD(138)": "TD(138)",
  "TD(139)": "TD(139)",
  "TD(140)": "TD(140)",
  "TD(141)": "TD(141)",
  "TD(142)": "TD(142)",
  "TD(143)": "TD(143)",
  "TD(144)": "TD(144)",
  "TD(145)": "TD(145)",
  "TD(146)": "TD(146)",
  "TD(147)": "TD(147)",
  "TD(148)": "TD(148)",
  "TD(149)": "TD(149)",
  "TD(150)": "TD(150)",
  "TD(151)": "TD(151)",
  "TD(152)": "TD(152)",
  "TD(153)": "TD(153)",
  "TD(154)": "TD(154)",
  "TD(155)": "TD(155)",
  "TD(156)": "TD(156)",
  "TD(157)": "TD(157)",
  "TD(158)": "TD(158)",
  "TD(159)": "TD(159)",
  "TD(160)": "TD(160)",
  "TD(161)": "TD(161)",
  "TD(162)": "TD(162)",
  "TD(163)": "TD(163)",
  "TD(164)": "TD(164)",
  "TD(165)": "TD(165)",
  "TD(166)": "TD(166)",
  "TD(167)": "TD(167)",
  "TD(168)": "TD(168)",
  "TD(169)": "TD(169)",
  "TD(170)": "TD(170)",
  "TD(171)": "TD(171)",
  "TD(172)": "TD(172)",
  "TD(173)": "TD(173)",
  "TD(174)": "TD(174)",
  "TD(175)": "TD(175)",
  "TD(176)": "TD(176)",
  "TD(177)": "TD(177)",
  "TD(178)": "TD(178)",
  "TD(179)": "TD(179)",
  "TD(180)": "TD(180)",
  "TD(181)": "TD(181)",
  "TD(182)": "TD(182)",
  "TD(183)": "TD(183)",
  "TD(184)": "TD(184)",
  "TD(185)": "TD(185)",
  "TD(186)": "TD(186)",
  "TD(187)": "TD(187)",
  "TD(188)": "TD(188)",
  "TD(189)": "TD(189)",
  "TD(190)": "TD(190)",
  "TD(191)": "TD(191)",
  "TD(192)": "TD(192)",
  "TD(193)": "TD(193)",
  "TD(194)": "TD(194)",
  "TD(195)": "TD(195)",
  "TD(196)": "TD(196)",
  "TD(197)": "TD(197)",
  "TD(198)": "TD(198)",
  "TD(199)": "TD(199)",
  "TD(200)": "TD(200)",
  "TD(201)": "TD(201)",
  "TD(202)": "TD(202)",
  "TD(203)": "TD(203)",
  "TD(204)": "TD(204)",
  "TD(205)": "TD(205)",
  "TD(206)": "TD(206)",
  "TD(207)": "TD(207)",
  "TD(208)": "TD(208)",
  "TD(209)": "TD(209)",
  "TD(210)": "TD(210)",
  "TD(211)": "TD(211)",
  "TD(212)": "TD(212)",
  "TD(213)": "TD(213)",
  "TD(214)": "TD(214)",
  "TD(215)": "TD(215)",
  "TD(216)": "TD(216)",
  "TD(217)": "TD(217)",
  "TD(218)": "TD(218)",
  "TD(219)": "TD(219)",
  "TD(220)": "TD(220)",
  "TD(221)": "TD(221)",
  "TD(222)": "TD(222)",
  "TD(223)": "TD(223)",
  "TD(224)": "TD(224)",
  "TD(225)": "TD(225)",
  "TD(226)": "TD(226)",
  "TD(227)": "TD(227)",
  "TD(228)": "TD(228)",
  "TD(229)": "TD(229)",
  "TD(230)": "TD(230)",
  "TD(231)": "TD(231)",
  "TD(232)": "TD(232)",
  "TD(233)": "TD(233)",
  "TD(234)": "TD(234)",
  "TD(235)": "TD(235)",
  "TD(236)": "TD(236)",
  "TD(237)": "TD(237)",
  "TD(238)": "TD(238)",
  "TD(239)": "TD(239)",
  "TD(240)": "TD(240)",
  "TD(241)": "TD(241)",
  "TD(242)": "TD(242)",
  "TD(243)": "TD(243)",
  "TD(244)": "TD(244)",
  "TD(245)": "TD(245)",
  "TD(246)": "TD(246)",
  "TD(247)": "TD(247)",
  "TD(248)": "TD(248)",
  "TD(249)": "TD(249)",
  "TD(250)": "TD(250)",
  "TD(251)": "TD(251)",
  "TD(252)": "TD(252)",
  "TD(253)": "TD(253)",
  "TD(254)": "TD(254)",
  "TD(255)": "TD(255)",
  "MAGIC_SWAP_CONTROL_CAPSLOCK": "MAGIC_SWAP_CONTROL_CAPSLOCK",
  "MAGIC_UNSWAP_CONTROL_CAPSLOCK": "MAGIC_UNSWAP_CONTROL_CAPSLOCK",
  "MAGIC_UNCAPSLOCK_TO_CONTROL": "MAGIC_UNCAPSLOCK_TO_CONTROL",
  "MAGIC_CAPSLOCK_TO_CONTROL": "MAGIC_CAPSLOCK_TO_CONTROL",
  "MAGIC_SWAP_LALT_LGUI": "MAGIC_SWAP_LALT_LGUI",
  "MAGIC_UNSWAP_LALT_LGUI": "MAGIC_UNSWAP_LALT_LGUI",
  "MAGIC_SWAP_RALT_RGUI": "MAGIC_SWAP_RALT_RGUI",
  "MAGIC_UNSWAP_RALT_RGUI": "MAGIC_UNSWAP_RALT_RGUI",
  "MAGIC_UNNO_GUI": "MAGIC_UNNO_GUI",
  "MAGIC_NO_GUI": "MAGIC_NO_GUI",
  "MAGIC_SWAP_GRAVE_ESC": "MAGIC_SWAP_GRAVE_ESC",
  "MAGIC_UNSWAP_GRAVE_ESC": "MAGIC_UNSWAP_GRAVE_ESC",
  "MAGIC_SWAP_BACKSLASH_BACKSPACE": "MAGIC_SWAP_BACKSLASH_BACKSPACE",
  "MAGIC_UNSWAP_BACKSLASH_BACKSPACE": "MAGIC_UNSWAP_BACKSLASH_BACKSPACE",
  "MAGIC_HOST_NKRO": "MAGIC_HOST_NKRO",
  "MAGIC_UNHOST_NKRO": "MAGIC_UNHOST_NKRO",
  "MAGIC_TOGGLE_NKRO": "MAGIC_TOGGLE_NKRO",
  "MAGIC_SWAP_ALT_GUI": "MAGIC_SWAP_ALT_GUI",
  "MAGIC_UNSWAP_ALT_GUI": "MAGIC_UNSWAP_ALT_GUI",
  "MAGIC_TOGGLE_ALT_GUI": "MAGIC_TOGGLE_ALT_GUI",
  "MAGIC_SWAP_LCTL_LGUI": "MAGIC_SWAP_LCTL_LGUI",
  "MAGIC_UNSWAP_LCTL_LGUI": "MAGIC_UNSWAP_LCTL_LGUI",
  "MAGIC_SWAP_RCTL_RGUI": "MAGIC_SWAP_RCTL_RGUI",
  "MAGIC_UNSWAP_RCTL_RGUI": "MAGIC_UNSWAP_RCTL_RGUI",
  "MAGIC_SWAP_CTL_GUI": "MAGIC_SWAP_CTL_GUI",
  "MAGIC_UNSWAP_CTL_GUI": "MAGIC_UNSWAP_CTL_GUI",
  "MAGIC_TOGGLE_CTL_GUI": "MAGIC_TOGGLE_CTL_GUI",
  "MAGIC_EE_HANDS_LEFT": "MAGIC_EE_HANDS_LEFT",
  "MAGIC_EE_HANDS_RIGHT": "MAGIC_EE_HANDS_RIGHT",
  "MI_C": "MI_C",
  "MI_Cs": "MI_Cs",
  "MI_D": "MI_D",
  "MI_Ds": "MI_Ds",
  "MI_E": "MI_E",
  "MI_F": "MI_F",
  "MI_Fs": "MI_Fs",
  "MI_G": "MI_G",
  "MI_Gs": "MI_Gs",
  "MI_A": "MI_A",
  "MI_As": "MI_As",
  "MI_B": "MI_B",
  "MI_C_1": "MI_C_1",
  "MI_Cs_1": "MI_Cs_1",
  "MI_D_1": "MI_D_1",
  "MI_Ds_1": "MI_Ds_1",
  "MI_E_1": "MI_E_1",
  "MI_F_1": "MI_F_1",
  "MI_Fs_1": "MI_Fs_1",
  "MI_G_1": "MI_G_1",
  "MI_Gs_1": "MI_Gs_1",
  "MI_A_1": "MI_A_1",
  "MI_As_1": "MI_As_1",
  "MI_B_1": "MI_B_1",
  "MI_C_2": "MI_C_2",
  "MI_Cs_2": "MI_Cs_2",
  "MI_D_2": "MI_D_2",
  "MI_Ds_2": "MI_Ds_2",
  "MI_E_2": "MI_E_2",
  "MI_F_2": "MI_F_2",
  "MI_Fs_2": "MI_Fs_2",
  "MI_G_2": "MI_G_2",
  "MI_Gs_2": "MI_Gs_2",
  "MI_A_2": "MI_A_2",
  "MI_As_2": "MI_As_2",
  "MI_B_2": "MI_B_2",
  "MI_C_3": "MI_C_3",
  "MI_Cs_3": "MI_Cs_3",
  "MI_D_3": "MI_D_3",
  "MI_Ds_3": "MI_Ds_3",
  "MI_E_3": "MI_E_3",
  "MI_F_3": "MI_F_3",
  "MI_Fs_3": "MI_Fs_3",
  "MI_G_3": "MI_G_3",
  "MI_Gs_3": "MI_Gs_3",
  "MI_A_3": "MI_A_3",
  "MI_As_3": "MI_As_3",
  "MI_B_3": "MI_B_3",
  "MI_C_4": "MI_C_4",
  "MI_Cs_4": "MI_Cs_4",
  "MI_D_4": "MI_D_4",
  "MI_Ds_4": "MI_Ds_4",
  "MI_E_4": "MI_E_4",
  "MI_F_4": "MI_F_4",
  "MI_Fs_4": "MI_Fs_4",
  "MI_G_4": "MI_G_4",
  "MI_Gs_4": "MI_Gs_4",
  "MI_A_4": "MI_A_4",
  "MI_As_4": "MI_As_4",
  "MI_B_4": "MI_B_4",
  "MI_C_5": "MI_C_5",
  "MI_Cs_5": "MI_Cs_5",
  "MI_D_5": "MI_D_5",
  "MI_Ds_5": "MI_Ds_5",
  "MI_E_5": "MI_E_5",
  "MI_F_5": "MI_F_5",
  "MI_Fs_5": "MI_Fs_5",
  "MI_G_5": "MI_G_5",
  "MI_Gs_5": "MI_Gs_5",
  "MI_A_5": "MI_A_5",
  "MI_As_5": "MI_As_5",
  "MI_B_5": "MI_B_5",
  "MI_OCT_N2": "MI_OCT_N2",
  "MI_OCT_N1": "MI_OCT_N1",
  "MI_OCT_0": "MI_OCT_0",
  "MI_OCT_1": "MI_OCT_1",
  "MI_OCT_2": "MI_OCT_2",
  "MI_OCT_3": "MI_OCT_3",
  "MI_OCT_4": "MI_OCT_4",
  "MI_OCT_5": "MI_OCT_5",
  "MI_OCT_6": "MI_OCT_6",
  "MI_OCT_7": "MI_OCT_7",
  "MI_OCTD": "MI_OCTD",
  "MI_OCTU": "MI_OCTU",
  "MI_TRNS_N6": "MI_TRNS_N6",
  "MI_TRNS_N5": "MI_TRNS_N5",
  "MI_TRNS_N4": "MI_TRNS_N4",
  "MI_TRNS_N3": "MI_TRNS_N3",
  "MI_TRNS_N2": "MI_TRNS_N2",
  "MI_TRNS_N1": "MI_TRNS_N1",
  "MI_TRNS_0": "MI_TRNS_0",
  "MI_TRNS_1": "MI_TRNS_1",
  "MI_TRNS_2": "MI_TRNS_2",
  "MI_TRNS_3": "MI_TRNS_3",
  "MI_TRNS_4": "MI_TRNS_4",
  "MI_TRNS_5": "MI_TRNS_5",
  "MI_TRNS_6": "MI_TRNS_6",
  "MI_TRNSD": "MI_TRNSD",
  "MI_TRNSU": "MI_TRNSU",
  "MI_VEL_1": "MI_VEL_1",
  "MI_VEL_2": "MI_VEL_2",
  "MI_VEL_3": "MI_VEL_3",
  "MI_VEL_4": "MI_VEL_4",
  "MI_VEL_5": "MI_VEL_5",
  "MI_VEL_6": "MI_VEL_6",
  "MI_VEL_7": "MI_VEL_7",
  "MI_VEL_8": "MI_VEL_8",
  "MI_VEL_9": "MI_VEL_9",
  "MI_VEL_10": "MI_VEL_10",
  "MI_VELD": "MI_VELD",
  "MI_VELU": "MI_VELU",
  "MI_CH1": "MI_CH1",
  "MI_CH2": "MI_CH2",
  "MI_CH3": "MI_CH3",
  "MI_CH4": "MI_CH4",
  "MI_CH5": "MI_CH5",
  "MI_CH6": "MI_CH6",
  "MI_CH7": "MI_CH7",
  "MI_CH8": "MI_CH8",
  "MI_CH9": "MI_CH9",
  "MI_CH10": "MI_CH10",
  "MI_CH11": "MI_CH11",
  "MI_CH12": "MI_CH12",
  "MI_CH13": "MI_CH13",
  "MI_CH14": "MI_CH14",
  "MI_CH15": "MI_CH15",
  "MI_CH16": "MI_CH16",
  "MI_CHD": "MI_CHD",
  "MI_CHU": "MI_CHU",
  "MI_ALLOFF": "MI_ALLOFF",
  "MI_SUS": "MI_SUS",
  "MI_PORT": "MI_PORT",
  "MI_SOST": "MI_SOST",
  "MI_SOFT": "MI_SOFT",
  "MI_LEG": "MI_LEG",
  "MI_MOD": "MI_MOD",
  "MI_MODSD": "MI_MODSD",
  "MI_MODSU": "MI_MODSU",
  "MI_BENDD": "MI_BENDD",
  "MI_BENDU": "MI_BENDU",
  "AU_ON": "AU_ON",
  "AU_OFF": "AU_OFF",
  "AU_TOG": "AU_TOG",
  "CLICKY_TOGGLE": "CLICKY_TOGGLE",
  "CLICKY_UP": "CLICKY_UP",
  "CLICKY_DOWN": "CLICKY_DOWN",
  "CLICKY_RESET": "CLICKY_RESET",
  "MU_ON": "MU_ON",
  "MU_OFF": "MU_OFF",
  "MU_TOG": "MU_TOG",
  "MU_MOD": "MU_MOD",
  "M0": "M0",
  "M1": "M1",
  "M2": "M2",
  "M3": "M3",
  "M4": "M4",
  "M5": "M5",
  "M6": "M6",
  "M7": "M7",
  "M8": "M8",
  "M9": "M9",
  "M10": "M10",
  "M11": "M11",
  "M12": "M12",
  "M13": "M13",
  "M14": "M14",
  "M15": "M15",
  "M16": "M16",
  "M17": "M17",
  "M18": "M18",
  "M19": "M19",
  "M20": "M20",
  "M21": "M21",
  "M22": "M22",
  "M23": "M23",
  "M24": "M24",
  "M25": "M25",
  "M26": "M26",
  "M27": "M27",
  "M28": "M28",
  "M29": "M29",
  "M30": "M30",
  "M31": "M31",
  "M32": "M32",
  "M33": "M33",
  "M34": "M34",
  "M35": "M35",
  "M36": "M36",
  "M37": "M37",
  "M38": "M38",
  "M39": "M39",
  "M40": "M40",
  "M41": "M41",
  "M42": "M42",
  "M43": "M43",
  "M44": "M44",
  "M45": "M45",
  "M46": "M46",
  "M47": "M47",
  "M48": "M48",
  "M49": "M49",
  "M50": "M50",
  "M51": "M51",
  "M52": "M52",
  "M53": "M53",
  "M54": "M54",
  "M55": "M55",
  "M56": "M56",
  "M57": "M57",
  "M58": "M58",
  "M59": "M59",
  "M60": "M60",
  "M61": "M61",
  "M62": "M62",
  "M63": "M63",
  "M64": "M64",
  "M65": "M65",
  "M66": "M66",
  "M67": "M67",
  "M68": "M68",
  "M69": "M69",
  "M70": "M70",
  "M71": "M71",
  "M72": "M72",
  "M73": "M73",
  "M74": "M74",
  "M75": "M75",
  "M76": "M76",
  "M77": "M77",
  "M78": "M78",
  "M79": "M79",
  "M80": "M80",
  "M81": "M81",
  "M82": "M82",
  "M83": "M83",
  "M84": "M84",
  "M85": "M85",
  "M86": "M86",
  "M87": "M87",
  "M88": "M88",
  "M89": "M89",
  "M90": "M90",
  "M91": "M91",
  "M92": "M92",
  "M93": "M93",
  "M94": "M94",
  "M95": "M95",
  "M96": "M96",
  "M97": "M97",
  "M98": "M98",
  "M99": "M99",
  "M100": "M100",
  "M101": "M101",
  "M102": "M102",
  "M103": "M103",
  "M104": "M104",
  "M105": "M105",
  "M106": "M106",
  "M107": "M107",
  "M108": "M108",
  "M109": "M109",
  "M110": "M110",
  "M111": "M111",
  "M112": "M112",
  "M113": "M113",
  "M114": "M114",
  "M115": "M115",
  "M116": "M116",
  "M117": "M117",
  "M118": "M118",
  "M119": "M119",
  "M120": "M120",
  "M121": "M121",
  "M122": "M122",
  "M123": "M123",
  "M124": "M124",
  "M125": "M125",
  "M126": "M126",
  "M127": "M127",
  "M128": "M128",
  "M129": "M129",
  "M130": "M130",
  "M131": "M131",
  "M132": "M132",
  "M133": "M133",
  "M134": "M134",
  "M135": "M135",
  "M136": "M136",
  "M137": "M137",
  "M138": "M138",
  "M139": "M139",
  "M140": "M140",
  "M141": "M141",
  "M142": "M142",
  "M143": "M143",
  "M144": "M144",
  "M145": "M145",
  "M146": "M146",
  "M147": "M147",
  "M148": "M148",
  "M149": "M149",
  "M150": "M150",
  "M151": "M151",
  "M152": "M152",
  "M153": "M153",
  "M154": "M154",
  "M155": "M155",
  "M156": "M156",
  "M157": "M157",
  "M158": "M158",
  "M159": "M159",
  "M160": "M160",
  "M161": "M161",
  "M162": "M162",
  "M163": "M163",
  "M164": "M164",
  "M165": "M165",
  "M166": "M166",
  "M167": "M167",
  "M168": "M168",
  "M169": "M169",
  "M170": "M170",
  "M171": "M171",
  "M172": "M172",
  "M173": "M173",
  "M174": "M174",
  "M175": "M175",
  "M176": "M176",
  "M177": "M177",
  "M178": "M178",
  "M179": "M179",
  "M180": "M180",
  "M181": "M181",
  "M182": "M182",
  "M183": "M183",
  "M184": "M184",
  "M185": "M185",
  "M186": "M186",
  "M187": "M187",
  "M188": "M188",
  "M189": "M189",
  "M190": "M190",
  "M191": "M191",
  "M192": "M192",
  "M193": "M193",
  "M194": "M194",
  "M195": "M195",
  "M196": "M196",
  "M197": "M197",
  "M198": "M198",
  "M199": "M199",
  "M200": "M200",
  "M201": "M201",
  "M202": "M202",
  "M203": "M203",
  "M204": "M204",
  "M205": "M205",
  "M206": "M206",
  "M207": "M207",
  "M208": "M208",
  "M209": "M209",
  "M210": "M210",
  "M211": "M211",
  "M212": "M212",
  "M213": "M213",
  "M214": "M214",
  "M215": "M215",
  "M216": "M216",
  "M217": "M217",
  "M218": "M218",
  "M219": "M219",
  "M220": "M220",
  "M221": "M221",
  "M222": "M222",
  "M223": "M223",
  "M224": "M224",
  "M225": "M225",
  "M226": "M226",
  "M227": "M227",
  "M228": "M228",
  "M229": "M229",
  "M230": "M230",
  "M231": "M231",
  "M232": "M232",
  "M233": "M233",
  "M234": "M234",
  "M235": "M235",
  "M236": "M236",
  "M237": "M237",
  "M238": "M238",
  "M239": "M239",
  "M240": "M240",
  "M241": "M241",
  "M242": "M242",
  "M243": "M243",
  "M244": "M244",
  "M245": "M245",
  "M246": "M246",
  "M247": "M247",
  "M248": "M248",
  "M249": "M249",
  "M250": "M250",
  "M251": "M251",
  "M252": "M252",
  "M253": "M253",
  "M254": "M254",
  "M255": "M255",
  "BL_ON": "BL_ON",
  "BL_OFF": "BL_OFF",
  "BL_TOGG": "BL_TOGG",
  "BL_DEC": "BL_DEC",
  "BL_INC": "BL_INC",
  "BL_STEP": "BL_STEP",
  "BL_BRTG": "BL_BRTG",
  "RGB_TOG": "RGB_TOG",
  "RGB_MOD": "RGB_MOD",
  "RGB_RMOD": "RGB_RMOD",
  "RGB_HUI": "RGB_HUI",
  "RGB_HUD": "RGB_HUD",
  "RGB_SAI": "RGB_SAI",
  "RGB_SAD": "RGB_SAD",
  "RGB_VAI": "RGB_VAI",
  "RGB_VAD": "RGB_VAD",
  "RGB_SPI": "RGB_SPI",
  "RGB_SPD": "RGB_SPD",
  "RGB_M_P": "RGB_M_P",
  "RGB_M_B": "RGB_M_B",
  "RGB_M_R": "RGB_M_R",
  "RGB_M_SW": "RGB_M_SW",
  "RGB_M_SN": "RGB_M_SN",
  "RGB_M_K": "RGB_M_K",
  "RGB_M_X": "RGB_M_X",
  "RGB_M_G": "RGB_M_G",
  "RGB_M_T": "RGB_M_T",
  "RESET": "RESET",
  "KC_ASDN": "KC_ASDN",
  "KC_ASUP": "KC_ASUP",
  "KC_ASRP": "KC_ASRP",
  "KC_ASON": "KC_ASON",
  "KC_ASOFF": "KC_ASOFF",
  "KC_ASTG": "KC_ASTG",
  "KC_GESC": "KC_GESC",
  "KC_LCPO": "KC_LCPO",
  "KC_RCPC": "KC_RCPC",
  "KC_LSPO": "KC_LSPO",
  "KC_RSPC": "KC_RSPC",
  "KC_LAPO": "KC_LAPO",
  "KC_RAPC": "KC_RAPC",
  "KC_SFTENT": "KC_SFTENT",
  "HPT_ON": "HPT_ON",
  "HPT_OFF": "HPT_OFF",
  "HPT_TOG": "HPT_TOG",
  "HPT_RST": "HPT_RST",
  "HPT_FBK": "HPT_FBK",
  "HPT_BUZ": "HPT_BUZ",
  "HPT_MODI": "HPT_MODI",
  "HPT_MODD": "HPT_MODD",
  "HPT_CONT": "HPT_CONT",
  "HPT_CONI": "HPT_CONI",
  "HPT_COND": "HPT_COND",
  "HPT_DWLI": "HPT_DWLI",
  "HPT_DWLD": "HPT_DWLD",
  "CMB_ON": "CMB_ON",
  "CMB_OFF": "CMB_OFF",
  "CMB_TOG": "CMB_TOG",
  "DYN_REC_START1": "DYN_REC_START1",
  "DYN_REC_START2": "DYN_REC_START2",
  "DYN_REC_STOP": "DYN_REC_STOP",
  "DYN_MACRO_PLAY1": "DYN_MACRO_PLAY1",
  "DYN_MACRO_PLAY2": "DYN_MACRO_PLAY2",
  "FN_MO13": "FN_MO13",
  "FN_MO23": "FN_MO23",
  "QK_REPEAT_KEY": "QK_REPEAT_KEY",
  "USER00": "USER00",
  "USER01": "USER01",
  "USER02": "USER02",
  "USER03": "USER03",
  "USER04": "USER04",
  "USER05": "USER05",
  "USER06": "USER06",
  "USER07": "USER07",
  "USER08": "USER08",
  "USER09": "USER09",
  "USER10": "USER10",
  "USER11": "USER11",
  "USER12": "USER12",
  "USER13": "USER13",
  "USER14": "USER14",
  "USER15": "USER15",
  "USER16": "USER16",
  "USER17": "USER17",
  "USER18": "USER18",
  "USER19": "USER19",
  "USER20": "USER20",
  "USER21": "USER21",
  "USER22": "USER22",
  "USER23": "USER23",
  "USER24": "USER24",
  "USER25": "USER25",
  "USER26": "USER26",
  "USER27": "USER27",
  "USER28": "USER28",
  "USER29": "USER29",
  "USER30": "USER30",
  "USER31": "USER31",
  "USER32": "USER32",
  "USER33": "USER33",
  "USER34": "USER34",
  "USER35": "USER35",
  "USER36": "USER36",
  "USER37": "USER37",
  "USER38": "USER38",
  "USER39": "USER39",
  "USER40": "USER40",
  "USER41": "USER41",
  "USER42": "USER42",
  "USER43": "USER43",
  "USER44": "USER44",
  "USER45": "USER45",
  "USER46": "USER46",
  "USER47": "USER47",
  "USER48": "USER48",
  "USER49": "USER49",
  "USER50": "USER50",
  "USER51": "USER51",
  "USER52": "USER52",
  "USER53": "USER53",
  "USER54": "USER54",
  "USER55": "USER55",
  "USER56": "USER56",
  "USER57": "USER57",
  "USER58": "USER58",
  "USER59": "USER59",
  "USER60": "USER60",
  "USER61": "USER61",
  "USER62": "USER62",
  "USER63": "USER63",
  "QK_BASIC": "KC_NO",
  "QK_BASIC_MAX": "QK_BASIC_MAX",
  "QK_MODS": "LCTL(kc)",
  "QK_MODS_MAX": "QK_MODS_MAX",
  "QK_MOD_TAP": "QK_MOD_TAP",
  "QK_MOD_TAP_MAX": "QK_MOD_TAP_MAX",
  "QK_LAYER_TAP": "LT0(kc)",
  "QK_LAYER_TAP_MAX": "QK_LAYER_TAP_MAX",
  "QK_LAYER_MOD": "QK_LAYER_MOD",
  "QK_LAYER_MOD_MAX": "QK_LAYER_MOD_MAX",
  "QK_TO": "TO(0)",
  "QK_TO_MAX": "TO(31)",
  "QK_MOMENTARY": "MO(0)",
  "QK_MOMENTARY_MAX": "MO(31)",
  "QK_DEF_LAYER": "DF(0)",
  "QK_DEF_LAYER_MAX": "DF(31)",
  "QK_TOGGLE_LAYER": "TG(0)",
  "QK_TOGGLE_LAYER_MAX": "TG(31)",
  "QK_ONE_SHOT_LAYER": "OSL(0)",
  "QK_ONE_SHOT_LAYER_MAX": "OSL(31)",
  "QK_ONE_SHOT_MOD": "QK_ONE_SHOT_MOD",
  "QK_ONE_SHOT_MOD_MAX": "OSM(MOD_RCTL|MOD_RSFT|MOD_RALT|MOD_RGUI)",
  "QK_LAYER_TAP_TOGGLE": "TT(0)",
  "QK_LAYER_TAP_TOGGLE_MAX": "TT(31)",
  "QK_SWAP_HANDS": "QK_SWAP_HANDS",
  "QK_SWAP_HANDS_MAX": "QK_SWAP_HANDS_MAX",
  "QK_TAP_DANCE": "TD(0)",
  "QK_TAP_DANCE_MAX": "TD(255)",
  "QK_MAGIC": "MAGIC_SWAP_CONTROL_CAPSLOCK",
  "QK_MAGIC_MAX": "QK_MAGIC_MAX",
  "QK_MIDI": "QK_MIDI",
  "QK_MIDI_MAX": "QK_MIDI_MAX",
  "QK_SEQUENCER": "QK_SEQUENCER",
  "QK_SEQUENCER_MAX": "QK_SEQUENCER_MAX",
  "QK_JOYSTICK": "QK_JOYSTICK",
  "QK_JOYSTICK_MAX": "QK_JOYSTICK_MAX",
  "QK_PROGRAMMABLE_BUTTON": "QK_PROGRAMMABLE_BUTTON",
  "QK_PROGRAMMABLE_BUTTON_MAX": "QK_PROGRAMMABLE_BUTTON_MAX",
  "QK_AUDIO": "AU_ON",
  "QK_AUDIO_MAX": "QK_AUDIO_MAX",
  "QK_STENO": "QK_STENO",
  "QK_STENO_MAX": "QK_STENO_MAX",
  "QK_MACRO": "M0",
  "QK_MACRO_MAX": "M127",
  "QK_LIGHTING": "BL_ON",
  "QK_LIGHTING_MAX": "QK_LIGHTING_MAX",
  "QK_QUANTUM": "RESET",
  "QK_QUANTUM_MAX": "QK_QUANTUM_MAX",
  "QK_KB": "USER00",
  "QK_KB_MAX": "USER63",
  "QK_USER": "QK_USER",
  "QK_USER_MAX": "QK_USER_MAX",
  "QK_UNICODEMAP": "QK_UNICODEMAP",
  "QK_UNICODEMAP_MAX": "QK_UNICODEMAP_MAX",
  "QK_UNICODE": "QK_UNICODEMAP",
  "QK_UNICODE_MAX": "QK_UNICODE_MAX",
  "QK_UNICODEMAP_PAIR": "QK_UNICODEMAP_PAIR",
  "QK_UNICODEMAP_PAIR_MAX": "QK_UNICODE_MAX",
  "KC_TRANSPARENT": "KC_TRNS",
  "KC_BACKSPACE": "KC_BSPACE",
  "KC_LEFT_BRACKET": "KC_LBRACKET",
  "KC_RIGHT_BRACKET": "KC_RBRACKET",
  "KC_BACKSLASH": "KC_BSLASH",
  "KC_SEMICOLON": "KC_SCOLON",
  "KC_CAPS_LOCK": "KC_CAPSLOCK",
  "KC_PRINT_SCREEN": "KC_PSCREEN",
  "KC_SCROLL_LOCK": "KC_SCROLLLOCK",
  "KC_PAGE_UP": "KC_PGUP",
  "KC_PAGE_DOWN": "KC_PGDOWN",
  "KC_NUM_LOCK": "KC_NUMLOCK",
  "KC_NONUS_BACKSLASH": "KC_NONUS_BSLASH",
  "KC_KB_POWER": "KC_KB_POWER",
  "KC_EXECUTE": "KC_EXEC",
  "KC_MENU": "KC_MENU",
  "KC_SELECT": "KC_SLCT",
  "KC_AGAIN": "KC_REDO",
  "KC_PASTE": "KC_PSTE",
  "KC_KB_MUTE": "KC_KB_MUTE",
  "KC_KB_VOLUME_UP": "KC_VOLUP",
  "KC_KB_VOLUME_DOWN": "KC_VOLDOWN",
  "KC_LOCKING_CAPS_LOCK": "KC_LCAP",
  "KC_LOCKING_NUM_LOCK": "KC_LNUM",
  "KC_LOCKING_SCROLL_LOCK": "KC_LSCR",
  "KC_KP_EQUAL_AS400": "KC_KP_EQUAL_AS400",
  "KC_INTERNATIONAL_1": "KC_RO",
  "KC_INTERNATIONAL_2": "KC_KANA",
  "KC_INTERNATIONAL_3": "KC_JYEN",
  "KC_INTERNATIONAL_4": "KC_HENK",
  "KC_INTERNATIONAL_5": "KC_MHEN",
  "KC_INTERNATIONAL_6": "KC_INTERNATIONAL_6",
  "KC_INTERNATIONAL_7": "KC_INTERNATIONAL_7",
  "KC_INTERNATIONAL_8": "KC_INTERNATIONAL_8",
  "KC_INTERNATIONAL_9": "KC_INTERNATIONAL_9",
  "KC_LANGUAGE_1": "KC_LANG1",
  "KC_LANGUAGE_2": "KC_LANG2",
  "KC_LANGUAGE_3": "KC_LANGUAGE_3",
  "KC_LANGUAGE_4": "KC_LANGUAGE_4",
  "KC_LANGUAGE_5": "KC_LANGUAGE_5",
  "KC_LANGUAGE_6": "KC_LANGUAGE_6",
  "KC_LANGUAGE_7": "KC_LANGUAGE_7",
  "KC_LANGUAGE_8": "KC_LANGUAGE_8",
  "KC_LANGUAGE_9": "KC_LANGUAGE_9",
  "KC_ALTERNATE_ERASE": "KC_ALTERNATE_ERASE",
  "KC_SYSTEM_REQUEST": "KC_SYSTEM_REQUEST",
  "KC_CANCEL": "KC_CANCEL",
  "KC_CLEAR": "KC_CLEAR",
  "KC_PRIOR": "KC_PRIOR",
  "KC_RETURN": "KC_RETURN",
  "KC_SEPARATOR": "KC_SEPARATOR",
  "KC_OUT": "KC_OUT",
  "KC_OPER": "KC_OPER",
  "KC_CLEAR_AGAIN": "KC_CLEAR_AGAIN",
  "KC_CRSEL": "KC_CRSEL",
  "KC_EXSEL": "KC_EXSEL",
  "KC_SYSTEM_POWER": "KC_PWR",
  "KC_SYSTEM_SLEEP": "KC_SLEP",
  "KC_SYSTEM_WAKE": "KC_WAKE",
  "KC_AUDIO_MUTE": "KC_MUTE",
  "KC_AUDIO_VOL_UP": "KC_VOLU",
  "KC_AUDIO_VOL_DOWN": "KC_VOLD",
  "KC_MEDIA_NEXT_TRACK": "KC_MNXT",
  "KC_MEDIA_PREV_TRACK": "KC_MPRV",
  "KC_MEDIA_STOP": "KC_MSTP",
  "KC_MEDIA_PLAY_PAUSE": "KC_MPLY",
  "KC_MEDIA_SELECT": "KC_MSEL",
  "KC_MEDIA_EJECT": "KC_EJCT",
  "KC_CALCULATOR": "KC_CALC",
  "KC_MY_COMPUTER": "KC_MYCM",
  "KC_WWW_SEARCH": "KC_WSCH",
  "KC_WWW_HOME": "KC_WHOM",
  "KC_WWW_BACK": "KC_WBAK",
  "KC_WWW_FORWARD": "KC_WFWD",
  "KC_WWW_STOP": "KC_WSTP",
  "KC_WWW_REFRESH": "KC_WREF",
  "KC_WWW_FAVORITES": "KC_WFAV",
  "KC_MEDIA_FAST_FORWARD": "KC_MFFD",
  "KC_MEDIA_REWIND": "KC_MRWD",
  "KC_BRIGHTNESS_UP": "KC_BRIU",
  "KC_BRIGHTNESS_DOWN": "KC_BRID",
  "KC_CONTROL_PANEL": "KC_CONTROL_PANEL",
  "KC_ASSISTANT": "KC_ASSISTANT",
  "KC_MISSION_CONTROL": "KC_MISSION_CONTROL",
  "KC_LAUNCHPAD": "KC_LAUNCHPAD",
  "KC_MS_UP": "KC_MS_U",
  "KC_MS_DOWN": "KC_MS_D",
  "KC_MS_LEFT": "KC_MS_L",
  "KC_MS_RIGHT": "KC_MS_R",
  "KC_MS_BTN1": "KC_BTN1",
  "KC_MS_BTN2": "KC_BTN2",
  "KC_MS_BTN3": "KC_BTN3",
  "KC_MS_BTN4": "KC_BTN4",
  "KC_MS_BTN5": "KC_BTN5",
  "KC_MS_BTN6": "KC_MS_BTN6",
  "KC_MS_BTN7": "KC_MS_BTN7",
  "KC_MS_BTN8": "KC_MS_BTN8",
  "KC_MS_WH_UP": "KC_WH_U",
  "KC_MS_WH_DOWN": "KC_WH_D",
  "KC_MS_WH_LEFT": "KC_WH_L",
  "KC_MS_WH_RIGHT": "KC_WH_R",
  "KC_MS_ACCEL0": "KC_ACL0",
  "KC_MS_ACCEL1": "KC_ACL1",
  "KC_MS_ACCEL2": "KC_ACL2",
  "KC_LEFT_CTRL": "KC_LCTRL",
  "KC_LEFT_SHIFT": "KC_LSHIFT",
  "KC_LEFT_ALT": "KC_LALT",
  "KC_LEFT_GUI": "KC_LGUI",
  "KC_RIGHT_CTRL": "KC_RCTRL",
  "KC_RIGHT_SHIFT": "KC_RSHIFT",
  "KC_RIGHT_ALT": "KC_RALT",
  "KC_RIGHT_GUI": "KC_RGUI",
  "QK_SWAP_HANDS_TOGGLE": "QK_SWAP_HANDS_TOGGLE",
  "QK_SWAP_HANDS_TAP_TOGGLE": "QK_SWAP_HANDS_TAP_TOGGLE",
  "QK_SWAP_HANDS_MOMENTARY_ON": "QK_SWAP_HANDS_MOMENTARY_ON",
  "QK_SWAP_HANDS_MOMENTARY_OFF": "QK_SWAP_HANDS_MOMENTARY_OFF",
  "QK_SWAP_HANDS_OFF": "QK_SWAP_HANDS_OFF",
  "QK_SWAP_HANDS_ON": "QK_SWAP_HANDS_ON",
  "QK_SWAP_HANDS_ONE_SHOT": "QK_SWAP_HANDS_ONE_SHOT",
  "QK_MAGIC_SWAP_CONTROL_CAPS_LOCK": "MAGIC_SWAP_CONTROL_CAPSLOCK",
  "QK_MAGIC_UNSWAP_CONTROL_CAPS_LOCK": "MAGIC_UNSWAP_CONTROL_CAPSLOCK",
  "QK_MAGIC_TOGGLE_CONTROL_CAPS_LOCK": "QK_MAGIC_TOGGLE_CONTROL_CAPS_LOCK",
  "QK_MAGIC_CAPS_LOCK_AS_CONTROL_OFF": "MAGIC_UNCAPSLOCK_TO_CONTROL",
  "QK_MAGIC_CAPS_LOCK_AS_CONTROL_ON": "MAGIC_CAPSLOCK_TO_CONTROL",
  "QK_MAGIC_SWAP_LALT_LGUI": "MAGIC_SWAP_LALT_LGUI",
  "QK_MAGIC_UNSWAP_LALT_LGUI": "MAGIC_UNSWAP_LALT_LGUI",
  "QK_MAGIC_SWAP_RALT_RGUI": "MAGIC_SWAP_RALT_RGUI",
  "QK_MAGIC_UNSWAP_RALT_RGUI": "MAGIC_UNSWAP_RALT_RGUI",
  "QK_MAGIC_GUI_ON": "MAGIC_UNNO_GUI",
  "QK_MAGIC_GUI_OFF": "MAGIC_NO_GUI",
  "QK_MAGIC_TOGGLE_GUI": "QK_MAGIC_TOGGLE_GUI",
  "QK_MAGIC_SWAP_GRAVE_ESC": "MAGIC_SWAP_GRAVE_ESC",
  "QK_MAGIC_UNSWAP_GRAVE_ESC": "MAGIC_UNSWAP_GRAVE_ESC",
  "QK_MAGIC_SWAP_BACKSLASH_BACKSPACE": "MAGIC_SWAP_BACKSLASH_BACKSPACE",
  "QK_MAGIC_UNSWAP_BACKSLASH_BACKSPACE": "MAGIC_UNSWAP_BACKSLASH_BACKSPACE",
  "QK_MAGIC_TOGGLE_BACKSLASH_BACKSPACE": "QK_MAGIC_TOGGLE_BACKSLASH_BACKSPACE",
  "QK_MAGIC_NKRO_ON": "MAGIC_HOST_NKRO",
  "QK_MAGIC_NKRO_OFF": "MAGIC_UNHOST_NKRO",
  "QK_MAGIC_TOGGLE_NKRO": "MAGIC_TOGGLE_NKRO",
  "QK_MAGIC_SWAP_ALT_GUI": "MAGIC_SWAP_ALT_GUI",
  "QK_MAGIC_UNSWAP_ALT_GUI": "MAGIC_UNSWAP_ALT_GUI",
  "QK_MAGIC_TOGGLE_ALT_GUI": "MAGIC_TOGGLE_ALT_GUI",
  "QK_MAGIC_SWAP_LCTL_LGUI": "MAGIC_SWAP_LCTL_LGUI",
  "QK_MAGIC_UNSWAP_LCTL_LGUI": "MAGIC_UNSWAP_LCTL_LGUI",
  "QK_MAGIC_SWAP_RCTL_RGUI": "MAGIC_SWAP_RCTL_RGUI",
  "QK_MAGIC_UNSWAP_RCTL_RGUI": "MAGIC_UNSWAP_RCTL_RGUI",
  "QK_MAGIC_SWAP_CTL_GUI": "MAGIC_SWAP_CTL_GUI",
  "QK_MAGIC_UNSWAP_CTL_GUI": "MAGIC_UNSWAP_CTL_GUI",
  "QK_MAGIC_TOGGLE_CTL_GUI": "MAGIC_TOGGLE_CTL_GUI",
  "QK_MAGIC_EE_HANDS_LEFT": "MAGIC_EE_HANDS_LEFT",
  "QK_MAGIC_EE_HANDS_RIGHT": "MAGIC_EE_HANDS_RIGHT",
  "QK_MAGIC_SWAP_ESCAPE_CAPS_LOCK": "QK_MAGIC_SWAP_ESCAPE_CAPS_LOCK",
  "QK_MAGIC_UNSWAP_ESCAPE_CAPS_LOCK": "QK_MAGIC_UNSWAP_ESCAPE_CAPS_LOCK",
  "QK_MAGIC_TOGGLE_ESCAPE_CAPS_LOCK": "QK_MAGIC_TOGGLE_ESCAPE_CAPS_LOCK",
  "QK_MIDI_ON": "QK_MIDI",
  "QK_MIDI_OFF": "QK_MIDI_OFF",
  "QK_MIDI_TOGGLE": "QK_MIDI_TOGGLE",
  "QK_MIDI_NOTE_C_0": "MI_C",
  "QK_MIDI_NOTE_C_SHARP_0": "MI_Cs",
  "QK_MIDI_NOTE_D_0": "MI_D",
  "QK_MIDI_NOTE_D_SHARP_0": "MI_Ds",
  "QK_MIDI_NOTE_E_0": "MI_E",
  "QK_MIDI_NOTE_F_0": "MI_F",
  "QK_MIDI_NOTE_F_SHARP_0": "MI_Fs",
  "QK_MIDI_NOTE_G_0": "MI_G",
  "QK_MIDI_NOTE_G_SHARP_0": "MI_Gs",
  "QK_MIDI_NOTE_A_0": "MI_A",
  "QK_MIDI_NOTE_A_SHARP_0": "MI_As",
  "QK_MIDI_NOTE_B_0": "MI_B",
  "QK_MIDI_NOTE_C_1": "MI_C_1",
  "QK_MIDI_NOTE_C_SHARP_1": "MI_Cs_1",
  "QK_MIDI_NOTE_D_1": "MI_D_1",
  "QK_MIDI_NOTE_D_SHARP_1": "MI_Ds_1",
  "QK_MIDI_NOTE_E_1": "MI_E_1",
  "QK_MIDI_NOTE_F_1": "MI_F_1",
  "QK_MIDI_NOTE_F_SHARP_1": "MI_Fs_1",
  "QK_MIDI_NOTE_G_1": "MI_G_1",
  "QK_MIDI_NOTE_G_SHARP_1": "MI_Gs_1",
  "QK_MIDI_NOTE_A_1": "MI_A_1",
  "QK_MIDI_NOTE_A_SHARP_1": "MI_As_1",
  "QK_MIDI_NOTE_B_1": "MI_B_1",
  "QK_MIDI_NOTE_C_2": "MI_C_2",
  "QK_MIDI_NOTE_C_SHARP_2": "MI_Cs_2",
  "QK_MIDI_NOTE_D_2": "MI_D_2",
  "QK_MIDI_NOTE_D_SHARP_2": "MI_Ds_2",
  "QK_MIDI_NOTE_E_2": "MI_E_2",
  "QK_MIDI_NOTE_F_2": "MI_F_2",
  "QK_MIDI_NOTE_F_SHARP_2": "MI_Fs_2",
  "QK_MIDI_NOTE_G_2": "MI_G_2",
  "QK_MIDI_NOTE_G_SHARP_2": "MI_Gs_2",
  "QK_MIDI_NOTE_A_2": "MI_A_2",
  "QK_MIDI_NOTE_A_SHARP_2": "MI_As_2",
  "QK_MIDI_NOTE_B_2": "MI_B_2",
  "QK_MIDI_NOTE_C_3": "MI_C_3",
  "QK_MIDI_NOTE_C_SHARP_3": "MI_Cs_3",
  "QK_MIDI_NOTE_D_3": "MI_D_3",
  "QK_MIDI_NOTE_D_SHARP_3": "MI_Ds_3",
  "QK_MIDI_NOTE_E_3": "MI_E_3",
  "QK_MIDI_NOTE_F_3": "MI_F_3",
  "QK_MIDI_NOTE_F_SHARP_3": "MI_Fs_3",
  "QK_MIDI_NOTE_G_3": "MI_G_3",
  "QK_MIDI_NOTE_G_SHARP_3": "MI_Gs_3",
  "QK_MIDI_NOTE_A_3": "MI_A_3",
  "QK_MIDI_NOTE_A_SHARP_3": "MI_As_3",
  "QK_MIDI_NOTE_B_3": "MI_B_3",
  "QK_MIDI_NOTE_C_4": "MI_C_4",
  "QK_MIDI_NOTE_C_SHARP_4": "MI_Cs_4",
  "QK_MIDI_NOTE_D_4": "MI_D_4",
  "QK_MIDI_NOTE_D_SHARP_4": "MI_Ds_4",
  "QK_MIDI_NOTE_E_4": "MI_E_4",
  "QK_MIDI_NOTE_F_4": "MI_F_4",
  "QK_MIDI_NOTE_F_SHARP_4": "MI_Fs_4",
  "QK_MIDI_NOTE_G_4": "MI_G_4",
  "QK_MIDI_NOTE_G_SHARP_4": "MI_Gs_4",
  "QK_MIDI_NOTE_A_4": "MI_A_4",
  "QK_MIDI_NOTE_A_SHARP_4": "MI_As_4",
  "QK_MIDI_NOTE_B_4": "MI_B_4",
  "QK_MIDI_NOTE_C_5": "MI_C_5",
  "QK_MIDI_NOTE_C_SHARP_5": "MI_Cs_5",
  "QK_MIDI_NOTE_D_5": "MI_D_5",
  "QK_MIDI_NOTE_D_SHARP_5": "MI_Ds_5",
  "QK_MIDI_NOTE_E_5": "MI_E_5",
  "QK_MIDI_NOTE_F_5": "MI_F_5",
  "QK_MIDI_NOTE_F_SHARP_5": "MI_Fs_5",
  "QK_MIDI_NOTE_G_5": "MI_G_5",
  "QK_MIDI_NOTE_G_SHARP_5": "MI_Gs_5",
  "QK_MIDI_NOTE_A_5": "MI_A_5",
  "QK_MIDI_NOTE_A_SHARP_5": "MI_As_5",
  "QK_MIDI_NOTE_B_5": "MI_B_5",
  "QK_MIDI_OCTAVE_N2": "MI_OCT_N2",
  "QK_MIDI_OCTAVE_N1": "MI_OCT_N1",
  "QK_MIDI_OCTAVE_0": "MI_OCT_0",
  "QK_MIDI_OCTAVE_1": "MI_OCT_1",
  "QK_MIDI_OCTAVE_2": "MI_OCT_2",
  "QK_MIDI_OCTAVE_3": "MI_OCT_3",
  "QK_MIDI_OCTAVE_4": "MI_OCT_4",
  "QK_MIDI_OCTAVE_5": "MI_OCT_5",
  "QK_MIDI_OCTAVE_6": "MI_OCT_6",
  "QK_MIDI_OCTAVE_7": "MI_OCT_7",
  "QK_MIDI_OCTAVE_DOWN": "MI_OCTD",
  "QK_MIDI_OCTAVE_UP": "MI_OCTU",
  "QK_MIDI_TRANSPOSE_N6": "MI_TRNS_N6",
  "QK_MIDI_TRANSPOSE_N5": "MI_TRNS_N5",
  "QK_MIDI_TRANSPOSE_N4": "MI_TRNS_N4",
  "QK_MIDI_TRANSPOSE_N3": "MI_TRNS_N3",
  "QK_MIDI_TRANSPOSE_N2": "MI_TRNS_N2",
  "QK_MIDI_TRANSPOSE_N1": "MI_TRNS_N1",
  "QK_MIDI_TRANSPOSE_0": "MI_TRNS_0",
  "QK_MIDI_TRANSPOSE_1": "MI_TRNS_1",
  "QK_MIDI_TRANSPOSE_2": "MI_TRNS_2",
  "QK_MIDI_TRANSPOSE_3": "MI_TRNS_3",
  "QK_MIDI_TRANSPOSE_4": "MI_TRNS_4",
  "QK_MIDI_TRANSPOSE_5": "MI_TRNS_5",
  "QK_MIDI_TRANSPOSE_6": "MI_TRNS_6",
  "QK_MIDI_TRANSPOSE_DOWN": "MI_TRNSD",
  "QK_MIDI_TRANSPOSE_UP": "MI_TRNSU",
  "QK_MIDI_VELOCITY_0": "QK_MIDI_VELOCITY_0",
  "QK_MIDI_VELOCITY_1": "MI_VEL_1",
  "QK_MIDI_VELOCITY_2": "MI_VEL_2",
  "QK_MIDI_VELOCITY_3": "MI_VEL_3",
  "QK_MIDI_VELOCITY_4": "MI_VEL_4",
  "QK_MIDI_VELOCITY_5": "MI_VEL_5",
  "QK_MIDI_VELOCITY_6": "MI_VEL_6",
  "QK_MIDI_VELOCITY_7": "MI_VEL_7",
  "QK_MIDI_VELOCITY_8": "MI_VEL_8",
  "QK_MIDI_VELOCITY_9": "MI_VEL_9",
  "QK_MIDI_VELOCITY_10": "MI_VEL_10",
  "QK_MIDI_VELOCITY_DOWN": "MI_VELD",
  "QK_MIDI_VELOCITY_UP": "MI_VELU",
  "QK_MIDI_CHANNEL_1": "MI_CH1",
  "QK_MIDI_CHANNEL_2": "MI_CH2",
  "QK_MIDI_CHANNEL_3": "MI_CH3",
  "QK_MIDI_CHANNEL_4": "MI_CH4",
  "QK_MIDI_CHANNEL_5": "MI_CH5",
  "QK_MIDI_CHANNEL_6": "MI_CH6",
  "QK_MIDI_CHANNEL_7": "MI_CH7",
  "QK_MIDI_CHANNEL_8": "MI_CH8",
  "QK_MIDI_CHANNEL_9": "MI_CH9",
  "QK_MIDI_CHANNEL_10": "MI_CH10",
  "QK_MIDI_CHANNEL_11": "MI_CH11",
  "QK_MIDI_CHANNEL_12": "MI_CH12",
  "QK_MIDI_CHANNEL_13": "MI_CH13",
  "QK_MIDI_CHANNEL_14": "MI_CH14",
  "QK_MIDI_CHANNEL_15": "MI_CH15",
  "QK_MIDI_CHANNEL_16": "MI_CH16",
  "QK_MIDI_CHANNEL_DOWN": "MI_CHD",
  "QK_MIDI_CHANNEL_UP": "MI_CHU",
  "QK_MIDI_ALL_NOTES_OFF": "MI_ALLOFF",
  "QK_MIDI_SUSTAIN": "MI_SUS",
  "QK_MIDI_PORTAMENTO": "MI_PORT",
  "QK_MIDI_SOSTENUTO": "MI_SOST",
  "QK_MIDI_SOFT": "MI_SOFT",
  "QK_MIDI_LEGATO": "MI_LEG",
  "QK_MIDI_MODULATION": "MI_MOD",
  "QK_MIDI_MODULATION_SPEED_DOWN": "MI_MODSD",
  "QK_MIDI_MODULATION_SPEED_UP": "MI_MODSU",
  "QK_MIDI_PITCH_BEND_DOWN": "MI_BENDD",
  "QK_MIDI_PITCH_BEND_UP": "MI_BENDU",
  "QK_SEQUENCER_ON": "QK_SEQUENCER",
  "QK_SEQUENCER_OFF": "QK_SEQUENCER_OFF",
  "QK_SEQUENCER_TOGGLE": "QK_SEQUENCER_TOGGLE",
  "QK_SEQUENCER_TEMPO_DOWN": "QK_SEQUENCER_TEMPO_DOWN",
  "QK_SEQUENCER_TEMPO_UP": "QK_SEQUENCER_TEMPO_UP",
  "QK_SEQUENCER_RESOLUTION_DOWN": "QK_SEQUENCER_RESOLUTION_DOWN",
  "QK_SEQUENCER_RESOLUTION_UP": "QK_SEQUENCER_RESOLUTION_UP",
  "QK_SEQUENCER_STEPS_ALL": "QK_SEQUENCER_STEPS_ALL",
  "QK_SEQUENCER_STEPS_CLEAR": "QK_SEQUENCER_STEPS_CLEAR",
  "QK_JOYSTICK_BUTTON_0": "QK_JOYSTICK",
  "QK_JOYSTICK_BUTTON_1": "QK_JOYSTICK_BUTTON_1",
  "QK_JOYSTICK_BUTTON_2": "QK_JOYSTICK_BUTTON_2",
  "QK_JOYSTICK_BUTTON_3": "QK_JOYSTICK_BUTTON_3",
  "QK_JOYSTICK_BUTTON_4": "QK_JOYSTICK_BUTTON_4",
  "QK_JOYSTICK_BUTTON_5": "QK_JOYSTICK_BUTTON_5",
  "QK_JOYSTICK_BUTTON_6": "QK_JOYSTICK_BUTTON_6",
  "QK_JOYSTICK_BUTTON_7": "QK_JOYSTICK_BUTTON_7",
  "QK_JOYSTICK_BUTTON_8": "QK_JOYSTICK_BUTTON_8",
  "QK_JOYSTICK_BUTTON_9": "QK_JOYSTICK_BUTTON_9",
  "QK_JOYSTICK_BUTTON_10": "QK_JOYSTICK_BUTTON_10",
  "QK_JOYSTICK_BUTTON_11": "QK_JOYSTICK_BUTTON_11",
  "QK_JOYSTICK_BUTTON_12": "QK_JOYSTICK_BUTTON_12",
  "QK_JOYSTICK_BUTTON_13": "QK_JOYSTICK_BUTTON_13",
  "QK_JOYSTICK_BUTTON_14": "QK_JOYSTICK_BUTTON_14",
  "QK_JOYSTICK_BUTTON_15": "QK_JOYSTICK_BUTTON_15",
  "QK_JOYSTICK_BUTTON_16": "QK_JOYSTICK_BUTTON_16",
  "QK_JOYSTICK_BUTTON_17": "QK_JOYSTICK_BUTTON_17",
  "QK_JOYSTICK_BUTTON_18": "QK_JOYSTICK_BUTTON_18",
  "QK_JOYSTICK_BUTTON_19": "QK_JOYSTICK_BUTTON_19",
  "QK_JOYSTICK_BUTTON_20": "QK_JOYSTICK_BUTTON_20",
  "QK_JOYSTICK_BUTTON_21": "QK_JOYSTICK_BUTTON_21",
  "QK_JOYSTICK_BUTTON_22": "QK_JOYSTICK_BUTTON_22",
  "QK_JOYSTICK_BUTTON_23": "QK_JOYSTICK_BUTTON_23",
  "QK_JOYSTICK_BUTTON_24": "QK_JOYSTICK_BUTTON_24",
  "QK_JOYSTICK_BUTTON_25": "QK_JOYSTICK_BUTTON_25",
  "QK_JOYSTICK_BUTTON_26": "QK_JOYSTICK_BUTTON_26",
  "QK_JOYSTICK_BUTTON_27": "QK_JOYSTICK_BUTTON_27",
  "QK_JOYSTICK_BUTTON_28": "QK_JOYSTICK_BUTTON_28",
  "QK_JOYSTICK_BUTTON_29": "QK_JOYSTICK_BUTTON_29",
  "QK_JOYSTICK_BUTTON_30": "QK_JOYSTICK_BUTTON_30",
  "QK_JOYSTICK_BUTTON_31": "QK_JOYSTICK_BUTTON_31",
  "QK_PROGRAMMABLE_BUTTON_1": "QK_PROGRAMMABLE_BUTTON",
  "QK_PROGRAMMABLE_BUTTON_2": "QK_PROGRAMMABLE_BUTTON_2",
  "QK_PROGRAMMABLE_BUTTON_3": "QK_PROGRAMMABLE_BUTTON_3",
  "QK_PROGRAMMABLE_BUTTON_4": "QK_PROGRAMMABLE_BUTTON_4",
  "QK_PROGRAMMABLE_BUTTON_5": "QK_PROGRAMMABLE_BUTTON_5",
  "QK_PROGRAMMABLE_BUTTON_6": "QK_PROGRAMMABLE_BUTTON_6",
  "QK_PROGRAMMABLE_BUTTON_7": "QK_PROGRAMMABLE_BUTTON_7",
  "QK_PROGRAMMABLE_BUTTON_8": "QK_PROGRAMMABLE_BUTTON_8",
  "QK_PROGRAMMABLE_BUTTON_9": "QK_PROGRAMMABLE_BUTTON_9",
  "QK_PROGRAMMABLE_BUTTON_10": "QK_PROGRAMMABLE_BUTTON_10",
  "QK_PROGRAMMABLE_BUTTON_11": "QK_PROGRAMMABLE_BUTTON_11",
  "QK_PROGRAMMABLE_BUTTON_12": "QK_PROGRAMMABLE_BUTTON_12",
  "QK_PROGRAMMABLE_BUTTON_13": "QK_PROGRAMMABLE_BUTTON_13",
  "QK_PROGRAMMABLE_BUTTON_14": "QK_PROGRAMMABLE_BUTTON_14",
  "QK_PROGRAMMABLE_BUTTON_15": "QK_PROGRAMMABLE_BUTTON_15",
  "QK_PROGRAMMABLE_BUTTON_16": "QK_PROGRAMMABLE_BUTTON_16",
  "QK_PROGRAMMABLE_BUTTON_17": "QK_PROGRAMMABLE_BUTTON_17",
  "QK_PROGRAMMABLE_BUTTON_18": "QK_PROGRAMMABLE_BUTTON_18",
  "QK_PROGRAMMABLE_BUTTON_19": "QK_PROGRAMMABLE_BUTTON_19",
  "QK_PROGRAMMABLE_BUTTON_20": "QK_PROGRAMMABLE_BUTTON_20",
  "QK_PROGRAMMABLE_BUTTON_21": "QK_PROGRAMMABLE_BUTTON_21",
  "QK_PROGRAMMABLE_BUTTON_22": "QK_PROGRAMMABLE_BUTTON_22",
  "QK_PROGRAMMABLE_BUTTON_23": "QK_PROGRAMMABLE_BUTTON_23",
  "QK_PROGRAMMABLE_BUTTON_24": "QK_PROGRAMMABLE_BUTTON_24",
  "QK_PROGRAMMABLE_BUTTON_25": "QK_PROGRAMMABLE_BUTTON_25",
  "QK_PROGRAMMABLE_BUTTON_26": "QK_PROGRAMMABLE_BUTTON_26",
  "QK_PROGRAMMABLE_BUTTON_27": "QK_PROGRAMMABLE_BUTTON_27",
  "QK_PROGRAMMABLE_BUTTON_28": "QK_PROGRAMMABLE_BUTTON_28",
  "QK_PROGRAMMABLE_BUTTON_29": "QK_PROGRAMMABLE_BUTTON_29",
  "QK_PROGRAMMABLE_BUTTON_30": "QK_PROGRAMMABLE_BUTTON_30",
  "QK_PROGRAMMABLE_BUTTON_31": "QK_PROGRAMMABLE_BUTTON_31",
  "QK_PROGRAMMABLE_BUTTON_32": "QK_PROGRAMMABLE_BUTTON_32",
  "QK_AUDIO_ON": "AU_ON",
  "QK_AUDIO_OFF": "AU_OFF",
  "QK_AUDIO_TOGGLE": "AU_TOG",
  "QK_AUDIO_CLICKY_TOGGLE": "CLICKY_TOGGLE",
  "QK_AUDIO_CLICKY_ON": "QK_AUDIO_CLICKY_ON",
  "QK_AUDIO_CLICKY_OFF": "QK_AUDIO_CLICKY_OFF",
  "QK_AUDIO_CLICKY_UP": "CLICKY_UP",
  "QK_AUDIO_CLICKY_DOWN": "CLICKY_DOWN",
  "QK_AUDIO_CLICKY_RESET": "CLICKY_RESET",
  "QK_MUSIC_ON": "MU_ON",
  "QK_MUSIC_OFF": "MU_OFF",
  "QK_MUSIC_TOGGLE": "MU_TOG",
  "QK_MUSIC_MODE_NEXT": "MU_MOD",
  "QK_AUDIO_VOICE_NEXT": "QK_AUDIO_VOICE_NEXT",
  "QK_AUDIO_VOICE_PREVIOUS": "QK_AUDIO_VOICE_PREVIOUS",
  "QK_STENO_BOLT": "QK_STENO_BOLT",
  "QK_STENO_GEMINI": "QK_STENO_GEMINI",
  "QK_STENO_COMB": "QK_STENO_COMB",
  "QK_STENO_COMB_MAX": "QK_STENO_COMB_MAX",
  "QK_MACRO_0": "M0",
  "QK_MACRO_1": "M1",
  "QK_MACRO_2": "M2",
  "QK_MACRO_3": "M3",
  "QK_MACRO_4": "M4",
  "QK_MACRO_5": "M5",
  "QK_MACRO_6": "M6",
  "QK_MACRO_7": "M7",
  "QK_MACRO_8": "M8",
  "QK_MACRO_9": "M9",
  "QK_MACRO_10": "M10",
  "QK_MACRO_11": "M11",
  "QK_MACRO_12": "M12",
  "QK_MACRO_13": "M13",
  "QK_MACRO_14": "M14",
  "QK_MACRO_15": "M15",
  "QK_MACRO_16": "M16",
  "QK_MACRO_17": "M17",
  "QK_MACRO_18": "M18",
  "QK_MACRO_19": "M19",
  "QK_MACRO_20": "M20",
  "QK_MACRO_21": "M21",
  "QK_MACRO_22": "M22",
  "QK_MACRO_23": "M23",
  "QK_MACRO_24": "M24",
  "QK_MACRO_25": "M25",
  "QK_MACRO_26": "M26",
  "QK_MACRO_27": "M27",
  "QK_MACRO_28": "M28",
  "QK_MACRO_29": "M29",
  "QK_MACRO_30": "M30",
  "QK_MACRO_31": "M31",
  "QK_BACKLIGHT_ON": "BL_ON",
  "QK_BACKLIGHT_OFF": "BL_OFF",
  "QK_BACKLIGHT_TOGGLE": "BL_TOGG",
  "QK_BACKLIGHT_DOWN": "BL_DEC",
  "QK_BACKLIGHT_UP": "BL_INC",
  "QK_BACKLIGHT_STEP": "BL_STEP",
  "QK_BACKLIGHT_TOGGLE_BREATHING": "BL_BRTG",
  "QK_LED_MATRIX_ON": "QK_LED_MATRIX_ON",
  "QK_LED_MATRIX_OFF": "QK_LED_MATRIX_OFF",
  "QK_LED_MATRIX_TOGGLE": "QK_LED_MATRIX_TOGGLE",
  "QK_LED_MATRIX_MODE_NEXT": "QK_LED_MATRIX_MODE_NEXT",
  "QK_LED_MATRIX_MODE_PREVIOUS": "QK_LED_MATRIX_MODE_PREVIOUS",
  "QK_LED_MATRIX_BRIGHTNESS_UP": "QK_LED_MATRIX_BRIGHTNESS_UP",
  "QK_LED_MATRIX_BRIGHTNESS_DOWN": "QK_LED_MATRIX_BRIGHTNESS_DOWN",
  "QK_LED_MATRIX_SPEED_UP": "QK_LED_MATRIX_SPEED_UP",
  "QK_LED_MATRIX_SPEED_DOWN": "QK_LED_MATRIX_SPEED_DOWN",
  "QK_UNDERGLOW_TOGGLE": "RGB_TOG",
  "QK_UNDERGLOW_MODE_NEXT": "RGB_MOD",
  "QK_UNDERGLOW_MODE_PREVIOUS": "RGB_RMOD",
  "QK_UNDERGLOW_HUE_UP": "RGB_HUI",
  "QK_UNDERGLOW_HUE_DOWN": "RGB_HUD",
  "QK_UNDERGLOW_SATURATION_UP": "RGB_SAI",
  "QK_UNDERGLOW_SATURATION_DOWN": "RGB_SAD",
  "QK_UNDERGLOW_VALUE_UP": "RGB_VAI",
  "QK_UNDERGLOW_VALUE_DOWN": "RGB_VAD",
  "QK_UNDERGLOW_SPEED_UP": "RGB_SPI",
  "QK_UNDERGLOW_SPEED_DOWN": "RGB_SPD",
  "RGB_MODE_PLAIN": "RGB_M_P",
  "RGB_MODE_BREATHE": "RGB_M_B",
  "RGB_MODE_RAINBOW": "RGB_M_R",
  "RGB_MODE_SWIRL": "RGB_M_SW",
  "RGB_MODE_SNAKE": "RGB_M_SN",
  "RGB_MODE_KNIGHT": "RGB_M_K",
  "RGB_MODE_XMAS": "RGB_M_X",
  "RGB_MODE_GRADIENT": "RGB_M_G",
  "RGB_MODE_RGBTEST": "RGB_M_T",
  "RGB_MODE_TWINKLE": "RGB_MODE_TWINKLE",
  "QK_RGB_MATRIX_ON": "QK_RGB_MATRIX_ON",
  "QK_RGB_MATRIX_OFF": "QK_RGB_MATRIX_OFF",
  "QK_RGB_MATRIX_TOGGLE": "QK_RGB_MATRIX_TOGGLE",
  "QK_RGB_MATRIX_MODE_NEXT": "QK_RGB_MATRIX_MODE_NEXT",
  "QK_RGB_MATRIX_MODE_PREVIOUS": "QK_RGB_MATRIX_MODE_PREVIOUS",
  "QK_RGB_MATRIX_HUE_UP": "QK_RGB_MATRIX_HUE_UP",
  "QK_RGB_MATRIX_HUE_DOWN": "QK_RGB_MATRIX_HUE_DOWN",
  "QK_RGB_MATRIX_SATURATION_UP": "QK_RGB_MATRIX_SATURATION_UP",
  "QK_RGB_MATRIX_SATURATION_DOWN": "QK_RGB_MATRIX_SATURATION_DOWN",
  "QK_RGB_MATRIX_VALUE_UP": "QK_RGB_MATRIX_VALUE_UP",
  "QK_RGB_MATRIX_VALUE_DOWN": "QK_RGB_MATRIX_VALUE_DOWN",
  "QK_RGB_MATRIX_SPEED_UP": "QK_RGB_MATRIX_SPEED_UP",
  "QK_RGB_MATRIX_SPEED_DOWN": "QK_RGB_MATRIX_SPEED_DOWN",
  "QK_BOOTLOADER": "RESET",
  "QK_REBOOT": "QK_REBOOT",
  "QK_DEBUG_TOGGLE": "QK_DEBUG_TOGGLE",
  "QK_CLEAR_EEPROM": "QK_CLEAR_EEPROM",
  "QK_MAKE": "QK_MAKE",
  "QK_AUTO_SHIFT_DOWN": "KC_ASDN",
  "QK_AUTO_SHIFT_UP": "KC_ASUP",
  "QK_AUTO_SHIFT_REPORT": "KC_ASRP",
  "QK_AUTO_SHIFT_ON": "KC_ASON",
  "QK_AUTO_SHIFT_OFF": "KC_ASOFF",
  "QK_AUTO_SHIFT_TOGGLE": "KC_ASTG",
  "QK_GRAVE_ESCAPE": "KC_GESC",
  "QK_VELOCIKEY_TOGGLE": "QK_VELOCIKEY_TOGGLE",
  "QK_SPACE_CADET_LEFT_CTRL_PARENTHESIS_OPEN": "KC_LCPO",
  "QK_SPACE_CADET_RIGHT_CTRL_PARENTHESIS_CLOSE": "KC_RCPC",
  "QK_SPACE_CADET_LEFT_SHIFT_PARENTHESIS_OPEN": "KC_LSPO",
  "QK_SPACE_CADET_RIGHT_SHIFT_PARENTHESIS_CLOSE": "KC_RSPC",
  "QK_SPACE_CADET_LEFT_ALT_PARENTHESIS_OPEN": "KC_LAPO",
  "QK_SPACE_CADET_RIGHT_ALT_PARENTHESIS_CLOSE": "KC_RAPC",
  "QK_SPACE_CADET_RIGHT_SHIFT_ENTER": "KC_SFTENT",
  "QK_OUTPUT_AUTO": "QK_OUTPUT_AUTO",
  "QK_OUTPUT_USB": "QK_OUTPUT_USB",
  "QK_OUTPUT_BLUETOOTH": "QK_OUTPUT_BLUETOOTH",
  "QK_UNICODE_MODE_NEXT": "QK_UNICODE_MODE_NEXT",
  "QK_UNICODE_MODE_PREVIOUS": "QK_UNICODE_MODE_PREVIOUS",
  "QK_UNICODE_MODE_MACOS": "QK_UNICODE_MODE_MACOS",
  "QK_UNICODE_MODE_LINUX": "QK_UNICODE_MODE_LINUX",
  "QK_UNICODE_MODE_WINDOWS": "QK_UNICODE_MODE_WINDOWS",
  "QK_UNICODE_MODE_BSD": "QK_UNICODE_MODE_BSD",
  "QK_UNICODE_MODE_WINCOMPOSE": "QK_UNICODE_MODE_WINCOMPOSE",
  "QK_UNICODE_MODE_EMACS": "QK_UNICODE_MODE_EMACS",
  "QK_HAPTIC_ON": "HPT_ON",
  "QK_HAPTIC_OFF": "HPT_OFF",
  "QK_HAPTIC_TOGGLE": "HPT_TOG",
  "QK_HAPTIC_RESET": "HPT_RST",
  "QK_HAPTIC_FEEDBACK_TOGGLE": "HPT_FBK",
  "QK_HAPTIC_BUZZ_TOGGLE": "HPT_BUZ",
  "QK_HAPTIC_MODE_NEXT": "HPT_MODI",
  "QK_HAPTIC_MODE_PREVIOUS": "HPT_MODD",
  "QK_HAPTIC_CONTINUOUS_TOGGLE": "HPT_CONT",
  "QK_HAPTIC_CONTINUOUS_UP": "HPT_CONI",
  "QK_HAPTIC_CONTINUOUS_DOWN": "HPT_COND",
  "QK_HAPTIC_DWELL_UP": "HPT_DWLI",
  "QK_HAPTIC_DWELL_DOWN": "HPT_DWLD",
  "QK_COMBO_ON": "CMB_ON",
  "QK_COMBO_OFF": "CMB_OFF",
  "QK_COMBO_TOGGLE": "CMB_TOG",
  "QK_DYNAMIC_MACRO_RECORD_START_1": "DYN_REC_START1",
  "QK_DYNAMIC_MACRO_RECORD_START_2": "DYN_REC_START2",
  "QK_DYNAMIC_MACRO_RECORD_STOP": "DYN_REC_STOP",
  "QK_DYNAMIC_MACRO_PLAY_1": "DYN_MACRO_PLAY1",
  "QK_DYNAMIC_MACRO_PLAY_2": "DYN_MACRO_PLAY2",
  "QK_LEADER": "QK_LEADER",
  "QK_LOCK": "QK_LOCK",
  "QK_ONE_SHOT_ON": "QK_ONE_SHOT_ON",
  "QK_ONE_SHOT_OFF": "QK_ONE_SHOT_OFF",
  "QK_ONE_SHOT_TOGGLE": "QK_ONE_SHOT_TOGGLE",
  "QK_KEY_OVERRIDE_TOGGLE": "QK_KEY_OVERRIDE_TOGGLE",
  "QK_KEY_OVERRIDE_ON": "QK_KEY_OVERRIDE_ON",
  "QK_KEY_OVERRIDE_OFF": "QK_KEY_OVERRIDE_OFF",
  "QK_SECURE_LOCK": "QK_SECURE_LOCK",
  "QK_SECURE_UNLOCK": "QK_SECURE_UNLOCK",
  "QK_SECURE_TOGGLE": "QK_SECURE_TOGGLE",
  "QK_SECURE_REQUEST": "QK_SECURE_REQUEST",
  "QK_DYNAMIC_TAPPING_TERM_PRINT": "QK_DYNAMIC_TAPPING_TERM_PRINT",
  "QK_DYNAMIC_TAPPING_TERM_UP": "QK_DYNAMIC_TAPPING_TERM_UP",
  "QK_DYNAMIC_TAPPING_TERM_DOWN": "QK_DYNAMIC_TAPPING_TERM_DOWN",
  "QK_CAPS_WORD_TOGGLE": "QK_CAPS_WORD_TOGGLE",
  "QK_AUTOCORRECT_ON": "QK_AUTOCORRECT_ON",
  "QK_AUTOCORRECT_OFF": "QK_AUTOCORRECT_OFF",
  "QK_AUTOCORRECT_TOGGLE": "QK_AUTOCORRECT_TOGGLE",
  "QK_TRI_LAYER_LOWER": "FN_MO13",
  "QK_TRI_LAYER_UPPER": "FN_MO23",
  "QK_ALT_REPEAT_KEY": "QK_ALT_REPEAT_KEY",
  "QK_KB_0": "USER00",
  "QK_KB_1": "USER01",
  "QK_KB_2": "USER02",
  "QK_KB_3": "USER03",
  "QK_KB_4": "USER04",
  "QK_KB_5": "USER05",
  "QK_KB_6": "USER06",
  "QK_KB_7": "USER07",
  "QK_KB_8": "USER08",
  "QK_KB_9": "USER09",
  "QK_KB_10": "USER10",
  "QK_KB_11": "USER11",
  "QK_KB_12": "USER12",
  "QK_KB_13": "USER13",
  "QK_KB_14": "USER14",
  "QK_KB_15": "USER15",
  "QK_KB_16": "USER16",
  "QK_KB_17": "USER17",
  "QK_KB_18": "USER18",
  "QK_KB_19": "USER19",
  "QK_KB_20": "USER20",
  "QK_KB_21": "USER21",
  "QK_KB_22": "USER22",
  "QK_KB_23": "USER23",
  "QK_KB_24": "USER24",
  "QK_KB_25": "USER25",
  "QK_KB_26": "USER26",
  "QK_KB_27": "USER27",
  "QK_KB_28": "USER28",
  "QK_KB_29": "USER29",
  "QK_KB_30": "USER30",
  "QK_KB_31": "USER31",
  "QK_USER_0": "QK_USER",
  "QK_USER_1": "QK_USER_1",
  "QK_USER_2": "QK_USER_2",
  "QK_USER_3": "QK_USER_3",
  "QK_USER_4": "QK_USER_4",
  "QK_USER_5": "QK_USER_5",
  "QK_USER_6": "QK_USER_6",
  "QK_USER_7": "QK_USER_7",
  "QK_USER_8": "QK_USER_8",
  "QK_USER_9": "QK_USER_9",
  "QK_USER_10": "QK_USER_10",
  "QK_USER_11": "QK_USER_11",
  "QK_USER_12": "QK_USER_12",
  "QK_USER_13": "QK_USER_13",
  "QK_USER_14": "QK_USER_14",
  "QK_USER_15": "QK_USER_15",
  "QK_USER_16": "QK_USER_16",
  "QK_USER_17": "QK_USER_17",
  "QK_USER_18": "QK_USER_18",
  "QK_USER_19": "QK_USER_19",
  "QK_USER_20": "QK_USER_20",
  "QK_USER_21": "QK_USER_21",
  "QK_USER_22": "QK_USER_22",
  "QK_USER_23": "QK_USER_23",
  "QK_USER_24": "QK_USER_24",
  "QK_USER_25": "QK_USER_25",
  "QK_USER_26": "QK_USER_26",
  "QK_USER_27": "QK_USER_27",
  "QK_USER_28": "QK_USER_28",
  "QK_USER_29": "QK_USER_29",
  "QK_USER_30": "QK_USER_30",
  "QK_USER_31": "QK_USER_31",
  "XXXXXXX": "KC_NO",
  "_______": "KC_TRNS",
  "KC_ENT": "KC_ENTER",
  "KC_ESC": "KC_ESCAPE",
  "KC_BSPC": "KC_BSPACE",
  "KC_SPC": "KC_SPACE",
  "KC_MINS": "KC_MINUS",
  "KC_EQL": "KC_EQUAL",
  "KC_LBRC": "KC_LBRACKET",
  "KC_RBRC": "KC_RBRACKET",
  "KC_BSLS": "KC_BSLASH",
  "KC_NUHS": "KC_NONUS_HASH",
  "KC_SCLN": "KC_SCOLON",
  "KC_QUOT": "KC_QUOTE",
  "KC_GRV": "KC_GRAVE",
  "KC_COMM": "KC_COMMA",
  "KC_SLSH": "KC_SLASH",
  "KC_CAPS": "KC_CAPSLOCK",
  "KC_PSCR": "KC_PSCREEN",
  "KC_SCRL": "KC_SCROLLLOCK",
  "KC_BRMD": "KC_SCROLLLOCK",
  "KC_PAUS": "KC_PAUSE",
  "KC_BRK": "KC_PAUSE",
  "KC_BRMU": "KC_PAUSE",
  "KC_INS": "KC_INSERT",
  "KC_DEL": "KC_DELETE",
  "KC_PGDN": "KC_PGDOWN",
  "KC_RGHT": "KC_RIGHT",
  "KC_NUM": "KC_NUMLOCK",
  "KC_PSLS": "KC_KP_SLASH",
  "KC_PAST": "KC_KP_ASTERISK",
  "KC_PMNS": "KC_KP_MINUS",
  "KC_PPLS": "KC_KP_PLUS",
  "KC_PENT": "KC_KP_ENTER",
  "KC_P1": "KC_KP_1",
  "KC_P2": "KC_KP_2",
  "KC_P3": "KC_KP_3",
  "KC_P4": "KC_KP_4",
  "KC_P5": "KC_KP_5",
  "KC_P6": "KC_KP_6",
  "KC_P7": "KC_KP_7",
  "KC_P8": "KC_KP_8",
  "KC_P9": "KC_KP_9",
  "KC_P0": "KC_KP_0",
  "KC_PDOT": "KC_KP_DOT",
  "KC_NUBS": "KC_NONUS_BSLASH",
  "KC_APP": "KC_APPLICATION",
  "KC_PEQL": "KC_KP_EQUAL",
  "KC_AGIN": "KC_REDO",
  "KC_PCMM": "KC_KP_COMMA",
  "KC_INT1": "KC_RO",
  "KC_INT2": "KC_KANA",
  "KC_INT3": "KC_JYEN",
  "KC_INT4": "KC_HENK",
  "KC_INT5": "KC_MHEN",
  "KC_INT6": "KC_INTERNATIONAL_6",
  "KC_INT7": "KC_INTERNATIONAL_7",
  "KC_INT8": "KC_INTERNATIONAL_8",
  "KC_INT9": "KC_INTERNATIONAL_9",
  "KC_LNG1": "KC_LANG1",
  "KC_LNG2": "KC_LANG2",
  "KC_LNG3": "KC_LANGUAGE_3",
  "KC_LNG4": "KC_LANGUAGE_4",
  "KC_LNG5": "KC_LANGUAGE_5",
  "KC_LNG6": "KC_LANGUAGE_6",
  "KC_LNG7": "KC_LANGUAGE_7",
  "KC_LNG8": "KC_LANGUAGE_8",
  "KC_LNG9": "KC_LANGUAGE_9",
  "KC_ERAS": "KC_ALTERNATE_ERASE",
  "KC_SYRQ": "KC_SYSTEM_REQUEST",
  "KC_CNCL": "KC_CANCEL",
  "KC_CLR": "KC_CLEAR",
  "KC_PRIR": "KC_PRIOR",
  "KC_RETN": "KC_RETURN",
  "KC_SEPR": "KC_SEPARATOR",
  "KC_CLAG": "KC_CLEAR_AGAIN",
  "KC_CRSL": "KC_CRSEL",
  "KC_EXSL": "KC_EXSEL",
  "KC_CPNL": "KC_CONTROL_PANEL",
  "KC_ASST": "KC_ASSISTANT",
  "KC_MCTL": "KC_MISSION_CONTROL",
  "KC_LPAD": "KC_LAUNCHPAD",
  "KC_BTN6": "KC_MS_BTN6",
  "KC_BTN7": "KC_MS_BTN7",
  "KC_BTN8": "KC_MS_BTN8",
  "KC_LCTL": "KC_LCTRL",
  "KC_LSFT": "KC_LSHIFT",
  "KC_LOPT": "KC_LALT",
  "KC_LCMD": "KC_LGUI",
  "KC_LWIN": "KC_LGUI",
  "KC_RCTL": "KC_RCTRL",
  "KC_RSFT": "KC_RSHIFT",
  "KC_ROPT": "KC_RALT",
  "KC_ALGR": "KC_RALT",
  "KC_RCMD": "KC_RGUI",
  "KC_RWIN": "KC_RGUI",
  "SH_TOGG": "QK_SWAP_HANDS_TOGGLE",
  "SH_TT": "QK_SWAP_HANDS_TAP_TOGGLE",
  "SH_MON": "QK_SWAP_HANDS_MOMENTARY_ON",
  "SH_MOFF": "QK_SWAP_HANDS_MOMENTARY_OFF",
  "SH_OFF": "QK_SWAP_HANDS_OFF",
  "SH_ON": "QK_SWAP_HANDS_ON",
  "SH_OS": "QK_SWAP_HANDS_ONE_SHOT",
  "CL_SWAP": "MAGIC_SWAP_CONTROL_CAPSLOCK",
  "CL_NORM": "MAGIC_UNSWAP_CONTROL_CAPSLOCK",
  "CL_TOGG": "QK_MAGIC_TOGGLE_CONTROL_CAPS_LOCK",
  "CL_CAPS": "MAGIC_UNCAPSLOCK_TO_CONTROL",
  "CL_CTRL": "MAGIC_CAPSLOCK_TO_CONTROL",
  "AG_LSWP": "MAGIC_SWAP_LALT_LGUI",
  "AG_LNRM": "MAGIC_UNSWAP_LALT_LGUI",
  "AG_RSWP": "MAGIC_SWAP_RALT_RGUI",
  "AG_RNRM": "MAGIC_UNSWAP_RALT_RGUI",
  "GU_ON": "MAGIC_UNNO_GUI",
  "GU_OFF": "MAGIC_NO_GUI",
  "GU_TOGG": "QK_MAGIC_TOGGLE_GUI",
  "GE_SWAP": "MAGIC_SWAP_GRAVE_ESC",
  "GE_NORM": "MAGIC_UNSWAP_GRAVE_ESC",
  "BS_SWAP": "MAGIC_SWAP_BACKSLASH_BACKSPACE",
  "BS_NORM": "MAGIC_UNSWAP_BACKSLASH_BACKSPACE",
  "BS_TOGG": "QK_MAGIC_TOGGLE_BACKSLASH_BACKSPACE",
  "NK_ON": "MAGIC_HOST_NKRO",
  "NK_OFF": "MAGIC_UNHOST_NKRO",
  "NK_TOGG": "MAGIC_TOGGLE_NKRO",
  "AG_SWAP": "MAGIC_SWAP_ALT_GUI",
  "AG_NORM": "MAGIC_UNSWAP_ALT_GUI",
  "AG_TOGG": "MAGIC_TOGGLE_ALT_GUI",
  "CG_LSWP": "MAGIC_SWAP_LCTL_LGUI",
  "CG_LNRM": "MAGIC_UNSWAP_LCTL_LGUI",
  "CG_RSWP": "MAGIC_SWAP_RCTL_RGUI",
  "CG_RNRM": "MAGIC_UNSWAP_RCTL_RGUI",
  "CG_SWAP": "MAGIC_SWAP_CTL_GUI",
  "CG_NORM": "MAGIC_UNSWAP_CTL_GUI",
  "CG_TOGG": "MAGIC_TOGGLE_CTL_GUI",
  "EH_LEFT": "MAGIC_EE_HANDS_LEFT",
  "EH_RGHT": "MAGIC_EE_HANDS_RIGHT",
  "EC_SWAP": "QK_MAGIC_SWAP_ESCAPE_CAPS_LOCK",
  "EC_NORM": "QK_MAGIC_UNSWAP_ESCAPE_CAPS_LOCK",
  "EC_TOGG": "QK_MAGIC_TOGGLE_ESCAPE_CAPS_LOCK",
  "MI_ON": "QK_MIDI",
  "MI_OFF": "QK_MIDI_OFF",
  "MI_TOGG": "QK_MIDI_TOGGLE",
  "MI_Db": "MI_Cs",
  "MI_Eb": "MI_Ds",
  "MI_Gb": "MI_Fs",
  "MI_Ab": "MI_Gs",
  "MI_Bb": "MI_As",
  "MI_C1": "MI_C_1",
  "MI_Cs1": "MI_Cs_1",
  "MI_Db1": "MI_Cs_1",
  "MI_D1": "MI_D_1",
  "MI_Ds1": "MI_Ds_1",
  "MI_Eb1": "MI_Ds_1",
  "MI_E1": "MI_E_1",
  "MI_F1": "MI_F_1",
  "MI_Fs1": "MI_Fs_1",
  "MI_Gb1": "MI_Fs_1",
  "MI_G1": "MI_G_1",
  "MI_Gs1": "MI_Gs_1",
  "MI_Ab1": "MI_Gs_1",
  "MI_A1": "MI_A_1",
  "MI_As1": "MI_As_1",
  "MI_Bb1": "MI_As_1",
  "MI_B1": "MI_B_1",
  "MI_C2": "MI_C_2",
  "MI_Cs2": "MI_Cs_2",
  "MI_Db2": "MI_Cs_2",
  "MI_D2": "MI_D_2",
  "MI_Ds2": "MI_Ds_2",
  "MI_Eb2": "MI_Ds_2",
  "MI_E2": "MI_E_2",
  "MI_F2": "MI_F_2",
  "MI_Fs2": "MI_Fs_2",
  "MI_Gb2": "MI_Fs_2",
  "MI_G2": "MI_G_2",
  "MI_Gs2": "MI_Gs_2",
  "MI_Ab2": "MI_Gs_2",
  "MI_A2": "MI_A_2",
  "MI_As2": "MI_As_2",
  "MI_Bb2": "MI_As_2",
  "MI_B2": "MI_B_2",
  "MI_C3": "MI_C_3",
  "MI_Cs3": "MI_Cs_3",
  "MI_Db3": "MI_Cs_3",
  "MI_D3": "MI_D_3",
  "MI_Ds3": "MI_Ds_3",
  "MI_Eb3": "MI_Ds_3",
  "MI_E3": "MI_E_3",
  "MI_F3": "MI_F_3",
  "MI_Fs3": "MI_Fs_3",
  "MI_Gb3": "MI_Fs_3",
  "MI_G3": "MI_G_3",
  "MI_Gs3": "MI_Gs_3",
  "MI_Ab3": "MI_Gs_3",
  "MI_A3": "MI_A_3",
  "MI_As3": "MI_As_3",
  "MI_Bb3": "MI_As_3",
  "MI_B3": "MI_B_3",
  "MI_C4": "MI_C_4",
  "MI_Cs4": "MI_Cs_4",
  "MI_Db4": "MI_Cs_4",
  "MI_D4": "MI_D_4",
  "MI_Ds4": "MI_Ds_4",
  "MI_Eb4": "MI_Ds_4",
  "MI_E4": "MI_E_4",
  "MI_F4": "MI_F_4",
  "MI_Fs4": "MI_Fs_4",
  "MI_Gb4": "MI_Fs_4",
  "MI_G4": "MI_G_4",
  "MI_Gs4": "MI_Gs_4",
  "MI_Ab4": "MI_Gs_4",
  "MI_A4": "MI_A_4",
  "MI_As4": "MI_As_4",
  "MI_Bb4": "MI_As_4",
  "MI_B4": "MI_B_4",
  "MI_C5": "MI_C_5",
  "MI_Cs5": "MI_Cs_5",
  "MI_Db5": "MI_Cs_5",
  "MI_D5": "MI_D_5",
  "MI_Ds5": "MI_Ds_5",
  "MI_Eb5": "MI_Ds_5",
  "MI_E5": "MI_E_5",
  "MI_F5": "MI_F_5",
  "MI_Fs5": "MI_Fs_5",
  "MI_Gb5": "MI_Fs_5",
  "MI_G5": "MI_G_5",
  "MI_Gs5": "MI_Gs_5",
  "MI_Ab5": "MI_Gs_5",
  "MI_A5": "MI_A_5",
  "MI_As5": "MI_As_5",
  "MI_Bb5": "MI_As_5",
  "MI_B5": "MI_B_5",
  "MI_OCN2": "MI_OCT_N2",
  "MI_OCN1": "MI_OCT_N1",
  "MI_OC0": "MI_OCT_0",
  "MI_OC1": "MI_OCT_1",
  "MI_OC2": "MI_OCT_2",
  "MI_OC3": "MI_OCT_3",
  "MI_OC4": "MI_OCT_4",
  "MI_OC5": "MI_OCT_5",
  "MI_OC6": "MI_OCT_6",
  "MI_OC7": "MI_OCT_7",
  "MI_TRN6": "MI_TRNS_N6",
  "MI_TRN5": "MI_TRNS_N5",
  "MI_TRN4": "MI_TRNS_N4",
  "MI_TRN3": "MI_TRNS_N3",
  "MI_TRN2": "MI_TRNS_N2",
  "MI_TRN1": "MI_TRNS_N1",
  "MI_TR0": "MI_TRNS_0",
  "MI_TR1": "MI_TRNS_1",
  "MI_TR2": "MI_TRNS_2",
  "MI_TR3": "MI_TRNS_3",
  "MI_TR4": "MI_TRNS_4",
  "MI_TR5": "MI_TRNS_5",
  "MI_TR6": "MI_TRNS_6",
  "MI_TRSD": "MI_TRNSD",
  "MI_TRSU": "MI_TRNSU",
  "MI_VL0": "QK_MIDI_VELOCITY_0",
  "MI_VL1": "MI_VEL_1",
  "MI_VL2": "MI_VEL_2",
  "MI_VL3": "MI_VEL_3",
  "MI_VL4": "MI_VEL_4",
  "MI_VL5": "MI_VEL_5",
  "MI_VL6": "MI_VEL_6",
  "MI_VL7": "MI_VEL_7",
  "MI_VL8": "MI_VEL_8",
  "MI_VL9": "MI_VEL_9",
  "MI_VL10": "MI_VEL_10",
  "MI_CHND": "MI_CHD",
  "MI_CHNU": "MI_CHU",
  "MI_AOFF": "MI_ALLOFF",
  "MI_SUST": "MI_SUS",
  "MI_MODD": "MI_MODSD",
  "MI_MODU": "MI_MODSU",
  "MI_BNDD": "MI_BENDD",
  "MI_BNDU": "MI_BENDU",
  "SQ_ON": "QK_SEQUENCER",
  "SQ_OFF": "QK_SEQUENCER_OFF",
  "SQ_TOGG": "QK_SEQUENCER_TOGGLE",
  "SQ_TMPD": "QK_SEQUENCER_TEMPO_DOWN",
  "SQ_TMPU": "QK_SEQUENCER_TEMPO_UP",
  "SQ_RESD": "QK_SEQUENCER_RESOLUTION_DOWN",
  "SQ_RESU": "QK_SEQUENCER_RESOLUTION_UP",
  "SQ_SALL": "QK_SEQUENCER_STEPS_ALL",
  "SQ_SCLR": "QK_SEQUENCER_STEPS_CLEAR",
  "JS_0": "QK_JOYSTICK",
  "JS_1": "QK_JOYSTICK_BUTTON_1",
  "JS_2": "QK_JOYSTICK_BUTTON_2",
  "JS_3": "QK_JOYSTICK_BUTTON_3",
  "JS_4": "QK_JOYSTICK_BUTTON_4",
  "JS_5": "QK_JOYSTICK_BUTTON_5",
  "JS_6": "QK_JOYSTICK_BUTTON_6",
  "JS_7": "QK_JOYSTICK_BUTTON_7",
  "JS_8": "QK_JOYSTICK_BUTTON_8",
  "JS_9": "QK_JOYSTICK_BUTTON_9",
  "JS_10": "QK_JOYSTICK_BUTTON_10",
  "JS_11": "QK_JOYSTICK_BUTTON_11",
  "JS_12": "QK_JOYSTICK_BUTTON_12",
  "JS_13": "QK_JOYSTICK_BUTTON_13",
  "JS_14": "QK_JOYSTICK_BUTTON_14",
  "JS_15": "QK_JOYSTICK_BUTTON_15",
  "JS_16": "QK_JOYSTICK_BUTTON_16",
  "JS_17": "QK_JOYSTICK_BUTTON_17",
  "JS_18": "QK_JOYSTICK_BUTTON_18",
  "JS_19": "QK_JOYSTICK_BUTTON_19",
  "JS_20": "QK_JOYSTICK_BUTTON_20",
  "JS_21": "QK_JOYSTICK_BUTTON_21",
  "JS_22": "QK_JOYSTICK_BUTTON_22",
  "JS_23": "QK_JOYSTICK_BUTTON_23",
  "JS_24": "QK_JOYSTICK_BUTTON_24",
  "JS_25": "QK_JOYSTICK_BUTTON_25",
  "JS_26": "QK_JOYSTICK_BUTTON_26",
  "JS_27": "QK_JOYSTICK_BUTTON_27",
  "JS_28": "QK_JOYSTICK_BUTTON_28",
  "JS_29": "QK_JOYSTICK_BUTTON_29",
  "JS_30": "QK_JOYSTICK_BUTTON_30",
  "JS_31": "QK_JOYSTICK_BUTTON_31",
  "PB_1": "QK_PROGRAMMABLE_BUTTON",
  "PB_2": "QK_PROGRAMMABLE_BUTTON_2",
  "PB_3": "QK_PROGRAMMABLE_BUTTON_3",
  "PB_4": "QK_PROGRAMMABLE_BUTTON_4",
  "PB_5": "QK_PROGRAMMABLE_BUTTON_5",
  "PB_6": "QK_PROGRAMMABLE_BUTTON_6",
  "PB_7": "QK_PROGRAMMABLE_BUTTON_7",
  "PB_8": "QK_PROGRAMMABLE_BUTTON_8",
  "PB_9": "QK_PROGRAMMABLE_BUTTON_9",
  "PB_10": "QK_PROGRAMMABLE_BUTTON_10",
  "PB_11": "QK_PROGRAMMABLE_BUTTON_11",
  "PB_12": "QK_PROGRAMMABLE_BUTTON_12",
  "PB_13": "QK_PROGRAMMABLE_BUTTON_13",
  "PB_14": "QK_PROGRAMMABLE_BUTTON_14",
  "PB_15": "QK_PROGRAMMABLE_BUTTON_15",
  "PB_16": "QK_PROGRAMMABLE_BUTTON_16",
  "PB_17": "QK_PROGRAMMABLE_BUTTON_17",
  "PB_18": "QK_PROGRAMMABLE_BUTTON_18",
  "PB_19": "QK_PROGRAMMABLE_BUTTON_19",
  "PB_20": "QK_PROGRAMMABLE_BUTTON_20",
  "PB_21": "QK_PROGRAMMABLE_BUTTON_21",
  "PB_22": "QK_PROGRAMMABLE_BUTTON_22",
  "PB_23": "QK_PROGRAMMABLE_BUTTON_23",
  "PB_24": "QK_PROGRAMMABLE_BUTTON_24",
  "PB_25": "QK_PROGRAMMABLE_BUTTON_25",
  "PB_26": "QK_PROGRAMMABLE_BUTTON_26",
  "PB_27": "QK_PROGRAMMABLE_BUTTON_27",
  "PB_28": "QK_PROGRAMMABLE_BUTTON_28",
  "PB_29": "QK_PROGRAMMABLE_BUTTON_29",
  "PB_30": "QK_PROGRAMMABLE_BUTTON_30",
  "PB_31": "QK_PROGRAMMABLE_BUTTON_31",
  "PB_32": "QK_PROGRAMMABLE_BUTTON_32",
  "AU_TOGG": "AU_TOG",
  "CK_TOGG": "CLICKY_TOGGLE",
  "CK_ON": "QK_AUDIO_CLICKY_ON",
  "CK_OFF": "QK_AUDIO_CLICKY_OFF",
  "CK_UP": "CLICKY_UP",
  "CK_DOWN": "CLICKY_DOWN",
  "CK_RST": "CLICKY_RESET",
  "MU_TOGG": "MU_TOG",
  "MU_NEXT": "MU_MOD",
  "AU_NEXT": "QK_AUDIO_VOICE_NEXT",
  "AU_PREV": "QK_AUDIO_VOICE_PREVIOUS",
  "MC_0": "M0",
  "MC_1": "M1",
  "MC_2": "M2",
  "MC_3": "M3",
  "MC_4": "M4",
  "MC_5": "M5",
  "MC_6": "M6",
  "MC_7": "M7",
  "MC_8": "M8",
  "MC_9": "M9",
  "MC_10": "M10",
  "MC_11": "M11",
  "MC_12": "M12",
  "MC_13": "M13",
  "MC_14": "M14",
  "MC_15": "M15",
  "MC_16": "M16",
  "MC_17": "M17",
  "MC_18": "M18",
  "MC_19": "M19",
  "MC_20": "M20",
  "MC_21": "M21",
  "MC_22": "M22",
  "MC_23": "M23",
  "MC_24": "M24",
  "MC_25": "M25",
  "MC_26": "M26",
  "MC_27": "M27",
  "MC_28": "M28",
  "MC_29": "M29",
  "MC_30": "M30",
  "MC_31": "M31",
  "BL_DOWN": "BL_DEC",
  "BL_UP": "BL_INC",
  "LM_ON": "QK_LED_MATRIX_ON",
  "LM_OFF": "QK_LED_MATRIX_OFF",
  "LM_TOGG": "QK_LED_MATRIX_TOGGLE",
  "LM_NEXT": "QK_LED_MATRIX_MODE_NEXT",
  "LM_PREV": "QK_LED_MATRIX_MODE_PREVIOUS",
  "LM_BRIU": "QK_LED_MATRIX_BRIGHTNESS_UP",
  "LM_BRID": "QK_LED_MATRIX_BRIGHTNESS_DOWN",
  "LM_SPDU": "QK_LED_MATRIX_SPEED_UP",
  "LM_SPDD": "QK_LED_MATRIX_SPEED_DOWN",
  "UG_TOGG": "RGB_TOG",
  "UG_NEXT": "RGB_MOD",
  "UG_PREV": "RGB_RMOD",
  "UG_HUEU": "RGB_HUI",
  "UG_HUED": "RGB_HUD",
  "UG_SATU": "RGB_SAI",
  "UG_SATD": "RGB_SAD",
  "UG_VALU": "RGB_VAI",
  "UG_VALD": "RGB_VAD",
  "UG_SPDU": "RGB_SPI",
  "UG_SPDD": "RGB_SPD",
  "RGB_M_TW": "RGB_MODE_TWINKLE",
  "RM_ON": "QK_RGB_MATRIX_ON",
  "RM_OFF": "QK_RGB_MATRIX_OFF",
  "RM_TOGG": "QK_RGB_MATRIX_TOGGLE",
  "RM_NEXT": "QK_RGB_MATRIX_MODE_NEXT",
  "RM_PREV": "QK_RGB_MATRIX_MODE_PREVIOUS",
  "RM_HUEU": "QK_RGB_MATRIX_HUE_UP",
  "RM_HUED": "QK_RGB_MATRIX_HUE_DOWN",
  "RM_SATU": "QK_RGB_MATRIX_SATURATION_UP",
  "RM_SATD": "QK_RGB_MATRIX_SATURATION_DOWN",
  "RM_VALU": "QK_RGB_MATRIX_VALUE_UP",
  "RM_VALD": "QK_RGB_MATRIX_VALUE_DOWN",
  "RM_SPDU": "QK_RGB_MATRIX_SPEED_UP",
  "RM_SPDD": "QK_RGB_MATRIX_SPEED_DOWN",
  "QK_BOOT": "RESET",
  "QK_RBT": "QK_REBOOT",
  "DB_TOGG": "QK_DEBUG_TOGGLE",
  "EE_CLR": "QK_CLEAR_EEPROM",
  "AS_DOWN": "KC_ASDN",
  "AS_UP": "KC_ASUP",
  "AS_RPT": "KC_ASRP",
  "AS_ON": "KC_ASON",
  "AS_OFF": "KC_ASOFF",
  "AS_TOGG": "KC_ASTG",
  "QK_GESC": "KC_GESC",
  "VK_TOGG": "QK_VELOCIKEY_TOGGLE",
  "SC_LCPO": "KC_LCPO",
  "SC_RCPC": "KC_RCPC",
  "SC_LSPO": "KC_LSPO",
  "SC_RSPC": "KC_RSPC",
  "SC_LAPO": "KC_LAPO",
  "SC_RAPC": "KC_RAPC",
  "SC_SENT": "KC_SFTENT",
  "OU_AUTO": "QK_OUTPUT_AUTO",
  "OU_USB": "QK_OUTPUT_USB",
  "OU_BT": "QK_OUTPUT_BLUETOOTH",
  "UC_NEXT": "QK_UNICODE_MODE_NEXT",
  "UC_PREV": "QK_UNICODE_MODE_PREVIOUS",
  "UC_MAC": "QK_UNICODE_MODE_MACOS",
  "UC_LINX": "QK_UNICODE_MODE_LINUX",
  "UC_WIN": "QK_UNICODE_MODE_WINDOWS",
  "UC_BSD": "QK_UNICODE_MODE_BSD",
  "UC_WINC": "QK_UNICODE_MODE_WINCOMPOSE",
  "UC_EMAC": "QK_UNICODE_MODE_EMACS",
  "HF_ON": "HPT_ON",
  "HF_OFF": "HPT_OFF",
  "HF_TOGG": "HPT_TOG",
  "HF_RST": "HPT_RST",
  "HF_FDBK": "HPT_FBK",
  "HF_BUZZ": "HPT_BUZ",
  "HF_NEXT": "HPT_MODI",
  "HF_PREV": "HPT_MODD",
  "HF_CONT": "HPT_CONT",
  "HF_CONU": "HPT_CONI",
  "HF_COND": "HPT_COND",
  "HF_DWLU": "HPT_DWLI",
  "HF_DWLD": "HPT_DWLD",
  "CM_ON": "CMB_ON",
  "CM_OFF": "CMB_OFF",
  "CM_TOGG": "CMB_TOG",
  "DM_REC1": "DYN_REC_START1",
  "DM_REC2": "DYN_REC_START2",
  "DM_RSTP": "DYN_REC_STOP",
  "DM_PLY1": "DYN_MACRO_PLAY1",
  "DM_PLY2": "DYN_MACRO_PLAY2",
  "QK_LEAD": "QK_LEADER",
  "OS_ON": "QK_ONE_SHOT_ON",
  "OS_OFF": "QK_ONE_SHOT_OFF",
  "OS_TOGG": "QK_ONE_SHOT_TOGGLE",
  "KO_TOGG": "QK_KEY_OVERRIDE_TOGGLE",
  "KO_ON": "QK_KEY_OVERRIDE_ON",
  "KO_OFF": "QK_KEY_OVERRIDE_OFF",
  "SE_LOCK": "QK_SECURE_LOCK",
  "SE_UNLK": "QK_SECURE_UNLOCK",
  "SE_TOGG": "QK_SECURE_TOGGLE",
  "SE_REQ": "QK_SECURE_REQUEST",
  "DT_PRNT": "QK_DYNAMIC_TAPPING_TERM_PRINT",
  "DT_UP": "QK_DYNAMIC_TAPPING_TERM_UP",
  "DT_DOWN": "QK_DYNAMIC_TAPPING_TERM_DOWN",
  "CW_TOGG": "QK_CAPS_WORD_TOGGLE",
  "AC_ON": "QK_AUTOCORRECT_ON",
  "AC_OFF": "QK_AUTOCORRECT_OFF",
  "AC_TOGG": "QK_AUTOCORRECT_TOGGLE",
  "TL_LOWR": "FN_MO13",
  "TL_UPPR": "FN_MO23",
  "QK_REP": "QK_REPEAT_KEY",
  "QK_AREP": "QK_ALT_REPEAT_KEY",
  "STN__MIN": "QK_STENO",
  "STN_FN": "QK_STENO",
  "STN_NUM": "STN_NUM",
  "STN_N1": "STN_NUM",
  "STN_N2": "STN_N2",
  "STN_N3": "STN_N3",
  "STN_N4": "STN_N4",
  "STN_N5": "STN_N5",
  "STN_N6": "STN_N6",
  "STN_SL": "STN_SL",
  "STN_S1": "STN_SL",
  "STN_S2": "STN_S2",
  "STN_TL": "STN_TL",
  "STN_KL": "STN_KL",
  "STN_PL": "STN_PL",
  "STN_WL": "STN_WL",
  "STN_HL": "STN_HL",
  "STN_RL": "STN_RL",
  "STN_A": "STN_A",
  "STN_O": "STN_O",
  "STN_STR": "STN_STR",
  "STN_ST1": "STN_STR",
  "STN_ST2": "STN_ST2",
  "STN_RES1": "STN_RES1",
  "STN_RE1": "STN_RES1",
  "STN_RES2": "STN_RES2",
  "STN_RE2": "STN_RES2",
  "STN_PWR": "STN_PWR",
  "STN_ST3": "STN_ST3",
  "STN_ST4": "STN_ST4",
  "STN_E": "STN_E",
  "STN_U": "STN_U",
  "STN_FR": "STN_FR",
  "STN_RR": "STN_RR",
  "STN_PR": "STN_PR",
  "STN_BR": "STN_BR",
  "STN_LR": "STN_LR",
  "STN_GR": "STN_GR",
  "STN_TR": "STN_TR",
  "STN_SR": "STN_SR",
  "STN_DR": "STN_DR",
  "STN_N7": "STN_N7",
  "STN_N8": "STN_N8",
  "STN_N9": "STN_N9",
  "STN_NA": "STN_NA",
  "STN_NB": "STN_NB",
  "STN_NC": "STN_NC",
  "STN_ZR": "STN_ZR",
  "STN__MAX": "STN_ZR",
  "KC_NLCK": "KC_NUMLOCK",
  "KC_SLCK": "KC_SCROLLLOCK",
  "KC_ZKHK": "KC_GRAVE",
  "KC_CLCK": "KC_CAPSLOCK",
  "KC_HAEN": "KC_LANG1",
  "KC_HANJ": "KC_LANG2",
  "LCS(kc)": "C_S(kc)",
  "LSG(kc)": "SGUI(kc)",
  "LCS_T(kc)": "C_S_T(kc)",
  "LSG_T(kc)": "SGUI_T(kc)",
  "LCG_SWP": "MAGIC_SWAP_LCTL_LGUI",
  "LCG_NRM": "MAGIC_UNSWAP_LCTL_LGUI",
  "RCG_SWP": "MAGIC_SWAP_RCTL_RGUI",
  "RCG_NRM": "MAGIC_UNSWAP_RCTL_RGUI",
  "LAG_SWP": "MAGIC_SWAP_LALT_LGUI",
  "LAG_NRM": "MAGIC_UNSWAP_LALT_LGUI",
  "RAG_SWP": "MAGIC_SWAP_RALT_RGUI",
  "RAG_NRM": "MAGIC_UNSWAP_RALT_RGUI",
  "GUI_OFF": "MAGIC_NO_GUI",
  "GUI_ON": "MAGIC_UNNO_GUI",
  "KC_LOCKING_CAPS": "KC_LCAP",
  "KC_LOCKING_NUM": "KC_LNUM",
  "KC_LOCKING_SCROLL": "KC_LSCR",
  "MI_Db_1": "MI_Cs_1",
  "MI_Eb_1": "MI_Ds_1",
  "MI_Gb_1": "MI_Fs_1",
  "MI_Ab_1": "MI_Gs_1",
  "MI_Bb_1": "MI_As_1",
  "MI_Db_2": "MI_Cs_2",
  "MI_Eb_2": "MI_Ds_2",
  "MI_Gb_2": "MI_Fs_2",
  "MI_Ab_2": "MI_Gs_2",
  "MI_Bb_2": "MI_As_2",
  "MI_Db_3": "MI_Cs_3",
  "MI_Eb_3": "MI_Ds_3",
  "MI_Gb_3": "MI_Fs_3",
  "MI_Ab_3": "MI_Gs_3",
  "MI_Bb_3": "MI_As_3",
  "MI_Db_4": "MI_Cs_4",
  "MI_Eb_4": "MI_Ds_4",
  "MI_Gb_4": "MI_Fs_4",
  "MI_Ab_4": "MI_Gs_4",
  "MI_Bb_4": "MI_As_4",
  "MI_Db_5": "MI_Cs_5",
  "MI_Eb_5": "MI_Ds_5",
  "MI_Gb_5": "MI_Fs_5",
  "MI_Ab_5": "MI_Gs_5",
  "MI_Bb_5": "MI_As_5",
  "MI_VEL_0": "MI_VEL_1",
  "LG(kc)": "LGUI(kc)",
  "LG_T(kc)": "LGUI_T(kc)",
  "LA(kc)": "LALT(kc)",
  "LA_T(kc)": "LALT_T(kc)",
  "LAG(kc)": "LAG(kc)",
  "LAG_T(kc)": "LAG_T(kc)",
  "LC(kc)": "LCTL(kc)",
  "LC_T(kc)": "LCTL_T(kc)",
  "LS(kc)": "LSFT(kc)",
  "LS_T(kc)": "LSFT_T(kc)",
  "LSAG(kc)": "LSAG(kc)",
  "LSAG_T(kc)": "LSAG_T(kc)",
  "LSC(kc)": "C_S(kc)",
  "LSC_T(kc)": "C_S_T(kc)",
  "LSCG(kc)": "LSCG(kc)",
  "LSCG_T(kc)": "LSCG_T(kc)",
  "LSCA(kc)": "MEH(kc)",
  "LSCA_T(kc)": "MEH_T(kc)",
  "LSCAG(kc)": "HYPR(kc)",
  "LSCAG_T(kc)": "ALL_T(kc)",
  "R(kc)": "R(kc)",
  "R_T(kc)": "R_T(kc)",
  "RG(kc)": "RGUI(kc)",
  "RG_T(kc)": "RGUI_T(kc)",
  "RA(kc)": "RALT(kc)",
  "RA_T(kc)": "RALT_T(kc)",
  "RAG(kc)": "RAG(kc)",
  "RAG_T(kc)": "RAG_T(kc)",
  "RC(kc)": "RCTL(kc)",
  "RC_T(kc)": "RCTL_T(kc)",
  "RCA(kc)": "RCA(kc)",
  "RCA_T(kc)": "RCA_T(kc)",
  "RCAG(kc)": "RCAG(kc)",
  "RS(kc)": "RSFT(kc)",
  "RS_T(kc)": "RSFT_T(kc)",
  "RSG(kc)": "RSG(kc)",
  "RSG_T(kc)": "RSG_T(kc)",
  "RSA(kc)": "RSA(kc)",
  "RSA_T(kc)": "RSA_T(kc)",
  "RSAG(kc)": "RSAG(kc)",
  "RSAG_T(kc)": "RSAG_T(kc)",
  "RSC(kc)": "RSC(kc)",
  "RSC_T(kc)": "RSC_T(kc)",
  "RSCG(kc)": "RSCG(kc)",
  "RSCG_T(kc)": "RSCG_T(kc)",
  "RSCA(kc)": "RSCA(kc)",
  "RSCA_T(kc)": "RSCA_T(kc)",
  "RSCAG(kc)": "RSCAG(kc)",
  "RSCAG_T(kc)": "RSCAG_T(kc)"
};

