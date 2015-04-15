var app = angular.module('deino', [
	'ngAnimate',
	'ngAria',
	'ngMaterial',
	'controllers'
]);

var controllers = angular.module('controllers', []);

// //$(document).ready(function(){
// 	var defaults      = {
// 	  selector:             '[data-adaptive-background="1"]',
// 	  parent:               null,
// 	  exclude:              [ 'rgb(0,0,0)', 'rgba(255,255,255)' ],
// 	  normalizeTextColor:   true,
// 	  normalizedTextColors:  {
// 		light:      "#fff",
// 		dark:       "#000"
// 	  },
// 	  lumaClasses:  {
// 		light:      "ab-light",
// 		dark:       "ab-dark"
// 	  }
// 	};
// 	$.adaptiveBackground.run(defaults);
// //});