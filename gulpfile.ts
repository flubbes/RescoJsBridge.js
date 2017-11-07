const gulp = require('gulp');
const rename = require('gulp-rename');
const download = require('gulp-download');
const jsMin = require('gulp-jsmin');


gulp.task('update:jsbridge', () => {
    return download('https://www.resco.net/downloads/JSBridge.js')
        .pipe(gulp.dest('.'))
        .pipe(jsMin())
        .pipe(rename({suffix: '.min' }))
        .pipe(gulp.dest('.'));
});

