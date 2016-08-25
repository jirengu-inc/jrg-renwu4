function hasClass(el, cls) {
  var reg = new RegExp(cls, "g");
  return reg.test(el.className);
}

function addClass(el, cls) {
  if (!hasClass(arguments[0], arguments[1])) {
    el.className += " " + cls;
  }
}

function removeClass(el, cls) {
  var reg = new RegExp("(?:\\s|^)" + cls + "(?:\\b|$)", "g");
  if (hasClass(el, cls)) {
    el.className = el.className.replace(reg, "").trim();
  }
}

var test = {
  className: "hello wo haha"
};

console.log(hasClass(test, "wo"));
addClass(test, "hi");
console.log(test.className);
removeClass(test, "hello");
console.log(test.className);
