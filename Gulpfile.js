var options = {
  "sassFiles"  : "./scss/**/*.scss",
  "proxyURL" : "localhost/TechMe",
  "cssPath"  : "./dist/css/",
  "jsFiles"  : "./js/**/*.js",
  "jsMinPath": "./dist/js/"
};

/**
 * Gulp File for SASS
 * v1.0.0
 * Made by Zachary E. Dahan
 *
 * */

var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

gulp.task('default', function() {
  browserSync.init({
    proxy: options.proxyURL
  });

  gulp.watch(options.sassFiles, ['compile-sass']);
  gulp.watch("./**/*.html").on('change', browserSync.reload);
  gulp.watch("./**/*.js").on('change', browserSync.reload);
  gulp.watch("./**/*.php").on('change', browserSync.reload);
});

gulp.task('compile-sass', function() {
  gulp.src(options.sassFiles)
    .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer())
      .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(options.cssPath))
    .pipe(browserSync.stream());
});

gulp.task('js-min', function() {
  return gulp.src(options.jsFiles)
    .pipe(uglify())
    .pipe(gulp.dest(options.jsMinPath));
});
