function getIntv(date) {
  var inputDate = Date.parse(date) - 28800000;//时区偏差
  var currentDate = new Date().getTime();
  var diffs;
  if (currentDate > inputDate) {
    diffs = new Date(currentDate - inputDate);
    return "距指定时间" + new Date(inputDate).toLocaleString() + "已过去" + (diffs.getUTCFullYear() - 1970) + "年" + diffs.getUTCMonth() + "月" + (diffs.getUTCDate() - 1) + "天" + diffs.getUTCHours() + "小时" + diffs.getUTCMinutes() + "分" + diffs.getUTCSeconds() + "秒。";
  } else if (currentDate < inputDate) {
    diffs = new Date(inputDate - currentDate);
    return "距指定时间" + new Date(inputDate).toLocaleString() + "还相差" + (diffs.getUTCFullYear() - 1970) + "年" + diffs.getUTCMonth() + "月" + (diffs.getUTCDate() - 1) + "天" + diffs.getUTCHours() + "小时" + diffs.getUTCMinutes() + "分" + diffs.getUTCSeconds() + "秒。";
  } else {
    return "Lucky!";
  }
}
console.log(getIntv("2016-08-08"));
console.log(getIntv("2016-08-09"));
