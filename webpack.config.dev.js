'use strict';

/**
 * TODO: Comments
 */
const webpack = require('webpack');
const ENV = process.env.ENV = process.env.NODE_ENV = 'dev';
let config = require('./webpack.config.common');

config.devtool = 'inline-source-map';

config.output = {
    path: './dist',
    publicPath: 'http://localhost:9045/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    sourceMapFilename: '[name].map'
};

config.debug = true;

config.devServer = {
    historyApiFallback: true,
    stats: 'minimal',
    outputPath: 'dist',
    host: 'localhost',
    port: 9045,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    }
};

/**
 * Quote from webpack docs: "Define free variables. Useful for having development builds with debug logging
 * or adding global constants."
 *
 * Note, that values are _evaluated_, not just assigned (this is why we use `JSON.stringify` here).
 */
config.plugins.push(new webpack.DefinePlugin({
    'ENV': JSON.stringify(ENV),
    'process.env': {
        'ENV': JSON.stringify(ENV)
    }
}));

module.exports = config;
