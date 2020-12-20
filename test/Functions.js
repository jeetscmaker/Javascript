/*
Function parameters are listed inside the parentheses () in the function definition.
Function arguments are the values received by the function when it is invoked.
Inside the function, the arguments (the parameters) behave as local variables.
*/

var sum = function (a, b) {
    console.log("Inside sum() function...");
    return a + b;
}

function subtract(a, b) {
    console.log("Inside subtract() function...");
    return a - b;
}

console.log(`Type of sum function is: ${typeof sum}`);
console.log(`Type of subtract function is: ${typeof subtract}`);
console.log(`Output of sum function with a=15, b=10 is: ${sum(15, 10)}`);
console.log(`Output of subtract function with a=15, b=10 is: ${subtract(15, 10)}`);