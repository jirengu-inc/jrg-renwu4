(function($){
	$.fn.lazyload=function(handler){
		var that=this,
			clock;
		this.each(function(){
			if(isVisible($(this))){
				handler();
			}
		})
		$(window).on("scroll",function(){
			if(clock){
				clearTimeout(clock);
			}
			clock=setTimeout(function(){
				that.each(function(){
					if(isVisible($(this))){
						handler();
					}
				})
			},500)
		});
		return this;
		function isVisible($node){
			var windowHeight=$(window).height(),
				selfTop=$node.offset().top,
				selfHeight=$node.height(),
				scrollTop=$(window).scrollTop();
			if(scrollTop>(selfTop-windowHeight)&&scrollTop<(selfHeight+selfTop)){
				return true;
			}else{
				return false;
			}
		}
	}
	var heightArray=[];
	$.fn.waterfall=function(){
		var that=this,
			$parent=this.parent();
		
		render(this);
		$(window).on("resize",function(){
			that.css('transition','all 1s');
			render(that.parent().children(),true);
		});
		return this;

		function render($node,resized){
			var windowWidth=$(window).width(),
				itemWidth=$node.eq(0).outerWidth(true),
				colNum=Math.floor(windowWidth/itemWidth);
			$parent.width(colNum*itemWidth);
			if (heightArray.length===0||resized){
				heightArray=[];
				for(var i=0;i<colNum;i++){
					heightArray.push(0);
				}
			}	
			$node.each(function(){
				var minHeight=Math.min.apply(null,heightArray),
					itemHeight=$(this).outerHeight(true),
					index=heightArray.indexOf(minHeight);
				
				$(this).css({
					top:heightArray[index],
					left:index*itemWidth
				})
				heightArray[index]+=itemHeight;
			});
			$parent.height(Math.max.apply(null,heightArray));
		}
	}
	








}(jQuery));