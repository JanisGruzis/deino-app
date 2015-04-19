<<<<<<< HEAD
controllers.controller('QueryController', ['$rootScope', '$scope', '$http', '$routeParams',
    function ($rootScope, $scope, $http, $routeParams) {
        $scope.category = $routeParams.category;
            var url = 'http://api.deino.clevercode.lv/api/articles?limit=10&offset=&query=Adidas&from=';
        $http.get(url)
            .success(function (data) {
                $scope.queryArticles = data;
            });
    }])
=======
controllers.controller('QueryController', ['$rootScope', '$scope', '$http',
    function ($rootScope, $scope, $http) {

		var loadArticles = function() {
			var checkedSources = _.filter($rootScope.sources, function (item) {
				return item.checked;
			});

			var sourceIds = _.map(checkedSources, function (item) {
				return item.id;
			});

			var data = {
				sources: sourceIds,
				query: $scope.searchQuery,
				period: $scope.searchPeriod,
				offset: 0,
				limit: 10
			};

			var queryString = $.param(data);

			var url = 'http://api.deino.clevercode.lv/api/articles?' + queryString;

			$http.get(url)
				.success(function (data) {
					$scope.articles = data;
				});
		}

		loadArticles();

		$scope.$watch('searchQuery', function(newValue, oldValue){
			if (oldValue != newValue && $.trim(newValue))
			{
				loadArticles();
			}
		});

		$scope.$watch('searchPeriod', function(newValue, oldValue){
			if (oldValue != newValue && newValue != 'all')
			{
				loadArticles();
			}
		});

		$scope.$watch('sources', function(newValue, oldValue){
			if (oldValue != newValue)
			{
				loadArticles();
			}
		}, true);
    }]);
>>>>>>> 18ce96f81230a5f22b7a11d0fa12bca3dfe217ae
