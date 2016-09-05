		

	function Layout(x,y,$dom){  // $dom为包裹元素


		this.x = x;
		this.y = y;
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
		this.$text.text(x+' * '+y);
		if(this.x === 5 && this.y === 5){
			alert('这关我也过不去~')
		}else if(this.x == 15 && this.y == 15){
			alert('别特么乱点~')
		}

		this.bind();

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

			me.$btn3.on('click',function(){
				me.toHard()
	
			})	
			me.$btn3.unbind().on('click',function(){  //这里有坑，取消重复绑定并再次绑定。
				console.log('取消绑定并再次绑定')
				me.toHard()
			});
		
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
				alert('加油！恭喜本关通过~');
				me.toHard()	
			}

		},

		toHard: function(){
			var me = this;
			console.log('增大难度')
			me.$dom.children().remove();
			me.x++;
			me.y++;
			new Layout(me.x,me.y,me.$dom);
		},
	}


	var g1 = new Layout(2,2,$('#main'))

	var $btn1 = $('.btn1');
	var $btn2 = $('.btn2');
	$btn1.on('click',function(){
		alert('这还用介绍？全弄成蓝的就行')
	})

	$btn2.on('click',function(){
		$('#main').children().remove();
		new Layout(2,2,$('#main'))
	})



