var mss : string = "Hello World";
// console.log(mss);

interface IPerson{
    firstName:string,
    lastName:string,
    sayHi: ()=>string;
}

var person : IPerson = {
    firstName: "omar",
    lastName:"moataz",
    sayHi: ()=> {
        return "Hello " + person.firstName + " " + person.lastName;
    }
}

// console.log(person)
// console.log(person.sayHi())


class Human {
    name:string
    age:number

    constructor(age:number){
        this.age = age
    }

    setName(name:string){
        this.name = name
    }

    display():void{
        console.log("hello world");
        
    }
}








// class





