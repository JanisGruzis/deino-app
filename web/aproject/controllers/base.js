controllers.controller('BaseController', ['$rootScope', '$scope', '$http', '$location', '$timeout', '$mdSidenav', '$log',
	function ($rootScope, $scope, $http, $location, $timeout, $mdSidenav, $log) {

		$rootScope.gotoSearch = function(){
			$location.path('/query');
		};

		$rootScope.gotoStart = function(){
			$location.path('/');
		};

		$rootScope.doSearch = function(){
			if ($rootScope.search)
			{
				$rootScope.search();
			}
		};

		moment.locale('lv');

		/**
		 * Format date.
		 * @param date
		 * @returns {*}
		 */
		$rootScope.formatDate = function (date) {
			return moment(date).fromNow();
		};

		/**
		 * If device is mobile.
		 * @returns {boolean}
		 */
		$rootScope.isMobile = function () {
			if ($( window ).width() < 970 ){
				return true;
			} else {
				return false;
			};
		};

		/**
		 * Load categories.
		 */
		$http.get('http://api.deino.clevercode.lv/api/categories')
			.success(function (data) {
				$rootScope.categories = data;
			});

		$rootScope.toggleLeft = buildToggler('left');
		/**
		 * Build handler to open/close a SideNav; when animation finishes
		 * report completion in console
		 */
		function buildToggler(navID) {
			return function() {
				return $mdSidenav(navID).toggle()
					.then(function () {
						$log.debug("toggle " + navID + " is done");
					});
			}
		}
	}]);

