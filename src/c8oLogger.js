"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var C8oR = react_native_1.NativeModules.C8oReact;
var C8oReact = react_native_1.NativeModules.C8oReact;
var C8oLogger = (function () {
    function C8oLogger() {
    }
    C8oLogger.prototype.fatal = function (message) {
        return C8oR.log(message, 0);
    };
    C8oLogger.prototype.error = function (message) {
        return C8oR.log(message, 1);
    };
    C8oLogger.prototype.warn = function (message) {
        return C8oR.log(message, 2);
    };
    C8oLogger.prototype.info = function (message) {
        return C8oR.log(message, 3);
    };
    C8oLogger.prototype.debug = function (message) {
        return C8oR.log(message, 4);
    };
    C8oLogger.prototype.trace = function (message) {
        return C8oR.log(message, 5);
    };
    return C8oLogger;
}());
exports.C8oLogger = C8oLogger;
//# sourceMappingURL=c8oLogger.js.map