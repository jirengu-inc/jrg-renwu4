Array.prototype.diyPush = function() {
  for (var i = 0; i < arguments.length; i++) {
    this.splice(this.length, 0, arguments[i]);
  }
  return this.length;
};

Array.prototype.diyPop = function() {
  if (this.length > 0) {
    return this.splice(this.length - 1, 1)[0];
  } else {
    return undefined;
  }
};

Array.prototype.diyShift = function() {
  if (this.length > 0) {
    return this.splice(0, 1)[0];
  } else {
    return undefined;
  }
};

Array.prototype.diyUnshift = function() {
  for (var i = arguments.length - 1; i >= 0; i--) {
    this.splice(0, 0, arguments[i]);
  }
  return this.length;
};
