<?php
header('content-type:text/html;charset="utf-8"');
error_reporting(0);
$user=$_GET['username'];
$arr=array();
if($user === 'hunger'){
	$arr=array('msg'=>0);
	echo json_encode($arr);
}
else{
	$arr=array('msg'=>1);
	echo json_encode($arr);
}
?>