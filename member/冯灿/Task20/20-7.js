// for (var i = 0; i < 5; i++) {
//   setTimeout(function() {
//     console.log('delayer:' + i);
//   }, 0);
//   console.log(i);
// }
//

for (var i = 0; i < 5; i++) {
  (function(num) {
    setTimeout(function() {
      console.log("dalayer:" + num);
    }, 0)
  })(i);
  console.log(i);
}
