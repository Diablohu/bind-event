(function (name, factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory()
    } else {
        window[name] = factory();
    }
})('bind-event', function () {

    "use strict";

    return function (elm, evt, listener, options) {
        if (!elm || !evt || !listener) return;

        var evtUpperCase = evt.substr(0, 1).toUpperCase() + evt.substr(1);
        var events = [
            evt,
            'o' + evtUpperCase,
            'moz' + evtUpperCase,
            'webkit' + evtUpperCase,
            'ms' + evtUpperCase
        ];

        var theEvt = false;

        events.some(function (e) {
            if ('on' + e in window) theEvt = e;
            return theEvt;
        });

        return elm.addEventListener(theEvt || evt, listener, options);
    };
})