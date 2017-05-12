var gulp = require('gulp');
var uglify=require("gulp-uglify");
var uglifycss=require("gulp-uglifycss");

//js处理
gulp.task('uglify', function () {
    gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dest/js'))
});
//css处理
gulp.task('uglifycss', function () {
    gulp.src('src/css/*.css')
        .pipe(uglifycss())
        .pipe(gulp.dest('dest/css'))
});
//监测变化
gulp.task("watch",function () {
    gulp.watch("src/js/*.js",["uglify"]);
    gulp.watch("src/css/*.css",["uglifycss"]);
})
gulp.task("default",["watch"]);

