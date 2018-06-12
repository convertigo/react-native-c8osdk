"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var C8oLogLevel = (function () {
    function C8oLogLevel(name, priority) {
        this.name = name;
        this.priority = priority;
    }
    C8oLogLevel.getC8oLogLevel = function (name) {
        for (var i = 0; i <= C8oLogLevel.C8O_LOG_LEVELS.length; i++) {
            if (C8oLogLevel.C8O_LOG_LEVELS[i].name === name) {
                return C8oLogLevel.C8O_LOG_LEVELS[i];
            }
        }
    };
    C8oLogLevel.NULL = new C8oLogLevel("", 0);
    C8oLogLevel.NONE = new C8oLogLevel("none", 1);
    C8oLogLevel.TRACE = new C8oLogLevel("trace", 2);
    C8oLogLevel.DEBUG = new C8oLogLevel("debug", 3);
    C8oLogLevel.INFO = new C8oLogLevel("info", 4);
    C8oLogLevel.WARN = new C8oLogLevel("warn", 5);
    C8oLogLevel.ERROR = new C8oLogLevel("error", 6);
    C8oLogLevel.FATAL = new C8oLogLevel("fatal", 7);
    C8oLogLevel.C8O_LOG_LEVELS = [C8oLogLevel.NULL, C8oLogLevel.NONE, C8oLogLevel.TRACE, C8oLogLevel.DEBUG, C8oLogLevel.INFO, C8oLogLevel.WARN, C8oLogLevel.ERROR, C8oLogLevel.FATAL];
    return C8oLogLevel;
}());
exports.C8oLogLevel = C8oLogLevel;
//# sourceMappingURL=c8oLogLevel.js.map