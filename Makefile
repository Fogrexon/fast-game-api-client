.PHONY: publish, clean, build

build:
	npm run build

publish:
	npm publish --access public

clean:
	rm -rf dist
