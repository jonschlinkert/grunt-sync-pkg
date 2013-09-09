# grunt-sync-pkg [![NPM version](https://badge.fury.io/js/grunt-sync-pkg.png)](http://badge.fury.io/js/grunt-sync-pkg)  [![Build Status](true.png)](true)

> Minimalist Grunt plugin to sync only basic properties between package.json and bower.json

This plugin syncs the following properties between `package.json` and `bower.json`:

* `name`
* `version`
* `main`
* `dependencies`
* `devDependencies`

Also, if a `bower.json` file does not exist, the plugin creates on first. There is no option to turn this off, since there is no reason to use the plugin if you aren't syncing with anything :-).


## Getting Started
_If you haven't used [grunt][] before, be sure to check out the [Getting Started][] guide._

From the same directory as your project's [Gruntfile][Getting Started] and [package.json][], install this plugin with the following command:

```bash
npm install grunt-sync-pkg --save-dev
```

Once that's done, add this line to your project's Gruntfile:

```js
grunt.loadNpmTasks('grunt-sync-pkg');
```

If the plugin has been installed correctly, you should now be able to run `grunt sync` at the command line to run the `sync` task.

[grunt]: http://gruntjs.com/
[Getting Started]: https://github.com/gruntjs/grunt/blob/devel/docs/getting_started.md
[package.json]: https://npmjs.org/doc/json.html


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt][].


## Release History
 * 2013-09-09   v0.1.0   First commit


## License
Copyright (c) 2013-09-09 Jon Schlinkert
Licensed under the [MIT LICENSE](LICENSE-MIT).

***

Project created by [Jon Schlinkert](http://github.com/jonschlinkert).

_This file was generated on 9/9/2013._
