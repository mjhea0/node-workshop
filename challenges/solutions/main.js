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
