/*
自分用gulp設定ファイル 
*/

var gulp = require('gulp');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');


gulp.task('styles', function(){
    gulp.src('sass/**/*.scss')
    	.pipe(plumber())
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(gulp.dest('css/'))
        .pipe(rename({suffix: '.min'}))
        .pipe(cssmin())
		.pipe(gulp.dest('css/'))
});

gulp.task('watch', function(){
    gulp.watch('sass/**/*.scss', ['styles']);
    // gulp.watch('css/**/*.css', ['cssmin']);
});

gulp.task('default', ['watch']);