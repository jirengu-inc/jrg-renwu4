
define(['jquery'],function($){

	var curPage = 1,
		perPageCount = 6,
		$target = $('#load');

	var clock = true;

	$('#load').on('click',function(){{
		if(clock){
			clock = false;
			$('#load').text('loading...');
			dosth();	
		}
	}})

	dosth();


	function dosth(){ 
		$.ajax({
			url: 'http://platform.sina.com.cn/slide/album_tech?',
			type: 'get',
			dataType: 'jsonp',
			jsonp: 'jsoncallback',
			data: {
				app_key: '1271687855',
				format: 'json',
				size: 'img',
				num: perPageCount,
				page: curPage
			},
			success: function(ret){
				if(ret.status.code === "0"){
					var $nodes = readerData(ret.data);
					ready($nodes);
					curPage++;
					clock = true;
					$('#load').text('加载更多');
				}else{
					console.log('错了~')
				}
			}
		})
	}


	//拼接数据字符串  <a href='"+arr[i].url+"'    '+list[i].url+'
	function readerData(list){
		var tpl = '',
			$nodes;
		for(var i = 0; i< list.length;i++){
			tpl += '<li class="list">';
			tpl += '<a href="'+list[i].url+'" class="link"><img src="'+list[i].img_url+'"alt=""></a>';
			tpl += '<h4 class="header">'+list[i].short_name+'</h4><hr>';
			tpl += '<p class="desp">'+list[i].short_intro+'</p>';
			tpl += '</li>';
		}
		$nodes = $(tpl);
		$('#main .wrap').append($nodes);
		return $nodes;
	}
	

	//瀑布流，摆放字符串位置
	var listHeight = [];  //数组要摆放在函数外，否则加载top出现问题
	function ready($nodes){

		var listWidth = $nodes.outerWidth(true),
			listNum = parseInt($('#main .wrap').width() / listWidth);
			
		if(listHeight.length == 0){
			for(var i = 0; i<listNum; i++){
				listHeight.push(0);			
			}
			listHeight.length = listHeight.length;	 		
		}


		$nodes.each(function(){
			var $cur = $(this);
			$(this).find('img').on('load',function(){
				//等到图片加载完毕才执行下面的函数，否则会出现高度重叠问题
				var idx = 0,
					min = listHeight[0];
				for(var i= 0; i<listHeight.length;i++){
					if(listHeight[i]< min){
						idx = i;
						min = listHeight[i];
					}
				}
				//遍历数组，获取最小值和最小值的索引数
				$cur.css({
					top: min,
					left: idx * listWidth
				})
				
				listHeight[idx] += $cur.outerHeight(true);
				$('#pic-ct').height(Math.max.apply(null,listHeight));//撑起父元素高度
			})
			
		})
	}
})