var request = require('request');
var express = require('express');
var router = express.Router();

var gnipData = require('../config');

var username = gnipData.username;
var password = gnipData.password;
var accountName = gnipData.accountName;
var label = gnipData.label;

router.get('/', function(req, res, next) {
  // search the gnip api
  var keyword = req.query.search || 'realpython';
  var base = `https://gnip-api.twitter.com/search/30day/accounts/${accountName}/${label}/counts.json?query=${keyword}&bucket=day&fromDate=201701210000`;
  var requestObject = {
    method: 'GET',
    uri: base,
    auth: {
      username: username,
      password: password
    }
  };
  request(requestObject, function(err, response, body) {
    var data = JSON.parse(body).results;
    var results = [];
    for (var i = 1; i < data.length; i++) {
      results.push({
        day: i,
        count: data[i].count
      });
    }
    // console.log(results);
    // display chart with chart.js
    res.render('chart.ejs', {title: 'Gnip Chart', data: results});
  });
});

router.post('/', function(req, res, next) {
  res.redirect('/api?search=' + req.body.search); // api?search=test
});



module.exports = router;
