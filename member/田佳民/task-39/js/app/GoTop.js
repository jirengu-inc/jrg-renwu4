define(['jquery'],function($){
	function GoTop(){
		this.node=$('.to-top');
		this.bind();
	}
	GoTop.prototype={
		constructor : GoTop,
		bind : function(){
			var isShow = false;
			var that=this;
			$(window).scroll(function(e) {
				var ScrollTop = $('body').scrollTop(),
				      toTop =that.node;
				if (!isShow&& ScrollTop > 200) {
					isShow = true;
					toTop.show().addClass('enter');// 显示按钮和动画
					setTimeout(function() { //移除动画属性
						toTop.removeClass('enter');
					}, 200);
				} else if (isShow && ScrollTop < 200) {
					isShow = false;
					toTop.addClass('leave');//显示动画
					setTimeout(function() {//移除动画属性并隐藏
						toTop.removeClass('leave').hide();
					}, 200);
				}
			});
			this.node.click(function(e) {
					$('body').animate({
						scrollTop: 0
					}, 500);
			})
		}
	}
	return GoTop;
});
