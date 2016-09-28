define(['jquery'],function($){
	function Carousel($node) {
				this.$node=$node;
				this.$ct=this.$node.find('.carousel-ct');
				this.$items=this.$ct.children();
				this.$cover=this.$ct.find('.cover');
				this.$pre=$('.pre');
				this.$next=$('.next');
				this.$bullent=$('.bullent');
				this.imgWidth=$(window).width();
				this.imgCount=this.$items.length;

				this.$ct.prepend(this.$items.last().clone());
				this.$ct.append(this.$items.first().clone());
				this.imgRealCount=this.imgCount+2;
				this.$ct.find('li').css({width:this.imgWidth});
				this.$cover.css({width:this.imgWidth});
				this.$ct.css({width:this.imgWidth*this.imgRealCount,left:0-this.imgWidth});
				curIdx=0;
				isAnimate=true;
				this.bind();
				this.setBg(1);
				this.autoPlay();
			}
			Carousel.prototype={
				bind:function() {
					var me=this;
					me.$pre.on('click',function() {
						me.playPre()
					});
					me.$next.on('click',function() {
						me.playNext();
					});
					me.$bullent.find('li').on('click',function() {
						var idx=$(this).index();
						if(idx>curIdx) {
							me.playNext(idx-curIdx);
						}else {
							me.playPre(curIdx-idx);
						}
					})
				},
				playPre:function(idx) {
					var me=this;
					var idx=idx||1;
					if(!isAnimate)  {
						return;
					}
					me.setBg(curIdx);
					console.log(curIdx);
					isAnimate=false;
					me.$ct.animate({left:'+='+me.imgWidth*idx},function() {
						curIdx=(me.imgCount+curIdx-idx)%imgCount;
						if(curIdx=(me.imgCount-1)) {
							me.$ct.css({left:0-me.imgCount*me.imgWidth});
						}
					});
					isAnimate=true;
					me.setBullent();
				},
				playNext:function(idx) {
					var me=this;
					
					if(!isAnimate) {
						return;
					}
					me.setBg(curIdx+2);
					var idx=idx||1;
					isAnimate=false;
					me.$ct.animate({left:'-='+me.imgWidth*idx},function() {
					    curIdx=(curIdx+idx)%me.imgCount;
						if(curIdx==0){
							me.$ct.css({left:0-me.imgWidth});
						}
					});
					isAnimate=true;
					me.setBullent();
				},
				setBullent:function() {
					var me=this;
					me.$bullent.children().removeClass('active').eq(curIdx).addClass('active');
					console.log(curIdx);
				},
				setBg:function(idx) {
					var me=this;
					var idx=idx||0;
					var $node=me.$ct.children().eq(idx);
					var $cover=$node.find($('.cover'));
					if($node.data('isBgset')) {
								return;
							};
					var $imgUrl=$cover.attr('data-img');
					$cover.css({'background-image':'url('+$imgUrl+')'});
					$node.data('isBgSet',true);

				},
				autoPlay:function() {
					var me=this;
					clock=setInterval(function() {
						me.playNext();
					},3000)
				},
				stopPlay:function() {
					clearInterval(clock);
				}
			}
			return  Carousel;
});