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
