// Note the difference between (x==y) and (x===y).
// Comparing two JavaScript objects will always return false.
var x = "John";             
var y = new String("John");
console.log("x == y is: " + (x == y)); // returns true because the values of x and y are same.
console.log("x === y is: " + (x === y)); // returns false because the type of x and y are different.

var x = new String("John");             
var y = new String("John");
console.log("x == y is: " + (x == y)); // returns false because x and y are totally different objects.

/*----String Methods-------*/
//The length property returns the length of a string:
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(`The length of ${txt} is ${txt.length}`);

//The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string
var str = "Please locate where 'locate' occurs!";
console.log(`The first occurrence of 'locate' is ${str.indexOf('locate')}`);

//The lastIndexOf() method returns the index of the last occurrence of a specified text in a string
console.log(`The last occurrence of 'locate' is ${str.lastIndexOf('locate')}`);

//Both indexOf(), and lastIndexOf() return -1 if the text is not found.
console.log(`The last occurrence of 'John' is ${str.lastIndexOf('John')}`);
console.log(`The first occurrence of 'John' is ${str.indexOf('John')}`);