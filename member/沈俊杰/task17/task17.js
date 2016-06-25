// 1
function getInfo(name, age, sex){
    console.log('name:',name);
    console.log('age:', age);
    console.log('sex:', sex);
    console.log(arguments);
    arguments[0] = 'valley';
    console.log('name', name);
}

getInfo('hunger', 28, '男');
//'name:':'hunger'
//'age':28
//'sex':'男'
//['hunger',28,'男']
//'name:':'valley'
getInfo('hunger', 28);
//'name:':'hunger'
//'age':28
//'sex':undefined
//['hunger',28]
//'name:':'valley'
getInfo('男');
//'name:':'男'
//'age':undefined
//'sex':undefined
//['男']
//'name:':'valley'


// 2
function sumOfSquares(){
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i] * arguments[i];
  }
  return sum;
}


// 3
console.log(a); //undefined,声明前置,未赋值
var a = 1;
console.log(b); //报错,未声明该变量

// 4
sayName('world'); // 'hello world'
sayAge(10); //报错,声明了该变量,但未赋值,为undefined,undefined不能调用.
function sayName(name){
    console.log('hello ', name);
}
var sayAge = function(age){
    console.log(age);
};

// 5
function fn(){}
var fn = 3;
console.log(fn); // 3,覆盖了该变量

// 6
function fn(fn2){
   console.log(fn2); // 函数fn2
   var fn2 = 3;
   console.log(fn2); // 3
   console.log(fn); // 函数fn
   function fn2(){
        console.log('fnnn2');
    }
 }
fn(10);

// 7
var fn = 1;
function fn(fn){
    console.log(fn);
}
console.log(fn(fn)); // 报错,fn已经被1给覆盖了.

// 8
console.log(j);// undefined 声明未赋值
console.log(i);// undefined 声明未赋值
for(var i=0; i<10; i++){
    var j = 100;
}
console.log(i); // 10 没有局部作用域
console.log(j);// 100 没有局部作用域

// 9   注.()这个表示控制台输出的顺序
fn();
var i = 10;
var fn = 20;
console.log(i); // (3) 10,fn中的i是局部变量,影响不了外面
function fn(){
    console.log(i); // (1) undefined,声明未赋值
    var i = 99;
    fn2();
    console.log(i); // (2) 100,fn2中改变了i
    function fn2(){
        i = 100;
    }
}
// 10
var say = 0;
(function say(n){
    console.log(n); // 分别打印 10 9 8 7 6 5 4 3 2
    if(n<3) return;
    say(n-1);
}( 10 ));
console.log(say); // 0 立即执行函数中会创建一个独立的作用域,不影响外面
