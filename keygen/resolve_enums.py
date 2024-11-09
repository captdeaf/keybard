#!/usr/bin/env python3

import sys
import pycparser
from pycparser import c_ast

values = {}
paths = []
cpp_args = []

for arg in sys.argv[1:]:
    if arg.startswith('-'):
        cpp_args.append(arg)
    else:
        paths.append(arg)

def process_file(path):
    global values

    ast = pycparser.parse_file(path, use_cpp=True, cpp_args=cpp_args)

    for declaration in ast.ext:
        process_declaration(declaration)

def process_declaration(declaration):
    global values

    current_value = 0

    for enumeration in declaration.type.values:
        name, value = enumeration.name, enumeration.value
        if value is None:
            value = current_value
        elif isinstance(value, c_ast.Constant):
            value = current_value = int(value.value, 16)
        elif isinstance(value, c_ast.ID):
            value = value.name
            current_value = values[value]
        else:
            print('Unknown enumeration type:', value, file=sys.stderr)
            sys.exit(1)

        values[name] = current_value

        current_value += 1

        if isinstance(value, int):
            value = f'0x{value:04X}'

        print(name, '=', value)

for path in paths:
    process_file(path)
