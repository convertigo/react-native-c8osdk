import { C8o } from "./c8o";

export class C8oPromise<T> {
    private c8oProgress: (C8oProgress) => C8oPromise<T>;
    private nextPromise: C8oPromise<T>;
    private c8o: C8o;
    constructor(c8o: C8o) {
        this.c8o = c8o;
    }

    public notifications(c8oOnProgress: (C8oProgress: any) => C8oPromise<T>) {
        if (this.nextPromise != null) {
            return this.nextPromise.notifications(c8oOnProgress);
        } else {
            this.c8oProgress = c8oOnProgress;
            this.nextPromise = new C8oPromise<T>(this.c8o);
            return this.nextPromise;
        }
    }
    public onProgress(progress: any) {
        if (this.c8oProgress != null) {
            this.c8oProgress(progress);
        } else if (this.nextPromise != null) {
            this.nextPromise.onProgress(progress);
        }
    }
}