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

# K('KC_A', 'Z', 'From A to Z')
