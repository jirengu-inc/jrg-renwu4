function addClass(obj, preAdd) {
  var names = obj.className.split(" ");
  for (var i = 0; i < names.length; i++) {
    if (preAdd === names[i]) {
      return;
    }
  }
  obj.className += " " + preAdd;
}

function removeClass(obj, preSub) {
  var names = obj.className.split(" ");
  for (var i = 0; i < names.length; i++) {
    if (preSub === names[i]) {
      names.splice(i, 1);
      --i;
    }
  }
  obj.className = names.join(" ");
}

var obj = {
  className: 'open menu'
}
addClass(obj, 'new');
console.log(obj.className);
addClass(obj, 'open');
console.log(obj.className);
addClass(obj, 'me');
console.log(obj.className);
removeClass(obj, 'open');
console.log(obj.className);
removeClass(obj, 'blabla');
console.log(obj.className);
