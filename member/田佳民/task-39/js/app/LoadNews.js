define(['jquery'],function($){
      function LoadNews(){
            this.ct=$('.ct');
            this.load=($('.load'));
            this.init();
      };
      LoadNews.prototype={
            init : function(){
                  this.curpage=1;
                  this.pernum=10;
                  this.bind($('.item'));
                  this.arrH=[];
                  this.getData();
            },
            getData : function(){
                  var that=this;
                  $.ajax({
                      url:'http://platform.sina.com.cn/slide/album_tech',
                      dataType:'jsonp',
                      jsonp:'jsoncallback',
                      data:{
                          app_key:'1271687855',
                          num:that.pernum,
                          page:that.curpage,
                          size:'img'
                      },
                      success:function(res){
                          if(res && res.status.code==='0'){
                              that.addElements(res);
                              console.log(that.ct)
                              that.Wdrop=$('.item');
                              that.waterFall(that.Wdrop);
                              that.curpage++;
                          }else{
                              alert('error!');
                          }
                      }
                  });
            },
            addElements : function($node){
                  var that=this;
                  $.each($node.data,function(k,val){
                      var $li=$('<li>').addClass('item').appendTo(that.ct);
                      var $a=$('<a>').attr('href',val.url).appendTo($li);
                      var $img=$('<img>').attr('src',val.img_url).appendTo($a);
                      var $h3=$('<h3>').text(val.short_name).appendTo($li);
                      var $p=$('<p>').text(val.short_intro).appendTo($li);
                });
            },
            isVisible : function($el){
                  var winH = $(window).height(),
                      scrollTop = $(window).scrollTop(),
                      offsetH = $el.offset().top;
                  if(offsetH < winH+scrollTop ){
                      return true;
                  }else{
                      return false;
                  }
            },

            waterFall : function($node){
                  var that=this;
                  var $wrapW=$node.outerWidth(true), //获取瀑布流每个图片包裹层的宽度
                         $cols =Math.floor($(window).width()/$wrapW);//计算出每横向能放置多少列图片
                        //  arrH=[];//创建数组,用于储存每列数组的高度
                         if( that.arrH.length===0){
                              for(var i=0;i<$cols;i++){//创建好数组长度,也就是横排占位数
                                  that.arrH[i] = 0;
                              }
                        }
                         $node.each(function(){//遍历每个包裹层
                                     var $cur = $(this);
                                     $(this).find('img').on('load',function(){
                                     var idx = 0,//初始化高度数组的索引,设为0
                                           minSumHeight = that.arrH[0];//初始化数组中最小高度值,设为0
                                     for(var i=0;i<that.arrH.length; i++){//找出数组中的最小值以及索引
                                               if(that.arrH[i] < minSumHeight){
                                                   idx = i;
                                                   minSumHeight = that.arrH[i];
                                               }
                                     }
                                     $cur.css({//用绝对定位将包裹层定位在高度最小一列图片的下方
                                         'position':'absolute',
                                         'left': $wrapW*idx,
                                         'top': minSumHeight
                                 });
                                 that.arrH[idx] = $cur.outerHeight(true) + that.arrH[idx];//更新储存每列图片高度的数组
                                  that.ct.height(Math.max.apply(null,that.arrH));//更新.ct高度
                           })
                         })
            },
            bind : function(){
                  var that=this;
                  this.load.on('click',function(){
                        that.getData();
                  })
                  $(window).on('resize',function(){// 当窗口大小发生变化时,重新进行瀑布流排列
                        var $node=$('.item'),
                              $wrapW=$node.outerWidth(true),
                              $cols =Math.floor($(window).width()/$wrapW);
                              that.arrH=[];
                              if( that.arrH.length===0){
                                   for(var i=0;i<$cols;i++){
                                       that.arrH[i] = 0;
                                   }
                             }
                              $node.each(function(){
                                          var $cur = $(this);
                                          var idx = 0,
                                                minSumHeight = that.arrH[0];
                                          for(var i=0;i<that.arrH.length; i++){
                                                    if(that.arrH[i] < minSumHeight){
                                                        idx = i;
                                                        minSumHeight = that.arrH[i];
                                                    }
                                          }
                                          $cur.css({
                                              'position':'absolute',
                                              'left': $wrapW*idx,
                                              'top': minSumHeight
                                      });
                                      that.arrH[idx] = $cur.outerHeight(true) + that.arrH[idx];
                                      that.ct.height(Math.max.apply(null,that.arrH));
                              })
                  })
            }
      }
      return LoadNews;
});
