var waterfall = {
	colSumHeight:[],
	isInit: 0,
	init: function(){
		if(this.isInit === 1) return;
		this.ct = $('.ct');
		this.itemW = this.ct.find('.item').outerWidth(true);
		this.colNum = Math.floor(this.ct.width()/this.itemW);
		for(var i=0;i<this.colNum;i++){
				this.colSumHeight[i]=0;
			}
		this.isInit = 1;
	},
	start: function($node){
		var cur = this;
		this.init();
		$node.each(function(){
			cur.render($(this));
		});
	},
	render: function(el){
		var obj = this.min(this.colSumHeight),
			idx = obj.idx,
			min = obj.min;
		el.css({
			top:min,
			left:this.itemW*idx,
			opacity:1
		});
		this.colSumHeight[idx] = this.colSumHeight[idx] + el.outerHeight(true);
		this.ct.height(Math.max.apply(null,this.colSumHeight));
	},
	min: function(arr){
		var idx = 0,
			min = arr[0];
		for(var i=0;i<arr.length;i++){
			if(min > arr[i]){
				idx = i;
				min = arr[i];
			}
		}
		return {min:min,idx:idx};
	}
}
		