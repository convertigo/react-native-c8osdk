"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var C8oPromise = (function () {
    function C8oPromise(c8o) {
        this.c8o = c8o;
    }
    C8oPromise.prototype.notifications = function (c8oOnProgress) {
        if (this.nextPromise != null) {
            return this.nextPromise.notifications(c8oOnProgress);
        }
        else {
            this.c8oProgress = c8oOnProgress;
            this.nextPromise = new C8oPromise(this.c8o);
            return this.nextPromise;
        }
    };
    C8oPromise.prototype.onProgress = function (progress) {
        if (this.c8oProgress != null) {
            this.c8oProgress(progress);
        }
        else if (this.nextPromise != null) {
            this.nextPromise.onProgress(progress);
        }
    };
    return C8oPromise;
}());
exports.C8oPromise = C8oPromise;
//# sourceMappingURL=c8oPromise.js.map