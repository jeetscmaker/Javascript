//The forEach() method calls a function (a callback function) once for each array element.
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunctionIterate);

function myFunctionIterate(value) {
  console.log(value);
}

/*The map() method creates a new array by performing a function on each array element.
The map() method does not execute the function for array elements without values.
The map() method does not change the original array.
This example multiplies each array value by 2:
*/
var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunctionMap).forEach(e => console.log(e));

function myFunctionMap(value, index, array) {
  return value * 2;
}

/*The filter() method creates a new array with array elements that passes a test.
This example creates a new array from elements with a value larger than 18:
*/
var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunctionFilter).forEach(e => console.log(e));

function myFunctionFilter(value, index, array) {
  return value > 18;
} 

/*The reduce() method runs a function on each array element to produce (reduce it to) a single value.
The reduce() method works from left-to-right in the array. See also reduceRight().
The reduce() method does not reduce the original array.
This example finds the sum of all numbers in an array:
*/
var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduce(myFunctionReduce);
console.log("The reduced sum is : " + sum);

function myFunctionReduce(total, value, index, array) {
  return total + value;
}
//The reduce() method can accept an initial value:
var sum = numbers1.reduce(myFunctionReduce2, 100);
console.log("The reduced sum with initial value 100 is : " + sum);
function myFunctionReduce2(total, value) {
  return total + value;
} 
console.table(numbers1);