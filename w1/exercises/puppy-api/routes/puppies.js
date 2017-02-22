var express = require('express');
var router = express.Router();

var puppies = [
  {
    id: 1,
    name: 'Jim',
    breed: 'Collie',
    tendencies: ['pees on trees'],
    alive: true
  },
  {
    id: 2,
    name: 'John',
    breed: 'Bulldog',
    tendencies: ['bites faces'],
    alive: true
  },
  {
    id: 3,
    name: 'Emily',
    breed: 'Doxon',
    tendencies: ['tricks', 'singing'],
    alive: false
  },
  {
    id: 4,
    name: 'Harrison',
    breed: 'Golden Retriever',
    tendencies: ['retrieving things', 'tolerant of insults'],
    alive: true
  },
  {
    id: 5,
    name: 'Harrison',
    breed: 'Pitbull',
    tendencies: ['cuddling'],
    alive: true
  }
];

router.get('/', function(req, res, next) {
  res.json({
    status: 'success',
    results: puppies
  });
});

router.get('/:id', function(req, res, next) {
  // get id
  var id = parseInt(req.params.id);
  // iterate through puppy array
  var singlePuppy = puppies.filter(function(puppy) {
    return puppy.id === id;
  });
  if (singlePuppy.length) {
    res.json({
      status: 'success',
      results: singlePuppy[0]
    });
  } else {
    res.json({
      status: 'success',
      results: 'Puppy does not exist!'
    });
  }
});

module.exports = router;
