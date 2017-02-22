var express = require('express');
var router = express.Router();

// get movie data
var getMovies = require('../data');
var movies = [];
getMovies(null, function(err, res) {
  movies = res;
});

// var movies = [
//   { id: 1, name: 'Tommy Boy' },
//   { id: 2, name: 'Lala Land' },
//   { id: 3, name: 'Harry Potter and the Seven Dwarfs' }
// ];

// *** get all movies *** //
router.get('/', function(req, res, next) {
  // send all movies
  res.json({ status: 'success', data: movies });
});

// *** get single movie *** //
router.get('/:id', function(req, res, next) {
  // send an individual movie
  var id = parseInt(req.params.id);
  var movie = movies.filter(function(el) {
    return el.id === id;
  });
  // var movie = [];
  // for (var i = 0; i < movies.length; i++) {
  //   if (movies[i].id === id) {
  //     movie.push(movies[i]);
  //   }
  // }
  if (movie.length) {
    res.json({ status: 'success', data: movie });
  } else {
    res.json({ status: 'success', data: 'Movie does not exist!' });
  }
});

// *** get movie by title ** //
router.get('/name/:name', function(req, res, next) {
  getMovies(req.params.name, function(err, success) {
    res.json({ status: 'success', data: success });
  });
});

module.exports = router;
