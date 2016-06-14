// 1
function arrPush(arr,item){
  if ( !Array.isArray(arr) ) {
    throw arr + " is not Array";
  }
  var args = Array.prototype.slice.call(arguments,1),
      argsLength = args.length;
  for (var i = 0; i < argsLength; i++) {
    arr.splice(arr.length,0,args[i]);
  }
  return arr.length;
}

function arrPop(arr){
  if ( !Array.isArray(arr) ) {
    throw arr + " is not Array";
  }
  return arr.splice(arr.length - 1,1)[0];
}

function arrShift(arr){
  if ( !Array.isArray(arr) ) {
    throw arr + " is not Array";
  }
  return arr.splice(0,1)[0];
}

function arrUnshift(arr){
  if ( !Array.isArray(arr) ) {
    throw arr + " is not Array";
  }
  var args = Array.prototype.slice.call(arguments,1),
      argsLength = args.length;
  for (var i = argsLength -1; i >= 0; i--) {
    arr.splice(0,0,args[i]);
  }
  return arr.length;
}
// 2
function getTpl(data){
  var arr = ["<dl class='product'>"];
  arr.push("<dt>"+data.name+"</dt>");
  for (var i = 0,length = data.styles.length; i < length; i++) {
    arr.push("<dd>"+data.styles[i]+"</dd>");
  }
  arr.push("</dl>");
  return arr.join("");
};

// 3
function arrFind(arr,value){
  if ( !Array.isArray(arr) ) {
    throw arr + " is not Array";
  }
  return arr.indexOf(value);
}

// 4
function arrFilterNumeric(arr){
  if ( !Array.isArray(arr) ) {
    throw arr + " is not Array";
  }
  var arrtmp = [];
  for (var i = 0,length = arr.length; i < length; i++) {
    if (typeof arr[i] === "number" && arr[i] === arr[i] && isFinite(arr[i])) {
      arrtmp.push(arr[i]);
    }
  }
  return arrtmp;
}

// 5
function addClass(obj,className){
  var objArrTmp = obj.className.split(" ");
  var ArrTmp = className.split(" ");
  for (var i = 0; i < ArrTmp.length; i++) {
    if (objArrTmp.indexOf(ArrTmp[i]) === -1) {
      objArrTmp.push(ArrTmp[i]);
    }
  }
  obj.className = objArrTmp.join(" ");
}

function removeClass(obj,className){
  var objArrTmp = obj.className.split(" ");
  var ArrTmp = className.split(" ");
  for (var i = 0; i < ArrTmp.length; i++) {
    if (objArrTmp.indexOf(ArrTmp[i]) !== -1) {
      objArrTmp.splice(objArrTmp.indexOf(ArrTmp[i]),1);
    }
  }
  obj.className = objArrTmp.join(" ");
}

// 6
function camelize(str){
  var arrTmp = str.split("-");
  for (var i = 1; i < arrTmp.length; i++) {
    var tmp = arrTmp[i].split("");
    arrTmp[i] = tmp[0].toLocaleUpperCase() + tmp.slice(1).join("");
  }
  return arrTmp.join("");
}

// 7
arr = ["a", "b"];
arr.push( function() { alert(console.log('hello hunger valley')) } );
arr[arr.length-1]()  //这个函数的返回值为undefined,但是会在控制台打印'hello hunger valley',弹框也是undefined.

// 8
function filterNumericInPlace(arr){
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      arr.splice(i,1);
    }
  }
}

// 9
function ageSort(arr){
  return arr.sort(function(a,b){
    return a.age - b.age;
  })
}

// 10
// 版本一
function filter1(arr,fn){
  var arrTmp = [];
  arr.forEach(function(value){
    fn(value) && arrTmp.push(value);
  })
  return arrTmp;
}
// 版本二
function filter2(arr,fn){
  return arr.filter(fn);
}

// 11
function ucFirst(str){
  var tmp = str.split("");
  return tmp[0].toLocaleUpperCase() + tmp.slice(1).join("");
}

// 12
function truncate(str, maxlength){
  var tmp = str.split("");
  var arrTmp = tmp.slice(0,maxlength);
  if(tmp.length > maxlength) arrTmp.push("...");
  return arrTmp.join("");
}

// 13
function limit2(num){
  return num.toFixed(2);
}

// 14
function getRandomArbitrary(min,max){
  return  min + (max- min)* Math.random();
}

// 15
function getRandomInt(min, max) {
  return Math.round(min + (max-min)*Math.random());
}

// 16
function getRandomArry(min,max,len){
  var arr = new Array();
  for (var i = 0; i < len, i ++){
    arr.push(min + (max- min)* Math.random())
  }
  return arr;
}
