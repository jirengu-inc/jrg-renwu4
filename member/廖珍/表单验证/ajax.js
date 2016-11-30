 function ajax(opts) {
                    var xmlhttp=new XMLHttpRequest();
                    xmlhttp.onreadystatechange=function() {
                    if(xmlhttp.readyState===4) {
                        if((xmlhttp.status>=200&&xmlhttp.status<300)||xmlhttp.status===304) {
                            var data=JSON.parse(xmlhttp.responseText);
                            opts.success(data);
                        }else {
                            alert('出错啦')
                        }
                    }
                }
                    var dataStr='';
                    for(var key in opts.data) {
                        dataStr+=key+'='+opts.data[key]+'&';
                    }
                    dataStr=dataStr.substr(0,dataStr.length-1);
                    if(opts.type.toLowerCase()==='get') {
                        xmlhttp.open(opts.type,opts.url+'?'+dataStr,true);
                        xmlhttp.send()
                    }
                    if(opts.type.toLowerCase()==='post') {
                        xmlhttp.open(opts.type,opts.url,true);
                        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                        xmlhttp.send(dataStr);
                    }
                }