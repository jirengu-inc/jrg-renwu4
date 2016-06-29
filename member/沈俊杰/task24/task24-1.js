function ajax(opts) {
	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
				var response = JSON.parse(xhr.responseText);
				opts.success(response);
			} else {
				opts.error();
			}
		}
	}
	var data = "";
	for (var key in opts.data) {
		data += key + "=" + opts[key] + "&";
	}
	data = data.substr(0, data.length - 1);

	var type = opts.type.toLowerCase(),
		url = opts.url;

	if (type === "get") {
		xhr.open(type, url + "?" + data, true);
		xhr.send();
	} else if (type === "post") {
		xhr.open(type, url, true);
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr.send(data);
	}
}