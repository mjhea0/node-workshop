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

module.exports = {
  getLastCharHelper,
};
