function isValidPassword(str) {
  var passedFlags = 0;
  if (/^\w{6,20}$/.test(str)) {
    switch (true) {
      case (/\d/.test(str)):
        ++passedFlags;
      case (/[a-z]/.test(str)):
        ++passedFlags;
      case (/[A-Z]/.test(str)):
        ++passedFlags;
      case (/[_]/.test(str)):
        ++passedFlags;
      default:
        break;
    }
  }
  return passedFlags > 1 ? true : false;
}

console.log(isValidPassword("daw4324"));
console.log(isValidPassword("daw24"));
console.log(isValidPassword("dawdwad"));
console.log(isValidPassword("daw432ADw4"));
