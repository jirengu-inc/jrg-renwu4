function find(array, aim) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === aim) {
      return i;
    }
  }
  return -1;
}
var arr = ["test", 2, 1.5, false]
find(arr, "test") // 0
find(arr, 2) // 1
find(arr, 0) // -1
