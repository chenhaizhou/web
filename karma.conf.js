// Karma configuration
// Generated on Mon Nov 03 2014 14:16:21 GMT+0800 (CST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine-jquery','jasmine', 'requirejs'],


    // list of files / patterns to load in the browser
    files: [
      {pattern: 'bower_components/jquery/dist/jquery.min.js', included: false},
      {pattern: 'bower_components/angularjs/angular.js', included: false},
      {pattern: 'bower_components/angular-route/angular-route.js', included: false},
      {pattern: 'bower_components/angular-mocks/angular-mocks.js', included: false},
      //{pattern: 'node_modules/jasmine-jquery/lib/jasmine-jquery.js', included: false},
      {pattern: 'app/src/scripts/*.js', included: false},
      {pattern: 'app/src/scripts/**/*.js', included: false},
      {pattern: 'test/**/*.spec.js', included: false},
      {pattern: 'json/*.json', watched: true, served: true, included: false},
      'test/test-main.js'
    ],


    // list of files to exclude
    exclude: [
      'app/src/scripts/main.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    //reporters: ['progress'],
    reporters: ['progress','coverage'],
    preprocessors : {
        'app/src/scripts/**/*.js': ['coverage']
    },
    coverageReporter: {
        type : 'html',
        dir : 'coverage/'
    },



    // web server port
    port: 9876,

    /*plugins: [
        'karma-requirejs',
        'karma-jasmine',
        'karma-chrome-launcher'
    ],*/


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
