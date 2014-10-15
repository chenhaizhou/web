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
	    },
	    concat: {
		  options: {
		    // 定义一个用于插入合并输出文件之间的字符
		    separator: ';'
		  },
		  dist: {
		    // 将要被合并的文件
		    src: ['assets/scripts/**/*.js'],
		    // 合并后的JS文件的存放位置
		    dest: 'assets/<%= pkg.name %>.min.js'
		  }
		}
		
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('default', ['jshint']);

};