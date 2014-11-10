define(['./controllers','jquery'],function (controllers, $){
	'use strict';
	controllers.controller('listController',['$scope', function ($scope){
		$scope.listName = ['To Do','Doing','Q&A','Done'];

		$scope.listObj = [
		{},
			{
				type: 'story',
				member: ['HZ','LL'],
				title: 'add html page relatade create',
				date: '2014-11-07'

			},
			{
				type: 'task',
				member: ['C'],
				title: 'delete html page relatade create',
				date: '2014-11-07'

			},
			{
				type: 'bug',
				member: ['SH'],
				title: 'update html page relatade create',
				date: '2014-11-07'

			},
			{
				type: 'wran',
				member: ['XA','BS','Q'],
				title: 'change html page relatade create',
				date: '2014-11-07'

			}
		];

		$scope.showMenu = function(e){
			var el = $(e.target).offset(), 
				winWidth = $('.container-fluid').width(), 
				menuWidth = $('.menu-box').width(), 
				index = $(e.target).parents('.col-lg-3').index(),
				l;
			$scope.menuBox = true;
			$scope.menuBoxTop = el.top - $('nav').height() + 20;
			$scope.index = index;

			l = menuWidth + el.left >= winWidth ? winWidth - menuWidth : el.left;

			console.log(angular.element(document.querySelector('#aaa')));

			$scope.menuBoxLeft = l;
		};

		$scope.close = function(){
			$scope.menuBox = false;
		};

		$scope.addCard = function(index){
			console.log(index);
		};

	}]);
});