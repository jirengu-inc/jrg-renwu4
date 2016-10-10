$(function () {
	
	var clock;
	$(window).on('scroll',function() {
		var m = $('#pic-ct li:last-child');
		console.log(m);
		if(clock){
	      clearTimeout(clock);
	    }

	    clock = setTimeout(function(){
	      	if (lazyLoad.isShow(m)) {
	      	// if (lazyLoad.isShow($('#load'))) {
				loadAndPlace();
			}
	    }, 200);
	});
//载入页面需要执行一次。
	loadAndPlace();
// 获取数据，并且摆放位置
		  // var curPage = 10;
		  // var perPageCount = 12;

	function loadAndPlace(){
		 var curPage = 10;
		  var perPageCount = 12;
		$.ajax({
			url: 'http://platform.sina.com.cn/slide/album_tech',
			dataType: 'jsonp',   //这里使用了新浪新闻的 jsonp 接口，大家可以直接看数据， 如： http://platform.sina.com.cn/slide/album_tech?jsoncallback=func&app_key=1271687855&num=3&page=4
			jsonp:"jsoncallback",
			data: {
				app_key: '1271687855',
				num: perPageCount,
				page: curPage
			}
		}).done(function(ret){
			if(ret && ret.status && ret.status.code === "0"){
				place(ret.data);   //如果数据没问题，那么生成节点并摆放好位置
			}else{
				console.log('get error data');
			}
		});
	}

	
	function place(nodeList){
		var $nodes = renderData(nodeList);  
		var defereds = [];  //创建存储 defered 对象的数组
		$nodes.find('img').each(function(){
			var defer = $.Deferred();
			$(this).load(function(){
				defer.resolve();
		});   //当每个图片加载完成后，执行 resolve
		defereds.push(defer);
	});
	$.when.apply(null,defereds).done(function() { //当所有的图片都执行 resolve 后，即全部图片加载后，执行下面的内容
		console.log('new images all loaded ...');
		//当节点里的图片全部加载后再使用瀑布流计算，否则会因为图片未加载 item 高度计算错误导致瀑布流高度计算出问题

		lazyLoad.init($nodes,showIt);
		water.init($nodes);
	});
}

function showIt($e) {
	$e.css({
			opacity: 1
		});
}

function renderData(items){
	var tpl = '',
		$nodes;
	for(var i = 0;i<items.length;i++){
		tpl += '<li class="item">';
		tpl += ' <a href="'+ items[i].url +'" class="link"><img src="' + items[i].img_url + '" alt=""></a>';
		tpl += ' <h4 class="header">'+ items[i].short_name +'</h4>';
		tpl += '<p class="desp">'+items[i].short_intro+'</p>';
		tpl += '</li>';
	}
	$nodes = $(tpl);
	$('#pic-ct').append($nodes);
	return $nodes;
}
});