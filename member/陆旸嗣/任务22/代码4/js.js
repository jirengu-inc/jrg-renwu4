var wrap=document.getElementById("wrap-title");
var btn=wrap.children;
var wrapWord=document.getElementById("wrap-word")
var word=wrapWord.children;
wrap.addEventListener("click",show);

function addClass(Tool,Cla){
    var CN=Tool.className;

    if (CN.indexOf(Cla) >= 0) {
        return;
    }
    CN=CN+" "+Cla;
    Tool.className=CN;
}
function removeClass(Tool,Cla){
    var CN=Tool.className;
    var CN2=CN.replace(Cla,"");
    CN2 = CN2.replace(/\s+/g, ' ');
    //var newCN=CN2.replace(" ","");
    Tool.className=CN2;
}
//增加 删除class
function show(e){
    var tool=e.target;
    console.log(e.target);
    for(var i=0;i<btn.length;i++){
        if(btn[i]===tool){
           addClass(tool,"btn-on");
           addClass(word[i], "word-show");
           var a=i; 
        }else{
           removeClass(btn[i],"btn-on");
           removeClass(word[i], "word-show");
        }
    }
    return a;
}



