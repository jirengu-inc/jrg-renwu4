define(['jquery'],function($){
	var lazyImg={
		init:function() {
			this.$win=$(window);
			this.$target=$('.about-img img');
			this.bind();
			console.log(this.$target);
		},
		bind:function() {
			var $cur=this;
			$cur.$win.on('scroll',function() {
				$cur.checkShow();
			});
		},
		checkShow:function() {
			var $cur=this;
			$cur.$target.each(function() {
				$cur1=$(this);
				if($cur.isShow($cur1)) {
					$cur.showImg($cur1);
				}
			});
		},
		isShow:function($el) {
			var $cur=this,
				scrollT=$cur.$win.scrollTop(),
				winH=$cur.$win.height(),
				offsetT=$el.offset().top;
			if(offsetT<scrollT+winH) {
				return true
			}else {
				return false
			}

		},
		showImg:function($el) {
			var $cur=this;
			console.log($el);
			$el.attr('src',$el.attr('data-src'));
		}
	}
	return lazyImg
})