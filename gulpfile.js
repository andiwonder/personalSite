var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-ruby-sass'),
    livereload = require ('gulp-livereload'),
    imagemin = require('gulp-imagemin');

function errorLog(error) {
  console.error.bind(error);
  this.emit('end');
}

gulp.task('image', function(){
    gulp.src('images-original/**/*')
        .pipe(imagemin())
        .on('error', errorLog)
        .pipe(gulp.dest('images'));
});