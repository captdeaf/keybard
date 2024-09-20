Key = None

def doit():
    # Add mod mask for all of modifiers:
    # e.g: LCAG(kc) and LCAG_T(kc), for
    # all combos.
    mods = ['L', 'R']
    mods = sum([[x, x + 'S'] for x in mods], [])
    mods = sum([[x, x + 'C'] for x in mods], [])
    mods = sum([[x, x + 'A'] for x in mods], [])
    mods = sum([[x, x + 'G'] for x in mods], [])
    mods = sum([[x, x + '_T'] for x in mods], [])

    for qmkid in mods:
        mask = 0
        keys = []
        if 'S' in qmkid:
            mask |= 0x200
            keys.append('Shift')
        if 'C' in qmkid:
            mask |= 0x100
            keys.append('Ctrl')
        if 'A' in qmkid:
            mask |= 0x400
            keys.append('Alt')
        if 'G' in qmkid:
            mask |= 0x800
            keys.append('GUI')
        if 'R' in qmkid:
            mask |= 0x1000
            keys = ['R' + k for k in keys]
        else:
            keys = ['L' + k for k in keys]
        desc = ' + '.join(keys)
        if (mask > 0):
            if 'T' in qmkid:
                mask |= 0x2000
                desc += ' when held, kc when tapped'
            # K(qmkid + '(kc)', qmkid.replace('_', '\n', 1) + '\n(kc)', desc, code=mask)
            Key(mask,
                qmkid + '(kc)',
                qmkid.replace('_', '\n', 1) + '\n(kc)',
                desc)
