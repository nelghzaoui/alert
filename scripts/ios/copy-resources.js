/*
 * Hook set in config/config to run after prepare
 *
 * It copies files from ressources/ :
 * - certificates to use with servers
 * - properties for automatic signing
 *
 * Set "addResource: true" to copy files to Xcode projet
 */
module.exports = function (ctx) {
  const fs = require('fs');
  const gulp = require('gulp');
  const xcode = require('xcode');
  const path = require('path');

  // Get Node Env
  const env = process.env.NODE_ENV || 'dev';

  console.log('Copy resources for: ' + env);

  // Files to copy and paths
  const src = path.join(ctx.opts.projectRoot, 'resources/ios', env);

  const files = [
    {
      name: `certificates/mobile-${env}.cer`,
      addResource: false,
      dest: path.join(ctx.opts.projectRoot, 'www/certificates')
    }
  ];

  // Recursively search for file with the tiven filter starting on startPath
  function searchRecursiveFromPath(startPath, filter, rec, multiple) {
    if (!fs.existsSync(startPath)) {
      console.log('no dir ', startPath);
      return;
    }

    const files = fs.readdirSync(startPath);
    const resultFiles = [];
    for (let i = 0; i < files.length; i++) {
      const filename = path.join(startPath, files[i]);
      const stat = fs.lstatSync(filename);
      if (stat.isDirectory() && rec) {
        fromDir(filename, filter); // recurse
      }

      if (filename.indexOf(filter) >= 0) {
        if (multiple) {
          resultFiles.push(filename);
        } else {
          return filename;
        }
      }
    }
    if (multiple) {
      return resultFiles;
    }
  }

  // Copy files
  const xcodeProjPath = searchRecursiveFromPath('platforms/ios', '.xcodeproj', false);
  const projectPath = xcodeProjPath + '/project.pbxproj';

  const proj = xcode.project(projectPath);
  proj.parse(() => {
    files.forEach((file) => {
      if (!fs.existsSync(path.join(src, file.name))) {
        return;
      }

      try {
        gulp.src(path.join(src, file.name)).pipe(gulp.dest(file.dest));
      } catch (e) {
        console.log(`Cannot copy ${file.name}`);
        return;
      }

      if (file.addResource) {
        proj.addResourceFile(file.name);
      }
    });

    fs.writeFileSync(projectPath, proj.writeSync());
  });

  console.log('---------------------------------------------------------------');
};
