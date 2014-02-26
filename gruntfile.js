/* global module:false */
module.exports = function(grunt) {

  // Project configuration
	grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),		
		uglify:  {
			my_target: {
				files: {
					'assets/js/script.js' : ['assets/components/js/*.js']
				}//files
			}// my target
		},//uglify

		compass: {
			dev: {
				options: {
					config: 'config.rb'
					
				}//options
			}//dev
		},//compass
				
		watch: {
			options: { livereload: true },
			scripts: {
				files: ['assets/components/js/*.js' ],
          tasks: ['uglify']
			}, //scripts
			
			sass: {
				files: ['assets/components/sass/*.scss'],
				tasks: ['compass:dev']
			}, //sass
			
			html: {
				files: ['*.html']
			}
			
		}//watch

	}); //init config

// Load all Grunt plugins from the package.json file
require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

grunt.registerTask('default', [ 'uglify', 'compass', 'watch']);

}; //exports
