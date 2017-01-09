# Intro to Express

## What is Express?

We could continue to use Node to create and run an HTTP server, but we do not want to have to recreate many of the low-level tasks associated with it. To make things easier, we can use Express on top of Node to abstract many of those routine tasks inherent with every HTTP server.

## Quick Start

Let's start with a simple app. Create a new directory called "express-intro", and then set up a *package.json* file:

```
$ npm init -y
```

This [file](https://docs.npmjs.com/files/package.json) contains metadata about our project, like the project name and author information. Most importantly, it stores the name and version numbers of the dependencies used. Why is this important? Well, once this code is on GitHub, someone could just clone it down and install the dependencies from this file to quicly recreate the project.

> **NOTE:** *package.json* file is akin to a *requirements.txt* file and a *gemfile* in the Python and Ruby ecosystems, respectively.

Let's install our first dependency - Express:

```
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

ADD DIAGRAM  

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

Moving on, do you like having to kill the server and then restarting it every time you make a change to your code? I hope not. This will get old. Plus, those seconds it takes to do that will add up quickly. So, let's speed up our workflow. 

## Express Calculator
