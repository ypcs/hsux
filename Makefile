SOURCES = manifest.json src icons

all:

dist:
	zip -r9 hsux.zip $(SOURCES)
