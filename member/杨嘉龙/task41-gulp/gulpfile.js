var gulp = require('gulp');

//引入组件

var minhtml = require('gulp-htmlmin'),
minifycss = require('gulp-minify-css'),
uglify = require('gulp-uglify'),
imagemin = require('gulp-imagemin'),
// jshint = require('gulp-jshint'),
concat = require('gulp-concat'),
rename = require('gulp-rename')




gulp.task('html',function(){
	return gulp.src('src/*.html')
	.pipe(minhtml({collapseWhitespace:true}))
	.pipe(gulp.dest('dist'))
})

gulp.task('css',function(){
	return gulp.src('src/css/*.css')
	.pipe(concat('merge.css'))
	.pipe(rename({
		suffix:'.min'
	}))
	.pipe(minifycss())
	.pipe(gulp.dest('dist/css/'))
})

gulp.task('js',function(){
	return gulp.src('src/js/*.js')
/*	.pipe(jshint())
	.pipe(jshint.reporter('default'))// 对代码进行报错提示*/
	.pipe(concat('merge.js'))
	.pipe(rename({
		suffix:'.min'
	}))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js/'))
})

gulp.task('img', function(argument){
        return gulp.src('src/img/*')
            .pipe(imagemin())
            .pipe(gulp.dest('dist/img'));
    });

gulp.task('build',['html','css','js','img'])

