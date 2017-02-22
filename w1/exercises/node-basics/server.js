var http = require('http');

var server = http.createServer(function(req, res) {
  var obj = { name: 'jimmy eat world' };
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify(obj));
});

server.listen(3000);

console.log('hey! you got a server listening on port 3000!');
