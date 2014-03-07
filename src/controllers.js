'use strict';

var frontController = angular.module('RecruitMeFrontControllers', []);

frontController.controller('MainPageCtrl', ['$scope', '$http', function($scope, $http) {
	var tdata;
  	$http.get('http://blackwood.liabus.com/api/jobs/public').success(function(data) {

	    for( var i = 0; i < data["jobs"].length; i++ ) {
  			data["jobs"][i].id = data.jobs[i]["_id"];
  		}
  		var tdata = data["jobs"];

  		$scope.data = tdata;
	  });
  }]);


frontController.controller('JobDetailCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
    	$http.get('http://blackwood.liabus.com/api/jobs/public').success(function(data) {
    		var jobId = $routeParams.jobId;
	    	var index = 0;
	    	var tdata = data["jobs"];

		    for( var i = 0; i < 3; i++ ) {
		    	if( tdata[index]["name"] == $scope.jobId )
		    		index = i;
		    }
			$scope.jobData = tdata[index];
	  	});	    
  	}]);

frontController.controller('RegisterCtrl', ['$scope','$http',
	function RegisterCtrl($scope, $http) {
	}]);