function camelize(str) {
  var result = str.replace(/-./g, function(match, pos, originalText) {
    return str[pos + 1].toUpperCase();
  });
  return result;
}
console.log(camelize("background-color") == 'backgroundColor');
console.log(camelize("list-style-image") == 'listStyleImage');
