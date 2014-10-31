require.config({
    //baseUrl: "../../",
    paths: {
		"jquery": "/bower_components/jquery/dist/jquery.min",
		"angular" : "/bower_components/angularjs/angular",
		"ngRoute": "/bower_components/angular-route/angular-route"
	},
	shim:{
        "angular": {
            exports:"angular"
        },
        "ngRoute": {
			deps: ["angular"]
		},
		priority: [
		    'angular'
		  ]
	}
});

require([
	'angular',
	'app',
	'routes'
	], function(angular, app, routes) {
		angular.element(document).ready(function() {
			angular.bootstrap(document,['app']);
		});
	});
