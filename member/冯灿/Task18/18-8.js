function filterNumericInPlace(array) {
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] !== "number") {
      array.splice(i, 1);
      --i;
    }
  }
}
arr = ["a", "b", 1, 3, 4, 5, "b", 2];
//对原数组进行操作，不需要返回值
filterNumericInPlace(arr);
console.log(arr) // [1,3,4,5,2]
