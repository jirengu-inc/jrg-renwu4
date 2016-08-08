var Runtime = (function() {
  var sta, end;
  var obj = {
    start: function() {
      sta = Date.now();
    },
    end: function() {
      end = Date.now();
    },
    get: function() {
      return end - sta;
    }
  };
  return obj;
}());
Runtime.start();
for (var i = 0; i < 100; i++) {
  console.log(i);
}
Runtime.end();
console.log(Runtime.get());
