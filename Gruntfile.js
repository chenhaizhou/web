module.exports = function(grunt) {
	'use strict';
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			files: ['Gruntfile.js','app/src/scripts/**/*.js', 'test/**/*.js'],

			options: {
				jshintrc: '.jshintrc'
			}
		},
		copy: {
		  main: {
		    expand: true,
		    cwd: 'bower_components/bootstrap/dist/fonts/',
		    src: '**',
		    dest: 'app/dist/fonts/',
		    flatten: true,
		    filter: 'isFile'
		  }
		},
		sass: {
			options: {                       // Target options
		        style: 'expanded'
		      },
			dist: {
				files: [{
					expand: true,
					cwd: 'app/src/sass',
					src: ['*.scss'],
					dest: 'app/src/css',
					ext: '.css'
				}]
			}
		},
		/*compass: {
			dist: {
				options: {
					sassDir: 'app/src/sass',
					cssDir: 'app/src/css'
				}
			}
		},*/
		cssmin: {
			combine: {
			    files: {
			      'app/dist/css/<%= pkg.name %>.min.css': 'app/dist/css/<%= pkg.name %>.css'
			    }
			  }
		},
		concat: {
			js: {
				
				    // 将要被合并的文件
				    src: [
				    	'bower_components/jquery/dist/jquery.js',
				    	'bower_components/angularjs/angular.js',
				    	'bower_components/angular-route/angular-route.js',
				    	'app/src/scripts/**/*.js'
			    	],
				    // 合并后的JS文件的存放位置
				    dest: 'app/dist/js/<%= pkg.name %>.js'
				
			},
			css: {
				src: ['bower_components/bootstrap/dist/css/bootstrap.css', 'app/src/css/*.css'],
				dest: 'app/dist/css/<%= pkg.name %>.css'
			}
		},
		karma: {

			unit: {

				configFile: "karma.conf.js",

				singleRun: true

			}

		},
		uglify: {
		    options: {
		      mangle: {
		        except: ['jQuery']
		      }
		    },
		    dist: {
		      files: {
		        'app/dist/js/<%= pkg.name %>.min.js': ['app/dist/js/<%= pkg.name %>.js']
		      }
		    }
		  },
		clean: ['app/dist'],
		watch: {
			sass: {
				files: 'app/src/sass/*.scss',
				tasks: ['css','concat:css','cssmin']
			}

		}

	});
	
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-sass');
	//grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-karma');
	//grunt.loadNpmTasks('karma-chrome-launcher');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	
	grunt.registerTask('test', ['jshint','karma']);

	grunt.registerTask('css', ['sass']);
	//grunt.registerTask('compass', ['compass']);

	grunt.registerTask('js', ['jshint','concat:js','uglify']);

	grunt.registerTask('cls', ['clean']);

	grunt.registerTask('default', ['jshint','copy','css','concat:css','cssmin']);

};