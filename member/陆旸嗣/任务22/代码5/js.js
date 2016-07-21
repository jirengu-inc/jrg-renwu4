
var btnShow=document.getElementById("click");
var box=document.getElementById("box");
var wrap=document.getElementById("wrap");
var closeX=document.querySelector(".closeX");
var closeBtn=document.querySelector(".close-btn");
console.log(closeX);
btnShow.addEventListener("click",show);
closeX.addEventListener("click",close);
closeBtn.addEventListener("click",close);
wrap.addEventListener("click",close);
box.addEventListener("click",stopBubble);

function show(){
    wrap.style="display"+":"+"block";
}
function close(){
    wrap.style="display"+":"+"none";
}
function stopBubble(e) {
    if ( e && e.stopPropagation ) {
        e.stopPropagation();
    } else { 
        window.event.cancelBubble = true;
    }
}