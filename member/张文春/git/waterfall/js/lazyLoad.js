/*
	init需要传递2个参数
	$e 是元素
	fun 是懒加载方式
*/

var lazyLoad = (function () {
			// body...
			function checkShow($e,fun){
				$e.each(function () {
					// body...
					var $cur = $(this);
					if ($cur.attr('isLoaded')) {
						return;
					}
					if (isShow($cur)) {
						fun($cur);
					}
				});
			}

			function isShow($e) {
				// body...
				
				var scrollH = $(window).scrollTop(),
					winH = $(window).height(),
					offsetT = $e.offset().top;
				if (offsetT < scrollH + winH) {
					return true;
				}else{
					return false;
				}
			}

			return{
				init:checkShow,
				isShow:isShow
			}
		
		})();