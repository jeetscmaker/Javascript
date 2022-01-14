console.log("PI is " + Math.PI);

//Math.round(x) returns the value of x rounded to its nearest integer:
Math.round(4.7);    // returns 5
Math.round(4.4);    // returns 4

//Math.pow(x, y) returns the value of x to the power of y:
console.log(Math.pow(8, 2));  // returns 64

//Math.sqrt(x) returns the square root of x:
Math.sqrt(64);      // returns 8

//Math.abs(x) returns the absolute (positive) value of x:
Math.abs(-4.7);     // returns 4.7

//Math.ceil(x) returns the value of x rounded up to its nearest integer:
Math.ceil(4.4);     // returns 5

//Math.floor(x) returns the value of x rounded down to its nearest integer:
Math.floor(4.7);    // returns 4

//Math.sin(x) returns the sine (a value between -1 and 1) of the angle x (given in radians).

/*If you want to use degrees instead of radians, you have to convert degrees to radians:
Angle in radians = Angle in degrees x PI / 180.
*/
Math.sin(90 * Math.PI / 180);     // returns 1 (the sine of 90 degrees)

/*Math.cos(x) returns the cosine (a value between -1 and 1) of the angle x (given in radians).
If you want to use degrees instead of radians, you have to convert degrees to radians:
Angle in radians = Angle in degrees x PI / 180.
*/
Math.cos(0 * Math.PI / 180);     // returns 1 (the cos of 0 degrees)

//Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments:
Math.min(0, 150, 30, 20, -8, -200);  // returns -200
Math.max(0, 150, 30, 20, -8, -200);  // returns 150

//Math.random() returns a random number between 0 (inclusive), and 1 (exclusive):
console.log("Random value " + Math.random());    // returns a random number

//JavaScript provides 8 mathematical constants that can be accessed with the Math object:
Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E

/*---------BOOLEANS----------*/
/*Very often, in programming, you will need a data type that can only have one of two values, like

YES / NO
ON / OFF
TRUE / FALSE
For this, JavaScript has a Boolean data type. It can only take the values true or false.*/
//Everything With a "Value" is True
100

3.14

-15

"Hello"

"false"

7 + 1 + 3.14

//Everything Without a "Value" is False
//The Boolean value of 0 (zero) and -0(-zero) is false
//The Boolean value of "" (empty string) is false.
//The Boolean value of undefined is false.
//The Boolean value of null is false.
//The Boolean value of NaN is false.

// Math.trunc(x) returns the integer part of x:
Math.trunc(4.9); // returns 4.

// Math.sign(x) returns if x is negative, null or positive:
Math.sign(-4.5); // returns -1
Math.sign(9.5); // returns +1
Math.sign(0); // returns 0