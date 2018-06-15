import {C8oSettings} from "./c8oSettings";
import {C8oPromise} from "./c8oPromise";
import { Platform, NativeModules, NativeEventEmitter } from "react-native";

var C8oR = NativeModules.C8oReact;
const { C8oReact } = NativeModules;

/**
 * Allows to send requests to a Convertigo Server (or Studio), these requests are called c8o calls.<br/>
 * C8o calls are done thanks to a HTTP request or a CouchbaseLite usage.<br/>
 * An instance of C8o is connected to only one Convertigo and can't change it.<br/>
 * To use it, you have to first initialize the C8o instance with the Convertigo endpoint, then use call methods with Convertigo variables as parameter.
 */
export class C8o {
    private _c8oManagerEmitter = new NativeEventEmitter(C8oReact);
    public progress: C8oPromise<any> = new C8oPromise<any>(this);
    constructor() {}

    /**
     * This method allow you to init your C8o Object, passing it an endpoint and a C8oSettings object
     * @param endpoint string The endpoint
     * @param c8oSettings C8oSettings, the settings for this c8o Object
     */
    public init(endpoint: string, c8oSettings?: C8oSettings): Promise<any> {
        this._c8oManagerEmitter.addListener('progress',(progressI)=> {
            this.progress.onProgress(progressI);
        });
        return C8oR.init(endpoint, c8oSettings);
    }

    /**
     * Makes a c8o call with c8o requestable out of parameters, expecting a JSON response through a promise.<br/>
     *
     * @param requestable - Contains the Convertigo Sequence or Transaction targeted  (Syntax: "<project>.<sequence>" or "<project>.<connector>.<transaction>")
     * @param parameters: Object - Contains c8o variables as key/value pair in the Map
     * @return A promise that can deliver the JSON response
     */
    public callJson(requestable: string, parameters: any): Promise<any> {
        return C8oR.callJson(requestable, parameters);
    }
    
}
