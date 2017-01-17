var express = require('express');
var app = express();


app.get('/', function(req, res) {
  res.send('hi!');
});

app.get('/hello', function(req, res) {
  res.send('Hello, World');
});

app.get('/hello/:name', function(req, res) {
  res.send('Hello, ' + req.params.name);
});

app.get('/harrison', function(req, res) {
  res.json({test: 'test'});
});

app.listen(3000, function() {
  console.log('server is listening..');
});
