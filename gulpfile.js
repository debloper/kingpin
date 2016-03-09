var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyJS = require('gulp-uglify');
var minifyCSS = require('gulp-clean-css');

gulp.task('jsLibs', function() {
  return gulp.src([
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/patternfly/dist/js/patternfly.min.js',
    'node_modules/page/page.js',
    'node_modules/whatwg-fetch/fetch.js',
    'node_modules/dot/doT.min.js'
  ])
  .pipe(minifyJS())
  .pipe(concat('libs.js'))
  .pipe(gulp.dest('dist/js'));
});

gulp.task('cssLibs', function() {
  return gulp.src([
    'node_modules/patternfly/dist/css/patternfly.min.css',
    'node_modules/patternfly/dist/css/patternfly-additions.min.css'
  ])
  .pipe(concat('libs.css'))
  .pipe(minifyCSS())
  .pipe(gulp.dest('dist/css'));
});

gulp.task('css', function() {
  return gulp.src('src/styles/*.css')
  .pipe(concat('app.css'))
  .pipe(minifyCSS())
  .pipe(gulp.dest('dist/css'));
});

gulp.task('font', function() {
  return gulp.src('node_modules/patternfly/dist/fonts/*.*')
  .pipe(gulp.dest('dist/fonts'));
});

gulp.task('html', function() {
  return gulp.src('src/*.html')
  .pipe(gulp.dest('dist'));
});

gulp.task('img', function() {
  return gulp.src('src/images/*.*')
  .pipe(gulp.dest('dist/img'));
});

gulp.task('js', function() {
  return gulp.src('src/scripts/*.js')
  .pipe(concat('app.js'))
  .pipe(minifyJS())
  .pipe(gulp.dest('dist/js'));
});

gulp.task('views', function() {
  return gulp.src('src/views/*.*')
  .pipe(gulp.dest('dist/views'));
});

gulp.task('build', [
    'css',
    'cssLibs',
    'font',
    'html',
    'img',
    'js',
    'jsLibs',
    'views'
  ], function () {
    console.log("Build succesful; build artifacts are under ./dist")
});

gulp.task('default', function() {
  // Coming soon...
});
