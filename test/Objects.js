var person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
console.log("Person name: " + person.firstName + " " + person.lastName);
console.log("Type of firstname: " + typeof person.firstName );
console.log("Type of age: " + typeof person.age);

var car; // undefined type of variable car.
console.log("Type of car is: " + typeof car);
console.log("value of car is: " + car);
console.log("type of null is: " + typeof null); // returns 'object' which is ambiguous.

//undefined and null are equal in value but different in type:

console.log(typeof undefined);           // undefined
console.log(typeof null);                // object

console.log(null === undefined);         // false
console.log(null == undefined);          // true
console.log("type of true/false: " + typeof true);          // boolean

/*
Complex Data:
The typeof operator can return one of two complex types:function, object.
The typeof operator returns "object" for objects, arrays, and null.
The typeof operator does not return "object" for functions.
*/
console.log("---Type of complex objects--- ")
console.log(typeof {name:'John', age:34} );
console.log(typeof [1,2,3,4]);
console.log(typeof null);
console.log(typeof function myFunc(){} );