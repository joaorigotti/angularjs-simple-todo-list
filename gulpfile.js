'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat');

var js = [
  'assets/components/angular/angular.min.js',
  'js/app.js'
];

gulp.task('default', function() {
  gulp.src(js).pipe(concat('bundle.min.js')).pipe(gulp.dest('./js/'));
});
