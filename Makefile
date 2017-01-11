verify:
	@echo "Verify that installation, build, tests and docs generation succeed"
	rm -rf node_modules/
	npm install
	npm run build
	npm run test
	npm run docs
