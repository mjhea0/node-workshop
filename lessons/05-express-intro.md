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
app.get("/", function(req, res) {
  // send back the response: 'Hello World'
  res.send("Hello World");
});

// start the server
app.listen(3000, function() {
  console.log("Starting a server on localhost:3000");
});
```

Run the server:

```sh
$ node app.js
```

Navigate to http://localhost:3000/ in your browser. What do you see?

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

## Routing

## URL Parameters

## Express Calculator
