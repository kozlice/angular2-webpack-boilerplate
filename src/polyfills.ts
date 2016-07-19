/**
 * Use CoreJS polyfills.
 */
import 'core-js/es6';
import 'core-js/es7/reflect';

/**
 * Quote from docs: "A Zone is an execution context that persists across async tasks. You can think of it as
 * thread-local storage for JavaScript VMs." Angular 2 uses this library.
 * See details here: https://github.com/angular/zone.js/
 */
import 'zone.js/dist/zone';

/**
 * This package helps to avoid generation of helper code in each file (e.g. for decorators).
 * See details here: https://github.com/ngParty/ts-helpers
 */
import 'ts-helpers';

if (process.env.ENV !== 'production') {
    /**
     * You can use `import` only in a namespace or module in TypeScript, so use `require` here.
     */
    Error['stackTraceLimit'] = Infinity;
    require('zone.js/dist/long-stack-trace-zone');
}
