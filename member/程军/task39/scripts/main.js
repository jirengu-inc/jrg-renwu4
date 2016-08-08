requirejs.config({
	'baseUrl':"scripts",
	'paths':{
		'jquery':"../lib/jquery",

	}
});
requirejs(['jquery','app/carousel','app/gotop','app/exposure','app/waterfall'],function($,Carousel,GoTop,Exposure,Waterfall){

	new  Carousel($('.img-ct'))  // 创建首页轮播
	new GoTop() ;
	var $nodes=$('.about-ct').children();  
	new Exposure($nodes)
	new Waterfall($('.water-ct'),280)




	
})