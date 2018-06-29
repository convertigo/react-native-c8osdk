import { Priority } from "./priority";
import { Exception } from "handlebars";

export class C8oLocalCache {
    public static PARAM: string = "__localCache";
    public priority: Priority;
    public ttl: number;
    public enabled: boolean;

    constructor(priority: Priority, ttl: number = -1, enabled: boolean = true) {
        if (priority == null) {
            throw new Exception("Local Cache priority cannot be null");
        }
        this.priority = priority;
        this.ttl = ttl;
        this.enabled = enabled;
    }
}