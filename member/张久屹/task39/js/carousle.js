define(['jquery'],function($){
	function Carousel($dom){
		this.$dom = $dom;
		this.$list = $dom.find('.list');
		this.$list.css({
			width: $(window).width()
		});	
		this.$listWidth = this.$list.outerWidth(true);
		this.$ct = this.$dom.find('.wrap');
		this.$next = this.$dom.find('.next');
		this.$pre = this.$dom.find('.pre');
		this.$bullet = this.$dom.find('.bullet');
		this.$leng = this.$list.size();
		this.$ct.append(this.$list.first().clone());
		this.$ct.prepend(this.$list.last().clone());
		this.$ct.css({
			left: 0 - this.$listWidth, 
			width: this.$listWidth * this.$ct.find('li').size()
		});
		this.curIdx = 0;
		this.ready = false;
		this.bind();
	}

	Carousel.prototype = {
		bind: function(){
			var me = this;
			$(window).on('resize',function(){
				me.changeWidth();
			});

			me.$next.on('click',function(){
				me.toNext();
			})
			me.$pre.on('click',function(){
				me.toPre();
			})
			me.$bullet.find('li').on('click',function(){
				var idx = $(this).index();
				if(idx > me.curIdx){
					me.toNext(idx - me.curIdx);
				}else if(idx < me.curIdx){
					me.toPre(me.curIdx - idx)
				}			
			})

			me.auto(); //自动播放轮播
		},

		toNext: function(num){
			var me = this;
			var num = num || 1;
			console.log(me.$listWidth)
			if(!me.ready){
				me.ready = true;
				me.$ct.animate({left: '-='+ (num * me.$listWidth)},function(){
					me.curIdx = (me.curIdx + num )% me.$leng;
					if(me.curIdx === 0){
						me.$ct.css({left: 0 - me.$listWidth})
					}
					me.ready = false;
					me.setBullet();
	 			})
			}
		},

		toPre: function(num){
			var me = this;
			var num = num || 1;
			if(!me.ready){
				me.ready = true;
				me.$ct.animate({left: '+='+ (num * $(window).width())},function(){
					me.curIdx = (me.curIdx - num )% me.$leng;
					if(me.curIdx === -1){
						me.curIdx = 3;
						me.$ct.css({left: 0 - me.$listWidth * me.$leng});
					}
					me.ready = false;
					me.setBullet();

	 			})
			}
		},

		setBullet: function(){
			var me = this;
			me.$bullet.find('li').eq(me.curIdx).addClass('nav').siblings().removeClass('nav');
		},

		changeWidth: function(){
			var me = this;
				me.$listWidth = $(window).width();
				me.$ct.find('li').css({width: $(window).width()})
				me.$ct.css({
					left: 0 - me.$listWidth,
					width: me.$listWidth * me.$ct.find('li').size()
				});
				//轮播在非第一个时拖动窗口会回到第一个画面

		},

		auto: function(){
			var me = this;
			setInterval(function(){
				me.toNext();
			},3000)
		}
	}

	var c1 = new Carousel($('#banner'));
	
})
