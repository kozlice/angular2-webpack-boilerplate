# An Angular 2 + Webpack boilerplate with examples

Angular 2 application with some examples (currently only HTTP service and component). Please, feel free to create issues and PRs.

Templates and stylesheets are embedded into JS bundle with help of [angular2-template-loader](https://github.com/TheLarkInn/angular2-template-loader). SASS/SCSS is used for styling. 

`index.html` is generated using [html-webpack-plugin](https://github.com/ampedandwired/html-webpack-plugin).

Hot module replacement is not provided here. Possibly I'll add it later. Same goes for service workers.

### Installation

Clone repository and run `npm install`.

Run `npm start` and point your browser to `http://localhost:9045/`.

### Testing

Use `npm test` to run test suite. [Karma](https://github.com/karma-runner/karma) is used as test runner, [Jasmine](https://github.com/jasmine/jasmine) - as testing framework. Code coverage reports are generated using [istanbul](https://github.com/gotwarlost/istanbul) and [remap-istanbul](https://github.com/SitePen/remap-istanbul) (this provides possibility to map back to TypeScript).

Use `npm lint` to check TypeScript files (via [tslint](https://github.com/palantir/tslint)) and SASS stylesheets (via [sass-lint](https://github.com/sasstools/sass-lint)). [Codelyzer](https://github.com/mgechev/codelyzer) helps to keep code close to [Angular 2 Style Guide](https://angular.io/styleguide).

You won't find end-to-end tests in this project (usually people use Protractor for this purpose). I believe that E2E/QA testing should be written in a separate project/repository, especially if you are working on projects with microservice architecture.

### Building bundle(s)

Use `npm run build` and you will get JS bundles, their maps and `index.html` in `dist` directory.

To build for production, use `NODE_ENV=production npm run build` (webpack configuration is chosen according to this environment variable).

### Documentation

Run `npm run docs` to generate documentation for TypeScript ([typedoc](https://github.com/TypeStrong/typedoc) is used for that) and SASS stylesheets (done with [kss-node](https://github.com/kss-node/kss-node)).

### Dev notes

- Webpack is configured to resolve modules not only from `node_modules` directory, but also from `src`. This is done to keep imports simple and avoid situations like `import { MyService } from '../../../app.service'`. Especially important for tests, since they are in a separate directory. If you are using JetBrains IDE, mark `src` directory as resource root

- Upgrade to newer version of `istanbul-instrumenter-loader` (`0.2.0` to `1.0.0`) breaks code coverage

- Upgrade to `awesome-typescript-loader@2.*.*` is not possible, as it is targeted to work with webpack 2, which is yet in beta and I don't want to use it until it's released

## TODOs

- Examples
    - Typeahead with throttle/distinct
    - Pipe
    - AuthGuard in router
    - Forms
    - Input and Output
    - rxjs-based WebSocket

- Comments on tests
