function filterNumeric(array) {
  var numeric = [];
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      numeric.push(array[i]);
    }
  }
  return numeric;
}
arr = ["a", "b", 1, 3, 5, "b", 2];
newarr = filterNumeric(arr); //   [1,3,5,2]
console.log(newarr);
