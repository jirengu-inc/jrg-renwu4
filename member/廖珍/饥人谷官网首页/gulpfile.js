var gulp=require('gulp');
var minifycss=require('gulp-minify-css');//压缩css
var uglify=require('gulp-uglify');//压缩js
var concat=require('gulp-concat');//合并文件
var rename=require('gulp-rename');//重命名
var clean=require('gulp-clean');//清除
var minhtml=require('gulp-htmlmin');//压缩html
var imagemin=require('gulp-imagemin');//合并图片
//var less=require('gulp-less');
gulp.task('html',function(){
	gulp.src('*/.html')
		 .pipe(minhtml({collapseWhitespace: true}))
		.pipe(gulp.dest('dist'));
})

gulp.task('css',function() {
	gulp.src('css/common.css')
		//.pipe(concat('merge.css'))
		.pipe(rename({
			suffix:'.min'
		}))
		.pipe(minifycss())
		.pipe(gulp.dest('dist/css'))
})
gulp.task('css1',function() {
	gulp.src('css/style1.css')
		//.pipe(concat('merge.css'))
		.pipe(rename({
			suffix:'.min'
		}))
		.pipe(minifycss())
		.pipe(gulp.dest('dist/css'))
})
gulp.task('css2',function() {
	gulp.src('css/style2.css')
		//.pipe(concat('merge.css'))
		.pipe(rename({
			suffix:'.min'
		}))
		.pipe(minifycss())
		.pipe(gulp.dest('dist/css'))
})
gulp.task('js',function(argument){
	gulp.src('js/*/.js')
		.pipe(concat('merge.js'))
		.pipe(rename({
			suffix:'.min'
		}))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js/'));
})

gulp.task('img',function() {
	gulp.src('imgs/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/imgs'));
})

 gulp.task('build', ['html', 'css','css1','css2', 'js', 'img']);