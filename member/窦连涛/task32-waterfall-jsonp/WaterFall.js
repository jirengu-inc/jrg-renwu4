var WaterFall = {

	init:function($node){
		$nodeWidth = $node.outerWidth(true);
		$colNum = parseInt($(window).width()/$nodeWidth);
		$colHeight = [];
		for (var i = 0; i < $colNum; i++) {
			$colHeight.push(0);
		}

		$node.each(function(){
				var $cur = $(this),
				 $idx = 0,
				 $minHeight = $colHeight[0];

				for (var i = 0; i < $colHeight.length; i++) {
					if($colHeight[i] < $minHeight){
						$idx = i;
						$minHeight = $colHeight[i];
					}
				}

				$cur.css({
					left:$nodeWidth * $idx,
					top:$minHeight
				});//摆放位置

				$colHeight[$idx] =  $cur.outerHeight(true) + $colHeight[$idx];
				// 计算高度
		})
	}

	}
