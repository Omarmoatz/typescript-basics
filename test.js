var mss = "Hello World";
var person = {
    firstName: "omar",
    lastName: "moataz",
    sayHi: function () {
        return "Hello " + person.firstName + " " + person.lastName;
    }
};
console.log(person);
console.log(person.sayHi());
