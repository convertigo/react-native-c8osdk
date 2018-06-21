"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const c8oBase_1 = require("./c8oBase");
class C8oSettings extends c8oBase_1.C8oBase {
    constructor(c8oSettings = null) {
        super();
        if (c8oSettings != null) {
            if (c8oSettings != null) {
                this.copy(c8oSettings);
            }
        }
    }
    clone() {
        return new C8oSettings(this);
    }
    setEndPoint(endpoint) {
        this._endpointSettings = endpoint;
        return this;
    }
    setTimeout(timeout) {
        if (timeout <= 0) {
            timeout = -1;
        }
        this._timeout = timeout;
        return this;
    }
    addHeader(name, value) {
        this._headers[name] = value;
        return this;
    }
    addCookie(name, value) {
        if (this._cookies == null) {
            this._cookies = {};
        }
        this._cookies[name] = value;
        return this;
    }
    setLogRemote(logRemote) {
        this._logRemote = logRemote;
        return this;
    }
    setLogLevelLocal(logLevelLocal) {
        this._logLevelLocal = logLevelLocal;
        return this;
    }
    setLogC8o(logC8o) {
        this._logC8o = logC8o;
        return this;
    }
    setLogOnFail(logOnFail) {
        this._logOnFail = logOnFail;
        return this;
    }
    setDefaultDatabaseName(defaultDatabaseName) {
        this._defaultDatabaseName = defaultDatabaseName;
        return this;
    }
    setAuthenticationCookieValue(authenticationCookieValue) {
        this._authenticationCookieValue = authenticationCookieValue;
        return this;
    }
    setFullSyncServerUrl(fullSyncServerUrl) {
        this._fullSyncServerUrl = fullSyncServerUrl;
        return this;
    }
    setFullSyncUsername(fullSyncUsername) {
        this._fullSyncUsername = fullSyncUsername;
        return this;
    }
    setFullSyncPassword(fullSyncPassword) {
        this._fullSyncPassword = fullSyncPassword;
        return this;
    }
    setFullSyncLocalSuffix(fullSyncLocalSuffix) {
        this._fullSyncLocalSuffix = fullSyncLocalSuffix;
        return this;
    }
    setUseEncryption(useEncryption) {
        this._useEncryption = useEncryption;
        return this;
    }
    setTrustAllCertificates(trustAllCertificates) {
        this._trustAllCertificates = trustAllCertificates;
        return this;
    }
}
exports.C8oSettings = C8oSettings;
//# sourceMappingURL=c8oSettings.js.map