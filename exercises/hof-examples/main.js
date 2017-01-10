// *** before *** //

// function createArray(cb) {
//   var arr = [];
//   for (var i = 1; i <= 100; i++) {
//      arr.push(i);
//   }
//   setTimeout(function() {
//     return arr;
//   }, 5000);
// }
//
// function getEvenNumbers(arr) {
//   console.log(arr);
//   return arr.filter(function(num){
//     return num % 2 === 0;
//   });
// }
//
// var numberArray = createArray();
// // no blocking :(
// var evenNumberArray = getEvenNumbers(numberArray);
// console.log(evenNumberArray.length);

// *** after *** //

function createArray(cb) {
  var arr = [];
  for (var i = 1; i <= 100; i++) {
     arr.push(i);
  }
  setTimeout(function() {
    cb(arr);
  }, 5000);
}

function getEvenNumbers(arr) {
  console.log(arr);
  return arr.filter(function(num){
    return num % 2 === 0;
  });
}

createArray(function(res) {
  var evenNumberArray = getEvenNumbers(res);
  console.log(evenNumberArray.length);
});
