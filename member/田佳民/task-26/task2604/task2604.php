<?php
 header('content-type: ');

 error_reporting(0);
 $now=$_GET['pageStart'];
 $len=$_GET['len'];
 $newContent=array();
 for($i=0;$i<$len;$i++){
 	array_push($newContent, $now+$i+1);
 }
 $arr = array('data'=>$newContent);
 echo json_encode($arr);

 ?>
