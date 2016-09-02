var reg = /#[0-9A-Za-z]{6}/g;
var subj = "color: #121212; background-color: #AA00ef; width: 12px; bad-colors: f#fddee #fd2 ";
console.log(subj.match(reg));
