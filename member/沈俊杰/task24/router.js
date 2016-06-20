app.get('/getMore', function(req, res) {

	var start = parseInt(req.query.start) + 1,
		length = parseInt(req.query.length);

	var data = [];

	for (var i = start; i < length + start; i++) {
		data.push(i);
	}

	res.send({
		status: 1,
		data: data
	});
});

app.post('/register', function(req, res) {

	var user_name = req.body.name;
	var psw = req.body.psw;

	var STATUS = 1;

	if (user_name === "hunger") {
		STATUS = 0;
	}

	res.send({
		status: STATUS
	});
});