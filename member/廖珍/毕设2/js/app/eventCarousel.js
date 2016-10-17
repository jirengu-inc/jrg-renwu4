define(['jquery'],function($) {
	var eventCarousel={
		init:function() {
			this.$eventCt=$('.event-ct');
			this.$events=$('.events');
			this.$eventImg=this.$events.children();
			this.eventsW=this.$events.width();
			this.winW=$(window).width();
			this.eventH=this.$events.height();
			this.eventCount=this.$eventImg.size();
			this.$freeCourse=$('.enter-jrg .free-course');
			this.curIdx=0;
			this.isAnimate=false;
			this.isAnimate1=false
			this.$eventCt.css({height:this.eventH})
			this.$events.css({width:this.winW*this.eventCount});
			this.$pre=$('.event-ct .btn-left');
			this.$next=$('.event-ct .btn-right');
			this.bind();
		},
		bind:function() {
			var $cur=this;
			$cur.$next.on('click',function(e) {
				e.preventDefault();
				$cur.playNext();
			});
			$cur.$pre.on('click',function(e) {
				e.preventDefault();
				$cur.playPre();
			});
			$cur.$freeCourse.find('li').on('click',function() {
				var idx=$(this).index();
				if(idx>$cur.curIdx) {
					$cur.playNext(idx-$cur.curIdx);
				}
				if($cur.curIdx>idx) {
					playPre($cur.curIdx-idx);
				}
			})
		},
		playPre:function() {
			var $cur=this;
			
			if($cur.isAnimate1) {
				return;
			}
			$cur.isAnimate1=true
			$cur.curIdx--;
			$cur.$events.animate({left:'+='+$cur.winW});
			$cur.isAnimate1=false;
			$cur.setBullent();
			if($cur.curIdx===0) {
				$cur.isAnimate1=true;
			}
		},
		playNext:function() {
			var $cur=this;
			if($cur.isAnimate) {
				return;
			}
			$cur.isAnimate=true;
			$cur.curIdx++;
			$cur.$events.animate({left:'-='+$cur.winW});
			$cur.isAnimate=false;
			$cur.setBullent();
			if($cur.curIdx===$cur.eventCount-1) {
				$cur.isAnimate=true;
			}
			console.log($cur.isAnimate);

		},
		setBullent:function() {
			var $cur=this;
			$cur.$freeCourse.find('li').removeClass('active')
				.eq($cur.curIdx).addClass('active');

		}

	}
	return eventCarousel;
})