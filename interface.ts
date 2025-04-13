interface IPerson{
    name:string
    age:number

    display:()=>string
}

var person: IPerson = {
    name:"omar",
    age:23,

    display:() => {
        return "my name is " + person.name + ", my age is " + person.age 
    }
}

console.log(person.display());



export class Car {
    brand:string
    engine:string

    constructor(brand:string, engine:string){
        this.brand = brand
        this.engine = engine
    }

    setBrand(brand:string): string{
        return this.brand = brand
    }

    setEngine(engine:string): string{
        return this.engine = engine
    }

    getBrand():string{
        return this.brand
    }

    getEngine():string{
        return this.engine
    }

    details():string{
        return "the brand is " + this.getBrand() + " and engine is " + this.getEngine()
    }
}


class Bmw extends Car {
    moreDetails():string{
        return this.details() + " more details---------" 
    }
}

var obj = new Bmw("BMW", "v12")
console.log(obj.moreDetails());
