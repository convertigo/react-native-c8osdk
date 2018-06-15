"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var c8oPromise_1 = require("./c8oPromise");
var react_native_1 = require("react-native");
var C8oR = react_native_1.NativeModules.C8oReact;
var C8oReact = react_native_1.NativeModules.C8oReact;
var C8o = (function () {
    function C8o() {
        this._c8oManagerEmitter = new react_native_1.NativeEventEmitter(C8oReact);
        this.progress = new c8oPromise_1.C8oPromise(this);
    }
    C8o.prototype.init = function (endpoint, c8oSettings) {
        var _this = this;
        this._c8oManagerEmitter.addListener('progress', function (progressI) {
            _this.progress.onProgress(progressI);
        });
        return C8oR.init(endpoint, c8oSettings);
    };
    C8o.prototype.callJson = function (requestable, parameters) {
        return C8oR.callJson(requestable, parameters);
    };
    return C8o;
}());
exports.C8o = C8o;
//# sourceMappingURL=c8o.js.map