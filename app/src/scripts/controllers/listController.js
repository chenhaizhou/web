define(['jquery'],function ($){
	'use strict';

	return function ($scope, listService){
		
		listService.getList().then(function (data) {
			$scope.list = data;
		});

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

			//console.log(angular.element(document.querySelector('#aaa')));

			$scope.menuBoxLeft = l;
		};

		$scope.close = function(){
			$scope.menuBox = false;
		};

		$scope.addCard = function(index){
			$scope.list[index].data.unshift({});
			$scope.close();
		};

		$scope.saveCard = function(index,cardTitle){
			$scope.list[index].data[0] = {
				'title': cardTitle
			};
		};

		$scope.cancelCard = function(index){
			$scope.list[index].data.shift();
		};

		$scope.editCard = function(e,cardTitle,i){
			var w = $('.container-fluid .col-lg-3').width(),
				el = $(e.target).offset(),
				index = $(e.target).parents('.col-lg-3').index();
			$scope.modal = true;
			$scope.cardEditTitle = cardTitle;
			$scope.shadeTop = el.top - 15;
			$scope.shadeLeft = el.left - w + 32;
			$scope.shadeWidth = w;
			$scope.index = index;
			$scope.i = i;
		};

		$scope.saveEditCard = function(index,cardEditTitle,i){
			$scope.list[index].data[i].title = cardEditTitle;
			$scope.list[index].data[i].type = cardLable;
			$scope.modal = false;
		};

	};
});