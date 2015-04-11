/**
 * Creates angular application.
 */
var app = angular.module('patronage', [
	'ngRoute',
	'filters',
	'directives',
	'controllers',
]);

var controllers = angular.module('controllers', []);
var filters = angular.module('filters', []);
var directives = angular.module('directives', []);
