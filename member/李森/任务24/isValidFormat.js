

//判断用户名是否符合格式
function isValidUsername(str){
        var re = /^\w{3,10}$/;
        if (re.test(str)){
            return true;
        }
   return false;
    }


// 判断密码是否符合格式
function isValidPassword(str){
    if(str.length < 3 || str.length > 15){
    return false;
    }
    if(/[^A-Za-z_0-9]/.test(str)){
    return false;
    }
    if( /(^[a-z]+$)|(^[A-Z]+$)|(^_+$)|(^\d+$)/g.test(str) ){
    return false;
    }
    return true;
} 

