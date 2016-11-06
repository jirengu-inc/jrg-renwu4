define(['jquery'],function($) {

	var mountainMove2={
		init:function() {
			this.m4=$('.intro-bg1');
		    this.m5=$('.intro-bg2');
		    this.introX=$('.intro').width()/2;
		    this.introY=$('.intro').height()/2;
		    this.bind();
		},
		bind:function() {
			var $cur=this;
			$('.intro').on('mousemove',function(e) {
				var moveX=e.pageX-$cur.introX;
				var moveY=e.pageY-$cur.introY;
				$cur.m4.css ({
					transform:'translate('+moveX/80+'px)'
				});
				$cur.m5.css({
					transform:'translate('+moveX/80+'px)'
				});
			})
		}
	}
	return mountainMove2;
})