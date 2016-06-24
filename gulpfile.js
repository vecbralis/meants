'use strict';
var gulp   = require('gulp'),
    watch  = require('gulp-watch'),
    ts     = require('gulp-typescript');

var typescriptFiles = [
	'./**/*.ts',
  '!typings/**/*.ts',
  '!typings/**/*.ts',
  '!*.d.ts',
	'!mtypings/**/*.ts',
	'!interface/**/*.ts',
	'!node_modules/**/*.ts',
	'!bower_components/**/*.ts'
];

//Typescript task
gulp.task('typescript', function(){
  return gulp.src(typescriptFiles)
        .pipe(ts({
            module: 'commonjs'
        })).js.pipe(gulp.dest('./'));
});

//Default watch task
gulp.task('watch', function(){

  //Watch all scripts
  watch(typescriptFiles, function(){
    gulp.start(['typescript']);
  });

});

gulp.task('default', ['typescript']);