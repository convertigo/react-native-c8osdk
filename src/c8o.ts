//import {C8oSettings} from "./c8oSettings";
//import { Platform, NativeModules } from "react-native";

import {C8oSettings} from "c8osdkjscore/src/c8o/c8oSettings";

var C8oR;// = NativeModules.C8oReact;

export class C8o {

    constructor() {}

    public init(endpoint: string, c8oSettings?: C8oSettings): Promise<any> {
        return C8oR.init(endpoint, c8oSettings);
    }

    public callJson(requestable: string, parameters: any): Promise<any> {
        return C8oR.callJson(requestable, parameters);
    }
}
