/**
 * 这里是接口范例，可根据需求进行修改
 * 可在当前项目文件夹下直接新建 html文件，向对应接口发送请求
 */


/**
 * 发送 GET 请求， 无参数
 * GET /hello
 * 返回响应数据
 */
app.get('/hello', function(req, res) {
	res.send({
		status: 0,
		msg: "hello 饥人谷"
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
app.post('/comment', function(req, res) {
	console.log(req.body.comment); // "这是评论内容"
	res.send({
		status: 0,
		data: {
			cid: 100,
			comment: "这是评论内容"
		}
	});
});



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




//task 24-2 用于加载更多
app.get('/continue', function(req, res) {
	var start = req.query.start;
	var num   = req.query.num;
	var sum   = parseInt(start) + parseInt(num);
	var li = '';
	for(i = start;i< sum;i++){
		console.log(i);
		li += '<li>内容'+i+'</li>'
	}
	res.send({
		status: 0,
		msg: li
	});
});


//task 24-3 表单验证
app.post('/verification', function(req, res) {
	var username = req.body.user,
	    str = "";
	if( username == "hunger"){
		str = "用户名已经存在";
	}else{
		str = "用户名可用"
	}
	res.send({
		status: 0,
		data: {
			cid: 100,
			msg: str
		}
	});
});