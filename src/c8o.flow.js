/**
 * Flowtype definitions for c
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.2.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare var C8oR: ;
declare var undefined: ;
/**
 * Allows to send requests to a Convertigo Server (or Studio), these requests are called c8o calls.<br/>
 * C8o calls are done thanks to a HTTP request or a CouchbaseLite usage.<br/>
An instance of C8o is connected to only one Convertigo and can't change it.<br/>
To use it, you have to first initialize the C8o instance with the Convertigo endpoint, then use call methods with Convertigo variables as parameter.
*/
declare export class C8o {
    log: C8oLogger;
    suscription: Object;
    suscriptionLive: Object;

    /**
     * Use it with "fs://" request as parameter to enable the live request feature.<br/>
     * Must be followed by a string parameter, the 'liveid' that can be use to cancel the live
    request using c8o.cancelLive(liveid) method.<br/>
    A live request automatically recall the then or thenUI handler when the database changed.
    */
    FS_LIVE: string;
    constructor(): this;

    /**
     * This method allow you to init your C8o Object, passing it an endpoint and a C8oSettings object
     * @param  string The endpoint
     * @param  C8oSettings, the settings for this c8o Object
     * @returns  Promise<any>
     */
    init(endpoint: string, c8oSettings?: C8oSettings): Promise<any>;

    /**
     * Makes a c8o call with c8o requestable out of parameters, expecting a JSON response through a promise.<br/>
     * @param  - Contains the Convertigo Sequence or Transaction targeted  (Syntax: "<project>.<sequence>" or "<project>.<connector>.<transaction>")
     * @param  : Object - Contains c8o variables as key/value pair in the Map
     * @returns  Promise<any>
     */
    callJson(requestable: string, parameters: any): C8oPromise<any >
}