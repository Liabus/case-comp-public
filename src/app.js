'use strict';

var frontEnd = angular.module( 'RecruitMeFront', [
	'ngRoute',
	'RecruitMeFrontControllers'
	]);

frontEnd.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/', {
				templateUrl: 'partials/main.html',
				controller: 'MainPageCtrl'
			}).
			when('/jobs/:jobId', {
				templateUrl: 'partials/job-detail.html',
				controller: 'JobDetailCtrl'
			}).
			when('/register', {
				templateUrl: 'partials/register.html',
				controller: 'RegisterCtrl'
			}).
			otherwise({
				redirectTo: '/'
			});
	}]);