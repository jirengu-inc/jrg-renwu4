//轮播声明
var $playnext=$(".playnext");
var $playback=$(".playback");
var $imgct=$(".img-ct");
var $items=$imgct.children();
var $imgCount=$items.length;
var $imgWidth=$items.width();
var $bullet=$(".bullet");
var autoplayInterval;
var num=0;
var num2=0;
var lock=false;
// console.log($imgCount);

//推广轮播
var $imgGroupWrap = $(".imgGroupWrap");
var $groupCount = $imgGroupWrap.children().length;
var $groupWidth = $(".promoteCarousel").width();
var $next = $(".next");
var $back = $(".back");
// console.log($groupWidth);

$(".local").on("mouseover",function(){
	$(".provinceSelect").css("display","block");
	$(".local").css("background-color","#fff");
	$(this).find("span").css("top","0");
});
$(".local").on("mouseleave",function(){
	$(".provinceSelect").css("display","none");
	$(".local").css("background-color","#f1f1f1");
	$(this).find("span").css("top","-7px");
});
$(".provinceWrap li").on("click",function(){
	$(".province").text(this.innerHTML);
})

$(".pullDown").on("mouseover",function(){
	$(".pull").css("display","block");
	$(this).find("span").css("top","0");
});
$(".pullDown").on("mouseleave",function(){
	$(".pull").css("display","none");
	$(this).find("span").css("top","-7px");
});
$(".pullDown2").on("mouseover",function(){
	$(".pull2").css("display","block");
	$(this).find("span").css("top","0");
});
$(".pullDown2").on("mouseleave",function(){
	$(".pull2").css("display","none");
	$(this).find("span").css("top","-7px");
});
//最顶部的JQ
$(".shoppingCar").on("mouseover",function(){
	$(".list").css("display","block");
	$(".shoppingCar").css("background-color","#fff");
	$(".shoppingCar").css("border-buttom","none");
})
$(".shoppingCar").on("mouseleave",function(){
	$(".list").css("display","none ");
	$(".shoppingCar").css("background-color","#f9f9f9");
})
//购物车效果
$(".goodsWrapInner li").on("mouseover",function(){
	$(this).find(".innerShow").css("display","block")
})
$(".goodsWrapInner li").on("mouseleave",function(){
	$(this).find(".innerShow").css("display","none")
})

//轮播
$imgct.append($items.first().clone());
$imgct.prepend($items.last().clone());
var $imgRealCount=$imgct.children().length;
$imgct.css({left:0 - $imgWidth,width:$imgRealCount * $imgWidth})

$playnext.on("click",function(){
	playnext();
});
$playback.on("click",function(){
	playback();
});
autoplay();
$bullet.find('li').on("mouseover",function(){
	var idx=$(this).index();
	stopplay();
	bullet(idx);
	if(idx>num){
		playnext(idx-num);
	};
	if(idx<num){
		playback(num-idx);
	}
});

$bullet.find('li').on("mouseleave",function(){
	autoplay();
});

function playnext(setp){
	var setp=setp||1;
	if(!lock){
		lock=true;
		$imgct.animate({left:'-='+($imgWidth*setp)},function(){
			num=(num+setp)%$imgCount;
			// console.log(num);
			if(num===0){
				$imgct.css({left:0 - $imgWidth});
		}
		bullet();
		lock=false;
		});
	}
}
function playback(setp){
	var setp=setp||1;
	if(!lock){
		lock=true;
		$imgct.animate({left:'+='+($imgWidth*setp)},function(){
			num=(num-setp)%$imgCount;
			// console.log(num);
			if(num===-1){
				$imgct.css({left:0-$imgWidth*$imgCount});
			}
		lock=false;
		bullet();
		});
	}
}
function bullet(setp){
	var setp=setp||num;
	// console.log("bullet"+setp);
	$bullet.find('li').removeClass('active')
					  .eq(setp).addClass('active');
}

function autoplay(){
	autoplayInterval = setInterval(function(){
		playnext();
	},3000)
}

function stopplay(){
	clearInterval(autoplayInterval);
}
$(".carousel").on("mouseover",function(){
	$playnext.css({display:'block'});
	$playback.css({display:'block'});
})
$(".carousel").on("mouseleave",function(){
	$playnext.css({display:'none'});
	$playback.css({display:'none'});
})

//推广轮播
$imgGroupWrap.css({left:0-$groupWidth,width:$groupWidth*$groupCount});

$next.on("click",function(){
	next();
})

$back.on("click",function(){
	back();
})
$(".promoteCarousel").on("mouseover",function(){
	$next.css({display:'block'});
	$back.css({display:'block'});
})
$(".promoteCarousel").on("mouseleave",function(){
	$next.css({display:'none'});
	$back.css({display:'none'});
})
function next(){
	if(!lock){
		lock=true;
		$imgGroupWrap.animate({left:'-='+$groupWidth},function(){
			num2++;
			// console.log(num2);
			if(num2===3){
				$imgGroupWrap.css({left:0-$groupWidth});
				num2=0;
			}
			lock=false;
		})
	}
}

function back(){
	if(!lock){
		lock=true;
		$imgGroupWrap.animate({left:'+='+$groupWidth},function(){
			num2--;
			// console.log(num2);
			if(num2===-1){
				$imgGroupWrap.css({left:0-$groupWidth*3});
				num2=2;
			}
			lock=false;
		})
	}
}

//有问题！！！！！不受控制。
$(".guessul").on("mouseover",function(){
		$("#moveline").animate({left:'1000px',opacity:'1'},1000)
	}
)
$(".guessul").on("mouseleave",function(){
		$("#moveline").animate({opacity:'0.1',left:'0'},1)
	}
)
//tab
$(".tabbtn>ul>li").on("mouseover",function(){
	$(".tabbtn>ul>li").removeClass("tabbtnhover");
	$(this).addClass("tabbtnhover");
	var tabnum=$(this).index();
	var tabinnerChild=$(".tabinner").children();

	$(tabinnerChild).removeClass("show");
	$(tabinnerChild).addClass("hidden");	
	$(tabinnerChild[tabnum]).removeClass("hidden");
	$(tabinnerChild[tabnum]).addClass("show");
	
})
//字会跳

