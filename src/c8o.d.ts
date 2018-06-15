import { C8oSettings } from "./c8oSettings";
import { C8oPromise } from "./c8oPromise";
export declare class C8o {
    private _c8oManagerEmitter;
    progress: C8oPromise<any>;
    constructor();
    init(endpoint: string, c8oSettings?: C8oSettings): Promise<any>;
    callJson(requestable: string, parameters: any): Promise<any>;
}
