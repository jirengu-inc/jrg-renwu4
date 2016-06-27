<?php
	$count = $_GET['count'];
	$begin = $_GET['begin'];

	// $data = array('content' => '内容3');
	$data = array();

	for ($i=0; $i < $count ; $i++) { 
		$data[] = '内容'.($i+$begin);
	}
	echo json_encode($data)
?>