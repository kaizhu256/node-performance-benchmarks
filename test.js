/* istanbul instrument in package performance_benchmarks */
/* jslint-utility2 */
/*jslint
    bitwise: true,
    browser: true,
    maxerr: 4,
    maxlen: 100,
    node: true,
    nomen: true,
    regexp: true,
    stupid: true
*/
(function () {
    'use strict';
    var local;



    /* istanbul ignore next */
    // init debug_inline
    (function () {
        var consoleError, key;
        key = "debug_inline".replace("_i", "I");
        if (console[key]) {
            return;
        }
        consoleError = console.error;
        console[key] = function (arg0) {
        /*
         * this function will both print arg0 to stderr and return it
         */
            // debug arguments
            console[key + "Arguments"] = arguments;
            consoleError("\n\n" + key);
            consoleError.apply(console, arguments);
            consoleError("\n");
            // return arg0 for inspection
            return arg0;
        };
        ((typeof window === "object" && window) || global)[key] = console[key];
    }());



    // run shared js-env code - init-before
    (function () {
        // init local
        local = {};
        // init modeJs
        local.modeJs = (function () {
            try {
                return typeof navigator.userAgent === 'string' &&
                    typeof document.querySelector('body') === 'object' &&
                    typeof XMLHttpRequest.prototype.open === 'function' &&
                    'browser';
            } catch (errorCaughtBrowser) {
                return module.exports &&
                    typeof process.versions.node === 'string' &&
                    typeof require('http').createServer === 'function' &&
                    'node';
            }
        }());
        // init global
        local.global = local.modeJs === 'browser'
            ? window
            : global;
        // re-init local
        local = local.global.local = (local.global.utility2 ||
            require('utility2')).requireReadme();
        // init test
        local.testRunInit(local);
    }());



    // run shared js-env code - function
    (function () {
        return;
    }());
}());
