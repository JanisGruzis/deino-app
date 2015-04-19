controllers.controller('BaseController', ['$rootScope', '$scope', '$http', '$location', '$timeout', '$mdSidenav', '$log',
	function ($rootScope, $scope, $http, $location, $timeout, $mdSidenav, $log) {

		/**
		 * Goto start.
		 */
		$rootScope.gotoStart = function(){
			$location.path('/');
		};

		/* set moment locale */

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

				$scope.$watch('categories', function(newValue, oldValue){
					if (oldValue != newValue)
					{
						loadCategoryList();
					}
				}, true);
			});

		/**
		 * Load sources.
		 */
		$http.get('http://api.deino.clevercode.lv/api/sources')
			.success(function (data) {
				$rootScope.sources = data;

				$scope.$watch('sources', function(newValue, oldValue){
					if (oldValue != newValue)
					{
						loadSearchList();
					}
				}, true);
			});

		/**
		 * Default search period shows all articles.
		 * @type {string}
		 */
		$rootScope.searchPeriod = 'all';

		/**
		 * Load category list.
		 */
		var loadCategoryList = function(){
			$location.path('/category');
		};

		var loadSearchList = function(){
			$location.path('/query');
		};

		$scope.$watch('searchQuery', function(newValue, oldValue){
			if (oldValue != newValue && $.trim(newValue))
			{
				loadSearchList();
			}
		});

		$scope.$watch('searchPeriod', function(newValue, oldValue){
			if (oldValue != newValue && newValue != 'all')
			{
				loadSearchList();
			}
		});

		/**
		 * When content scrolled to bottom.
		 */
		$('.app-content').first().parent().on('scroll', function(e){
			var elem = $(e.currentTarget);
			if (elem[0].scrollHeight - elem.scrollTop() - elem.outerHeight() < 10)
			{
				if (_.isFunction($rootScope.loadedBottom)) {
					$rootScope.loadedBottom();
				}
			}
		});

		$scope.toggleLeft = buildToggler('left');
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

