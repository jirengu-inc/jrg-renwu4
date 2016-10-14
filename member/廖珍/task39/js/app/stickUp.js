define(['jquery'],function($) {
	var stickUp={
		init:function() {
		this.$cur=$('.nav');
		console.log(this.$cur);
		this.$curW=this.$cur.width();
		console.log(this.$curW);
		this.$curH=this.$cur.height();
		this.offsetL=this.$cur.offset().left;
		this.offsetT=this.$cur.offset().top;
		this.bind();
		this.$curClone=this.$cur.clone().css({display:'none','visibility':'hidden'}).insertBefore(this.$cur);
	},
	 bind:function() {
	 	var $cur=this;
	 	$(window).on('scroll',function() {
	 		var scrollT=$(this).scrollTop();
	 		if(scrollT>=$cur.offsetT) {
	 			if(!$cur.isFixed()) {
	 				$cur.setFixed()
	 			}
	 		}else {
	 			if($cur.isFixed()) {
	 				$cur.unsetFixed()
	 			}
	 		}
	 	});
	 },
	 isFixed:function() {
	 	var me=this;
	 	return me.$cur.data('data-fixed');
	 },
	 setFixed:function() {
	 	var me=this;
	 	me.$cur.data('data-fixed',true)
	 		   .css({
	 		   	position:'fixed',
	 		   	top:0,
	 		   	left:me.offsetL,
	 		   	width:me.$curW,
	 		   	margin:0
	 		   });
	 	me.$curClone.show();
	 },
	 unsetFixed:function() {
	 	var me=this;
	 	me.$cur.data('data-fixed',false)
	 			.removeAttr('style');
	 	me.$curClone.hide();
	 }
}
return stickUp;
})