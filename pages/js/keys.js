// keys.js
//
////////////////////////////////////
//
//  Mapping keycodes around.
//
////////////////////////////////////

// from keycodes.keycodes_v5 import keycodes_v5
// from keycodes.keycodes_v6 import keycodes_v6

const KEY = {
  KEYCODES_MAP: {},
  RAWCODES_MAP: {},
  FROMJS_MAP: {},

  generateAllKeycodes(kbinfo) {
    function K(qmkid, str, opts) {
      if (!opts) opts = {};
      if (str === '') str = qmkid;
      return Object.assign(opts, {
        qmkid: qmkid,
        str: str,
      });
    }

    const KEYCODES = [];

    KEYCODES_SPECIAL = [
        K('KC_NO', ' '),
        K('KC_TRNS', '▽',  { alias: ['KC_TRANSPARENT'], title: "Transparent - uses default layer" }),
    ];

    KEYCODES_BASIC_NUMPAD = [
        K('KC_NUMLOCK', 'Num\nLock',  { recorder_alias: ['num lock'], alias: ['KC_NLCK']}),
        K('KC_KP_SLASH', '/',  { alias: ['KC_PSLS']}),
        K('KC_KP_ASTERISK', '*',  { alias: ['KC_PAST']}),
        K('KC_KP_MINUS', '-',  { alias: ['KC_PMNS']}),
        K('KC_KP_PLUS', '+',  { alias: ['KC_PPLS']}),
        K('KC_KP_ENTER', 'Num\nEnter',  { alias: ['KC_PENT']}),
        K('KC_KP_1', '1',  { alias: ['KC_P1']}),
        K('KC_KP_2', '2',  { alias: ['KC_P2']}),
        K('KC_KP_3', '3',  { alias: ['KC_P3']}),
        K('KC_KP_4', '4',  { alias: ['KC_P4']}),
        K('KC_KP_5', '5',  { alias: ['KC_P5']}),
        K('KC_KP_6', '6',  { alias: ['KC_P6']}),
        K('KC_KP_7', '7',  { alias: ['KC_P7']}),
        K('KC_KP_8', '8',  { alias: ['KC_P8']}),
        K('KC_KP_9', '9',  { alias: ['KC_P9']}),
        K('KC_KP_0', '0',  { alias: ['KC_P0']}),
        K('KC_KP_DOT', '.',  { alias: ['KC_PDOT']}),
        K('KC_KP_EQUAL', ': ',  { alias: ['KC_PEQL']}),
        K('KC_KP_COMMA', ',',  { alias: ['KC_PCMM']}),
    ];

    KEYCODES_BASIC_NAV = [
        K('KC_PSCREEN', 'Print\nScreen',  { alias: ['KC_PSCR']}),
        K('KC_SCROLLLOCK', 'Scroll\nLock',  { recorder_alias: ['scroll lock'], alias: ['KC_SLCK', 'KC_BRMD']}),
        K('KC_PAUSE', 'Pause',  { recorder_alias: ['pause', 'break'], alias: ['KC_PAUS', 'KC_BRK', 'KC_BRMU']}),
        K('KC_INSERT', 'Insert',  { recorder_alias: ['insert'], alias: ['KC_INS']}),
        K('KC_HOME', 'Home',  { recorder_alias: ['home']}),
        K('KC_PGUP', 'Page\nUp',  { recorder_alias: ['page up']}),
        K('KC_DELETE', 'Del',  { recorder_alias: ['delete'], alias: ['KC_DEL']}),
        K('KC_END', 'End',  { recorder_alias: ['end']}),
        K('KC_PGDOWN', 'Page\nDown',  { recorder_alias: ['page down'], alias: ['KC_PGDN']}),
        K('KC_RIGHT', 'Right',  { recorder_alias: ['right'], alias: ['KC_RGHT']}),
        K('KC_LEFT', 'Left',  { recorder_alias: ['left']}),
        K('KC_DOWN', 'Down',  { recorder_alias: ['down']}),
        K('KC_UP', 'Up',  { recorder_alias: ['up']}),
    ];

    KEYCODES_BASIC = [
        K('KC_A', 'A',  { printable: 'a', recorder_alias: ['a']}),
        K('KC_B', 'B',  { printable: 'b', recorder_alias: ['b']}),
        K('KC_C', 'C',  { printable: 'c', recorder_alias: ['c']}),
        K('KC_D', 'D',  { printable: 'd', recorder_alias: ['d']}),
        K('KC_E', 'E',  { printable: 'e', recorder_alias: ['e']}),
        K('KC_F', 'F',  { printable: 'f', recorder_alias: ['f']}),
        K('KC_G', 'G',  { printable: 'g', recorder_alias: ['g']}),
        K('KC_H', 'H',  { printable: 'h', recorder_alias: ['h']}),
        K('KC_I', 'I',  { printable: 'i', recorder_alias: ['i']}),
        K('KC_J', 'J',  { printable: 'j', recorder_alias: ['j']}),
        K('KC_K', 'K',  { printable: 'k', recorder_alias: ['k']}),
        K('KC_L', 'L',  { printable: 'l', recorder_alias: ['l']}),
        K('KC_M', 'M',  { printable: 'm', recorder_alias: ['m']}),
        K('KC_N', 'N',  { printable: 'n', recorder_alias: ['n']}),
        K('KC_O', 'O',  { printable: 'o', recorder_alias: ['o']}),
        K('KC_P', 'P',  { printable: 'p', recorder_alias: ['p']}),
        K('KC_Q', 'Q',  { printable: 'q', recorder_alias: ['q']}),
        K('KC_R', 'R',  { printable: 'r', recorder_alias: ['r']}),
        K('KC_S', 'S',  { printable: 's', recorder_alias: ['s']}),
        K('KC_T', 'T',  { printable: 't', recorder_alias: ['t']}),
        K('KC_U', 'U',  { printable: 'u', recorder_alias: ['u']}),
        K('KC_V', 'V',  { printable: 'v', recorder_alias: ['v']}),
        K('KC_W', 'W',  { printable: 'w', recorder_alias: ['w']}),
        K('KC_X', 'X',  { printable: 'x', recorder_alias: ['x']}),
        K('KC_Y', 'Y',  { printable: 'y', recorder_alias: ['y']}),
        K('KC_Z', 'Z',  { printable: 'z', recorder_alias: ['z']}),
        K('KC_1', '!\n1',  { printable: '1', recorder_alias: ['1']}),
        K('KC_2', '@\n2',  { printable: '2', recorder_alias: ['2']}),
        K('KC_3', '#\n3',  { printable: '3', recorder_alias: ['3']}),
        K('KC_4', '$\n4',  { printable: '4', recorder_alias: ['4']}),
        K('KC_5', '%\n5',  { printable: '5', recorder_alias: ['5']}),
        K('KC_6', '^\n6',  { printable: '6', recorder_alias: ['6']}),
        K('KC_7', '&\n7',  { printable: '7', recorder_alias: ['7']}),
        K('KC_8', '*\n8',  { printable: '8', recorder_alias: ['8']}),
        K('KC_9', '(\n9',  { printable: '9', recorder_alias: ['9']}),
        K('KC_0', ')\n0',  { printable: '0', recorder_alias: ['0']}),
        K('KC_ENTER', 'Enter',  { recorder_alias: ['enter'], alias: ['KC_ENT']}),
        K('KC_ESCAPE', 'Esc',  { recorder_alias: ['esc'], alias: ['KC_ESC']}),
        K('KC_BSPACE', 'Bksp',  { recorder_alias: ['backspace'], alias: ['KC_BSPC']}),
        K('KC_TAB', 'Tab',  { recorder_alias: ['tab']}),
        K('KC_SPACE', 'Space',  { recorder_alias: ['space'], alias: ['KC_SPC']}),
        K('KC_MINUS', '_\n-',  { printable: '-', recorder_alias: ['-'], alias: ['KC_MINS']}),
        K('KC_EQUAL', '+\n=',  { printable: '=', recorder_alias: ['='], alias: ['KC_EQL']}),
        K('KC_LBRACKET', '{\n[',  { printable: '[', recorder_alias: ['['], alias: ['KC_LBRC']}),
        K('KC_RBRACKET', ' }\n]',  { printable: ']', recorder_alias: [']'], alias: ['KC_RBRC']}),
        K('KC_BSLASH', '|\n\\',  { printable: '\\', recorder_alias: ['\\'], alias: ['KC_BSLS']}),
        K('KC_SCOLON', ':\n;',  { printable: ';', recorder_alias: [';'], alias: ['KC_SCLN']}),
        K('KC_QUOTE', '"\n\'',  { printable: '"', recorder_alias: ['\''], alias: ['KC_QUOT']}),
        K('KC_GRAVE', '~\n`',  { printable: '`', recorder_alias: ['`'], alias: ['KC_GRV', 'KC_ZKHK']}),
        K('KC_COMMA', '<\n,',  { printable: ',', recorder_alias: [','], alias: ['KC_COMM']}),
        K('KC_DOT', '>\n.',  { printable: '.', recorder_alias: ['.']}),
        K('KC_SLASH', '?\n/',  { printable: '/', recorder_alias: ['/'], alias: ['KC_SLSH']}),
        K('KC_CAPSLOCK', 'Caps\nLock',  { recorder_alias: ['caps lock'], alias: ['KC_CLCK', 'KC_CAPS']}),
        K('KC_F1', 'F1',  { recorder_alias: ['f1']}),
        K('KC_F2', 'F2',  { recorder_alias: ['f2']}),
        K('KC_F3', 'F3',  { recorder_alias: ['f3']}),
        K('KC_F4', 'F4',  { recorder_alias: ['f4']}),
        K('KC_F5', 'F5',  { recorder_alias: ['f5']}),
        K('KC_F6', 'F6',  { recorder_alias: ['f6']}),
        K('KC_F7', 'F7',  { recorder_alias: ['f7']}),
        K('KC_F8', 'F8',  { recorder_alias: ['f8']}),
        K('KC_F9', 'F9',  { recorder_alias: ['f9']}),
        K('KC_F10', 'F10',  { recorder_alias: ['f10']}),
        K('KC_F11', 'F11',  { recorder_alias: ['f11']}),
        K('KC_F12', 'F12',  { recorder_alias: ['f12']}),

        K('KC_APPLICATION', 'Menu',  { recorder_alias: ['menu', 'left menu', 'right menu'], alias: ['KC_APP']}),
        K('KC_LCTRL', 'LCtrl',  { recorder_alias: ['left ctrl', 'ctrl'], alias: ['KC_LCTL']}),
        K('KC_LSHIFT', 'LShift',  { recorder_alias: ['left shift', 'shift'], alias: ['KC_LSFT']}),
        K('KC_LALT', 'LAlt',  { recorder_alias: ['alt'], alias: ['KC_LOPT']}),
        K('KC_LGUI', 'LGui',  { recorder_alias: ['left windows', 'windows'], alias: ['KC_LCMD', 'KC_LWIN']}),
        K('KC_RCTRL', 'RCtrl',  { recorder_alias: ['right ctrl'], alias: ['KC_RCTL']}),
        K('KC_RSHIFT', 'RShift',  { recorder_alias: ['right shift'], alias: ['KC_RSFT']}),
        K('KC_RALT', 'RAlt',  { alias: ['KC_ALGR', 'KC_ROPT']}),
        K('KC_RGUI', 'RGui',  { recorder_alias: ['right windows'], alias: ['KC_RCMD', 'KC_RWIN']}),
    ];

    KEYCODES_BASIC.push(...KEYCODES_BASIC_NUMPAD)
    KEYCODES_BASIC.push(...KEYCODES_BASIC_NAV)

    KEYCODES_SHIFTED = [
        K('KC_TILD', '~'),
        K('KC_EXLM', '!'),
        K('KC_AT', '@'),
        K('KC_HASH', '#'),
        K('KC_DLR', '$'),
        K('KC_PERC', '%'),
        K('KC_CIRC', '^'),
        K('KC_AMPR', '&'),
        K('KC_ASTR', '*'),
        K('KC_LPRN', '('),
        K('KC_RPRN', ')'),
        K('KC_UNDS', '_'),
        K('KC_PLUS', '+'),
        K('KC_LCBR', '{'),
        K('KC_RCBR', ' }'),
        K('KC_LT', '<'),
        K('KC_GT', '>'),
        K('KC_COLN', ':'),
        K('KC_PIPE', '|'),
        K('KC_QUES', '?'),
        K('KC_DQUO', '"'),
    ];

    KEYCODES_ISO = [
        K('KC_NONUS_HASH', '~\n#',  { desc: 'Non-US # and ~', alias: ['KC_NUHS']}),
        K('KC_NONUS_BSLASH', '|\n\\',  { desc: 'Non-US \\ and |', alias: ['KC_NUBS']}),
        K('KC_RO', '_\n\\',  { desc: 'JIS \\ and _', alias: ['KC_INT1']}),
        K('KC_KANA', 'カタカナ\nひらがな',  { desc: 'JIS Katakana/Hiragana', alias: ['KC_INT2']}),
        K('KC_JYEN', '|\n¥',  { alias: ['KC_INT3']}),
        K('KC_HENK', '変換',  { desc: 'JIS Henkan', alias: ['KC_INT4']}),
        K('KC_MHEN', '無変換',  { desc: 'JIS Muhenkan', alias: ['KC_INT5']}),
    ];

    KEYCODES_ISO_KR = [
        K('KC_LANG1', '한영\nかな',  { desc: 'Korean Han/Yeong / JP Mac Kana', alias: ['KC_HAEN']}),
        K('KC_LANG2', '漢字\n英数',  { desc: 'Korean Hanja / JP Mac Eisu', alias: ['KC_HANJ']}),
    ];

    KEYCODES_ISO.push(...KEYCODES_ISO_KR)

    RESET_KEYCODE = 'RESET'

    KEYCODES_BOOT = [
        K('RESET', 'Reset',  { desc: 'Reboot to bootloader' }),
    ];

    KEYCODES_MODIFIERS = [
        K('OSM(MOD_LSFT)', 'OSM\nLSft',  { desc: 'Enable Left Shift for one keypress' }),
        K('OSM(MOD_LCTL)', 'OSM\nLCtl',  { desc: 'Enable Left Control for one keypress' }),
        K('OSM(MOD_LALT)', 'OSM\nLAlt',  { desc: 'Enable Left Alt for one keypress' }),
        K('OSM(MOD_LGUI)', 'OSM\nLGUI',  { desc: 'Enable Left GUI for one keypress' }),
        K('OSM(MOD_RSFT)', 'OSM\nRSft',  { desc: 'Enable Right Shift for one keypress' }),
        K('OSM(MOD_RCTL)', 'OSM\nRCtl',  { desc: 'Enable Right Control for one keypress' }),
        K('OSM(MOD_RALT)', 'OSM\nRAlt',  { desc: 'Enable Right Alt for one keypress' }),
        K('OSM(MOD_RGUI)', 'OSM\nRGUI',  { desc: 'Enable Right GUI for one keypress' }),
        K('OSM(MOD_LCTL|MOD_LSFT)', 'OSM\nCS',  { desc: 'Enable Left Control and Shift for one keypress' }),
        K('OSM(MOD_LCTL|MOD_LALT)', 'OSM\nCA',  { desc: 'Enable Left Control and Alt for one keypress' }),
        K('OSM(MOD_LCTL|MOD_LGUI)', 'OSM\nCG',  { desc: 'Enable Left Control and GUI for one keypress' }),
        K('OSM(MOD_LSFT|MOD_LALT)', 'OSM\nSA',  { desc: 'Enable Left Shift and Alt for one keypress' }),
        K('OSM(MOD_LSFT|MOD_LGUI)', 'OSM\nSG',  { desc: 'Enable Left Shift and GUI for one keypress' }),
        K('OSM(MOD_LALT|MOD_LGUI)', 'OSM\nAG',  { desc: 'Enable Left Alt and GUI for one keypress' }),
        K('OSM(MOD_RCTL|MOD_RSFT)', 'OSM\nRCS',  { desc: 'Enable Right Control and Shift for one keypress' }),
        K('OSM(MOD_RCTL|MOD_RALT)', 'OSM\nRCA',  { desc: 'Enable Right Control and Alt for one keypress' }),
        K('OSM(MOD_RCTL|MOD_RGUI)', 'OSM\nRCG',  { desc: 'Enable Right Control and GUI for one keypress' }),
        K('OSM(MOD_RSFT|MOD_RALT)', 'OSM\nRSA',  { desc: 'Enable Right Shift and Alt for one keypress' }),
        K('OSM(MOD_RSFT|MOD_RGUI)', 'OSM\nRSG',  { desc: 'Enable Right Shift and GUI for one keypress' }),
        K('OSM(MOD_RALT|MOD_RGUI)', 'OSM\nRAG',  { desc: 'Enable Right Alt and GUI for one keypress' }),
        K('OSM(MOD_LCTL|MOD_LSFT|MOD_LGUI)', 'OSM\nCSG',  { desc: 'Enable Left Control, Shift, and GUI for one keypress' }),
        K('OSM(MOD_LCTL|MOD_LALT|MOD_LGUI)', 'OSM\nCAG',  { desc: 'Enable Left Control, Alt, and GUI for one keypress' }),
        K('OSM(MOD_LSFT|MOD_LALT|MOD_LGUI)', 'OSM\nSAG',  { desc: 'Enable Left Shift, Alt, and GUI for one keypress' }),
        K('OSM(MOD_RCTL|MOD_RSFT|MOD_RGUI)', 'OSM\nRCSG',  { desc: 'Enable Right Control, Shift, and GUI for one keypress' }),
        K('OSM(MOD_RCTL|MOD_RALT|MOD_RGUI)', 'OSM\nRCAG',  { desc: 'Enable Right Control, Alt, and GUI for one keypress' }),
        K('OSM(MOD_RSFT|MOD_RALT|MOD_RGUI)', 'OSM\nRSAG',  { desc: 'Enable Right Shift, Alt, and GUI for one keypress' }),
        K('OSM(MOD_MEH)', 'OSM\nMeh',  { desc: 'Enable Left Control, Shift, and Alt for one keypress' }),
        K('OSM(MOD_HYPR)', 'OSM\nHyper',  { desc: 'Enable Left Control, Shift, Alt, and GUI for one keypress' }),
        K('OSM(MOD_RCTL|MOD_RSFT|MOD_RALT)', 'OSM\nRMeh',  { desc: 'Enable Right Control, Shift, and Alt for one keypress' }),
        K('OSM(MOD_RCTL|MOD_RSFT|MOD_RALT|MOD_RGUI)', 'OSM\nRHyp',  { desc: 'Enable Right Control, Shift, Alt, and GUI for one keypress' }),

        K('LSFT(kc)', 'LSft\n(kc)',  { masked: true}),
        K('LCTL(kc)', 'LCtl\n(kc)',  { masked: true}),
        K('LALT(kc)', 'LAlt\n(kc)',  { masked: true}),
        K('LGUI(kc)', 'LGui\n(kc)',  { masked: true}),
        K('RSFT(kc)', 'RSft\n(kc)',  { masked: true}),
        K('RCTL(kc)', 'RCtl\n(kc)',  { masked: true}),
        K('RALT(kc)', 'RAlt\n(kc)',  { masked: true}),
        K('RGUI(kc)', 'RGui\n(kc)',  { masked: true}),
        K('C_S(kc)', 'LCS\n(kc)',  { desc: 'LCTL + LSFT', masked: true, alias: ['LCS(kc)']}),
        K('LCA(kc)', 'LCA\n(kc)',  { desc: 'LCTL + LALT', masked: true}),
        K('LCG(kc)', 'LCG\n(kc)',  { desc: 'LCTL + LGUI', masked: true}),
        K('LSA(kc)', 'LSA\n(kc)',  { desc: 'LSFT + LALT', masked: true}),
        K('SGUI(kc)', 'LSG\n(kc)',  { desc: 'LGUI + LSFT', masked: true, alias: ['LSG(kc)']}),
        K('LCAG(kc)', 'LCAG\n(kc)',  { desc: 'LCTL + LALT + LGUI', masked: true}),
        K('RCG(kc)', 'RCG\n(kc)',  { desc: 'RCTL + RGUI', masked: true}),
        K('MEH(kc)', 'Meh\n(kc)',  { desc: 'LCTL + LSFT + LALT', masked: true}),
        K('HYPR(kc)', 'Hyper\n(kc)',  { desc: 'LCTL + LSFT + LALT + LGUI', masked: true}),

        K('LSFT_T(kc)', 'LSft_T\n(kc)',  { desc: 'Left Shift when held, kc when tapped', masked: true}),
        K('LCTL_T(kc)', 'LCtl_T\n(kc)',  { desc: 'Left Control when held, kc when tapped', masked: true}),
        K('LALT_T(kc)', 'LAlt_T\n(kc)',  { desc: 'Left Alt when held, kc when tapped', masked: true}),
        K('LGUI_T(kc)', 'LGui_T\n(kc)',  { desc: 'Left GUI when held, kc when tapped', masked: true}),
        K('RSFT_T(kc)', 'RSft_T\n(kc)',  { desc: 'Right Shift when held, kc when tapped', masked: true}),
        K('RCTL_T(kc)', 'RCtl_T\n(kc)',  { desc: 'Right Control when held, kc when tapped', masked: true}),
        K('RALT_T(kc)', 'RAlt_T\n(kc)',  { desc: 'Right Alt when held, kc when tapped', masked: true}),
        K('RGUI_T(kc)', 'RGui_T\n(kc)',  { desc: 'Right GUI when held, kc when tapped', masked: true}),
        K('C_S_T(kc)', 'LCS_T\n(kc)',  { desc: 'Left Control + Left Shift when held, kc when tapped', masked: true, alias: ['LCS_T(kc)'] }),
        K('LCA_T(kc)', 'LCA_T\n(kc)',  { desc: 'LCTL + LALT when held, kc when tapped', masked: true}),
        K('LCG_T(kc)', 'LCG_T\n(kc)',  { desc: 'LCTL + LGUI when held, kc when tapped', masked: true}),
        K('LSA_T(kc)', 'LSA_T\n(kc)',  { desc: 'LSFT + LALT when held, kc when tapped', masked: true}),
        K('SGUI_T(kc)', 'LSG_T\n(kc)',  { desc: 'LGUI + LSFT when held, kc when tapped', masked: true, alias: ['LSG_T(kc)']}),
        K('LCAG_T(kc)', 'LCAG_T\n(kc)',  { desc: 'LCTL + LALT + LGUI when held, kc when tapped', masked: true}),
        K('RCG_T(kc)', 'RCG_T\n(kc)',  { desc: 'RCTL + RGUI when held, kc when tapped', masked: true}),
        K('RCAG_T(kc)', 'RCAG_T\n(kc)',  { desc: 'RCTL + RALT + RGUI when held, kc when tapped', masked: true}),
        K('MEH_T(kc)', 'Meh_T\n(kc)',  { desc: 'LCTL + LSFT + LALT when held, kc when tapped', masked: true}),
        K('ALL_T(kc)', 'ALL_T\n(kc)',  { desc: 'LCTL + LSFT + LALT + LGUI when held, kc when tapped', masked: true}),

        K('KC_GESC', '~\nEsc',  { desc: 'Esc normally, but ~ when Shift or GUI is pressed' }),
        K('KC_LSPO', 'LS\n(',  { desc: 'Left Shift when held, ( when tapped' }),
        K('KC_RSPC', 'RS\n)',  { desc: 'Right Shift when held, ) when tapped' }),
        K('KC_LCPO', 'LC\n(',  { desc: 'Left Control when held, ( when tapped' }),
        K('KC_RCPC', 'RC\n)',  { desc: 'Right Control when held, ) when tapped' }),
        K('KC_LAPO', 'LA\n(',  { desc: 'Left Alt when held, ( when tapped' }),
        K('KC_RAPC', 'RA\n)',  { desc: 'Right Alt when held, ) when tapped' }),
        K('KC_SFTENT', 'RS\nEnter',  { desc: 'Right Shift when held, Enter when tapped' }),
    ];

    KEYCODES_QUANTUM = [
        K('MAGIC_SWAP_CONTROL_CAPSLOCK', 'Swap\nCtrl\nCaps',  { desc: 'Swap Caps Lock and Left Control', alias: ['CL_SWAP']}),
        K('MAGIC_UNSWAP_CONTROL_CAPSLOCK', 'Unswap\nCtrl\nCaps',  { desc: 'Unswap Caps Lock and Left Control', alias: ['CL_NORM']}),
        K('MAGIC_CAPSLOCK_TO_CONTROL', 'Caps\nto\nCtrl',  { desc: 'Treat Caps Lock as Control', alias: ['CL_CTRL']}),
        K('MAGIC_UNCAPSLOCK_TO_CONTROL', 'Caps\nnot to\nCtrl',  { desc: 'Stop treating Caps Lock as Control', alias: ['CL_CAPS']}),
        K('MAGIC_SWAP_LCTL_LGUI', 'Swap\nLCtl\nLGui',  { desc: 'Swap Left Control and GUI', alias: ['LCG_SWP']}),
        K('MAGIC_UNSWAP_LCTL_LGUI', 'Unswap\nLCtl\nLGui',  { desc: 'Unswap Left Control and GUI', alias: ['LCG_NRM']}),
        K('MAGIC_SWAP_RCTL_RGUI', 'Swap\nRCtl\nRGui',  { desc: 'Swap Right Control and GUI', alias: ['RCG_SWP']}),
        K('MAGIC_UNSWAP_RCTL_RGUI', 'Unswap\nRCtl\nRGui',  { desc: 'Unswap Right Control and GUI', alias: ['RCG_NRM']}),
        K('MAGIC_SWAP_CTL_GUI', 'Swap\nCtl\nGui',  { desc: 'Swap Control and GUI on both sides', alias: ['CG_SWAP']}),
        K('MAGIC_UNSWAP_CTL_GUI', 'Unswap\nCtl\nGui',  { desc: 'Unswap Control and GUI on both sides', alias: ['CG_NORM']}),
        K('MAGIC_TOGGLE_CTL_GUI', 'Toggle\nCtl\nGui',  { desc: 'Toggle Control and GUI swap on both sides', alias: ['CG_TOGG']}),
        K('MAGIC_SWAP_LALT_LGUI', 'Swap\nLAlt\nLGui',  { desc: 'Swap Left Alt and GUI', alias: ['LAG_SWP']}),
        K('MAGIC_UNSWAP_LALT_LGUI', 'Unswap\nLAlt\nLGui',  { desc: 'Unswap Left Alt and GUI', alias: ['LAG_NRM']}),
        K('MAGIC_SWAP_RALT_RGUI', 'Swap\nRAlt\nRGui',  { desc: 'Swap Right Alt and GUI', alias: ['RAG_SWP']}),
        K('MAGIC_UNSWAP_RALT_RGUI', 'Unswap\nRAlt\nRGui',  { desc: 'Unswap Right Alt and GUI', alias: ['RAG_NRM']}),
        K('MAGIC_SWAP_ALT_GUI', 'Swap\nAlt\nGui',  { desc: 'Swap Alt and GUI on both sides', alias: ['AG_SWAP']}),
        K('MAGIC_UNSWAP_ALT_GUI', 'Unswap\nAlt\nGui',  { desc: 'Unswap Alt and GUI on both sides', alias: ['AG_NORM']}),
        K('MAGIC_TOGGLE_ALT_GUI', 'Toggle\nAlt\nGui',  { desc: 'Toggle Alt and GUI swap on both sides', alias: ['AG_TOGG']}),
        K('MAGIC_NO_GUI', 'GUI\nOff',  { desc: 'Disable the GUI keys', alias: ['GUI_OFF']}),
        K('MAGIC_UNNO_GUI', 'GUI\nOn',  { desc: 'Enable the GUI keys', alias: ['GUI_ON']}),
        K('MAGIC_SWAP_GRAVE_ESC', 'Swap\n`\nEsc',  { desc: 'Swap ` and Escape', alias: ['GE_SWAP']}),
        K('MAGIC_UNSWAP_GRAVE_ESC', 'Unswap\n`\nEsc',  { desc: 'Unswap ` and Escape', alias: ['GE_NORM']}),
        K('MAGIC_SWAP_BACKSLASH_BACKSPACE', 'Swap\n\\\nBS',  { desc: 'Swap \\ and Backspace', alias: ['BS_SWAP']}),
        K('MAGIC_UNSWAP_BACKSLASH_BACKSPACE', 'Unswap\n\\\nBS',  { desc: 'Unswap \\ and Backspace', alias: ['BS_NORM']}),
        K('MAGIC_HOST_NKRO', 'NKRO\nOn',  { desc: 'Enable N-key rollover', alias: ['NK_ON']}),
        K('MAGIC_UNHOST_NKRO', 'NKRO\nOff',  { desc: 'Disable N-key rollover', alias: ['NK_OFF']}),
        K('MAGIC_TOGGLE_NKRO', 'NKRO\nToggle',  { desc: 'Toggle N-key rollover', alias: ['NK_TOGG']}),
        K('MAGIC_EE_HANDS_LEFT', 'EEH\nLeft',  { desc: 'Set the master half of a split keyboard as the left hand (for EE_HANDS)', alias: ['EH_LEFT']}),
        K('MAGIC_EE_HANDS_RIGHT', 'EEH\nRight',  { desc: 'Set the master half of a split keyboard as the right hand (for EE_HANDS)', alias: ['EH_RGHT']}),

        K('AU_ON', 'Audio\nON',  { desc: 'Audio mode on' }),
        K('AU_OFF', 'Audio\nOFF',  { desc: 'Audio mode off' }),
        K('AU_TOG', 'Audio\nToggle',  { desc: 'Toggles Audio mode' }),
        K('CLICKY_TOGGLE', 'Clicky\nToggle',  { desc: 'Toggles Audio clicky mode', alias: ['CK_TOGG']}),
        K('CLICKY_UP', 'Clicky\nUp',  { desc: 'Increases frequency of the clicks', alias: ['CK_UP']}),
        K('CLICKY_DOWN', 'Clicky\nDown',  { desc: 'Decreases frequency of the clicks', alias: ['CK_DOWN']}),
        K('CLICKY_RESET', 'Clicky\nReset',  { desc: 'Resets frequency to default', alias: ['CK_RST']}),
        K('MU_ON', 'Music\nOn',  { desc: 'Turns on Music Mode' }),
        K('MU_OFF', 'Music\nOff',  { desc: 'Turns off Music Mode' }),
        K('MU_TOG', 'Music\nToggle',  { desc: 'Toggles Music Mode' }),
        K('MU_MOD', 'Music\nCycle',  { desc: 'Cycles through the music modes' }),

        K('HPT_ON', 'Haptic\nOn',  { desc: 'Turn haptic feedback on' }),
        K('HPT_OFF', 'Haptic\nOff',  { desc: 'Turn haptic feedback off' }),
        K('HPT_TOG', 'Haptic\nToggle',  { desc: 'Toggle haptic feedback on/off' }),
        K('HPT_RST', 'Haptic\nReset',  { desc: 'Reset haptic feedback config to default' }),
        K('HPT_FBK', 'Haptic\nFeed\nback',  { desc: 'Toggle feedback to occur on keypress, release or both' }),
        K('HPT_BUZ', 'Haptic\nBuzz',  { desc: 'Toggle solenoid buzz on/off' }),
        K('HPT_MODI', 'Haptic\nNext',  { desc: 'Go to next DRV2605L waveform' }),
        K('HPT_MODD', 'Haptic\nPrev',  { desc: 'Go to previous DRV2605L waveform' }),
        K('HPT_CONT', 'Haptic\nCont.',  { desc: 'Toggle continuous haptic mode on/off' }),
        K('HPT_CONI', 'Haptic\n+',  { desc: 'Increase DRV2605L continous haptic strength' }),
        K('HPT_COND', 'Haptic\n-',  { desc: 'Decrease DRV2605L continous haptic strength' }),
        K('HPT_DWLI', 'Haptic\nDwell+',  { desc: 'Increase Solenoid dwell time' }),
        K('HPT_DWLD', 'Haptic\nDwell-',  { desc: 'Decrease Solenoid dwell time' }),

        K('KC_ASDN', 'Auto-\nshift\nDown',  { desc: 'Lower the Auto Shift timeout variable (down)' }),
        K('KC_ASUP', 'Auto-\nshift\nUp',  { desc: 'Raise the Auto Shift timeout variable (up)' }),
        K('KC_ASRP', 'Auto-\nshift\nReport',  { desc: 'Report your current Auto Shift timeout value' }),
        K('KC_ASON', 'Auto-\nshift\nOn',  { desc: 'Turns on the Auto Shift Function' }),
        K('KC_ASOFF', 'Auto-\nshift\nOff',  { desc: 'Turns off the Auto Shift Function' }),
        K('KC_ASTG', 'Auto-\nshift\nToggle',  { desc: 'Toggles the state of the Auto Shift feature' }),

        K('CMB_ON', 'Combo\nOn',  { desc: 'Turns on Combo feature' }),
        K('CMB_OFF', 'Combo\nOff',  { desc: 'Turns off Combo feature' }),
        K('CMB_TOG', 'Combo\nToggle',  { desc: 'Toggles Combo feature on and off' }),
    ];

    KEYCODES_BACKLIGHT = [
        K('BL_TOGG', 'BL\nToggle',  { desc: 'Turn the backlight on or off' }),
        K('BL_STEP', 'BL\nCycle',  { desc: 'Cycle through backlight levels' }),
        K('BL_BRTG', 'BL\nBreath',  { desc: 'Toggle backlight breathing' }),
        K('BL_ON', 'BL On',  { desc: 'Set the backlight to max brightness' }),
        K('BL_OFF', 'BL Off',  { desc: 'Turn the backlight off' }),
        K('BL_INC', 'BL +',  { desc: 'Increase the backlight level' }),
        K('BL_DEC', 'BL - ',  { desc: 'Decrease the backlight level' }),

        K('RGB_TOG', 'RGB\nToggle',  { desc: 'Toggle RGB lighting on or off' }),
        K('RGB_MOD', 'RGB\nMode +',  { desc: 'Next RGB mode' }),
        K('RGB_RMOD', 'RGB\nMode -',  { desc: 'Previous RGB mode' }),
        K('RGB_HUI', 'Hue +',  { desc: 'Increase hue' }),
        K('RGB_HUD', 'Hue -',  { desc: 'Decrease hue' }),
        K('RGB_SAI', 'Sat +',  { desc: 'Increase saturation' }),
        K('RGB_SAD', 'Sat -',  { desc: 'Decrease saturation' }),
        K('RGB_VAI', 'Bright +',  { desc: 'Increase value' }),
        K('RGB_VAD', 'Bright -',  { desc: 'Decrease value' }),
        K('RGB_SPI', 'Effect +',  { desc: 'Increase RGB effect speed' }),
        K('RGB_SPD', 'Effect -',  { desc: 'Decrease RGB effect speed' }),
        K('RGB_M_P', 'RGB\nMode P',  { desc: 'RGB Mode: Plain' }),
        K('RGB_M_B', 'RGB\nMode B',  { desc: 'RGB Mode: Breathe' }),
        K('RGB_M_R', 'RGB\nMode R',  { desc: 'RGB Mode: Rainbow' }),
        K('RGB_M_SW', 'RGB\nMode SW',  { desc: 'RGB Mode: Swirl' }),
        K('RGB_M_SN', 'RGB\nMode SN',  { desc: 'RGB Mode: Snake' }),
        K('RGB_M_K', 'RGB\nMode K',  { desc: 'RGB Mode: Knight Rider' }),
        K('RGB_M_X', 'RGB\nMode X',  { desc: 'RGB Mode: Christmas' }),
        K('RGB_M_G', 'RGB\nMode G',  { desc: 'RGB Mode: Gradient' }),
        K('RGB_M_T', 'RGB\nMode T',  { desc: 'RGB Mode: Test' }),
    ];

    KEYCODES_MEDIA = [
        K('KC_F13', 'F13'),
        K('KC_F14', 'F14'),
        K('KC_F15', 'F15'),
        K('KC_F16', 'F16'),
        K('KC_F17', 'F17'),
        K('KC_F18', 'F18'),
        K('KC_F19', 'F19'),
        K('KC_F20', 'F20'),
        K('KC_F21', 'F21'),
        K('KC_F22', 'F22'),
        K('KC_F23', 'F23'),
        K('KC_F24', 'F24'),

        K('KC_PWR', 'Power',  { desc: 'System Power Down', alias: ['KC_SYSTEM_POWER']}),
        K('KC_SLEP', 'Sleep',  { desc: 'System Sleep', alias: ['KC_SYSTEM_SLEEP']}),
        K('KC_WAKE', 'Wake',  { desc: 'System Wake', alias: ['KC_SYSTEM_WAKE']}),
        K('KC_EXEC', 'Exec',  { desc: 'Execute', alias: ['KC_EXECUTE']}),
        K('KC_HELP', 'Help'),
        K('KC_SLCT', 'Select',  { alias: ['KC_SELECT']}),
        K('KC_STOP', 'Stop'),
        K('KC_AGIN', 'Again',  { alias: ['KC_AGAIN']}),
        K('KC_UNDO', 'Undo'),
        K('KC_CUT', 'Cut'),
        K('KC_COPY', 'Copy'),
        K('KC_PSTE', 'Paste',  { alias: ['KC_PASTE']}),
        K('KC_FIND', 'Find'),

        K('KC_CALC', 'Calc',  { desc: 'Launch Calculator (Windows)', alias: ['KC_CALCULATOR']}),
        K('KC_MAIL', 'Mail',  { desc: 'Launch Mail (Windows)' }),
        K('KC_MSEL', 'Media\nPlayer',  { desc: 'Launch Media Player (Windows)', alias: ['KC_MEDIA_SELECT']}),
        K('KC_MYCM', 'My\nPC',  { desc: 'Launch My Computer (Windows)', alias: ['KC_MY_COMPUTER']}),
        K('KC_WSCH', 'Browser\nSearch',  { desc: 'Browser Search (Windows)', alias: ['KC_WWW_SEARCH']}),
        K('KC_WHOM', 'Browser\nHome',  { desc: 'Browser Home (Windows)', alias: ['KC_WWW_HOME']}),
        K('KC_WBAK', 'Browser\nBack',  { desc: 'Browser Back (Windows)', alias: ['KC_WWW_BACK']}),
        K('KC_WFWD', 'Browser\nForward',  { desc: 'Browser Forward (Windows)', alias: ['KC_WWW_FORWARD']}),
        K('KC_WSTP', 'Browser\nStop',  { desc: 'Browser Stop (Windows)', alias: ['KC_WWW_STOP']}),
        K('KC_WREF', 'Browser\nRefresh',  { desc: 'Browser Refresh (Windows)', alias: ['KC_WWW_REFRESH']}),
        K('KC_WFAV', 'Browser\nFav.',  { desc: 'Browser Favorites (Windows)', alias: ['KC_WWW_FAVORITES']}),
        K('KC_BRIU', 'Bright.\nUp',  { desc: 'Increase the brightness of screen (Laptop)', alias: ['KC_BRIGHTNESS_UP']}),
        K('KC_BRID', 'Bright.\nDown',  { desc: 'Decrease the brightness of screen (Laptop)', alias: ['KC_BRIGHTNESS_DOWN']}),

        K('KC_MPRV', 'Media\nPrev',  { desc: 'Previous Track', alias: ['KC_MEDIA_PREV_TRACK']}),
        K('KC_MNXT', 'Media\nNext',  { desc: 'Next Track', alias: ['KC_MEDIA_NEXT_TRACK']}),
        K('KC_MUTE', 'Mute',  { desc: 'Mute Audio', alias: ['KC_AUDIO_MUTE']}),
        K('KC_VOLD', 'Vol -',  { desc: 'Volume Down', alias: ['KC_AUDIO_VOL_DOWN']}),
        K('KC_VOLU', 'Vol +',  { desc: 'Volume Up', alias: ['KC_AUDIO_VOL_UP']}),
        K('KC__VOLDOWN', 'Vol -\nAlt',  { desc: 'Volume Down Alternate' }),
        K('KC__VOLUP', 'Vol +\nAlt',  { desc: 'Volume Up Alternate' }),
        K('KC_MSTP', 'Media\nStop',  { alias: ['KC_MEDIA_STOP']}),
        K('KC_MPLY', 'Media\nPlay',  { desc: 'Play/Pause', alias: ['KC_MEDIA_PLAY_PAUSE']}),
        K('KC_MRWD', 'Prev\nTrack\n(macOS)',  { desc: 'Previous Track / Rewind (macOS)', alias: ['KC_MEDIA_REWIND']}),
        K('KC_MFFD', 'Next\nTrack\n(macOS)',  { desc: 'Next Track / Fast Forward (macOS)', alias: ['KC_MEDIA_FAST_FORWARD']}),
        K('KC_EJCT', 'Eject',  { desc: 'Eject (macOS)', alias: ['KC_MEDIA_EJECT']}),

        K('KC_MS_U', 'Mouse\nUp',  { desc: 'Mouse Cursor Up', alias: ['KC_MS_UP']}),
        K('KC_MS_D', 'Mouse\nDown',  { desc: 'Mouse Cursor Down', alias: ['KC_MS_DOWN']}),
        K('KC_MS_L', 'Mouse\nLeft',  { desc: 'Mouse Cursor Left', alias: ['KC_MS_LEFT']}),
        K('KC_MS_R', 'Mouse\nRight',  { desc: 'Mouse Cursor Right', alias: ['KC_MS_RIGHT']}),
        K('KC_BTN1', 'Mouse\n1',  { desc: 'Mouse Button 1', alias: ['KC_MS_BTN1']}),
        K('KC_BTN2', 'Mouse\n2',  { desc: 'Mouse Button 2', alias: ['KC_MS_BTN2']}),
        K('KC_BTN3', 'Mouse\n3',  { desc: 'Mouse Button 3', alias: ['KC_MS_BTN3']}),
        K('KC_BTN4', 'Mouse\n4',  { desc: 'Mouse Button 4', alias: ['KC_MS_BTN4']}),
        K('KC_BTN5', 'Mouse\n5',  { desc: 'Mouse Button 5', alias: ['KC_MS_BTN5']}),
        K('KC_WH_U', 'Mouse\nWheel\nUp',  { alias: ['KC_MS_WH_UP']}),
        K('KC_WH_D', 'Mouse\nWheel\nDown',  { alias: ['KC_MS_WH_DOWN']}),
        K('KC_WH_L', 'Mouse\nWheel\nLeft',  { alias: ['KC_MS_WH_LEFT']}),
        K('KC_WH_R', 'Mouse\nWheel\nRight',  { alias: ['KC_MS_WH_RIGHT']}),
        K('KC_ACL0', 'Mouse\nAccel\n0',  { desc: 'Set mouse acceleration to 0', alias: ['KC_MS_ACCEL0']}),
        K('KC_ACL1', 'Mouse\nAccel\n1',  { desc: 'Set mouse acceleration to 1', alias: ['KC_MS_ACCEL1']}),
        K('KC_ACL2', 'Mouse\nAccel\n2',  { desc: 'Set mouse acceleration to 2', alias: ['KC_MS_ACCEL2']}),

        K('KC_LCAP', 'Locking\nCaps',  { desc: 'Locking Caps Lock', alias: ['KC_LOCKING_CAPS']}),
        K('KC_LNUM', 'Locking\nNum',  { desc: 'Locking Num Lock', alias: ['KC_LOCKING_NUM']}),
        K('KC_LSCR', 'Locking\nScroll',  { desc: 'Locking Scroll Lock', alias: ['KC_LOCKING_SCROLL']}),
    ];

    KEYCODES_MACRO_BASE = [
        K('DYN_REC_START1', 'DM1\nRec',  { desc: 'Dynamic Macro 1 Rec Start', alias: ['DM_REC1']}),
        K('DYN_REC_START2', 'DM2\nRec',  { desc: 'Dynamic Macro 2 Rec Start', alias: ['DM_REC2']}),
        K('DYN_REC_STOP', 'DM Rec\nStop',  { desc: 'Dynamic Macro Rec Stop', alias: ['DM_RSTP']}),
        K('DYN_MACRO_PLAY1', 'DM1\nPlay',  { desc: 'Dynamic Macro 1 Play', alias: ['DM_PLY1']}),
        K('DYN_MACRO_PLAY2', 'DM2\nPlay',  { desc: 'Dynamic Macro 2 Play', alias: ['DM_PLY2']}),
    ];

    KEYCODES_MIDI = [];

    KEYCODES_MIDI_BASIC = [
        K('MI_C', 'ᴹᴵᴰᴵ\nC',  { desc: 'Midi send note C' }),
        K('MI_Cs', 'ᴹᴵᴰᴵ\nC#/Dᵇ',  { desc: 'Midi send note C#/Dᵇ', alias: ['MI_Db']}),
        K('MI_D', 'ᴹᴵᴰᴵ\nD',  { desc: 'Midi send note D' }),
        K('MI_Ds', 'ᴹᴵᴰᴵ\nD#/Eᵇ',  { desc: 'Midi send note D#/Eᵇ', alias: ['MI_Eb']}),
        K('MI_E', 'ᴹᴵᴰᴵ\nE',  { desc: 'Midi send note E' }),
        K('MI_F', 'ᴹᴵᴰᴵ\nF',  { desc: 'Midi send note F' }),
        K('MI_Fs', 'ᴹᴵᴰᴵ\nF#/Gᵇ',  { desc: 'Midi send note F#/Gᵇ', alias: ['MI_Gb']}),
        K('MI_G', 'ᴹᴵᴰᴵ\nG',  { desc: 'Midi send note G' }),
        K('MI_Gs', 'ᴹᴵᴰᴵ\nG#/Aᵇ',  { desc: 'Midi send note G#/Aᵇ', alias: ['MI_Ab']}),
        K('MI_A', 'ᴹᴵᴰᴵ\nA',  { desc: 'Midi send note A' }),
        K('MI_As', 'ᴹᴵᴰᴵ\nA#/Bᵇ',  { desc: 'Midi send note A#/Bᵇ', alias: ['MI_Bb']}),
        K('MI_B', 'ᴹᴵᴰᴵ\nB',  { desc: 'Midi send note B' }),

        K('MI_C_1', 'ᴹᴵᴰᴵ\nC₁',  { desc: 'Midi send note C₁' }),
        K('MI_Cs_1', 'ᴹᴵᴰᴵ\nC#₁/Dᵇ₁',  { desc: 'Midi send note C#₁/Dᵇ₁', alias: ['MI_Db_1']}),
        K('MI_D_1', 'ᴹᴵᴰᴵ\nD₁',  { desc: 'Midi send note D₁' }),
        K('MI_Ds_1', 'ᴹᴵᴰᴵ\nD#₁/Eᵇ₁',  { desc: 'Midi send note D#₁/Eᵇ₁', alias: ['MI_Eb_1']}),
        K('MI_E_1', 'ᴹᴵᴰᴵ\nE₁',  { desc: 'Midi send note E₁' }),
        K('MI_F_1', 'ᴹᴵᴰᴵ\nF₁',  { desc: 'Midi send note F₁' }),
        K('MI_Fs_1', 'ᴹᴵᴰᴵ\nF#₁/Gᵇ₁',  { desc: 'Midi send note F#₁/Gᵇ₁', alias: ['MI_Gb_1']}),
        K('MI_G_1', 'ᴹᴵᴰᴵ\nG₁',  { desc: 'Midi send note G₁' }),
        K('MI_Gs_1', 'ᴹᴵᴰᴵ\nG#₁/Aᵇ₁',  { desc: 'Midi send note G#₁/Aᵇ₁', alias: ['MI_Ab_1']}),
        K('MI_A_1', 'ᴹᴵᴰᴵ\nA₁',  { desc: 'Midi send note A₁' }),
        K('MI_As_1', 'ᴹᴵᴰᴵ\nA#₁/Bᵇ₁',  { desc: 'Midi send note A#₁/Bᵇ₁', alias: ['MI_Bb_1']}),
        K('MI_B_1', 'ᴹᴵᴰᴵ\nB₁',  { desc: 'Midi send note B₁' }),

        K('MI_C_2', 'ᴹᴵᴰᴵ\nC₂',  { desc: 'Midi send note C₂' }),
        K('MI_Cs_2', 'ᴹᴵᴰᴵ\nC#₂/Dᵇ₂',  { desc: 'Midi send note C#₂/Dᵇ₂', alias: ['MI_Db_2']}),
        K('MI_D_2', 'ᴹᴵᴰᴵ\nD₂',  { desc: 'Midi send note D₂' }),
        K('MI_Ds_2', 'ᴹᴵᴰᴵ\nD#₂/Eᵇ₂',  { desc: 'Midi send note D#₂/Eᵇ₂', alias: ['MI_Eb_2']}),
        K('MI_E_2', 'ᴹᴵᴰᴵ\nE₂',  { desc: 'Midi send note E₂' }),
        K('MI_F_2', 'ᴹᴵᴰᴵ\nF₂',  { desc: 'Midi send note F₂' }),
        K('MI_Fs_2', 'ᴹᴵᴰᴵ\nF#₂/Gᵇ₂',  { desc: 'Midi send note F#₂/Gᵇ₂', alias: ['MI_Gb_2']}),
        K('MI_G_2', 'ᴹᴵᴰᴵ\nG₂',  { desc: 'Midi send note G₂' }),
        K('MI_Gs_2', 'ᴹᴵᴰᴵ\nG#₂/Aᵇ₂',  { desc: 'Midi send note G#₂/Aᵇ₂', alias: ['MI_Ab_2']}),
        K('MI_A_2', 'ᴹᴵᴰᴵ\nA₂',  { desc: 'Midi send note A₂' }),
        K('MI_As_2', 'ᴹᴵᴰᴵ\nA#₂/Bᵇ₂',  { desc: 'Midi send note A#₂/Bᵇ₂', alias: ['MI_Bb_2']}),
        K('MI_B_2', 'ᴹᴵᴰᴵ\nB₂',  { desc: 'Midi send note B₂' }),

        K('MI_C_3', 'ᴹᴵᴰᴵ\nC₃',  { desc: 'Midi send note C₃' }),
        K('MI_Cs_3', 'ᴹᴵᴰᴵ\nC#₃/Dᵇ₃',  { desc: 'Midi send note C#₃/Dᵇ₃', alias: ['MI_Db_3']}),
        K('MI_D_3', 'ᴹᴵᴰᴵ\nD₃',  { desc: 'Midi send note D₃' }),
        K('MI_Ds_3', 'ᴹᴵᴰᴵ\nD#₃/Eᵇ₃',  { desc: 'Midi send note D#₃/Eᵇ₃', alias: ['MI_Eb_3']}),
        K('MI_E_3', 'ᴹᴵᴰᴵ\nE₃',  { desc: 'Midi send note E₃' }),
        K('MI_F_3', 'ᴹᴵᴰᴵ\nF₃',  { desc: 'Midi send note F₃' }),
        K('MI_Fs_3', 'ᴹᴵᴰᴵ\nF#₃/Gᵇ₃',  { desc: 'Midi send note F#₃/Gᵇ₃', alias: ['MI_Gb_3']}),
        K('MI_G_3', 'ᴹᴵᴰᴵ\nG₃',  { desc: 'Midi send note G₃' }),
        K('MI_Gs_3', 'ᴹᴵᴰᴵ\nG#₃/Aᵇ₃',  { desc: 'Midi send note G#₃/Aᵇ₃', alias: ['MI_Ab_3']}),
        K('MI_A_3', 'ᴹᴵᴰᴵ\nA₃',  { desc: 'Midi send note A₃' }),
        K('MI_As_3', 'ᴹᴵᴰᴵ\nA#₃/Bᵇ₃',  { desc: 'Midi send note A#₃/Bᵇ₃', alias: ['MI_Bb_3']}),
        K('MI_B_3', 'ᴹᴵᴰᴵ\nB₃',  { desc: 'Midi send note B₃' }),

        K('MI_C_4', 'ᴹᴵᴰᴵ\nC₄',  { desc: 'Midi send note C₄' }),
        K('MI_Cs_4', 'ᴹᴵᴰᴵ\nC#₄/Dᵇ₄',  { desc: 'Midi send note C#₄/Dᵇ₄', alias: ['MI_Db_4']}),
        K('MI_D_4', 'ᴹᴵᴰᴵ\nD₄',  { desc: 'Midi send note D₄' }),
        K('MI_Ds_4', 'ᴹᴵᴰᴵ\nD#₄/Eᵇ₄',  { desc: 'Midi send note D#₄/Eᵇ₄', alias: ['MI_Eb_4']}),
        K('MI_E_4', 'ᴹᴵᴰᴵ\nE₄',  { desc: 'Midi send note E₄' }),
        K('MI_F_4', 'ᴹᴵᴰᴵ\nF₄',  { desc: 'Midi send note F₄' }),
        K('MI_Fs_4', 'ᴹᴵᴰᴵ\nF#₄/Gᵇ₄',  { desc: 'Midi send note F#₄/Gᵇ₄', alias: ['MI_Gb_4']}),
        K('MI_G_4', 'ᴹᴵᴰᴵ\nG₄',  { desc: 'Midi send note G₄' }),
        K('MI_Gs_4', 'ᴹᴵᴰᴵ\nG#₄/Aᵇ₄',  { desc: 'Midi send note G#₄/Aᵇ₄', alias: ['MI_Ab_4']}),
        K('MI_A_4', 'ᴹᴵᴰᴵ\nA₄',  { desc: 'Midi send note A₄' }),
        K('MI_As_4', 'ᴹᴵᴰᴵ\nA#₄/Bᵇ₄',  { desc: 'Midi send note A#₄/Bᵇ₄', alias: ['MI_Bb_4']}),
        K('MI_B_4', 'ᴹᴵᴰᴵ\nB₄',  { desc: 'Midi send note B₄' }),

        K('MI_C_5', 'ᴹᴵᴰᴵ\nC₅',  { desc: 'Midi send note C₅' }),
        K('MI_Cs_5', 'ᴹᴵᴰᴵ\nC#₅/Dᵇ₅',  { desc: 'Midi send note C#₅/Dᵇ₅', alias: ['MI_Db_5']}),
        K('MI_D_5', 'ᴹᴵᴰᴵ\nD₅',  { desc: 'Midi send note D₅' }),
        K('MI_Ds_5', 'ᴹᴵᴰᴵ\nD#₅/Eᵇ₅',  { desc: 'Midi send note D#₅/Eᵇ₅', alias: ['MI_Eb_5']}),
        K('MI_E_5', 'ᴹᴵᴰᴵ\nE₅',  { desc: 'Midi send note E₅' }),
        K('MI_F_5', 'ᴹᴵᴰᴵ\nF₅',  { desc: 'Midi send note F₅' }),
        K('MI_Fs_5', 'ᴹᴵᴰᴵ\nF#₅/Gᵇ₅',  { desc: 'Midi send note F#₅/Gᵇ₅', alias: ['MI_Gb_5']}),
        K('MI_G_5', 'ᴹᴵᴰᴵ\nG₅',  { desc: 'Midi send note G₅' }),
        K('MI_Gs_5', 'ᴹᴵᴰᴵ\nG#₅/Aᵇ₅',  { desc: 'Midi send note G#₅/Aᵇ₅', alias: ['MI_Ab_5']}),
        K('MI_A_5', 'ᴹᴵᴰᴵ\nA₅',  { desc: 'Midi send note A₅' }),
        K('MI_As_5', 'ᴹᴵᴰᴵ\nA#₅/Bᵇ₅',  { desc: 'Midi send note A#₅/Bᵇ₅', alias: ['MI_Bb_5']}),
        K('MI_B_5', 'ᴹᴵᴰᴵ\nB₅',  { desc: 'Midi send note B₅' }),

        K('MI_ALLOFF', 'ᴹᴵᴰᴵ\nNotesᵒᶠᶠ',  { desc: 'Midi send all notes OFF' }),
    ];

    KEYCODES_MIDI_ADVANCED = [
        K('MI_OCT_N2', 'ᴹᴵᴰᴵ\nOct₋₂',  { desc: 'Midi set octave to -2' }),
        K('MI_OCT_N1', 'ᴹᴵᴰᴵ\nOct₋₁',  { desc: 'Midi set octave to -1' }),
        K('MI_OCT_0', 'ᴹᴵᴰᴵ\nOct₀',  { desc: 'Midi set octave to 0' }),
        K('MI_OCT_1', 'ᴹᴵᴰᴵ\nOct₊₁',  { desc: 'Midi set octave to 1' }),
        K('MI_OCT_2', 'ᴹᴵᴰᴵ\nOct₊₂',  { desc: 'Midi set octave to 2' }),
        K('MI_OCT_3', 'ᴹᴵᴰᴵ\nOct₊₃',  { desc: 'Midi set octave to 3' }),
        K('MI_OCT_4', 'ᴹᴵᴰᴵ\nOct₊₄',  { desc: 'Midi set octave to 4' }),
        K('MI_OCT_5', 'ᴹᴵᴰᴵ\nOct₊₅',  { desc: 'Midi set octave to 5' }),
        K('MI_OCT_6', 'ᴹᴵᴰᴵ\nOct₊₆',  { desc: 'Midi set octave to 6' }),
        K('MI_OCT_7', 'ᴹᴵᴰᴵ\nOct₊₇',  { desc: 'Midi set octave to 7' }),
        K('MI_OCTD', 'ᴹᴵᴰᴵ\nOctᴰᴺ',  { desc: 'Midi move down an octave' }),
        K('MI_OCTU', 'ᴹᴵᴰᴵ\nOctᵁᴾ',  { desc: 'Midi move up an octave' }),

        K('MI_TRNS_N6', 'ᴹᴵᴰᴵ\nTrans₋₆',  { desc: 'Midi set transposition to -4 semitones' }),
        K('MI_TRNS_N5', 'ᴹᴵᴰᴵ\nTrans₋₅',  { desc: 'Midi set transposition to -5 semitones' }),
        K('MI_TRNS_N4', 'ᴹᴵᴰᴵ\nTrans₋₄',  { desc: 'Midi set transposition to -4 semitones' }),
        K('MI_TRNS_N3', 'ᴹᴵᴰᴵ\nTrans₋₃',  { desc: 'Midi set transposition to -3 semitones' }),
        K('MI_TRNS_N2', 'ᴹᴵᴰᴵ\nTrans₋₂',  { desc: 'Midi set transposition to -2 semitones' }),
        K('MI_TRNS_N1', 'ᴹᴵᴰᴵ\nTrans₋₁',  { desc: 'Midi set transposition to -1 semitones' }),
        K('MI_TRNS_0', 'ᴹᴵᴰᴵ\nTrans₀',  { desc: 'Midi set no transposition' }),
        K('MI_TRNS_1', 'ᴹᴵᴰᴵ\nTrans₊₁',  { desc: 'Midi set transposition to +1 semitones' }),
        K('MI_TRNS_2', 'ᴹᴵᴰᴵ\nTrans₊₂',  { desc: 'Midi set transposition to +2 semitones' }),
        K('MI_TRNS_3', 'ᴹᴵᴰᴵ\nTrans₊₃',  { desc: 'Midi set transposition to +3 semitones' }),
        K('MI_TRNS_4', 'ᴹᴵᴰᴵ\nTrans₊₄',  { desc: 'Midi set transposition to +4 semitones' }),
        K('MI_TRNS_5', 'ᴹᴵᴰᴵ\nTrans₊₅',  { desc: 'Midi set transposition to +5 semitones' }),
        K('MI_TRNS_6', 'ᴹᴵᴰᴵ\nTrans₊₆',  { desc: 'Midi set transposition to +6 semitones' }),
        K('MI_TRNSD', 'ᴹᴵᴰᴵ\nTransᴰᴺ',  { desc: 'Midi decrease transposition' }),
        K('MI_TRNSU', 'ᴹᴵᴰᴵ\nTransᵁᴾ',  { desc: 'Midi increase transposition' }),

        K('MI_VEL_1', 'ᴹᴵᴰᴵ\nVel₁',  { desc: 'Midi set velocity to 0', alias: ['MI_VEL_0']}),
        K('MI_VEL_2', 'ᴹᴵᴰᴵ\nVel₂',  { desc: 'Midi set velocity to 25' }),
        K('MI_VEL_3', 'ᴹᴵᴰᴵ\nVel₃',  { desc: 'Midi set velocity to 38' }),
        K('MI_VEL_4', 'ᴹᴵᴰᴵ\nVel₄',  { desc: 'Midi set velocity to 51' }),
        K('MI_VEL_5', 'ᴹᴵᴰᴵ\nVel₅',  { desc: 'Midi set velocity to 64' }),
        K('MI_VEL_6', 'ᴹᴵᴰᴵ\nVel₆',  { desc: 'Midi set velocity to 76' }),
        K('MI_VEL_7', 'ᴹᴵᴰᴵ\nVel₇',  { desc: 'Midi set velocity to 89' }),
        K('MI_VEL_8', 'ᴹᴵᴰᴵ\nVel₈',  { desc: 'Midi set velocity to 102' }),
        K('MI_VEL_9', 'ᴹᴵᴰᴵ\nVel₉',  { desc: 'Midi set velocity to 114' }),
        K('MI_VEL_10', 'ᴹᴵᴰᴵ\nVel₁₀',  { desc: 'Midi set velocity to 127' }),
        K('MI_VELD', 'ᴹᴵᴰᴵ\nVelᴰᴺ',  { desc: 'Midi decrease velocity' }),
        K('MI_VELU', 'ᴹᴵᴰᴵ\nVelᵁᴾ',  { desc: 'Midi increase velocity' }),

        K('MI_CH1', 'ᴹᴵᴰᴵ\nCH₁',  { desc: 'Midi set channel to 1' }),
        K('MI_CH2', 'ᴹᴵᴰᴵ\nCH₂',  { desc: 'Midi set channel to 2' }),
        K('MI_CH3', 'ᴹᴵᴰᴵ\nCH₃',  { desc: 'Midi set channel to 3' }),
        K('MI_CH4', 'ᴹᴵᴰᴵ\nCH₄',  { desc: 'Midi set channel to 4' }),
        K('MI_CH5', 'ᴹᴵᴰᴵ\nCH₅',  { desc: 'Midi set channel to 5' }),
        K('MI_CH6', 'ᴹᴵᴰᴵ\nCH₆',  { desc: 'Midi set channel to 6' }),
        K('MI_CH7', 'ᴹᴵᴰᴵ\nCH₇',  { desc: 'Midi set channel to 7' }),
        K('MI_CH8', 'ᴹᴵᴰᴵ\nCH₈',  { desc: 'Midi set channel to 8' }),
        K('MI_CH9', 'ᴹᴵᴰᴵ\nCH₉',  { desc: 'Midi set channel to 9' }),
        K('MI_CH10', 'ᴹᴵᴰᴵ\nCH₁₀',  { desc: 'Midi set channel to 10' }),
        K('MI_CH11', 'ᴹᴵᴰᴵ\nCH₁₁',  { desc: 'Midi set channel to 11' }),
        K('MI_CH12', 'ᴹᴵᴰᴵ\nCH₁₂',  { desc: 'Midi set channel to 12' }),
        K('MI_CH13', 'ᴹᴵᴰᴵ\nCH₁₃',  { desc: 'Midi set channel to 13' }),
        K('MI_CH14', 'ᴹᴵᴰᴵ\nCH₁₄',  { desc: 'Midi set channel to 14' }),
        K('MI_CH15', 'ᴹᴵᴰᴵ\nCH₁₅',  { desc: 'Midi set channel to 15' }),
        K('MI_CH16', 'ᴹᴵᴰᴵ\nCH₁₆',  { desc: 'Midi set channel to 16' }),
        K('MI_CHD', 'ᴹᴵᴰᴵ\nCHᴰᴺ',  { desc: 'Midi decrease channel' }),
        K('MI_CHU', 'ᴹᴵᴰᴵ\nCHᵁᴾ',  { desc: 'Midi increase channel' }),

        K('MI_SUS', 'ᴹᴵᴰᴵ\nSust',  { desc: 'Midi Sustain' }),
        K('MI_PORT', 'ᴹᴵᴰᴵ\nPort',  { desc: 'Midi Portmento' }),
        K('MI_SOST', 'ᴹᴵᴰᴵ\nSost',  { desc: 'Midi Sostenuto' }),
        K('MI_SOFT', 'ᴹᴵᴰᴵ\nSPedal',  { desc: 'Midi Soft Pedal' }),
        K('MI_LEG', 'ᴹᴵᴰᴵ\nLegat',  { desc: 'Midi Legato' }),
        K('MI_MOD', 'ᴹᴵᴰᴵ\nModul',  { desc: 'Midi Modulation' }),
        K('MI_MODSD', 'ᴹᴵᴰᴵ\nModulᴰᴺ',  { desc: 'Midi decrease modulation speed' }),
        K('MI_MODSU', 'ᴹᴵᴰᴵ\nModulᵁᴾ',  { desc: 'Midi increase modulation speed' }),
        K('MI_BENDD', 'ᴹᴵᴰᴵ\nBendᴰᴺ',  { desc: 'Midi bend pitch down' }),
        K('MI_BENDU', 'ᴹᴵᴰᴵ\nBendᵁᴾ',  { desc: 'Midi bend pitch up' }),
    ];

    KC_MAP = lockValue({
        'QK_LAYER_TAP': 0x4000,
        'MOD_LCTL': 0x01,
        'MOD_LSFT': 0x02,
        'MOD_LALT': 0x04,
        'MOD_LGUI': 0x08,
        'MOD_RCTL': 0x11,
        'MOD_RSFT': 0x12,
        'MOD_RALT': 0x14,
        'MOD_RGUI': 0x18,
        'MOD_HYPR': 0xF,
        'MOD_MEH': 0x7,
        'QK_TO': 0x5200,
        'QK_MOMENTARY': 0x5220,
        'QK_DEF_LAYER': 0x5240,
        'QK_TOGGLE_LAYER': 0x5260,
        'QK_ONE_SHOT_LAYER': 0x5280,
        'QK_ONE_SHOT_MOD': 0x52A0,
        'QK_TAP_DANCE': 0x5700,
        'QK_LAYER_TAP_TOGGLE': 0x52C0,
        'QK_LAYER_MOD': 0x5000,
        'QK_MOD_TAP': 0x2000,
        'ON_PRESS': 1,
        'QK_LCTL': 0x0100,
        'QK_LSFT': 0x0200,
        'QK_LALT': 0x0400,
        'QK_LGUI': 0x0800,
        'QK_RCTL': 0x1100,
        'QK_RSFT': 0x1200,
        'QK_RALT': 0x1400,
        'QK_RGUI': 0x1800,
        'QK_MACRO': 0x7700,

        'ALL_T(kc)': 0x2f00,
        'C_S_T(kc)': 0x2300,
        'C_S(kc)': 0x300,
        'HYPR(kc)': 0xf00,
        'LALT_T(kc)': 0x2400,
        'LALT(kc)': 0x400,
        'LCA_T(kc)': 0x2500,
        'LCA(kc)': 0x500,
        'LCAG_T(kc)': 0x2d00,
        'LCAG(kc)': 0xd00,
        'LCG_T(kc)': 0x2900,
        'LCG(kc)': 0x900,
        'LCTL_T(kc)': 0x2100,
        'LCTL(kc)': 0x100,
        'LGUI_T(kc)': 0x2800,
        'LGUI(kc)': 0x800,
        'LSA_T(kc)': 0x2600,
        'LSA(kc)': 0x600,
        'LSFT_T(kc)': 0x2200,
        'LSFT(kc)': 0x200,
        'MEH_T(kc)': 0x2700,
        'MEH(kc)': 0x700,
        'RALT_T(kc)': 0x3400,
        'RALT(kc)': 0x1400,
        'RCAG_T(kc)': 0x3d00,
        'RCG_T(kc)': 0x3900,
        'RCG(kc)': 0x1900,
        'RCTL_T(kc)': 0x3100,
        'RCTL(kc)': 0x1100,
        'RGUI_T(kc)': 0x3800,
        'RGUI(kc)': 0x1800,
        'RSFT_T(kc)': 0x3200,
        'RSFT(kc)': 0x1200,
        'SGUI_T(kc)': 0x2a00,
        'SGUI(kc)': 0xa00,

        'OSM(MOD_LSFT)': 0x52A2,
        'OSM(MOD_LCTL)': 0x52A1,
        'OSM(MOD_LALT)': 0x52A4,
        'OSM(MOD_LGUI)': 0x52A8,
        'OSM(MOD_RSFT)': 0x52B2,
        'OSM(MOD_RCTL)': 0x52B1,
        'OSM(MOD_RALT)': 0x52B4,
        'OSM(MOD_RGUI)': 0x52B8,
        'OSM(MOD_LCTL|MOD_LSFT)': 0x52A3,
        'OSM(MOD_LCTL|MOD_LALT)': 0x52A5,
        'OSM(MOD_LCTL|MOD_LGUI)': 0x52A9,
        'OSM(MOD_LSFT|MOD_LALT)': 0x52A6,
        'OSM(MOD_LSFT|MOD_LGUI)': 0x52AA,
        'OSM(MOD_LALT|MOD_LGUI)': 0x52AC,
        'OSM(MOD_LCTL|MOD_LSFT|MOD_LGUI)': 0x52AB,
        'OSM(MOD_LCTL|MOD_LALT|MOD_LGUI)': 0x52AD,
        'OSM(MOD_LSFT|MOD_LALT|MOD_LGUI)': 0x52AE,
        'OSM(MOD_MEH)': 0x52A7,
        'OSM(MOD_HYPR)': 0x52AF,
        'OSM(MOD_RCTL|MOD_RSFT)': 0x52B3,
        'OSM(MOD_RCTL|MOD_RALT)': 0x52B5,
        'OSM(MOD_RCTL|MOD_RGUI)': 0x52B9,
        'OSM(MOD_RSFT|MOD_RALT)': 0x52B6,
        'OSM(MOD_RSFT|MOD_RGUI)': 0x52BA,
        'OSM(MOD_RALT|MOD_RGUI)': 0x52BC,
        'OSM(MOD_RCTL|MOD_RSFT|MOD_RGUI)': 0x52BB,
        'OSM(MOD_RCTL|MOD_RALT|MOD_RGUI)': 0x52BD,
        'OSM(MOD_RSFT|MOD_RALT|MOD_RGUI)': 0x52BE,
        'OSM(MOD_RCTL|MOD_RSFT|MOD_RALT)': 0x52B7,
        'OSM(MOD_RCTL|MOD_RSFT|MOD_RALT|MOD_RGUI)': 0x52BF,

        'KC_NO': 0x00,
        'KC_TRNS': 0x01,
        'KC_NUMLOCK': 0x53,
        'KC_KP_SLASH': 0x54,
        'KC_KP_ASTERISK': 0x55,
        'KC_KP_MINUS': 0x56,
        'KC_KP_PLUS': 0x57,
        'KC_KP_ENTER': 0x58,
        'KC_KP_1': 0x59,
        'KC_KP_2': 0x5A,
        'KC_KP_3': 0x5B,
        'KC_KP_4': 0x5C,
        'KC_KP_5': 0x5D,
        'KC_KP_6': 0x5E,
        'KC_KP_7': 0x5F,
        'KC_KP_8': 0x60,
        'KC_KP_9': 0x61,
        'KC_KP_0': 0x62,
        'KC_KP_DOT': 0x63,
        'KC_KP_EQUAL': 0x67,
        'KC_KP_COMMA': 0x85,
        'KC_PSCREEN': 0x46,
        'KC_SCROLLLOCK': 0x47,
        'KC_PAUSE': 0x48,
        'KC_INSERT': 0x49,
        'KC_HOME': 0x4A,
        'KC_PGUP': 0x4B,
        'KC_DELETE': 0x4C,
        'KC_END': 0x4D,
        'KC_PGDOWN': 0x4E,
        'KC_RIGHT': 0x4F,
        'KC_LEFT': 0x50,
        'KC_DOWN': 0x51,
        'KC_UP': 0x52,
        'KC_A': 0x04,
        'KC_B': 0x05,
        'KC_C': 0x06,
        'KC_D': 0x07,
        'KC_E': 0x08,
        'KC_F': 0x09,
        'KC_G': 0x0A,
        'KC_H': 0x0B,
        'KC_I': 0x0C,
        'KC_J': 0x0D,
        'KC_K': 0x0E,
        'KC_L': 0x0F,
        'KC_M': 0x10,
        'KC_N': 0x11,
        'KC_O': 0x12,
        'KC_P': 0x13,
        'KC_Q': 0x14,
        'KC_R': 0x15,
        'KC_S': 0x16,
        'KC_T': 0x17,
        'KC_U': 0x18,
        'KC_V': 0x19,
        'KC_W': 0x1A,
        'KC_X': 0x1B,
        'KC_Y': 0x1C,
        'KC_Z': 0x1D,
        'KC_1': 0x1E,
        'KC_2': 0x1F,
        'KC_3': 0x20,
        'KC_4': 0x21,
        'KC_5': 0x22,
        'KC_6': 0x23,
        'KC_7': 0x24,
        'KC_8': 0x25,
        'KC_9': 0x26,
        'KC_0': 0x27,
        'KC_ENTER': 0x28,
        'KC_ESCAPE': 0x29,
        'KC_BSPACE': 0x2A,
        'KC_TAB': 0x2B,
        'KC_SPACE': 0x2C,
        'KC_MINUS': 0x2D,
        'KC_EQUAL': 0x2E,
        'KC_LBRACKET': 0x2F,
        'KC_RBRACKET': 0x30,
        'KC_BSLASH': 0x31,
        'KC_SCOLON': 0x33,
        'KC_QUOTE': 0x34,
        'KC_GRAVE': 0x35,
        'KC_COMMA': 0x36,
        'KC_DOT': 0x37,
        'KC_SLASH': 0x38,
        'KC_CAPSLOCK': 0x39,
        'KC_F1': 0x3A,
        'KC_F2': 0x3B,
        'KC_F3': 0x3C,
        'KC_F4': 0x3D,
        'KC_F5': 0x3E,
        'KC_F6': 0x3F,
        'KC_F7': 0x40,
        'KC_F8': 0x41,
        'KC_F9': 0x42,
        'KC_F10': 0x43,
        'KC_F11': 0x44,
        'KC_F12': 0x45,
        'KC_APPLICATION': 0x65,
        'KC_LCTRL': 0xE0,
        'KC_LSHIFT': 0xE1,
        'KC_LALT': 0xE2,
        'KC_LGUI': 0xE3,
        'KC_RCTRL': 0xE4,
        'KC_RSHIFT': 0xE5,
        'KC_RALT': 0xE6,
        'KC_RGUI': 0xE7,
        'KC_TILD': 0x235,
        'KC_EXLM': 0x21E,
        'KC_AT': 0x21F,
        'KC_HASH': 0x220,
        'KC_DLR': 0x221,
        'KC_PERC': 0x222,
        'KC_CIRC': 0x223,
        'KC_AMPR': 0x224,
        'KC_ASTR': 0x225,
        'KC_LPRN': 0x226,
        'KC_RPRN': 0x227,
        'KC_UNDS': 0x22D,
        'KC_PLUS': 0x22E,
        'KC_LCBR': 0x22F,
        'KC_RCBR': 0x230,
        'KC_LT': 0x236,
        'KC_GT': 0x237,
        'KC_COLN': 0x233,
        'KC_PIPE': 0x231,
        'KC_QUES': 0x238,
        'KC_DQUO': 0x234,
        'KC_NONUS_HASH': 0x32,
        'KC_NONUS_BSLASH': 0x64,
        'KC_RO': 0x87,
        'KC_KANA': 0x88,
        'KC_JYEN': 0x89,
        'KC_HENK': 0x8A,
        'KC_MHEN': 0x8B,
        'KC_LANG1': 0x90,
        'KC_LANG2': 0x91,
        'KC_GESC': 0x7C16,
        'KC_LSPO': 0x7C1A,
        'KC_RSPC': 0x7C1B,
        'KC_LCPO': 0x7C18,
        'KC_RCPC': 0x7C19,
        'KC_LAPO': 0x7C1C,
        'KC_RAPC': 0x7C1D,
        'KC_SFTENT': 0x7C1E,
        'MAGIC_SWAP_CONTROL_CAPSLOCK': 0x7000,
        'MAGIC_UNSWAP_CONTROL_CAPSLOCK': 0x7001,
        'MAGIC_CAPSLOCK_TO_CONTROL': 0x7004,
        'MAGIC_UNCAPSLOCK_TO_CONTROL': 0x7003,
        'MAGIC_SWAP_LCTL_LGUI': 0x7017,
        'MAGIC_UNSWAP_LCTL_LGUI': 0x7018,
        'MAGIC_SWAP_RCTL_RGUI': 0x7019,
        'MAGIC_UNSWAP_RCTL_RGUI': 0x701A,
        'MAGIC_SWAP_CTL_GUI': 0x701B,
        'MAGIC_UNSWAP_CTL_GUI': 0x701C,
        'MAGIC_TOGGLE_CTL_GUI': 0x701D,
        'MAGIC_SWAP_LALT_LGUI': 0x7005,
        'MAGIC_UNSWAP_LALT_LGUI': 0x7006,
        'MAGIC_SWAP_RALT_RGUI': 0x7007,
        'MAGIC_UNSWAP_RALT_RGUI': 0x7008,
        'MAGIC_SWAP_ALT_GUI': 0x7014,
        'MAGIC_UNSWAP_ALT_GUI': 0x7015,
        'MAGIC_TOGGLE_ALT_GUI': 0x7016,
        'MAGIC_NO_GUI': 0x700A,
        'MAGIC_UNNO_GUI': 0x7009,
        'MAGIC_SWAP_GRAVE_ESC': 0x700C,
        'MAGIC_UNSWAP_GRAVE_ESC': 0x700D,
        'MAGIC_SWAP_BACKSLASH_BACKSPACE': 0x700E,
        'MAGIC_UNSWAP_BACKSLASH_BACKSPACE': 0x700F,
        'MAGIC_HOST_NKRO': 0x7011,
        'MAGIC_UNHOST_NKRO': 0x7012,
        'MAGIC_TOGGLE_NKRO': 0x7013,
        'MAGIC_EE_HANDS_LEFT': 0x701E,
        'MAGIC_EE_HANDS_RIGHT': 0x701F,
        'AU_ON': 0x7480,
        'AU_OFF': 0x7481,
        'AU_TOG': 0x7482,
        'CLICKY_TOGGLE': 0x748A,
        'CLICKY_UP': 0x748D,
        'CLICKY_DOWN': 0x748E,
        'CLICKY_RESET': 0x748F,
        'MU_ON': 0x7490,
        'MU_OFF': 0x7491,
        'MU_TOG': 0x7492,
        'MU_MOD': 0x7493,
        'HPT_ON': 0x7C40,
        'HPT_OFF': 0x7C41,
        'HPT_TOG': 0x7C42,
        'HPT_RST': 0x7C43,
        'HPT_FBK': 0x7C44,
        'HPT_BUZ': 0x7C45,
        'HPT_MODI': 0x7C46,
        'HPT_MODD': 0x7C47,
        'HPT_CONT': 0x7C48,
        'HPT_CONI': 0x7C49,
        'HPT_COND': 0x7C4A,
        'HPT_DWLI': 0x7C4B,
        'HPT_DWLD': 0x7C4C,
        'KC_ASDN': 0x7C10,
        'KC_ASUP': 0x7C11,
        'KC_ASRP': 0x7C12,
        'KC_ASON': 0x7C13,
        'KC_ASOFF': 0x7C14,
        'KC_ASTG': 0x7C15,
        'CMB_ON': 0x7C50,
        'CMB_OFF': 0x7C51,
        'CMB_TOG': 0x7C52,
        'BL_TOGG': 0x7802,
        'BL_STEP': 0x7805,
        'BL_BRTG': 0x7806,
        'BL_ON': 0x7800,
        'BL_OFF': 0x7801,
        'BL_INC': 0x7804,
        'BL_DEC': 0x7803,
        'RGB_TOG': 0x7820,
        'RGB_MOD': 0x7821,
        'RGB_RMOD': 0x7822,
        'RGB_HUI': 0x7823,
        'RGB_HUD': 0x7824,
        'RGB_SAI': 0x7825,
        'RGB_SAD': 0x7826,
        'RGB_VAI': 0x7827,
        'RGB_VAD': 0x7828,
        'RGB_SPI': 0x7829,
        'RGB_SPD': 0x782A,
        'RGB_M_P': 0x782B,
        'RGB_M_B': 0x782C,
        'RGB_M_R': 0x782D,
        'RGB_M_SW': 0x782E,
        'RGB_M_SN': 0x782F,
        'RGB_M_K': 0x7830,
        'RGB_M_X': 0x7831,
        'RGB_M_G': 0x7832,
        'RGB_M_T': 0x7833,
        'KC_F13': 104,
        'KC_F14': 105,
        'KC_F15': 106,
        'KC_F16': 107,
        'KC_F17': 108,
        'KC_F18': 109,
        'KC_F19': 110,
        'KC_F20': 111,
        'KC_F21': 112,
        'KC_F22': 113,
        'KC_F23': 114,
        'KC_F24': 115,
        'KC_PWR': 165,
        'KC_SLEP': 166,
        'KC_WAKE': 167,
        'KC_EXEC': 116,
        'KC_HELP': 117,
        'KC_SLCT': 119,
        'KC_STOP': 120,
        'KC_AGIN': 121,
        'KC_UNDO': 122,
        'KC_CUT': 123,
        'KC_COPY': 124,
        'KC_PSTE': 125,
        'KC_FIND': 126,
        'KC_CALC': 178,
        'KC_MAIL': 177,
        'KC_MSEL': 175,
        'KC_MYCM': 179,
        'KC_WSCH': 180,
        'KC_WHOM': 181,
        'KC_WBAK': 182,
        'KC_WFWD': 183,
        'KC_WSTP': 184,
        'KC_WREF': 185,
        'KC_WFAV': 186,
        'KC_BRIU': 189,
        'KC_BRID': 190,
        'KC_MPRV': 172,
        'KC_MNXT': 171,
        'KC_MUTE': 168,
        'KC_VOLD': 170,
        'KC_VOLU': 169,
        'KC__VOLDOWN': 129,
        'KC__VOLUP': 128,
        'KC_MSTP': 173,
        'KC_MPLY': 174,
        'KC_MRWD': 188,
        'KC_MFFD': 187,
        'KC_EJCT': 176,
        'KC_MS_U': 0xCD,
        'KC_MS_D': 0xCE,
        'KC_MS_L': 0xCF,
        'KC_MS_R': 0xD0,
        'KC_BTN1': 0xD1,
        'KC_BTN2': 0xD2,
        'KC_BTN3': 0xD3,
        'KC_BTN4': 0xD4,
        'KC_BTN5': 0xD5,
        'KC_WH_U': 0xD9,
        'KC_WH_D': 0xDA,
        'KC_WH_L': 0xDB,
        'KC_WH_R': 0xDC,
        'KC_ACL0': 0xDD,
        'KC_ACL1': 0xDE,
        'KC_ACL2': 0xDF,
        'KC_LCAP': 130,
        'KC_LNUM': 131,
        'KC_LSCR': 132,
        'DYN_REC_START1': 0x7C53,
        'DYN_REC_START2': 0x7C54,
        'DYN_REC_STOP': 0x7C55,
        'DYN_MACRO_PLAY1': 0x7C56,
        'DYN_MACRO_PLAY2': 0x7C57,
        'MI_C': 0x7103,
        'MI_Cs': 0x7104,
        'MI_D': 0x7105,
        'MI_Ds': 0x7106,
        'MI_E': 0x7107,
        'MI_F': 0x7108,
        'MI_Fs': 0x7109,
        'MI_G': 0x710A,
        'MI_Gs': 0x710B,
        'MI_A': 0x710C,
        'MI_As': 0x710D,
        'MI_B': 0x710E,
        'MI_C_1': 0x710F,
        'MI_Cs_1': 0x7110,
        'MI_D_1': 0x7111,
        'MI_Ds_1': 0x7112,
        'MI_E_1': 0x7113,
        'MI_F_1': 0x7114,
        'MI_Fs_1': 0x7115,
        'MI_G_1': 0x7116,
        'MI_Gs_1': 0x7117,
        'MI_A_1': 0x7118,
        'MI_As_1': 0x7119,
        'MI_B_1': 0x711A,
        'MI_C_2': 0x711B,
        'MI_Cs_2': 0x711C,
        'MI_D_2': 0x711D,
        'MI_Ds_2': 0x711E,
        'MI_E_2': 0x711F,
        'MI_F_2': 0x7120,
        'MI_Fs_2': 0x7121,
        'MI_G_2': 0x7122,
        'MI_Gs_2': 0x7123,
        'MI_A_2': 0x7124,
        'MI_As_2': 0x7125,
        'MI_B_2': 0x7126,
        'MI_C_3': 0x7127,
        'MI_Cs_3': 0x7128,
        'MI_D_3': 0x7129,
        'MI_Ds_3': 0x712A,
        'MI_E_3': 0x712B,
        'MI_F_3': 0x712C,
        'MI_Fs_3': 0x712D,
        'MI_G_3': 0x712E,
        'MI_Gs_3': 0x712F,
        'MI_A_3': 0x7130,
        'MI_As_3': 0x7131,
        'MI_B_3': 0x7132,
        'MI_C_4': 0x7133,
        'MI_Cs_4': 0x7134,
        'MI_D_4': 0x7135,
        'MI_Ds_4': 0x7136,
        'MI_E_4': 0x7137,
        'MI_F_4': 0x7138,
        'MI_Fs_4': 0x7139,
        'MI_G_4': 0x713A,
        'MI_Gs_4': 0x713B,
        'MI_A_4': 0x713C,
        'MI_As_4': 0x713D,
        'MI_B_4': 0x713E,
        'MI_C_5': 0x713F,
        'MI_Cs_5': 0x7140,
        'MI_D_5': 0x7141,
        'MI_Ds_5': 0x7142,
        'MI_E_5': 0x7143,
        'MI_F_5': 0x7144,
        'MI_Fs_5': 0x7145,
        'MI_G_5': 0x7146,
        'MI_Gs_5': 0x7147,
        'MI_A_5': 0x7148,
        'MI_As_5': 0x7149,
        'MI_B_5': 0x714A,
        'MI_ALLOFF': 0x7185,
        'MI_OCT_N2': 0x714B,
        'MI_OCT_N1': 0x714C,
        'MI_OCT_0': 0x714D,
        'MI_OCT_1': 0x714E,
        'MI_OCT_2': 0x714F,
        'MI_OCT_3': 0x7150,
        'MI_OCT_4': 0x7151,
        'MI_OCT_5': 0x7152,
        'MI_OCT_6': 0x7153,
        'MI_OCT_7': 0x7154,
        'MI_OCTD': 0x7155,
        'MI_OCTU': 0x7156,
        'MI_TRNS_N6': 0x7157,
        'MI_TRNS_N5': 0x7158,
        'MI_TRNS_N4': 0x7159,
        'MI_TRNS_N3': 0x715A,
        'MI_TRNS_N2': 0x715B,
        'MI_TRNS_N1': 0x715C,
        'MI_TRNS_0': 0x715D,
        'MI_TRNS_1': 0x715E,
        'MI_TRNS_2': 0x715F,
        'MI_TRNS_3': 0x7160,
        'MI_TRNS_4': 0x7161,
        'MI_TRNS_5': 0x7162,
        'MI_TRNS_6': 0x7163,
        'MI_TRNSD': 0x7164,
        'MI_TRNSU': 0x7165,
        'MI_VEL_1': 0x7167,
        'MI_VEL_2': 0x7168,
        'MI_VEL_3': 0x7169,
        'MI_VEL_4': 0x716A,
        'MI_VEL_5': 0x716B,
        'MI_VEL_6': 0x716C,
        'MI_VEL_7': 0x716D,
        'MI_VEL_8': 0x716E,
        'MI_VEL_9': 0x716F,
        'MI_VEL_10': 0x7170,
        'MI_VELD': 0x7171,
        'MI_VELU': 0x7172,
        'MI_CH1': 0x7173,
        'MI_CH2': 0x7174,
        'MI_CH3': 0x7175,
        'MI_CH4': 0x7176,
        'MI_CH5': 0x7177,
        'MI_CH6': 0x7178,
        'MI_CH7': 0x7179,
        'MI_CH8': 0x717A,
        'MI_CH9': 0x717B,
        'MI_CH10': 0x717C,
        'MI_CH11': 0x717D,
        'MI_CH12': 0x717E,
        'MI_CH13': 0x717F,
        'MI_CH14': 0x7180,
        'MI_CH15': 0x7181,
        'MI_CH16': 0x7182,
        'MI_CHD': 0x7183,
        'MI_CHU': 0x7184,
        'MI_SUS': 0x7186,
        'MI_PORT': 0x7187,
        'MI_SOST': 0x7188,
        'MI_SOFT': 0x7189,
        'MI_LEG': 0x718A,
        'MI_MOD': 0x718B,
        'MI_MODSD': 0x718C,
        'MI_MODSU': 0x718D,
        'MI_BENDD': 0x718E,
        'MI_BENDU': 0x718F,

        'RESET': 0x7C00,

        'FN_MO13': 0x7C77,
        'FN_MO23': 0x7C78,

        'QK_KB': 0x7E00,

        'QMK_LM_SHIFT': 5,
        'QMK_LM_MASK': 0x1F,
    });

    KEYCODES_HIDDEN = [];
    for (let i = 0; i < 256; i++) {
      const si = 'TD(' + i + ')';
      KEYCODES_HIDDEN.push(K(si, si))
    }

    KEYCODES_LAYERS = [];
    KEYCODES_TAP_DANCE = [];
    KEYCODES_USER = [];
    KEYCODES_MACRO = [];
    ////////////////////////////////////
    //
    //  We don't know all keycodes to start with, because various keyboards
    //  have different features. This generates keycodes for those keyboards.
    //
    //  Layers, Macros, Tap Dance, Custom
    //
    //  For most of these, str display is handled by refreshKey.
    //  We include the max for these keys, not just our counts.
    //
    ////////////////////////////////////

    // Layers.
    for (let i = 0; i < 32; i++) {
      KC_MAP['MO(' + i + ')'] = KC_MAP['QK_MOMENTARY'] + i;
      KC_MAP['DF(' + i + ')'] = KC_MAP['QK_DEF_LAYER'] + i;
      KC_MAP['TG(' + i + ')'] = KC_MAP['QK_TOGGLE_LAYER'] + i;
      KC_MAP['TT(' + i + ')'] = KC_MAP['QK_LAYER_TAP_TOGGLE'] + i;
      KC_MAP['OSL(' + i + ')'] = KC_MAP['QK_ONE_SHOT_LAYER'] + i;
      KC_MAP['TO(' + i + ')'] = KC_MAP['QK_TO'] + i;
      KEYCODES_LAYERS.push(
        K('MO(' + i + ')', '', {type: 'layer', stype: 'MO', index: i}),
        K('DF(' + i + ')', '', {type: 'layer', stype: 'DF', index: i}),
        K('TG(' + i + ')', '', {type: 'layer', stype: 'TG', index: i}),
        K('TT(' + i + ')', '', {type: 'layer', stype: 'TT', index: i}),
        K('OSL(' + i + ')', '', {type: 'layer', stype: 'OSL', index: i}),
        K('TO(' + i + ')', '', {type: 'layer', stype: 'TO', index: i}),
      );
    }

    for (let i = 0; i < 16; i++) {
      KC_MAP['LT' + i + '(kc)'] = KC_MAP['QK_LAYER_TAP'] + i;
      KEYCODES_MACRO.push(
        K('LT' + i + '(kc)', '', {type: 'layertap', index: i}),
      );
    }

    for (let i = 0; i < 64; i++) {
      const userkey = 'USER' + ('' + i).padStart(2, '0');
      if (kbinfo.custom_keycodes && kbinfo.custom_keycodes[i]) {
        const custom = kbinfo.custom_keycodes[i];
        KC_MAP[userkey] = KC_MAP['QK_KB'] + i;
        KC_MAP[custom.name] = KC_MAP['QK_KB'] + i;
        KC_MAP[custom.shortName] = KC_MAP['QK_KB'] + i;
        KEYCODES_USER.push(
          K(custom.name, custom.shortName, {title: custom.title, type: 'user', index: i}),
        );
      } else {
        KC_MAP[userkey] = KC_MAP['QK_KB'] + i;
        KEYCODES_USER.push(
          K(userkey, '', {type: 'user', index: i}),
        );
      }
    }

    for (let i = 0; i < 256; i++) {
      // Macros.
      KC_MAP['M' + i] = KC_MAP['QK_MACRO'] + i;
      KEYCODES_MACRO.push(
        K('M' + i, '', {type: 'macro', index: i}),
      );

      // Tap Dance.
      KC_MAP['TD(' + i + ')'] = KC_MAP['QK_TAP_DANCE'] + i;
      KEYCODES_TAP_DANCE.push(
        K('TD(' + i + ')', '', {type: 'tapdance', index: i}),
      );
    }

    KEYCODES.push(...KEYCODES_SPECIAL);
    KEYCODES.push(...KEYCODES_BASIC);
    KEYCODES.push(...KEYCODES_SHIFTED);
    KEYCODES.push(...KEYCODES_ISO);
    KEYCODES.push(...KEYCODES_LAYERS);
    KEYCODES.push(...KEYCODES_BOOT);
    KEYCODES.push(...KEYCODES_MODIFIERS);
    KEYCODES.push(...KEYCODES_QUANTUM);
    KEYCODES.push(...KEYCODES_BACKLIGHT);
    KEYCODES.push(...KEYCODES_MEDIA);
    KEYCODES.push(...KEYCODES_TAP_DANCE);
    KEYCODES.push(...KEYCODES_MACRO_BASE);
    KEYCODES.push(...KEYCODES_MACRO);
    KEYCODES.push(...KEYCODES_USER);
    KEYCODES.push(...KEYCODES_HIDDEN);
    KEYCODES.push(...KEYCODES_MIDI);

    const JS_CODES = {
      "ControlLeft": "KC_LCTRL",
      "ControlRight": "KC_RCTRL",
      "ShiftLeft": "KC_LSHIFT",
      "ShiftRight": "KC_RSHIFT",
      "AltLeft": "KC_LALT",
      "AltRight": "KC_RALT",
      "MetaLeft": "KC_LGUI",
      "MetaRight": "KC_RGUI",
      "Enter": "KC_ENTER",
      "Escape": "KC_ESC",
      "Backspace": "KC_BSPC",
      "Tab": "KC_TAB",
      "Space": "KC_SPC",
      "ArrowLeft": "KC_LEFT",
      "ArrowUp": "KC_UP",
      "ArrowRight": "KC_RGHT",
      "ArrowDown": "KC_DOWN",
      "Delete": "KC_DEL",
      "Insert": "KC_INS",
      "Home": "KC_HOME",
      "End": "KC_END",
      "PageUp": "KC_PGUP",
      "PageDown": "KC_PGDN",
      "F1": "KC_F1",
      "F2": "KC_F2",
      "F3": "KC_F3",
      "F4": "KC_F4",
      "F5": "KC_F5",
      "F6": "KC_F6",
      "F7": "KC_F7",
      "F8": "KC_F8",
      "F9": "KC_F9",
      "F10": "KC_F10",
      "F11": "KC_F11",
      "F12": "KC_F12",
      "Numpad0": "KC_P0",
      "Numpad1": "KC_P1",
      "Numpad2": "KC_P2",
      "Numpad3": "KC_P3",
      "Numpad4": "KC_P4",
      "Numpad5": "KC_P5",
      "Numpad6": "KC_P6",
      "Numpad7": "KC_P7",
      "Numpad8": "KC_P8",
      "Numpad9": "KC_P9",
      "NumpadAdd": "KC_PPLS",
      "NumpadSubtract": "KC_PMNS",
      "NumpadMultiply": "KC_PAST",
      "NumpadDivide": "KC_PSLS",
      "NumpadDecimal": "KC_PDOT",
      "NumpadEnter": "KC_PENT",
      "CapsLock": "KC_CAPS",
      "ScrollLock": "KC_SLCK",
      "Pause": "KC_PAUS",
      "PrintScreen": "KC_PSCR"
    };

    for (const k of KEYCODES) {
      k.raw = KC_MAP[k.qmkid];
      // KC_NAME to key
      KEY.KEYCODES_MAP[k.qmkid] = k;
      // 0x0100 to key
      KEY.RAWCODES_MAP[KC_MAP[k.qmkid]] = k;
      if (k.alias) {
        for (const alias of k.alias) {
          KEY.KEYCODES_MAP[alias] = k;
        }
      }
      KEY.FROMJS_MAP[k.str] = k.qmkid;
      if (k.recorder_alias) {
        for (const alias of k.recorder_alias) {
          KEY.FROMJS_MAP[alias] = k.qmkid;
        }
      }
    }

    for (const [k, v] of Object.entries(JS_CODES)) {
      KEY.FROMJS_MAP[k] = v;
    }
  },

  stringify(keynum) {
    const modmask = keynum & 0xFF00;
    const keyid = keynum & 0x00FF;
    if (keynum in KEY.RAWCODES_MAP) {
      return KEY.RAWCODES_MAP[keynum].qmkid;
    } else if (modmask !== 0) {
      const kcstr = KEY.RAWCODES_MAP[keyid].qmkid;
      const maskstr = KEY.RAWCODES_MAP[modmask].qmkid;
      if (maskstr.match(/^(\w+)\(kc\)/)) {
        return maskstr.replace(/\(kc\)/, '(' + kcstr + ')');
      } else {
        return maskstr + '(' + kcstr + ')';
      }
    } else {
      console.log("err wtf?", keynum, keyid, modmask);
      return '????';
    }
  },

  parse(keystr) {
    if (!keystr) { return 0xFF; }
    if (keystr in KEY.KEYCODES_MAP) {
      return KEY.KEYCODES_MAP[keystr].raw;
    }
    if (keystr === -1) {
      return 0xFF;
    }
    if (!keystr.match) {
      alertUser("Unknown key string: ", keystr);
    }
    const match = keystr.match(/^(\w+)\((\w+)\)$/);
    if (match) {
      const cmask = KEY.KEYCODES_MAP[match[1] + '(kc)'].raw;
      const keymask = KEY.KEYCODES_MAP[match[2]].raw;
      return cmask + keymask;
    } else {
      alertUser("Unknown key string: ", keystr);
      return "UNKNOWN";
    }
  },

  stringifyKeymap(keymapint) {
    // keymap is just layers of arrays of integers.
    const ret = [];
    for (const layer of keymapint) {
      const l = [];
      for (const key of layer) {
        if (key === 0xFF) {
          l.push(-1);
        } else {
          l.push(KEY.stringify(key));
        }
      }
      ret.push(l);
    }
    return ret;
  },

  parseKeymap(keymapstr, rows, cols) {
    // keymap is just layers of arrays of strings.
    const ret = [];
    for (const layer of keymapstr) {
      const l = [];
      for (const row of layer) {
        for (const col of row) {
          if (!col) {
            l.push(0xFF);
          } else if (col === 0xFF) {
            l.push(0xFF);
          } else {
            l.push(KEY.parse(col));
          }
        }
      }
      ret.push(l);
    }
    return ret;
  },
}
