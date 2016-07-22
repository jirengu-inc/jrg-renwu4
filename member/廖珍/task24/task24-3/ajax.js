function ajax(opts) {
	var xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange=function () {
    	if(xmlhttp.state==200&&xmlhttp.xmlhttp.readyState) {
    		var json=JSON.parse(xmlhttp.responseTest);
    		opts.success(json);
    	}
    }
    var dataStr=" ";
    for(key in opts.data) {
    	dataStr+=key+"="+opts.data[key]+"&";
    	 }
    	dataStr=dataStr.substr(0,length-1);
    	if(opts.type.toLowerCase()=="get") {
    		xmlhttp.open("opts.type",opts.url+"?"+dataStr,true);
    		xmlhttp.send();
    	}
    	if(opts.type.toLowerCase()=="post") {
    		xmlhttp.open("opts.type",opts.url,true);
    		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded")
    		xmlhttp.send(dataStr);
    	}
   

}