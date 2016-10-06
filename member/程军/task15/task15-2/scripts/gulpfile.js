var gulp = require('gulp');
	var imagemin = require('gulp-imagemin')

gulp.task('default', function() {
  gulp.src('../images/*')
        .pipe(imagemin({
        	progressive: true,
            svgoPlugins: [{removeViewBox: false}],//不要移除svg的viewbox属性
            use: [pngquant()] 
        }
        	))
        .pipe(gulp.dest('../dist/images'))
});