var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify');

gulp.task('jsLibs', function() {
  return gulp.src([
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/patternfly/dist/js/patternfly.min.js'
  ])
  .pipe(concat('libs.js'))
  .pipe(gulp.dest('dist/js'));
});

gulp.task('cssLibs', function() {
  return gulp.src([
    'node_modules/patternfly/dist/css/patternfly.min.css',
    'node_modules/patternfly/dist/css/patternfly-additions.min.css'
  ])
  .pipe(concat('libs.css'))
  .pipe(gulp.dest('dist/css'));
});

gulp.task('css', function() {
  return gulp.src('src/styles/*.css')
  .pipe(concat('app.css'))
  .pipe(minify())
  .pipe(gulp.dest('dist/css'));
});

gulp.task('html', function() {
  return gulp.src('src/index.html')
  .pipe(gulp.dest('dist'));
});

gulp.task('images', function() {
  return gulp.src('src/images/*.*')
  .pipe(gulp.dest('dist/img'));
});

gulp.task('scripts', function() {
  return gulp.src('src/styles/*.js')
  .pipe(concat('app.js'))
  .pipe(minify())
  .pipe(gulp.dest('dist/js'));
});

gulp.task('build', ['jsLibs', 'cssLibs', 'css', 'html', 'images', 'scripts'], function () {
  console.log("Build succesful; build artifacts are under ./dist")
});

gulp.task('default', function() {
  // Coming soon...
});
