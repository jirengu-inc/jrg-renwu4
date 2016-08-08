function ajax(opts){
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function(){
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
			var json = JSON.parse(xmlhttp.responseText);
			opts.success(json);
		}
		if(xmlhttp.readyState == 4 && xmlhttp.status == 404){
			opst.error();
		}
	}
	var datastr = '';
	for(var key in opts.data){
		datastr += key + '=' + opts.data[key] + '&'
	}
	datastr = datastr.substr(0,datastr.length-1);

	if(opts.type.toLowerCase() === 'post'){
		xmlhttp.open(opts.type,opts.url,true);
		xmlhttp.setRequestHeader("Contenr-type","application/x-www-form-urlencoded");
		xmlhttp.send(datastr);
	}
	if(opts.type.toLowerCase() === 'get'){
		xmlhttp.open(opts.type,opts.url + '?' + datastr,true);
		xmlhttp.send();
	}
}