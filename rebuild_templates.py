#!/bin/env python3

import re
from glob import glob

TEMPLATE_RE = re.compile(r'\{\{([\w\.]+)\}\}')

def optimize(content):
    # 'content' is html code that has lots of whitespace, and probably comments.
    content = re.sub(r'<!--.*?-->',' ', content)
    content = re.sub(r'\s+',' ', content)
    return re.sub(r'>\s+<','><', content)

def parse_template(dirname, filename):
    body = ""
    for file in glob(f"{dirname}/{filename}*"):
        with open(file, 'r', encoding='utf-8') as fin:
            body += fin.read()

    return re.sub(TEMPLATE_RE, lambda x: build_template(dirname, x[1]), body)

def build_template(dirname, filename):
    return optimize(parse_template(dirname, filename))

def rebuild():
    body = build_template('html', 'index')
    with open('pages/index.html', 'w') as fout:
        fout.write(body)
    return body

if __name__ == "__main__":
    rebuild()
