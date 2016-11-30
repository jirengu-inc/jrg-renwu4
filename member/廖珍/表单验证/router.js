/**
 * 这里是接口范例，可根据需求进行修改
 * 可在当前项目文件夹下直接新建 html文件，向对应接口发送请求
 */


/**
 * 发送 GET 请求， 无参数
 * GET /hello
 * 返回响应数据
 */

app.post('/register', function(req, res) {
	var username=req.query.username;
	console.log(username);
	var STATUS;
	if(username==='hunger') {
		STATUS=0;
	}else {
		STATUS=1;
	}
	
	res.send({
		status:STATUS
	});
});

app.get('/getMore',function(req,res){
	var start=parseInt(req.query.start)+1;
	var len=parseInt(req.query.len);
	var data=[];
	console.log(start);
	console.log(len);
	console.log(start+len);
	for(var i=start;i<start+len;i++) {
		data.push(i)
	}
	res.send({
		status:0,
		data:data
	})
})

/**
 * 页面路由，从模板渲染页面渲染页面, 
 * htttp://localhost:8080/user
 * 支持 ejs, jade 模板
 */
