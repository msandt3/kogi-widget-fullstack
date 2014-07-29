/*global module:false*/
module.exports = function(grunt) {

  
  // Project configuration.
  grunt.initConfig({
    preprocess: {
      dist: {
          src: 'static/testwidget.js',
          dest: 'static/widget.processed.js',
          options: {
              context: {
                  DIST: true
              }
          }
      },
      dev: {
          src: 'static/testwidget.js',
          dest: 'static/widget.processed.js',
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

  // Default task.
  // grunt.registerTask('default', ['concat', 'uglify']);

  grunt.registerTask('build',[
    'clean:dist',
    'preprocess:dist'
    'copy:dist',
  ]);

  grunt.registerTask('deploy',[
    'build',
    'buildcontrol:heroku'
  ]);

};
