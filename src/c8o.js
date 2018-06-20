"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var c8oPromise_1 = require("./c8oPromise");
var react_native_1 = require("react-native");
var c8oLogger_1 = require("./c8oLogger");
var C8oR = react_native_1.NativeModules.C8oReact;
var C8oReact = react_native_1.NativeModules.C8oReact;
var C8o = (function () {
    function C8o() {
        this._c8oManagerEmitter = new react_native_1.NativeEventEmitter(C8oReact);
        this.log = new c8oLogger_1.C8oLogger();
        this.suscriptionA = {};
    }
    C8o.prototype.init = function (endpoint, c8oSettings) {
        return C8oR.init(endpoint, c8oSettings);
    };
    C8o.prototype.callJson = function (requestable, parameters) {
        var _this = this;
        var promise = new c8oPromise_1.C8oPromise(this);
        var autoCancel = !parameters["continuous"] && !parameters["__live"];
        var live = parameters[C8o["FS_LIVE"]] != undefined;
        var uniqueID = "" + (new Date).getTime();
        C8oR.callJson(requestable, parameters, uniqueID).then(function (response) {
            promise.onResponse(response, 'progress-' + uniqueID);
            if (autoCancel) {
                _this.suscriptionA[uniqueID].remove();
            }
        })
            .catch(function (err) {
            promise.onFailure(err, 'progress-' + uniqueID);
        });
        this.suscriptionA[uniqueID] = this._c8oManagerEmitter.addListener('progress-' + uniqueID, function (progressI) {
            promise.onProgress(progressI);
        });
        if (live) {
            this._c8oManagerEmitter.addListener('live-' + uniqueID, function (progressI) {
                promise.onResponse(progressI, { "__fromLive": "live-" + uniqueID });
            });
        }
        return promise;
    };
    C8o.FS_LIVE = "__live";
    return C8o;
}());
exports.C8o = C8o;
//# sourceMappingURL=c8o.js.map