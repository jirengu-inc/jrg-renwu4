var flag = true;
setTimeout(function() {
  flag = false;
}, 0)
while (flag) {}
console.log(flag);
