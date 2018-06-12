// should be imported this way:
// import * as c8o from 'react-native-c8o-sdk';
export declare class C8o{
    constructor();
    callJson(requestable : string, parameters: any): Promise<Object>;
    init(endpoint : string, settings: any): Promise<Object>;
}
