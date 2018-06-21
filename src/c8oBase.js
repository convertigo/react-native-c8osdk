"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const c8oLogLevel_1 = require("./c8oLogLevel");
class C8oBase {
    constructor() {
        this._timeout = -1;
        this._trustAllCertificates = false;
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
    }
    get timeout() {
        return this._timeout;
    }
    get trustAllCertificates() {
        return this._trustAllCertificates;
    }
    get cookies() {
        return this._cookies;
    }
    get logRemote() {
        return this._logRemote;
    }
    get logLevelLocal() {
        return this._logLevelLocal;
    }
    get logC8o() {
        return this._logC8o;
    }
    get defaultDatabaseName() {
        return this._defaultDatabaseName;
    }
    get authenticationCookieValue() {
        return this._authenticationCookieValue;
    }
    get fullSyncLocalSuffix() {
        return this._fullSyncLocalSuffix;
    }
    get fullSyncServerUrl() {
        return this._fullSyncServerUrl;
    }
    get fullSyncUsername() {
        return this._fullSyncUsername;
    }
    get fullSyncPassword() {
        return this._fullSyncPassword;
    }
    get logOnFail() {
        return this._logOnFail;
    }
    get endpoint() {
        return this._endpointSettings;
    }
    get headers() {
        return this._headers;
    }
    copy(c8oBase) {
        if (c8oBase !== undefined) {
            this._timeout = c8oBase._timeout;
            this._trustAllCertificates = c8oBase._trustAllCertificates;
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
        }
    }
}
exports.C8oBase = C8oBase;
//# sourceMappingURL=c8oBase.js.map