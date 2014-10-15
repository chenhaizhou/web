module.exports = function(grunt) {
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),
		jshint: {
	      files: ['Gruntfile.js', 'assets/scripts/**/*.js', 'spec/**/*.js'],
	      options: {
	        //这里是覆盖JSHint默认配置的选项
	        globals: {
	          jQuery: true,
	          console: true,
	          module: true,
	          document: true
	        }
	      }
	    }
		
	});

	grunt.registerTask('default', ['jshint']);

}