import {Car} from "./interface";
// import vecle = require("./interface") 

class Mercedes extends Car {
    moreDetails(): string {
        return "---------"
    }
}

var obj = new Mercedes("Mercedes", "v12")
console.log(obj.moreDetails());

