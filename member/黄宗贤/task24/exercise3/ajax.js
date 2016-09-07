function ajax(objs){
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			objs.success();
			res.innerText = JSON.parse(xhr.responseText).msg;  //此处不要漏了JSON.parse()否则认为是字符串
			console.log(xhr.responseText);
		}
		if(xhr.readyState == 4 && xhr.status == 404){
			objs.error();
		}
	}

	var dataSend = "";
	for( var key in objs.data ){
		dataSend += key + "=" + objs.data[key] + "&";
	}
	dataSend = dataSend.substr(0,dataSend.length-1);
	console.log(dataSend);
	if (objs.type.toLowerCase() == "get") {
		xhr.open(objs.type,objs.url + "?" + dataSend,false);
		xhr.send();
		
		//res.innerText = xhr.responseText;				//写在这里是错误的
		console.log("11");
		
	}
	if (objs.type.toLowerCase() == "post") {
		xhr.open(objs.type,objs,url,false);
		xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
		xhr.send(dataSend);
	}
}
