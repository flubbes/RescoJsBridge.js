var gulp = require('gulp');
var rename = require('gulp-rename');
var download = require('gulp-download');
var jsMin = require('gulp-jsmin');

gulp.task('update:jsbridge', () => {
    return download('https://www.resco.net/downloads/JSBridge.js')
        .pipe(gulp.dest('.'))
        .pipe(jsMin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('.'));
});
