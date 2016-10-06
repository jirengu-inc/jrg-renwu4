$(function(){
	var sidebarIsClosed = false;
		//开启主体
		$('#sidebar li').on('click',function (e) {
			// body...
			var $this = $(this);
			$('.nav-content').hide();
			var mycon = "."+$this.attr('mycon');
			$(mycon).show().addClass('nav-con-open');

		});
		//关闭bar
		$('#closeBar').on('click',function (e) {
			// body...
			$this = $(this);
			if (!sidebarIsClosed) {
				$this.addClass('closeBar-a');
				// $('#sidebar).css('left':'100px');
				$('#sidebar').css('left','-100px');
				$('.nav-content').hide();
				sidebarIsClosed = true;
			}else{
				console.log(1);
				$this.removeClass('closeBar-a');
				$('#sidebar').css('left','0px');
				sidebarIsClosed = false;
			}
		});
		//关闭主体
		$('.nav-content').on('click',function(e){
			$this = $(this);
			//是否是关闭按钮
			if (e.target.tagName === 'I') {
				$this.hide();
			}
		});


		var $menuList = $('.menuRight>ul>li'),
		$menu = $('.menuRight'),
		currentId = '';
		$menuList.on('click',function (e) {
			var $this = $(this);
			$this.addClass('current');
			$this.siblings().removeClass('current');
		});
		$(window).on('scroll',function(){
			var scrollH = $('body').scrollTop(),
				item4offsetT = $('#item4').offset().top;
				items = $('.item');
			items.each(function($e){
				var $this = $(this);
				var $stickTop = $('#stickTop');
				if (scrollH > item4offsetT) {
					$stickTop.show();	
				}else{
					$stickTop.hide();
				}
				if (scrollH + 200 > $this.offset().top) {
					currentId = '#' + $this.attr('id');
				}else{
					return false;
				}
			});
			var currentMenu = $menu.find('.current');
			if (currentMenu.attr('href')!=currentId) {
				console.log(currentMenu);
				currentMenu.removeClass('current');
				$menu.find("[href=" + currentId + "]").addClass("current");
			}
		});

});
		