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

//The search() method searches a string for a specified value and returns the position of the match
console.log(`The search of 'locate' is ${str.search("locate")}`);

/* The two methods, indexOf() and search(), are equal?
They accept the same arguments (parameters), and return the same value?
The two methods are NOT equal. These are the differences:
The search() method cannot take a second start position argument.
The indexOf() method cannot take powerful search values (regular expressions).
*/

/*-----------String Extraction Methods----------------*/
/*There are 3 methods for extracting a part of a string:
    slice(start, end)   
    substring(start, end)
    substr(start, length)
*/
/*
slice() extracts a part of a string and returns the extracted part in a new string.
The method takes 2 parameters: the start position, and the end position (end not included).
This example slices out a portion of a string from position 7 to position 12 (13-1):
*/
var str = "Apple, Banana, Kiwi";
console.log("The sliced part is:" + str.slice(7, 13));
//If a parameter is negative, the position is counted from the end of the string.
//This example slices out a portion of a string from position -12 to position -6:
console.log("The sliced part is:" + str.slice(-12, -6));