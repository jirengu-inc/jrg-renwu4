/**
 * 这里是接口范例，可根据需求进行修改
 * 可在当前项目文件夹下直接新建 html文件，向对应接口发送请求
 */
 function isLegalPassword(str){
     if(str.length < 6 || str.length > 16){
         return false;
     }
     //如果包含上述四种以外的字符，false
     if(/[^A-Za-z_0-9]/.test(str)){
         return false;
     }

     //如果全为大写、小写、下划线、数字, false
     if( /(^[a-z]+$)|(^[A-Z]+$)|(^_+$)|(^\d+$)/g.test(str) ){
         return false;
     }
     return true;
 }

/**
 * 发送 GET 请求， 无参数
 * GET /hello
 * 返回响应数据
 */
// app.get('/', function(req, res) {
//  	res.send({
//  		status: 0,
//  		msg: "hello 饥人谷"
//  	});
//  });
app.get('/ajax', function(req, res) {
	var start = parseInt(req.query.start),
			len = parseInt(req.query.len);
	var data = [];
	for (var i = start+1; i <= start+len; i++) {
		data.push(i);
	}
	res.send({
		status: 0,
		data: data
	});
});

app.get('/username', function(req, res) {
	var user = req.query.user;
	var patten = /[a-z0-9_]{3,10}/;
	console.log(patten.test(user));
	if(user === "" || patten.test(user) === false){
		 state = {
			status: 0,
			data: "用户名格式不正确"
		};
	}else if(user == "hunger"){
		state = {
			status: 0,
			data: "用户名已经存在"
		};
	}else{
		state = {
			status: 1,
			data: "用户名可用"
		};
	}
res.send(state);
});

app.get('/pass', function(req, res) {
	var pass = req.query.pass;
	if(pass === "" || isLegalPassword(pass) === false ){
		 state = {
			status: 0,
			data: "密码格式不正确"
		};
	}else{
		state = {
			status: 1,
			data: true
		};
	}
res.send(state);
});

app.get('/pass1', function(req, res) {
	var pass = req.query.pass;
	var pass1 = req.query.pass1;
	if( pass!=pass1  ){
		 state = {
			status: 0,
			data: "两次密码输入不一致"
		};
	}else{
		state = {
			status: 1,
			data: true
		};
	}
res.send(state);
});

app.get('/h', function(req, res) {
	res.send({
		status: 0,
		msg: "hello 饥人谷"
	});
});

app.get('/test', function(req, res) {
	setTimeout(function(){
		res.send({
			status: 0,
			msg: "hello "
		});
	},100000);
});

/**
 * 发送 GET 请求, 有参数
 * GET /user/100
 * query = { name: 'ruoyu', age: 28 }
 */
// app.get('/user/:uid', function(req, res) {
// 	console.log(req.params.uid); //100
// 	console.log(req.query.name); // 'ruoyu'
// 	res.send({
// 		status: 1,
// 		errorMsg: "请先注册"
// 	});
// });


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
