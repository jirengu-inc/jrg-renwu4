function ajax(options) {
  var xhr = null;

  function createXHR() { //创建xhr对象
    if (typeof XMLHttpRequest != "undefined") {
      return new XMLHttpRequest();
    } else if (typeof ActiveXObject != "undefined") {
      if (typeof arguments.callee.activeXString != "string") {
        var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp"],
          i, len;

        for (i = 0, len = versions.length; i < len; i++) {
          try {
            new ActiveXObject(versions[i]);
            arguments.callee.activeXString = versions[i];
            break;
          } catch (ex) {
            //skip
          }
        }
      }
      return new ActiveXObject(arguments.callee.activeXString);
    } else {
      throw new Error("No XHR object available.");
    }
  }

  function processXHR() { //为xhr对象添加相关Event Listener，执行open()与send()
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
          //var JSONReponseText = JSON.parse("\'" + xhr.responseText + "\'");
          options.success(JSON.parse(xhr.responseText));
        } else {
          options.error();
        }
      }
    };

    function addURLParam(url, name, value) {
      url += (url.indexOf("?") == -1 ? "?" : "&");
      url += encodeURIComponent(name) + "=" + encodeURIComponent(value);
      return url;
    }

    function serialize(form) {  //序列化表单
      var parts = new Array();
      var field = null;

      for (var i = 0, len = form.elements.length; i < len; i++) {
        field = form.elements[i];

        switch (field.type) {
          case "select-one":
          case "select-multiple":
            for (var j = 0, optLen = field.options.length; j < optLen; j++) {
              var option = field.options[j];
              if (option.selected) {
                var optValue = "";
                if (option.hasAttribute) {
                  optValue = (option.hasAttribute("value") ?
                    option.value : option.text);
                } else {
                  optValue = (option.attributes["value"].specified ?
                    option.value : option.text);
                }
                parts.push(encodeURIComponent(field.name) + "=" +
                  encodeURIComponent(optValue));
              }
            }
            break;

          case undefined: //fieldset
          case "file": //file input
          case "submit": //submit button
          case "reset": //reset button
          case "button": //custom button
            break;

          case "radio": //radio button
          case "checkbox": //checkbox
            if (!field.checked) {
              break;
            }
            /* falls through */

          default:
            parts.push(encodeURIComponent(field.name) + "=" +
              encodeURIComponent(field.value));
        }
      }
      return parts.join("&");
    }

    switch (options.type.toLowerCase()) {
      case "get":
        var URL = options.url;
        for (var key in options.data) {
          URL = addURLParam(URL, key, options.data[key]);
        }
        console.log(URL);
        xhr.open("get", URL, true);
        xhr.send();
        break;
      case "post":
        xhr.open("post", options.url, true);
        if (typeof FormData != undefined) {
          xhr.send(new FormData(options.data));
        } else {
          xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
          xhr.send(serialize(options.data));
        }
      default:
        throw new Error("Wrong method of request.");
    }
  }

  xhr = createXHR();
  processXHR();
}
