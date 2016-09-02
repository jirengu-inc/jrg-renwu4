var say = 0;
(function say(n) {
    console.log(n);
    if (n < 3)
        return;
    say(n - 1);
}(10));
console.log(say);
