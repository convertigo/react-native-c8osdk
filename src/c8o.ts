import {C8oSettings} from "./c8oSettings";
import {C8oPromise} from "./c8oPromise";
import { Platform, NativeModules, NativeEventEmitter } from "react-native";
import { C8oLogger } from "./c8oLogger";
import * as uuidv4 from "uuidv4";
import * as EvtEMT from "eventemitter3";

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
    public log: C8oLogger;
    public subscription : Object;
    public subscriptionLive: Object;
    private ios: Boolean;
    private internEmitter;
    
    /**
     * Use it with "fs://" request as parameter to enable the live request feature.<br/>
     * Must be followed by a string parameter, the 'liveid' that can be use to cancel the live
     * request using c8o.cancelLive(liveid) method.<br/>
     * A live request automatically recall the then or thenUI handler when the database changed.
     */
    public static FS_LIVE: string = "__live";

    constructor() {
        this.log = new C8oLogger();
        this.subscription = {};
        this.subscriptionLive = {};
        this.ios = Platform.OS === 'ios';
        if(this.ios){
            this.internEmitter = new EvtEMT();
        }
    }

    /**
     * This method allow you to init your C8o Object, passing it an endpoint and a C8oSettings object
     * @param endpoint string The endpoint
     * @param c8oSettings C8oSettings, the settings for this c8o Object
     * 
     * @returns Promise<any>
     */
    public init(endpoint: string, c8oSettings?: C8oSettings): Promise<any> {
        return new Promise((resolve)=>{
            C8oR.init(endpoint, c8oSettings)
            .then(()=>{
                if(this.ios){
                    this.subscription["ios"] = this._c8oManagerEmitter.addListener('ios',(eventIos)=>{
                        this.log.debug("debug: " + JSON.stringify(eventIos));
                        this.internEmitter.emit(eventIos['name'], eventIos['value']);
                    });
                }
                else{
                    resolve(true)
                }
            })
        });
    }

    /**
     * Makes a c8o call with c8o requestable out of parameters, expecting a JSON response through a promise.<br/>
     *
     * @param requestable - Contains the Convertigo Sequence or Transaction targeted  (Syntax: "<project>.<sequence>" or "<project>.<connector>.<transaction>")
     * @param parameters: Object - Contains c8o variables as key/value pair in the Map
     * @returns Promise<any>
     */
    public callJson(requestable: string, parameters: any): C8oPromise<any> {
        // Declare a new C8oPromise
        const promise: C8oPromise<any> = new C8oPromise<any>(this);
        // Check if the call has to been autocanceled
        const autoCancel = !parameters["continuous"] && !parameters["__live"];
        // Check if the call is LIVE
        const live = parameters[C8o["FS_LIVE"]] != undefined;
        // Using a uniqueID in order to retrive any call's suscribtion and cancel it...
        let uniqueID = null;
        // if this request is live...
        if(parameters[C8o["FS_LIVE"]] != undefined){
            // Use the FS_LIVE id 
            uniqueID = parameters[C8o["FS_LIVE"]];
        }
        else{
            // generate an unique id 
            uniqueID = "" + uuidv4();
        }
        // Do the call 
        C8oR.callJson(requestable, parameters, uniqueID).then((response)=>{
            if(autoCancel){
                if(this.ios){
                    this.internEmitter.removeListener(uniqueID);
                }
                else{
                    this.subscription[uniqueID].remove();
                }
                delete this.subscription[uniqueID];
            }
            // resolve the response on the c8oPromise
            promise.onResponse(response, 'progress-'+ uniqueID);
        })
        .catch((err)=>{
            if(autoCancel){
                if(this.ios){
                    this.internEmitter.removeListener(uniqueID);
                }
                else{
                    this.subscription[uniqueID].remove();
                }
                delete this.subscription[uniqueID];
            }
            // reject the error on the c8oPromise
            promise.onFailure(err, 'progress-'+uniqueID);
        })
        // Add a new Listener  for the progress
        if(this.ios){
            this.subscription['progress-'+uniqueID] = true;
            this.internEmitter.on('progress-'+uniqueID, (resp)=>{
                promise.onProgress(resp);
            });
        }
        else {
            this.subscription[uniqueID] = this._c8oManagerEmitter.addListener('progress-'+uniqueID,(progressI)=> {
                promise.onProgress(progressI);
            });
        }
        if(live){
            if(this.ios){
                this.subscriptionLive['live-'+uniqueID] = true;
                this.internEmitter.on('live-'+uniqueID, (resp)=>{
                    promise.onResponse(resp, {"__fromLive" :"live-" +uniqueID});
                });
            }
            else{
                this.subscriptionLive[uniqueID] = this._c8oManagerEmitter.addListener('live-'+uniqueID,(progressI)=> {
                    promise.onResponse(progressI, {"__fromLive" :"live-" +uniqueID});
                });
            }
        }
        return promise;
    }

    /**
     * Allows you to cancel a live request and remove the subscription
     * @param id the id of the live request to cancel
     * @returns Promise<any>
     */
    public cancelLive(id: string): Promise<any>{
        if(this.ios){
            this.internEmitter.removeListener("live-" + id);
            delete this.subscriptionLive["live-" + id];
        }
        else{
            if(this.subscriptionLive["live-"+id] != null){
                this.subscription["live-"+id].remove();
                delete this.subscription["live-"+id];
            }
        }
        return C8oR.cancelLive(id);
    }

    /**
     * Allow you to remove all subscription in this instance. Must be call from componentWillUnmount method
     */
    public removeAllSubscriptions(){
        if(this.ios){
            for(let sub in this.subscription){
                this.internEmitter.removeListener(sub);
                delete this.subscription[sub];
            }
            for(let sub in this.subscriptionLive){
                this.internEmitter.removeListener(sub);
                delete this.subscriptionLive[sub];
            }
            this.subscription['ios'].remove();
            delete this.subscription['ios'];
        }
        else{
            for(let sub in this.subscription){
                this.subscription[sub].remove();
                delete this.subscription[sub];
            }
            for(let sub in this.subscriptionLive){
                this.subscriptionLive[sub].remove();
                delete this.subscriptionLive[sub];
            }
        }
    }

    /**
     * Allow tou to remove a specific subscription in this instance.
     * @param id The id associated to the subscription
     */
    public removeSpecificSubscriptions(id:string){
        if(this.ios){
            this.internEmitter.removeListener(id);
            delete this.subscription[id];
        }
        else{
            this.subscription[id].remove();
            delete this.subscription[id];
        }
    }
}
