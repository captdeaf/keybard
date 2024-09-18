all: build serve

QMK_KEYCODES = ../vial-qmk/quantum/keycodes.h
GUI_KEYCODES = ../vial-gui/src/main/python/keycodes

keys:
	cp ${GUI_KEYCODES}/keycodes_v6.py .
	python3 rebuild_keys.py ${QMK_KEYCODES} ${GUI_KEYCODES}/keycodes.py
	rm ./keycodes_v6.py

build:
	python3 rebuild_templates.py

serve:
	cd pages ; python3 -m http.server
