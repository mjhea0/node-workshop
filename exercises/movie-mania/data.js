// pull in request library
var request = require('request');

// make api call
function getMovies(name, callback) {
  var movieName = name || 'star';
  var requestString = `http://www.omdbapi.com/?s=${movieName}`;
  // var requestString = 'http://www.omdbapi.com/?s=' + movieName;
  request(requestString, function(err, res, body) {
    if (
        !err &&
        res.statusCode === 200 && JSON.parse(body)['Response'] === 'True'
      ) {
      var movies = JSON.parse(body)['Search'];
      // add id
      for (var i = 1; i < movies.length; i++) {
        movies[i].id = i;
      }
      callback(null, movies);
    } else {
      var errMessage = 'Something went terribly wrong!';
      callback(errMessage);
    }
  });
}

// export results
module.exports = getMovies;
