/*
What is this?

The JavaScript this keyword refers to the object it belongs to.
It has different values depending on where it is used:

    In a method, this refers to the owner object.
    Alone, this refers to the global object.
    In a function, this refers to the global object.
    In a function, in strict mode, this is undefined.
    In an event, this refers to the element that received the event.
    Methods like call(), and apply() can refer this to any object.

*/
var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
  // in the above method of person object, this refers to 'person' object itself.
  //When used alone, the owner is the Global object, so this refers to the Global object.

//In a browser window the Global object is [object Window].
//In strict mode, when used alone, this also refers to the Global object [object Window].
//In a JavaScript function, the owner of the function is the default binding for this.
//So, in a function, this refers to the Global object [object Window].
//JavaScript strict mode does not allow default binding.
//So, when used in a function, in strict mode, this is undefined.

/*
Explicit Function Binding

The call() and apply() methods are predefined JavaScript methods.
They can both be used to call an object method with another object as argument.
In the example below, when calling person1.fullName with person2 as argument, this will refer to person2, 
even if it is a method of person1:
*/
var person1 = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
var person2 = {
  firstName:"John",
  lastName: "Doe",
}
person1.fullName.call(person2);  // Will return "John Doe" 

/*
The handling of this is also different in arrow functions compared to regular functions.

In short, with arrow functions there are no binding of this.

In regular functions the this keyword represented the object that called the function, which could be the window, the document, a button or whatever.

With arrow functions the this keyword always represents the object that defined the arrow function.
*/
