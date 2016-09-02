

define(["jquery"],function($){
	function Carousel($imgct){
	this.$ct=$imgct;
	this.$carousel=$imgct.parent();
	this.$item=$imgct.children();
	this.$width=$imgct.children().width();
	this.$count=$imgct.children().length;
	this.$itemWidth=$(window).width();
	this.init();
	this.bind()

}
Carousel.prototype={
		init:function(){
			this.$ct.find("li").width(this.$itemWidth);
			this.$ct.prepend(this.$item.eq(this.$count-1).clone());
			this.$ct.append(this.$item.eq(1).clone());
			this.$ct.css({"left":0-this.$itemWidth,"width":this.$itemWidth*(this.$count+2)});
			},
		bind:function(){
			
			this.cur=0;
			this.isLocked=false;
			this.setBgd(1);
			this.auto();

		},
		setBgd:function(i){
			var data=this.$ct.find("li").eq(i).attr("data-img");
				this.$ct.find("li").eq(i).css({"background-image":"url("+data+")"})
		},
		palyNext:function(idx){
			var _this=this;
				var idx=idx || 1;
			if(this.isLocked){return};
			this.isLocked=true;
			this.$ct.animate({left:"-="+(this.$itemWidth*idx)},function(){
		
				_this.cur=(_this.cur+idx)%(_this.$count);
				if(_this.cur===0){
					_this.$ct.css({"left":0-_this.$itemWidth});
				}
							_this.setBgd(_this.cur+1);
						_this.isLocked=false;	
			});
		},
		auto:function(){
			var me=this;
			var clock=setInterval(function(){
				me.palyNext();
			},2000)
			}
		}
		return  Carousel;
})






