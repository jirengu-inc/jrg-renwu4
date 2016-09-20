function isPhoneNumber(str) {
  return /^(?:86-?)?1[345789]\d{9}$/.test(str);
}

console.log(isPhoneNumber("8613343526424"));
console.log(isPhoneNumber("86-13343526424"));
console.log(isPhoneNumber("13343526424"));
console.log(isPhoneNumber("86133435264242"));
console.log(isPhoneNumber("86-133435264242"));
console.log(isPhoneNumber("133435264242"));
