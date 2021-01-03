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