module.exports = function(gulp, plugins, buildProperties) {

    gulp.task('server', ['build'], function() {
        console.log("Trying to start the server...");
        return plugins.connect.server({
            root: [buildProperties.buildDirectory],
            port: 8880,
            livereload: true,
            debug: true
        });
    });

};