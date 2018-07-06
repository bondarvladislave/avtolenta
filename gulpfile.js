var gulp = require('gulp'),
    concatCss = require('gulp-concat-css'),
    cleanCSS = require('gulp-clean-css'),
    rename = require("gulp-rename"),
    uncss = require('gulp-uncss'),
    concat = require('gulp-concat'),
    uglyfly = require('gulp-uglyfly'),
    imagemin = require('gulp-imagemin'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    clean = require('gulp-clean'),
    server = require('gulp-server-livereload'),
    cache = require('gulp-cache'),
    browsersync = require('browser-sync'),
    watch = require('gulp-watch');
 

//Компиляция Sass
gulp.task('sass', ['clean-css'], function () {
    return gulp.src('./src/sass/app.sass') //тест
        .pipe(sass().on('error', sass.logError))
        //.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./src/css'));
});

//Проставление префиксов для кроссбраузерности
gulp.task('autoprefix', ['sass'], function () {
    return gulp.src('./src/css/**/*.css')
        .pipe(autoprefixer({
            browsers: ['last 10 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./src/css'));
});

//Минимизация JS
gulp.task('scripts', function() {
    return gulp.src('./src/js/*.js')
    .pipe(concat('script.js'))
    .pipe(uglyfly())
    .pipe(gulp.dest('./src/js/'));
});


//Сжатие изображений
gulp.task('images', () =>
    gulp.src('./src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/img'))
);

//Очистка папки с проектом
gulp.task('clean', function () {
    return gulp.src('./build/*', {read: false})
        .pipe(clean());
});

gulp.task('clean-css', function () {
    return gulp.src('./src/css*', {read: false})
        .pipe(clean());
});


//Запуск сервера
gulp.task('webserver', function() {
  gulp.src('./src')
    .pipe(server({
      livereload: true,
      defaultFile: 'index.html',
      directoryListing: false,
      open: true
    }));
});


//Слежение
gulp.task('watch', ['sass', 'scripts'], function() {
    gulp.watch('./src/sass/**/*.sass', ['sass']);
    gulp.watch('./src/*.html', browsersync.reload);
    gulp.watch(['./src/js/*.js'], ['scripts']);
    gulp.run('webserver');
});

// Сборка проекта  - clean- images - sass - mincss - autoprefix - scripts 

gulp.task('build', ['clean', 'autoprefix', 'scripts', 'images'], function() {
    var buildCss = gulp.src('./src/css/app.css')
        .pipe(gulp.dest('./build/css'));

    var buildFonts = gulp.src('./src/fonts/**/*')
        .pipe(gulp.dest('./build/fonts'));

    var buildJs = gulp.src('./src/js/**.js')
        .pipe(gulp.dest('./build/js'));

    var buildHtml = gulp.src('./src/index.html')
        .pipe(rename('index.php'))
        .pipe(gulp.dest('./build/'));
});

// Очистка кеша 
gulp.task('clear', function() {
    return cache.clearAll();
});

// Дефолтный таск 
gulp.task('default', ['watch']);
