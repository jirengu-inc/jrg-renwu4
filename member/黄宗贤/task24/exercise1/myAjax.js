function ajax(objs){
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			console.log(xhr.responseText);
		}
		if(xhr.readyState == 4 && xhr.status == 404){
			concole.log("Error!");
		}
	}
	var dataSend="";
	for(var key in objs.data){
		dataSend += key + "=" +objs.data[key] + "&";
	}
	dataSend = dataSend.substr(0,dataSend.length-1);
	if(objs.type.toLowerCase()=="get"){
		xhr.open("GET",objs.url+dataSend,false);
		xhr.send();
	}
	if(objs.type.toLowerCase()=="post"){
		xhr.open("POST",objs.url,false);
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(dataSend);
	}
}