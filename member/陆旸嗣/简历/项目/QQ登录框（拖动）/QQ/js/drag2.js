//封装一个提取calssname的函数
function getClassName(classNam,parent){
  var oparent=parent?document.getElementById(parent):document,
      eles=[],
      elements=oparent.getElementsByTagName('*');

  for(var i=0,l=elements.length;i<l;i++){
    if(elements[i].className==classNam){
      eles.push(elements[i]);
    }
  }
  return eles;
}


window.onload=drag;//不懂？？？？

function drag(){
  var onTitle=getClassName('boxtop')[0];
  onTitle.onmousedown=fnDown;
  var onClose=getClassName('close')[0];
  onClose.onclick=fnClose;
  var onSlect=getClassName('slectbox')[0];
  onSlect.onclick=fnShow;
}
//拖动
function fnDown(event){
  event=event||window.event;
  var all=document.getElementById('all')
  dX=event.clientX-all.offsetLeft,
  dY=event.clientY-all.offsetTop,
  document.onmousemove=function move(event){
    event=event||window.event;
    fnMove(event,dX,dY);
  }
  document.onmouseup=function(){
    document.onmousemove=null;
    document.onmouseup=null;

  }
}

function fnMove(e,x,y){
  var all=document.getElementById('all')
      l=e.clientX-x;
      t=e.clientY-y;
      winW=document.documentElement.clientWidth||document.body.clientWidth;
      winT=document.documentElement.clientHeight||document.body.clientHeight;
      maxW=winW-all.offsetWidth;
      maxT=winT-all.offsetHeight;
      if(l<0){
        l=0;
      }else if(l>maxW){
        l=maxW-10;
      }
      if (t<0) {
        t=10;
      }else if(t>maxT){
        t=maxT;
      };
      all.style.left=l+'px';
      all.style.top=t+'px';

}
//关闭
function fnClose(){
  var all=document.getElementById('all')
  all.style.display='none';
}
//下拉菜单出现
function fnShow(e){
  e=e||wondow.event;
  if (e.stopPropagation) {
    e.stopPropagation();
  }else{
    e.cancelBubble=true;
  };
  var downlist=getClassName('downlist')[0];
  downlist.style.display='block';
}
//点击浏览器消失选择菜单
document.onclick=function(){
  var downlist=getClassName('downlist')[0];
  downlist.style.display='none';
}
