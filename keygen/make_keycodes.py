codemap = {}
aliases = {}
rcodemap = {}

def Key(code, qmkid, disp, title):
    key = dict(code=code, qmkid=qmkid)
    if disp is not None:
        key['str'] = disp
    if title is not None:
        key['title'] = title
    if code not in codemap:
        codemap[code] = key
        rcodemap[qmkid] = codemap[code]
        aliases[qmkid] = qmkid
    else:
        if disp is not None:
            codemap[code]['str'] = disp
        if title is not None:
            codemap[code]['title'] = disp
        aliases[qmkid] = codemap[code]['qmkid']

def KeyDup(code, qmkid, disp, title):
    key = dict(code=code, qmkid=qmkid)
    if title is not None:
        key['title'] = title
    if disp is not None:
        key['str'] = disp
    if code not in codemap:
        codemap[code] = key
        rcodemap[qmkid] = codemap[code]
        aliases[qmkid] = qmkid
    else:
        if title is not None:
            codemap[code]['title'] = title
        aliases[qmkid] = codemap[code]['qmkid']

import initial

initial.Key = Key
initial.define()

with open('keycodes.h', 'r', encoding='utf-8') as fin:
    allqmks = fin.readlines()

import re

codere = re.compile(r'(\w+)\s*=\s*(0x\w+)')
aliasre = re.compile(r'(\w+)\s*=\s*(\w+)')

for line in allqmks:
    cm = re.search(codere, line)
    am = re.search(aliasre, line)
    if cm:
        qmkid = cm[1]
        code = int(cm[2], 16)
        if code in codemap:
            aliases[qmkid] = codemap[code]['qmkid']
        else:
            Key(code, qmkid, qmkid, qmkid)
    elif am:
        aliases[am[1]] = aliases[am[2]]

import sys

def K(qmkid, disp, title=None, alias=[], **extra):
    rid = qmkid
    for qid in [qmkid] + alias:
        if qid in aliases:
            rid = aliases[qid]
            break
    if rid not in rcodemap:
        print(f"!!! rid {rid} not in aliases!")
        sys.exit(1)
    key = rcodemap[rid]
    if disp is not None:
        key['str'] = disp
    if title is not None:
        key['title'] = title
    for a in [qmkid] + alias:
        aliases[a] = rid

import keycodes

keycodes.K = K
keycodes.doit()

import custom
custom.Key = KeyDup
custom.doit()

import json

cm = {}
km = {}
sorts = sorted(codemap.keys())
for code in sorts:
    key = codemap[code]
    cm[code] = key['qmkid']
    km[key['qmkid']] = key

cmjs = json.dumps(cm, indent=2)

tox = re.compile(r'"(\d+)":')
cmjs = re.sub(tox, lambda x: f"{int(x[1]):#06x}:", cmjs)

kmjs = json.dumps(km, indent=2)
kmx = re.compile(r'"code": (\d+),')
kmjs = re.sub(kmx, lambda x: f'"code": {int(x[1]):#06x},', kmjs)

print('const CODEMAP = ' + cmjs + ';')
print()
print('const KEYMAP = ' + kmjs + ';')
print()
print('const KEYALIASES = ' + json.dumps(aliases, indent=2) + ';')
print()
