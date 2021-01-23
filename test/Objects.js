var person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
console.log("Person name: " + person.firstName + " " + person.lastName);
console.log("Type of firstname: " + typeof person.firstName);
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
console.log(typeof { name: 'John', age: 34 });
console.log(typeof [1, 2, 3, 4]);
console.log(typeof null);
console.log(typeof function myFunc() { });

/*
Do Not Declare Strings, Numbers, and Booleans as Objects!
When a JavaScript variable is declared with the keyword "new", the variable is created as an object:

var x = new String();        // Declares x as a String object
var y = new Number();        // Declares y as a Number object
var z = new Boolean();       // Declares z as a Boolean object
Avoid String, Number, and Boolean objects. They complicate your code and slow down execution speed.
*/

// --------- JavaScript Object Prototypes----------------
/* All JavaScript objects inherit properties and methods from a prototype.
All JavaScript objects inherit properties and methods from a prototype:

    Date objects inherit from Date.prototype
    Array objects inherit from Array.prototype
    Person objects inherit from Person.prototype

The Object.prototype is on the top of the prototype inheritance chain:

Date objects, Array objects, and Person objects inherit from Object.prototype.
Sometimes you want to add new properties (or methods) to all existing objects of a given type.

Sometimes you want to add new properties (or methods) to an object constructor.
The JavaScript prototype property allows you to add new properties to object constructors.
*/
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}

Person.prototype.nationality = "English";

//The JavaScript prototype property also allows you to add new methods to objects constructors:
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}

Person.prototype.name = function () {
    return this.firstName + " " + this.lastName;
};

// --------- ES5 New Object Methods ----------
// Adding or changing an object property
Object.defineProperty(object, property, descriptor)

// Adding or changing many object properties
Object.defineProperties(object, descriptors)

// Accessing Properties
Object.getOwnPropertyDescriptor(object, property)

// Returns all properties as an array
Object.getOwnPropertyNames(object)

// Returns enumerable properties as an array
Object.keys(object)

// Accessing the prototype
Object.getPrototypeOf(object)

// Prevents adding properties to an object
Object.preventExtensions(object)

// Returns true if properties can be added to an object
Object.isExtensible(object)

// Prevents changes of object properties (not values)
Object.seal(object)

// Returns true if object is sealed
Object.isSealed(object)

// Prevents any changes to an object
Object.freeze(object)

// Returns true if object is frozen
Object.isFrozen(object)

var person = {
    firstName: "John",
    lastName: "Doe",
    language: "EN"
};

// Change a property
Object.defineProperty(person, "language", { value: "NO" }); 

//This example makes language read-only:
Object.defineProperty(person, "language", {writable:false});

//This example makes language not enumerable:
Object.defineProperty(person, "language", {enumerable:false});

Object.getOwnPropertyNames(person);  // Returns an array of properties
Object.keys(person);  // Returns an array of enumerable properties
Object.defineProperty(person, "year", {value:"2008"}); // adding a property

//The Object.defineProperty() method can also be used to add Getters and Setters:
//Create an object
var person = {firstName:"John", lastName:"Doe"};

// Define a getter
Object.defineProperty(person, "fullName", {
  get : function () {return this.firstName + " " + this.lastName;}
});