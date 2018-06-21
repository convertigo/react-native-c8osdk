"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs");
require("rxjs-compat");
class C8oPromise {
    constructor(c8o) {
        this.c8o = c8o;
    }
    async() {
        return new Promise((resolve, reject) => {
            this.then((response, parameters) => {
                resolve(response);
                return null;
            }).fail((error, parameters) => {
                reject(error);
            });
        });
    }
    then(c8oOnResponse) {
        if (this.nextPromise != null) {
            return this.nextPromise.then(c8oOnResponse);
        }
        else {
            this.c8oResponse = c8oOnResponse;
            this.nextPromise = new C8oPromise(this.c8o);
            if (this.lastFailure != null) {
                this.nextPromise.lastFailure = this.lastFailure;
                this.nextPromise.lastParameters = this.lastParameters;
            }
            if (this.lastResponse != null) {
                this._onResponse();
            }
            return this.nextPromise;
        }
    }
    progress(c8oOnProgress) {
        if (this.nextPromise != null) {
            return this.nextPromise.progress(c8oOnProgress);
        }
        else {
            this.c8oProgress = c8oOnProgress;
            this.nextPromise = new C8oPromise(this.c8o);
            return this.nextPromise;
        }
    }
    fail(c8oOnFail) {
        if (this.nextPromise != null) {
            return this.nextPromise.fail(c8oOnFail);
        }
        else {
            this.c8oFail = c8oOnFail;
            this.nextPromise = new C8oPromise(this.c8o);
            if (this.lastFailure != null) {
                this.onFailure(this.lastFailure, this.lastParameters);
            }
            return this.nextPromise;
        }
    }
    _onResponse() {
        try {
            if (this.c8oResponse != null) {
                const promise = new Array(0);
                promise.push(this.c8oResponse(this.lastResponse, this.lastParameters));
                if (promise[0] != null) {
                    if (this.nextPromise != null) {
                        let lastPromise = promise[0];
                        while (lastPromise.nextPromise != null) {
                            lastPromise = lastPromise.nextPromise;
                        }
                        lastPromise.nextPromise = this.nextPromise;
                    }
                    this.nextPromise = promise[0];
                }
                else if (this.nextPromise != null) {
                    this.nextPromise.onResponse(this.lastResponse, this.lastParameters);
                }
            }
            else if (this.nextPromise != null) {
                this.nextPromise.onResponse(this.lastResponse, this.lastParameters);
            }
            else {
            }
        }
        catch (error) {
            this.onFailure(error, this.lastParameters);
        }
    }
    onResponse(response, parameters) {
        if ((this.lastResponse != null || this.lastResponse !== undefined) && parameters["__fromLive"] === undefined) {
            if (this.nextPromise != null || this.nextPromise !== undefined) {
                this.nextPromise.onResponse(response, parameters);
            }
        }
        else {
            this.lastResponse = response;
            this.lastParameters = parameters;
            this._onResponse();
        }
    }
    onProgress(progress) {
        if (this.c8oProgress != null) {
            this.c8oProgress(progress);
        }
        else if (this.nextPromise != null) {
            this.nextPromise.onProgress(progress);
        }
    }
    onFailure(error, parameters) {
        this.lastFailure = error;
        this.lastParameters = parameters;
        if (this.c8oFail != null) {
            this.c8oFail(this.lastFailure, parameters);
        }
        if (this.nextPromise != null) {
            this.nextPromise.onFailure(this.lastFailure, parameters);
        }
    }
}
exports.C8oPromise = C8oPromise;
//# sourceMappingURL=c8oPromise.js.map