module.exports = function(grunt) {
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),
		jshint: {
	      files: ['Gruntfile.js', 'app/scripts/**/*.js', 'test/**/*.js'],
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
		    src: ['app/scripts/**/*.js'],
		    // 合并后的JS文件的存放位置
		    dest: 'app/<%= pkg.name %>.min.js'
		  }
		},
		karma: {

            unit: {

                configFile: "karma.conf.js",

                singleRun: true

            }

        }
		
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('karma');

	grunt.registerTask('test', ['jshint','karma']);

	grunt.registerTask('default', ['jshint']);

};