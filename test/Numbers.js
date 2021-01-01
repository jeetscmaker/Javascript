/*
JavaScript Numbers are Always 64-bit Floating Point

Unlike many other programming languages, JavaScript does not define different types of numbers, like integers, short, long, 
floating-point etc.

JavaScript numbers are always stored as double precision floating point numbers, following the international IEEE 754 standard.

This format stores numbers in 64 bits, where the number (the fraction) is stored in bits 0 to 51, the exponent in bits 52 
to 62, and the sign in bit 63:
Value (aka Fraction/Mantissa) 	Exponent 	        Sign
52 bits (0 - 51)  	            11 bits (52 - 62) 	1 bit (63)
*/
var x = 123e5;    // 12300000
var y = 123e-5;   // 0.00123 

//Integers (numbers without a period or exponent notation) are accurate up to 15 digits.
var x = 999999999999999;   // x will be 999999999999999
var y = 9999999999999999;  // y will be 10000000000000000 

//The maximum number of decimals is 17, but floating point arithmetic is not always 100% accurate:
var x = 0.2 + 0.1;         // x will be 0.30000000000000004 
//To solve the problem above, it helps to multiply and divide:
var x = (0.2 * 10 + 0.1 * 10) / 10;       // x will be 0.3 

// Addition in Javascript numbers:
x = "10";
y = "20";
z = y + x; // it gives the result 2010.
console.log(`The result is ${z}`);
x = 10, y = 20, z = y + x; // it gives the result 30.
console.log(`The result is ${z}`);
x = 10, y = "20", z = y + x; // it gives the result 2010
console.log(`The result is ${z}`);
console.log(`The result of 10 + 20 + "30" is ${10 + 20 + "30"}`); // output 3030.

//JavaScript will try to convert strings to numbers in all numeric operations:
x = 20, y = "10", z = x/y; // result will be 2.
x = 20, y = "ten", z = x/y; // result will be NaN.
// Examples of subtraction, multiplication and division.
console.log(`The result of 60 - "30" is ${60 - "30"}`); // output 30.
console.log(`The result of 60 * "30" is ${60 * "30"}`); // output 1800.
console.log(`The result of 60 / "30" is ${60 / "30"}`); // output 2.
console.log(`Type of NaN is: ${typeof NaN}`);

//Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number.
//Division by 0 (zero) also generates Infinity.
var x =  2 / 0;       // x will be Infinity
var y = -2 / 0;       // y will be -Infinity 

/* Number methods ----------- */

//The toString() method returns a number as a string.
//toExponential() returns a string, with a number rounded and written using exponential notation.
//The parameter is optional. If you don't specify it, JavaScript will not round the number.
var x = 9.656;
x.toExponential(2);     // returns 9.66e+0
x.toExponential(4);     // returns 9.6560e+0
x.toExponential(6);     // returns 9.656000e+0 

//toFixed() returns a string, with the number written with a specified number of decimals.
//toFixed(2) is perfect for working with money.
var x = 9.656;
x.toFixed(0);           // returns 10
x.toFixed(2);           // returns 9.66
x.toFixed(4);           // returns 9.6560
x.toFixed(6);           // returns 9.656000 

//toPrecision() returns a string, with a number written with a specified length:
var x = 9.656;
x.toPrecision();        // returns 9.656
x.toPrecision(2);       // returns 9.7
x.toPrecision(4);       // returns 9.656
x.toPrecision(6);       // returns 9.65600 

//valueOf() returns a number as a number.
console.log(`The type of "123".valueOf() is : ${typeof "123".valueOf()}`);
console.log(`The type of 123.valueOf() is : ${typeof (new Number(123)).valueOf()}`);

/*
Global JavaScript Methods
JavaScript global methods can be used on all JavaScript data types.
These are the most relevant methods, when working with numbers:
Method 	        Description
Number() 	    Returns a number, converted from its argument.
parseFloat() 	Parses its argument and returns a floating point number
parseInt() 	    Parses its argument and returns an integer
*/
Number(true);          // returns 1
Number(false);         // returns 0
Number("10");          // returns 10
Number("  10");        // returns 10
Number("10  ");        // returns 10
Number(" 10  ");       // returns 10
Number("10.33");       // returns 10.33
Number("10,33");       // returns NaN
Number("10 33");       // returns NaN
Number("John");        // returns NaN 
//The Number() method below returns the number of milliseconds since 1.1.1970. 
Number(new Date("2017-09-30"));    // returns 1506729600000
// parseInt() -----------
parseInt("10");         // returns 10
parseInt("10.33");      // returns 10
parseInt("10 20 30");   // returns 10
parseInt("10 years");   // returns 10
parseInt("years 10");   // returns NaN  
// parseFloat() ----------
parseFloat("10");        // returns 10
parseFloat("10.33");     // returns 10.33
parseFloat("10 20 30");  // returns 10
parseFloat("10 years");  // returns 10
parseFloat("years 10");  // returns NaN 

//MAX_VALUE 	Returns the largest number possible in JavaScript, Number.MAX_VALUE
//MIN_VALUE 	Returns the smallest number possible in JavaScript, Number.MIN_VALUE
//POSITIVE_INFINITY 	Represents infinity (returned on overflow), Number.POSITIVE_INFINITY
//NEGATIVE_INFINITY 	Represents negative infinity (returned on overflow), Number.NEGATIVE_INFINITY
//NaN 	Represents a "Not-a-Number" value
