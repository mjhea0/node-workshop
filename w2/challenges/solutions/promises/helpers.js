function getLastCharHelper(str) {
  return new Promise((resolve, reject) => {
    if (typeof str === 'string' || str instanceof String) {
      resolve(str.charAt(str.length - 1));
    }
    else {
      reject('Please provide a string');
    }
  });
}

function findCharHelper(str, int) {
  return new Promise((resolve, reject) => {
    if (typeof str === 'string' || str instanceof String) {
      resolve(str.charAt(int));
    }
    else {
      reject('Please provide a string');
    }
  });
}

function calculateHelper(num1, num2, str) {
  return new Promise((resolve, reject) => {
    if (str === 'add') resolve(num1 + num2);
    if (str === 'sub') resolve(num1 - num2);
    if (str === 'mult') resolve(num1 * num2);
    if (str === 'div') resolve(num1 / num2);
  });
}

function repeaterHelper(str, int) {
  return new Promise((resolve, reject) => {
    if (typeof str === 'string' || str instanceof String) {
      let result = '';
      for (var i = 0; i < 3; i++) {
        result += str;
      }
      resolve(result);
    }
    else {
      reject('Please provide a string');
    }
  });
}

function reverseWordHelper(str) {
  return new Promise((resolve, reject) => {
    if (typeof str === 'string' || str instanceof String) {
      resolve(str.split('').reverse().join(''));
    }
    else {
      reject('Please provide a string');
    }
  });
}

function factorialHelper(num) {
  return new Promise((resolve, reject) => {
    var result = 1;
    var multiplier = num;
    for (var i = 1; i < num; i++) {
      result = result * multiplier;
      multiplier = multiplier - 1;
    }
    resolve(result);
  });
}

function longestStringHelper(phrase) {
  return new Promise((resolve, reject) => {
    if (typeof phrase === 'string' || phrase instanceof String) {
      var phraseArray = phrase.split(' ');
      var longest = phraseArray[0];
      for (var i = 1; i < phraseArray.length; i++) {
        if (phraseArray[i].length > longest.length) {
          longest = phraseArray[i];
        }
      }
      resolve(longest);
    }
    else {
      reject('Please provide a string');
    }
  });
}

function getTruthyHelper(arr) {
  return new Promise((resolve, reject) => {
    const results = arr.filter((el) => { return el; });
    resolve(results);
  });
}

function getUniqueHelper(arr1, arr2) {
  return new Promise((resolve, reject) => {
    arr2.forEach((el) => {
      if (arr1.indexOf(el) === -1) {
        arr1.push(el);
      } else {
        arr1.splice(arr1.indexOf(el), 1);
      }
    });
    resolve(arr1);
  });
}


module.exports = {
  getLastCharHelper,
  findCharHelper,
  calculateHelper,
  repeaterHelper,
  reverseWordHelper,
  factorialHelper,
  longestStringHelper,
  getTruthyHelper,
  getUniqueHelper
};
