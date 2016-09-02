function sumOfSquares() {
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
        result += Math.pow(arguments[i], 2);
    }
    console.log(result);
}
sumOfSquares(2, 3, 4);
sumOfSquares(1, 3);
