'use strict';

angular.module('cisoApp').factory('sessionService', ['$http', function($http){
	return{
		set:function(key,value){
			return sessionStorage.setItem(key,value);
		},
		get:function(key){
			return sessionStorage.getItem(key);
		},
		destroy:function(key){
			$http.post('http://safiahijab/data/destroy_session.php');
			return sessionStorage.removeItem(key);
		}
	};
}])