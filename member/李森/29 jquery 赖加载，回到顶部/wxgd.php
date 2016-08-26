<?php
header('Content-type: ');
$start = $_GET['start']; 
$len = $_GET['len'];  
$items = array();
for($i = 0; $i < $len; $i++){
    array_push($items, '内容' . ($start+$i));
}
$ret = array('status'=>1, 'data'=>$items);
//{status: 1, data: ['内容1','内容2','内容3']}
//sleep(0.5);
echo json_encode($ret);
?>