define(['jquery'],function($){
      function LazyLoad(){
              this.scrollShow();       // 先执行一次,加载好可视区的图片
              this.init();
      }
      LazyLoad.prototype={
            constructor:LazyLoad,
           init : function(){
                 this.bind();
           },
           bind : function(){
                 var that=this,
                       lock;            //声明一个锁
                 $(window).on('scroll',function(){  //函数节流
                       if(lock){
                             clearTimeout(lock)
                       }
                             lock=setTimeout(function(){
                                 that.scrollShow();
                           },500);
                 });
           },
           scrollShow : function(){      //判断是否加载图片
                 var that=this;
                 console.log( $('#contact img'));
                 $('#about img').each(function(){
                     var $img =$(this);
                     if(that.isShow($img)){
                         that.showImg($img);
                     }
                 });
           },
           isShow : function($el){      //判断图片是否进入可视窗口
                 var scrollTop = $(window).scrollTop(),
                     winH = $(window).height(),
                     boxH = $el.offset().top;
                 if(boxH<winH+scrollTop){
                      return true;
                 }else{
                     return false;
                 }
           },
           showImg : function($el){      //加载图片方法
                 $el.attr('src' , $el.attr('data-src'));
           }
      }
      return LazyLoad;
});
