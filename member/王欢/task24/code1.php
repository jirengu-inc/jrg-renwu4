<?php
	$count = $_GET['count'];
	$begin = $_GET['begin'];

	$data = array('username' => 'xiaoming','password' => 'abcd1234');

	// print_r($data);
	echo json_encode($data);
?>