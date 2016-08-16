// var fnArr = [];
// for (var i = 0; i < 10; i++) {
//   fnArr[i] = function() {
//     return i;
//   };
// }
// console.log(fnArr[3]());

// First Solution
var fnArr1 = [];
for (var i = 0; i < 10; i++) {
  fnArr1[i] = function(num) {
    return function() {
      return num;
    }
  }(i);
}
console.log(fnArr1[3]());

// Second Solution
var fnArr2 = [];
for (var i = 0; i < 10; i++) {
  (function(num) {
    fnArr2[i] = function() {
      return num;
    }
  })(i);
}
console.log(fnArr2[3]());
