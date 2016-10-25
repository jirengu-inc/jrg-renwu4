<?php
	$start = $_GET['start'];
	$leng = $_GET['leng'];
	$content = array();

	for($i = 0; $i<$leng;$i++){
		
		$content[$i] = "内容".($start + $i + 1);   //注意php拼接字符串的写法
	}

	$res = array("status"=>"1","data"=>$content);
	echo json_encode( $res );

?>