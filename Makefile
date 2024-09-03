all: build serve

build:
	python3 rebuild_templates.py

serve:
	cd pages ; python3 -m http.server
