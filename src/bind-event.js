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

    return (elm, evt, listener, options) => {
        if (!elm || !evt || !listener) return;

        const evtUpperCase = evt.substr(0, 1).toUpperCase() + evt.substr(1);
        const events = [
            evt,
            'o' + evtUpperCase,
            'moz' + evtUpperCase,
            'webkit' + evtUpperCase,
            'ms' + evtUpperCase
        ];

        let theEvt = false;

        events.some(e => {
            if ('on' + e in window) theEvt = e;
            return theEvt;
        });

        return elm.addEventListener(theEvt || evt, listener, options);
    };
})