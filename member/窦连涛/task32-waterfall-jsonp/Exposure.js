var Exposure = {

	init:function($target,handle){
		this.$w = $(window);
		this.$target = $target;
		this.handle = handle;

		this.bind();

	},

	bind:function(){
		var me = this,
			timer = null,
			interval = 100;

		$(window).on('scroll',function(e){
			timer && clearTimeout(timer);
			timer = setTimeout(function(){
				me.checkShow();
			},interval);
		})
	},

	checkShow:function(){
		var me = this;

		this.$target.each(function(){
			var $cur = $(this);
			if(me.isShow($cur)){
				me.handle && me.handle.call(this,this);
				$cur.data('loaded', true);
			}
		})
	},

	isShow:function($el){
		var scrollT = this.$w.scrollTop(),
			winH = this.$w.height(),
			top = $el.offset().top;

		if(top < scrollT + winH){
			return true;
		}else{
			return false;
		}
	},

	hasLoaded:function($el){
		if($el.data('loaded')){
			return true;
		}else{
			return false;
		}
	}

}
