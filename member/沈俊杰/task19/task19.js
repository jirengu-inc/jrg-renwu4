// 1
function getIntv(time) {

	var DAY_TIMESTAMP = 60 * 60 * 24 * 1000,
	    HOUS_TIMESTAMP = 60 * 60 * 1000,
	    MIN_TIMESTAMP = 60 * 1000,
	    SEC_TIMESTAMP = 1000;

	var time = +new Date(time),
            now = +new Date(),
	    intv = time - now,
	    day = Math.floor(intv / DAY_TIMESTAMP),
	    hous = Math.floor((intv - day * DAY_TIMESTAMP) / HOUS_TIMESTAMP);
	    min = Math.floor((intv - day * DAY_TIMESTAMP - hous * HOUS_TIMESTAMP) / MIN_TIMESTAMP);
	    sec = Math.floor((intv - day * DAY_TIMESTAMP - hous * HOUS_TIMESTAMP - min * MIN_TIMESTAMP) / SEC_TIMESTAMP);

	return "还有" + day + "天" + hous + "小时" + min + "分钟" + sec + "秒";
}

// 2
function getChsDate(time) {
	var time = new Date(time),
	    year = _num2char(time.getFullYear().toString()),
	    mon = _num2char((time.getMonth() + 1).toString(), true),
	    day = _num2char((time.getDate()).toString(), true);

	return year + "年" + mon + "月" + day + "日";

	function _num2char(str, boolen) {
		var _arr = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
		var _s = "";
		for (var i = 0, length = str.length; i < length; i++) {
			if (+str >= 10 && boolen) {
				if (i === 0) {
					_s += (str.charAt(i) === "1" ? "" : _arr[str.charAt(i)]) + _arr[10];
				} else {
					_s += (str.charAt(i) === "0" ? "" : _arr[str.charAt(i)]);
				}
			} else {
				_s += _arr[str.charAt(i)];
			}
		}
		return _s;
	}

}
// 3
function getLastNDays(num) {
	var now = +new Date(),
	    intv = num * 24 * 60 * 60 * 1000,
	    lDayTimestamp = now - intv,
	    lDayObj = new Date(lDayTimestamp);

	return lDayObj.getFullYear() + "-" + (lDayObj.getMonth() + 1) + "-" + lDayObj.getDate();
}

// 4
var Runtime = (function() {
	var startTime = 0,
	    endTime = 0;
	return {
		start: function() {
			startTime = +new Date();
		},
		end: function() {
			endTime = +new Date();
		},
		get: function() {
			return endTime - startTime;
		}
	};
}());

// 5
function walkWays(n) {
	if (n === 1) return 1;
	if (n === 2) return 2;

	return walkWays(n - 1) + walkWays(n - 2);

}

// 6-8 参照了jquery的extend
function extend(isDeep, target, clone) {
	var i, name, src, copy, copyIsArray, options
	length = arguments.length;

	if (typeof target !== "object" && typeof target !== "function") target = {};

	for (i = 2; i < length; i++) {

		clone = arguments[i];

		if (clone !== null) {

			for (name in clone) {

				src = target[name];
				copy = clone[name];

				if (src === copy) {
					continue;
				}

				if (isDeep && copy && typeof copy === "object") {

					if (Array.isArray(copy)) {
						src = (src && Array.isArray(src) ? src : []);
					} else {
						src = (src && typeof src === "object" ? src : []);
					}

					target[name] = extend(true, src, copy);

				} else if (copy !== undefined) {

					target[name] = copy;

				}
			}
		}
	}
	return target;
}
