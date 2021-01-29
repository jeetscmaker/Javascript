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
let myPromise = new Promise(function (myResolve, myReject) {
  // "Producing Code" (May take some time)

  myResolve(); // when successful
  myReject();  // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
  function (value) { /* code if successful */ },
  function (error) { /* code if some error */ }
);

/*
Promise Object Properties
A JavaScript Promise object can be:

Pending
Fulfilled
Rejected
The Promise object supports two properties: state and result.

While a Promise object is "pending" (working), the result is undefined.

When a Promise object is "fulfilled", the result is a value.

When a Promise object is "rejected", the result is an error object.

myPromise.state	myPromise.result
"pending"	undefined
"fulfilled"	a result value
"rejected"	an error object
You cannot access the Promise properties state and result.

You must use a Promise method to handle promises.
Here is how to use a Promise:
*/
myPromise.then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);

//Promise.then() takes two arguments, a callback for success and another for failure.
//Both are optional, so you can add a callback for success or failure only.
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

let myPromise = new Promise(function(myResolve, myReject) {
  let x = 0;

// The producing code (this may take some time)

  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);

// --------- ASYNC in Javascript ------------
//The keyword async before a function makes the function return a promise:
async function myFunction() {
  return "Hello";
} // this is same as below code:

async function myFunction() {
  return Promise.resolve("Hello");
}

//The keyword await before a function makes the function wait for a promise:
//The await keyword can only be used inside an async function.
let value = await promise;

async function myDisplay() {
  let myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function() { myResolve("I love You !!"); }, 3000);
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();