var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

var pathToModule = function(path) {
  return path.replace(/^\/base\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    allTestFiles.push(pathToModule(file));
  }
});

require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base/app/scripts/',
  paths: {
    'jquery': 'bower_components/jquery/dist/jquery.min',
    'angular': 'bower_components/angularjs/angular',
    'ngRoute': 'bower_components/angular-route/angular-route',
    'ngMock': 'bower_components/angular-mocks/angular-mocks',
    'app': 'app'
  },
  shim:{
        "angular": {
            exports:"angular"
        },
        "ngRoute": {
          deps: ["angular"],
          exports: "ngRoute"
        },
        "ngMock": {
          deps: ["angular"],
          exports: "ngMock"
        }
  },

  // dynamically load all test files
  deps: allTestFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});
