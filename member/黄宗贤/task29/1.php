<?php
	$start = $_GET['start'];
	$leng = $_GET['leng'];
	$arr = array();

	for( $i=0; $i<$leng; $i++){
		$arr[$i]  = "内容".($start + $i + 1);
	}
	$res = array('status'=>'1','items'=>$arr);
	echo json_encode($res);
?>
