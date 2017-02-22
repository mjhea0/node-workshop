// requirements
var express = require('express');
// create an instance of express
var app = express();

// a "GET" request to "/" will run the function below
app.get('/', function(req, res) {
  // send back the response: 'Hello World'
  res.send('Hello World');
});

app.get('/fruits', function (req, res) {
  var fruits = [
    'apples', 'oranges', 'bananas', 'grapes'
  ];
  // send all the fruits
  res.send(fruits.join(', '));
});

app.get('/hello/:name', function (req, res) {
  res.send('Hello, ' + req.params.name);
});

// start the server
app.listen(3000, function() {
  console.log('Starting a server on localhost:3000');
});
