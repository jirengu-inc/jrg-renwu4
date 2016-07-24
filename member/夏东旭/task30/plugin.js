(function($){
	$.fn.lazyload=function(){
		var that=this,
			clock;
		this.each(function(){
			showPic($(this));
		})
		$(window).on("scroll",function(){
			if(clock){
				clearTimeout(clock);
			}
			clock=setTimeout(function(){
				that.each(function(){
					showPic($(this));
				})
			},500)
		});
		return this;
	}

	$.fn.waterfall=function(){
		var that=this;
		render(this);
		$(window).on("resize",function(){
			render(that);
		});
		return this;
	}
	function render($node){
			var windowWidth=$(window).width(),
				itemWidth=$node.eq(0).outerWidth(true),
				colNum=Math.floor(windowWidth/itemWidth),
				color=["yellow","red","purple","pink","blue"],
				heightArray=[];
				$(".ct").eq(0).width(colNum*itemWidth);	
				for(var i=0;i<colNum;i++){
					heightArray.push(0);
				}
			$node.each(function(){
				var minHeight=Math.min.apply(null,heightArray),
					itemHeight=$(this).outerHeight(true),
					index=heightArray.indexOf(minHeight),
					colorIndex=Math.floor(Math.random()*(color.length));
				$(this).css({
					top:heightArray[index],
					left:index*itemWidth,
					backgroundColor:color[colorIndex]
				})
				heightArray[index]+=itemHeight;
			});
		}
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
	function showPic($node){
		if((!$node.attr("loaded"))&&isVisible($node)){
			$node.css("opacity",1);
		}
	}
}(jQuery));