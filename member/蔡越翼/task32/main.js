$(function(){
	var $wrap = $('.wrap'),
		$ct = $('.ct'),
		$load = $('.load'),
		$loadH = $load.offset().top,
		$clock,
		$perPageCount = 10,
		$curPage = 1;
	showList();
	// 当窗口滚动的时候，如果 load 出现在视野，那么执行加载数据并渲染
	$(window).on('scroll',function(){
		if($clock){
			clearTimeout($clock);
		}
		$clock = setTimeout(function(){
			if(isVisible($load)){
				showList();
			}
		},200)
	});
	//判断load是否在可视范围内
	function isVisible($node){
		var windowH = $(window).height(),
			scrollH = $(window).scrollTop();
			if($loadH < windowH + scrollH){
				return true;
			}else{
				return false;
			}
	}
	//渲染获得的数据，并排列
	function distribute(data){
		var $list = render(data);
		var defers = [];             
		$list.find('img').each(function(){
			var deferred = $.Deferred();     //使用延迟对象，所有图片加载完毕处于已执行状态后调用瀑布流函数
			$(this).load(function(){
				deferred.resolve();
			});
			defers.push(deferred);
		});
		$.when.apply(null,defers).done(function(){
			waterfall.start($list);
		});
	}
	//将获取数据拼接为html字符串，追加到列表中
	function render(data){
		var $data = data;
			var str = '';
			for(var i=0;i<$data.length;i++){
				str += '<li class="item">';
				str += '<a href="'+$data[i].url+'"><img src='+$data[i].img_url +'></a>';
				str += '<h3 class="item-name">'+$data[i].short_name+'</h3>';
				str += '<p class="item-intro">'+$data[i].short_intro +'</p>';
				str += '</li>'
			}
			var $node = $(str);
			$ct.append($node);
			return $node;
	}
	//获取数据
	function showList(){
		$.ajax({
			url: 'http://platform.sina.com.cn/slide/album_tech',
			type: 'get',
			dataType: 'jsonp',
			jsonp: 'jsoncallback',
			data: {
				app_key: '1271687855',
				num: $perPageCount,
				page: $curPage
			},
			success: function(ret){
				if(ret && ret.status && ret.status.code === "0"){
					distribute(ret.data);
					$curPage++;
				}
			}
		});
	}
});