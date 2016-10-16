	var $imgCt=$(".img-ct");
		$items=$imgCt.children();
		$playnext=$(".playnext");
		$backpaly=$(".backplay");
		$imgCount=$imgCt.children().length;
		$imgWidth=$items.width();
		$bullet=$(".bullet");
		// console.log($imgCount);
		
	$imgCt.append($items.first().clone());
	$imgCt.prepend($items.last().clone());
	$imgRealCount = $imgCt.children().length;
	$imgCt.css({left:0 - $imgWidth,width:$imgRealCount * $imgWidth})




$playnext.on("click",function(){
	playnext();
});
$backpaly.on("click",function(){
	backplay();
});

var num = 0;
var lock =false;
autoplay();

function playnext(setp){
	var setp=setp||1;
	if(!lock){
		lock=true;
		$imgCt.animate({left:'-='+($imgWidth * setp)},function(){
		num=(num+setp)% $imgCount;
		// console.log(num);
		if(num===0){
			$imgCt.css({left:0 - $imgWidth});
		}
		lock=false;
		bullet();
	})
  }
}

function backplay(setp){
	var setp=setp||1
	if(!lock){
		lock=true;
		$imgCt.animate({left:'+='+($imgWidth * setp)},function(){
		num=(num-setp)% $imgCount;
		// console.log(num);
		if(num=== -1){
			$imgCt.css({left:0 - ($imgWidth*$imgCount)});
		}
		lock=false;
		bullet();
	})
	}
}

function bullet(setp){
	var setp=setp||num;
	$bullet.find('li').removeClass('active')
					  .eq(setp).addClass('active');
}

$bullet.find("li").on("click",function(){
	var idx=$(this).index();
	bullet(idx);
	if(idx>num){
		playnext(idx-num);
	}
	if(idx<num){
		backplay(num-idx);
	}
	console.log(idx);
})

function autoplay(){
	setInterval(function(){
		playnext()
	},3000);
}
