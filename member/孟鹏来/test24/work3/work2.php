<?php
header('content-type:text/html;charset="utf-8"');
error_reporting(0);

$username=$_POST['username'];

if($username=='hunger'){
	$arr=arry('data'==>false);
	echo json_encode($arr);
}
else
{
	$arr=arry('data'==>true);
	echo json_encode($arr);
}

