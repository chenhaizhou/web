require.config({

    baseUrl: "app/src/scripts",
    paths: {
		"jquery": "../../../bower_components/jquery/dist/jquery",
		"angular" : "../../../bower_components/angularjs/angular",
		"ngRoute": "../../../bower_components/angular-route/angular-route",
		"bootstrap": "../../../bower_components/bootstrap/dist/js/bootstrap",
		"moment": "../../../bower_components/moment/min/moment.min",
		"dateTime":"../../../bower_components/angular-bootstrap-datetimepicker/src/js/datetimepicker"
	},
	shim:{
        "angular": {
            exports:"angular"
        },
        "ngRoute": {
			deps: ["angular"]
		},
		"gcal": {
			deps: ["angular","ngCalendar","fullCalendar"]
		},
		"date": {
			deps: ["jquery","jqueryUi"]
		},
		"bootstrap":{
			deps: ["jquery"]
		},
		"moment":{
			exports: "moment"
		},
		"dateTime": {
			deps: ["moment","bootstrap","angular"]
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
		'use strict';
		angular.element(document).ready(function() {
			angular.bootstrap(document,['app']);
		});
	});
