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

// Javascript function to show a digital clock with hours, minutes, seconds.
setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  time =
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds();
  console.log(time);
}

//When using the JavaScript function setTimeout(), you can specify a callback function to be executed on time-out:
setTimeout(myFunction, 3000);

function myFunction() {
  console.log("I love You !!");
}

// JavaScript Promise Object
// A JavaScript Promise object contains both the producing code and calls to the consuming code:
let myPromise = new Promise(function(myResolve, myReject) {
  // "Producing Code" (May take some time)
  
    myResolve(); // when successful
    myReject();  // when error
  });
  
  // "Consuming Code" (Must wait for a fulfilled Promise)
  myPromise.then(
    function(value) { /* code if successful */ },
    function(error) { /* code if some error */ }
  );