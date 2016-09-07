pass.addEventListener('change',function(){
	var pv = pass.value;
	//console.log(pv);
	var upper = /[A-Z]+/g.test(pv);	//大写字母一个或多个
	var lower = /[a-z]+/g.test(pv);	//小写字母
	var num = /\d+/g.test(pv);		//数字
	var underline = /[_]+/g.test(pv); //下划线
	var notWord = /\W+/g.test(pv);		//特殊字符
	//console.log(upper);console.log(lower);console.log(num);console.log(underline);

	var flag = 0;
	if( upper ){ flag += 1; }
	if( lower ){ flag += 1; }
	if( num ){ flag += 1; }
	if( underline ){ flag += 1; }
	console.log("flag:"+flag);
	if( pv.length < 6 || pv.length > 10){
		flag = 0;
	 	passMsg.innerText = "密码长度要求6-10位";
	 	pass.style.border = "1px solid red";
	 	checkp = false;
	 }
	if( notWord ){
		flag = 0;
		passMsg.innerText = "密码只能包含大小写字母、数字、下划线";
	 	pass.style.border = "1px solid red";
	 	checkp = false;
	}
	if( flag >= 2 && pv.length >=6 && pv.length <= 10 && !notWord){
		console.log("密码符合要求");
		//pass.style.border = "1px solid green";
		passMsg.innerText = "";
		checkp = true;
		pass.style.border="1px solid green";
		if( pass.value == pass1.value ){		//防止pass1是对的，pass由错改对的情况发生。因此再检验一次，看看是否一致
			pass.style.border="1px solid green";
			pass1.style.border="1px solid green";
			checkp = true;
			checkp1 = true;
		}
		else{
			checkp = false;
		}
		
	}
	if( flag <2  && pv.length >=6 && pv.length <= 10 && !notWord){
		pass.style.border = "1px solid red";
		passMsg.innerText = "密码要求大写字母、小写字母、数字、下划线最少两种";
		checkp = false;
		
	}
	if( pass.value != pass1.value) {
		console.log(1);
		passMsg.innerText = "两次输入的密码需一致";
		pass1.style.border = "1px solid red";
		checkp = false;
	}
	if(checku && checkp && checkp1){
			btn.className = "button_ok";
			btn.innerText = "OK！现在可以注册啦！"
		}
		else{
			btn.className = "";
			btn.innerText = "现在尚不能注册";
		}
	//return flag;
});
pass1.addEventListener('change',function(){    //对于第二个密码框，除了正则检验，还需和第一个密码框相同
	//console.log(pass.value);
	//console.log(pass1.value);
	if( pass.value != pass1.value) {
		console.log("密码不一致");
		passMsg.innerText = "两次输入的密码需一致";
		pass1.style.border = "1px solid red";
		checkp1 = false;
		//return;
	}
	else{
		var pv = pass1.value;
		//var pv1 = pass.value;
		//console.log(pv);
		var upper = /[A-Z]+/g.test(pv);	//大写字母一个或多个
		var lower = /[a-z]+/g.test(pv);	//小写字母
		var num = /\d+/g.test(pv);		//数字
		var underline = /[_]+/g.test(pv); //下划线
		var notWord = /\W+/g.test(pv);	//特殊字符
		//console.log(upper);console.log(lower);console.log(num);console.log(underline);

		var flag = 0;
		if( upper ){ flag += 1; }
		if( lower ){ flag += 1; }
		if( num ){ flag += 1; }
		if( underline ){ flag += 1; }
		
		if( pv.length < 6 || pv.length > 10){
			flag = 0;
		 	passMsg.innerText = "密码长度要求6-10位";
		 	pass1.style.border = "1px solid red";
		 	checkp1 = false;
		 	//return;
		 }
		if( notWord ){
			flag = 0;
			passMsg.innerText = "密码只能包含大小写字母、数字、下划线";
			pass.style.border = "1px solid red";
			checkp = false;
			//console.log("经过这里");
		}
		 
		if( flag >= 2 && (pass.value == pass1.value) && !notWord){
			pass1.style.border = "1px solid green";
			passMsg.innerText = "";
			checkp1 = true;
			checkp = true;
			//return;
		}
		if( flag <2 && pv.length >=6 && pv.length <= 10 && !notWord){
			pass1.style.border = "1px solid red";
			passMsg.innerText = "密码要求大写字母、小写、数字、下划线最少两种";
			checkp1 = false;
		}
	}
	if(checku && checkp && checkp1){
		btn.className = "button_ok";
		btn.innerText = "OK！现在可以注册啦！"
	}
	else{
		btn.className = "";
		btn.innerText = "现在尚不能注册";
	}

});
