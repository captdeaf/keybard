const JSMAP = {
  keys: {
    'KeyA': 'KC_A',
    'KeyB': 'KC_B',
    'KeyC': 'KC_C',
    'KeyD': 'KC_D',
    'KeyE': 'KC_E',
    'KeyF': 'KC_F',
    'KeyG': 'KC_G',
    'KeyH': 'KC_H',
    'KeyI': 'KC_I',
    'KeyJ': 'KC_J',
    'KeyK': 'KC_K',
    'KeyL': 'KC_L',
    'KeyM': 'KC_M',
    'KeyN': 'KC_N',
    'KeyO': 'KC_O',
    'KeyP': 'KC_P',
    'KeyQ': 'KC_Q',
    'KeyR': 'KC_R',
    'KeyS': 'KC_S',
    'KeyT': 'KC_T',
    'KeyU': 'KC_U',
    'KeyV': 'KC_V',
    'KeyW': 'KC_W',
    'KeyX': 'KC_X',
    'KeyY': 'KC_Y',
    'KeyZ': 'KC_Z',
    'Digit1': 'KC_1',
    'Digit2': 'KC_2',
    'Digit3': 'KC_3',
    'Digit4': 'KC_4',
    'Digit5': 'KC_5',
    'Digit6': 'KC_6',
    'Digit7': 'KC_7',
    'Digit8': 'KC_8',
    'Digit9': 'KC_9',
    'Digit0': 'KC_0',
    'Enter': 'KC_ENTER',
    'Escape': 'KC_ESCAPE',
    'Backspace': 'KC_BSPACE',
    'Tab': 'KC_TAB',
    'Space': 'KC_SPACE',
    'Minus': 'KC_MINUS',
    'Equal': 'KC_EQUAL',
    'BracketLeft': 'KC_LBRACKET',
    'BracketRight': 'KC_RBRACKET',
    'Backslash': 'KC_BSLASH',
    'Semicolon': 'KC_SEMICOLON',
    'Quote': 'KC_QUOTE',
    'Backquote': 'KC_GRAVE',
    'Comma': 'KC_COMMA',
    'Period': 'KC_DOT',
    'Slash': 'KC_SLASH',
    'CapsLock': 'KC_CAPSLOCK',
    'F1': 'KC_F1',
    'F2': 'KC_F2',
    'F3': 'KC_F3',
    'F4': 'KC_F4',
    'F5': 'KC_F5',
    'F6': 'KC_F6',
    'F7': 'KC_F7',
    'F8': 'KC_F8',
    'F9': 'KC_F9',
    'F10': 'KC_F10',
    'F11': 'KC_F11',
    'F12': 'KC_F12',
    'PrintScreen': 'KC_PSCREEN',
    'ScrollLock': 'KC_SCROLLLOCK',
    'Pause': 'KC_PAUSE',
    'Insert': 'KC_INSERT',
    'Home': 'KC_HOME',
    'PageUp': 'KC_PGUP',
    'Delete': 'KC_DELETE',
    'End': 'KC_END',
    'PageDown': 'KC_PGDOWN',
    'ArrowRight': 'KC_RIGHT',
    'ArrowLeft': 'KC_LEFT',
    'ArrowDown': 'KC_DOWN',
    'ArrowUp': 'KC_UP',
    'NumLock': 'KC_NUMLOCK',
    'NumpadDivide': 'KC_KP_SLASH',
    'NumpadMultiply': 'KC_KP_ASTERISK',
    'NumpadSubtract': 'KC_KP_MINUS',
    'NumpadAdd': 'KC_KP_PLUS',
    'NumpadEnter': 'KC_KP_ENTER',
    'Numpad1': 'KC_KP_1',
    'Numpad2': 'KC_KP_2',
    'Numpad3': 'KC_KP_3',
    'Numpad4': 'KC_KP_4',
    'Numpad5': 'KC_KP_5',
    'Numpad6': 'KC_KP_6',
    'Numpad7': 'KC_KP_7',
    'Numpad8': 'KC_KP_8',
    'Numpad9': 'KC_KP_9',
    'Numpad0': 'KC_KP_0',
    'NumpadDecimal': 'KC_KP_DOT',
    'IntlBackslash': 'KC_NONUS_BSLASH',
    'ContextMenu': 'KC_APPLICATION',
    'ControlLeft': 'KC_LCTRL',
    'ShiftLeft': 'KC_LSHIFT',
    'AltLeft': 'KC_LALT',
    'MetaLeft': 'KC_LGUI',
    'ControlRight': 'KC_RCTRL',
    'ShiftRight': 'KC_RSHIFT',
    'AltRight': 'KC_RALT',
    'MetaRight': 'KC_RGUI',
  },

  shifted: {
    'Digit1': 'LSFT(KC_1)', // !
    'Digit2': 'LSFT(KC_2)', // @
    'Digit3': 'LSFT(KC_3)', // #
    'Digit4': 'LSFT(KC_4)', // $
    'Digit5': 'LSFT(KC_5)', // %
    'Digit6': 'LSFT(KC_6)', // ^
    'Digit7': 'LSFT(KC_7)', // &
    'Digit8': 'LSFT(KC_8)', // *
    'Digit9': 'LSFT(KC_9)', // (
    'Digit0': 'LSFT(KC_0)', // )
    'Minus': 'LSFT(KC_MINUS)', // _
    'Equal': 'LSFT(KC_EQUAL)', // +
    'BracketLeft': 'LSFT(KC_LBRACKET)', // {
    'BracketRight': 'LSFT(KC_RBRACKET)', // }
    'Backslash': 'LSFT(KC_BSLASH)', // |
    'Semicolon': 'LSFT(KC_SEMICOLON)', // :
    'Quote': 'LSFT(KC_QUOTE)', // "
    'Comma': 'LSFT(KC_COMMA)', // <
    'Period': 'LSFT(KC_DOT)', // >
    'Slash': 'LSFT(KC_SLASH)', // ?
    'Backquote': 'LSFT(KC_GRAVE)', // ~
  },

  convert: (evt) => {
    const code = evt.code;
    const shift = evt.shiftKey;

    if (shift && JSMAP.shifted[code]) {
      return JSMAP.shifted[code];
    }

    if (JSMAP.keys[code]) {
      return JSMAP.keys[code];
    }

    return undefined;
  },
};
