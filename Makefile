all: build serve

build:
	python3 build.py

serve:
	cd pages ; python3 -m http.server
