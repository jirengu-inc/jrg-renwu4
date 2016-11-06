<?php
	header("Content-type: text/plain");
  $start = $_GET['start'] + 1;
  $length = $_GET['length'];
  $arr = array();
  for ($i=0; $i < $length; $i++) {
    array_push($arr, '内容'.($start + $i));
  }
  echo json_encode($arr);
?>
