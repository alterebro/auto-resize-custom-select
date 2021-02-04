const gulp      = require("gulp");
const babel     = require("gulp-babel");
const umd       = require("gulp-umd");
const uglify    = require("gulp-uglify");


gulp.task("default", function() {
    return gulp.src("src/*.js")
        .pipe(babel({ presets: ["@babel/preset-env"] }))
        .pipe(umd())
        .pipe(uglify())
        .pipe(gulp.dest("dist"));
});
