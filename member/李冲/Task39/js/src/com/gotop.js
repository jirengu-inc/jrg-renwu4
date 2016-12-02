define(['jquery'],function($){
	function goTop(){
		this.init();
	};
    goTop.prototype = {
    	init:function(){
    		var $el = $('#go-top');
    		if($el.length === 0){
    			this.$el = $('<div id="go-top"'+'style="display:none;position:fixed;right:10px;bottom:10px;" >'+'回到顶部'+'</div>');
    			$('body').append(this.$el);
    		}else{
                this.$el = $el;
    		};
    		this.bind();
    	},
    	bind:function(){
    		var self = this;
    		this.$el.on('click',function(){
    			self.goToTop();
    		});
    		$(document).on('scroll',function(){
    			self.scroll();
    		});
    	},
    	goToTop:function(){
    		$(document).scrollTop(0);
    	},
    	scroll:function(e){
            var scrollTop = $(document).scrollTop();
            if(scrollTop>100){
            	this.$el.show();
            }else{
            	this.$el.hide();
            }
    	}

    };
    return new goTop();
})		
