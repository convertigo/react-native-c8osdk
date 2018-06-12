import { C8oBase } from "./c8oBase";
import { C8oLogLevel } from "./c8oLogLevel";
export declare class C8oSettings extends C8oBase {
    constructor(c8oSettings?: C8oSettings);
    clone(): C8oSettings;
    setEndPoint(endpoint: string): C8oSettings;
    setTimeout(timeout: number): C8oSettings;
    addHeader(name: string, value: string): this;
    addClientCertificate(anyCertificate: string, password: string): C8oSettings;
    addClientCertificate(anyCertificate: number, password: string): C8oSettings;
    addCookie(name: string, value: string): C8oSettings;
    setLogRemote(logRemote: boolean): C8oSettings;
    setLogLevelLocal(logLevelLocal: C8oLogLevel): C8oSettings;
    setLogC8o(logC8o: boolean): C8oSettings;
    setLogOnFail(logOnFail: (exception: Error, parameters: Object) => void): C8oSettings;
    setDefaultDatabaseName(defaultDatabaseName: string): C8oSettings;
    setAuthenticationCookieValue(authenticationCookieValue: string): C8oSettings;
    setFullSyncServerUrl(fullSyncServerUrl: string): C8oSettings;
    setFullSyncUsername(fullSyncUsername: string): C8oSettings;
    setFullSyncPassword(fullSyncPassword: string): C8oSettings;
    setFullSyncLocalSuffix(fullSyncLocalSuffix: string): C8oSettings;
    setUseEncryption(useEncryption: boolean): C8oSettings;
    setTrustAllCertificates(trustAllCertificates: boolean): C8oSettings;
}
