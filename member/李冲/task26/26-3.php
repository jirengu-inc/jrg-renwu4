<?php
		$start = $_GET['start'];
		$len = $_GET['lengt'];
		$arr = array();
		for ($i = 0; $i < $len; $i++) { 
			array_push($arr,'内容' . ($start+$i));
		}
		$result = array('status'=>1,'data'=>$arr);
		sleep(1);
		echo json_encode($result);
?>