<?php 
$callBack = $_GET['callBack'];
$object = ['name'=>'amao','age'=>25,'like'=>'fanfan'];
printf($callBack.'('.json_encode($object).')');
?>