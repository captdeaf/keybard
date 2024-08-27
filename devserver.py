#!/usr/bin/env python3
#
# devserver.py
#
# Serves up HTML/js/etc, rebuilding templates each time.
#
####################################

from flask import Flask

TEMPLATES_DIR = 'html'
SERVE_DIR = 'pages'

import os, sys, argparse

cwd = os.getcwd()
if cwd not in sys.path:
    sys.path.append(cwd)

from rebuild_templates import build_template

app = Flask(
    'devserver',
    static_url_path = '/',
    static_folder = SERVE_DIR,
)

# index.html, we rebuild this on every access
@app.route('/')
def rebuild_index():
    return build_template('html', 'index')


def main():
    parser = argparse.ArgumentParser(
        prog=sys.argv[0],
        description="Creates a mini webserver.",
    )

    # This server.
    parser.add_argument('-b', '--bind', default='localhost', type=str)
    parser.add_argument('-p', '--port', default='8000', type=int)

    args = parser.parse_args()

    try:
        app.run(host=args.bind, port=args.port, threaded=True, debug=True, use_reloader=True)
    except KeyboardInterrupt:
        pass

if __name__ == "__main__":
    main()
