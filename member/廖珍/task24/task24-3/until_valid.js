function regName(str) {
	var regex=/^[a-zA-Z0-9]{3,10}$/;
	return regex.test(str);
}
function regPassword(str){
    if (str.length < 6 || str.length > 15) {
        return false;
    }
    if (/[^A-Za-z_0-9]/.test(str)) {
        return false;
    }
    if (/(^\d+$)|(^[a-z]+$)|([A-Z]+$)|(^_+$)/.test(str)) {
        return false;
    }
    return true;
}