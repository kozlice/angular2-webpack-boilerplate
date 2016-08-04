# An opinionated Angular 2 + Webpack boilerplate

**Work in progress.** This kit is not created for learning purposes, but rather as a base for my own upcoming projects. I'm not sure that world needs _yet another_ Angular 2 + webpack boilerplate, but initially it was shared as a solution for [TypeScript code coverage issue](https://github.com/AngularClass/angular2-webpack-starter/issues/178).

Feel free to create issues and PRs, though, if you know how to do this thing better.  

### What's inside

Angular 2 example application (examples for components, HTTP, forms, routing are yet to come - most likely when Angular 2 is out of RC state).

Templates and stylesheets are embedded into JS bundle. I chose SASS for styling.

`index.html` is generated using [html-webpack-plugin](https://github.com/ampedandwired/html-webpack-plugin). Some popular analytics/metrics are yet to be added there (e.g. Google Analytics or New Relic).

Hot module replacement is not provided here. Possibly I'll add it later. Same goes for service workers.

### Installation

Clone repository and run `npm install`.

Run `npm start` and point your browser to `http://localhost:9045/`.

### Testing

Use `npm test` to run test suite. [Karma](https://github.com/karma-runner/karma) is used as test runner, [Jasmine](https://github.com/jasmine/jasmine) - as testing framework. Code coverage reports are generated using [istanbul](https://github.com/gotwarlost/istanbul) and [remap-istanbul](https://github.com/SitePen/remap-istanbul) (this provides possibility to map back to TypeScript).

Use `npm lint` to check TypeScript files (via [tslint](https://github.com/palantir/tslint)) and SASS stylesheets (via [sass-lint](https://github.com/sasstools/sass-lint)). [Codelyzer](https://github.com/mgechev/codelyzer) helps to keep code close to [Angular 2 Style Guide](https://angular.io/styleguide).

You won't find end-to-end tests in this project (usually people use Protractor for this purpose). I believe that E2E/QA testing should be written in a separate project/repository, especially if you are working on projects with microservice architecture.

### Building bundle(s)

Use `npm run build` and you will get JS bundles, their maps and `index.html` in `dist` directory. To build for production, use `NODE_ENV=production npm run build` (webpack configuration is chosen according to this environment variable).

### Documentation

Run `npm run docs` to generate documentation for TypeScript ([typedoc](https://github.com/TypeStrong/typedoc) is used for that) and SASS stylesheets (done with [kss-node](https://github.com/kss-node/kss-node)). This might seem a little bit unusual to have docs for styles, but I find KSS very nice tool to keep them understandable.

### Notes for development

Modules are resolved not only from `node_modules` directory, but from `src` as well. This is done to keep imports simple and avoid situations like `import { MyService } from '../../../app.service'`.

If you are using JetBrains IDE, mark `src` directory as resource root.
