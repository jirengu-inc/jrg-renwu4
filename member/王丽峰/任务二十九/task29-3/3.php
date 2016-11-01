<?php
    // 后端 php 测试接口文件
    header("Content-type");
    $start = $_GET['start']; //2
    $len = $_GET['len'];  //3
    $items = array();

    for($i = 0; $i < $len; $i++){
        array_push($items, '内容' . ($start+$i));
    }
    $ret = array('status'=>1, 'data'=>$items);


    sleep(1);
    echo json_encode($ret);
