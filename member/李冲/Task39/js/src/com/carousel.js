define(['jquery'],function($){
    	function Carousel($node){
				this.$wrap = $node;
				this.init();
				this.bind();
			}
			Carousel.prototype = {
				init:function(){
					this.$ct = this.$wrap.find('.img-ct');
					this.$items = this.$ct.find('li');
					this.$pre = this.$wrap.find('.pre');
					this.$next = this.$wrap.find('.next');
					this.$point = this.$wrap.find('.part');
					this.imgWidth = $(window).width();
					this.imgCount = this.$items.size();
					this.$ct.prepend(this.$items.last().clone());
					this.$ct.append(this.$items.first().clone());
					this.imgRealCount = this.$ct.children().size();
					this.curIdx = 0;
					this.isLocked = false;
					this.$ct.find('.carousel').css({'width':this.imgWidth});
                    this.$ct.find('.cover').css({'width':this.imgWidth});
					this.$ct.css({
						'left':0-this.imgWidth,
						'width':this.imgWidth*this.imgRealCount
					});
					this.autoPlay();
					console.log(this.imgWidth);
				},
				bind:function(){
					var self = this;
					this.$pre.on('click',function(){
						self.playPre();
					});
					this.$next.on('click',function(){
						self.playNext();
					});
					this.$point.find('li').on('click',function(){
						var idx = $(this).index();
						if(idx>self.curIdx){
							self.playNext(idx-self.curIdx);
						}else{
							self.playPre(self.curIdx-idx)
						}
					});
				},
				playNext:function playNext(idx){
					var idx = idx || 1;
					var self = this;
					if(this.isLocked) return;
					this.isLocked = true;
					this.$ct.animate({'left':'-='+(self.imgWidth*idx)},function(){
						self.curIdx = (self.curIdx+idx)%self.imgCount;
						if(self.curIdx===0){
							self.$ct.css({
								'left':0-self.imgWidth,
							})
						}
						self.isLocked =false;
		                self.setPoint();
					})
				},
				playPre:function playPre(idx){
					var self = this;
					var idx = idx || 1;
					if(this.isLocked) return;
					this.isLocked = true;
					this.$ct.animate({'left':'+='+(self.imgWidth*idx)},function(){
						self.curIdx = (self.curIdx-idx+self.imgCount)%self.imgCount;
						if(self.curIdx === (self.imgCount - 1)){
							self.$ct.css({'left':0-self.imgWidth*self.imgCount});
						}
						self.isLocked = false;
						self.setPoint();
					})
				},
				setPoint:function(){
					this.$point.find('li').removeClass('active')
					.eq(this.curIdx).addClass('active');
				},
				autoPlay:function autoPlay(){
					var self = this;
					var clock = setInterval(function(){
						self.playNext();
					},3000);
				}
			};
			return new Carousel($('#first-page'));


})	