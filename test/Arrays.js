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