$(function(){
	
	$('.add').on('click',function(){
		$('.test').addClass('active');
	});
	$('.remove').on('click',function(){
		$('.test').removeClass('active');
	});
	$('.show').on('click',function(){
		$('.test').show();
	});
	$('.hide').on('click',function(){
		$('.test').hide();
	});

	$('.get').on('click',function(){
		var str = '图片信息 id: "'+$('.demo').attr("id")+'" src: "'+$('.demo').attr("src")+'" title: "'+$('.demo').attr("title")+'"';
		$('.attr').text(str);
	});
	$('.set').on('click',function(){
		$('.demo').attr({id:'demo1',src:'./img/b.jpg',title:'demo-b'});
		$('.attr').text('');
	})
	$('.setData').on('click',function(){
		$('.demo').attr('data-src','.img/abc.jpg');
		var str = $('.demo').attr('data-src');
		$('.data-src').text(str);
	});

	$('.before').on('click',function(){
		$newHtml = $('<p class="node">添加在最开始的元素</p>');
		$('.ct').prepend($newHtml);
	})
	$('.after').on('click',function(){
		$newHtml = $('<p class="node">添加在最末尾的元素</p>');
		$('.ct').append($newHtml);
	})
	$('.rmElement').on('click',function(){
		$('.ct .node').remove();
	})
	$('.clear').on('click',function(){
		$('.ct').html('');
	})

	$('.showCtHtml').on('click',function(){
		$('.ctHtml').text($('.ct1').html());
	});
	$('.addCtHtml').on('click',function(){
		$('.ct1').html('<div class="btn">btn</div>');
	});

	$('.getSize').on('click',function(){
		$('.showSize').eq(0).text('不包括内边距宽高：'+$('.ct2').width()+' '+$('.ct2').height());
		$('.showSize').eq(1).text('包括内边距宽高：'+$('.ct2').innerWidth()+' '+$('.ct2').innerHeight());
		$('.showSize').eq(2).text('包括内边距，边框'+$('.ct2').outerWidth()+' '+$('.ct2').outerHeight());
		$('.showSize').eq(3).text('包括内边距，边框,'+$('.ct2').outerWidth(true)+' '+$('.ct2').outerHeight(true));
	})
	$('.setSize').on('click',function(){
		$('.ct2').css({width:($('.ct2').width()+10+'px'),height:($('.ct2').height()+10+'px')});
	});

	$('.slTop').on('click',function(){
		$('.showSlTop').text($('body').scrollTop());
	})
	$('.offset').on('click',function(){
		var offset = $('.showOffset').offset();
		$('.showOffset').text('left: "'+offset.left+'",top: "'+offset.top+'"');
	})

	$('.cgCss').on('click',function(){
		$('.showCss').css({color:'red',fontSize:'14px'});
	})


	$('.replay').on('click',function(){
		$('.ct3 li').each(function(i){
			var temp =$('<li>'+$('.ct3 li').eq(i).text()+'</li>');
			$('.ct3').append(temp);
		})
	});

	$('.getItem').on('click',function(){
		$('.ct4').find('.item').css('background','pink');
	})
	$('.getAll').on('click',function(){
		$('.ct4').children().css('background','gray');
	})

	$('.getPanel').on('click',function(){
		$('.current').css('background','#fff').parents('.ct5').find('.panel').css('background','pink');
	})

	$('.getLength').on('click',function(){
		$('.showLength').text('共有：'+$('.ct6 li').length+' 个li元素');
	})
	$('.getIdx').on('click',function(){
		$('.showIdx').text('灰色元素的兄弟排行：'+$('.ct6').find('.idx').index());
	})

});