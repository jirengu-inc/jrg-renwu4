define(['jquery'],function($){
	$(window).on('scroll',function(){
		if($(window).scrollTop() > 400){
			$('#goTop').show();
			$('#top').css({
				'background':'#222'
			})
		}else{
			$('#goTop').hide();
			$('#top').css({
				'background':'none'
			})	
		}
	})	
})

