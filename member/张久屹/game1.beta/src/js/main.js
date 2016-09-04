		
	/*	
		列数为y 行数为x 	
		点击元素前 后 下x 上x 变化颜色
		第一列余数为0
		最后一列余数为 列数 -1
	*/

	function Layout(x,y,$dom){  // $dom为包裹元素
		this.x = x;
		this.y = y;
		// this.$btn1 = $('.btn1');
		this.$btn2 = $('.btn2');
		this.$btn3 = $('.btn3');
		this.$dom = $dom;
		this.str = '<div class="sb"></div>';
		this.num = this.x * this.y;

		for(var i = 0; i<this.num; i++){
			this.$dom.append(this.str);
		}

		this.$sb = 	this.$dom.find('.sb');
		this.$dom.css({           
			width: this.x * this.$sb.outerHeight(true),
			height: this.y *  this.$sb.outerWidth(true)			
		})
		this.$text = $('span');
		this.$text.text(x+' * '+y)


		this.bind();
		//this.toHard()
	}

	Layout.prototype = {

		bind: function(){
			var me  = this;

			me.$sb.on('click',function(){         //点击元素事件
				var idx = $(this).index();  //获取点击元素下标
				var n0 = idx,               //设置变化颜色的下标
					n1 = idx - me.x,
					n2 = idx - 1,
					n3 = idx + 1,
					n4 = idx + me.x;
				if(idx%me.x === 0){           //设置边界
					array = [n0,n1,n3,n4]
				}else if(idx%me.x === me.x - 1){
					array = [n0,n1,n2,n4]
				}else{
					array = [n0,n1,n2,n3,n4]
				}
				me.change();
			})

			me.$btn2.on('click',function(){   //增大难度
				// me.$dom.children().remove();
				me.toHard();
			})	
			me.$btn3.on('click',function(){   //增大难度
				// me.$dom.children().remove();
				me.toEasy();
			})			
		},

		change: function(){
			var me = this;

			for(var k = 0; k <array.length ; k++){
				if(array[k] >=0 ){
					me.$sb.eq(array[k]).toggleClass('nav');
				}
			}
			me.dialog();
		},

		dialog: function(){    //所有颜色都为蓝色时弹窗并增加难度
			var me = this;     
			var d = [];       //创建一个空数组是为了获取变成蓝色的拼图的数量
			for(var i = 0; i < me.$sb.length; i++){
				if(me.$sb.eq(i).hasClass('nav')){
					d.push(i)
				}
			}
			if(d.length === me.num){   //当变换颜色的长度等于块的数量时通过
				alert('二货。加油！恭喜本关通过~');
				return me.toHard()	
			}
		},

		toHard: function(){
			var me = this;
			console.log(1)
			me.$dom.children().remove();
			new Layout(me.x+1,me.y+1,$('#main'));		
		},

		// toEasy: function(){
		// 	var me = this;
		// 	console.log(2)

		// 	me.$dom.children().remove();
		// 	new Layout(me.x-1,me.y-1,$('#main'));					
		// }
	}



	var g1 = new Layout(2,2,$('#main'))





/*
		var sb ='<div class="sb"></div>';
		var $main = $('#main');

		function layout(x,y){   
			x = x;
			y = y;

			var length = x * y;       //拼图数量


			for(var i = 0; i<length; i++){
				$main.append(sb);
			}			
			
			var $sb = $('.sb');

			var $sbHgt = $('.sb').outerHeight(true);
			var $sbWdh = $('.sb').outerWidth(true);
			$main.css({
				width: $sbHgt * x,
				height: $sbWdh * x
			})



			//点击发生颜色转换

			$sb.on('click',function(){
				var me = $(this);
				var idx = me.index();

				n0 = idx; 
				n1 = idx -x;
				n2 = idx -1;
				n3 = idx +1;
				n4 = idx +x;

				if(idx%x == 0){
					array = [n0,n1,n3,n4]
				}else if(idx%x === x-1){
					array = [n0,n1,n2,n4]
				}else{
					array = [n0,n1,n2,n3,n4]
				}

				for(var k = 0; k <array.length ; k++){
					if(array[k] >=0 ){
						$sb.eq(array[k]).toggleClass('nav');
					}
				}

				var d = [];
				for(var j = 0; j < $sb.length; j++){
					if($sb.eq(j).hasClass('nav')){
						d.push(j)
					}
				}
				if(d.length === length){
					alert('好吧 这一关你赢了');
					$sb.remove();
					layout(x+1,y+1);
				}
			})
	
		}
		layout(3,3)

*/
		
	
