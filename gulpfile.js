const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./index.scss')
    .pipe(sass({
      includePaths: [
        './src/css-package'
      ]
    }))
    .pipe(gulp.dest('./'));
});