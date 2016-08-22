function getAvgAndMinTimeGranularity() {
  var timeGranularities = [];
  var times = 0;
  var timeIndex = setTimeout(function() {
    var onceStartTime = Date.now();
    if (++times < 1000) {
      timeIndex = setTimeout(arguments.callee, 0);
      var onceEndTime = Date.now();
      timeGranularities.push(onceEndTime - onceStartTime);
    } else {
      clearTimeout(timeIndex);
      console.log("The average time granularity: ", (function() {
        var sum = 0;
        for (var i = 0; i < timeGranularities.length; i++) {
          sum += timeGranularities[i];
        }
        return sum / timeGranularities.length;
      })().toPrecision(3));
      console.log("The minimam time granularity: ", Math.min.apply(Math, timeGranularities).toPrecision(3));
    }
  }, 0);
}

getAvgAndMinTimeGranularity();
