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
      include: []
    });

    // Sync any properties listed in the "include" array.
    options.include.forEach(function(key) {
      options[key] = pkg[key];
    });

    // Format the 'main' property as an array for bower.json
    if (pkg.main || options.main) {
      options.main = _.union([], [pkg.main], (options.main || ['']));
    }

    var props = _.extend(bower, options);
    props = _.omit(props, options.exclude, ['exclude', 'include']);

    if (!_.isString(pkg.main)) {
      grunt.fail.warn('>>'.yellow + ' The "main" property is missing in package.json.'.bold);
    }

    grunt.file.write('bower.json', JSON.stringify(props, null, 2));
  });

};
