//The forEach() method calls a function (a callback function) once for each array element.
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value) {
  console.log(value);
}

/*The map() method creates a new array by performing a function on each array element.
The map() method does not execute the function for array elements without values.
The map() method does not change the original array.
This example multiplies each array value by 2:
*/
var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction).forEach(e => console.log(e));

function myFunction(value, index, array) {
  return value * 2;
}