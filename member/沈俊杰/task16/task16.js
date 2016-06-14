// 1
function isNumber(el){
    return !isNaN(parseFloat(el)) && isFinite(el);
}
function isString(el){
    return typeof el === "string";
}
function isBoolean(el){
    return typeof el === "boolean";
}
function isFunction(el){
    return typeof el === "function";
}

// 2
console.log(1+1); // 2
console.log("2"+"4");  // "24"
console.log(2+"4"); // "24"
console.log(+new Date()); // 当前日期的时间戳
console.log(+"4"); // 4

// 3
var a = 1;
a+++a; // (a++) + a

typeof a+2; // "number2"

// 4
var arr = [3,4,5];
arr.forEach(function(value){
  console.log(value * value);
})

// 5
var obj = {
  name: 'hunger',
  sex: 'male',
  age: 28
};

for (var key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(key + ":" + obj[key]);
  }
}

// 6
console.log(a); //undefined,变量声明前置,但未赋值
var a = 1;
console.log(a); // 1
console.log(b); // 报错,未声明
