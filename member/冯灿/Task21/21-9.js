var str = '.. <!-- My -- comment \n test --> ..  <!----> .. ';
var regNotGreed = /<!--(?:.|\s)*?-->/g;
var regGreed = /<!--[^>]*-->/g;
console.log(str.match(regNotGreed)); // '<!-- My -- comment \n test -->', '<!---->'
console.log(str.match(regGreed)); // '<!-- My -- comment \n test -->', '<!---->'
