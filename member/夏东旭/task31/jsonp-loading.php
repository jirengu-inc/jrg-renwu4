<?php
	header("Content-type: "); //防止新浪云未实名注入
	$callback=$_GET["callback"];
	$start=$_GET["start"];
	$length=$_GET["length"];
	$data=array();
	for($i=0;$i<$length;$i++){
		$data[$i]=$start++;
	}
	$ret=array("data"=>$data,"status"=>"1");
	echo $callback."(".json_encode($ret).")";
?>
