var str = 'hello  "hunger" , hello "world"';
var pat = /".*?"/g;
console.log(str.match(pat));
