import {C8oSettings} from "./c8oSettings";
import { Platform, NativeModules, NativeEventEmitter } from "react-native";

var C8oR = NativeModules.C8oReact;
const { C8oReact } = NativeModules;

/**
 * Allow you to make a log both locally and remotlly on Convertigo server, logs can be paramettered from C8oSettings class
 */
export class C8oLogger {
    constructor() {}

    /**
     * Log level fatal
     * Allow you to make a log both locally and remotlly on Convertigo server, logs can be paramettered from C8oSettings class
     * @param message The message to log
     * @returns Promise<any>
     */
    public fatal(message: string): Promise<any> {
        return C8oR.log(message, 0);
    }
     /**
     * Log level error
     * Allow you to make a log both locally and remotlly on Convertigo server, logs can be paramettered from C8oSettings class
     * @param message The message to log
     * @returns Promise<any>
     */
    public error(message: string): Promise<any> {
        return C8oR.log(message, 1);
    }
     /**
     * Log level warn
     * Allow you to make a log both locally and remotlly on Convertigo server, logs can be paramettered from C8oSettings class
     * @param message The message to log
     * @returns Promise<any>
     */
    public warn(message: string): Promise<any> {
        return C8oR.log(message, 2);
    }

    /**
     * Log level info
     * Allow you to make a log both locally and remotlly on Convertigo server, logs can be paramettered from C8oSettings class
     * @param message The message to log
     * @returns Promise<any>
     */
    public info(message: string): Promise<any> {
        return C8oR.log(message, 3);
    }

    /**
     * Log level debug
     * Allow you to make a log both locally and remotlly on Convertigo server, logs can be paramettered from C8oSettings class
     * @param message The message to log
     * @returns Promise<any>
     */
    public debug(message: string): Promise<any> {
        return C8oR.log(message, 4);
    }

    /**
     * Log level debug
     * Allow you to make a log both locally and remotlly on Convertigo server, logs can be paramettered from C8oSettings class
     * @param message The message to log
     * @returns Promise<any>
     */
    public trace(message: string): Promise<any> {
        return C8oR.log(message, 5);
    }
    
}
