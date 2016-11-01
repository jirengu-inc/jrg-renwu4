function getChsDate(data) {
  var splitted = data.split("-");
  console.log(splitted);
  var optional = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二', '十三', '十四', '十五',
  '十六', '十七', '十八', '十九', '二十', '二十一', '二十二', '二十三', '二十四', '二十五', '二十六', '二十七', '二十八', '二十九', '三十', '三十一'];
  var year = "";
  for (var i = 0; i < splitted[0].length; i++) {
    year += optional[parseInt(splitted[0][i])];
  }
  var month = optional[parseInt(splitted[1])];
  var day = optional[parseInt(splitted[2])];
  return year + "年" + month + "月" + day + "日";
}
var str = getChsDate('2015-01-08');
console.log(str); // 二零一五年一月八日
