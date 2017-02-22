var request = require('request');
var express = require('express');
var router = express.Router();

var gnipData = require('../config');
var tweetCollection = require('../db');

var username = gnipData.username;
var password = gnipData.password;
var accountName = gnipData.accountName;
var label = gnipData.label;

router.get('/', function(req, res, next) {
  // search the gnip api
  var keyword = req.query.search || 'realpython';
  getData(keyword, function(err, results) {
    if (err) return res.json('Something went horribly wrong!');
    var renderObject = {title: 'Gnip Chart', data: results, search: keyword};
    return res.render('chart.ejs', renderObject);
  });
});

// router.post('/', function(req, res, next) {
//   res.redirect('/api?search=' + req.body.search); // api?search=test
// });

router.post('/', function(req, res, next) {
  var keyword = req.body.searchTerm || 'realpython';
  getData(keyword, function(err, results) {
    if (err) return res.json('Something went horribly wrong!');
    var renderObject = {data: results, search: keyword};
    return res.json(renderObject);
  });
});

// *** helpers *** //

function getData(query, callback) {
  // search the gnip api
  var base = `https://gnip-api.twitter.com/search/30day/accounts/${accountName}/${label}/counts.json?query=${query}&bucket=day&fromDate=201701210000`;
  var requestObject = {
    method: 'GET',
    uri: base,
    auth: { username: username, password: password }
  };
  request(requestObject, function(err, response, body) {
    if (err) callback(err);
    var data = JSON.parse(body).results;
    transform(data, query, function(error, tweets) {
      addDataToDatabase(tweets);
      console.log(tweets.days);
      callback(null, tweets.days);
    });
  });
}

function addDataToDatabase(data) {
  tweetCollection.insert(data);
  tweetCollection.find()
  .then(function(docs) {
    console.log(docs);
  });
}

function transform(data, query, callback) {
  var days = [];
  for (var i = 1; i < data.length; i++) {
    days.push({
      number: i,
      count: data[i].count
    });
  }
  var obj = {
    term: query,
    days: days
  };
  callback(null, obj);
  /*
  {
    _id: MONGO_ID,
    term: SEARCH_TERM,
    days: [
      {
        number: DAY_NUMBER,
        count: COUNT
      }
    ]
  }
   */
}



module.exports = router;
