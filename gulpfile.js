'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat');

var js = [
  'assets/components/angular/angular.min.js',
  'js/app.js'
];

var css = [
  'assets/components/bootstrap/dist/css/bootstrap.min.css',
  'css/app-styles.css'
];

gulp.task('default', function() {
  gulp.src(css).pipe(concat('styles.min.css')).pipe(gulp.dest('./css/'));
  gulp.src(js).pipe(concat('bundle.min.js')).pipe(gulp.dest('./js/'));
});
