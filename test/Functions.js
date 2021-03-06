/*
Function parameters are listed inside the parentheses () in the function definition.
Function arguments are the values received by the function when it is invoked.
Inside the function, the arguments (the parameters) behave as local variables.
*/

var sum = function (a, b) {
    console.log("Inside sum() function...");
    return a + b;
}

function subtract(a, b) {
    console.log("Inside subtract() function...");
    return a - b;
}

console.log(`Type of sum function is: ${typeof sum}`);
console.log(`Type of subtract function is: ${typeof subtract}`);
console.log(`Output of sum function with a=15, b=10 is: ${sum(15, 10)}`);
console.log(`Output of subtract function with a=15, b=10 is: ${subtract(15, 10)}`);

/*
The JavaScript call() Method:
The call() method is a predefined JavaScript method.
It can be used to invoke (call) a method with an owner object as an argument (parameter).
With call(), an object can use a method belonging to another object.
This example calls the fullName method of person, using it on person1:
*/
var person = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
var person1 = {
    firstName: "John",
    lastName: "Doe"
}
var person2 = {
    firstName: "Mary",
    lastName: "Doe"
}
person.fullName.call(person1);  // Will return "John Doe" 

//The call() method can accept arguments:
var person = {
    fullName: function (city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}
var person1 = {
    firstName: "John",
    lastName: "Doe"
}
person.fullName.call(person1, "Oslo", "Norway");
person.fullName.apply(person2);  // Will return "Mary Doe"

/*
The Difference Between call() and apply() is:
The call() method takes arguments separately.
The apply() method takes arguments as an array.
The apply() method is very handy if you want to use an array instead of an argument list.
*/
person.fullName.apply(person1, ["Oslo", "Norway"]);
person.fullName.call(person1, "Oslo", "Norway");

//You can find the largest number (in a list of numbers) using the Math.max() method:
Math.max(1,2,3);  // Will return 3 
//Since JavaScript arrays do not have a max() method, you can apply the Math.max() method instead.
Math.max.apply(null, [1,2,3]); // Will also return 3 

//The first argument (null) does not matter. It is not used in this example.
//These examples will give the same result:
Math.max.apply(Math, [1,2,3]); // Will also return 3 
Math.max.apply(" ", [1,2,3]); // Will also return 3 
Math.max.apply(0, [1,2,3]); // Will also return 3 

//In JavaScript strict mode, if the first argument of the apply() method is not an object, 
//it becomes the owner (object) of the invoked function. In "non-strict" mode, it becomes the global object.