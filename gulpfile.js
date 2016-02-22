
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    maps = require('gulp-sourcemaps');


gulp.task('sass', function() {
  gulp.src('./rosecityLMS/assets/app/scss/*.scss')
    .pipe(maps.init())
    .pipe(sass())
    .pipe(maps.write('./'))
    .pipe(gulp.dest('./rosecityLMS/assets/app/styles'));
});

gulp.task('stream', function() {
  gulp.watch('./rosecityLMS/assets/app/scss/*.scss', ['sass']);
});