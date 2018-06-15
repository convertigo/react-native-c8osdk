import { C8o } from "./c8o";
export declare class C8oPromise<T> {
    private c8oProgress;
    private nextPromise;
    private c8o;
    constructor(c8o: C8o);
    notifications(c8oOnProgress: (C8oProgress: any) => C8oPromise<T>): any;
    onProgress(progress: any): void;
}
