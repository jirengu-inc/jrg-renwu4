define(['jquery'],function($) {
	var mountainMove1={
		init:function() {
			this.winW=$('#header').width()/2;
			this.winH=$('#header').height()/2;
			this.m1=$('.mountain1');
			this.m2=$('.mountain2');
			this.m3=$('.mountain3');
			this.header=$('#header');
			this.bind();
		},
		bind:function() {
			var $cur=this;
			$cur.header.on('mousemove',function(e) {
				var moveX=e.pageX-$cur.winW;
				var moveY=e.pageY-$cur.winH;
				$cur.m1.css({
					transform:'translate('+moveX/40+'px,'+moveY/40+'px)'
				});
				$cur.m2.css({
					transform:'translate('+moveX/80+'px,'+moveY/80+'px)'
				});
				$cur.m3.css({
					transform:'translate('+moveX/120+'px,'+moveY/120+'px)'
				});

			})
		}
	}
	return mountainMove1;
})