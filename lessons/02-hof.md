# Higher-Order Functions

Higher Order Functions are functions that either-

- take other function(s) as arguments
- return other function(s)

The key point here is that, functions can be passed around just like a number or a string:

```javascript
function lessThan(n) {
  return function(m) { return m < n; };
}
var isLessThan = lessThan(11);
console.log(isLessThan);        // => [Function]
console.log(isLessThan(10));    // => true
```

## Callback Functions

Callback functions are one of the more common higher order functions. A callback function is a function that is passed in as parameter to another function, which is executed at the end of that function.

### Example One

For example:

```javascript
function each(array, callback) {
  for (var i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

var names = ['Michael', 'Jeremy', 'Fletcher'];

each(names, function(res) {
  console.log(res);
});
```

So, `each()` takes two arguments - an array and a callback function. When we called `each()`, we passed in an array of names along with the callback.

### Example Two

Let's look at one more example:

```javascript
function filter(array, limit, callback) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] > limit) {
      callback(array[i]);
    }
  }
}

var ages = [8, 9, 10];

filter(ages, 9, function(res) {
  console.log(res);
});
```

Here, `filter()` takes three arguments:

1. `array`
1. `limit`
1. `callback`

To use `filter()`, we passed in an array of ages, an upper limit, and the callback. `filter()`, then, iterated through `ages` and only calls the callback if the age is greater that `9`.

Thus far, we've looked at higher order functions that we defined. Let's look at some that are built in to JavaScript - `forEach`, `map`, and `filter`.

> **NOTE:** For more on higher order functions, check out [this video](https://www.youtube.com/watch?v=BMUiFMZr7vk).

## `forEach`

A `forEach()` function is used for basic iteration, similar to a `for` loop. Here's how we can use it to sum the elements of an array:

```javascript
var total = 0;
var numbers = [2, 5, 3, 4];

numbers.forEach(function(num) {
  total += num;
});

console.log(total);
```

Your Turn!

1. What's happening here? Describe it to yourself out-loud or to a friend.
1. Would we have access to `total` in the `console.log` if it were defined within the `forEach()` function?
1. Exercise: Given an array of numbers, use `forEach()` to find the minimum value in that array.

## `map`

Like `forEach()`, `map()` is used for iterating through an array, transforming each value, and then creating a new array.

### Example

For example, given an array of integers, create an array where each number is multiplied by four.

```javascript
var numbers = [2, 12, 3, 17, 233, 21];

// for loop

var outputForLoop = [];

for (var i = 0; i < numbers.length; i++) {
  outputForLoop.push(numbers[i] * 4);
}

console.log(outputForLoop);

// forEach()

var outputForEach = [];

numbers.forEach(function(num) {
  outputForEach.push(num * 4);
});

console.log(outputForEach);

// map()

var outputMap = numbers.map(function(num) {
  return num * 4;
});

console.log(outputMap);
```

Your Turn!

1. What's happening here? Compare each method used above. Essentially, if you need to iterate through an array, do something to each element, and then return an array, you should always use `map()`.
1. Exercise: Given an array of letters (`['a', 'd', 'F', 'z']`), use `map()`  to convert each letter to uppercase.

## `filter`

`filter()`, which also creates an array, is used for iterating through an array and removing any elements based on a given condition.

### Example

Given an array of objects, where each object contains a car make and model, return an array of objects containing only cars manufactured by Ford.

```javascript
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
```

Your Turn!

1. What's happening here - `return car.make === 'Ford';`? Describe it to yourself out-loud or to a friend. Then compare each method used above. Essentially, if you find yourself iterating through an array and then testing to see if element meets a certain condition, then you should use a `filter()`.
1. Exercise: Given an array of letters (`['a', 'd', 'F', 'z']`), use `filter()`  to return just the vowels.

## Arrow Functions

Arrow Functions are have a shorter syntax than function expressions in es6:

```javascript
let foo = () => {
  console.log("bar");
};

var bar = function() {
  console.log("foo");
};
```

Besides making the code shorter, they also lexically bind `this` inside the function. Put another way, arrow functions capture the value of `this` from the enclosing context.

What?

Let's refactor some code!
