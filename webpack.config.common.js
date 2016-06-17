'use strict';

/**
 * Please see webpack config reference for better understanding:
 * https://webpack.github.io/docs/configuration.html
 */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;

module.exports = {
    /**
     * These parameters will be used for rendering `index.html`.
     */
    metadata: {
        title: 'Demo Application',
        baseUrl: '/'
    },

    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'app': './src/main.ts'
    },

    resolve: {
        extensions: ['', '.ts', '.js', '.scss', '.html']
    },

    module: {
        loaders: [
            /**
             * Loader for TypeScript.
             * No need to exclude tests by `(spec|e2e)` mask here, as they are in separate directory.
             *
             * See project repository for details / configuration reference:
             * https://github.com/s-panferov/awesome-typescript-loader
             */
            {test: /\.ts$/, loader: 'awesome-typescript-loader'},

            /**
             * Loaders for HTML templates, JSON files, SASS/SCSS stylesheets. See details at projects' repositories:
             *
             * https://github.com/webpack/json-loader
             * https://github.com/webpack/html-loader
             * https://github.com/gajus/to-string-loader
             */
            {test: /\.json$/, loader: 'json-loader'},
            {test: /\.html$/, loader: 'html-loader'},
            {test: /\.scss$/, loader: 'to-string-loader!css-loader!sass-loader'}
        ]
    },

    plugins: [
        /**
         * This plugin is a part of `awesome-typescript-loader`, it allows to run type checking in a separate process,
         * so webpack won't wait for it.
         */
        new ForkCheckerPlugin(),

        /**
         * Quote from webpack docs: "Assign the module and chunk ids by occurrence count. Ids that are used often get
         * lower (shorter) ids. This make ids predictable, reduces total file size and is recommended."
         *
         * See https://webpack.github.io/docs/list-of-plugins.html#occurrenceorderplugin
         */
        new webpack.optimize.OccurenceOrderPlugin(true),

        /**
         * This plugin simplifies generation of `index.html` file. Especially useful for production environment,
         * where your files have hashes in their names.
         *
         * We have auto-injection disabled here, otherwise scripts will be automatically inserted at the end
         * of `body` element.
         *
         * See https://www.npmjs.com/package/html-webpack-plugin for details.
         *
         * TODO: Google Analytics and other stuff like that
         */
        new HtmlWebpackPlugin({
            title: 'Demo Application',
            template: 'src/index.ejs',
            chunksSortMode: 'dependency',
            inject: false
        }),

        /**
         * This plugin helps to share common code between pages.
         *
         * For more info see:
         * https://webpack.github.io/docs/list-of-plugins.html#commonschunkplugin
         * https://github.com/webpack/docs/wiki/optimization#multi-page-app
         */
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor', 'polyfills']
        })
    ]
};
