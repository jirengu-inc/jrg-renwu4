var reg = /<[^>]+>/g;
// var reg = /<(?=\w)[\w\W]*?>/g;
var str = '<> <a href="/"> <input type="radio" checked> <b>';
console.log(str.match(reg));  // '<a href="/">', '<input type="radio" checked>', '<b>'
