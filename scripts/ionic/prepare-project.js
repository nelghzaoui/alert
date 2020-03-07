module.exports = ctx => {
  const del = require('del');
  const gulp = require('gulp');
  const replace = require('gulp-replace-task');
  const path = require('path');

  const application = {
    dev: { bundle_id: 'com.smalert.mobile.dev', name: 'DEV Smalert', version: '0.0.1', build: '1' },
    prod: { bundle_id: 'com.smalert.mobile', name: 'Smalert', version: '0.0.1', build: '1' }
  };

  const env = ctx.build.configuration || 'dev';
  console.log('Copy config for:', env);

  // Calculate build number based on AppVersion
  function calculateBuildNumber(project, majorSize, minorSize) {
    const split = project.version.split('.');

    const buildNumber =
      split[0].padStart(majorSize, '0') +
      split[1].padStart(minorSize, '0') +
      split[2].padStart(minorSize, '0') +
      project.build.padStart(minorSize, '0');

    return buildNumber;
  }

  try {
    // Delete ./config.xml
    del(path.resolve('config.xml'));

    const appEnv = application[env];
    // Copy config/config.xml to the root of the project
    gulp
      .src(path.resolve('config', 'config.xml'))
      .pipe(
        replace({
          patterns: [
            {
              match: 'APP_BUNDLE_ID',
              replacement: appEnv.bundle_id
            },
            {
              match: 'APP_VERSION',
              replacement: appEnv.version
            },
            {
              match: 'APP_BUILD_NUMBER',
              replacement: calculateBuildNumber(appEnv, 1, 2)
            },
            {
              match: 'APP_NAME',
              replacement: appEnv.name
            }
          ]
        })
      )
      .pipe(gulp.dest(path.resolve('./')));
  } catch {
    throw e;
  }
};
