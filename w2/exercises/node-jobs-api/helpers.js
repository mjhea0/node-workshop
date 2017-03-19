function add(num1, num2) {
  return num1 + num2;
}

function addAsync(num1, num2, cb) {
  cb(num1 + num2);
}

module.exports = {
  add,
  addAsync,
};
