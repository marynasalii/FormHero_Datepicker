module.exports = function(gulp, plugins, buildProperties) {

    plugins.util.log("Starting watches...");

    plugins.watch(['./test/*.js', './test/**/*.js', './build/**/*.js'], function() {
        //setTimeout(function() { gulp.start('run-tests') }, 4000);
    });

    gulp.watch(['./app/*.html'], ['html', 'live-reload']);
    gulp.watch(['./app/**/*.js', './app/**/*.tpl.html'], ['scripts', 'live-reload']);
    gulp.watch(['./app/**/*.scss', './app/*.scss'], ['sass', 'live-reload']);


    gulp.task('live-reload', function() {
        return gulp.src('./app/**/*').pipe(plugins.connect.reload());
    })
};