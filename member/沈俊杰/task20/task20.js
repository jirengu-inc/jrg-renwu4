// 1
var fnArr = [];
for (var i = 0; i < 10; i++) {
	fnArr[i] = function() {
		return i;
	};
}
console.log(fnArr[3]()); //输出10;

// 版本1
var fnArr = [];
for (var i = 0; i < 10; i++) {
	fnArr[i] = (function(n) {
		return function() {
			return n;
		}
	})(i)
}
// 版本2
var fnArr = [];
for (var i = 0; i < 10; i++) {
	var fn = function() {
		return arguments.callee.idx
	};
	fn.idx = i
	fnArr[i] = fn;
}

// 2
var Car = (function() {

	var speed = 0;

	function setSpeed(num) {
		speed = num;
	}

	function getSpeed() {
		return speed;
	}

	function accelerate() {
		speed += 10;
	}

	function decelerate() {
		speed -= 10;
		if (speed < 0) speed = 0;
	}

	function getStatus() {
		var status = "";
		if (speed > 0) {
			status = "running";
		} else {
			status = "stop";
		}
		return status;
	}
	return {
		setSpeed: setSpeed,
		getSpeed: getSpeed,
		accelerate: accelerate,
		decelerate: decelerate,
		getStatus: getStatus
	}
})();

// 3
function _setInterval(fn, intv) {
	setTimeout(function() {
		fn();
		_setInterval(fn, intv);
	}, intv);
}

// 4 
function getMinItvl() {
	var i = 0;
	var start = +new Date();
	var clock = setTimeout(function() {
		i++;
		if (i === 1000) {
			clearInterval(clock);
			console.log((+new Date() - start) / i); //这里只能做到单纯的打印么，能否做到 var MinItvl = getMinItVL() 这样的形式
		}
		clock = setTimeout(arguments.callee, 0);
	}, 0);
}

// 5
var a = 1;
setTimeout(function() {
	a = 2;
	console.log(a); // (3) 2
}, 0);
var a;
console.log(a); // (1) 1
a = 3;
console.log(a); // (2) 3

// 6
var flag = true;
setTimeout(function() {
	flag = false;
}, 0)
while (flag) {}
console.log(flag); //不会输出

// 7
for (var i = 0; i < 5; i++) {
	(function(n) {
		setTimeout(function() {
			console.log('delayer:' + n);
		}, 0);
	})(i);
}