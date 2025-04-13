"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var interface_1 = require("./interface");
// import vecle = require("./interface") 
var Mercedes = /** @class */ (function (_super) {
    __extends(Mercedes, _super);
    function Mercedes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mercedes.prototype.moreDetails = function () {
        return "---------";
    };
    Mercedes.prototype.calcSpeed = function (acceleration, volume, speed) {
        if (speed != undefined)
            return speed;
        else if (speed == undefined && acceleration <= 80) {
            console.log("acceleration <= 80");
            return (acceleration + 50) * volume;
        }
        else
            return acceleration * volume;
    };
    return Mercedes;
}(interface_1.Car));
var obj = new Mercedes("Mercedes", "v12");
console.log(obj.moreDetails());
console.log(obj.calcSpeed(50, 20));
