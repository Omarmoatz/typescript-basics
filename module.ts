import {Car} from "./interface";
// import vecle = require("./interface") 

class Mercedes extends Car {
    moreDetails(): string {
        return "---------"
    }

    calcSpeed(acceleration:number, volume:number, speed?:number): number{
        if (speed != undefined)
            return speed
        else if(speed == undefined && acceleration <= 80 ){
            console.log("acceleration <= 80");
            return (acceleration + 50) * volume
        }
        else
            return acceleration * volume
    }
}

var obj = new Mercedes("Mercedes", "v12")
console.log(obj.moreDetails());
console.log(obj.calcSpeed(50, 20));

