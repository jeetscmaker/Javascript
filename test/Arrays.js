var cars = ["Ford", "Volvo", "BMW"];
console.log(cars);
cars.forEach(car => console.log(car));
// another way of writing above code if it has multiple statements.
var i = 1;
cars.forEach(car => {
  car = i + "." + car;
  console.log(car);
  i++;
});
var a = new Array("Saab", "Volvo", "BMW");
//Note: Array indexes start with 0.
//[0] is the first element. [1] is the second element.
console.log(`array a's first element is ${a[0]}`);

/*
Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.
JavaScript variables can be objects. Arrays are special kinds of objects.
Because of this, you can have variables of different types in the same Array.
You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array.
*/
var x = cars.length;   // The length property returns the number of elements
var y = cars.sort();   // The sort() method sorts arrays 
console.log('The sorted array car is: ' + y);

//The easiest way to add a new element to an array is using the push() method:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Lemon");    // adds a new element (Lemon) to fruits 

//Adding elements with high indexes can create undefined "holes" in an array:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[6] = "Lemon";    // adds a new element (Lemon) to fruits 

//JavaScript does not support arrays with named indexes. In JavaScript, arrays always use numbered indexes and Object uses named index.
var points = new Array(40, 100, 1, 5, 25, 10); // Bad approach.
var points = [40, 100, 1, 5, 25, 10];          // Good approach.

// How to identify an array
Array.isArray(fruits);   // returns true from ES 5 onwards.
// some old browsers don't support ES5. SO isArray method can be defined as:
function isArray(x) {
  return x.constructor.toString().indexOf("Array") > -1;
}
console.log("points is an array: " + isArray(points));
console.log(`using instanceof for determining 'fruits' is an array: ${fruits instanceof Array}`);

/*--- Array Methods ---*/
//The JavaScript method toString() converts an array to a string of (comma separated) array values.
console.log(`The stringified form of array 'fruits' is: ${fruits.toString()}`);

//The join() method also joins all array elements into a string.
//It behaves just like toString(), but in addition you can specify the separator.
console.log(`The joined form of array 'fruits' is: ${fruits.join('-')}`);

//The pop() method removes the last element from an array, returns the value that was "popped out".
var p = fruits.pop();
console.log(`Popped from fruits: ${p}`);

//The push() method adds a new element to an array (at the end), returns the new array length.
var len = fruits.push('Grapes');
console.log(`Pushed Grapes to fruits, new length is: ${len}`);

//The shift() method removes the first array element and "shifts" all other elements to a lower index.
// and it returns the string that was "shifted out".
var removed = fruits.shift();
console.log(`removed from fruits by shifting is: ${removed}`);

//The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements,
// and returns the new array length.
var added = fruits.unshift('Blueberry');
console.log(`added to fruits by unshifting, length is: ${added}`);

//Since JavaScript arrays are objects, elements can be deleted by using the JavaScript operator delete.
//Using delete may leave undefined holes in the array. Use pop() or shift() instead.
delete fruits[0]; // It will create a 'hole' at 0th index. hole means undefined.
console.log(fruits);
fruits[0] = "blueberry"; // assingning a new item to 0th index.
console.log(fruits);

/*The splice() method can be used to add new items to an array.
The first parameter (2) defines the position where new elements should be added (spliced in).
The second parameter (0) defines how many elements should be removed.
The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
The splice() method returns an array with the deleted items.
With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array.
*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);
fruits.splice(0, 1);        // Removes the first element of fruits 
console.log(fruits);

//The concat() method creates a new array by merging (concatenating) existing arrays.
//It does not change the existing arrays & always returns a new array & it can take any number of array arguments.
var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var myChildren = myGirls.concat(myBoys);   // Concatenates (joins) myGirls and myBoys
console.log(myChildren);
//var myChildren = arr1.concat(arr2, arr3, arr4, arr5,...);

//The slice() method can take two arguments like slice(1, 3).
// It then selects elements from the start argument, and up to (but not including) the end argument.
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3); // citrus will be ["Orange", "Lemon"].
//If the end argument is omitted, like in the first examples, the slice() method slices out the rest of the array.
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(2); // citrus will be ["Lemon", "Apple", "Mango"]

// sort() method sorts an array.
console.log("The sorted fruits are: " + fruits.sort());
// sorting in reverse order.
console.log("The sorted fruits in reverse are: " + fruits.sort().reverse());

var nums = [54, 3, 21, 34, 6];
console.log("Nums in sorted order wrong: " + nums.sort()); // produces wrong result.
// sorting nums with a compare function
console.log(`Numbers in sorted order: ${points.sort(function (a, b) { return a - b })}`);

//--------------The Fisher Yates Method===============
/*The above example, array.sort(), is not accurate, it will favor some numbers over the others.
The most popular correct method, is called the Fisher Yates shuffle, and was introduced in data science as early as 1938!
In JavaScript the method can be translated to this:*/
var points = [40, 100, 1, 5, 25, 10];

for (i = points.length - 1; i > 0; i--) {
  j = Math.floor(Math.random() * i)
  k = points[i]
  points[i] = points[j]
  points[j] = k
}

// Finding maximum in an array. Math.max.apply(null, [1, 2, 3]) is equivalent to Math.max(1, 2, 3).
function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}

// Finding minimum in an array.Math.min.apply(null, [1, 2, 3]) is equivalent to Math.min(1, 2, 3).
function myArrayMin(arr) {
  return Math.maminx.apply(null, arr);
}

//The fastest solution is to use a "home made" method.
// Max function
function myArrayMax(arr) {
  var len = arr.length;
  var max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
}
// Min function.
function myArrayMin(arr) {
  var len = arr.length;
  var min = Infinity;
  while (len--) {
    if (arr[len] < min) {
      min = arr[len];
    }
  }
  return min;
}

//Sorting Object Arrays
var cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 }
];
cars.sort(function (a, b) { return a.year - b.year });
console.log("---sorting by year---");
cars.forEach(car => {
  console.log(car.type + " " + car.year)
});

// Comparing with string properties.
console.log("---sorting by name---");
cars.sort(function(a, b){
  var x = a.type.toLowerCase();
  var y = b.type.toLowerCase();
  if (x < y) {return -1;}
  if (x > y) {return 1;}
  return 0;
}); 
cars.forEach(car => {
  console.log(car.type + " " + car.year)
});