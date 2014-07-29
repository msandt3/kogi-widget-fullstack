/*global module:false*/
module.exports = function(grunt) {

  
  // Project configuration.
  grunt.initConfig({
    preprocess: {
      dist: {
          src: 'src/static/testwidget.js',
          dest: 'dist/static/widget.processed.js',
          options: {
              context: {
                  DIST: true
              }
          }
      },
      dev: {
          src: 'src/static/testwidget.js',
          dest: 'src/static/widget.processed.js',
          options: {
              inline: true,
              context: {
                  DEV: false
              }
          }
      }
    },
    buildcontrol:{
      options: {
          dir:'dist',
          commit:true,
          push: true,
          message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
      },
      heroku: {
          options:{
              remote: 'git@heroku.com:fast-ravine-3470.git',
              branch: 'master'
          }
      }
    },
    clean: {
      dist: ["dist"]
    }, 
    copy: {
      dist: {
        files: [
          {expand:true, cwd:'src/', src: ['**'], dest: 'dist/'},
          {expand: true, src:['package.json'], dest: 'dist/'}
        ]
      }
    },
    express: {
      options: {

      },
      dev: {
        options: {
          script: 'src/server.js'
        }
      }
    },
    watch: {
      express: {
        files:  [ 'src/**/*.js' ],
        tasks:  [ 'preprocess:dev','express:dev' ],
        options: {
          spawn: false // for grunt-contrib-watch v0.5.0+, "nospawn: true" for lower versions. Without this option specified express won't be reloaded
        }
      }
    }

  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-preprocess');
  grunt.loadNpmTasks('grunt-build-control');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  // grunt.registerTask('default', ['concat', 'uglify']);

  grunt.registerTask('build-dist',[
    'clean:dist',
    'preprocess:dist',
    'copy:dist',
  ]);

  grunt.registerTask('deploy',[
    'build-dist',
    'buildcontrol:heroku'
  ]);

  grunt.registerTask('serve',[
    'preprocess:dev',
    'express:dev',
    'watch'
  ]);

};
