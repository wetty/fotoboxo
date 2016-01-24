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
	      'assets/css/fotobox.css': ['_site/index.html', '_site/news/index.html', '_site/fotobox/index.html']
	    }
	  }
	},
	cssmin_: {
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
	cssmin: {
	    options: {
	      shorthandCompacting: false,
	      roundingPrecision: -1
	    },
	    target: {
	      files: {
	        'assets/css/fotobox.min.css': ['assets/css/*.css','!assets/css/output.css']
	      }
	    }
	},
	penthouse: {
	    extract : {
	        outfile : '_includes/critical.css',
	        css : '_site/assets/css/main.css',
//	        css : '_site/assets/css/main.css',
	        url : 'http://localhost:4000',
	        width : 1300,
	        height : 900,
	        skipErrors : false // this is the default
	    },
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
  grunt.loadNpmTasks('grunt-penthouse');
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