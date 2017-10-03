var _ = require('lodash'),
    runSequence = require('run-sequence');

module.exports = function(gulp, plugins, buildProperties) {

    gulp.task('scripts:clean', function () {
        return gulp
            .src([buildProperties.buildDirectory + '/js/*.js'], {read: false})
            .pipe(plugins.rimraf({force: true}))
            .on('error', plugins.util.log);
    });

    gulp.task('scripts:clean-templates-temp-file', function (callback) {
        return gulp.src([buildProperties.buildDirectory+ '/js/app-templates.tmp.js'], {read: false})
            .pipe(plugins.clean());
    });

    gulp.task('scripts', ['scripts:clean'], function (callback) {
        //Create the compiled templates file, then concatenate all of our JS into a single file, minify for deploy directory
        runSequence(
            'scripts:templates-to-js',
            'scripts-app',
            'scripts:clean-templates-temp-file', function () {
                plugins.util.log("Completed building .js files, deleting the temporary templates.js file...");
                runSequence('scripts:clean-templates-temp-file', callback);
            });
    });

    gulp.task('scripts:templates-to-js', ['scripts:clean-templates-temp-file'], function() {
        return gulp.src(['app/**/*.tpl.html'])
            .pipe(plugins.streamify(plugins.size({ showFiles: true })))
            .pipe(plugins.htmlmin({
                empty: true,
                spare: true,
                quotes: true
            }))
            .pipe(plugins.angularTemplatecache({
                root:   '',
                module: 'app-templates',
                standalone: true //Creates it's own module
            }))
            .pipe(plugins.concat('app-templates.tmp.js'))
            .pipe(plugins.streamify(plugins.size({ showFiles: true })))
            .pipe(plugins.insert.prepend("/* This file is generated as a part of build process and is not meant to be modified. It is automatically merged into formhero-app.js */\r\n"))
            .pipe(gulp.dest(buildProperties.buildDirectory + '/js/'))
            .on('error', plugins.util.log);
    });


    gulp.task('scripts-app', function (callback) {
        return gulp.src([
            buildProperties.buildDirectory + '/js/app-templates.tmp.js',
            './app/app.js',
            './app/**/*.js'
        ])
            .pipe(plugins.streamify(plugins.size({showFiles: true})))
            .pipe(plugins.concat('js/app.js'))
            .pipe(plugins.insert.prepend("\"use strict\";\r\n"))
            //Optionally replace variables in your JS from your build options.
            //.pipe(plugins.replace('${config.api.server}', buildProperties.API_SERVER))
            .pipe(gulp.dest(buildProperties.buildDirectory))
            .on('end', function () {
                plugins.util.log('Done building app.js');
            });
    });

}