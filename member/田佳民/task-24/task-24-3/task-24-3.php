<?php
	header("Content-type: ");
	header('content-type:text/html;charset="utf-8"');
	$username = $_POST['username'];
	if($username === '123'){
		$ret = 1;
	}else{
		$ret = 0;
	}
	echo $ret;
 ?>
