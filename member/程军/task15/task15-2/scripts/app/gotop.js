define(["jquery"],function($)
{
	function GoTop(){ 
	this.creatNode();
	this.bind();
 };
GoTop.prototype={
	creatNode:function(){
		if($('.gotop').length){return};
		 $nodes=$('<a href="javascript:void()" class="gotop">TOP</a>');
		$("body").append($nodes);
		 this.target=$("body").find('.gotop');
		this.target.css({"display":"none"})
	},
	bind:function(){
		var me=this;
		 $(window).on("scroll",function(){
            var $top=$(window).scrollTop();
            if($top<300){
           me.target.css({"display":"none"});
            }
              if($top>300){
             me.target.css({"display":"block"});
         }; 
     	});	
		 me.target.on("click",function(){
        	$('body').animate({'scrollTop':0},500) 	
	})
		}
};
return GoTop;
})



