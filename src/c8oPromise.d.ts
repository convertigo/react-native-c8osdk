import { C8o } from "react-native-c8osdk/src/c8o";
import "rxjs";
import "rxjs-compat";
export declare class C8oPromise<T> {
    private c8o;
    private c8oResponse;
    private c8oProgress;
    private c8oFail;
    private nextPromise;
    private lastResponse;
    private lastFailure;
    private lastParameters;
    constructor(c8o: C8o);
    async(): Promise<any>;
    then(c8oOnResponse: (response: T, parameters: Object) => C8oPromise<T>): any;
    progress(c8oOnProgress: (C8oProgress: any) => C8oPromise<T>): any;
    fail(c8oOnFail: (error: Error, parameters: Object) => C8oPromise<T>): any;
    private _onResponse;
    onResponse(response: T, parameters: Object): void;
    onProgress(progress: any): void;
    onFailure(error: Error, parameters: Object): void;
}
