const helpers = require('./helpers.js');

helpers.getLastCharHelper('twister')
.then((data) => { console.log(data === 'r'); })
.catch((err) => { console.log(err); });

helpers.getLastCharHelper(0)
.then((data) => { console.log(data); })
.catch((err) => { console.log(err === 'Please provide a string'); });
