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
