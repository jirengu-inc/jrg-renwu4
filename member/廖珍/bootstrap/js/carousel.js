


//轮播插件
function Slides($element,options){
  this.options = options
  this.$element = $element
  this.timer = null 
  this.init()

}
//初始化
Slides.prototype.init = function(){
  this.prepareHtml()
  this.bindEvents()
  if(this.options.auto){
      this.autoPlay()
    }
}
//准备HTML
Slides.prototype.prepareHtml = function(){
  var $arts = this.$element
  var options = this.options
  var $pics = this.$pics = $arts.children().wrapAll('<div class=list></div>')
  var $list = this.$list = $arts.children()
  $list.wrapAll('<div class=viewpoint></div>')
  var $viewpoint = this.$viewpoint = $list.parent()
  if (options.nav) {
      var $prev = this.$prev = $('<a class="prev arrow"><</a>')
      var $next = this.$next = $('<a class="next arrow">></a>')
      $prev.appendTo($arts)
      $next.appendTo($arts)
      $('.arrow').css({
        display: 'inlineBlock',
        position: 'absolute',
        top: '50%',
        'margin-top': '-15px',
        width: '30px',
        height: '30px',
        'line-height': '30px',
        'text-align': 'center',
        'font-size': '20px',
        color: '#fff',
        background: '#4e443c',
        'box-shadow': '0 0 2px #999',
        'border-radius': '50%',
        opacity: '0.8',
        cursor: 'pointer'
      })
      $('.prev').css({
        left: '5px'
      })
      $('.next').css({
        right: '5px'
      })
  }
  var width = this.width = options.width
  var height = this.height = options.height
  var current = this.current = 1
  var hover = this.hover = false
  var number = this.number = $pics.length+2
  $arts.css({
    width: width,
    height: height,
    position: 'relative'
  })
  $viewpoint.css({
    width: width,
    height: height,
    overflow: 'hidden',
    position: 'relative'
  })
  $list.css({
    width: width*number,
    height: height,
    position: 'relative',
    left: -width
  })
  $pics.css({
    float: 'left',
    width: width,
    height: height
 })
  

  var $first = this.$first = $pics.first()
  var $last = this.$last = $pics.last()
  $first.clone().appendTo($list)
  $last.clone().prependTo($list)
}
//绑定事件
Slides.prototype.bindEvents = function(){
  var self = this
  this.$prev.on('click',function(){
     self.prev()
  })
  this.$next.on('click',function(){
     self.next()
  })
  this.$pics.on('mouseenter',function(){
     window.clearInterval(self.timer)
     self.hover = true
  }).on('mouseleave',function(){
    if (self.options.auto) {
      self.autoPlay()
        self.hover = false
    }    
  })
}
//自动播放
Slides.prototype.autoPlay = function(){
  var self = this
  this.timer = setInterval(function(){
      self.next()
    },2000)
}
//动作go
Slides.prototype.prev = function(){
  this.go(this.current-1)
}
Slides.prototype.next = function(){
  this.go(this.current+1)
}
Slides.prototype.go = function(index){
  var options = this.options
  var width = options.width
  var left = index*(-width)
  var $list = this.$list
  var timer = this.timer
  var hover = this.hover
  var current = this.current
  var number = this.number
  var left = index*(-width)
  var self = this
    if(timer){
        window.clearInterval(timer)
      }
  if(!hover && options.auto){
          this.autoPlay()
        }
    if(index!=0&&index!=number-1){
      $list.stop(true,true).animate({
          left: left 
        },500,function(){
          self.current = index
      })      
    }else    
      if(index == 0){
        $list.stop(true,true).animate({left:0},300,function(){
          $list.css({left:(-number+2)*width})
          self.current = number-2
        })        
      }else
      if(index == number-1){
        $list.stop(true,true).animate({left:-(number-1)*width},300,function(){
          $list.css({left:-width})
          self.current = 1
        })
      }
}
//页面有多个轮播
$.fn.slides=function(options){
  this.each(function(){
    var element = this
    var slides = new Slides($(element),options)
  })
}
