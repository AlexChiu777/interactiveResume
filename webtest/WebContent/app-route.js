'use strict';

angular
	.module('appRoute', ['ngRoute'])
	.config(config);

function config ($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'sections/home/home.tpl.html'
	})
	.when('/work', {
			templateUrl: 'sections/work/work.tpl.html'
	})
	.when('/edu', {
			templateUrl: 'sections/edu/edu.tpl.html'
	})
	.when('/contact', {
			templateUrl: 'sections/contact/contact.tpl.html'
	})
		.otherwise({redirectTo: '/'});
}