var fs = require('fs');

var Sprite = require("../index.js").Sprite;
var sprite = new Sprite();
sprite.addImageSrc([
  "./test/img/red.png",
  "./test/img/green.png",
  "./test/img/blue.png",
  "./test/img/yellow.png"
], function(){
  var obj = sprite.compile('./sprite.png');
  obj.png.pipe(fs.createWriteStream('sprite.png'));
  fs.writeFile('sprite.css', obj.css);
});