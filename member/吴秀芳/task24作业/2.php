<?php
 header('content-type:');
 error_reporting(0);
$nowNum=$_GET['nowNum'];
$addNum=$_GET['addNum'];
$liContent=array();
for($i=0;$i<$addNum;$i++){
	array_push($liContent, ($nowNum + $i + 1));
}
$arr = array('data'=>$liContent);
echo json_encode($arr);

?>