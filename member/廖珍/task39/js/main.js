requirejs.config({
	baseUrl:'./js',
	paths:{
		'jquery':'./lib/jquery'
	}
});
require(['jquery','app/carousel','app/goTop','app/lazyImg','app/stickUp','app/waterfall'],function($,Carousel,lazyImg,goTop,stickUp,waterfall){
	new Carousel($('.carousel'));
	goTop.init();
	lazyImg.init();
	stickUp.init();
	waterfall.open();
});