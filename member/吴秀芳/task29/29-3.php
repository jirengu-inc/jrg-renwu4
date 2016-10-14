
<?php
 header('content-type:text/html;charset="utf-8"');
 error_reporting(0);
$start=$_GET['start'];
$len=$_GET['len'];
$items=array();
for($i=0;$i<$len;$i++){
	array_push($items,  ($start + $i + 1));
}
$ret = array('status'=>'success','items'=>$items);
echo json_encode($ret);

?>