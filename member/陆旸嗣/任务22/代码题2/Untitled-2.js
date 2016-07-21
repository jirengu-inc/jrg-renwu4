var a =document.querySelector(".ct");
var b=a.children;

function Log(){
for(var i=0;i<b.length;i++){
  b[i].onclick=function(){     
        console.log(this.innerText);
  };
}
}
//在第一行增加
function setStar(){
	var newWord=document.getElementsByClassName("ipt-add-content")[0].value;
	if(newWord!=""&&newWord[0]!=" "){
	var newLi=document.createElement("li");
	var newNode=document.createTextNode(newWord);
	newLi.insertBefore(newNode,newLi.firstChild);
	a.insertBefore(newLi,a.firstChild);
	}
}
//在后面增加
function setEnd(){
	var newWord=document.getElementsByClassName("ipt-add-content")[0].value;
	if(newWord!=""&&newWord[0]!=" "){
		var newLi=document.createElement("li");
		var newNode=document.createTextNode(newWord);
		newLi.appendChild(newNode);
		a.appendChild(newLi);
	}

}

var btnAddEnd=document.getElementById("btn-add-end");
var btnAddStart=document.getElementById("btn-add-start");
btnAddStart.addEventListener("click",setStar);
btnAddEnd.addEventListener("click",setEnd);
a.addEventListener("click",Log);


console.log(btnAddStart);
