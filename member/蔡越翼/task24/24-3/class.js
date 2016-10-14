function addClass(el,cls){
    if(!hasClass(el,cls)){
        el.className += " "+cls;
    }
}
function hasClass(el,cls){
    var reg = new RegExp("\\b"+cls+"\\b");
    if(!reg.test(el.className)){
        return false;
    }else{
        return true;
    }
}
function removeClass(el,cls){
    var reg = new RegExp("\\b"+cls+"\\b");
    var temp = el.className.replace(reg,"").replace(/^\s+|\s$/g,"").replace(/\s{2,}/," ");
    el.className = temp;
}