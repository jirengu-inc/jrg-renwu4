function filter(array, func) {
  for (var i = 0; i < array.length; i++) {
    if (!func(array[i])) {
      array.splice(i, 1);
      --i;
    }
  }
  return array;
}

function isNumeric(el) {
  return typeof el === 'number';
}
arr = ["a", 3, 4, true, -1, 2, "b"];
//对原数组进行操作，不需要返回值
arr = filter(arr, isNumeric);
console.log(arr) // [1,3,4,5,2]
arr = filter(arr, function(val) {
  return typeof val === "number" && val > 0
}); // arr = [3,4,2] 过滤出大于0的整数
console.log(arr);
