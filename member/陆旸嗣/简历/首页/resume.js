$(".cap").hide();
$(".cap").fadeIn(2000);
showWord();

// 轮播部分：
autoplay();
$(".next").on("click",function(){
	next();
})
$(".pre").on("click",function(){
	pre();
})
$("#carouselWrap").on("mouseover",function(){
	stopplay();
})
$("#carouselWrap").on("mouseleave",function(){
	autoplay();
})

// 进度条部分：
$(window).on("scroll",function(){
	setTimeout(function(){
		progressBarPlay();
	},1000);
})
//返回顶部：
$(window).on("scroll",function(){
	cheakgoTop();
});


//头部打字效果函数
function showWord(){
	setTimeout(function(){
		addWord('name','我叫陆旸嗣');
	},500)
	setTimeout(function(){
		addWord('sentence','希望能成为一名有想法的前端工程师');
	},2000)
	setTimeout(function(){
		addWord('age','今年25岁')
	},6500)
	setTimeout(function(){
		addWord('local','坐标 — 广州')
	},8500)
};

function addWord(id,words){
	var select = document.getElementById(id),
	      word = "",
	      text = words,
	       num = 0;

	function push(){
		if(num < text.length){
			word=word+text[num];
			select.innerText=word;
			num++;
		}else{
			clearInterval(clock);
		}
	}

	var clock = setInterval(function(){push()},250);
}
// 进度条移动才有效果
function progressBarPlay(){
	var $progressBar=$(".progressBar"),
		$windowH=$(window).height(),
		$scrollH=$(window).scrollTop(),
		$progressBarH=$progressBar.offset().top,
		$normal=$(".normal");

	if($progressBarH < $windowH + $scrollH){
		$normal.each(function(){
			$(this).addClass("show");
		})
		skillintroshow();
	}
}
//技能简介弹出
function skillintroshow(){
	$(".skillintro").addClass("skillintroshow");
	// select.parent().find(".skillintro").addClass("skillintroshow")
}

//作品轮播
var arr=['middle','rightOne','rightTwo','leftTwo','leftOne'],
	$imgChild=$(".imgWrap").children(),
	$imgNum=$imgChild.length;
	// console.log($imgNum);

function next(){
	var clN=arr.shift();
	arr.push(clN);
	for(var i=0;i<$imgNum;i++){
		$($imgChild[i]).removeClass();
		$($imgChild[i]).addClass(arr[i]);

	}
}
function pre(){
	var clN=arr.pop();
	arr.unshift(clN);
	for(var i=0;i<$imgNum;i++){
		$($imgChild[i]).removeClass();
		$($imgChild[i]).addClass(arr[i]);

	}
}
function autoplay(){
	clock=setInterval(function(){
		next();
	},3000)
}
function stopplay(){
	clearInterval(clock);
}

// 返回顶部
// var $goTop =$('<div id="gotop">返回顶部</div>');
// 	$("body").append($goTop);

function cheakgoTop(){
	var $scroll
	if(document.body.scrollTop){
		$scroll=$("body").scrollTop();
	}else{
		$scroll=document.documentElement.scrollTop;
	};
    if($scroll>400){
    	$("#gotop").show(500);
  	}else{
    	$("#gotop").hide(500);
  	}
}










