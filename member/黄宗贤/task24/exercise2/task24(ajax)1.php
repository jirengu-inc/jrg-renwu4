<?php
	$begin = $_GET['begin'];
	$leng = $_GET['len'];
	$arr  = array();
	for ( $i = 0; $i<$leng; $++){
		$arr[$i] = "内容".$i; 
	}
	echo $arr;
?>