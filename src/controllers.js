'use strict';

var frontController = angular.module('RecruitMeFrontControllers', []);

frontController.controller('MainPageCtrl', ['$scope', '$http', function($scope) {
  	$scope.data = [
  					{
						"name": "CEO",
						"description": "Be the boss of the company",
						"location": "Chicago",
						"type": "Full Time",
						"id": "CEO"
					},
					{
						"name": "Engineer",
						"description": "Do engineer things",
						"location": "Chicago",
						"type": "Full Time",
						"id": "engineer"
					},
					{
						"name": "Salesman",
						"description": "Do sales things",
						"location": "Chicago",
						"type": "Full Time",
						"id": "sales"
					}
				];
  }]);


frontController.controller('JobDetailCtrl', ['$scope','$http', '$routeParams',
	function($scope, $routeParams, $http) {
    	$scope.jobId = $routeParams.jobId;
    	console.log($scope.jobId );

    	var data = [
  					{
						"name": "CEO",
						"description": "Be the boss of the company",
						"location": "Chicago",
						"type": "Full Time",
						"experience": "Lots",
						"id": "CEO"
					},
					{
						"name": "Engineer",
						"description": "Do engineer things",
						"location": "Chicago",
						"type": "Full Time",
						"experience": "Lots",
						"id": "engineer"
					},
					{
						"name": "Salesman",
						"description": "Do sales things",
						"location": "Chicago",
						"type": "Full Time",
						"experience": "Lots",
						"id": "sales"
					}
				];

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