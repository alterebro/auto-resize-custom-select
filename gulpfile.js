const gulp      = require("gulp");
const babel     = require("gulp-babel");
const uglify    = require("gulp-uglify");
const rename    = require("gulp-rename");
const header    = require("gulp-header");

const pkg = require('./package.json');
const banner = ['/**',
    ' * <%= pkg.name %> - <%= pkg.description %>',
    ' * @version v<%= pkg.version %>',
    ' * @author <%= pkg.author %>',
    ' * @link <%= pkg.homepage %>',
    ' * @license <%= pkg.license %>',
    ' */',
    ''].join('\n');

gulp.task("default", function() {
    return gulp.src("src/*.js")
        .pipe(babel({ presets: ["@babel/preset-env"] }))
        .pipe(uglify())
        .pipe(header(banner, { pkg : pkg } ))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest("dist"));
});
