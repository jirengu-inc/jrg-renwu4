/**
 * 这里是接口范例，可根据需求进行修改
 * 可在当前项目文件夹下直接新建 html文件，向对应接口发送请求
 */


/**
 * 发送 GET 请求， 无参数
 * GET /hello
 * 返回响应数据
 */
app.get('/loadMore',function(req,res){
	var start = Number(req.query.start),
		listLength = Number(req.query.listLength),
		status = 1,
		data = [];
		for (var i = 0; i < listLength; i++) {
			data.push(start+i);
		}
		res.send({
			status,
			data
		});

		
});

/**
 * 发送 GET 请求, 有参数
 * GET /user/100
 * query = { name: 'ruoyu', age: 28 }
 */
app.get('/user/:uid', function(req, res) {
	console.log(req.params.uid); //100
	console.log(req.query.name); // 'ruoyu'
	res.send({
		status: 1,
		errorMsg: "请先注册"
	});
});


/**
 * 发送 POST 请求， 有参数
 * POST /comment
 * query = { comment: "这是评论内容" }
 */
app.post('/register',function(req,res){
	var user = req.data.name,
	    pwd = req.data.pwd，
        obj = {};
	if(user === "lccc"){
		 obj = {
			status: 0
		};
	}
	else {
		 obj = {
			status: 1
		  };
	}
	
	
	res.send(obj);
})



/**
 * 页面路由，从模板渲染页面渲染页面, 
 * htttp://localhost:8080/user
 * 支持 ejs, jade 模板
 */
app.get('/user', function(req, res) {
	res.render('user.ejs', {
		username: '饥人谷'
	});
});