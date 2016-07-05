<?php 
$start=$_GET['start'];
$num  = $_GET['num'];
$sum = $start + $num ;
$li = '';
for($i = $start;$i< $sum;$i++){
    $li .= "<li>content$i</li>";
	}
echo json_encode(['msg'=>$li])
?>