// pulling in http module
var http = require('http');

// creating server assighing to 'server' variable
var server = http.createServer(function(req, res) {
  // splitting url to an array (/word => ['', 'word'])
  var url = req.url.split('/');
  console.log(url); // why does this fire twice?
  // setting up response object
  var responseObject = {
    status: '',
    response: ''
  };
  // checking if the second element in the array's length is 0
  if (!url[1].length) {
    responseObject.status = 'error';
    responseObject.response = 'Please provide a word.';
  } else {
    responseObject.status = 'success';
    if (checkPalindrome(url[1])) {
      responseObject.response = url[1] + ' is a palindrome';
    } else {
      responseObject.response = url[1] + ' is not a palindrome';
    }
  }
  // responding accordingly
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify(responseObject));
});

function checkPalindrome(str) {
  return str === str.split('').reverse().join('');
}

server.listen(3000);

console.log('hey! you got a server listening on port 3000!');
