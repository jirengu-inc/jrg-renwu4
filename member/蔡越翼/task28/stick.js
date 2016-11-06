$.fn.stick = function(){
	console.log('被调用');
	var cur = this,
		curWidth = cur.width(),
		curHeight = cur.height(),
		offset = cur.offset();
	var copy = this.clone().css({opacity:0}).insertBefore(cur).hide();
	function isfixed(){
		return !!copy.attr('data-fix');
	}
	function setfixed(){
		copy.attr('data-fix','true');
		copy.css({position:'fixed',
				  top:0,
				  left:offset.left,
				  opacity:1,
				  margin:0,
				  width:curWidth,
				  height:curHeight}).show();
	}
	function unfixed(){
		copy.removeAttr('data-fix');
		copy.hide();
	}
	$(window).scroll(function(){
		var scrollTop = $(this).scrollTop();
		if(scrollTop >= offset.top){
			if(!isfixed()){
				setfixed();
			}
		}else{
			unfixed();
		}
	});
};