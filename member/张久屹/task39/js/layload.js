define(['jquery'],function(){

	function Layload($dom){
		this.$dom = $dom;
		this.$li = this.$dom.find('li');
		this.$wrap = this.$dom.find('.wrap');
		this.$kong = this.$dom.find('.kong');  //中间辅助线
		var me = this;
		me.$li.each(function(){
			var e = $(this);
			$(window).on('scroll',function(){
				if($(window).scrollTop() + $(window).height() > e.offset().top){
				 	e.fadeTo(2000,1,function(){
				 		me.$kong.fadeTo(4000,1)
					});
				}	
			})	
		})
 	
	}
	var l1 = new Layload($('#about'));	
})


