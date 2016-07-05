function ajax (opts){
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function(){
         if(xmlHttp.readyState === 4 && xmlHttp.status === 200){
         	var result = JSON.parse(xmlHttp.reponseText);
         	opts.success (result);
         }
		 if(xmlHttp.status == 404){
		 	opts.error();
		 }
	}
	var dataStr = '';
	for(var key in opts.data){
		dataStr += key + '=' + opts.data[key] + '&';
	}
	dataStr = dataStr.slice(0,dataStr.length-1);

	var type = opts.type.toLowerCase(),
        url = opts.url;
	if(type == 'get'){
		var url = opts.url + '?' + dataStr;
		xmlHttp.open('get',url,true);
		xmlHttp.send();
	}else if(type == 'post'){
		xmlHttp.open('post',url,true);
		xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xmlHttp.send(dataStr)	
	}
}
