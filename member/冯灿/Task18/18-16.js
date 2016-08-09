function getRandStr(len){
  var optional = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", result = "";
  for (var i = 0; i < len; i++) {
    result += optional[Math.floor(Math.random() * 62)];
  }
  return result;
}
console.log(getRandStr(10));
