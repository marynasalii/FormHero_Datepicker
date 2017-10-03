/**
 * Created by ryankimber on 2017-09-07.
 */
var _ = require('lodash');

module.exports = function(gulp, plugins, buildProperties) {

    gulp.task('clean:html'), function() {
        return gulp
            .src([buildProperties.buildDirectory + '/*.html'], {read: false})
            .pipe(plugins.rimraf({force: true}));
    };

    gulp.task('html', ['clean:html'], function() {

        return gulp.src(['app/*.html'])
            .pipe(plugins.streamify(plugins.size({ showFiles: true })))
            .pipe(plugins.streamify(plugins.size({ showFiles: true})))
            .pipe(gulp.dest(buildProperties.buildDirectory));
    });
}