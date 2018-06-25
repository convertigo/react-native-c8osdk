"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const c8oPromise_1 = require("./c8oPromise");
const react_native_1 = require("react-native");
const c8oLogger_1 = require("./c8oLogger");
const uuidv4 = require("uuidv4");
const EvtEMT = require("eventemitter3");
var C8oR = react_native_1.NativeModules.C8oReact;
const { C8oReact } = react_native_1.NativeModules;
class C8o {
    constructor() {
        this._c8oManagerEmitter = new react_native_1.NativeEventEmitter(C8oReact);
        this.log = new c8oLogger_1.C8oLogger();
        this.suscription = {};
        this.suscriptionLive = {};
        this.ios = react_native_1.Platform.OS === 'ios';
        if (this.ios) {
            this.internEmitter = new EvtEMT();
        }
    }
    init(endpoint, c8oSettings) {
        return new Promise((resolve) => {
            C8oR.init(endpoint, c8oSettings)
                .then(() => {
                if (this.ios) {
                    this._c8oManagerEmitter.addListener('ios', (eventIos) => {
                        this.log.debug("debug: " + JSON.stringify(eventIos));
                        this.internEmitter.emit(eventIos['name'], eventIos['value']);
                    });
                }
                else {
                    resolve(true);
                }
            });
        });
    }
    callJson(requestable, parameters) {
        const promise = new c8oPromise_1.C8oPromise(this);
        const autoCancel = !parameters["continuous"] && !parameters["__live"];
        const live = parameters[C8o["FS_LIVE"]] != undefined;
        let uniqueID = null;
        if (parameters[C8o["FS_LIVE"]] != undefined) {
            uniqueID = parameters[C8o["FS_LIVE"]];
        }
        else {
            uniqueID = "" + uuidv4();
        }
        C8oR.callJson(requestable, parameters, uniqueID).then((response) => {
            promise.onResponse(response, 'progress-' + uniqueID);
            if (autoCancel && !this.ios) {
                this.suscription[uniqueID].remove();
                this.suscription[uniqueID].pop();
            }
        })
            .catch((err) => {
            promise.onFailure(err, 'progress-' + uniqueID);
        });
        if (this.ios) {
            this.internEmitter.on('progress-' + uniqueID, (resp) => {
                promise.onProgress(resp);
            });
        }
        else {
            this.suscription[uniqueID] = this._c8oManagerEmitter.addListener('progress-' + uniqueID, (progressI) => {
                promise.onProgress(progressI);
            });
        }
        if (live) {
            if (this.ios) {
                this.internEmitter.on('live-' + uniqueID, (resp) => {
                    promise.onResponse(resp, { "__fromLive": "live-" + uniqueID });
                });
            }
            else {
                this.suscriptionLive[uniqueID] = this._c8oManagerEmitter.addListener('live-' + uniqueID, (progressI) => {
                    promise.onResponse(progressI, { "__fromLive": "live-" + uniqueID });
                });
            }
        }
        return promise;
    }
}
C8o.FS_LIVE = "__live";
exports.C8o = C8o;
//# sourceMappingURL=c8o.js.map