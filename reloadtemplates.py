import re
from glob import glob

import inotify.adapters


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

def rebuild():
    with open('pages/index.html', 'w') as fout:
        fout.write(buildTemplate('index', 'html'))

if __name__ == "__main__":
    # I do this instead of watching the directory because
    # otherwise it triggers on my editor .swp file changes.
    while True:
        try:
            watcher = inotify.adapters.Inotify()

            rebuild()

            for path in ['html/**']:
                for file in glob(path):
                    print(f"Watching {file}")
                    watcher.add_watch(file)

            print("Watching for file changes.")

            changed = False

            for event in watcher.event_gen(yield_nones=False):
                (_, type_names, path, filename) = event
                for tname in type_names:
                    # IN_DELETE_SELF is here because some editors tend to delete
                    # and replace.
                    if tname in ['IN_MOVE_SELF', 'IN_DELETE_SELF',
                            'IN_CLOSE_WRITE']:
                        changed = True
                        break
                if changed: break
        except KeyboardInterrupt:
            break
        except:
            continue
