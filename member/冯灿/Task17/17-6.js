function fn(fn2) {
    console.log(fn2);//Function: fn2
    var fn2 = 3;
    console.log(fn2);//3
    console.log(fn);//Function: fn

    function fn2() {
        console.log('fnnn2');
    }
}
fn(10);
