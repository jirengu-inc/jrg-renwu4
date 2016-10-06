var water = (function ($e) {
		// body...
		var colH = [];
		function render($e) {
			render.$e = $e;
			var nodeWith = $e.outerWidth(true),
				colNum = parseInt($e.parent().width()/nodeWith);
			if (colH.length == 0) {
					for (var i = 0; i < colNum; i++) {
					colH.push(0);
			}};

			$e.each(function () {
				var $cur = $(this);
					var idx = 0,
					mincolH = colH[0];

					for (var i = 0; i < colH.length; i++) {
						if (colH[i]<mincolH) {
							idx = i;
							mincolH = colH[i];
						}
					}

					$cur.css({
						left:nodeWith*idx,
						top:mincolH
					});
					colH[idx] += $cur.outerHeight(true);
			});

		}
			$(window).on('resize',function (argument) {
				// 因为colH是在函数外部声明的，所以在使用之前需要先清空。
				colH = [];
				render(render.$e.parent().children());
			});
			return {
				init:render	
			}
	})();