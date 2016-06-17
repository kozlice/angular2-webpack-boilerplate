/**
 * Please see Karma config file reference for better understanding:
 * http://karma-runner.github.io/latest/config/configuration-file.html
 */
module.exports = function(config) {
    config.set({
        /**
         * This path will be used for resolving.
         */
        basePath: '',

        /**
         * List of test frameworks we will use. Most of them are provided by separate packages (adapters).
         * You can find them on npmjs.org: https://npmjs.org/browse/keyword/karma-adapter
         */
        frameworks: ['jasmine', 'source-map-support'],

        /**
         * Entry point / test environment builder is also written in TypeScript.
         */
        files: ['./tests/main.ts'],

        /**
         * Transform files before loading them.
         */
        preprocessors: {
            './src/**/*.ts': [
                'webpack',
                'sourcemap',
                'coverage'
            ],
            './tests/**/*.ts': [
                'webpack'
            ]
        },

        webpack: require('./webpack.config.test'),

        /**
         * Make dev server silent.
         */
        webpackServer: { noInfo: true },

        /**
         * A lot of plugins are available for test results reporting.
         * You can find them here: https://npmjs.org/browse/keyword/karma-reporter
         */
        reporters: ['coverage', 'karma-remap-istanbul'],

        /**
         * Simple summary (printed to the console) and JSON file which we will remap back to TypeScript.
         */
        coverageReporter: {
            dir: 'coverage',
            reporters: [
                { type: 'text-summary' },
                {
                    type: 'json',
                    subdir: '.',
                    file: 'coverage-final.json'
                }
            ]
        },

        /**
         * Map code coverage result back to TypeScript using `karma-remap-istanbul`.
         */
        remapIstanbulReporter: {
            src: 'coverage/coverage-final.json',
            reports: {
                lcovonly: 'coverage/lcov.info',
                html: 'coverage/report'
            },
            timeoutNotCreated: 5000,
            timeoutNoMoreFiles: 1000
        },

        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,

        /**
         * Only Phantom is used in this example.
         * You can find more browser launchers here: https://npmjs.org/browse/keyword/karma-launcher
         */
        browsers: ['PhantomJS'],

        /**
         * This is CI mode: run once and exit.
         * TODO: Non-CI mode
         */
        autoWatch: true,
        singleRun: true
    })
};
