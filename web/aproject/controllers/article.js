controllers.controller('ArticleController', ['$rootScope', '$scope', '$http',
	function ($rootScope, $scope, $http) {
		/**
		 * Load categorized cluster articles.
		 */
		var url = 'http://api.deino.clevercode.lv/api/articles_by_category';
		$http.get(url)
			.success(function (data) {
				$scope.catClustArticles = data;
			});
	}]);

