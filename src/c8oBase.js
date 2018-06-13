"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var c8oLogLevel_1 = require("./c8oLogLevel");
var C8oBase = (function () {
    function C8oBase() {
        this._timeout = -1;
        this._cookies = {};
        this._logRemote = true;
        this._initialLogRemote = true;
        this._logLevelLocal = c8oLogLevel_1.C8oLogLevel.NONE;
        this._logC8o = false;
        this._defaultDatabaseName = null;
        this._authenticationCookieValue = null;
        this._fullSyncLocalSuffix = null;
        this._fullSyncServerUrl = "http://localhost:5984";
        this._useEncryption = false;
        this._disableSSL = false;
        this._headers = {};
        this._trustAllCertificates = false;
    }
    Object.defineProperty(C8oBase.prototype, "timeout", {
        get: function () {
            return this._timeout;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C8oBase.prototype, "cookies", {
        get: function () {
            return this._cookies;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C8oBase.prototype, "logRemote", {
        get: function () {
            return this._logRemote;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C8oBase.prototype, "logLevelLocal", {
        get: function () {
            return this._logLevelLocal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C8oBase.prototype, "logC8o", {
        get: function () {
            return this._logC8o;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C8oBase.prototype, "defaultDatabaseName", {
        get: function () {
            return this._defaultDatabaseName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C8oBase.prototype, "authenticationCookieValue", {
        get: function () {
            return this._authenticationCookieValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C8oBase.prototype, "trustAllCertificates", {
        get: function () {
            return this._trustAllCertificates;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C8oBase.prototype, "fullSyncLocalSuffix", {
        get: function () {
            return this._fullSyncLocalSuffix;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C8oBase.prototype, "fullSyncServerUrl", {
        get: function () {
            return this._fullSyncServerUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C8oBase.prototype, "fullSyncUsername", {
        get: function () {
            return this._fullSyncUsername;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C8oBase.prototype, "fullSyncPassword", {
        get: function () {
            return this._fullSyncPassword;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C8oBase.prototype, "logOnFail", {
        get: function () {
            return this._logOnFail;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C8oBase.prototype, "endpoint", {
        get: function () {
            return this._endpointSettings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C8oBase.prototype, "headers", {
        get: function () {
            return this._headers;
        },
        enumerable: true,
        configurable: true
    });
    C8oBase.prototype.copy = function (c8oBase) {
        if (c8oBase !== undefined) {
            this._timeout = c8oBase._timeout;
            if (this.cookies == null) {
                this._cookies = {};
            }
            if (c8oBase.cookies !== null) {
                this._cookies = c8oBase._cookies;
            }
            this._logRemote = c8oBase.logRemote;
            this._initialLogRemote = c8oBase.logRemote;
            this._logLevelLocal = c8oBase.logLevelLocal;
            this._logC8o = c8oBase.logC8o;
            this._logOnFail = c8oBase.logOnFail;
            this._defaultDatabaseName = c8oBase.defaultDatabaseName;
            this._authenticationCookieValue = c8oBase.authenticationCookieValue;
            this._fullSyncLocalSuffix = c8oBase.fullSyncLocalSuffix;
            this._fullSyncServerUrl = c8oBase.fullSyncServerUrl;
            this._fullSyncUsername = c8oBase.fullSyncUsername;
            this._fullSyncPassword = c8oBase.fullSyncPassword;
            this._headers = c8oBase._headers;
            this._trustAllCertificates = c8oBase._trustAllCertificates;
        }
    };
    return C8oBase;
}());
exports.C8oBase = C8oBase;
//# sourceMappingURL=c8oBase.js.map