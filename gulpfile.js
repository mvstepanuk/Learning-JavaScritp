const gulp = require("gulp");
const minify = require("gulp-babel-minify");

gulp.task( "default", () =>
  gulp.src("./es6/*.js")
    .pipe( minify({
      mangle: {
        keepClassName: true
      }
    }))
    .pipe( gulp.dest("./dist")));