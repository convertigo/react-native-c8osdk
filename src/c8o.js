"use strict";
import {C8oSettings} from "./c8oSettings";
import { Platform, NativeModules } from "react-native";
exports.__esModule = true;
var C8oR = NativeModules.C8oReact;
var C8o = /** @class */ (function () {
    function C8o() {
    }
    C8o.prototype.init = function (endpoint, c8oSettings) {
        return C8oR.init(endpoint, c8oSettings);
    };
    C8o.prototype.callJson = function (requestable, parameters) {
        return C8oR.callJson(requestable, parameters);
    };
    return C8o;
}());
exports.C8o = C8o;