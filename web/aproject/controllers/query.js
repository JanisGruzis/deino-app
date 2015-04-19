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
