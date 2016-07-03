function trim(str){
	return str.replace(/^\s+|\s+$/g,"");
}
function hasClass(el,cls){
	var re=new RegExp("\\b"+cls+"\\b");
	if (el.className.search(re)===-1){
		return false;
	}
	return true;
}
function addClass(el,cls){
	if(el.length>1){
		var i;
		for(i=0;i<el.length;i++){
			if(!hasClass(el[i],cls)){
				el[i].className+=" "+cls;
			}
		}
	}else{
		if(!hasClass(el,cls)){
			el.className+=" "+cls;
		}
	}	
}

function removeClass(el,cls){
	if(el.length>1){
		var i;
		for(i=0;i<el.length;i++){
			if(hasClass(el[i],cls)){
				el[i].className=trim(el[i].className.replace(cls,""));
			}
		}
	}else{
		if(hasClass(el,cls)){
			el.className=trim(el.className.replace(cls,""));
		}
	}
}