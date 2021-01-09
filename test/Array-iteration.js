//The forEach() method calls a function (a callback function) once for each array element.
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value) {
  console.log(value);
}