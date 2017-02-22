

var helpers = require('./helpers.js');

helpers.addOne(1, function(error, success) {
  console.log('what\'s coming back? =>', error, success);
  if (error) {
    console.log(error);
  } else {
    console.log(success);
  }
});
