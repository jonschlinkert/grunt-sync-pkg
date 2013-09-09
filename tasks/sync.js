/**
 * grunt-sync-pkg
 * http://github.com/jonschlinkert/grunt-sync-pkg
 *
 * Copyright (c) 2013 Jon Schlinkert, contributors
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  grunt.registerTask('sync', 'Sync manifests.', function () {

    // If bower.json doesn't exist yet, add one.
    if (!grunt.file.exists('bower.json')) {
      grunt.file.write('bower.json', "{}");
    }

    var bower = grunt.file.readJSON('bower.json');
    var pkg = grunt.file.readJSON('package.json');
    var _ = grunt.util._;

    var options = this.options({
      name: pkg.name,
      version: pkg.version,
      main: [pkg.main],
      dependencies: pkg.dependencies || void 0,
      devDependencies: pkg.devDependencies || void 0
    });

    if (pkg.main || options.main) {
      options.main = _.union([], [pkg.main], (options.main || ['']));
    }

    bower = JSON.stringify(_.extend(bower, options), null, 2);
    grunt.file.write('bower.json', bower);
  });

};
