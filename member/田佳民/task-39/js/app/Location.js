define(['jquery'],function($){
      function Location(){
            this.sqs=$(".sq");
            this.nav=$("#header").find($(".banner a"));
            this.bind();
      }
      Location.prototype={
            constructor : Location,
            bind : function(){
                  var currentId="";
                  var self=this;
                  $(window).on("scroll",function(e){
                        self.sqs.each(function(){
                              var that=$(this);
                              var scrollTop=$(window).scrollTop();
                              if(scrollTop >=that.offset().top-200){
                                     currentId = "#" + that.attr("id");
                              }
                        });
                        self.nav.each(function(e){
                              var that=$(this);
                              if(currentId!==that.attr("href") && that.hasClass("active")){
                                    that.removeClass('active');
                              }else if (currentId==that.attr("href") && !that.hasClass("active")) {
                                    that.addClass('active');
                              }
                        })
                  });
            }
      }
      return Location;
});
