'use strict';
var mozjpeg = require('imagemin-mozjpeg');

module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'assets/js/*.js',
        'assets/js/plugins/*.js',
        '!assets/js/scripts.min.js'
      ]
    },
    uglify: {
      dist: {
        files: {
          'assets/js/scripts.min.js': [
            'assets/js/plugins/*.js',
            'assets/js/_*.js'
          ]
        }
      }
    },
    imagemin: {
      dist: {
        options: {
          optimizationLevel: 7
        },
        files: [{
          expand: true,
          cwd: 'assets/images/_fullsize/',
          src: '**/*.{gif,GIF,jpg,JPG,png,PNG}',
          dest: 'assets/images/_imagemin/'
        }]
      }
    },
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'images/',
          src: '{,*/}*.svg',
          dest: 'images/'
        }]
      }
    },
	uncss: {
	  dist: {
	    files: {
	      'assets/css/tidy.css': ['_site/index.html', '_site/news/index.html', '_site/fotobox/index.html']
	    }
	  }
	},
	cssmin: {
	  target: {
	    files: [{
	      expand: true,
	      cwd: 'assets/css',
	      src: ['*.css', '!*.min.css'],
	      dest: 'assets/css',
	      ext: '.min.css'
	    }]
	  }
	},
    watch: {
      js: {
        files: [
          '<%= jshint.all %>'
        ],
        tasks: ['uglify']
      }
    },
    clean: {
      dist: [
        'assets/js/scripts.min.js'
      ]
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-svgmin');
  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
//  grunt.loadNpmTasks('grunt-responsive-images');

  // Register tasks
  grunt.registerTask('default', [
    'clean',
    'uglify',
    'imagemin',
    'uncss',
	'cssmin'
  ]);
  grunt.registerTask('dev', [
    'watch'
  ]);

};