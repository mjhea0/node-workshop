var http = require('http');
var fs = require('fs');
var path = require('path');

var file = path.join(__dirname, 'names.csv');

// (1) create server, listening on port 8080
var server = http.createServer(function(req, res) {
  // (2) read in names.csv
  fs.readFile(file, 'utf8', function(err, response) {
    // (3) convert to array of objects
    var obj = convertObject(response);
    // (4) return JSON
    res.end(JSON.stringify(obj));
  });
});

server.listen(8080);

function convertObject(str) {
  // split string on new line to create an array
  var arr = str.split('\n');
  // reverse array, remove last element (headers), create new array
  var headers = arr.reverse().pop().split(',');
  // container for objects
  var container = [];
  arr.forEach(function(row) {
    if (row.length) {
      // create array from the row
      var rowArray = row.split(',');
      var obj = {};
      // assign each row to a key
      obj[headers[0]] = rowArray[0];   // => obj['fName'] = 'mike'
      obj[headers[1]] = rowArray[1];   // => obj['lName'] = 'herman'
      // push object to array
      container.push(obj);
    }
  });
  // return array
  return container;
}

/*
split string on new line to create an array =>
  [ 'fName, lName', 'mike, herman', 'kim, kard', '' ]
remove empty space =>
  [ 'fName, lName', 'mike, herman', 'kim, kard' ]
reverse array, remove last element (headers), create new array =>
  [ 'fName', ' lName' ]
create array from the row => [ 'kim', ' kard' ]
create array from the row => [ 'mike', ' herman' ]
*/
