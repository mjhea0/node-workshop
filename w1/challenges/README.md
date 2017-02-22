# JavaScript Challenges

## Getting Started

1. Create a new project called "javascript-challenges" and add a *main.js* file to it.
1. Solve each of the challenges below, adding your code to *main.js*.
1. Commit and push your code to GitHub after you complete each challenge.
1. Add a comment above each function declaration, explaining in a line or two what the function does as well as the expected inputs and outputs. It's best to add these comments before you start writing any code!
1. Experiment with higher order functions - like `forEach()`, `map()`, and `filer()` - in place of vanilla `for` loops.
1. BONUS: Try refactoring the function to use a callback function after you get it working. Think about how you could handler errors. See the example for more information.

## Example

Write a function named `getFirstChar()` that takes a string as an argument and returns the first character of that string.
  - Input: `'test'`
  - Output `'t'`

First attempt:

```javascript
function getFirstChar(str) {
  return str.charAt(0)
}
getFirstChar('test')
```

Refactor:

```javascript
function getFirstChar(str, callback) {
  callback(str.charAt(0));
}

getFirstChar('test', function(res) {
  console.log(res);
})
```

Refactor Again:

```javascript
function getFirstChar(str, callback) {
  if (typeof str !== 'string') {
    callback('You must use a string! Try again.')
  }
  callback(null, str.charAt(0));
}

getFirstChar('test', function(err, res) {
  if (err) {
    console.log(err);
  }
  else {
    console.log(res);
  }
})
```

## Functions

1. Write a function called `getLastChar()` that takes a string as an argument and returns the last character of that string.
  - Input: `'twister'`
  - Output: `'r'`
1. Write a function called `findChar()` that takes a string and an integer as arguments, and returns the character at the position represented by the number. (Remember: indexing starts a 0)
  - Input: `'twister', 2`
  - Output: `'i'`
1. Write a function called `calculate()` that takes two integers and a string as arguments. If the string is `add`, then return the sum of the integers. If the string is `sub`, return the difference. If the string is `mult`, return the product. If the string is `div`, return the ratio. Otherwise return 0.
  - Input: `1, 10, 'add'`
  - Output: `11`
1. Write a function called `repeater()` that takes a string and an integer as arguments, and returns the string repeated that many number of times.
  - Input: `3, 'blah'`
  - Output: `blahblahblah`
1. Write a function called `reverseWord() that takes a string as an argument and returns the reverse of that string.
  - Input: `'hello'`
  - Output: `'olleh'`
1. Write a function called `factorial()` that takes an integer as an argument and returns the factorial of a number.
  - Input: `5`
  - Output: `120`
1. Write a function called `longestString()` that takes a phrase as a string, and returns the longest word in that phrase. If the phrase contains more than one such word, return the first occurrence.
  - Input: `'My father likes the color red.'`
  - Output: `'father'`
1. Write a function called `getTruthy()` that takes an array, and returns a filtered array. The filtered array should only contain the `truthy` values from the initial array.
  - Input: `['hi', null, false, 10, 0]`
  - Output: `['hi, 10']`
* Write a function called `getUnique()` that takes two arrays as arguments, and returns an array of all elements that are only in one array.
  - Input: `[1, 2, 3], [1, 2, 4, 5]`
  - Output: `[3, 4, 5]`
