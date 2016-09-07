<?php
	header("Content-type: ");
	$user = $_GET['user'];
	if($user == "hunger"){
		$res = array();
		$res["status"] = 0;				//约定失败的状态为0
		$res["msg"] = "该名字已被注册";
		// $res = {
		// 	$status:0, //注册失败为0
		// 	$Msg:"该名字已被注册"
		// }
		//echo "该名字已被注册";
	}
	else{
		$res["status"] = 1;
		$res["msg"] = "该名字可以使用";
	}
	echo json_encode($res);
?>
