/*
 * Hook set in config/config to run after prepare
 *
 * It copies files from ressources/ :
 * - certificates to use with servers
 * - properties for automatic signing
 * - licence file for Ariadnext
 * - build-extras to fix depedencies
 */
module.exports = (ctx) => {
  const gulp = require('gulp');
  const path = require('path');

  console.log('CTX', ctx);

  // Get Node Env
  const env = process.env.NODE_ENV || 'dev';

  console.log('Copy resources for: ' + env);

  // Files to copy and paths
  const src = path.join(ctx.opts.projectRoot, 'resources/android', env);
  const files = [
    {
      name: `certificates/mobile-${env}.cer`,
      dest: path.join(ctx.opts.projectRoot, 'www/certificates')
    },
    {
      name: 'signing/**/*',
      dest: path.join(ctx.opts.projectRoot, 'platforms/android')
    },
    {
      name: 'build-extras.gradle',
      dest: path.join(ctx.opts.projectRoot, 'platforms/android')
    }
  ];

  // Copy files
  files.forEach((file) => {
    try {
      gulp
        .src(path.join(src, file.name), {
          allowEmpty: true
        })
        .pipe(gulp.dest(file.dest));
    } catch (e) {
      console.log(`Cannot copy certificate ${file.name}`);
    }
  });

  console.log('---------------------------------------------------------------');
};
