var gulp = require('gulp');

var minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    minhtml = require('gulp-htmlmin'),
    jshint = require('gulp-jshint'),
    imagemin = require('gulp-imagemin');

gulp.task('html',function(){
  gulp.src('src/*.html')
  .pipe(minhtml({collapseWhitespace:true}))
  .pipe(gulp.dest('dist'));
});

gulp.task('css',function(){
  gulp.src('src/css/*.css')
  .pipe(concat('merge.min.css'))
  .pipe(minifycss())
  .pipe(gulp.dest('dist/css'));
});

gulp.task('js',function(){
  gulp.src('src/css/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter('default'))
  .pipe(concat('merge.js'))
  .pipe(rename({
    suffix:'.min'
  }))
  .pipe(uglify())
  .pipe(gulp.dest('dist/js'));
});

gulp.task('img',function(argument){
  gulp.src('src/img/*')
  .pipe(imagemin())
  .pipe(gulp.dest('dist/img'));
});

gulp.task('build',['html','css','js','img']);
