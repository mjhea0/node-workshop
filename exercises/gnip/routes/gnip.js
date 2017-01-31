var express = require('express');
var router = express.Router();

// var tweets = require('../tweets.json');
var model = require('../model.js');

router.get('/', function(req, res, next) {
  res.render('gnip', {tweets: tweets, searchTerm: 'false'});
});

// route handler for POST request to /gnip
router.post('/', function(req, res, next) {
  // get count from req.body assigning to variable
  var count = parseInt(req.body.count);
  var data = tweets.filter(function(el) {
    return el.actor.followersCount > count;
  });
  res.json(data.length);
});

router.post('/search', function(req, res, next) {
  // var data = tweets.filter(function(el) {
  //   return el.body.indexOf(req.body.keyword) !== -1;
  // });
  model.setter(req.body.keyword, function(error, success) {
    res.render('gnip', {tweets: success, searchTerm: req.body.keyword}); // refactor into res.redirect
  });
});

module.exports = router;
