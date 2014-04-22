Watching building with gulp, this is the client side package
so there is no problem with `npm start` blocking, it just is rigged to run this
build script and watch for changes.

    gulp = require 'gulp'
    less = require 'gulp-less'
    browserify = require 'gulp-browserify'
    rename = require 'gulp-rename'

And our scripts

    gulp.task 'source', ->


Map source directories to target build directories, then run the pipelines
for each.

      targets =
        'src': 'build'

Each area has html templates, less styles, and litcoffee source.

      for src, dest of targets
        gulp.src '**/*.litcoffee', {cwd: src, read: false}
          .pipe browserify
            transform: ['coffeeify']
            debug: true
          .pipe rename extname: '.js'
          .pipe gulp.dest dest
        gulp.src '**/*.less', {cwd: src}
          .pipe less()
          .pipe gulp.dest dest
        gulp.src '**/*.html', {cwd: src}
          .pipe gulp.dest dest

    gulp.task 'default', ['source']
