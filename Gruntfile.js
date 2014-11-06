module.exports = function(grunt) {
	'use strict';
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			files: ['Gruntfile.js','app/scripts/**/*.js', 'test/**/*.js'],

			options: {
				jshintrc: '.jshintrc'
			}
	      /*options: {
	        //这里是覆盖JSHint默认配置的选项
	        globals: {
	          jQuery: true,
	          console: true,
	          module: true,
	          document: true
	        }
	    }*/

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
		    dest: 'src/js/<%= pkg.name %>.min.js'
		}
	},
	karma: {

		unit: {

			configFile: "karma.conf.js",

			singleRun: true

		}

	},
	sass: {
		dist: {
			files: [{
				expand: true,
				cwd: 'app/sass',
				src: ['*.scss'],
				dest: 'app/css',
				ext: '.css'
			}]
			//files: {'app/css/layout.css' : 'app/sass/layout.scss'}
		}
	},
	compass: {
		dist: {
	      options: {
	        sassDir: 'app/sass',
	        cssDir: 'app/css'
	      }
	    }
	}

});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('karma-chrome-launcher');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.loadNpmTasks('grunt-karma');

	grunt.registerTask('test', ['jshint','karma']);

	grunt.registerTask('css', ['sass']);
	grunt.registerTask('compass', ['compass']);



	grunt.registerTask('default', ['jshint']);

};