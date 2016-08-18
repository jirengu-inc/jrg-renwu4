function randomNumArr(len, min, max) {
  var arr = [];
  for (var i = 0; i < len; i++) {
    arr.push(Math.floor(Math.random() * (max - min + 1) + min));
  }
  return arr;
}
