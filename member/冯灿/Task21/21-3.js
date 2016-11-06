function isEmail(str) {
  return /^\w+(?:[-+_.]\w+)*@\w+(?:[-._]\w+)*\.\w+(?:[-._]\w+)*$/g.test(str);
}
console.log(isEmail("abcd@aa"));
console.log(isEmail("abcd@aa.com"));
console.log(isEmail("abcd@aa.com.cn"));
console.log(isEmail("abcd@aa.com-cn"));
console.log(isEmail("abcd@aa.com_cn"));
console.log(isEmail("abcd.ef@aa.com"));
