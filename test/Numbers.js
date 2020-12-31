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