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
//substring() is similar to slice().
//The difference is that substring() cannot accept negative indexes.
//If you omit the second parameter, substring() will slice out the rest of the string.
//substr() is similar to slice().
//The difference is that the second parameter specifies the length of the extracted part.
//If you omit the second parameter, substr() will slice out the rest of the string.
//If the first parameter is negative, the position counts from the end of the string.
console.log(str.substring(0,5));
console.log(str.substr(0,6));
console.log(str.substr(-7));

//The replace() method replaces a specified value with another value in a string.
//The replace() method does not change the string it is called on. It returns a new string.
//By default, the replace() method replaces only the first match and is case sensitive.
//To replace case insensitive, use a regular expression with an /i flag (insensitive).
//Note that regular expressions are written without quotes.
//To replace all matches, use a regular expression with a /g flag (global match).

str = "Please visit Microsoft!";
console.log(`The replaced string is: ${str.replace("Microsoft", "W3Schools")}`);

str = "Please visit Microsoft and Microsoft!";
console.log(`The replaced string is: ${str.replace(/MICROSOFT/i, "W3Schools")}`);
console.log(`The replaced string with all matches is: ${str.replace(/Microsoft/g, "W3Schools")}`);

//A string is converted to upper case with toUpperCase().
//A string is converted to upper case with toLowerCase().
//concat() joins two or more strings and it can be used instead of + operator..
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.concat(" some extra .."));

//The trim() method removes whitespace from both sides of a string.
//The trim() method is not supported in Internet Explorer 8 or lower.
str = "       Hello World!        ";
console.log("The trimmed str is-- " + str.trim());

//ECMAScript 2017 added two String methods: padStart and padEnd to support padding at the beginning and at the end of a string.

str = "5";
str = str.padStart(4,0); // result is 0005
str = str.padEnd(4,0);   // result is 5000

//The charAt() method returns the character at a specified index (position) in a string.
str = "HELLO WORLD";
str.charAt(0);            // returns H

//The charCodeAt() method returns the unicode of the character at a specified index in a string:
//The method returns a UTF-16 code (an integer between 0 and 65535).
str = "HELLO WORLD";
str.charCodeAt(0);         // returns 72

//A string can be converted to an array with the split() method.
var txt = "a,b,c,d,e";   // String
txt.split(",");          // Split on commas
txt.split(" ");          // Split on spaces
txt.split("|");          // Split on pipe
//If the separator is omitted, the returned array will contain the whole string in index [0].
//If the separator is "", the returned array will be an array of single characters.
