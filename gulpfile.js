var gulp        = require('gulp');
var source      = require('vinyl-source-stream');
var browserify  = require('browserify');
var babelify    = require('babelify');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var minifyCSS   = require('gulp-minify-css');

// Where our files are located
var sassFiles = "src/sass/main.scss";
var htmlFiles = "src/*.html";
var jsFiles   = "src/js/**/*.js";

gulp.task('browserify', function() {
  return browserify('./src/js/index.js')
      .transform("babelify", {presets: ["es2015"]})
      .bundle()
      //Pass desired output filename to vinyl-source-stream
      .pipe(source('main.js'))
      // Start piping stream to tasks!
      .pipe(gulp.dest('./build/'));
});

gulp.task('sass', function() {
  return gulp.src(sassFiles)
      .pipe(sass())
      .pipe(minifyCSS())
      .pipe(gulp.dest("./build/"));
});

gulp.task('html', function() {
  return gulp.src(htmlFiles)
      .pipe(gulp.dest('./build/'));
});

gulp.task('default',function() {
  browserSync.init(['./build/**/**.**'], {
    server: "./build"
  });

  gulp.start(['browserify', 'sass', 'html']);

  gulp.watch(sassFiles, ['sass']);
  gulp.watch(htmlFiles, ['html']);
  gulp.watch(jsFiles, ['browserify']);
});
