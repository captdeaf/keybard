# Building our html templates, which are getting unwieldy.
#
# Very straightforward. {{basename}} and that's it.

import re
from glob import glob

TEMPLATE_RE = re.compile(r'\{\{(\w+)\}\}')

def optimize(content):
    # 'content' is html code that has lots of whitespace, etc.
    stripped = re.sub(r'\s+',' ', content)
    return re.sub(r'>\s+<','><', stripped)

def buildTemplate(filename, dirname):
    print("buildTemplate called")
    body = ""
    for file in glob(f"{dirname}/{filename}*"):
        with open(file, 'r', encoding='utf-8') as fin:
            body += fin.read()

    return optimize(re.sub(TEMPLATE_RE, lambda x: buildTemplate(x[1], dirname), body))

with open('pages/index.html', 'w') as fout:
    fout.write(buildTemplate('index', 'html'))
