// 写出以下功能对应的 Jq 方法

// 给元素 $node 添加 class active，给元素 $noed 删除 class active
$node.addClass("active");
$node.removeClass("active")
// 展示元素$node, 隐藏元素$node
$node.show();
$node.hide();
$ode.toggle();
// 获取元素$node 的 属性: id、src、title， 修改以上属性
$node.attr("id");
$node.attr("src");
$node.attr("title");
$node.attr({
    id:123,
    src:"https://www.baidu.com",
    title:"百度一下,你就知道"
});
// 给$node 添加自定义属性data-src
$node.attr("data-src","value");
// 在$ct 内部最开头添加元素$node
$ct.prepend($node);//如果是页面已有元素则只是元素移动
// 在$ct 内部最末尾添加元素$node
$ct.append($node);//如果是页面已有元素则只是元素移动
// 删除$node
$node.remove();
// 把$ct里内容清空
$ct.empty();
// 在$ct 里设置 html <div class="btn"></div>
$ct.html("<div class=\"btn\"></div>");
// 获取、设置$node 的宽度、高度(分别不包括内边距、包括内边距、包括边框、包括外边距)
$node.width();//当函数给予参数的时候，就是设置值，默认单位是px
$node.innerWidth();
$node.outWidth();
$node.outWidth(true);
$node.height();//仅仅指内容框
$node.innerHeight();//包括内边距
$node.outHeight();//不包括外边距，包括内边距和边框
$node.outHeight(true);//包括外边距，
// 获取窗口滚动条垂直滚动距离
$(document).scrollTop()
// 获取$node 到根节点水平、垂直偏移距离
$node.offset().left
$node.offset().top
// 修改$node 的样式，字体颜色设置红色，字体大小设置14px
$node.css({
    "color": "red",
    "font-size": "14px"
});
// 遍历节点，把每个节点里面的文本内容重复一遍
$(selector).each(function () {
    $(this).clone().insertAfter( $(this) );
});
// 从$ct 里查找 class 为 .item的子元素
$ct.find(".item");
// 获取$ct 里面的所有孩子
$ct.children();
// 对于$node，向上找到 class 为’.ct’的父亲，在从该父亲找到’.panel’的孩子
$node.parents(".ct").find(".panel");
// 获取选择元素的数量
$node.length();
// 获取当前元素在兄弟中的排行
$this.index();

// 简单实现以下操作

// 当点击$btn 时，让 $btn 的背景色变为红色再变为蓝色
$btn.on("click",function(){
    $(this).animate({
        backgroundColor: 'red'
    },1000).animate({
        backgroundColor: 'blue'
    },1000)
});
// 当窗口滚动时，获取垂直滚动距离
$(window).on('scroll',function () {
    console.log( $(document).scrollTop() )
});
// 当鼠标放置到$div 上，把$div 背景色改为红色，移出鼠标背景色变为白色
$div.hover(function(){
        $(this).css("background-color","red");
    },
    function(){
        $(this).css("background-color","white");

    });
// 当鼠标激活 input 输入框时让输入框边框变为蓝色，当输入框内容改变时把输入框里的文字小写变为大写，当输入框失去焦点时去掉边框蓝色，控制台展示输入框里的文字
$input.on("focus",function(){
    $(this).css("border","1px blue solid")
});
$input.on("change",function(){
    $(this).val($(this).val().toUpperCase());
});
$input.on("blur",function(){
    $(this).removeAttr("style");
    console.log($(this).val());
});
// 当选择 select 后，获取用户选择的内容
$select.on("change", function() {
    var value = $(this).val();
    console.log(value);
});