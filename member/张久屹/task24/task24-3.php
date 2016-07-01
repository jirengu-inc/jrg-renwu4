<?php
	$username = $_GET['username'];

	if($username === 'hunger'){
		$ret = 1;
	}else{
		$ret = 0;
	}

	echo $ret;