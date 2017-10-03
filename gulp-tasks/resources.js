/**
 * Created by ryankimber on 2017-09-07.
 */
module.exports = function(gulp, plugins, buildProperties) {

    gulp.task('resources', [], function() {
        return gulp.src(['app/**/*.png', 'app/**/*.jpg'])
            .pipe(plugins.streamify(plugins.size({ showFiles: true })))
            .pipe(plugins.streamify(plugins.size({ showFiles: true})))
            .pipe(gulp.dest(buildProperties.buildDirectory));
    });
}