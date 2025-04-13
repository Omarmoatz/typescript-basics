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
exports.Car = void 0;
var person = {
    name: "omar",
    age: 23,
    display: function () {
        return "my name is " + person.name + ", my age is " + person.age;
    }
};
console.log(person.display());
var Car = /** @class */ (function () {
    function Car(brand, engine) {
        this.brand = brand;
        this.engine = engine;
    }
    Car.prototype.setBrand = function (brand) {
        return this.brand = brand;
    };
    Car.prototype.setEngine = function (engine) {
        return this.engine = engine;
    };
    Car.prototype.getBrand = function () {
        return this.brand;
    };
    Car.prototype.getEngine = function () {
        return this.engine;
    };
    Car.prototype.details = function () {
        return "the brand is " + this.getBrand() + " and engine is " + this.getEngine();
    };
    return Car;
}());
exports.Car = Car;
var Bmw = /** @class */ (function (_super) {
    __extends(Bmw, _super);
    function Bmw() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bmw.prototype.moreDetails = function () {
        return this.details() + " more details---------";
    };
    return Bmw;
}(Car));
var obj = new Bmw("BMW", "v12");
console.log(obj.moreDetails());
