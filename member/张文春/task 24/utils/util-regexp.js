function isValidUsername(str){
	var reg = /^\w{3,10}$/;
	return reg.test(str);
}
function isValidPassword(str){
	function isTrue(reg){
		if (reg.test(str)) {
			return 1;
		}else {
			return 0 ;
		}
	}
	var i = isTrue(/[a-z]+/)+isTrue(/[A-Z]+/)+isTrue(/[0-9]+/)+isTrue(/[_]+/);
	if (/^\w{5,15}$/.test(str) && i>1) {
		return true;
	}else{
		 return false;
	}
}

