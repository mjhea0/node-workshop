const helpers = require('./helpers.js');

helpers.getLastCharHelper('twister')
.then((data) => { console.log(data === 'r'); })
.catch((err) => { console.log(err); });

helpers.getLastCharHelper(0)
.then((data) => { console.log(data); })
.catch((err) => { console.log(err === 'Please provide a string'); });

helpers.findCharHelper('twister', 2)
.then((data) => { console.log(data === 'i'); })
.catch((err) => { console.log(err); });

helpers.findCharHelper(0)
.then((data) => { console.log(data); })
.catch((err) => { console.log(err === 'Please provide a string'); });

helpers.calculateHelper(2, 1, 'add')
.then((data) => { console.log(data === 3); })
.catch((err) => { console.log(err); });

helpers.calculateHelper(2, 1, 'sub')
.then((data) => { console.log(data === 1); })
.catch((err) => { console.log(err); });

helpers.calculateHelper(2, 3, 'mult')
.then((data) => { console.log(data === 6); })
.catch((err) => { console.log(err); });

helpers.calculateHelper(8, 2, 'div')
.then((data) => { console.log(data === 4); })
.catch((err) => { console.log(err); });

helpers.repeaterHelper('blah', 3)
.then((data) => { console.log(data === 'blahblahblah'); })
.catch((err) => { console.log(err); });

helpers.repeaterHelper(0)
.then((data) => { console.log(data); })
.catch((err) => { console.log(err === 'Please provide a string'); });

helpers.reverseWordHelper('hello')
.then((data) => { console.log(data === 'olleh'); })
.catch((err) => { console.log(err); });

helpers.reverseWordHelper(0)
.then((data) => { console.log(data); })
.catch((err) => { console.log(err === 'Please provide a string'); });

helpers.factorialHelper(5)
.then((data) => { console.log(data === 120); })
.catch((err) => { console.log(err); });

helpers.factorialHelper(6)
.then((data) => { console.log(data === 720); })
.catch((err) => { console.log(err); });

helpers.longestStringHelper('one four ten')
.then((data) => { console.log(data === 'four'); })
.catch((err) => { console.log(err); });

helpers.longestStringHelper('My father likes the color red.')
.then((data) => { console.log(data === 'father'); })
.catch((err) => { console.log(err); });

helpers.longestStringHelper('one ten')
.then((data) => { console.log(data === 'one'); })
.catch((err) => { console.log(err); });

helpers.longestStringHelper(0)
.then((data) => { console.log(data); })
.catch((err) => { console.log(err === 'Please provide a string'); });

helpers.getTruthyHelper([''])
.then((data) => { console.log(data.length === 0); })
.catch((err) => { console.log(err); });

helpers.getTruthyHelper(['hi', null, false, 10, 0])
.then((data) => { console.log(data.length === 2); })
.catch((err) => { console.log(err); });

helpers.getTruthyHelper(['hi', null, false, 10, 0])
.then((data) => { console.log(data[0] === 'hi'); })
.catch((err) => { console.log(err); });

helpers.getTruthyHelper(['hi', null, false, 10, 0])
.then((data) => { console.log(data[1] === 10); })
.catch((err) => { console.log(err); });

helpers.getUniqueHelper([1, 2, 3], [1, 2, 4, 5])
.then((data) => { console.log(data.length === 3); })
.catch((err) => { console.log(err); });

helpers.getUniqueHelper([1, 2, 3], [1, 2, 4, 5])
.then((data) => { console.log(data[0] === 3); })
.catch((err) => { console.log(err); });

helpers.getUniqueHelper([1, 2, 3], [1, 2, 4, 5])
.then((data) => { console.log(data[1] === 4); })
.catch((err) => { console.log(err); });

helpers.getUniqueHelper([1, 2, 3], [1, 2, 4, 5])
.then((data) => { console.log(data[2] === 5); })
.catch((err) => { console.log(err); });

helpers.getUniqueHelper([1, 2, 3], [1, 2, 4, 3])
.then((data) => { console.log(data.length === 1); })
.catch((err) => { console.log(err); });

helpers.getUniqueHelper([1, 2, 3], [1, 2, 4, 3])
.then((data) => { console.log(data[0] === 4); })
.catch((err) => { console.log(err); });
