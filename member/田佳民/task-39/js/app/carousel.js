define(['jquery'],function($){
      var carousel={
            open : function(){
                  this.init();
                  this.bind();
                  this.setBullet();
                  // autoPlay();
            },
            init:function(){
                        this.$imgCt=$('.img-ct');
                        this.$imgs=this.$imgCt.children();
                        this.$pre=$('.pre');
                        this.$next=$('.next');
                        this.imgWidth=this.$imgs.width();
                        this.imgCount =this.$imgs.size();
                        this.$bullet=$('.bullet');
                        this.$imgCt.prepend(this.$imgs.last().clone());
                        this.$imgCt.append(this.$imgs.first().clone());
                        this.imgRealCount = this.imgCount+2;
                        this.$imgCt.css({
                              left: 0-this.imgWidth,
                              width: this.imgRealCount*this.imgWidth
                        });
                        this.curIdx = 0;
                        this.isAnimate = false;
            },
            bind : function(){
                        var me=this;
                        me.$next.on('click',function(e){
                              e.preventDefault();
                             me.playNext();
                        });
                        me.$pre.on('click',function(e){
                              e.preventDefault();
                             me.playPre();
                        });
                        me.$bullet.find('li').on('click',function(e){
                              e.preventDefault();
                         var idx=$(this).index()
                         if(idx>me.curIdx){
                              me.playNext(idx-me.curIdx)
                         }
                         if(idx<me.curIdx){
                              me.playPre(me.curIdx-idx)
                         }
                        })
            },
            playNext : function(idx){
                              var me=this,
                                    idx = idx || 1;
                              if(!me.isAnimate){
                                  me.isAnimate=true;
                                  me.$imgCt.animate({left:'-='+me.imgWidth*idx},function(){
                                      me.curIdx = (me.curIdx + idx)%me.imgCount;
                                      if(me.curIdx===0){
                                          me.$imgCt.css({left:0-me.imgWidth});
                                          me.curIdx=0;
                                      }
                                      me.isAnimate=false;
                                      me.setBullet();
                                  });
                              }
            },
            playPre : function(idx){
                              var me=this,
                                    idx = idx || 1;
                            if(!me.isAnimate){
                            me.isAnimate=true;
                            me.$imgCt.animate({left:'+='+me.imgWidth*idx},function(){
                                me.curIdx=(me.imgCount+me.curIdx-idx)%me.imgCount;
                                if(me.curIdx===(me.imgCount-1)){
                                    me.$imgCt.css({left: 0-me.imgWidth*me.imgCount});
                                }
                                me.isAnimate=false;
                                me.setBullet();
                            });
                        }
            },
            setBullet : function(){
                  var me=this;
                  me.$bullet.children().removeClass('active');
                  me.$bullet.children().eq(me.curIdx).addClass('active');
            },
            autoPlay : function(){
                  var me=this;
                  me.clock=setInterval(function(){
                        me.playNext();
                  },6000);
            },
      };
      return carousel;
})
