define(['jquery'],function($){
	var goTop={
	init:function() {
		this.$win=$(window);
		this.createE();
		this.bind();
	},
	createE:function() {
		var $cur=this;
		$cur.$target=$('<div class="goTop">回到顶部</div>')
		$('body').append(this.$target);
	},
	bind:function() {
		var $cur=this;
		$cur.$win.on('scroll',function() {
			var scrollT=$('body').scrollTop();
			console.log(scrollT);
			if(scrollT>300) {
				$cur.$target.show();
			}else {
				$cur.$target.hide();
			}
		});
		$cur.$target.on('click',function() {
			$cur.$win.scrollTop(0)
		})
	}
}
return goTop;
})