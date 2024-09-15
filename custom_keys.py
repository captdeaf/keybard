# Format:
#   QMK_STR : KEYDISP : TITLE TEXT
# Whitespace between doesn't matter.

custom_keys = dict()
custom_codes = dict()
custom_aliases = dict()

def K(qmkid, keystr, title, **args):
    custom_keys[qmkid] = dict(qmkid=qmkid, str=keystr, title=title, **args)

def alias(qmkid, *aliases):
    for alias in aliases:
        custom_aliases[alias] = qmkid

def Map(qmkid, code):
    custom_codes[code] = qmkid

K('QK_REPEAT_KEY', 'Repeat', 'Pete and Repeat ...')
K('LT0(kc)', 'LT0\n(kc)', 'Layer 0 when held, (kc) when tapped')
K('LT1(kc)', 'LT1\n(kc)', 'Layer 1 when held, (kc) when tapped')
K('LT2(kc)', 'LT2\n(kc)', 'Layer 2 when held, (kc) when tapped')
K('LT3(kc)', 'LT3\n(kc)', 'Layer 3 when held, (kc) when tapped')
K('LT4(kc)', 'LT4\n(kc)', 'Layer 4 when held, (kc) when tapped')
K('LT5(kc)', 'LT5\n(kc)', 'Layer 5 when held, (kc) when tapped')
K('LT6(kc)', 'LT6\n(kc)', 'Layer 6 when held, (kc) when tapped')
K('LT7(kc)', 'LT7\n(kc)', 'Layer 7 when held, (kc) when tapped')
K('LT8(kc)', 'LT8\n(kc)', 'Layer 8 when held, (kc) when tapped')
K('LT9(kc)', 'LT9\n(kc)', 'Layer 9 when held, (kc) when tapped')
K('LT10(kc)', 'LT10\n(kc)', 'Layer 10 when held, (kc) when tapped')
K('LT11(kc)', 'LT11\n(kc)', 'Layer 11 when held, (kc) when tapped')
K('LT12(kc)', 'LT12\n(kc)', 'Layer 12 when held, (kc) when tapped')
K('LT13(kc)', 'LT13\n(kc)', 'Layer 13 when held, (kc) when tapped')
K('LT14(kc)', 'LT14\n(kc)', 'Layer 14 when held, (kc) when tapped')
K('LT15(kc)', 'LT15\n(kc)', 'Layer 15 when held, (kc) when tapped')
