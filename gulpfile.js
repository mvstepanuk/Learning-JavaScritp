const gulp = require('gulp')
const minify = require('gulp-babel-minify')

gulp.task(newFunction(), () => {
  gulp.src('./es6/**/*.js')
    .pipe(minify({
      mangle: {
        keepClassName: true
      }
    }))
    .pipe(gulp.dest('./dist'))
  gulp.src('./public/es6/**/*.js')
    .pipe(minify({
      mangle: {
        keepClassName: true
      }
    }))
    .pipe(gulp.dest('./public/dist'))
})

function newFunction () {
  return 'default'
}
