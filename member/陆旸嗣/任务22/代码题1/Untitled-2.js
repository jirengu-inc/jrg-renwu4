var a =document.querySelector(".ct");
var b=a.children;
for(var i=0;i<b.length;i++){
  b[i].onclick=function(){     
        console.log(this.innerText);
  };
}
