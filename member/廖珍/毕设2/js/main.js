requirejs.config({
				baseUrl:'./js/app',
				paths:{
					jquery:'../lib/jquery'
				}
			});
			requirejs(['jquery','mountainMove1','mountainMove2','eventCarousel','freeCarousel'],function($,mountainMove1,mountainMove2,eventCarousel,freeCarousel) {
				mountainMove1.init();
				mountainMove2.init();
				eventCarousel.init();
				freeCarousel.init();
			});