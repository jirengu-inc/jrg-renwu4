// function walkWay(n) { // 传入楼梯的台阶数
//   if (n === 1) {
//     return 1;
//   } else if (n === 2) {
//     return 2;
//   } else {
//     return arguments.callee(n - 1) + arguments.callee(n - 2);
//   }
// }
function walkWay(n) { // 传入楼梯的台阶数
  var first = 1,
    second = 2,
    result = 0;
  for (var i = 2; i < n; i++) {
    result = first + second;
    first = second;
    second = result;
  }
  return result;
}
console.log(walkWay(200));
