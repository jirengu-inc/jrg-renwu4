
<script>

function ajax(opts){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange=function(){
        if(xmlhttp.readyState==4 && xmlhttp.status==200){
            var ret = JSON.parse(xmlhttp.responseText);
            opts.success(ret);
        };
        if(xmlhttp.status == 404){
            opts.error();
        };
    };
    var dataStr= '';
    for(var key in opts.data){
        dataStr += key + '=' +opts.data[key] + '&';
    }
    dataStr = dataStr.substr(0,dataStr.length-1);
    if(opts.type.toLowerCase() == 'post'){
        xmlhttp.open(opts.type,opts.url,true);
        xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xmlhttp.send(dataStr);
    }
    if(opts.type.toLowerCase() == 'get'){
        xmlhttp.open(opts.type,opts.url + '?' +dataStr,true);
        xmlhttp.send();
    }       
};


document.querySelector('#btn').addEventListener('click', function(){
    ajax({
        url: 'getData.php',   //接口地址
        type: 'get',               // 类型， post 或者 get,
        data: {
            username: 'xiaoming',
            password: 'abcd1234'
        },
        success: function(ret){
            console.log(ret);       // {status: 0}
        },
        error: function(){
           console.log('出错了')
        }
    })
})
</script>