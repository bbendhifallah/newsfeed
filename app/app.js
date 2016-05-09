var app = angular.module('feedApp', ['ngRoute','ngCookies']);

angular.module("feedApp").config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl : 'app/views/news.html',
		controller  : 'NewsController'
	})
	.when('/details', {
		templateUrl : 'app/views/details.html',
		controller  : 'DetailsController'
	})
	.when('/match/:country', {
		templateUrl : 'app/views/match.html',
		controller  : 'MatchController'
	})
	.when('/spain', {
		templateUrl : 'app/views/spain.html',
		controller  : 'SpainController'
	})
	.otherwise({
		redirectTo: '/'
	});
});