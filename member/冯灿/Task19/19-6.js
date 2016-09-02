function jsonDeepCopy(json) {
  var newJson = {};
  for (var innerProp in json) {
    if (typeof json[innerProp] === "object" ) {
      newJson[innerProp] = arguments.callee(json[innerProp]);
    } else {
      newJson[innerProp] = json[innerProp];
    }
  }
  return newJson;
}
