<?php
 header("Content-type: ");//新浪云未实名认证会注入，加这一行
 $username = $_GET['username'];
 // $username = $_GET['username'];
 if($username==='kevin'){
 	$ret=array('sex'=>'男','age'=>'18');
 }else if($username==='hunger'){
   $ret=array('sex'=>'男','age'=>'20');
 }else{
 	$ret=array('sex'=>'女','age'=>'30');
 }
 echo json_encode($ret);
