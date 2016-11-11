'use strict';

/**
 * TODO: Comments
 */
const webpack = require('webpack');
const ENV = process.env.ENV = process.env.NODE_ENV = 'prod';
let config = require('./webpack.config.common');

config.devtool = 'source-map';

config.output = {
    path: './dist',
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js',
    sourceMapFilename: '[name].[hash].map'
};

config.plugins.push(
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
        comments: false
    })
);

/**
 * See node-sass documentation for full list of options:
 * https://github.com/sass/node-sass#options
 */
config.sassLoader = {
    outputStyle: 'compressed'
};

/**
 * Same purpose as in dev config.
 */
config.plugins.push(new webpack.DefinePlugin({
    'ENV': JSON.stringify(ENV),
    'process.env': {
        'ENV': JSON.stringify(ENV)
    }
}));

module.exports = config;
