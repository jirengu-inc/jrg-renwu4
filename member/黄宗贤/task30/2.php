<?php
	$start = $_GET['start'];
	$leng = $_GET['leng'];
	$arr = array();

	for($i=0;$i<$leng;$i++){
		array_push($arr,'内容'.($start+$i+1));
	}

	$res = array("status"=>"1","data"=>$arr);
	echo json_encode($res);
?>
