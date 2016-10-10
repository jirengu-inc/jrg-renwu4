define(['jquery'],function($){
	var waterfall={
				init:function() {
					this.$target=$('.load');
					this.page=1;
					this.len=12;
					this.scrollT=$(window).scrollTop();
					this.winH=$(window).height();
					this.clock;
					this.colSumHeight=[];
					console.log(this.page);
				},
				bind:function() {
					var $cur=this;
					$cur.$target.on('click',function() {
						if($cur.clock) {
							clearTimeout($cur.clock);
						}
						
						$cur.clock=setTimeout(function() {
							$cur.checkShow()
						},100);
					});
				},
				checkShow:function() {
					var $cur=this;
					if($cur.isShow($cur.$target)) {
						$cur.dosth();
					}
					console.log(2);
				},
				isShow:function() {
					var $cur=this;
					
					
					console.log($cur.winH+$cur.scrollT);
					if(500<$cur.winH+$cur.scrollT) {
						return true;
					}else {
						return false;
					}
				},
				dosth:function() {
					var $cur=this;
					$.ajax({
						url:'http://platform.sina.com.cn/slide/album_tech',
						type:'get',
						dataType:'jsonp',
						jsonp:'jsoncallback',
						data:{
							app_key:'1271687855',
							num:$cur.len,
							page:$cur.page
						},
						success:function(ret) {
							if(ret.status.code==='0') {
								$cur.dataArr=ret.data;
								$cur.nodes=$cur.renderData($cur.dataArr);
								console.log(ret.data);
								console.log($cur.nodes);
								$cur.render($cur.nodes);
								$cur.page++;
								console.log($cur.page);
							}
						}
					});
				},
					renderData:function(items) {
						var tpl = '',
						$nodes;
						console.log($nodes);
					    for(var i = 0;i<items.length;i++){
						tpl += '<li class="item">';
						tpl += ' <a href="'+ items[i].url +'" class="link"><img src="' + items[i].img_url + '" alt=""></a>';
						tpl += ' <h4 class="header">'+ items[i].short_name +'</h4>';
						tpl += '<p class="desp">'+items[i].short_intro+'</p>';
						tpl += '</li>';
					    }
					    $nodes = $(tpl);
					    console.log($nodes);

					    $('.por-list').append($nodes);
					    return $nodes;
				},
				render:function($nodes) {
					var $cur=this;
						$cur.nodeWidth=$nodes.outerWidth(true);
						console.log($cur.nodeWidth);
						$cur.sumWidth=$('.por-list').width();
						$cur.colNum=parseInt($cur.sumWidth/$cur.nodeWidth);
						console.log($cur.colNum);
						console.log($cur.colSumHeight.length);
						if($cur.colSumHeight.length===0) {
							for(var i=0;i<$cur.colNum;i++) {
								$cur.colSumHeight.push(0);
							}
						}
					console.log($cur.colSumHeight);
					$nodes.each(function() {
						var $cur1=$(this);
						$cur1.find('img').on('load',function() {
							$cur.idx=0;
							console.log($cur.colSumHeight);
							$cur.minHeight=$cur.colSumHeight[0];
							for(var i=0;i<$cur.colSumHeight.length;i++) {
								if($cur.colSumHeight[i]<$cur.minHeight) {
									$cur.idx=i;
									$cur.minHeight=$cur.colSumHeight[i]
								}
							}
							$cur1.css({
								left:$cur.idx*$cur.nodeWidth,
								top:$cur.minHeight
							});
							$cur.colSumHeight[$cur.idx]+=$cur1.outerHeight(true);
							 $('.por-list').height(Math.max.apply(null,$cur.colSumHeight));
						});
					});
				},
				open:function() {
					var $cur=this;
					$cur.init();
					$cur.bind();
					$cur.checkShow();
				}
	}
	return waterfall;
})