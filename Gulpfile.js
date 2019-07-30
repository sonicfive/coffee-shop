var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var lost = require('lost');
var processors = [lost, autoprefixer];

gulp.task('styles', function(){
	gulp.src('assets/sass/**/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(postcss(processors))
	.pipe(gulp.dest('./assets/css/'));
});

gulp.task('default', function(){
	gulp.watch('assets/sass/**/*.scss', ['styles']);
});
