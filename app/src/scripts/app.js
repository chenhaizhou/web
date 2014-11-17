define(['angular',
	'routes',
	'controllers/controllers',
	'services/services', 
	'filters/filters',
	'directives/directives',
	'dateTime'
	], function (angular) {
		'use strict';
		return angular.module('app', [
			'controllers', 
			'services',
			'filters', 
			'directives',
			'routes','ui.bootstrap.datetimepicker']);
	});