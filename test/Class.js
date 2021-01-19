/*
ECMAScript 2015, also known as ES6, introduced JavaScript Classes.
JavaScript Classes are templates for JavaScript Objects.

Use the keyword 'class' to create a class.
Always add a method named constructor():
*/
//The example below creates a class named "Car".The class has two initial properties: "name" and "year".
class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

// A Javascript class is NOT an object. It is a template for JS objects.
// And When you have a class, you can use the class to create objects.
// The constructor method is called automatically when a new object is created.
let myCar1 = new Car("Ford", 2014);
let myCar2 = new Car("Audi", 2019);

console.table(myCar1);
console.table(myCar2);

/*
The constructor method is a special method:

    It has to have the exact name "constructor"
    It is executed automatically when a new object is created
    It is used to initialize object properties

If you do not define a constructor method, JavaScript will add an empty constructor method. 
*/