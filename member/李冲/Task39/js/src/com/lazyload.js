define(['jquery'],function($){
	function Lazyload($dom){
		this.$dom = $dom;
		this.$li = this.$dom.find('.list-text');
		var self = this;
		console.log(self.$li);
		self.$li.each(function(){
			var me = $(this);
			console.log(me);
			$(window).on('scroll',function(){
				if(($(window).height()+$(window).scrollTop())>me.offset().top){
					me.fadeTo('slow', 0.5);
				}
			})
		})
    }
    return new Lazyload($('#about'));
})

