var _ = require('lodash'),
    gulp = require('gulp'),
    glob = require('glob'),
    path = require('path'),
    plugins = require('gulp-load-plugins')(),
    using = require('gulp-using');

var buildProperties = {
    buildDirectory: './build'
};



//Dynamically load all of the task definitions in ./gulp-tasks/*.js
glob.sync( './gulp-tasks/*.js' ).forEach( function( file ) {
    try {
        require(path.resolve(file))(gulp, plugins, buildProperties);
    }catch(e) {
        console.log("\r\nUnable to load gulp tasks from " + file + ": Expecting file to export function(gulp, plugins, buildProperties){...}\r\n");
    }
});