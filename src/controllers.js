'use strict';

var frontController = angular.module('RecruitMeFrontControllers', []);

frontController.controller('MainPageCtrl', ['$scope', '$http', function($scope, $http) {
  	$http.get('http://blackwood.liabus.com/api/jobs/public').success(function(data) {
	    $scope.data = data;
	    console.log(data);
	  });
  }]);


frontController.controller('JobDetailCtrl', ['$scope','$http', '$routeParams',
	function($scope, $routeParams, $http) {
    	$scope.jobId = $routeParams.jobId;
    	console.log($scope.jobId );

    	var data;

    	$http.get('http://blackwood.liabus.com/api/jobs/public').success(function(data) {
	    	$scope.data = data;
	    	console.log(data);
	  	});

	    var index = 0;

	    for( var i = 0; i < 3; i++ ) {
	    	if( data[index]["name"] == $scope.jobId )
	    		index = i;
	    }
	    console.log( index );

		$scope.jobData = data[index];
  	}]);

frontController.controller('RegisterCtrl', ['$scope','$http',
	function RegisterCtrl($scope, $http) {
	}]);