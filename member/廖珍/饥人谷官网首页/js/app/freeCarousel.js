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
		this.width=$(window).width();
		if(this.width>parseInt((920+'px'))) {
		   this.panelW1=$(window).width()/3;
		   console.log(this.panelW1)
		   this.$courseList.css({'width':this.panelW1*this.courseCount});
		   this.$panels.outerWidth(this.panelW1);
		   this.$panel.css({width:this.panelW1});
		}else{
			this.panelW2=$(window).width()/2;
			console.log(this.panelW2);
			this.$courseList.css({'width':this.panelW2*this.courseCount});
			this.$panels.outerWidth(this.panelW2);
			this.$panel.css({width:this.panelW2});
		}
	
		this.panelH=this.$panels.height();
		this.curIdx=1;
		this.isAnimate=false;
		this.isAnimate1=false;
		
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
			if($cur.width>parseInt(920+'px')) {
				$cur.$courseList.animate({left:'-='+$cur.panelW1});
			}else {
				$cur.$courseList.animate({left:'-='+$cur.panelW2});
			}
			
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
			if($cur.width>parseInt(920+'px')) {
				$cur.$courseList.animate({left:'+='+$cur.panelW1});
			}else {
				$cur.$courseList.animate({left:'+='+$cur.panelW2});
			}
			
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