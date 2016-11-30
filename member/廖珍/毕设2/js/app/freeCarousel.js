define(['jquery'],function($) {
	var freeCarousel={
		init:function() {
		this.$carousel=$('.carousel');
		this.$courseList=$('.course-list');
		this.$panel=$('.panel');
		this.$pre=$('.carousel .btn-left');
		this.$next=$('.carousel .btn-right');
		this.$panels=this.$courseList.children();
		this.courseCount=this.$panels.length;
		this.panelW=$(window).width()/3;
		this.panelH=this.$panels.height();
		this.curIdx=1;
		this.isAnimate=false;
		this.isAnimate1=false;
		this.$panels.outerWidth(this.panelW);


		this.$panel.css({width:this.panelW});
		this.$courseList.css({'width':this.panelW*this.courseCount});
		this.$carousel.css({height:this.panelH+130+'px'});
		this.bind();
		},
		bind:function() {
			var $cur=this;
			$cur.$next.on('click',function() {
				$cur.playNext();
			});
			$cur.$pre.on('click',function() {
				$cur.playPre();
			});

		},
		playNext:function() {
			var $cur=this;
			if($cur.isAnimate1) {
				return;
			}
			$cur.isAnimate1=true;
			$cur.curIdx++;
			$cur.$courseList.animate({left:'-='+$cur.panelW});
			$cur.$panel.removeClass('active').eq($cur.curIdx).addClass('active');
			$cur.isAnimate1=false;
			if($cur.curIdx===4) {
				$cur.isAnimate1=true;
			}
		},
		playPre:function() {
			var $cur=this;
			$cur.curIdx--;
			if($cur.isAnimate) {
				return;
			}
			$cur.isAnimate=true;
			$cur.$courseList.animate({left:'+='+$cur.panelW});
			$cur.$panel.removeClass('active')
			.eq($cur.curIdx).addClass('active');
			$cur.isAnimate=false;
			if($cur.curIdx===1) {
				$cur.isAnimate=true;
			}
		}
	}
	return freeCarousel;
})