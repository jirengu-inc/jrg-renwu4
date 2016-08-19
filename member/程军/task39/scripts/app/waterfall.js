
	


define(['jquery'],function($){
	function Waterfall($ct,$outerwidth){    //这里$outerwidth放置元素元素的宽度;
	this.$ct=$ct;
	this.$itemWidth=$outerwidth;
	this.$ctWidth=this.$ct.width();

	this.length=Math.floor(this.$ctWidth/$outerwidth);
	this.init();
}
 Waterfall.prototype={
 	init:function(){
 		this.arr=[];
	for(var i=0;i<this.length;i++){
		this.arr.push(0)
		}
		this.bind();
	},
	bind:function(){
		var me=this;
		var page=1;
		var islocked=false;
		this.$ct.find(".btn-loadmore").on('click',function(){
			if(islocked){return}
			islocked=true;	
			me.loadMore(page);
			islocked=false;
		})
	},
	loadMore:function(page){
		var _this=this;
		$.ajax({
     	url:"http://platform.sina.com.cn/slide/album_tech",
     	type:"GET",
     	data:({
     		page:page,
     		num:6,
     		app_key:1271687855
     	}),
       	dataType:"jsonp",
     	jsonp:"jsoncallback",
     	success:function(ret){
     		if (ret.status.code==="0") {
     			console.log(ret.data[0].short_name);
			_this.ceatNode(ret);
		} else {
		alert("查询不到数据")
		}
     	}
     	,
     	error:function(){
     		console.log("请求失败")
     	}
		})
	},
	ceatNode:function(ret){
					var node="";
			for(var i=0,len=ret.data.length;i<len;i++){
		node+="<li class='item unset'>";
        node+=" <a href='"+ret.data[i].url+"'>";
        node+="      <img class='news-img' src='"+ret.data[i].img_url+"' alt='img'>";
        node+="     <div class='new-words'>";
        node+="         <h3 class='news-head'>"+ret.data[i].short_name+"</h3>";
        node+="         <p class='news-short'>"+ret.data[i].short_intro+"</p>";
        node+="         <p class='createtime'>"+ret.data[i].createtime+"</p>";
        node+="         <p class='source'>来源："+ret.data[i].source+"</p>";
        node+="     </div>";	
        node+=" </a>";
        node+="</li>";
        }
        $nodes=$(node)
  		this.$ct.append( $nodes);
  		this.$nodes= $nodes;
  		 this.setNode();
 	},
	setNode:function(){

			var me=this;
			var i=0;
			var  max=me.$nodes.length;
			$(".unset").find("img").on('load',function(){
				i++;
				if(i===max){
			me.$ct.find(".unset").each(function(){  
			var $hgt=$(this).outerHeight(true);
			var idx=0;
			var minght=me.arr[idx];
			for (var i=0;i<me.arr.length;i++){
				if(me.arr[i]<me.arr[idx]){
					idx=i;
					}
				}
				$(this).css({
					"left":me.$itemWidth*idx,
					"top":me.arr[idx]
				});
				me.arr[idx]+=$hgt;
				$(this).removeClass("unset");
				var $max=Math.max.apply(null,me.arr);
				me.$ct.height($max);

			})
				};
			})
		
			}	
}
		return Waterfall;
})

