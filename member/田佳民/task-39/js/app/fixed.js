define(['jquery'],function($){
      function Fixed(){
                  this.$node=$("#header .nav");
                  this.init();
      }
      Fixed.prototype={
                  constructor : Fixed,
                  init : function(){
                        this.isFix();
                        this.bind();
                  },
                  isFix : function(){
                        var scrollTop=$(window).scrollTop();
                        if(scrollTop>=250){
                              this.change();
                        }else{
                              this.unchange();
                        }
                  },
                  bind : function(){
                        var that=this;
                        $(window).on("scroll",function(e){
                              that.isFix();
                        });
                  },
                  change : function(){
                        this.$node.removeClass("before").addClass("after")
                  },
                  unchange : function(){
                        this.$node.removeClass("after").addClass("before")
                  }
      }
      return Fixed;
});
