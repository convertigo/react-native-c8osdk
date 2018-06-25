/**
 * Flowtype definitions for c8oSettin
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.2.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */


/**
 * Contains optional parameters of a C8o class instantiation.<br/>
 * Note that setters return the setting instance thereby C8oSettings can be instantiate like that:<br/>
new C8oSettings().setTimeout(5000).setTrustAllCertificates(true).setUseEncryption(true);
*/
declare export class C8oSettings mixins C8oBase {
    constructor(c8oSettings: C8oSettings): this;

    /**
     * Clone C8osettings object
     * @return  undefined
     */
    clone(): C8oSettings;

    /**
     * Sets the endpoint (override env.json).<br/>
     * @param  The endpoint.
     * @returns  The current <b>C8oSettings</b>, for chaining.
     */
    setEndPoint(endpoint: string): C8oSettings;

    /**
     * Sets the connection timeout to Convertigo in milliseconds. A value of zero means the timeout is not used.<br/>
     * Default is <b>0</b>.
     * @param  The timeout.
     * @returns  The current <b>C8oSettings</b>, for chaining.
     */
    setTimeout(timeout: number): C8oSettings;

    /**
     * Add a header
     * @param  The name of header.
     * @param  The value of header.
     * @returns  The current <b>C8oSettings</b>, for chaining.
     */
    addHeader(name: string, value: string): void;

    /**
     * Add a new cookie to the initial cookies send to the Convertigo server.
     * @param  The name of the new cookie.
     * @param  The value of the new cookie.
     * @returns  The current <b>C8oSettings</b>, for chaining.
     */
    addCookie(name: string, value: string): C8oSettings;

    /**
     * Sets a value indicating if logs are sent to the Convertigo server.<br/>
     * Default is <b>true</b>.
     * @returns  The current <b>C8oSettings</b>, for chaining.
     */
    setLogRemote(logRemote: boolean): C8oSettings;

    /**
     * Sets a value indicating the log level you want in the device console
     * 0: ALL, 1: NONE, 2: TRACE, 3: DEBUG, 4: INFO, 5: WARN, 6: ERROR, 7: FATAL
    or use the android.util.Log constants
    Default is <b>0</b>.
     * @returns  The current <b>C8oSettings</b>, for chaining.
    */
    setLogLevelLocal(logLevelLocal: C8oLogLevel): C8oSettings;

    /**
     * setLogC8o
     * @param  undefined
     * @return  undefined
     */
    setLogC8o(logC8o: boolean): C8oSettings;

    /**
     * setLogOnFail
     * @param  undefined
     * @return  undefined
     */
    setLogOnFail(logOnFail: (exception: Error, parameters: Object) => void): C8oSettings;

    /**
     * Specify the default FullSync database name. Must match a Convertigo Server
     * FullSync connector name
     * @param  : string
     * @returns  The current <b>C8oSettings</b>, for chaining.
     */
    setDefaultDatabaseName(defaultDatabaseName: string): C8oSettings;

    /**
     * setAuthenticationCookieValue
     * @param  undefined
     * @return  undefined
     */
    setAuthenticationCookieValue(authenticationCookieValue: string): C8oSettings;

    /**
     * setFullSyncServerUrl
     * @param  undefined
     * @return  undefined
     */
    setFullSyncServerUrl(fullSyncServerUrl: string): C8oSettings;

    /**
     * setFullSyncUsername
     * @param  undefined
     * @return  undefined
     */
    setFullSyncUsername(fullSyncUsername: string): C8oSettings;

    /**
     * setFullSyncPassword
     * @param  undefined
     * @return  undefined
     */
    setFullSyncPassword(fullSyncPassword: string): C8oSettings;

    /**
     * setFullSyncLocalSuffix
     * @param  undefined
     * @return  undefined
     */
    setFullSyncLocalSuffix(fullSyncLocalSuffix: string): C8oSettings;

    /**
     * Set if c8o calls variables are encrypted or not
     * @param  undefined
     * @returns  The current <b>C8oSettings</b>, for chaining.
     */
    setUseEncryption(useEncryption: boolean): C8oSettings;

    /**
     * Set if c8o calls trust all certificates or not
     * @param  undefined
     * @returns  The current <b>C8oSettings</b>, for chaining.
     */
    setTrustAllCertificates(trustAllCertificates: boolean): C8oSettings
}