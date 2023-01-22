const gulp        = require('gulp');
// импортируем с package.json компиляторы
const browserSync = require('browser-sync');
const sass        = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");

// создаем задачу с помощью команды gulp.task, server-название задачи,
// функция,baseDir: "src"-откуда будем запускать сервер

gulp.task('server', function() {
    browserSync({
        server: {
            baseDir: "src"
        }
    });
});

gulp.task('styles', function() {
    // return возвращает задачу когда она віполниться,путь к файлу
    // +(scss|sass) вібор препроцесора
    return gulp.src("src/sass/**/*.+(scss|sass)") 
        // команда pipe, чтоб выполнялось действие(файл)
        // запускаеь sass,outputStyle -стиль, compressed - сжатій стиль
        // .on('error', sass.logError)) -где будет ошибка, если такое произойдет
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        // путь куда файлы должен поместиться, взяли файлы по адресу return gulp.src, потом скомпилировать файлы .pipe(sass, и отправили  .pipe(gulp.dest("src/css"))
        .pipe(gulp.dest("src/css"))
        // чтоб обновлялась страница
        .pipe(browserSync.stream());
});

// задача, чтоб следить за изменениями во всех файлах
gulp.task('watch', function() {
    // следит за обновлениями файлов "src/sass/**/*.+(scss|sass), потом запускает задачу gulp.parallel('styles'))
    gulp.watch("src/sass/**/*.+(scss|sass)", gulp.parallel('styles'));
    // следим за изменения html файлами, 
    gulp.watch("src/*.html").on('change', browserSync.reload);
})

// объединяем задачи, 'default задача запускаеться по умолчанию, gulp.parallel парарельно запускаем  задачи
gulp.task('default', gulp.parallel('watch', 'server', 'styles'));