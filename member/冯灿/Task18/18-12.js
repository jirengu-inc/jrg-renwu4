function truncate(str, maxLength) {
  if (str.length > maxLength) {
    return str.slice(0, maxLength) + "...";
  } else {
    return str;
  }
}
console.log(truncate("hello, this is hunger valley.", 10) == "hello, thi...");
console.log(truncate("hello world", 20) == "hello world");
