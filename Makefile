SOURCES = manifest.json src icons _locales

all:

dist:
	zip -r9 hsux.zip $(SOURCES)
