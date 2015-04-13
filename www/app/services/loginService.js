'use strict';
angular.module('cisoApp').factory('loginService',function($http, $location, sessionService){
	return{
		login:function(data,scope){
			var $promise=$http.post('http://safiahijab/data/user.php',data); //send data to user.php
			$promise.then(function(msg){
				var uid=msg.data;
				if(uid){
					scope.msgtxt='Correct information';
					sessionService.set('uid',uid);
					// $location.path('/user');
					$location.go("app.news");
				}	       
				else  {
					scope.msgtxt='incorrect information';
					// $location.path('/login');
					$location.go("app.login");
				}				   
			});
		},
		logout:function(){
			sessionService.destroy('uid');
			// $location.path('/login');
			$location.go("app.login");
		},
		islogged:function(){
			var $checkSessionServer=$http.post('http://safiahijab/data/check_session.php');
			return $checkSessionServer;
			/*
			if(sessionService.get('user')) return true;
			else return false;
			*/
		}
	}

});