define(['jquery'],function ($){
	'use strict';

	return function ($scope, listService, memberService){

		var vm = $scope.vm = {};
		
		listService.getList().then(function (data) {
			$scope.list = data;
		});

		memberService.getMember().then(function (data) {
			$scope.members = data;
		});


		$scope.showMenu = function(e, column){
			var el = $(e.target).offset(), 
				winWidth = $('.container-fluid').width(), 
				menuWidth = $('.menu-box').width(),
				//index = $(e.target).parents('.col-lg-3').index(),
				l;
			$scope.menuBox = true;
			$scope.menuBoxTop = el.top - $('nav').height() + 20;
			$scope.index = column;

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

		$scope.saveCard = function(index){
			$scope.list[index].data[0] = {
				'title': $scope.vm.cardNewTitle
			};
		};

		$scope.cancelCard = function(index){
			$scope.list[index].data.shift();
		};

		$scope.cancelEditCard = function(column,row){
			$scope.modal = false;
			$scope.list[column].data[row].member = $scope.oldMamber;
		};

		$scope.editCard = function(e,column,row){
			var w = $('.container-fluid .col-lg-3').width(),
				el = $(e.target).offset();
				//index = $(e.target).parents('.col-lg-3').index();
			$scope.modal = true;
			$scope.cardEditTitle = $scope.list[column].data[row].title;
			$scope.shadeTop = el.top - 15;
			$scope.shadeLeft = el.left - w + 32;
			$scope.shadeWidth = w;
			$scope.index = column;
			$scope.i = row;

			$scope.cardLable = $scope.list[column].data[row].type;
			$scope.cardMember = $scope.list[column].data[row].member;
			$scope.oldMamber = $scope.cardMember.join().split(",");
		};

		$scope.saveEditCard = function(index,i){
			$scope.list[index].data[i].title = $scope.cardEditTitle;
			$scope.list[index].data[i].type = $scope.cardLable;
			$scope.modal = false;
		};

		$scope.changeMember = function(memberId){
			var memberArr = $scope.cardMember, index = memberArr.indexOf(memberId);

			if(index >= 0){
				memberArr.splice(index, 1);
			}else{
				memberArr.push(memberId);
			}

			//$scope.cardMember = memberArr;
		};

	};
});