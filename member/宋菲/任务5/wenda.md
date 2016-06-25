###样式有几种引入方式? link 和 @import有什么区别
 * 三种
  * 内联样式`<p style=“color:red;”>这是内联样式</p>`
  * 内部样式。`<head>`中插入`<style>`,css放在其中
     <code>`<style> 
     p{
     color:red;}
     </style>`<code>
  * 外部样式。`<head>`中插入`<link rel="" href="" type="" />`
  * `link` 和 `@import`的区别是
    link引用CSS时，在页面载入时同时加载；@import需要页面网页完全载入以后加载。
    link支持使用JavaScript控制DOM去改变样式；而@import不支持。

###文件路径`../main.css `、`./main.css`、`main.css`有什么区别
> * `../main.css`是该文档上级目录中的css文件
> * `./main.css`是该文档同一目录，当前路径下的css文件
> * `main.css`是该文档同一目录中的css文件，和`./main.css`一样。
 
 
###`console.log`是做什么用的
> * 作用是调试JavaScript
> * 相比于alert()，使用console.log()是一种更好的方式，原因在于：alert()函数会阻断JavaScript程序的执行，从而造成副作用；而console.log()仅在控制台中打印相关信息，因此不会造成类似的顾虑。
> * `alert()`会一直蹦出弹窗
> * `alert()`显示的内容没有`console.log`全。

###`text-align`有几个值，分别有什么作用
> * left,center,right,justify。
* 作用是设置文本的左右对齐方式。左，中，右，两端对齐。

###`px`、`em`、`rem`分别是什么？有什么区别？如何使用
> * `px`是像素
* `em`是相对单位，1em等于1倍，相对于其父元素
* `rem`也是相对单位，相对于`<html>`根节点
 
###对chrome 审查元素的功能做个简单的截图介绍
![title](https://leanote.com/api/file/getImage?fileId=5746c04bab64413fd701e3c0)

##如下代码，设置 p为几 rem，让h1和p的字体大小相等?
> 答案：`96rem`
``` <h1>饥人谷</h1>
 <p>饥人谷</p>


 <style>
   
  html{
    font-size: 62.5%;
  }
  p{
    font-size: ?rem;
  }
  h1{
    font-size: 60px;
  } 

 </style>
```