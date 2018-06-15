export declare class C8oLogLevel {
    static NULL: C8oLogLevel;
    static NONE: C8oLogLevel;
    static TRACE: C8oLogLevel;
    static DEBUG: C8oLogLevel;
    static INFO: C8oLogLevel;
    static WARN: C8oLogLevel;
    static ERROR: C8oLogLevel;
    static FATAL: C8oLogLevel;
    static C8O_LOG_LEVELS: C8oLogLevel[];
    name: string;
    priority: number;
    constructor(name: string, priority: number);
    static getC8oLogLevel(name: string): C8oLogLevel;
}
