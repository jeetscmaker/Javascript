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

average = function(){
    var arr = [5, 6, 76, 12, 8];
    let s = 0;
    arr.forEach(element => {
        s = s + element;
    });
    return s/arr.length;
}