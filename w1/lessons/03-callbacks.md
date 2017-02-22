# Callbacks

We went through a number of examples of callbacks in the last lesson, but since callbacks are pretty much *everywhere* in JavaScript, let's look at some more examples.

Again, a callback function is simply a function that is passed into another function as an argument.

> **NOTE:** Want to learn more about callbacks? Read [Understanding Callbacks in JavaScript](http://javascript.tutorialhorizon.com/2015/07/03/callback-function-javascript-tutorial/).  

## Example

Create a function that takes an array of website names and returns them formatted correctly.

- Input: `['google', 'twitter', 'facebook']`
- Output: `['www.google.com', 'www.twitter.com', 'www.facebook.com']`

Try this first without a callback:

```javascript
function convert(arr) {
  return arr.map(function(site) {
    return 'www.' + site + '.com';
  });
}

var siteNames = ['google', 'twitter', 'facebook'];
console.log(convert(siteNames));
```

Now, let's add in a callback:

*main.js*:

```javascript
var convert = require('./utils.js').convert;

var siteNames = ['google', 'twitter', 'facebook'];

convert(siteNames, function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
});
```

*utils.js*:

```javascript
function convert(arr, callback) {
  if (typeof arr !== 'object') {
    return callback('Please use an array of strings');
  }
  var results = arr.map(function(site) {
    return 'www.' + site + '.com';
  });
  callback(null, results);
}

module.exports = {
  convert: convert
};
```

Things to note:

1. Notice how we separated the login (function definition) from the actual use (functional invocation). Essentially, you could write a number or reusable helper functions in the *utils.js* file so that you don't clutter your other files with unnecessary logic.
1. What happens if we pass in `true` instead of an array? Try it! You should see `Please use an array of strings`. What's happening? Describe it to yourself out-loud or to a friend

Your turn!

You often do not know how long something can take to process. Callbacks introduce blocking into JavaScript, since nothing happens until the callback function is invoked.

Test this out on your own with the following code:

```javascript
function createArray() {
  var arr = [];
  for (var i = 1; i <= 1000; i++) {
     arr.push(i);
  }
  setTimeout(function() {
    return arr;
  }, 5000);
}

function getEvenNumbers(arr) {
  console.log(arr);
  return arr.filter(function(num){
    return num % 2 === 0;
  });
}


var numberArray = createArray();
var evenNumberArray = getEvenNumbers(numberArray);
console.log(evenNumberArray.length);
```

What happens when you run it? This highlights and issue with asynchronous code:

- Asynchronous - The JavaScript engine starts executing your code, moving line by line without pausing
- Synchronous - The JavaScript engine will wait before moving on

So, in the above code, the `setTimeout()` simulates a long-winded process. If you do not wait for it to finish, `undefined` is passed in as the argument to `getEvenNumbers()`.  

Add a callback to `createArray()` to fix the issue.
