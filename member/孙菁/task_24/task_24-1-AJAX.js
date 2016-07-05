// JavaScript Document

        function ajax(opts){
			var xhr = createXHR();
			xhr.onreadystatechange = function(){
				if( xhr.readyState == 4 && (xhr.status == 200 ||xhr.status == 304)){
					var json = JSON.parse(xhr.responseText);
					opts.success(json);
				}
				if( xhr.readyState == 4 && xhr.status == 404 ){
					opts.erroe();
				}
			}

			var dataStr = "";
			for( key in opts.data){                               //转化JSON数据为键值对形式
				dataStr += key + "=" + opts.data[key] + "&";
			}
    		dataStr = dataStr.substr(0,dataStr.length-1);

			if( opts.type.toLowerCase() == "post"){
				xhr.open(opts.type,opts.url,true);
				xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
				xhr.send(dataStr);
			}
			if( opts.type.toLowerCase() == "get"){
				xhr.open(opts.type,opts.url + "?" + dataStr,true);
				xhr.send();
			}
		}


		function createXHR(){                    //创建XHR对象兼容
			var xhr = new XMLHttpRequest();
			try{
				xhr = new XMLHttpRequest();      // Firefox, Opera 8.0+, Safari，IE7+
			}catch(err){
                try{
                	xhr = new ActiveXObject("Msxml2.XMLHTTP");    // IE
                }catch(err){
                	try{
                		xhr = new ActiveXObject("Microsoft.XMLHTTP");
                	}catch(err){
                		xhr = null;
                	}
                }
			}
			return xhr;
			
		}