/*
 * grunt-contrib-nw-build
 * https://github.com/Mimieam/grunt-contrib-nw-build
 *
 * Copyright (c) 2013 A. Miezan Echis
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  var exec = require('child_process').exec,
      path = require("path");


  grunt.registerMultiTask('contrib_nw_build', 'create an exe for your node-webkitapp', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      punctuation: '.',
      separator: ', ',
      NW_SRC_DIR:'C:\\node-webkit\\' ,
      SRC_DIR: '*', 
      BUILD_DIR:'//tmp//build//win32//',
      LIBS:'..//lib//',
      BUILD_NAME:"appName"
    });


    var nw_builder_path = '//lib//nw-builder.bat ',//+options.BUILD_NAME+' ' + options.SRC_DIR + ' ' + options.BUILD_DIR;
        nw_builder = path.resolve(path.dirname()+nw_builder_path) +' '+ options.BUILD_NAME+' ' + path.resolve(options.SRC_DIR) + ' ' + path.resolve(path.dirname()+options.BUILD_DIR) + ' ' + path.resolve(path.dirname()+options.LIBS);

    //   // ----------------------------
    //   // Write the destination file.
    //   grunt.file.write(f.dest, src);
      var child = exec(nw_builder, function(err, stdout, stderr) {
        if (err){ grunt.log.writeln(stdout +stderr +'Man You r Scrweed') ; throw err;}
        else{ grunt.log.writeln(stdout+  stderr+'All Good Man');}
      });

      // Print a success message.
      // grunt.log.writeln('File "' + f.dest + '" created.');
      grunt.log.writeln(nw_builder +' All Good Man');
    // });
  });

};
