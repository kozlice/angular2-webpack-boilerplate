'use strict';

/**
 * TODO: Comments?
 * TODO: HMR
 */

switch (process.env.NODE_ENV) {
    case 'prod':
    case 'production':
        module.exports = require('./webpack.config.prod');
        break;
    case 'test':
    case 'testing':
        module.exports = require('./webpack.config.test');
        break;
    case 'dev':
    case 'development':
    default:
        module.exports = require('./webpack.config.dev');
        break;
}
