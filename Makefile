SOURCES = manifest.json src icons

all:

clean:
	rm -f hsux.zip

dist:
	zip -r9 hsux.zip $(SOURCES)
