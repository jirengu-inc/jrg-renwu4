png-sprite
==========
```
var gulp = require('gulp');
var pngSprite = require('png-sprite');

gulp.task('buildSprites', function (done) {
  return gulp.src('img/**/*.png')
      .pipe(pngSprite.gulp({
        cssPath: 'sprites.scss',
        pngPath: 'sprites.png',
        namespace: 'sprites'
      }))
      .pipe(gulp.dest('./target/'))
});
```
```
var fs = require('fs');
var pngSprite = require('png-sprite');.Sprite;
var Sprite = pngSprite;
var sprite = new Sprite();
sprite.addImageSrc([
  "./img/a.png",
  "./img/b.png",
  "./img/c.png",
  "./img/d.png"
], function(){
  var obj = sprite.compile('./sprite.png');
  obj.png.pipe(fs.createWriteStream('sprite.png'));
  fs.writeFile('sprite.css', obj.css);
});
```