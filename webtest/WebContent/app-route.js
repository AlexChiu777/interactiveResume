'use strict';

angular
	.module('appRoute', ['ngRoute'])
	.config(config);

function config ($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: '../resume/sections/home/home.tpl.html'
	})
	.when('/work', {
			templateUrl: '../resume/sections/work/work.tpl.html',
			controller: 'workController as workctrl'
	})
	.when('/edu', {
			templateUrl: '../resume/sections/edu/edu.tpl.html',
			controller: 'educationController as educationCtrl'
	})
	.when('/contact', {
			templateUrl: '../resume/sections/contact/contact.tpl.html'
	})
		.otherwise({redirectTo: '/'});
}