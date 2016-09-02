requirejs.config({
	baseUrl: 'js',
	paths:{
		'jquery':"http://apps.bdimg.com/libs/jquery/1.9.1/jquery"
	}
})

requirejs(['gotop']);
requirejs(['carousle']);
requirejs(['waterfall']);
requirejs(['layload']);
