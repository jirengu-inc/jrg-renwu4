(function($){
			$.fn.stickup=function(){
				return this.each(function(){
					$this=$(this);
					var offsetTop=$this.offset().top,
						offsetLeft=$this.offset().left,
						width=$this.width(),
						$newElement=$this.clone().css("display","none");
						$this.append($newElement);
					$(window).on("scroll",function(){
						if($(this).scrollTop()>offsetTop){
							$(".visible").css({
								display:"none"
							});
							$newElement.css({
								position:"fixed",
								width:width,
								left:offsetLeft,
								top:0,
								display:"block",
								"z-index":100
							});
							$newElement.addClass("visible");
							return $this;
						}
						else{
							$newElement.css({display:"none"});
							return $this;
						}
					})
				})
			}
		}(jQuery));