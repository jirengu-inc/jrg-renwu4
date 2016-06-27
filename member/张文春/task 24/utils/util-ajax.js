
function ajax(opts){
	var defaults = {
		method:'GET',
		url:'',
		data:'',
		async:true,
		contentType:'application/x-www-form-urlencoded',
		success:function(){},
		error:function(){}
	}
	for(var key in opts){
		defaults[key] = opts[key];
	}

	if (typeof defaults.data === 'object') {
		var str = '';
		for (var key in defaults.data) {
			str += key+'='+defaults.data[key]+'&';
		}
		str = str.substr(0,str.length-1);
	}

	var method = defaults.method.toUpperCase();
	if (method === 'GET') {
	defaults.url += '?'+str;
	}

	var xhr = window.XMLHttpRequest?new XMLHttpRequest:new ActivexObject('Microsoft.XMLHTTP');
	xhr.open(method,defaults.url,defaults.async);
	if (method === 'GET') {
		xhr.send();
	}else{
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(str);
	}

	xhr.onreadystatechange = function(){
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				defaults.success(JSON.parse(xhr.responseText));
			}
			else{
				defaults.error();
			}
		}
	}

}