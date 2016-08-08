define(['jquery'],function($){
	function Exposure($nodes){
		this.$nodes=$nodes;
		this.init();
	}
	Exposure.prototype={
			init:function(){
				var lock=false,
				me=this;
				$(window).on('scroll', function(){
	    			if(lock){
			      clearTimeout(clock);
			    	}
			    clock = setTimeout(function(){
					me.bind();
					lock=true;
			    }, 200);
			    lock=false;
				});
			},
			bind:function(){
				var me=this;
				this.$nodes.each(function(){
					if(me.isVisibility($(this))){
						$(this).animate({"opacity":1},2000)
					}
				});
			},
			isVisibility:function(el){
        	var $distanceH=el.offset().top,
        	height=$(window).height(),
            $top=$(window).scrollTop(),
             cur= $top+height,
             off=$top-$distanceH;
            if(cur>$distanceH){ return true;}
                return false;     
 				} ,
	}
	return Exposure;
})