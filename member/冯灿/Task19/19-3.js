function getLastNDays(days) {
  var resultDay = new Date(Date.now() - days * 86400000);
  return resultDay.toLocaleDateString();
}
var lastWeek =  getLastNDays(7); // ‘2016-01-08’
var lastMonth = getLastNDays(30); //'2015-12-15'
console.log(lastWeek);
console.log(lastMonth);
