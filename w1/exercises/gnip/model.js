// getter => looks inside the tweets.json
// setter => gets data from gnip, stores it in tweets.json
var fs = require('fs');
var path = require('path');
var request = require('request');

var tweets = require('./tweets.json');
var gnipData = require('./config');

function getter() {
  return tweets;
}

function setter(value, callback) {
  var username = gnipData.username;
  var password = gnipData.password;
  var accountName = gnipData.accountName;
  var label = gnipData.label;
  var keyword = value || 'jfk';
  var base = `https://gnip-api.twitter.com/search/30day/accounts/${accountName}/${label}.json?query=${keyword}&maxResults=10`;
  var requestObject = {
    method: 'GET',
    uri: base,
    auth: {
      username: username,
      password: password
    }
  };
  request(requestObject, function(err, res, body) {
    var data = JSON.parse(body).results;
    var file = path.join(__dirname, 'tweets.json');
    fs.writeFile(file, JSON.stringify(data), function(err) {
      callback(null, data);
    });
  });

}

module.exports = {
  getter: getter,
  setter: setter
};
