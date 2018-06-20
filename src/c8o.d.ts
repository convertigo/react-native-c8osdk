import { C8oSettings } from "./c8oSettings";
import { C8oPromise } from "./c8oPromise";
import { C8oLogger } from "./c8oLogger";
export declare class C8o {
    private _c8oManagerEmitter;
    log: C8oLogger;
    suscriptionA: Object;
    constructor();
    init(endpoint: string, c8oSettings?: C8oSettings): Promise<any>;
    callJson(requestable: string, parameters: any): C8oPromise<any>;
}
