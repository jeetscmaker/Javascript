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