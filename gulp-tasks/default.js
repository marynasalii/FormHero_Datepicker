var runSequence = require('run-sequence');

module.exports = function(gulp, plugins, buildProperties) {
    gulp.task('default', function(callback) {
        console.log("\r\n\r\n");
        console.log("  *******************************************************************************************************");
        console.log("  *                                                                                                     *");
        console.log("  *   Skills: Front End Developer - A sample project for demonstrating some AngularJS/HTML/SASS skills  *");
        console.log("  *                                                                                                     *");
        console.log("  *   Available tasks are:                                                                              *");
        console.log("  *       gulp build - Just build the resources, but don't do anything with them.                       *");
        console.log("  *       gulp clean - Just totally wipe out the build directory                                        *");
        console.log("  *       gulp run  - Runs and tests the project, but doesn't watch                                     *");
        console.log("  *       gulp test - Runs the unit tests once and exits                                                *");
        console.log("  *       gulp watch - Runs and tests the project & watches for changes, rebuilding on a change.        *");
        console.log("  *                                                                                                     *");
        console.log("  *******************************************************************************************************\r\n\r\n");

    });

    gulp.task('build', ['html', 'scripts', 'resources', 'sass'], function(callback) {
        if(callback) callback();
    });

    gulp.task('run', function(callback){
        runSequence('build', function(){
            runSequence('run-tests', 'server', 'watch', function() {
                if(callback) callback();
            });
        });
    });

    gulp.task('test', function(callback) {
        runSequence('build',  function(){
            runSequence('run-tests', function() {
                if(callback) callback();
            });
        });
    });

    gulp.task('watch', function(callback) {
        runSequence('build',  function(){
            runSequence('run-tests', 'server', function() {
                if(callback) callback();
            });
        });
    });

    gulp.task('clean', function() {
        return plugins.rimraf(buildProperties.buildDirectory);
    });
}