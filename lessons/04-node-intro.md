# Intro to Node

## What is Node?

Node is a JavaScript runtime that works outside of the browser. Since it sits on the server-side (e.g., your computer), you can use to access your file system and build a web server.

> **NOTE:** For more, review [Node.js - Introduction](https://www.tutorialspoint.com/nodejs/nodejs_introduction.htm).

You can experiment with Node via the REPL. To enter the REPL, run `node` in your terminal:

```
$ node
> var num1 = 1;
undefined
> var num2 = 2;
undefined
> num1 + num2
3
> function test() {
... return 'test';
... }
undefined
> test()
'test'
```

Once done, press CTRL-D to exit.

---

So, why would you want to use Node for web development?

1. One language on the client and server
1. Huge community!
1. Async out-of-the-box, which is great for web development - why?
1. Great for JSON APIs, I/O (not so great for CPU-intensive apps)

## Basic Examples

Create a new directory called "node-basics" and add the following files...

### Hello

*hello.js*:

```javascript
// when you log something from inside Node file,
// the output shows up in the terminal
console.log('Hello from Node');
```

Run this like so:

```sh
$ node hello.js
Hello from Node
```

### Goodbye

*goodbye.js*:

```javascript
// Node executes the file when it is required
// and returns everything from the module.exports

var data = require('./data.js');

console.log(data);
console.log(data.numbers);
console.log(data.goodbye);
```

*data.js*:

```javascript
// process.argv grabs the arguments passed in via the terminal
var numbers = process.argv[2].split('').join('');

// the exports property on the module object is the ONLY thing
// accessible outside of this file
module.exports = {
  numbers: numbers,
  goodbye: 'Goodbye, Node'
};
```

Run:

```
$ node test.js 1234567890
{ numbers: '1234567890', goodbye: 'Goodbye, Node' }
1234567890
Goodbye, Node
```

### Server

*server.js*:

```javascript
var http = require('http');

// anytime a request comes in, it hits the callback, where we:
// 1. set the status code to 200
// 2. set a header content type of text/html
// (headers are like an envelope's address, stamp, return address)
// 3. res is used to communicate info back to the client
var server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>Hello, World</h1>');
});

server.listen(3000);

console.log('Server listening on localhost:3000');
```

Run the file, then navigate to http://localhost:3000/ in your browser. What do you see? Open the network tab with the JavaScript console. Refresh the page. What do you see?

Your turn!

1. Modify the above code to return the following JSON object instead of HTML:

  ```json
  {
    "status": "200",
    "text": "Hello, World!"
  }
  ```

## Interacting with Files

Create a new directory called "file-system", and then work through each of the examples below. Don't forget to answer the questions following each example!

### Reading Files

**read.js**:

```javascript
var fs = require('fs');
var path = require('path');

var file = path.join(__dirname, 'text.txt');

fs.readFile(file, 'utf8', function(err, data) {
  if (err) {
    return console.log(err);
  } else {
    console.log(data);
  }
});
```

Make sure to create a new file called *text.txt* and add in some ipsum text from [Hipster Ipsum](https://hipsum.co/). Run the file. What do you see?

Questions:

1. What is `fs`?
1. What is `path`?
1. What does `path.join()` do?
1. What is `__dirname`?
1. What does `utf8` do?

### Creating Files

**write.js**:

```javascript
var fs = require('fs');
var path = require('path');

var file = path.join(__dirname, 'sample.txt');

fs.writeFile(file, 'Hi!', function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Saved!');
  }
});
```

## Exercise One

Read *lessons/data/01_data.json* and iterate through the array:

1. Create a CSV file, where the header is made up of the keys from each object.
1. Only add data to the CSV file if the last name starts with the letters A through M

## Exercise Two

Create an HTTP server that listens on port 8080. When a user navigates to http://localhost:8080/, read in the CSV that you made in the previous exercise, convert it to JSON - an array of objects - where the keys for each object are made from each column in the head of the CSV.
