var a = 1;
setTimeout(function() {
  a = 2;
  console.log(a);
}, 0);
var a;
console.log(a);
a = 3;
console.log(a);
