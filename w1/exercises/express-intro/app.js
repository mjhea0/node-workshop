var express = require('express');
var app = express();

app.get('/calc/:operator/:num1/:num2', function(req, res) {
  var operator = req.params.operator;
  var num1 = parseInt(req.params.num1);
  var num2 = parseInt(req.params.num2);
  var responseObject = {
    status: 200,
    data: {
      operator: operator,
      num1: num1,
      num2: num2,
      solution: null
    }
  };
  switch (operator) {
    case 'add':
      responseObject.data.solution = num1 + num2;
      res.json(responseObject);
      break;
    case 'sub':
      responseObject.data.solution = num1 - num2;
      res.json(responseObject);
      break;
    case 'mult':
      responseObject.data.solution = num1 * num2;
      res.json(responseObject);
      break;
    case 'div':
      responseObject.data.solution = num1 / num2;
      if (num2 === 0) {
        break;
      }
      res.json(responseObject);
      break;
    default:
      res.send('blah');
  }
});


// app.use(function (req, res, next) {
//   var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
//   console.log('Client IP is:' + ip);
//   next();
// });

// app.get('/', function(req, res) {
//   res.send('hi!');
// });
//
// app.get('/hello', function(req, res) {
//   res.send('Hello, World');
// });
//
// app.use(function (req, res, next) {
//   // if user is authenticated
//   next();
// });
//
// app.get('/hello/:name', function(req, res) {
//   res.send('Hello, ' + req.params.name);
// });
//
// app.get('/harrison', function(req, res) {
//   res.json({test: 'test'});
// });



app.listen(3000, function() {
  console.log('server is listening..');
});
