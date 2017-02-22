/*

Write a function called `getLastChar()` that takes a string as an argument and returns the last character of that string.
  - Input: `'twister'`
  - Output: `'r'`

 */

function getLastChar(str) {
  return str.charAt(str.length - 1);
}

console.log(getLastChar('twister') === 'r');

/*

Write a function called `findChar()` that takes a string and an integer as arguments, and returns the character at the position represented by the number. (Remember: indexing starts a 0)
  - Input: `'twister', 2`
  - Output: `'i'`

 */

function findChar(str, int) {
  return str.charAt(int);
}

console.log(findChar('twister', 2) === 'i');

/*

Write a function called `calculate()` that takes two integers and a string as arguments. If the string is `add`, then return the sum of the integers. If the string is `sub`, return the difference. If the string is `mult`, return the product. If the string is `div`, return the ratio. Otherwise return 0.
  - Input: `1, 10, 'add'`
  - Output: `11`

 */

function calculate(num1, num2, str) {
  if (str === 'add') {
    return num1 + num2;
  }
  if (str === 'sub') {
    return num1 - num2;
  }
  if (str === 'mult') {
    return num1 * num2;
  }
  if (str === 'div') {
    return num1 / num2;
  }
}

console.log(calculate(2, 1, 'add') === 3);
console.log(calculate(2, 1, 'sub') === 1);
console.log(calculate(2, 3, 'mult') === 6);
console.log(calculate(8, 2, 'div') === 4);

/*

Write a function called `repeater()` that takes a string and an integer as arguments, and returns the string repeated that many number of times.
  - Input: `3, 'blah'`
  - Output: `blahblahblah`

 */


function repeater(str, int) {
  let result = '';
  for (var i = 0; i < 3; i++) {
    result += str;
  }
  return result;
}

console.log(repeater('blah', 3) === 'blahblahblah');


/*

Write a function called `reverseWord() that takes a string as an argument and returns the reverse of that string.
  - Input: `'hello'`
  - Output: `'olleh'`

 */

function reverseWord(str) {
  return str.split('').reverse().join('');
}

console.log(reverseWord('hello') === 'olleh');

/*

Write a function called `factorial()` that takes an integer as an argument and returns the factorial of a number.
  - Input: `5`
  - Output: `120`

 */

function factorial(num) {
  var result = 1;
  var multiplier = num;
  for (var i = 1; i < num; i++) {
    result = result * multiplier;
    multiplier = multiplier - 1;
  }
  return result;
}

console.log(factorial(5) === 120);
console.log(factorial(6) === 720);

/*

Write a function called `longestString()` that takes a phrase as a string, and returns the longest word in that phrase. If the phrase contains more than one such word, return the first occurrence.
  - Input: `'My father likes the color red.'`
  - Output: `'father'`

 */

function longestString(phrase) {
  var phraseArray = phrase.split(' ');
  var longest = phraseArray[0];
  for (var i = 1; i < phraseArray.length; i++) {
    if (phraseArray[i].length > longest.length) {
      longest = phraseArray[i];
    }
  }
  return longest;
}

console.log(longestString('one four ten') === 'four');
console.log(longestString('My father likes the color red.') === 'father');
console.log(longestString('one ten') === 'one');

/*

Write a function called `getTruthy()` that takes an array, and returns a filtered array. The filtered array should only contain the `truthy` values from the initial array.
  - Input: `['hi', null, false, 10, 0]`
  - Output: `['hi', 10]`

 */

function getTruthy(arr) {
  return arr.filter(function(el) {
    return el;
  });
}

console.log(getTruthy(['']).length === 0);
console.log(getTruthy(['hi', null, false, 10, 0]).length === 2);
console.log(getTruthy(['hi', null, false, 10, 0])[0] === 'hi');
console.log(getTruthy(['hi', null, false, 10, 0])[1] === 10);

/*

Write a function called `getUnique()` that takes two arrays as arguments, and returns an array of all elements that are only in one array.
  - Input: `[1, 2, 3], [1, 2, 4, 5]`
  - Output: `[3, 4, 5]`

 */

function getUnique(arr1, arr2) {
  arr2.forEach(function(el) {
    if (arr1.indexOf(el) === -1) {
      arr1.push(el);
    } else {
      arr1.splice(arr1.indexOf(el), 1);
    }
  });
  return arr1;
}

console.log(getUnique([1, 2, 3], [1, 2, 4, 5]).length === 3);
console.log(getUnique([1, 2, 3], [1, 2, 4, 5])[0] === 3);
console.log(getUnique([1, 2, 3], [1, 2, 4, 5])[1] === 4);
console.log(getUnique([1, 2, 3], [1, 2, 4, 5])[2] === 5);
console.log(getUnique([1, 2, 3], [1, 2, 4, 3]).length === 1);
console.log(getUnique([1, 2, 3], [1, 2, 4, 3])[0] === 4);
