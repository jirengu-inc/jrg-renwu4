<?php 
	header('content-type:text/html;charset="utf-8"');
	$usrName=$_GET["usrInfo"];
	if($usrName=="hunger"){
		echo 0;
	}else{
		echo 1;
	}
 ?>