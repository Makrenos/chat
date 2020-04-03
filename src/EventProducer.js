"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var EventProducer = /** @class */ (function () {
    function EventProducer() {
        this.listeners = [];
    }
    EventProducer.prototype.addEventListener = function (type, listener, obj) {
        this.listeners.push({ type: type, listener: listener, obj: obj });
    };
    EventProducer.prototype.removeEventListener = function (type, listener) {
        this.listeners.splice(this.listeners.findIndex(function (x) { return x.type === type && x.listener === listener; }), 1);
    };
    EventProducer.prototype.dispatch = function (type) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        for (var _b = 0, _c = this.listeners.filter(function (x) { return x.type === type; }); _b < _c.length; _b++) {
            var listener = _c[_b];
            (_a = listener.listener).call.apply(_a, __spreadArrays([listener.obj], args));
        }
    };
    EventProducer.prototype.removeAllEventListener = function (obj) {
        if (!obj)
            throw new Error("Must specify object");
        this.listeners = this.listeners.filter(function (x) { return x.obj !== obj; });
    };
    return EventProducer;
}());
exports.EventProducer = EventProducer;
