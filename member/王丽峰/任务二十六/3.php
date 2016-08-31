<?php
/**
 * 
 * @authors WangLifeng(you@example.org)
 * @date    2016-08-30 14:24:01
 * @version $Id
  */
  //后台php测试接口文件
  $start=$_GET['start'];//2
  $len=$_GET['len'];//6
  $items=array();

  for($i=0;$i<$len;$i++){
  	array_push($items,'内容'.($start+$i));
  	$ret=array('status'=>1,'data'=>$items);

  	sleep(0.5);
  	echo json_encode($ret);
  }
