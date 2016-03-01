var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('libs', function() {
  return gulp.src([
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/patternfly/dist/js/patternfly.min.js'
  ])
  .pipe(concat('libs.js'))
  .pipe(gulp.dest('dist/js'));
});

gulp.task('build', ['libs'], function () {
  // Umbrella tasks
});

gulp.task('default', function() {
  // Coming soon...
});
