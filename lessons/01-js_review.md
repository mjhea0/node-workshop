# JavaScript Review

In this section, we'll review JavaScript basics, including data types, variables, functions, naming conventions, operators, conditionals, loops, arrays, objects, and scope.

## Data Types

JavaScript types are divided into two groups - primitive types and references types...

### Primitive Types

JavaScript primitive types:

1. `number` - integer or float
1. `string`
1. `boolean` - `true` or `false`
1. `undefined` - value has yet to be defined
1. `null` - intentionally valueless
1. `symbol` (es6)

Things to note:

- Primitives are the basic building blocks of JavaScript.
Primitives are immutable.
- Everything else is an object, which contains properties. Primitives are just value; they do not have any properties. That said, the `number`, `string`, and `boolean` primitives do have object versions (called reference types), with properties, as well: `Number`, `String`, `Boolean.`

> **NOTE:** For more on JavaScript primitives, check out [The Secret Life of JavaScript Primitives](https://javascriptweblog.wordpress.com/2010/09/27/the-secret-life-of-javascript-primitives/).

### Reference Types

JavaScript reference types:

1. Array
1. Object
1. Function

Keep in mind that each of these are objects and objects have methods and properties:

```javascript
var movie = 'Star Wars';
movie.length;  // => 9

var someNumber = '9';
typeof someNumber; // => 'string'
var newNumber = Number.parseInt(someNumber);
typeof newNumber; // => 'number'
```

> **NOTE:** Check out all the available methods and properties for [Numbers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) and [Strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String).

### `typeof`

The `typeof` operator can be used to check the data type of a value:

```javascript
// primitive types

typeof 33;                  // => 'number'
typeof 'hello world';       // => 'string'
typeof true;                // => 'boolean'
typeof undefined;           // => 'undefined'
typeof null;                // => 'object'

// reference types

typeof {};                  // => 'object'
typeof [];                  // => 'object'
typeof function test(){};   // => 'function'
```

## Variables

Variables are containers for values, allowing you to pass them around and refer to them with a set name.

### `var`

```javascript
var tweet = {
  alias: 'realpython'
  body: 'Use Django or end up building a Django.',
  likes: 8,
  retweets: 2
}
```

es6 introduced `let` and `const`, which can be used in place of `var` when appropriate...

### `let`

`let` declares a block-level variable:

```javascript
function foo() {
  for(let i = 0; i < 10; i++){
    console.log(i)  // i is available
  }
  console.log(i)    // i is not available
}
```

`let` is pretty much `var` with block-level scope.

> **NOTE:** If you declare a variable with `let` outside of a block, it will have global scope. We'll talk more about block scoping shortly.

### `const`

In es6, a `const` (constant) is a single assignment variable. In other words, you cannot reassign it to something else once you assign a value to it:

```javascript
const name = "Michael";
name = 'Jeremy'     // what happens here?
```

Keep in mind that you can still add and update properties:

```javascript
const myFavoriteObject = {
  someProperty: 'foo'
};

myFavoriteObject = 'bar';                 // Will this work?
myFavoriteObject.someProperty = 'bar';    // What about this?
```
`const` is also bound to a block.

---

Your turn!

1. `const` vs `let` vs `var` - when should you use each?
1. For more, check out the video [var, let and const - What, why and how](https://youtu.be/sjyJBL5fkp8?list=PL0zVEGEvSaeHJppaRLrqjeTPnCH6vw-sm).

## Functions

Functions are used to capture and reuse blocks of code. They should have a singled defined purpose.

```javascript
function myFunction() {
  //do stuff
}
```

Things to note:

- Functions always return something. They will return `undefined` unless you use a `return` statement in the function body.
- When a `return` statement is executed, control breaks out of the function.
- Parameters are the variable names you use when defining a function - i.e., `function myFunction(thing1, thing2)`.
- Arguments are the values that you supply to a function when you call/invoke it - i.e.,: `myFunction(99, true);`

## Naming Conventions

Variable and function names are written in camelCase:

```javascript
// function declaration
function getFullName(first, last) {     
  return first + ' ' + last
}

// variable declaration
var firstName = 'Michael';                          
var lastName = 'Herman';

// function invocation
var fullName = getFullName(firstName, lastName);
```

> **NOTE:** You'll often see global variables and constants written in all UPPERCASE.

Variable names should be an indicator of the variable type. Likewise, function names should be an indicator of what the function does. Someone who did not write your code should be able to easily understand what it does based on variable and function names. Also, function names are generally present tense verbs.

Make sure you use the same conventions throughout your code. This makes it much easier for someone else to review.

## Operators

### Math

- addition (`+`)
- subtraction (`-`)
- multiplication (`*`)
- division (`/`)
- modulus (`%`)
- Mathematical operators can be combined with the assignment operator (`=`) -  i.e., `+=`

## Comparison

- greater than (`>`)
- less than (`<`)
- greater than or equal (`>=`)
- less than or equal (`<=`)
- equal (`==`)
- not equal (`!=`)
- strict equal (`===`)
- strict not equal (`!==`)

## Logical Operators

- and (`&&`)
- or (`||`)
- not (`!`)

## Conditionals

Conditional statements are used to control the flow of a program:

1. `if`
1. `if`/`else`
1. `if`/`else if`/`else``
1. `switch`

### `if`

```javascript
if (condition) {
  // some code
} else if (condition) {
  // some more code
} else {
  // default code
}
```

The `else` block is usually your catch-all or default behavior block.

### `switch`

```javascript
switch (expression) {
  case someVal:
    // do something
    break;
  case 1:
    // do something else
    break;
  case "blue":
    // do something else
    break;
  default:
    // default
}
```

The `default` block gets executed if the result of the `expression` doesn't match any of the cases.

### truthy

Everything in JavaScript is truthy except:.

`null`
`undefined`
`0`
`''`
`false`
`NaN`

## Loops

Loops are used to keep running a certain piece code for a certain number of iterations.

### `for`

Use a `for` loop when you know the number of times you want to iterate.

```javascript
for (var i = 1; i < 5; i++) {
  console.log(i);
}
```

### `while`

`while` loops continue to run as long as the boolean expression evaluates to `true`

```javascript
var i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
```

## Arrays

Arrays are lists of data. Let's look at how to use them...

### Creating

```javascript
var clothes = ['socks', 'shirts', 'hats', 'dresses', 'pants'];
clothes[1];      // => 'shirts'
clothes.length;  // => 5
```

### Changing Values

```javascript
clothes[2] = 'gloves';
'gloves';
clothes; // => [ 'socks', 'shirts', 'gloves', 'dresses', 'pants' ]
```

### Adding Elements

```javascript
clothes.push('skirts');
clothes[5];      // => 'skirts'
clothes.length;  // => 6
```

### Removing Elements

```javascript
delete clothes[5];
clothes; //=> [ 'socks', 'shirts', 'gloves', 'dresses', 'pants',  ]
```

### Methods

[Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype#Methods)

```javascript
clothes.join(', '); // => 'socks, shirts, gloves, dresses, pants'
clothes.reverse();  // => [ 'pants', 'dresses', 'gloves', 'shirts', 'socks' ]
```

### Iterating

```javascript
for (var i = 0; i < clothes.length; i++) {
  console.log(clothes[i]);
}
```

## Objects

Objects contain key/value pairs. Let's look at how to use them...

### Creating

```javascript
var cat = {};
cat.firstName = 'Michael';
cat.lastName = 'The Cat';
cat.getName = function() {
  console.log(this.firstName + ' ' + this.lastName);
};
cat.lastName;       // => 'The Cat'
cat.getName();      // => 'Michael The Cat'

var person = {
  firstName: 'Michael',
  lastName: 'Herman',
  getName: function() {
    console.log(this.firstName + ' ' + this.lastName);
  }
};
person.firstName;   // => 'Michael'
person.getName();   // => 'Michael Herman'
```

### Changing Values

```javascript
person.lastName = 'Johnson';
person.getName();   // => 'Michael Johnson'
```

### Adding Properties

```javascript
person.age = 33;
person // =>
/*
  {
    firstName: 'Michael',
    lastName: 'Johnson',
    getName: [Function: getName],
    age: 33
  }
*/
```

### Removing Properties

```javascript
delete person.age;
person // =>
/*
  {
    firstName: 'Michael',
    lastName: 'Johnson',
    getName: [Function: getName]
  }
*/
```

### Iterating

```javascript
for (var property in person) {
  console.log(property);
}
```

## Scope

Scope simply refers to the variables and functions that your program has access to at a given time.

Things to note:

- Descendant (child) scopes are always aware of the variables within their ancestor's (parent) scope. Ancestor scopes are *not* aware of the variables within their descendants' scopes.
- You can pass variable values outside of a function by returning its value.

### Global

Variables defined outside of any functions are part of the *global* scope and can be accessed anywhere and at any time. In the following function, you have access to `foo` at any time, inside or outside the function:

```javascript
var foo = 'bar';

function fooBar() {
  console.log(foo);
}
```

### Function-level

Variables defined within a function are part of that function's *local, function-level* scope. Local variables are created each time a function is called. In this function, you only have access to `foo` inside the function:

```javascript
function fooBar() {
  var foo = 'bar';
  console.log(foo);
}
```

### Block-level

es6 introduced a new type of local scope called *block-level* scope. With it, variables declared with `let` and `const`, inside a code block, only exist within that block.

Let's look at a quick example...

```javascript
for (var i = 0; i < 10; i++) {
  // pass
}
console.log(i)    // what will this result in?

for (let j = 0, j < 10; j++) {
  // pass
}
console.log(j)    // what will this result in?
```
