/*
The Difference Between Unicode and UTF-8
Unicode is a character set. UTF-8 is encoding.
Unicode is a list of characters with unique decimal numbers (code points). A = 65, B = 66, C = 67, ....
This list of decimal numbers represent the string "hello": 104 101 108 108 111
Encoding is how these numbers are translated into binary numbers to be stored in a computer:
UTF-8 encoding will store "hello" like this (binary): 01101000 01100101 01101100 01101100  01101111
*/
sum = function (a, b) {
    alert("sum called!" + (a + b));
}

average = function () {
    var arr = [5, 6, 76, 12, 8];
    let s = 0;
    arr.forEach(element => {
        s = s + element;
    });
    return s / arr.length;
}
/*
JavaScript stores numbers as 64 bits floating point numbers, but all bitwise operations are performed on 32 bits binary numbers.
Before a bitwise operation is performed, JavaScript converts numbers to 32 bits signed integers.
After the bitwise operation is performed, the result is converted back to 64 bits JavaScript numbers.
JavaScript binary numbers are stored in two's complement format.
This means that a negative number is the bitwise NOT of the number plus 1.
*/
bitwiseOps = function () {
    //When a bitwise AND is performed on a pair of bits, it returns 1 if both bits are 1.
    let x = 5 & 1;
    //When a bitwise OR is performed on a pair of bits, it returns 1 if one of the bits are 1.
    let y = 5 | 1;
    //When a bitwise XOR is performed on a pair of bits, it returns 1 if the bits are different.
    let z = 5 ^ 1;
    //JavaScript Bitwise NOT (~) 
    //5	00000000000000000000000000000101
    //~5	11111111111111111111111111111010 (-6)

    //This is a zero fill left shift(<<).
    // One or more zero bits are pushed in from the right, and the leftmost bits fall off.
    let w = 5 << 1;
    //JavaScript (Sign Preserving) Bitwise Right Shift (>>)
    //This is a sign preserving right shift. Copies of the leftmost bit are pushed in from the left, and the rightmost bits fall off.
    let u = -5 >> 1;
    //JavaScript (Zero Fill) Right Shift (>>>)
    //This is a zero fill right shift. One or more zero bits are pushed in from the left, and the rightmost bits fall off.
    let v = 5 >>> 1;

    return x + ", " + y + ", " + z + ", " + w + ", " + u + ", " + v;
}

//Converting Decimal to Binary
function dec2bin(dec) {
    return (dec >>> 0).toString(2);
}
//Converting Binary to Decimal
function bin2dec(bin) {
    return parseInt(bin, 2).toString(10);
}