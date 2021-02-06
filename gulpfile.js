const gulp      = require("gulp");
const babel     = require("gulp-babel");
const uglify    = require("gulp-uglify");
const rename    = require("gulp-rename");
const markdown  = require('gulp-markdown');
const wrapper   = require('gulp-wrapper');

// ~~~~~~~~~~~~~~~~~~
// Build default
const pkg = require("./package.json");
const credits = `/*!
${pkg.name} v${pkg.version}
${pkg.license} (c) ${new Date().getFullYear()} ${pkg.author}
${pkg.homepage}
*/`;

gulp.task("default", function() {
    return gulp.src("src/*.js")
        .pipe(babel({ presets: ["@babel/preset-env"] }))
        .pipe(uglify())
        .pipe(wrapper({
            header: credits + '\n',
        }))
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest("dist"));
});

// ~~~~~~~~~~~~~~~~~~
// Build Docs
const tpl = {
    header : `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <title>${pkg.name} v${pkg.version}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, shrink-to-fit=no" />
        <meta name="description" content="${pkg.homepage}" />
        <link rel="stylesheet" href="css.css" />
    </head>
    <body>`,
    footer : `</body>
    </html>`
};
gulp.task("docs", function() {
    return gulp.src("README.md")
        .pipe(markdown())
        .pipe(wrapper({
            header: tpl.header + '\n',
            footer: tpl.footer + '\n'
        }))
        .pipe(gulp.dest("docs"))
});
