<?php
header('content-type:text/html;charset="utf-8"');
error_reporting(0);

$now=$_GET['now'];
$len=$_GET['len'];

$newContent=array();

for($i=0;$i<$len;$i++){
	array_push($newContent, $now+$i+1);
}

$arr = array('data'=>$newContent);
echo json_encode($arr);