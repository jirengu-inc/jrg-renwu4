function ajax(options){
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function(){
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var data = JSON.parse(xmlhttp.responseText);
			options.success(data)
		}
		if (xmlhttp.readyState == 4 && xmlhttp.status == 404) {
			options.error();
		}
		
	}
	var dataStr = '';
	for(key in options.data){
		dataStr += key+'='+options.data[key] + '&';
	}
	dataStr = dataStr.substr(0,dataStr.length-1);
	if (options.type.toLowerCase() == 'get') {
		var url = options.url + '?' +dataStr;
		xmlhttp.open(options.type,url,true);
		xmlhttp.send();		
	}
	
	if (options.type.toLowerCase() == 'post') {
		xmlhttp.open(options.type,options.url,true)
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xmlhttp.send(dataStr)
	}
}