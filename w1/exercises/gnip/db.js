var monk = require('monk');

var database = monk('localhost/gniptest');

database
.then(function() {
  console.log('connected!');
})
.catch(function(err) {
  console.log('something went wrong!');
});

var tweets = database.get('tweets');

module.exports = tweets;

// var students = database.get('students');
//
// students.find({})
// .then(function(docs) {
//   console.log(docs);
//   database.close();
// })
// .catch(function(err) {
//   console.log('something went wrong!');
//   database.close();
// });
