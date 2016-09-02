String.prototype.diyTrim = function() {
  var copy = this;
  return copy.replace(/^\s+|\s+$/g, "");
};
console.log("  Test   ".diyTrim());
