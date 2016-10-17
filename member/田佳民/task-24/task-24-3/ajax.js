function ajax(obj){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status ==200){
            var json = JSON.parse(xhr.responseText);
            obj.success(json);
        }
        if(xhr.readyState == 404){
            obj.error();
        }
    }

    var dataStr = "";
    for(var k in obj.data){
        dataStr += k + "=" + obj.data[k] + "&";
    }
    dataStr = dataStr.substr(0, dataStr.length-1) ;

    if(obj.type.toLowerCase() ==="get"){
        xhr.open(obj.type, obj.url+"?"+dataStr, true);
        xhr.send();
    }

    if(obj.type.toLowerCase() ==="post"){
        xhr.open(obj.type, obj.url, true);
        xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
        xhr.send(dataStr);
    }
}
