"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
var C8oR = react_native_1.NativeModules.C8oReact;
const { C8oReact } = react_native_1.NativeModules;
class C8oLogger {
    constructor() { }
    fatal(message) {
        return C8oR.log(message, 0);
    }
    error(message) {
        return C8oR.log(message, 1);
    }
    warn(message) {
        return C8oR.log(message, 2);
    }
    info(message) {
        return C8oR.log(message, 3);
    }
    debug(message) {
        return C8oR.log(message, 4);
    }
    trace(message) {
        return C8oR.log(message, 5);
    }
}
exports.C8oLogger = C8oLogger;
//# sourceMappingURL=c8oLogger.js.map