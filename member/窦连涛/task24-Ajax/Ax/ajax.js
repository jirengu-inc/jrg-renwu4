function ajax(opts){
    var xmlhttp = new XMLHttpRequest();
    //创建XML对象
    xmlhttp.onreadystatechange = function(){
      if(xmlhttp.readyState == 4 && xmlhttp.status==200){
        var json = JSON.parse(xmlhttp.responseText);
        opts.success(json);
      }

      if(xmlhttp.status == 404){
          opts.error();
      }
    };
    //将json对象转化为key&value形式
    var dataStr = '';
    for (var key in opts.data) {
      dataStr += key + '=' + opts.data[key] + '&';
    }

    dataStr = dataStr.substr(0,dataStr.length-1);

    if(opts.type.toLowerCase() === 'post'){
      xmlhttp.open(opts.type,opts.url,true);
      setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=gb2312");
      xmlhttp.send(dataStr);
    }

    if(opts.type.toLowerCase() === 'get'){
      // console.log(dataStr);
      xmlhttp.open(opts.type,opts.url+'?'+dataStr,true);
      xmlhttp.send();
    }
}
