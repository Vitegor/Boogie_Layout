var gulp        = require('gulp'),
    watch       = require('gulp-watch'),
    uglify      = require('gulp-uglify'),
    concat      = require('gulp-concat'),
    sass        = require('gulp-sass'),
    cssmin      = require('gulp-minify-css'),
    rigger      = require('gulp-rigger'),
    plumber     = require('gulp-plumber'),
    bower       = require('main-bower-files'),
    rimraf      = require('rimraf'),
    browserSync = require("browser-sync"),
    reload      = browserSync.reload;

var paths = {
  src: {
    html:     'src/*.html',
    style:    'src/sass/main.scss',
    js:       ['src/js/*.js', '!src/js/modulargrid.js'],
    //js:       'src/js/*.js',
    img:      'src/img/**/*.*',
    content:  'src/content/**/*.*',
    fonts:    'src/fonts/**/*.*'
  },

  build: {
    html:     'build/',
    lib:      'build/lib/',
    css:      'build/css/',
    js:       'build/js/',
    img:      'build/img/',
    content:  'build/content/',
    fonts:    'build/fonts/'
  },

  watch: {
    html:     'src/**/*.html',
    style:    'src/sass/**/*.scss',
    js:       'src/js/**/*.js',
    img:      'src/img/**/*.*',
    content:  'src/content/**/*.*',
    fonts:    'src/fonts/**/*.*'
  },

  clean: './build'
};

var config = {
  server: { baseDir: paths.build.html },
  startPath: "admin_news.html",
  notify: false
};

gulp.task('webserver', function(cb) {
  browserSync(config);
});

gulp.task('clean', function(cb) {
  rimraf(paths.clean, cb);
});

gulp.task('html', function() {
  gulp.src(paths.src.html)
    .pipe(rigger())
    .pipe(gulp.dest(paths.build.html))
    //.pipe(reload({stream: true}));
});

gulp.task('lib', function() {
  gulp.src(bower())
    .pipe(gulp.dest(paths.build.lib));
})

gulp.task('css', function () {
  gulp.src(paths.src.style)
    .pipe(plumber())
    .pipe(sass({ includePaths : [paths.src.style] }))
    //.pipe(cssmin())
    .pipe(gulp.dest(paths.build.css))
    //.pipe(reload({stream: true}));
});

gulp.task('js', function () {
  gulp.src(paths.src.js)
    .pipe(concat('main.js'))
    //.pipe(uglify())
    .pipe(gulp.dest(paths.build.js))
    //.pipe(reload({stream: true}));
});

gulp.task('img', function () {
  gulp.src(paths.src.img)
    .pipe(gulp.dest(paths.build.img))
    //.pipe(reload({stream: true}));
});

gulp.task('content', function () {
  gulp.src(paths.src.content)
    .pipe(gulp.dest(paths.build.content))
    //.pipe(reload({stream: true}));
});

gulp.task('fonts', function() {
  gulp.src(paths.src.fonts)
    .pipe(gulp.dest(paths.build.fonts))
});

gulp.task('build', [
  'html',
  'lib',
  'css',
  'js',
  'img',
  'content',
  'fonts'
]);

gulp.task('watch', function(){
  watch(paths.watch.html, function(event, cb) {
    gulp.start('html');
  });

  watch(paths.watch.style, function(event, cb) {
    gulp.start('css');
  });

  watch(paths.watch.js, function(event, cb) {
    gulp.start('js');
  });

  watch(paths.watch.img, function(event, cb) {
    gulp.start('img');
  });

  watch(paths.watch.img, function(event, cb) {
    gulp.start('content');
  });

  watch(paths.watch.fonts, function(event, cb) {
    gulp.start('fonts');
  });
});

//gulp.task('default', ['build', 'webserver', 'watch']);
gulp.task('default', ['build', 'watch']);