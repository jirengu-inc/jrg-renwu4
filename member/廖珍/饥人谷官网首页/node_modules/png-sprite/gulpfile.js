var gulp = require('gulp');
var gulpSprite = require('./gulp');
gulp.task('default', function() {
  gulp
    .src('test/img/**/*.png')
    .pipe(gulpSprite())
    .pipe(gulp.dest('target/'))
});