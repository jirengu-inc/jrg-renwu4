function({
	var move={
		init:function() {
			$('.TV_black').data('status','on');
			this.status=$('.TV_black').data('status');
			this.bind();
			setTimeout(function() {
				$('.load-wrap').slideDown(500);
				$('.TV').slideDown(500);
			},4000);
		},
		bind:function() {
			var $cur=this;
			$('.TV-btn').on('click',function() {
	    		$cur.TV_on_off();
	    	})
	    	$('.TV-btn2').on("click",function() {
	    		$cur.TV_on_off();
	    	})

		},
		function TV_on_off() {//控制电视开关
			var $cur=this;
			if($cur.status==="on") {
	    			TVBlack.fadeIn(500);
	    		    TVBlack.data('status','off')
	    		    $cur.status=TVBlack.data('status');
	    		}
	    		else if ($cur.status==='off') {
	    			TVBlack.fadeOut(500);
	    			TVBlack.data('status','on');
	    			$cur.status=TVBlack.data('status');

	    		}
		},
		function moveLeft() {
			var photo=$('.photo');
	    	var infoName=$('.info-name');
	    	var educa=$('.education');
	    	var gradua=$('.graduation');
	    	var addr=$('.address');
	    	var web=$('.web');
	    	var offsetL=$('.info-warp').offset().left;
	    	var offsetT=$('.info-warp').offset().top;
	    	var offsetT1=$('.view-warp').offset().top;
	    	var boxW=$('.box').width();
	    	var boxH=$('.box').height();
	    	$('.hint').hide();
	    		$('.info .icon').hide();
	    		photo.find('img').css({width:5+'rem',height:5+'rem',position:'relative',left:-12.5+'rem',top:1+'rem'})
	    		infoName.css({position:'relative',left:0.8+'rem','top':7.5+'rem',margin:0})
	    		educa.css({position:'relative','top':-7+'rem',left:-0.8+'rem'})
	    		gradua.css({positiona:'relative','top':-4.3+'rem',left:-9.3+'rem'})
	    		addr.css({position:'relative',top:-1.6+'rem',left:-17.8+'rem'})
	    		web.css({position:'relative',top:1.1+'rem',left:-26.3+'rem'})
		}

	}
})()