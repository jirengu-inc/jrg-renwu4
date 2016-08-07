arr = ["a", "b"];
arr.push(function() {
  console.log('hello hunger valley');
});
arr[arr.length - 1]() // ?
