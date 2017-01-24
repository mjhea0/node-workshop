# Intro to Express

## What is Express?

We could continue to use Node to create and run an HTTP server, but we do not want to have to recreate many of the low-level tasks associated with it. To make things easier, we can use Express on top of Node to abstract many of those routine tasks inherent with every HTTP server.

## Quick Start

Let's start with a simple app. Create a new directory called "express-intro", and then set up a *package.json* file:

```sh
$ npm init -y
```

This [file](https://docs.npmjs.com/files/package.json) contains metadata about our project, like the project name and author information. Most importantly, it stores the name and version numbers of the dependencies used. Why is this important? Well, once this code is on GitHub, someone could just clone it down and install the dependencies from this file to quicly recreate the project.

> **NOTE:** *package.json* file is akin to a *requirements.txt* file and a *gemfile* in the Python and Ruby ecosystems, respectively.

Let's install our first dependency - Express:

```sh
$ npm install express --save
```

This installed the dependency locally, within the project, storing it within a newly created "node_modules" directory. By using the `--save` flag, that dependency was added to the *package.json* file.

Before moving on, add a *.gitignore*:

```sh
$ echo "node_modules" > .gitignore
```

Why would we ignore the installed packages?

To get a server started quickly, create an *app.js* file and then add the following code to it:

```javascript
// requirements
var express = require('express');
// create an instance of express
var app = express();

// a "GET" request to "/" will run the function below
app.get('/', function(req, res) {
  // send back the response: 'Hello World'
  res.send('Hello World');
});

// start the server
app.listen(3000, function() {
  console.log('Starting a server on localhost:3000');
});
```

Run the server:

```sh
$ node app.js
```

Navigate to http://localhost:3000/ in your browser. What do you see? In essence, when we navigate to `/` (an endpoint), this *request* is handled in the route handler:

```javascript
app.get('/', function(req, res) {
  res.send('Hello World');
});
```

This, in turn, sends an HTML *response* (`Hello World`) to the client. So, a [route](https://expressjs.com/en/starter/basic-routing.html) simply manages the request/response cycle when a client hits a certain endpoint.

Your Turn!

1. What's happening here? Describe it to yourself out-loud or to a friend.
1. Exercise: Modify the above code to return the following JSON object:

  ```json
  {
    "status": "200",
    "text": "Hello, World!"
  }
  ```

1. How did you figure out how to modify the code? Which resources did you use?

## Routes

Let's add a new route to our application. Let's start with a handler:

```javascript
app.get('/fruits', function (req, res) {
  var fruits = [
    'apples', 'oranges', 'bananas', 'grapes'
  ];
  // send all the fruits
  res.send(fruits.join(', '));
});
```

To test, kill the server in your terminal with CTRL-D and then fire it back up. Navigate to localhost:3000/fruits.

Your Turn!

1. Set up a new route. Add inline code comments, describing what's happening on each line. Read the comments out-loud to yourself or to a friend.

## URL Parameters

What if we want a route that can take in a piece of information from the user? For example:

| URL                           | Response       |
|-------------------------------|----------------|
| localhost:3000/hello/michael  | Hello, Michael |
| localhost:3000/hello/sara     | Hello, Sara    |
| localhost:3000/hello/charlie  | Hello, Charlie |

Sure, you could create three separate route handlers, but that's not scaleable. In other words, you cannot account for all the names in the world. We need to create a dynamic route. To do this, we can use a URL parameter:

```javascript
app.get('/hello/:name', function (req, res) {
  res.send('Hello, ' + req.params.name);
});
```

So, `name` is the url parameter. This is simply a placeholder, which gets replaced with what the user enters into the address bar in the browser. We can then access the value via `req.params.name`.

Test this out!

> **NOTE:** Don't forget the `:` in the route! What happens if you forget it?

Your Turn!

1. We did forgot to capitalize the first letter of the name. Assign the URL parameter to a variable and then capitalize it correctly before sending back the response.
1. Add a new route handler to respond with the folling JSON object when a user navigates to `localhost:3000/user/michael/33/javascript`:

  ```json
  {
    "status": "200",
    "text": {
      "name": "Michael",
      "age": "33",
      "favoriteLanguage": "Javascript"
    }
  }
  ```

## Nodemon

Moving on, we do not want to have to kill the server and then restart it each and every we make changes to the code? This will get old. Plus, those seconds it takes to do that will add up quickly. So, let's speed up our workflow.

First, install [Nodemon](https://nodemon.io/):

```sh
$ npm install nodemon --global
```

The `--global` flag installs this in our global packages so that way it's available to all our Node projects. Do you think we should also install this locally and add dependency to the *package.json* file? Why or why not?

Next, add an npm start script to *package.json*:

```json
{
  "name": "express-intro",
  "version": "0.0.1",
  "scripts": {
    "start": "node app.js"
  },
  "dependencies": {
    "express": "^4.14.0"
  }
}
```

Kill the server, and then run Nodemon:

```sh
$ nodemon
[nodemon] 1.11.0
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node app.js`
Starting a server on localhost:3000
```

Now, when you make any changes to your code, the server will auto restart:

```sh
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
Starting a server on localhost:3000
```

What if we want the browser window to also auto refresh?

## Express Calculator

Let's build a basic calculator together...

1. Create a new project.
1. Before you write any code, make sure everything is wired up correctly and get a sanity check. Why is this important?
1. Set up the following four routes:
  - `/calc/add/:num1/:num2`
  - `/calc/sub/:num1/:num2`
  - `/calc/mult/:num1/:num2`
  - `/calc/div/:num1/:num2`
1. Respond with JSON:

  ```json
  {
    "status": "200",
    "data": {
      "operator": "add",
      "num1": "9",
      "num2": "4",
      "solution": "27"
    }
  }
  ```

1. Refactor your code to use only one route rather than four separate routes.

## Middleware

Middleware is a collection of process that run on each request to the server.
[Express Middleware](http://expressjs.com/en/guide/using-middleware.html) utilizes callbacks to handle requests:

```javascript
// a "GET" request to "/" will run the function below
app.get('/', function(req, res) {
  // send back the response: 'Hello World'
  res.send('Hello World');
});
```

Middleware runs in a specific order. This is important! Why?

For example, you may want to limit access to a specific route so that only those logged in can view it. And, perhaps you have two middleware functions:

1. The first ensures the user is logged in
1. The second loads the route

Well, which of these must be called first?

For the most part, Express uses app-level middleware and route-level middleware. If you mount a function to app-level middleware then every single incoming request will hit that function. On the other hand, route-level middleware is specific to the route.

Example of app-level middleware:

```javascript
app.use(function (req, res, next) {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log('Client IP is:', ip);
  next();
});
```

Here, we log the IP address to the console and then call `next()`, which passes the request to the next middleware function.

1. What is the next middleware function?
1. What happens if there is not another middleware function?

> **NOTE:** Middleware functions must either pass the request to the next middleware function via `next()` or send a response back to the client.
