            var TVBlack=$('.TV_black');
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
	    	$('.load-hint').delay(500).slideDown(500);
	    	$('.load-desc').delay(1500).slideDown(500);
	    	$('.suggest').delay(3000).slideDown(500)
            setTimeout(function() {
	        $('.load-wrap').slideUp(500);
	        $('.TV').slideDown(500);
            },5000)

	    	TVBlack.data('status','on')
	        status=TVBlack.data('status');
	    	function TV_on_off() {
	    		if(status==="on") {
	    			TVBlack.fadeIn(500);
	    		    TVBlack.data('status','off')
	    		    status=TVBlack.data('status');
	    			console.log(status);
	    		}
	    		else if (status==='off') {
	    			TVBlack.fadeOut(500);
	    			TVBlack.data('status','on');
	    			status=TVBlack.data('status');

	    		}
	    	}
	    	$('.TV-btn').on('click',function() {
	    		TV_on_off();
	    	})
	    	$('.TV-btn2').on("click",function() {
	    		TV_on_off();
	    	})
	    	function moveLeft() {
	    		$('.hint').hide();
	    		$('.info .icon').hide();
	    		photo.find('img').css({width:5+'rem',height:5+'rem',position:'relative',left:-12.5+'rem',top:1+'rem'})
	    		infoName.css({position:'relative',left:0.8+'rem','top':7.5+'rem',margin:0})
	    		educa.css({position:'relative','top':-7+'rem',left:-0.8+'rem'})
	    		gradua.css({positiona:'relative','top':-4.3+'rem',left:-9.3+'rem'})
	    		addr.css({position:'relative',top:-1.6+'rem',left:-17.8+'rem'})
	    		web.css({position:'relative',top:1.1+'rem',left:-26.3+'rem'})
	    		
	    	}
	    	$('.person-info').on('click',function() {
	    		var isClick=false;
	    		if(status==='off') {
	    			isClick=!isClick
	    			$('.off-hint').show();
	    		}
	    		if(status==='on') {
	    			$('.off-hint').hide();
	    		}
	    		if(isClick) {
	    			return
	    		}
	    	
	    		$('.ct').hide();
	    		$('.photo img').removeAttr('style');
	    		$('.info-name').removeAttr('style');
	    		$('.hint').show();
	    		$('.icon').show();
	    		$('.education').removeAttr('style');
	    		$('.graduation').removeAttr('style');
	    		$('.address').removeAttr('style');
	    		$('.web').removeAttr('style');
	    	})
	    	$('.skill-btn').on('click',function() {
	    		var isClick=false;
	    		if(status==='off') {
	    			isClick=!isClick
	    			$('.off-hint').show();
	    		}
	    		if(status==='on') {
	    			$('.off-hint').hide();
	    		}
	    		if(isClick) {
	    			return
	    		}
	    		moveLeft();
	    		$('.skill').show();
	    		$('.study-pro').hide();
	    	})
	    	
	    	function showSkill() {
	    		$('.study-pro').fadeIn(500)
	    		$('.htmlC').slideDown();
	    		$('.jS').delay(800).slideDown();
	    		$('.jQ').delay(1600).slideDown();
	    		$('.bootS').delay(2400).slideDown();
	    		$('.vue').delay(3200).slideDown();
	    		$('.nodeJ').delay(4000).slideDown();
	    		if(document.querySelector('.nodeJ').style.display==='block') {
	    			$('.study-hint').fadeIn(500);
	    		}

	    	}
	    	$('.study-btn').on('click',function() {
	    		var isClick=false;
	    		if(status==='off') {
	    			isClick=!isClick
	    			$('.off-hint').show();
	    		}
	    		if(status==='on') {
	    			$('.off-hint').hide();
	    		}
	    		if(isClick) {
	    			return
	    		}
	    		moveLeft();
	    		$('.skill').hide();
	    		showSkill();
	    	});

	    	 var index=0;
	         var wecol=document.querySelector('.wecol');
	         var word=wecol.innerText;
	         var word1=''
	         console.log(word);
	         var wecomShow=document.querySelector('.wecol-show');
	         console.log(wecomShow);
	         function showText() {
	    	wecomShow.innerText=word.substring(0,index++)
	        word1=wecomShow.innerText;
	        if(word1.length===word.length) {
	    		moveImg();
	    		$('.wecol-show').hide();
	    		moveBox();
	    		setTimeout(moveQuestion,800)
	    }
	    }
	  
	  
	   function moveImg(){
	   		$('.interview .interview-wrap .inter-img').css({top:50+'%','margin-top':-5+'rem',left:0,'margin-left':0,'position':'absolute',transition:'all 0.8s'})
	   		
	   }
	   function moveBox() {
	  
	   	$('#my-a-box').css({position:'absolute',top:50+'%','margin-top':-10+'rem',left:37+'%','margin-left':12.5+'rem',transition:'all 0.8s'})
	   
	   }
	   function moveQuestion() {
	   	$('.q-list').slideDown();
	   	$('.q-list-1').css({left:8+'%',top:30+'%'});
	   	$('.q-list-2').css({left:15+'%',top:40+'%'});
	   	$('.q-list-3').css({left:22+'%',top:50+'%'});
	   	$('.q-list-4').css({left:18+'%',top:60+'%'});
	   	$('.q-list-5').css({left:8+'%',top:70+'%'})
		   }
	 


	 $('.interview-btn ').on('click',function() {
	 	var isClick=false;
	    		if(status==='off') {
	    			isClick=!isClick
	    			$('.off-hint').show();
	    		}
	    		if(status==='on') {
	    			$('.off-hint').hide();
	    		}
	    		if(isClick) {
	    			return
	    		}
	 	$('.TV').hide();
	 	$('.interview').show();
	 	setInterval(showText,400);
	 	setTimeout(function() {
	 		$('.a-hint').show()
	 	},6000)
	 });

	 $('.q-list-1').on('click',function() {
	 	$('.a-hint').hide();
	 	$('.my-a-box div').hide();
	 	$('.my-a-box .a-1').show();
	 	$('.a-1 .a-1-1').delay(200).slideDown();
	 	$('.a-1 .a-1-2').delay(1000).slideDown();
	 	$('.a-1 .a-1-3').delay(2000).slideDown();
	 	$('.a-1 .a-1-4').delay(3000).slideDown();
	 	$('.a-1 .a-1-5').delay(4000).slideDown();
	 	$('.a-1 .a-1-6').delay(5000).slideDown();	
	 	$('.a-1 .a-1-7').delay(6000).slideDown();	 	
	 })
	 $('.q-list-2').on('click',function() {
	 	
	 	$('.my-a-box>div').hide();
	 	$('.my-a-box .a-2').show();
	 	$('.a-hint').hide();
	 	$('.a-2 .a-2-1').delay(200).slideDown();
	 	$('.a-2 .a-2-2').delay(1000).slideDown();
	 	$('.a-2 .a-2-3').delay(2000).slideDown();
	 	$('.a-2 .a-2-4').delay(3000).slideDown();
	 	$('.a-2 .a-2-5').delay(4000).slideDown();
	 	$('.a-2 .a-2-6').delay(5000).slideDown();	
	 	$('.a-2 .a-2-7').delay(6000).slideDown();	 	
	 })
	 $('.q-list-3').on('click',function() {
	 	$('.a-hint').hide();
	 	$('.my-a-box div').hide();
	 	$('.my-a-box .a-3').show();
	 	$('.a-3 .a-3-1').delay(200).slideDown();
	 	$('.a-3 .a-3-2').delay(1000).slideDown();
	 	$('.a-3 .a-3-3').delay(2000).slideDown();
	 	$('.a-3 .a-3-4').delay(3000).slideDown();
	 	$('.a-3 .a-3-5').delay(4000).slideDown();
	 	$('.a-3 .a-3-6').delay(5000).slideDown();	
	 	$('.a-3 .a-3-7').delay(6000).slideDown();	 	
	 })
	 $('.q-list-4').on('click',function() {
	 	$('.a-hint').hide();
	 	$('.my-a-box div').hide();
	 	$('.my-a-box .a-4').show();
	 	$('.a-4 .a-4-1').delay(200).slideDown();
	 	$('.a-4 .a-4-2').delay(1000).slideDown();
	 	$('.a-4 .a-4-3').delay(2000).slideDown();
	 	$('.a-4 .a-4-4').delay(3000).slideDown();
	 	$('.a-4 .a-4-5').delay(4000).slideDown();
	 	$('.a-4 .a-4-6').delay(5000).slideDown();	
	 	$('.a-4 .a-4-7').delay(6000).slideDown();	 	
	 })
	 $('.q-list-5').on('click',function() {
	 	$('.a-hint').hide();
	 	$('.my-a-box div').hide();
	 	$('.my-a-box .a-5').show();
	 	$('.a-5 .a-5-1').delay(200).slideDown();
	 	$('.a-5 .a-5-2').delay(1000).slideDown();
	 	$('.a-5 .a-5-3').delay(2000).slideDown();
	 	$('.a-5 .a-5-4').delay(3000).slideDown();
	 	$('.a-5 .a-5-5').delay(4000).slideDown();
	 	$('.a-5 .a-5-6').delay(5000).slideDown();	
	 	$('.a-5 .a-5-7').delay(6000).slideDown();	 	
	 })

	 $('.other-btn').on('click',function() {
	 	var isClick=false;
	    		if(status==='off') {
	    			isClick=!isClick
	    			$('.off-hint').show();
	    		}
	    		if(status==='on') {
	    			$('.off-hint').hide();
	    		}
	    		if(isClick) {
	    			return
	    		}
	 	$('.TV').hide();
	 	$('.other-skill').show();
	 	$('.polarorid').css({display:'block'})
	 	$('.img1 img').delay(400).slideDown();
	 	$('.img2 img').delay(600).slideDown();
	 	$('.img3 img').delay(800).slideDown();
	 	$('.img4 img').delay(1200).slideDown();
	 	$('.img5 img').delay(1200).slideDown();
	 	$('.img6 img').delay(1400).slideDown();
	 	$('.img7 img').delay(1600).slideDown();
	 	$('.img8 img').delay(1800).slideDown();
	 	$('.img9 img').delay(2000).slideDown();
	 	$('.img10 img').delay(2200).slideDown();
	 	$('.img11 img').delay(2400).slideDown();
	 	$('.img12 img').delay(2600).slideDown();
	 	$('.img13 img').delay(2800).slideDown();
	 	$('.img14 img').delay(3000).slideDown();
	 	$('.img15 img').delay(3200).slideDown();
	 	$('.desc1 .p1').delay(3000).fadeIn(1000);
	 	$('.desc1 .p2').delay(5000).css({position:"relative",top:2+'rem'}).fadeIn(1000);
	 	$('.desc1 .p3').delay(7000).css({position:"relative",top:6+'rem'}).fadeIn(1000);
	 	$('.desc2 .p4').delay(9000).css({position:"relative",top:2+'rem'}).fadeIn(1000);
	 	$('.desc2 .p5').delay(11000).css({position:"relative",top:4+'rem'}).fadeIn(1000);
	 	$('.desc2 .p6').delay(13000).css({position:"relative",top:8+'rem'}).fadeIn(1000);
	 	$('.desc2 .p7').delay(15000).css({position:"relative",top:10+'rem'}).fadeIn(1000);
	 })


	 $('.cancel-btn').on('click',function() {
	 	$('.interview').fadeOut(200);
	 	$('.other-skill').fadeOut(200);
	 	$('.TV').fadeIn(200);
	 })
	

	$('.moreWork').on('click',function() {
		$('.TV_black').show();
		$('.TV').addClass('TV-move');
		
		$('.Work').slideDown(500);
		$('.Work').addClass('Work-move');
	});
	$('.backTv-btn').on('click',function() {
		$('.Work').removeClass('Work-move');
		$('.Work').slideUp(500);
		$('.TV').removeClass('TV-move');
	})