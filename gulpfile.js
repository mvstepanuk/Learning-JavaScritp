const gulp = require('gulp')
const babel = require('gulp-babel')
const gulpESLintNew = require('gulp-eslint-new')

gulp.task(newFunction(), () => {
  // запуск ESLint
  gulp.src(['./es6/**/*.js', './public/es6/**/*.js'])
    .pipe(gulpESLintNew({ fix: true })) // Lint files, create fixes.
    .pipe(gulpESLintNew.fix()) // Fix files if necessary.
    .pipe(gulpESLintNew.format()) // Output lint results to the console.
    .pipe(gulpESLintNew.failAfterError()) // Exit with an error if problems are found.
  // исходный код для Node
  gulp.src('./es6/**/*.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(gulp.dest('./dist'))
  // исходный код для браузера
  gulp.src('./public/es6/**/*.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(gulp.dest('./public/dist'))
})

function newFunction () {
  return 'default'
}
