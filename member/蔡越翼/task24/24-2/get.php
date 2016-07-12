<?php
header('content-type:text/html;charset="utf-8"');
error_reporting(0);
$start=$_GET['start'];
$len=$_GET['len'];
$arr=array();
for($i=$start+1; $i<$start+$len+1; $i++){
	array_push($arr, $i);
}
$content = array('status'=>0,'data'=>$arr);
echo json_encode($content);
?>