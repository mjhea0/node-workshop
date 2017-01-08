var cars = [
  {
    make: 'Ford',
    model: 'Fusion'
  },
  {
    make: 'GM',
    model: 'Tahoe'
  },
  {
    make: 'Honda',
    model: 'Accord'
  },
  {
    make: 'Ford',
    model: 'Fision'
  }
];

// for loop

var fordCars = [];

for (var i = 0; i < cars.length; i++) {
  if (cars[i].make === 'Ford') {
    fordCars.push(cars[i]);
  }
}

console.log(fordCars);

// filter()

var allFordCars = cars.filter(function(car) {
  return car.make === 'Ford';
});

console.log(allFordCars);
