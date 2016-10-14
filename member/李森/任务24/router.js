/**
 * 这里是接口范例，可根据需求进行修改
 * 可在当前项目文件夹下直接新建 html文件，向对应接口发送请求
 */


/**
 * 发送 GET 请求， 无参数
 * GET /hello
 * 返回响应数据
 */

 // ajax 加载更多
app.get('/ind', function(req, res) {
	var start = +req.query.start;
	var len = +req.query.len;
	var data = [];
	for(var i=start; i<start+len; i++){
		data.push(i);
	}
	res.send({
		status: 0,
		data: data
	});
});


/**
 * 发送 GET 请求, 有参数
 * GET /user/100
 * query = { name: 'ruoyu', age: 28 }
 */
     //ajax 表单验证
app.get('/form', function(req, res) {
	var names = 'hunger sen';
	var name = req.query.name;
    var reg = new RegExp( '(^|\\s)'+name+'(\\s|$)');
    var yesorno = reg.test(names);
	res.send({
		status: 0,
		data: yesorno

	});
});



app.get('/f', function(req, res) {
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