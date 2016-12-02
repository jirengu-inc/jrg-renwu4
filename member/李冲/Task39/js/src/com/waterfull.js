define(['jquery'],function($){
	var isLocked = false;
	var curPage = 1,
	    perPageCount = 9;
	loadMore();
	function loadMore(){
		$.ajax({
			url:'http://platform.sina.com.cn/slide/album_tech',
			dataType:'jsonp',
			jsonp:'jsoncallback',
			data:{
				app_key:1271687855,
				num:perPageCount,
				page:curPage
			},
			success:function(result){
                if(result.status.code === '0'){
                	var $nodeList = place(result.data);
                	render($nodeList);
                	curPage++;
                }else{
                	alert('获取失败！');
                }
			}
		})	
	}
	$('#load-more').on('click',function(){
		if(isLocked)return;
		isLocked = true;
		$(this).text('加载中...');
		loadMore();
		$(this).text('加载更多');
		isLocked = false;
	})  
	function place(liArr){
		var tpl = '',
		    $nodes;
		for(var i=0;i<liArr.length;i++){
			tpl+='<li class = "item">';
			tpl+='<a href="'+liArr[i].url+'" class="link">';
			tpl+='<img src="'+liArr[i].img_url+'"/></a>';
			tpl+='<h4 class="header">'+liArr[i].short_name+'</h4>';
			tpl+='<p class="description">'+liArr[i].short_intro+'</p></li>'
		}
		var $nodes = $(tpl);
		$('#picture').append($nodes);
		return $nodes;    
	}  
	var wrapWidth = $('.waterfull').width(),
	    itemWidth = $('.item').outerWidth(true),
	    cols = Math.floor(wrapWidth/itemWidth),
        colSum = [];
    for(var i=0;i<cols;i++){
    	colSum.push(0);
    }    
	function render($ele){
		$ele.each(function() {
			var $cur = $(this);
			$(this).find("img").on("load", function() {
				var idx = 0;
				minH = colSum[0];
				for (var i = 0; i < colSum.length; i++) {
					if (minH > colSum[i]) {
						minH = colSum[i];
						idx = i;
					}
				}
				$cur.css({
					left: idx * itemWidth,
					top: minH
				});
				colSum[idx] = colSum[idx] + $cur.outerHeight(true);
				$("#picture").height(Math.max.apply(null, colSum));
			})
		})
	}
})	
	
