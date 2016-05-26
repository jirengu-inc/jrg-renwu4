##网页乱码的问题是如何产生的？怎样解决
* 网页编码和浏览器编码不一致产生的。
* 保存网页`<head>`里添加`<meta charset="utf-8">`或者`<meta charset="gbk">`。浏览网页时，打开浏览器编码选项，选择和网页相同的编码。
##颜色有几种写法， 红色、 绿色、蓝色、白色、黑色如何表示？ 透明黑色如何表示？`#ccc`的颜色？ `#eee`的颜色？ `#333`的颜色？
* 颜色的写法有：
 * 颜色名称`red` `grenn`
 * 十六进制颜色`#00ffff` `ff00ff`
 * RGB颜色值 `rgb(255,0,0)` `rgb(152,152,152)`
 * RGBA 颜色。 A代表透明度 `rgb(255,0,0,0.5)`
* 常用颜色的写法
 * 红色 `#ff0000`
 * 绿色 `#00ff00` 
 * 蓝色`#0000ff` 
 * 白色`#fff` 
 * 黑色`#000`
* 透明黑色是`rgba(0,0,0,0.1)`
*  `#ccc` 灰色；`#eee`更淡的灰色；`#333`一般是字体颜色。
##`<!doctype html>` 的作用是什么？
* 告诉浏览器按照什么模式解析文件，如果不加这个，浏览器会按照自己的方式渲染网页，可能出现混杂模式或怪异模式。

##严格模式和混杂模式指什么
* 严格模式是网页中有`!doctype`声明。浏览器会按照这个标准渲染网页。
* 混杂模式是网页中没有`!doctype`声明，浏览器会按照自己的方式渲染网页（一般出现在老式浏览器中）

##`meta` 有什么作用，常见的值有哪些
* `<meta>` 元素定义页面的元信息。
 * 比如针对搜索引擎和更新频度的描述和关键词。
 * `http-equiv` 表示服务器发送给浏览器的消息（属性/值），`http-equiv`表示属性。`<meta http-equiv="Refresh" content="5;url=http://www.jirengu.com" />`
* charset="uft-8"编码方式是utf-8；
* name="title" content=""设置页面标题；
* name="keywords" content=""设置页面关键字；
* name="description" content=""设置页面描述
##`<meta http-equiv="X-UA-compatible" content="IE=edge,chrome=1">`有什么作用
* 服务器给浏览器发送消息
* `X-UA-compatible`指浏览器渲染模式，
* `content="IE=edge,chrome=1"`是如果安装了GCF[Google Chrome Frame(谷歌内嵌浏览器框架GCF)]，则使用GCF来渲染页面，如果未安装GCF，则使用最高版本的IE内核进行渲染。
##常见的浏览器有哪些，什么内核
* IE:Trident
* Chrome:Webkit
* Safari:Webkit
* Mozilla FireFox :Gecko
* Opera:Presto