'use strict';
var gulp   = require('gulp'),
    watch  = require('gulp-watch'),
    ts     = require('gulp-typescript'),
    notify        = require("gulp-notify"),
    exec = require('gulp-exec');

var typescriptFiles = [
	'./**/*.ts',
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
          "target": "ES6",
          "module": "commonjs"
        }))
        .js.pipe(gulp.dest('./'))
        .pipe(exec('echo "2" > ../../tt.ts'))
        .pipe(notify('Changes saved meants'));
});

//Default watch task
gulp.task('watch', function(){

  //Watch all scripts
  watch(typescriptFiles, function(){
    gulp.start(['typescript']);
  });

});

gulp.task('default', ['typescript']);