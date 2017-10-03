module.exports = function(gulp, plugins, buildProperties) {

    gulp.task('clean:css'), function () {
        return gulp
            .src([buildProperties.buildDirectory + '/css/*.css'], {read: false})
            .pipe(plugins.rimraf({force: true}));
    };

    gulp.task('sass', ['clean:css'], function() {
        //Build the ui-css and the app css.
        return gulp.src([
            './app/css/_*.scss',
            './app/css/*.scss',
            './app/css/**/*.scss',
            './app/**/*.scss'])
            .pipe(plugins.concat('css/app.scss'))
            .pipe(plugins.sass())
            .pipe(gulp.dest(buildProperties.buildDirectory))
            .pipe(plugins.cleancss())
            .on('end', function() {
                gulp.src(['app/css/**/*.scss', 'app/js/**/*.scss'])
                    .pipe(plugins.concat('app.scss'))
                    .pipe(plugins.sass())
                    .pipe(gulp.dest(buildProperties.buildDirectory + '/css'));
            });
    });

};