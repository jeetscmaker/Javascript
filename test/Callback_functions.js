/*
A callback is a function passed as an argument to another function.
When you pass a function as an argument, remember not to use parenthesis.
Using a callback, you could call the calculator function (myCalculator) with a callback,
and let the calculator function run the callback after the calculation is finished:
*/
function myDisplayer(sum) {
    console.log(`The sum is : ${sum}`);
}

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}

myCalculator(5, 5, myDisplayer);