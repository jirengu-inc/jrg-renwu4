function hasClass(ele,cls) {
	var regex=new RegExp("\\b"+cls+"\\b");
	if(ele.className.match(regex)) {
		return true;
	}else {
		return false;
	}
}
function addClass(ele,cls) {
	if(ele.length>0) {
		for(i=0;i<length;i++) {
			singleAddClass(ele[i],cls);
		}
	
	}else {
			singleAddClass(ele,cls);
		}
}
function removeClass(ele,cls) {
	if(ele.length>0) {
		for(i=0;i<ele.length;i++) {
			singleRemoveClass(ele[i],cls);
		}
	}else {
		singleRemoveClass(ele,cls)
	}
}
function singleAddClass(ele,cls) {
	if(hasClass(ele,cls)) {
		return true
	}else {
		ele.className+=" "+cls
	}
}
function singleRemoveClass(ele,cls) {
	var reg=new RegExp("\\b"+cls+"\\b","g");
	ele.className=ele.className.replace(reg,"")
}