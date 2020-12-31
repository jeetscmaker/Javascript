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

