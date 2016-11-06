function isValidAccount(str) {
  return /^\w{6,20}$/.test(str);
}

console.log(isValidAccount("haha"));
console.log(isValidAccount("hahaha"));
console.log(isValidAccount("djAad2kj_jra"));
console.log(isValidAccount("abcdefghijklmnopqrst"));
console.log(isValidAccount("abcdefghijklmnopqrstu"));
