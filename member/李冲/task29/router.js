/**
 * 这里是接口范例，可根据需求进行修改
 * 可在当前项目文件夹下直接新建 html文件，向对应接口发送请求
 */


/**
 * 发送 GET 请求， 无参数
 * GET /hello
 * 返回响应数据
 */
app.get('/loaddMore', function(req, res) {
	var start = Number(req.query.start),
	    len = Number(req.query.length),
	    data = [],
	    status = 1;
	for(var i=0;i<len;i++){
		data[i] = start+i;
	}   
			res.send({
			status,
			data
		}); 
});
