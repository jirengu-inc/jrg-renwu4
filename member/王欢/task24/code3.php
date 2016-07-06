<?php
	// echo $_GET;
	header("Content-Type: text/html; charset=UTF-8");
	if ($_GET) {
		$username = trim($_GET['username']);
		$data['result'] = true;
		if ($username == '') {
			$data['result'] = false;
			$data['content'] = '用户名不能为空';
		}
		if ($username == 'hello') {
			$data['result'] = false;
			$data['content'] = '用户名已经存在';
		}

		echo json_encode($data);
	}
	if ($_POST) {
		$username = $_POST['username'];
		if ($username == '') {
			echo '<a href="code3.html">用户名不能为空</a>';
		}else if ($username == 'hello') {
			echo '<a href="code3.html">此用户已经存在</a>';
		}else{
			echo '<a href="code3.html">注册成功</a>';
		}

		
	}
	
?>