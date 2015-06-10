'use strict';

angular
	.module('appRoute', ['ngRoute'])
	.config(config);

function config ($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: './sections/home/home.tpl.html'
	})
	.when('/work', {
			templateUrl: './sections/work/work.tpl.html',
			controller: 'workController as workctrl'
	})
	.when('/edu', {
			templateUrl: './sections/edu/edu.tpl.html',
			controller: 'educationController as educationCtrl'
	})
	.when('/contact', {
			templateUrl: './sections/contact/contact.tpl.html'
	})
		.otherwise({redirectTo: '/'});
}