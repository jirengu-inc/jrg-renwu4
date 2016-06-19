// 1
function trim(str){
	return str.replace(/^\s+|\s+$/g,"");
}

// 2
function addClass(el, cls){
    if (!hasClass(el, cls)){
    	el.className += " " + cls;
    }
}
function hasClass(el, cls){
    var reg = new RegExp("\\b" + cls + "\\b");
    return reg.test(el.className);
}
function removeClass(el, cls) {
    var reg = new RegExp("\\b" + cls + "\\b"),
        tmp = el.className.replace(reg,"").replace(/\s{2,}/g," ");
    el.className = trim(tmp);
}

// 3
function isEmail(str){
	var reg = /^\w+(\.\w+)*@\w+(\.\w+)+$/;
	return reg.test(str);
}

// 4
function isPhoneNum(str){
    var reg = /^1\d{10}$/;
    return exp.test(str);
}

// 5
function isValidUsername(str){
	var reg = /\w{6,20}/;
	return reg.test(str);
}

// 6 
function isLegalPassword(str){
    if(str.length < 6 || str.length > 16){
        return false;
    }
    //如果包含上述四种以外的字符，false
    if(/[^A-Za-z_0-9]/.test(str)){
        return false;
    }

    //如果全为大写、小写、下划线、数字, false
    if( /(^[a-z]+$)|(^[A-Z]+$)|(^_+$)|(^\d+$)/g.test(str) ){
        return false;
    }
    return true;
}

// 7
function color(str){
	var reg = /#[0-9a-fA-F]{6}/g;
	return str.match(reg); 
}

// 8
var str = 'hello "hunger" , hello "world"';
var pat =  /".*"/g;
str.match(pat);  
//输出"hunger" , hello "world",因为是贪婪模式，所以会在能够完成匹配的前提下，匹配更多的字符.

//输出"hunger", "world"
var str = 'hello "hunger" , hello "world"';
var pat =  /".*?"/g;
str.match(pat);

// 9
var str = '.. <!-- My -- comment \n test --> ..  <!----> .. '
var reg = /<!--(.|\s)*?-->/g;
str.match(reg);

// 10
var reg = /<[a-z].*?>/g;
var str = '<> <a href="/"> <input type="radio" checked> <b>'
str.match(reg);