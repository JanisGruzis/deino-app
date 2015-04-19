controllers.controller('QueryController', ['$rootScope', '$scope', '$http',
    function ($rootScope, $scope, $http) {

		var offset = 0;
		var limit = 10;
		$scope.articles = [];
		var loading = false;

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
				offset: offset,
				limit: limit
			};

			var queryString = $.param(data);

			var url = 'http://api.deino.clevercode.lv/api/articles?' + queryString;

			loading = true;
			$http.get(url)
				.success(function (data) {
					loading = false;
					data = _.toArray(data);
					$scope.articles = $scope.articles.concat(data);
					if (data.length > 0)
					{
						offset += limit;
					}
				})
				.error(function(){
					loading = false;
				})
			;
		}

		loadArticles();

		/**
		 * When content scrolled to bottom load data.
		 */
		$rootScope.loadedBottom = function(){
			if (!loading)
			{
				loadArticles();
			}
		};

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
