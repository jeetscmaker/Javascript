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
    age() {
        let date = new Date();
        return date.getFullYear() - this.year;
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

// --------- Class Methods---------
class ClassName {
    constructor() { }
    method_1() { }
    method_2() { }
    method_3() { }
}
//---------------------------------
let myCar = new Car("Ford", 2014);
console.log("My car is " + myCar.age() + " years old.");

class Student {
    constructor(id) {
        this.roll = id;
    }
}

let s = new Student(15);
console.log(`The roll number is ${s.roll}`);

/*
Class Inheritance
-----------------
To create a class inheritance, use the extends keyword.
A class created with a class inheritance inherits all the methods from another class.
Create a class named "Model" which will inherit the methods from the "Car" class:
*/
class CarW {
    constructor(brand) {
        this.carname = brand;
    }
    present() {
        return 'I have a ' + this.carname;
    }
}
class Model extends CarW {
    constructor(brand, mod) {
        super(brand);
        this.model = mod;
    }
    show() {
        return this.present() + ', it is a ' + this.model;
    }
}

let heyCar = new Model("Ford", "Mustang");
console.table(heyCar);

/*
Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.

Getters and Setters
--------------------
Classes also allows you to use getters and setters.
It can be smart to use getters and setters for your properties, especially if you want to do something 
special with the value before returning them, or before you set them.

To add getters and setters in the class, use the get and set keywords.
Example

Create a getter and a setter for the "carname" property:
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  get cnam() {
    return this.carname;
  }
  set cnam(x) {
    this.carname = x;
  }
}

let myCar = new Car("Ford");

let x = myCar.cnam;

Note: even if the getter is a method, you do not use parentheses when you want to get the property value.

The name of the getter/setter method cannot be the same as the name of the property, in this case carname.

Many programmers use an underscore character _ before the property name to separate the getter/setter from the actual property:
Example

You can use the underscore character to separate the getter/setter from the actual property:
class Car {
  constructor(brand) {
    this._carname = brand;
  }
  get carname() {
    return this._carname;
  }
  set carname(x) {
    this._carname = x;
  }
}

let myCar = new Car("Ford");

document.getElementById("demo").innerHTML = myCar.carname;

To use a setter, use the same syntax as when you set a property value, without parentheses:
Example

Use a setter to change the carname to "Volvo":
class Car {
  constructor(brand) {
    this._carname = brand;
  }
  get carname() {
    return this._carname;
  }
  set carname(x) {
    this._carname = x;
  }
}

let myCar = new Car("Ford");
myCar.carname = "Volvo";
x = myCar.carname;

Hoisting

Unlike functions, and other JavaScript declarations, class declarations are not hoisted.

That means that you must declare a class before you can use it:
Example
//You cannot use the class yet.
//myCar = new Car("Ford")
//This would raise an error.

class Car {
  constructor(brand) {
    this.carname = brand;
  }
}

//Now you can use the class:
let myCar = new Car("Ford")

Note: For other declarations, like functions, you will NOT get an error when you try to use it before 
it is declared, because the default behavior of JavaScript declarations are hoisting 
(moving the declaration to the top).
*/
