define(function(){
	'use strict';
	return function (){
		return function (name){
			if(name){
				return name.match(/^[a-zA-Z]|\s[a-zA-Z]/g).join(",").replace(/,|\s/g,'').toUpperCase();
			}
		};
	};
});