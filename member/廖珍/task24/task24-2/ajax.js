function ajax(opts) {
	var xmlhttp=new XMLHttpRequest();
	var dataStr=" ";
	for(var key in opts.data) {
		dataStr+=key+"="+opts.data[key]+"&"
	}
	dataStr=dataStr.substr(0,dataStr.length-1)
	if(opts.type.toLowerCase()==="get") {
		xmlhttp.open(opts.type,url+"?"+dataStr,true);
		xmlhttp.send();
	}
	if(opts.type.toLowerCase()==="post") {
		xmlhttp.open(opts.type,url,true);
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded")
		xmlhttp.send(dataStr);
	}
	  xmlhttp.onreadystatechange=function () {
	  	if(xmlhttp.status===200&xmlhttp.readyState===4) {
	  		var json=JSON.parse(xmlhttp.responseText);
	  		opts.success(json);
	  	}
	  }else {
	  	opts.error();
	  }
}