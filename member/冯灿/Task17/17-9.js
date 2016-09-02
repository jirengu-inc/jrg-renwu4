fn();
var i = 10;
var fn = 20;
console.log(i);

function fn() {
    console.log(i);
    var i = 99;
    fn2();
    console.log(i);

    function fn2() {
        i = 100;
    }
}

// undefined
// 100
// 10
