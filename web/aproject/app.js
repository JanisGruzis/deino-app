var app = angular.module('deino', [
	'ngRoute',
	'ngAnimate',
	'ngAria',
	'ngMaterial',
	'mb-adaptive-backgrounds',
	'controllers',
	'angular-carousel',
	'ngScroll',
	'filters'
]);

var controllers = angular.module('controllers', []);
var filters = angular.module('filters', []);