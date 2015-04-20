controllers.controller('ArticleController', ['$rootScope', '$scope', '$http',
	function ($rootScope, $scope, $http) {
		/**
		 * Load categorized cluster articles.
		 */
		var url = 'http://api.deino.clevercode.lv/api/articles_by_category';
		$http.get(url)
			.success(function (data) {
				//Dirtiest hack for tests
				var stub_data= data;
				stub_data[0] = data.local;
				$rootScope.categories[0] = {name:'Populārākas'};
				$scope.catClustArticles = stub_data;
			});
	}]);

