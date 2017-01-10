function addOne(num, callback) {
  if (typeof num === 'number') {
    var results = num + 1;
    callback(null, results);
  } else {
    callback('pass in an integer', null);
  }
}

function addTwo(num) {
  return num + 2;
}

module.exports = {
  addOne: addOne,
  addTwo: addTwo
};
