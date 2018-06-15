"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var c8oBase_1 = require("./c8oBase");
var C8oSettings = (function (_super) {
    __extends(C8oSettings, _super);
    function C8oSettings(c8oSettings) {
        if (c8oSettings === void 0) { c8oSettings = null; }
        var _this = _super.call(this) || this;
        if (c8oSettings != null) {
            if (c8oSettings != null) {
                _this.copy(c8oSettings);
            }
        }
        return _this;
    }
    C8oSettings.prototype.clone = function () {
        return new C8oSettings(this);
    };
    C8oSettings.prototype.setEndPoint = function (endpoint) {
        this._endpointSettings = endpoint;
        return this;
    };
    C8oSettings.prototype.setTimeout = function (timeout) {
        if (timeout <= 0) {
            timeout = -1;
        }
        this._timeout = timeout;
        return this;
    };
    C8oSettings.prototype.addHeader = function (name, value) {
        this._headers[name] = value;
        return this;
    };
    C8oSettings.prototype.addCookie = function (name, value) {
        if (this._cookies == null) {
            this._cookies = {};
        }
        this._cookies[name] = value;
        return this;
    };
    C8oSettings.prototype.setLogRemote = function (logRemote) {
        this._logRemote = logRemote;
        return this;
    };
    C8oSettings.prototype.setLogLevelLocal = function (logLevelLocal) {
        this._logLevelLocal = logLevelLocal;
        return this;
    };
    C8oSettings.prototype.setLogC8o = function (logC8o) {
        this._logC8o = logC8o;
        return this;
    };
    C8oSettings.prototype.setLogOnFail = function (logOnFail) {
        this._logOnFail = logOnFail;
        return this;
    };
    C8oSettings.prototype.setDefaultDatabaseName = function (defaultDatabaseName) {
        this._defaultDatabaseName = defaultDatabaseName;
        return this;
    };
    C8oSettings.prototype.setAuthenticationCookieValue = function (authenticationCookieValue) {
        this._authenticationCookieValue = authenticationCookieValue;
        return this;
    };
    C8oSettings.prototype.setFullSyncServerUrl = function (fullSyncServerUrl) {
        this._fullSyncServerUrl = fullSyncServerUrl;
        return this;
    };
    C8oSettings.prototype.setFullSyncUsername = function (fullSyncUsername) {
        this._fullSyncUsername = fullSyncUsername;
        return this;
    };
    C8oSettings.prototype.setFullSyncPassword = function (fullSyncPassword) {
        this._fullSyncPassword = fullSyncPassword;
        return this;
    };
    C8oSettings.prototype.setFullSyncLocalSuffix = function (fullSyncLocalSuffix) {
        this._fullSyncLocalSuffix = fullSyncLocalSuffix;
        return this;
    };
    C8oSettings.prototype.setUseEncryption = function (useEncryption) {
        this._useEncryption = useEncryption;
        return this;
    };
    C8oSettings.prototype.setTrustAllCertificates = function (trustAllCertificates) {
        this._trustAllCertificates = trustAllCertificates;
        return this;
    };
    return C8oSettings;
}(c8oBase_1.C8oBase));
exports.C8oSettings = C8oSettings;
//# sourceMappingURL=c8oSettings.js.map